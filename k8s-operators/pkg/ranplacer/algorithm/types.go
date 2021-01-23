package algorithm

import (
	"github.com/CROSSHAUL/RANPlacer/k8s-operators/api/v1alpha1"
	"github.com/CROSSHAUL/RANPlacer/k8s-operators/pkg/utils/k8s"
	"github.com/go-logr/logr"
	"sigs.k8s.io/controller-runtime/pkg/client"
)

type State string

const (
	Completed State = "completed"
	Failed    State = "failed"
	Running   State = "running"

	topologyKey string = "topology"
)

type Topology struct {
}

type Input struct {
	Nodes     []*k8s.Node     `json:"nodes,omitempty"`
	Algorithm string          `json:"algorithm,omitempty"`
	Topology  *Topology       `json:"topology,omitempty"`
	RUs       []*v1alpha1.RUs `json:"rus,omitempty"`
}

type Output struct {
	Status State `json:"status"`
	// TODO: create proper structure
	Result string `json:"result"`
}

type Handler struct {
	client client.Client
	log    logr.Logger
}
