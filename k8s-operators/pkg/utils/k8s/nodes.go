package k8s

import (
	"fmt"

	corev1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/api/resource"
	"k8s.io/apimachinery/pkg/fields"
	resourcehelper "k8s.io/kubectl/pkg/util/resource"
	"sigs.k8s.io/controller-runtime/pkg/client"
)

type Node struct {
	Name            string
	MemoryAvailable float64
	CPUAvailable    float64
}

func GetNodesResources(k8sClient client.Client) ([]*Node, error) {
	nodeList := &corev1.NodeList{}
	if err := ListNodes(k8sClient, nodeList); err != nil {
		return nil, fmt.Errorf("error listing nodes: %w", err)
	}

	var nodesResources []*Node
	for _, node := range nodeList.Items {
		fieldSelector, err := fields.ParseSelector("spec.nodeName=" + node.Name + "," +
			"status.phase!=" + string(corev1.PodSucceeded) + ",status.phase!=" + string(corev1.PodFailed))
		if err != nil {
			return nil, fmt.Errorf("error parsing fields for node %s: %w", node.Name, err)
		}
		opts := &client.ListOptions{FieldSelector: fieldSelector}

		podList := &corev1.PodList{}
		if err := ListPods(k8sClient, opts, podList); err != nil {
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
		cpuMilli := float64(availableCpu.MilliValue())
		mem := float64(availableMem.ScaledValue(resource.Mega))

		nodesResources = append(nodesResources, &Node{Name: node.Name, MemoryAvailable: mem,
			CPUAvailable: cpuMilli})
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
