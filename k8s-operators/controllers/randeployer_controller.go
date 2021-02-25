/*


Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

package controllers

import (
	"context"
	"errors"
	"fmt"
	"os"
	"time"

	"github.com/go-logr/logr"
	appsv1 "k8s.io/api/apps/v1"
	v1 "k8s.io/api/core/v1"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/labels"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/types"
	"k8s.io/client-go/tools/record"
	ctrl "sigs.k8s.io/controller-runtime"
	"sigs.k8s.io/controller-runtime/pkg/client"
	"sigs.k8s.io/controller-runtime/pkg/controller"
	"sigs.k8s.io/controller-runtime/pkg/predicate"

	"github.com/CROSSHAUL/RANPlacer/k8s-operators/pkg/utils"

	"github.com/CROSSHAUL/RANPlacer/k8s-operators/pkg/utils/k8s"

	ranv1alpha1 "github.com/CROSSHAUL/RANPlacer/k8s-operators/api/v1alpha1"
)

const (
	logRanDeployerComponentKey = "component"
	logResourceName            = "resourceName"

	lteSoftModemImageName = "lte_softmodem_k8s"
	ueSoftModemImageName  = "ue_softmodem_k8s"

	dockerRepositoryEnv = "DOCKER_REPOSITORY"

	configPath = "/config"

	resyncPeriod = 30 * time.Second
)

// RANDeployerReconciler reconciles a RANDeployer object
type RANDeployerReconciler struct {
	client.Client
	Log      logr.Logger
	Scheme   *runtime.Scheme
	Recorder record.EventRecorder
}

// +kubebuilder:rbac:groups=ran.unisinos,resources=randeployers,verbs=get;list;watch;create;update;patch;delete
// +kubebuilder:rbac:groups=ran.unisinos,resources=randeployers/status,verbs=get;update;patch
// +kubebuilder:rbac:groups="",resources=configmaps,verbs=get;list;create;update;patch;delete;watch
// +kubebuilder:rbac:groups="",resources=pods,verbs=get;list;create;update;patch;delete;watch
// +kubebuilder:rbac:groups=apps,resources=deployments,verbs=get;list;create;update;patch;delete;watch
// +kubebuilder:rbac:groups="",resources=events,verbs=create;patch

func (r *RANDeployerReconciler) Reconcile(ctx context.Context, req ctrl.Request) (ctrl.Result, error) {
	log := r.Log.WithValues("randeployer", req.NamespacedName)

	log.Info("Starting reconcile")
	// your logic here
	ranDeployer := &ranv1alpha1.RANDeployer{}
	if err := r.Get(ctx, req.NamespacedName, ranDeployer); err != nil {
		log.Error(err, "unable to fetch Remote Unit")
		return ctrl.Result{}, client.IgnoreNotFound(err)
	}

	if err := r.syncConfigMaps(ranDeployer, log); err != nil {
		log.Error(err, "error syncing config maps")
		r.Recorder.Event(ranDeployer, v1.EventTypeWarning, "configmaps", err.Error())
		return ctrl.Result{}, err
	}

	if err := r.syncDeployments(ranDeployer, log); err != nil {
		log.Error(err, "error syncing pods")
		r.Recorder.Event(ranDeployer, v1.EventTypeWarning, "pods", err.Error())
		return ctrl.Result{}, err
	}

	if err := r.syncStatus(ranDeployer); err != nil {
		log.Error(err, "error updating status")
		return ctrl.Result{}, err
	}

	r.Recorder.Event(ranDeployer, v1.EventTypeNormal, "Sync", "Synced successfully")
	return ctrl.Result{Requeue: true, RequeueAfter: resyncPeriod}, nil
}

func (r *RANDeployerReconciler) SetupWithManager(mgr ctrl.Manager) error {
	return ctrl.NewControllerManagedBy(mgr).
		WithOptions(controller.Options{MaxConcurrentReconciles: 5}).
		For(&ranv1alpha1.RANDeployer{}).
		WithEventFilter(predicate.GenerationChangedPredicate{}).
		Complete(r)
}

func (r *RANDeployerReconciler) syncStatus(instance *ranv1alpha1.RANDeployer) error {
	noErrors := true
	cuPod := &v1.Pod{}
	if exists, err := r.getCUPod(instance, cuPod); err != nil {
		return fmt.Errorf("error getting cu pod: %w", err)
	} else if exists {
		instance.Status.CUNode = cuPod.Spec.NodeName
		instance.Status.CUIP = cuPod.Status.PodIP
		if cuPod.Status.Phase != v1.PodRunning {
			noErrors = false
			r.Recorder.Event(instance, v1.EventTypeWarning, "CU", fmt.Sprintf("cu pod in state '%s'", cuPod.Status.Phase))
		}
	}

	duPod := &v1.Pod{}
	if exists, err := r.getDUPod(instance, duPod); err != nil {
		return fmt.Errorf("error getting du pod: %w", err)
	} else if exists {
		instance.Status.DUNode = duPod.Spec.NodeName
		instance.Status.DUIP = duPod.Status.PodIP
		if duPod.Status.Phase != v1.PodRunning {
			noErrors = false
			r.Recorder.Event(instance, v1.EventTypeWarning, "DU", fmt.Sprintf("du pod in state '%s'", duPod.Status.Phase))
		}
	}

	ruPod := &v1.Pod{}
	if exists, err := r.getRUPod(instance, ruPod); err != nil {
		return fmt.Errorf("error getting ru pod: %w", err)
	} else if exists {
		instance.Status.RUNode = ruPod.Spec.NodeName
		instance.Status.RUIP = ruPod.Status.PodIP
		if ruPod.Status.Phase != v1.PodRunning {
			noErrors = false
			r.Recorder.Event(instance, v1.EventTypeWarning, "RU", fmt.Sprintf("ru pod in state '%s'", ruPod.Status.Phase))
		}
	}

	if noErrors {
		instance.Status.State = ranv1alpha1.RanDeployerStateRunning
	} else {
		instance.Status.State = ranv1alpha1.RanDeployerStateError
	}

	if err := r.Status().Update(context.Background(), instance); err != nil {
		return fmt.Errorf("error updating status: %w", err)
	}

	return nil
}

func (r *RANDeployerReconciler) syncDeployments(instance *ranv1alpha1.RANDeployer, log logr.Logger) error {
	for split := range Splits {
		log.Info("syncing deployment", logRanDeployerComponentKey, split)
		splitPiece := SplitPiece(split)
		objectKey := getSplitObjectKey(instance, splitPiece)

		deployment := &appsv1.Deployment{}
		exists, err := k8s.GetDeployment(r.Client, objectKey, deployment)
		if err != nil {
			return fmt.Errorf("error getting deployment %s: %w", objectKey.Name, err)
		}

		if exists {
			log.Info("already exists...", logRanDeployerComponentKey, split, logResourceName, deployment.Name)
			continue
		}

		deployment = getSplitDeployment(instance, splitPiece)
		if err := ctrl.SetControllerReference(instance, deployment, r.Scheme); err != nil {
			return fmt.Errorf("error setting config map owner reference: %w", err)
		}

		if err := r.Create(context.Background(), deployment); err != nil {
			return fmt.Errorf("error creating deployment %s: %w", deployment.Name, err)
		}

		log.Info("deployment created", logRanDeployerComponentKey, split, logResourceName, deployment.Name)
	}
	return nil
}

func getImageName(splitName SplitPiece) string {
	dockerRepository := os.Getenv(dockerRepositoryEnv)
	imageName := ""
	switch splitName {
	case CU, DU:
		imageName = lteSoftModemImageName
	case RU:
		imageName = ueSoftModemImageName
	}
	return fmt.Sprintf("%s/%s:1", dockerRepository, imageName)
}

func (r *RANDeployerReconciler) syncConfigMaps(instance *ranv1alpha1.RANDeployer, log logr.Logger) error {
	if err := r.syncTemplatesConfigMap(instance.Namespace, log); err != nil {
		return fmt.Errorf("error syncing template config maps: %w", err)
	}

	if err := r.syncValuesConfigMap(instance, log); err != nil {
		return fmt.Errorf("error syncing values config maps: %w", err)
	}

	log.Info("successfully synced")

	return nil
}

func (r *RANDeployerReconciler) syncTemplatesConfigMap(splitNamespace string, log logr.Logger) error {
	for _, templateName := range TemplateConfigMaps {
		operatorObjectKey := types.NamespacedName{
			Namespace: operatorNamespace,
			Name:      templateName,
		}

		cmOperator := &v1.ConfigMap{}
		exists, err := k8s.GetConfigMap(r.Client, operatorObjectKey, cmOperator)
		if err != nil || !exists {
			return fmt.Errorf("error getting template config map %s from the operator namespace: %w",
				operatorObjectKey.Name, err)
		}

		objectKey := types.NamespacedName{
			Namespace: splitNamespace,
			Name:      templateName,
		}
		// TODO: Use cache
		cm := &v1.ConfigMap{}
		exists, err = k8s.GetConfigMap(r.Client, objectKey, cm)
		if err != nil {
			return fmt.Errorf("error getting config map %s from namespace %s: %w", objectKey.Name, objectKey.Namespace, err)
		}

		if exists {
			if cm.Data["template"] == cmOperator.Data["template"] {
				continue
			}

			cm.Data["template"] = cmOperator.Data["template"]
			if err := r.Update(context.Background(), cm); err != nil {
				return fmt.Errorf("error updating config map %s in namespace %s: %w", cm.Name, cm.Namespace, err)
			}
		} else {
			cm.Name = objectKey.Name
			cm.Namespace = objectKey.Namespace
			cm.Data = make(map[string]string)
			cm.Data["template"] = cmOperator.Data["template"]
			if err := r.Create(context.Background(), cm); err != nil {
				return fmt.Errorf("error creating config map %s in namespace %s: %w", cm.Name, cm.Namespace, err)
			}
		}
	}

	log.Info("successfully synced template config maps")

	return nil
}

func (r *RANDeployerReconciler) syncValuesConfigMap(instance *ranv1alpha1.RANDeployer, log logr.Logger) error {
	for split := range Splits {
		splitPiece := SplitPiece(split)
		objectKey := getSplitObjectKey(instance, splitPiece)

		log.Info("reconciling config map values for split", logRanDeployerComponentKey, string(splitPiece))
		cm := &v1.ConfigMap{}
		exists, err := k8s.GetConfigMap(r.Client, objectKey, cm)
		if err != nil {
			return fmt.Errorf("error getting config map %s: %w", objectKey.String(), err)
		}

		cmContent, err := r.getConfigMapContent(splitPiece, instance)
		if err != nil {
			return fmt.Errorf("error getting config map content: %w", err)
		}

		if exists {
			// update config map
			if cmContent == cm.Data["values"] {
				continue
			}

			if cm.Data == nil {
				cm.Data = make(map[string]string)
			}
			cm.Data["values"] = cmContent
			err = r.Update(context.Background(), cm)
			if err != nil {
				return fmt.Errorf("error updating config map %s: %w", cm.Name, err)
			}
		} else {
			cm.Name = objectKey.Name
			cm.Namespace = objectKey.Namespace
			if err := ctrl.SetControllerReference(instance, cm, r.Scheme); err != nil {
				return fmt.Errorf("error setting config map owner reference: %w", err)
			}

			cm.Data = make(map[string]string)
			cm.Data["values"] = cmContent
			err = r.Create(context.Background(), cm)
			if err != nil {
				return fmt.Errorf("error creating config map %s: %w", cm.Name, err)
			}
		}
	}

	return nil
}

func (r *RANDeployerReconciler) getConfigMapContent(split SplitPiece, instance *ranv1alpha1.RANDeployer) (string, error) {
	switch split {
	case CU:
		return r.getCUConfigMapContent(instance)
	case DU:
		return r.getDUConfigMapContent(instance)
	case RU:
		return r.getRUConfigMapContent(instance)
	}

	return "", fmt.Errorf("invalid split provided")
}

func (r *RANDeployerReconciler) getCUConfigMapContent(instance *ranv1alpha1.RANDeployer) (string, error) {
	cmContent := &cuContent{}

	cuPod := &v1.Pod{}
	exists, err := r.getCUPod(instance, cuPod)
	if err != nil {
		return "", fmt.Errorf("error getting CU config map content from cu pod: %w", err)
	}

	if exists {
		cmContent.LocalAddress = cuPod.Status.PodIP
	}

	duPod := &v1.Pod{}
	exists, err = r.getDUPod(instance, duPod)
	if err != nil {
		return "", fmt.Errorf("error getting CU config map content from du pod: %w", err)
	}

	if exists {
		cmContent.SouthAddress = duPod.Status.PodIP
	}

	cmContent.UPF = instance.Spec.CoreIP

	return fmt.Sprintf(cuConfigMapContentTemplate, cmContent.UPF, cmContent.LocalAddress, cmContent.SouthAddress), nil
}

func (r *RANDeployerReconciler) getDUConfigMapContent(instance *ranv1alpha1.RANDeployer) (string, error) {
	cmContent := &duContent{}

	cuPod := &v1.Pod{}
	exists, err := r.getCUPod(instance, cuPod)
	if err != nil {
		return "", fmt.Errorf("error getting DU config map content from cu pod: %w", err)
	}

	if exists {
		cmContent.NorthAddress = cuPod.Status.PodIP
	}

	duPod := &v1.Pod{}
	exists, err = r.getDUPod(instance, duPod)
	if err != nil {
		return "", fmt.Errorf("error getting DU config map content from du pod: %w", err)
	}

	if exists {
		cmContent.LocalAddress = duPod.Status.PodIP
	}

	ruPod := &v1.Pod{}
	exists, err = r.getRUPod(instance, ruPod)
	if err != nil {
		return "", fmt.Errorf("error getting DU config map content from ru pod: %w", err)
	}

	if exists {
		cmContent.SouthAddress = ruPod.Status.PodIP
	}

	return fmt.Sprintf(duConfigMapContentTemplate, cmContent.NorthAddress, cmContent.LocalAddress,
		cmContent.SouthAddress), nil
}

func (r *RANDeployerReconciler) getRUConfigMapContent(instance *ranv1alpha1.RANDeployer) (string, error) {
	cmContent := &ruContent{}

	duPod := &v1.Pod{}
	exists, err := r.getDUPod(instance, duPod)
	if err != nil {
		return "", fmt.Errorf("error getting RU config map content from du pod: %w", err)
	}

	if exists {
		cmContent.NorthAddress = duPod.Status.PodIP
	}

	ruPod := &v1.Pod{}
	exists, err = r.getRUPod(instance, ruPod)
	if err != nil {
		return "", fmt.Errorf("error getting RU config map content from ru pod: %w", err)
	}

	if exists {
		cmContent.LocalAddress = ruPod.Status.PodIP
	}

	return fmt.Sprintf(ruConfigMapContentTemplate, cmContent.NorthAddress, cmContent.LocalAddress), nil
}

// TODO: Use Informer/Cache
func (r *RANDeployerReconciler) getCUPod(instance *ranv1alpha1.RANDeployer, pod *v1.Pod) (bool, error) {
	exists, err := r.getPod(instance, CU, pod)
	if err != nil {
		return false, fmt.Errorf("error getting cu pod: %w", err)
	}
	return exists, nil
}

func (r *RANDeployerReconciler) getDUPod(instance *ranv1alpha1.RANDeployer, pod *v1.Pod) (bool, error) {
	exists, err := r.getPod(instance, DU, pod)
	if err != nil {
		return false, fmt.Errorf("error getting du pod: %w", err)
	}
	return exists, nil
}

func (r *RANDeployerReconciler) getRUPod(instance *ranv1alpha1.RANDeployer, pod *v1.Pod) (bool, error) {
	exists, err := r.getPod(instance, RU, pod)
	if err != nil {
		return false, fmt.Errorf("error getting du pod: %w", err)
	}
	return exists, nil
}

func (r *RANDeployerReconciler) getPod(instance *ranv1alpha1.RANDeployer, split SplitPiece, pod *v1.Pod) (bool, error) {
	labelSelector, err := labels.Parse(fmt.Sprintf("split=%s,split-owner=%s", string(split), instance.Name))
	if err != nil {
		return false, fmt.Errorf("error getting label selector: %w", err)
	}

	listOptions := &client.ListOptions{
		Namespace:     instance.Namespace,
		LabelSelector: labelSelector,
	}

	podList := &v1.PodList{}
	err = r.List(context.Background(), podList, listOptions)
	if err != nil {
		if apierrors.IsNotFound(err) {
			return false, nil
		}
		return false, fmt.Errorf("error getting pods: %w", err)
	}

	if len(podList.Items) > 1 {
		return false, errors.New("incorrect number of pods, currently only 1 should be available")
	}

	if len(podList.Items) == 0 {
		return false, nil
	}

	*pod = podList.Items[0]
	return true, nil
}

func getSplitObjectKey(instance *ranv1alpha1.RANDeployer, split SplitPiece) types.NamespacedName {
	return types.NamespacedName{
		Namespace: instance.Namespace,
		Name:      getResourceName(instance, split),
	}
}

func getResourceName(instance *ranv1alpha1.RANDeployer, split SplitPiece) string {
	return fmt.Sprintf("%s-%s", split, instance.Name)
}

func getSplitDeployment(instance *ranv1alpha1.RANDeployer, split SplitPiece) *appsv1.Deployment {
	objectKey := getSplitObjectKey(instance, split)
	podLabels := map[string]string{
		"split":       string(split),
		"split-owner": instance.Name,
	}
	boolTrue := true
	deployment := &appsv1.Deployment{
		ObjectMeta: metav1.ObjectMeta{
			Name:      objectKey.Name,
			Namespace: objectKey.Namespace,
		},
		Spec: appsv1.DeploymentSpec{
			Selector: &metav1.LabelSelector{
				MatchLabels: podLabels,
			},
			Template: v1.PodTemplateSpec{
				ObjectMeta: metav1.ObjectMeta{
					Labels: podLabels,
				},
				Spec: v1.PodSpec{
					Containers: []v1.Container{
						{
							Name:            string(split),
							Image:           getImageName(split),
							ImagePullPolicy: v1.PullAlways,
							VolumeMounts: []v1.VolumeMount{
								{
									Name:      "template",
									MountPath: configPath + "/template",
								},
								{
									Name:      "values",
									MountPath: configPath + "/values",
								},
							},
							Ports: getContainerPorts(split),
							SecurityContext: &v1.SecurityContext{
								Capabilities: &v1.Capabilities{
									Add: []v1.Capability{
										"NET_ADMIN",
									},
								},
								Privileged: &boolTrue,
							},
							Env: []v1.EnvVar{
								{
									Name:  "SplitPiece",
									Value: string(split),
								},
							},
							Resources: v1.ResourceRequirements{
								Limits: v1.ResourceList{
									v1.ResourceMemory: *utils.NewQuantity(SplitMemoryLimitValue),
									v1.ResourceCPU:    *utils.NewQuantity(SplitCPULimitValue),
								},
								Requests: v1.ResourceList{
									v1.ResourceMemory: *utils.NewQuantity(SplitMemoryRequestValue),
									v1.ResourceCPU:    *utils.NewQuantity(SplitCPURequestValue),
								},
							},
						},
					},
					Volumes: []v1.Volume{
						{
							Name: "template",
							VolumeSource: v1.VolumeSource{
								ConfigMap: &v1.ConfigMapVolumeSource{
									LocalObjectReference: v1.LocalObjectReference{
										Name: TemplateConfigMaps[split],
									},
									Items: []v1.KeyToPath{
										{
											Key:  "template",
											Path: "template.conf",
										},
									},
								},
							},
						},
						{
							Name: "values",
							VolumeSource: v1.VolumeSource{
								ConfigMap: &v1.ConfigMapVolumeSource{
									LocalObjectReference: v1.LocalObjectReference{
										Name: objectKey.Name,
									},
									Items: []v1.KeyToPath{
										{
											Key:  "values",
											Path: "values.yaml",
										},
									},
								},
							},
						},
					},
				},
			},
		},
	}

	nodeName := ""
	switch split {
	case CU:
		nodeName = instance.Spec.CUNode
	case DU:
		nodeName = instance.Spec.DUNode
	case RU:
		nodeName = instance.Spec.RUNode
	}

	if nodeName != "" {
		deployment.Spec.Template.Spec.NodeName = nodeName
	}

	return deployment
}

func getContainerPorts(split SplitPiece) []v1.ContainerPort {
	ports := SplitPorts[split]
	containerPorts := []v1.ContainerPort{}
	for _, port := range ports {
		containerPort := v1.ContainerPort{
			Name:          fmt.Sprintf("port-%d", port.number),
			ContainerPort: port.number,
			Protocol:      port.protocol,
		}
		containerPorts = append(containerPorts, containerPort)
	}

	return containerPorts
}
