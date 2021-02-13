package ranplacer

import (
	"context"
	"fmt"
	"time"

	"github.com/CROSSHAUL/RANPlacer/k8s-operators/api/v1alpha1"
	"github.com/CROSSHAUL/RANPlacer/k8s-operators/pkg/ranplacer/algorithm"
	"github.com/CROSSHAUL/RANPlacer/k8s-operators/pkg/utils"
	"github.com/CROSSHAUL/RANPlacer/k8s-operators/pkg/utils/errors"
	"github.com/go-logr/logr"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	ctrl "sigs.k8s.io/controller-runtime"
	"sigs.k8s.io/controller-runtime/pkg/client"
)

func NewHandler(ctx context.Context, client client.Client, log logr.Logger,
	req ctrl.Request) *Handler {
	return &Handler{
		ctx:     ctx,
		client:  client,
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
	algorithmHandler algorithm.Handler
}

func (h *Handler) Sync(ranPlacer *v1alpha1.RANPlacer) error {

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

	output, err := algorithmHandler.GetResult(ranPlacer.Status.Token)
	if err != nil {
		return fmt.Errorf("error getting algorithm result: %w", err)
	}

	if output.Status == algorithm.Failed || output.Status == algorithm.Completed {
		// TODO: add error message in algorithm response and add it to the error from RANPlacer
		ranPlacer.Status.Algorithm.EndTimestamp = utils.GetTimePnt(metav1.NewTime(time.Now()))
		ranPlacer.Status.Algorithm.DurationInSeconds = algorithm.GetDurationInSeconds(ranPlacer)

		if output.Status == algorithm.Failed {
			ranPlacer.Status.State = v1alpha1.ErrorState
			ranPlacer.Status.LastErrorMessage = "algorithm execution failed"

			if err := h.client.Status().Update(context.Background(), ranPlacer); err != nil {
				return fmt.Errorf("error updating RanPlacer status: %w", err)
			}

			return errors.NewDoNotRequeueError("algorithm execution failed")
		}
	}

	if output.Status == algorithm.Running {
		h.log.Info("algorithm job not finished")

		ranPlacer.Status.State = v1alpha1.AlgorithmRunningState
		ranPlacer.Status.Algorithm.DurationInSeconds = algorithm.GetDurationInSeconds(ranPlacer)

		if err := h.client.Status().Update(context.Background(), ranPlacer); err != nil {
			return fmt.Errorf("error updating RanPlacer status: %w", err)
		}

		return nil
	}

	ranPlacer.Status.State = v1alpha1.FinishedState
	ranPlacer.Status.Algorithm.DurationInSeconds = algorithm.GetDurationInSeconds(ranPlacer)

	if err := h.client.Status().Update(context.Background(), ranPlacer); err != nil {
		return fmt.Errorf("error updating RanPlacer status: %w", err)
	}

	h.log.Info("result", "result", fmt.Sprintf("%v", output.Result))

	err = h.place(output)
	if err != nil {
		return err
	}

	return nil
}

func (h *Handler) place(positions *algorithm.Output) error {
	return nil
}
