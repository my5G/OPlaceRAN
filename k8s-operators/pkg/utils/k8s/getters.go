package k8s

import (
	"context"
	"fmt"

	"k8s.io/apimachinery/pkg/types"

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

func ListPods(k8sClient client.Client, options *client.ListOptions, podsList *v1.PodList) error {
	err := k8sClient.List(context.Background(), podsList, options)
	if err != nil {
		return fmt.Errorf("error listing pods: %w", err)
	}

	return nil
}

func GetConfigMap(k8sClient client.Client, objectKey types.NamespacedName, cm *v1.ConfigMap) error {
	err := k8sClient.Get(context.Background(), objectKey, cm)
	if err != nil {
		return fmt.Errorf("error getting config map %s: %w", objectKey.String(), err)
	}

	return nil
}
