package algorithm

import (
	"encoding/json"
	"fmt"

	"github.com/CROSSHAUL/RANPlacer/k8s-operators/api/v1alpha1"
	"github.com/CROSSHAUL/RANPlacer/k8s-operators/pkg/utils/k8s"
	"github.com/go-logr/logr"
	v1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/types"
	"sigs.k8s.io/controller-runtime/pkg/client"
)

func NewAlgorithmHandler(client client.Client, log logr.Logger) *Handler {
	return &Handler{
		client: client,
		log:    log,
	}
}

func (h *Handler) GetInputs(ranPlacer *v1alpha1.RANPlacer) (*Input, error) {
	input := &Input{}

	nodesResources, err := k8s.GetNodesResources(h.client)
	if err != nil {
		return nil, fmt.Errorf("error getting nodes resources: %w", err)
	}

	topology, err := h.getTopology(ranPlacer)
	if err != nil {
		return nil, fmt.Errorf("error getting topology: %w", err)
	}

	input.Nodes = nodesResources
	input.Topology = topology
	input.Algorithm = ranPlacer.Spec.Algorithm
	input.RUs = ranPlacer.Spec.RUs

	return input, nil
}

func (h *Handler) Trigger(inputs *Input) (string, error) {
	return "", nil
}

func (h *Handler) GetResult(token string) (*Output, error) {
	return &Output{}, nil
}

func (h *Handler) getTopology(ranPlacer *v1alpha1.RANPlacer) (*Topology, error) {
	topologyNamespacedName := types.NamespacedName{
		Namespace: ranPlacer.Namespace,
		Name:      ranPlacer.Spec.TopologyConfigMap,
	}

	cm := &v1.ConfigMap{}
	err := k8s.GetConfigMap(h.client, topologyNamespacedName, cm)
	if err != nil {
		return nil, fmt.Errorf("error getting topology config map: %w", err)
	}

	topologyData, exists := cm.Data[topologyKey]
	if !exists {
		return nil, fmt.Errorf("topology config map doesn't have field %s, cannot read topology", topologyKey)
	}

	topology := &Topology{}
	if err := json.Unmarshal([]byte(topologyData), topology); err != nil {
		return nil, fmt.Errorf("error unmarshaling topology, check if it is valid: %w", err)
	}

	return topology, nil
}
