package k8s

import (
	"context"
	"fmt"

	appsv1 "k8s.io/api/apps/v1"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/types"
	clientset "k8s.io/client-go/kubernetes"

	"github.com/CROSSHAUL/RANPlacer/k8s-operators/api/v1alpha1"

	"sigs.k8s.io/controller-runtime/pkg/client"

	v1 "k8s.io/api/core/v1"
)

func ListNodes(k8sClient client.Client, nodeList *v1.NodeList) error {
	err := k8sClient.List(context.Background(), nodeList)
	if err != nil {
		return fmt.Errorf("error listing nodes: %w", err)
	}

	return nil
}

func GetNode(k8sClient client.Client, name string, node *v1.Node) error {
	nodeKey := client.ObjectKey{
		Name: name,
	}

	err := k8sClient.Get(context.Background(), nodeKey, node)
	if err != nil {
		return fmt.Errorf("error getting node %s: %w", name, err)
	}

	return nil
}

func ListPods(k8sClient clientset.Interface, options metav1.ListOptions) (*v1.PodList, error) {
	podsList, err := k8sClient.CoreV1().Pods("").List(context.Background(), options)
	if err != nil {
		return nil, fmt.Errorf("error listing pods: %w", err)
	}

	return podsList, nil
}

func GetConfigMap(k8sClient client.Client, objectKey types.NamespacedName, cm *v1.ConfigMap) (bool, error) {
	err := k8sClient.Get(context.Background(), objectKey, cm)
	if err != nil {
		if apierrors.IsNotFound(err) {
			return false, nil
		}
		return false, fmt.Errorf("error getting config map %s: %w", objectKey.String(), err)
	}

	return true, nil
}

func GetDeployment(k8sClient client.Client, objectKey types.NamespacedName,
	deployment *appsv1.Deployment) (bool, error) {
	err := k8sClient.Get(context.Background(), objectKey, deployment)
	if err != nil {
		if apierrors.IsNotFound(err) {
			return false, nil
		}
		return false, fmt.Errorf("error getting deployment %s: %w", objectKey.String(), err)
	}

	return true, nil
}

func GetRanDeployer(k8sClient client.Client, objectKey types.NamespacedName,
	split *v1alpha1.RANDeployer) (bool, error) {
	if err := k8sClient.Get(context.Background(), objectKey, split); err != nil {
		if apierrors.IsNotFound(err) {
			return false, nil
		}

		return false, fmt.Errorf("error getting ran deployer: %w", err)
	}

	return true, nil
}
