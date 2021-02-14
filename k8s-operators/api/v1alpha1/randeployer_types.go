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
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// EDIT THIS FILE!  THIS IS SCAFFOLDING FOR YOU TO OWN!
// NOTE: json tags are required.  Any new fields you add must have json tags for the fields to be serialized.

type RanDeployerState string

const (
	RanDeployerStateRunning RanDeployerState = "Running"
	RanDeployerStateError   RanDeployerState = "Error"
)

// RANDeployerSpec defines the desired state of RANDeployer
type RANDeployerSpec struct {
	// INSERT ADDITIONAL SPEC FIELDS - desired state of cluster
	// Important: Run "make" to regenerate code after modifying this file

	// CoreIP refers to the IP to establish communications with the Core
	// +kubebuilder:validation:Required
	CoreIP string `json:"coreIP,omitempty"`

	// RUNode refers to the node where the RU should be placed
	RUNode string `json:"ruNode,omitempty"`
	// DUNode refers to the node where the DU should be placed
	DUNode string `json:"duNode,omitempty"`
	// CUNode refers to the node where the CU should be placed
	CUNode string `json:"cuNode,omitempty"`
}

// RANDeployerStatus defines the observed state of RANDeployer
type RANDeployerStatus struct {
	// INSERT ADDITIONAL STATUS FIELD - define observed state of cluster
	// Important: Run "make" to regenerate code after modifying this file

	// CUNode refers to the node where the CU is placed
	CUNode string `json:"cuNode,omitempty"`
	// CUIP refers to the IP of the CU pod
	CUIP string `json:"cuIP,omitempty"`
	// DUNode refers to the node where the DU is placed
	DUNode string `json:"duNode,omitempty"`
	// DUIP refers to the IP of the DU pod
	DUIP string `json:"duIP,omitempty"`
	// RUNode refers to the node where the RU is placed
	RUNode string `json:"ruNode,omitempty"`
	// RUIP refers to the IP of the RU pod
	RUIP string `json:"ruIP,omitempty"`
	// State shows the current state of the split according to the pods state
	State RanDeployerState `json:"state,omitempty"`
}

// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="CU NODE",type=string,JSONPath=`.status.cuNode`
// +kubebuilder:printcolumn:name="DU NODE",type=string,JSONPath=`.status.duNode`
// +kubebuilder:printcolumn:name="RU NODE",type=string,JSONPath=`.status.ruNode`
// +kubebuilder:printcolumn:name="STATUS",type=string,JSONPath=`.status.state`

// RANDeployer is the Schema for the randeployers API
type RANDeployer struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty"`

	Spec   RANDeployerSpec   `json:"spec,omitempty"`
	Status RANDeployerStatus `json:"status,omitempty"`
}

// +kubebuilder:object:root=true

// RANDeployerList contains a list of RANDeployer
type RANDeployerList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty"`
	Items           []RANDeployer `json:"items"`
}

func init() {
	SchemeBuilder.Register(&RANDeployer{}, &RANDeployerList{})
}
