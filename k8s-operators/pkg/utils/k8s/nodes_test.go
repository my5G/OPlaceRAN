package k8s

import (
	"fmt"
	"testing"

	"github.com/CROSSHAUL/RANPlacer/k8s-operators/pkg/testutils"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	v1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/api/resource"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"sigs.k8s.io/controller-runtime/pkg/client"
)

func TestGetNodesResources(t *testing.T) {
	k8sClient, err := testutils.GetFakeClient()
	if err != nil {
		t.Fatalf("error getting fake client: %s", err)
	}

	testCases := []struct {
		Name     string
		Nodes    v1.NodeList
		Pods     v1.PodList
		expected []Node
	}{
		{
			Name: "empty cluster",
			Nodes: v1.NodeList{
				Items: []v1.Node{
					getNode("1", "500m", "500Mi"),
					getNode("2", "300m", "1G"),
				},
			},
			Pods: v1.PodList{
				Items: []v1.Pod{
					getPod("1", "250m", "500Mi", "1"),
				},
			},
			expected: []Node{
				{
					MemoryAvailable: 0,
					CPUAvailable:    250,
				},
				{
					MemoryAvailable: 1000,
					CPUAvailable:    300,
				},
			},
		},
	}

	for _, tc := range testCases {
		t.Run(tc.Name, func(t *testing.T) {
			for _, n := range tc.Nodes.Items {
				testutils.CreateResources([]client.Object{&n}, k8sClient)
			}

			for _, p := range tc.Pods.Items {
				testutils.CreateResources([]client.Object{&p}, k8sClient)
			}

			nodes, err := GetNodesResources(k8sClient)
			require.Nil(t, err)

			for i := range tc.expected {
				assert.Equal(t, tc.expected[i].CPUAvailable, nodes[fmt.Sprint(i+1)].CPUAvailable)
				assert.Equal(t, tc.expected[i].MemoryAvailable, nodes[fmt.Sprint(i+1)].MemoryAvailable)
			}
		})
	}
}

func getPod(name string, cpuStr string, memoryStr string, node string) v1.Pod {
	cpu := resource.MustParse(cpuStr)
	memory := resource.MustParse(memoryStr)

	return v1.Pod{
		ObjectMeta: metav1.ObjectMeta{
			Name: name,
		},
		Spec: v1.PodSpec{
			Hostname: node,
			NodeName: node,
			Containers: []v1.Container{
				{
					Name: "1",
					Resources: v1.ResourceRequirements{
						Requests: v1.ResourceList{
							v1.ResourceCPU:    cpu,
							v1.ResourceMemory: memory,
						},
					},
				},
			},
		},
	}
}

func getNode(name string, cpuStr string, memoryStr string) v1.Node {
	cpu := resource.MustParse(cpuStr)
	memory := resource.MustParse(memoryStr)
	return v1.Node{
		ObjectMeta: metav1.ObjectMeta{
			Name: name,
		},
		Spec: v1.NodeSpec{},
		Status: v1.NodeStatus{Allocatable: v1.ResourceList{
			v1.ResourceCPU:    cpu,
			v1.ResourceMemory: memory,
		}},
	}
}

func resourcePnt(quantity string) *resource.Quantity {
	r := resource.MustParse(quantity)
	return &r
}
