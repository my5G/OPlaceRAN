package k8s

import (
	"fmt"

	corev1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/api/resource"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/fields"
	clientset "k8s.io/client-go/kubernetes"
	"k8s.io/client-go/rest"
	resourcehelper "k8s.io/kubectl/pkg/util/resource"
	"sigs.k8s.io/controller-runtime/pkg/client"
)

type Node struct {
	MemoryAvailable float64
	CPUAvailable    float64
}

func getClient() (clientset.Interface, error) {
	cfg, err := rest.InClusterConfig()
	if err != nil {
		return nil, fmt.Errorf("error getting k8s inner cluster config: %w", err)
	}

	c, err := clientset.NewForConfig(cfg)
	if err != nil {
		return nil, fmt.Errorf("error creating k8s client: %w", err)
	}

	return c, nil
}

func GetNodesResources(k8sClient client.Client) (map[string]*Node, error) {
	nodeList := &corev1.NodeList{}
	if err := ListNodes(k8sClient, nodeList); err != nil {
		return nil, fmt.Errorf("error listing nodes: %w", err)
	}

	nodesResources := make(map[string]*Node)
	for _, node := range nodeList.Items {
		fieldSelector, err := fields.ParseSelector("spec.nodeName=" + node.Name + "," +
			"status.phase!=" + string(corev1.PodSucceeded) + ",status.phase!=" + string(corev1.PodFailed))
		if err != nil {
			return nil, fmt.Errorf("error parsing fields for node %s: %w", node.Name, err)
		}
		opts := metav1.ListOptions{FieldSelector: fieldSelector.String()}

		c, err := getClient()
		if err != nil {
			return nil, fmt.Errorf("error getting K8S client: %w", err)
		}

		podList, err := ListPods(c, opts)
		if err != nil {
			return nil, fmt.Errorf("error listing pods: %w", err)
		}

		allocatable := node.Status.Capacity
		if len(node.Status.Allocatable) > 0 {
			allocatable = node.Status.Allocatable
		}

		//double check because of limitation on mock client to do is mock client with own implementation to
		//consider it
		pods := &corev1.PodList{Items: []corev1.Pod{}}
		for i := range podList.Items {
			if podList.Items[i].Spec.NodeName == node.Name {
				pods.Items = append(pods.Items, podList.Items[i])
			}
		}

		reqs, _ := getPodsTotalRequestsAndLimits(pods)

		cpuReqs, memoryReqs := reqs[corev1.ResourceCPU], reqs[corev1.ResourceMemory]

		availableCpu := allocatable[corev1.ResourceCPU]
		availableMem := allocatable[corev1.ResourceMemory]

		availableCpu.Sub(cpuReqs)
		availableMem.Sub(memoryReqs)
		// TODO: Change back to allocatable
		//cpuGiga := float64(availableCpu.ScaledValue(resource.Giga))
		cpuMilli := float64(availableCpu.MilliValue())
		mem := float64(availableMem.ScaledValue(resource.Giga))

		nodesResources[node.Name] = &Node{MemoryAvailable: mem,
			CPUAvailable: cpuMilli}
	}

	return nodesResources, nil
}

// From "https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/kubectl/pkg/describe/describe.go"
func getPodsTotalRequestsAndLimits(podList *corev1.PodList) (map[corev1.ResourceName]resource.Quantity, map[corev1.ResourceName]resource.Quantity) {
	reqs, limits := map[corev1.ResourceName]resource.Quantity{}, map[corev1.ResourceName]resource.Quantity{}
	for _, pod := range podList.Items {
		podReqs, podLimits := resourcehelper.PodRequestsAndLimits(&pod)
		for podReqName, podReqValue := range podReqs {
			if value, ok := reqs[podReqName]; !ok {
				reqs[podReqName] = podReqValue.DeepCopy()
			} else {
				value.Add(podReqValue)
				reqs[podReqName] = value
			}
		}
		for podLimitName, podLimitValue := range podLimits {
			if value, ok := limits[podLimitName]; !ok {
				limits[podLimitName] = podLimitValue.DeepCopy()
			} else {
				value.Add(podLimitValue)
				limits[podLimitName] = value
			}
		}
	}
	return reqs, limits
}
