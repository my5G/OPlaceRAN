package algorithm

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"

	"github.com/CROSSHAUL/RANPlacer/k8s-operators/api/v1alpha1"
	"github.com/CROSSHAUL/RANPlacer/k8s-operators/pkg/common"
	"github.com/CROSSHAUL/RANPlacer/k8s-operators/pkg/utils/k8s"
	"github.com/go-logr/logr"
	v1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/types"
	"sigs.k8s.io/controller-runtime/pkg/client"
)

const (
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

	input.Nodes = nodesResources
	input.Topology = topology
	input.Algorithm = ranPlacer.Spec.Algorithm
	input.RUs = ruPosition
	input.ResourceRequest = ranPlacer.Spec.Resources

	return input, nil
}

func (h *Handler) Trigger(inputs *Input) (string, error) {
	algorithmSchedulerUrl := os.Getenv(common.EnvAlgorithmSchedulerURL)
	if algorithmSchedulerUrl == "" {
		return "", fmt.Errorf("env var %s contains empty URL", common.EnvAlgorithmSchedulerURL)
	}

	algorithmSchedulerUrl = algorithmSchedulerUrl + scheduleEndpoint

	rawBody, err := json.Marshal(inputs)
	if err != nil {
		return "", fmt.Errorf("error marshaling algorithm input: %w", err)
	}

	body := bytes.NewBuffer(rawBody)
	res, err := http.Post(algorithmSchedulerUrl, common.JSONContentType, body)

	if res.StatusCode != http.StatusOK {
		return "", fmt.Errorf("unexpected status code %d retrieved triggering algorithm execution", res.StatusCode)
	}

	respBody, err := ioutil.ReadAll(res.Body)
	if err != nil {
		return "", fmt.Errorf("error reading response body: %w", err)
	}

	data := map[string]string{}
	if err := json.Unmarshal(respBody, &data); err != nil {
		return "", fmt.Errorf("error unmarshaling algorithm trigger response: %w", err)
	}

	return data[tokenKey], nil
}

func (h *Handler) GetResult(token string) (*Output, error) {
	algorithmSchedulerUrl := os.Getenv(common.EnvAlgorithmSchedulerURL)
	if algorithmSchedulerUrl == "" {
		return nil, fmt.Errorf("env var %s contains empty URL", common.EnvAlgorithmSchedulerURL)
	}

	algorithmSchedulerUrl = fmt.Sprintf("%s%s?job_token=%s", algorithmSchedulerUrl, scheduleEndpoint, token)

	res, err := http.Get(algorithmSchedulerUrl)
	if err != nil {
		return nil, fmt.Errorf("error executing get request to retrieve algorithm result: %w", err)
	}

	if res.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("unexpected status code %d retrieved getting algorithm result", res.StatusCode)
	}

	respBody, err := ioutil.ReadAll(res.Body)
	if err != nil {
		return nil, fmt.Errorf("error reading response body: %w", err)
	}

	output := &Output{}
	if err := json.Unmarshal(respBody, output); err != nil {
		return nil, fmt.Errorf("error unmarshaling algorithm GET response: %w", err)
	}

	return output, nil
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

func (h *Handler) getRUsPosition(ranPlacer *v1alpha1.RANPlacer) (map[string]RUsPosition, error) {
	topologyNamespacedName := types.NamespacedName{
		Namespace: ranPlacer.Namespace,
		Name:      ranPlacer.Spec.RUConfigMap,
	}

	cm := &v1.ConfigMap{}
	err := k8s.GetConfigMap(h.client, topologyNamespacedName, cm)
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
