package algorithm

import (
	"github.com/go-logr/logr"
	"sigs.k8s.io/controller-runtime/pkg/client"

	"github.com/CROSSHAUL/RANPlacer/k8s-operators/api/v1alpha1"
)

type State string

const (
	Completed State = "completed"
	Failed    State = "failed"
	Running   State = "running"
	BadOutput State = "bad_output"

	topologyKey string = "topology"
	rusKey      string = "rus"
)

type Topology []*Link

type Link struct {
	Capacity    int    `json:"capacity"`
	Delay       string `json:"delay"`
	Source      string `json:"fromNode"`
	Destination string `json:"toNode"`
	ID          string `json:"linkNumber"`
}

type RUsPosition struct {
	RU int `json:"ru"`
}

type Input struct {
	Nodes           []*NodeInput              `json:"nodes,omitempty"`
	Algorithm       string                    `json:"algorithm,omitempty"`
	Topology        Topology                  `json:"topology,omitempty"`
	ResourceRequest v1alpha1.ResourcesRequest `json:"resources"`
	//RUs             map[string]RUsPosition    `json:"rus,omitempty"`
}

// NodeInput is temporarily, RUs should be split from nodes information
type NodeInput struct {
	NodeNumber int     `json:"nodeNumber"`
	NodeType   string  `json:"nodeType"`
	CPU        float64 `json:"cpu"`
	Memory     float64 `json:"RAM"`
	RU         int     `json:"RU"`
}

// Output is the interface retrieved from the algorithm scheduler
type Output struct {
	// Status contains the current state of the algorithm execution
	Status State `json:"status"`
	// Result contains the position of each node of the chain
	Result []ChainPosition `json:"result,omitempty"`
	// ExecutionTime contains the time the algorithm job took to execute in seconds
	ExecutionTime string `json:"executionTime,omitempty"`
}

// ChainPosition defines the position returned from the algorithm containing the position
// of the nodes of a chain
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
