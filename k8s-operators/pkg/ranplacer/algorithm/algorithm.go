package algorithm

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"strconv"

	"github.com/go-logr/logr"
	v1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/types"
	"sigs.k8s.io/controller-runtime/pkg/client"

	"github.com/CROSSHAUL/RANPlacer/k8s-operators/api/v1alpha1"
	"github.com/CROSSHAUL/RANPlacer/k8s-operators/pkg/common"
	"github.com/CROSSHAUL/RANPlacer/k8s-operators/pkg/utils/k8s"
)

const (
	// temporarily annotation, node name should be used instead
	NodeNumberLabel = "oai.unisinos/node-number"

	scheduleEndpoint = "/schedule"

	tokenKey = "token"
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

	ruPosition, err := h.getRUsPosition(ranPlacer)
	if err != nil {
		return nil, fmt.Errorf("error getting ru position: %w", err)
	}

	nodesInput, err := h.GetNodesInput(nodesResources, ruPosition)
	if err != nil {
		return nil, fmt.Errorf("error getting nodes input: %w", err)
	}

	input.Nodes = nodesInput
	input.Topology = topology
	input.Algorithm = ranPlacer.Spec.Algorithm
	//input.RUs = ruPosition
	input.ResourceRequest = ranPlacer.Spec.Resources

	jsonVal, err := json.Marshal(input)
	if err != nil {
		return nil, fmt.Errorf("error marshaling json: %w", err)
	}

	h.log.Info("algorithm input", "input", string(jsonVal))

	return input, nil
}

func (h *Handler) GetNodesInput(nodes map[string]*k8s.Node, ruPosition map[string]RUsPosition) ([]*NodeInput, error) {
	var nodesInput []*NodeInput

	for name, node := range nodes {
		// TODO: Remove node number, it doesn't make sense, the node name should be used
		nodeNumber, err := h.getNodeNumber(name)
		if err != nil {
			h.log.Info("error getting node number, skipping it", "node", name, "error", err.Error())
			continue
		}

		h.log.Info("ru position", "node_name", name)

		v, ok := ruPosition[name]
		if ok == false {
			h.log.Info("no rus provided for node, will be set to 0", "name", name)
		}

		input := &NodeInput{
			NodeNumber: nodeNumber,
			NodeType:   "",
			CPU:        node.CPUAvailable,
			Memory:     node.MemoryAvailable,
			RU:         v.RU,
		}

		nodesInput = append(nodesInput, input)
	}

	return nodesInput, nil
}

func (h *Handler) getNodeNumber(name string) (int, error) {
	node := &v1.Node{}
	err := k8s.GetNode(h.client, name, node)
	if err != nil {
		return 0, fmt.Errorf("error getting node %s: %w", name, err)
	}

	v, ok := node.Labels[NodeNumberLabel]
	if ok == false {
		return 0, fmt.Errorf("error getting node number from label %s: %w", NodeNumberLabel, err)
	}

	i, err := strconv.Atoi(v)
	if err != nil {
		return 0, fmt.Errorf("error converting node number to int, value is %s: %w", v, err)
	}

	return i, nil
}

func (h *Handler) Trigger(inputs *Input) (string, error) {
	algorithmSchedulerUrl := os.Getenv(common.EnvAlgorithmSchedulerURL)
	if algorithmSchedulerUrl == "" {
		return "", fmt.Errorf("env var %s contains empty URL", common.EnvAlgorithmSchedulerURL)
	}

	algorithmSchedulerUrl = fmt.Sprintf("http://%s%s", algorithmSchedulerUrl, scheduleEndpoint)

	rawBody, err := json.Marshal(inputs)
	if err != nil {
		return "", fmt.Errorf("error marshaling algorithm input: %w", err)
	}

	body := bytes.NewBuffer(rawBody)
	res, err := http.Post(algorithmSchedulerUrl, common.JSONContentType, body)
	if err != nil {
		return "", fmt.Errorf("error executing request to %s: %w", algorithmSchedulerUrl, err)
	}

	var respBody []byte
	if res.Body != nil {
		respBody, err = ioutil.ReadAll(res.Body)
		if err != nil {
			return "", fmt.Errorf("error reading response body: %w", err)
		}
	}

	if res.StatusCode != http.StatusOK {
		return "", fmt.Errorf("unexpected status code %d retrieved triggering algorithm execution, response message: %s",
			res.StatusCode, respBody)
	}

	data := map[string]string{}
	if err := json.Unmarshal(respBody, &data); err != nil {
		msg := fmt.Sprintf("error unmarshaling value: %s", respBody)
		h.log.Info(msg)
		return "", fmt.Errorf("error unmarshaling algorithm trigger response: %w", err)
	}

	return data[tokenKey], nil
}

func (h *Handler) GetResult(token string) (*Output, error) {
	algorithmSchedulerUrl := os.Getenv(common.EnvAlgorithmSchedulerURL)
	if algorithmSchedulerUrl == "" {
		return nil, fmt.Errorf("env var %s contains empty URL", common.EnvAlgorithmSchedulerURL)
	}

	algorithmSchedulerUrl = fmt.Sprintf("http://%s%s?job_token=%s", algorithmSchedulerUrl, scheduleEndpoint, token)

	res, err := http.Get(algorithmSchedulerUrl)
	if err != nil {
		return nil, fmt.Errorf("error executing get request to retrieve algorithm result: %w", err)
	}

	// TODO: Handle error response properly (unmarshal and get error message)
	if res.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("unexpected status code %d retrieved getting algorithm result", res.StatusCode)
	}

	respBody, err := ioutil.ReadAll(res.Body)
	if err != nil {
		return nil, fmt.Errorf("error reading response body: %w", err)
	}

	respString := string(respBody)
	h.log.Info(respString)

	output := &Output{}
	if err := json.Unmarshal(respBody, output); err != nil {
		return nil, fmt.Errorf("error unmarshaling algorithm GET response: %w", err)
	}

	return output, nil
}

func (h *Handler) getTopology(ranPlacer *v1alpha1.RANPlacer) (Topology, error) {
	topologyNamespacedName := types.NamespacedName{
		Namespace: ranPlacer.Namespace,
		Name:      ranPlacer.Spec.TopologyConfigMap,
	}

	cm := &v1.ConfigMap{}
	_, err := k8s.GetConfigMap(h.client, topologyNamespacedName, cm)
	if err != nil {
		return nil, fmt.Errorf("error getting topology config map: %w", err)
	}

	topologyData, exists := cm.Data[topologyKey]
	if !exists {
		return nil, fmt.Errorf("topology config map doesn't have field %s, cannot read topology", topologyKey)
	}

	topology := Topology{}
	if err := json.Unmarshal([]byte(topologyData), &topology); err != nil {
		return nil, fmt.Errorf("error unmarshaling topology, check if it is valid: %w", err)
	}

	return topology, nil
}

func (h *Handler) getRUsPosition(ranPlacer *v1alpha1.RANPlacer) (map[string]RUsPosition, error) {
	topologyNamespacedName := types.NamespacedName{
		Namespace: ranPlacer.Namespace,
		Name:      ranPlacer.Spec.RUConfigMap,
	}

	cm := &v1.ConfigMap{}
	_, err := k8s.GetConfigMap(h.client, topologyNamespacedName, cm)
	if err != nil {
		return nil, fmt.Errorf("error getting rus config map: %w", err)
	}

	rusData, exists := cm.Data[rusKey]
	if !exists {
		return nil, fmt.Errorf("rus config map doesn't have field %s, cannot read topology", rusKey)
	}

	rus := map[string]RUsPosition{}
	if err := json.Unmarshal([]byte(rusData), &rus); err != nil {
		return nil, fmt.Errorf("error unmarshaling rus, check if it is valid: %w", err)
	}

	return rus, nil
}
