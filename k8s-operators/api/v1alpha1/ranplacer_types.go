/*


Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// EDIT THIS FILE!  THIS IS SCAFFOLDING FOR YOU TO OWN!
// NOTE: json tags are required.  Any new fields you add must have json tags for the fields to be serialized.

// RANPlacerSpec defines the desired state of RANPlacer
type RANPlacerSpec struct {
	// +kubebuilder:validation:MinLength=0

	// INSERT ADDITIONAL SPEC FIELDS - desired state of cluster
	// Important: Run "make" to regenerate code after modifying this file

	// Foo is an example field of RANPlacer. Edit RANPlacer_types.go to remove/update
	// Foo string `json:"foo,omitempty"`

	// CoreIP to where the ran deployer created will point to.
	CoreIP string `json:"coreIP"`
	// NodesConfigMap points to the config map that holds the nodes metadata information
	NodesConfigMap string `json:"nodesConfigMap,omitempty"`
	// TopologyConfigMap points to the config map that holds the topology information
	TopologyConfigMap string `json:"topologyConfigMap"`
	// RUConfigMap holds the name of the config map which has the RU mapping
	RUConfigMap string `json:"ruConfigMap"`
	// Algorithm holds the algorithm key used to define the placement
	Algorithm string `json:"algorithm"`
	// RUs holds the number of RUs and the nodes where they should be positioned, for each RU a chain will
	// be created, and placed according to the algorithm disaggregation options.
	//RUs []*RUs `json:"rus"`
	// Resources defines the requested amount for the CU, DU and RU
	Resources ResourcesRequest `json:"resources"`
}

// ResourcesRequest defines the requested resource for a CU, DU and RU
type ResourcesRequest struct {
	CU v1.ResourceList `json:"cu"`
	DU v1.ResourceList `json:"du"`
	RU v1.ResourceList `json:"ru"`
}

// RUs for now will be provided through config map
// RUs describe the position where N RUs should be placed
//type RUs struct {
//	// NodeName defines the nodes where the RUs should be placed
//	NodeName string `json:"nodeName,omitempty"`
//	// Count defines the number of RUs that should be placed
//	Count int32 `json:"count,omitempty"`
//}

type RANPlacerState string

const (
	FinishedState         RANPlacerState = "Finished"
	AlgorithmRunningState RANPlacerState = "Algorithm Running"
	ErrorState            RANPlacerState = "Error"
)

// RANPlacerStatus defines the observed state of RANPlacer
type RANPlacerStatus struct {
	// INSERT ADDITIONAL STATUS FIELD - define observed state of cluster
	// Important: Run "make" to regenerate code after modifying this file
	Algorithm        Algorithm      `json:"algorithm,omitempty"`
	LastErrorMessage string         `json:"lastErrorMessage,omitempty"`
	State            RANPlacerState `json:"state,omitempty"`
	Token            string         `json:"token,omitempty"`
}

type Algorithm struct {
	// TODO: retrieve start and end time from algorithm
	// StartTimestamp represents the time that the algorithm execution was triggered by the RANPlacer
	StartTimestamp *metav1.Time `json:"startTimestamp,omitempty"`
	// EndTimestamp represents the time that the RANPlacer noticed that the algorithm finished
	EndTimestamp *metav1.Time `json:"endTimestamp,omitempty"`
	// DurationInSeconds is the seconds from EndTimestamp - StartTimestamp
	DurationInSeconds string `json:"durationInSeconds,omitempty"`
	// ErrorMessage shows the error message retrieved from the algorithm execution
	ErrorMessage string `json:"errorMessage,omitempty"`
}

// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="TOPOLOGY",type=string,JSONPath=`.spec.topologyConfigMap`
// +kubebuilder:printcolumn:name="RUS",type=string,JSONPath=`.spec.ruConfigMap`
// +kubebuilder:printcolumn:name="ALGORITHM",type=string,JSONPath=`.spec.algorithm`
// +kubebuilder:printcolumn:name="STATUS",type=string,JSONPath=`.status.state`

// RANPlacer is the Schema for the ranplacers API
type RANPlacer struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty"`

	Spec   RANPlacerSpec   `json:"spec,omitempty"`
	Status RANPlacerStatus `json:"status,omitempty"`
}

// +kubebuilder:object:root=true

// RANPlacerList contains a list of RANPlacer
type RANPlacerList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty"`
	Items           []RANPlacer `json:"items"`
}

func init() {
	SchemeBuilder.Register(&RANPlacer{}, &RANPlacerList{})
}
