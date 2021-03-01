package testutils

import (
	"context"

	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	"sigs.k8s.io/controller-runtime/pkg/client"
	"sigs.k8s.io/controller-runtime/pkg/client/fake"
)

func GetFakeClient() (client.Client, error) {
	k8sScheme := runtime.NewScheme()
	if err := scheme.AddToScheme(k8sScheme); err != nil {
		return nil, err
	}
	clientBuilder := fake.NewClientBuilder()
	clientBuilder = clientBuilder.WithScheme(k8sScheme)
	return clientBuilder.Build(), nil
}

func CreateResources(resources []client.Object, k8sClient client.Client) error {
	for _, resource := range resources {
		if err := k8sClient.Create(context.Background(), resource); err != nil {
			return err
		}
	}

	return nil
}
