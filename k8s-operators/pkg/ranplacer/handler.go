package ranplacer

import (
	"context"
	"fmt"
	"time"

	"github.com/go-logr/logr"
	corev1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/types"
	ctrl "sigs.k8s.io/controller-runtime"
	"sigs.k8s.io/controller-runtime/pkg/client"

	"github.com/CROSSHAUL/RANPlacer/k8s-operators/pkg/utils/k8s"

	"github.com/CROSSHAUL/RANPlacer/k8s-operators/api/v1alpha1"
	"github.com/CROSSHAUL/RANPlacer/k8s-operators/pkg/ranplacer/algorithm"
	"github.com/CROSSHAUL/RANPlacer/k8s-operators/pkg/utils"
	"github.com/CROSSHAUL/RANPlacer/k8s-operators/pkg/utils/errors"
)

func NewHandler(ctx context.Context, client client.Client, scheme *runtime.Scheme, log logr.Logger,
	req ctrl.Request) *Handler {
	return &Handler{
		ctx:     ctx,
		client:  client,
		scheme:  scheme,
		log:     log,
		request: req,
	}
}

// Handler is responsible for executing the operations of the RANPlacer component
type Handler struct {
	ctx              context.Context
	client           client.Client
	log              logr.Logger
	request          ctrl.Request
	scheme           *runtime.Scheme
	algorithmHandler algorithm.Handler
}

func (h *Handler) Sync(ranPlacer *v1alpha1.RANPlacer) error {
	if ranPlacer.Status.State == v1alpha1.FinishedState || ranPlacer.Status.State == v1alpha1.ErrorState {
		h.log.Info("current state should not be reconciled, skipping reconcile", "state", ranPlacer.Status.State)
		return nil
	}

	algorithmHandler := algorithm.NewAlgorithmHandler(h.client, h.log)

	// Call algorithm
	if ranPlacer.Status.Token == "" {
		// Get algorithm input
		input, err := algorithmHandler.GetInputs(ranPlacer)
		if err != nil {
			return fmt.Errorf("error getting algorithm input: %w", err)
		}

		token, err := algorithmHandler.Trigger(input)
		if err != nil {
			return fmt.Errorf("error calling algorithm: %w", err)
		}

		ranPlacer.Status.Token = token
		ranPlacer.Status.Algorithm.StartTimestamp = utils.GetTimePnt(metav1.NewTime(time.Now()))

		// update status
		if err := h.client.Status().Update(context.Background(), ranPlacer); err != nil {
			return fmt.Errorf("error updating RanPlacer status: %w", err)
		}

		return nil
	}

	h.log.Info("getting algorithm result", "token", ranPlacer.Status.Token)
	output, err := algorithmHandler.GetResult(ranPlacer.Status.Token)
	if err != nil {
		return fmt.Errorf("error getting algorithm result: %w", err)
	}

	if output.Status == algorithm.Failed || output.Status == algorithm.BadOutput || output.Status == algorithm.Completed {
		// TODO: add error message in algorithm response and add it to the error from RANPlacer

		if ranPlacer.Status.Algorithm.EndTimestamp == nil {
			ranPlacer.Status.Algorithm.EndTimestamp = utils.GetTimePnt(metav1.NewTime(time.Now()))
			ranPlacer.Status.Algorithm.DurationInSeconds = algorithm.GetDurationInSeconds(ranPlacer)
		}

		if output.Status == algorithm.Failed || output.Status == algorithm.BadOutput {
			ranPlacer.Status.State = v1alpha1.ErrorState
			ranPlacer.Status.Algorithm.ErrorMessage = "algorithm execution failed"
			if output.Status == algorithm.BadOutput {
				ranPlacer.Status.Algorithm.ErrorMessage = "algorithm output in bad format"
			}

			if err := h.client.Status().Update(context.Background(), ranPlacer); err != nil {
				return fmt.Errorf("error updating RanPlacer status: %w", err)
			}

			h.log.Info("algorithm error", "status", output.Status)
			return errors.NewDoNotRequeueError("algorithm execution failed")
		}
	}

	if output.Status == algorithm.Running {
		h.log.Info("algorithm job not finished")

		ranPlacer.Status.State = v1alpha1.AlgorithmRunningState
		ranPlacer.Status.Algorithm.DurationInSeconds = algorithm.GetDurationInSeconds(ranPlacer)

		// TODO: understand if update is requeueing the ranplacer
		if err := h.client.Status().Update(context.Background(), ranPlacer); err != nil {
			return fmt.Errorf("error updating RanPlacer status: %w", err)
		}

		return nil
	}

	h.log.Info("algorithm result", "result", fmt.Sprintf("%v", output.Result))

	err = h.place(ranPlacer, output.Result)
	if err != nil {
		return fmt.Errorf("error placing algorithm output: %w", err)
	}

	ranPlacer.Status.State = v1alpha1.FinishedState
	if err := h.client.Status().Update(context.Background(), ranPlacer); err != nil {
		return fmt.Errorf("error updating RanPlacer status: %w", err)
	}

	return nil
}

func (h *Handler) place(ranPlacer *v1alpha1.RANPlacer, positions []algorithm.ChainPosition) error {

	for _, pos := range positions {
		key := types.NamespacedName{
			Namespace: ranPlacer.Namespace,
			Name:      fmt.Sprintf("%s-%s", ranPlacer.Name, pos.ID),
		}

		ranDeployer := &v1alpha1.RANDeployer{}
		exists, err := k8s.GetRanDeployer(h.client, key, ranDeployer)
		if err != nil {
			return fmt.Errorf("error checking if ran deployer exists: %w", err)
		}

		if !exists {
			h.log.Info("Creating ran deployer...", "randeployer", ranDeployer.Name)
			ranDeployer, err = h.getRanDeployerTemplate(pos, key, ranPlacer.Spec.CoreIP)
			if err != nil {
				return fmt.Errorf("error getting ran deployer template: %w", err)
			}
			if err := ctrl.SetControllerReference(ranPlacer, ranDeployer, h.scheme); err != nil {
				return fmt.Errorf("error setting ran deployer owner reference: %w", err)
			}

			err := h.client.Create(context.Background(), ranDeployer)
			if err != nil {
				return fmt.Errorf("error creating ran deployer %s: %w", key.Name, err)
			}
		}
	}

	return nil
}

func (h *Handler) getRanDeployerTemplate(pos algorithm.ChainPosition, key types.NamespacedName,
	coreIP string) (*v1alpha1.RANDeployer, error) {

	nodeList := &corev1.NodeList{}
	if err := k8s.ListNodes(h.client, nodeList); err != nil {
		return nil, fmt.Errorf("error listing nodes: %w", err)
	}

	cuNode, duNode, ruNode := "", "", ""

	for _, node := range nodeList.Items {
		nodeNumber, ok := node.Labels[algorithm.NodeNumberLabel]
		if !ok {
			return nil, fmt.Errorf("error getting value from %s label", algorithm.NodeNumberLabel)
		}

		if nodeNumber == pos.CU {
			cuNode = node.Name
		}

		if nodeNumber == pos.DU {
			duNode = node.Name
		}

		if nodeNumber == pos.RU {
			ruNode = node.Name
		}
	}

	return &v1alpha1.RANDeployer{
		ObjectMeta: metav1.ObjectMeta{
			Name:      key.Name,
			Namespace: key.Namespace,
		},
		Spec: v1alpha1.RANDeployerSpec{
			CoreIP: coreIP,
			CUNode: cuNode,
			DUNode: duNode,
			RUNode: ruNode,
		},
	}, nil
}
