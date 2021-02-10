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
	rusKey      string = "rus"
)

type Topology struct {
}

type RUsPosition struct {
	RU int `json:"ru,omitempty"`
}

type Input struct {
	Nodes           map[string]*k8s.Node      `json:"nodes,omitempty"`
	Algorithm       string                    `json:"algorithm,omitempty"`
	Topology        *Topology                 `json:"topology,omitempty"`
	ResourceRequest v1alpha1.ResourcesRequest `json:"resources"`
	RUs             map[string]RUsPosition    `json:"rus,omitempty"`
}

type Output struct {
	Status State           `json:"status"`
	Result []ChainPosition `json:"result,omitempty"`
}

type ChainPosition struct {
	ID   string  `json:"id,omitempty"`
	Drc  string  `json:"drc,omitempty"`
	RU   string  `json:"ru,omitempty"`
	DU   string  `json:"du,omitempty"`
	CU   string  `json:"cu,omitempty"`
	Path [][]int `json:"path,omitempty"`
}

type Handler struct {
	client client.Client
	log    logr.Logger
}
