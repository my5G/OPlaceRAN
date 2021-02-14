package controllers

import (
	v1 "k8s.io/api/core/v1"
)

const (
	CU SplitPiece = "cu"
	DU SplitPiece = "du"
	RU SplitPiece = "ru"

	kustomizePrefix = "k8s-operators-"

	CUTemplateConfigMapName = kustomizePrefix + "cu-template"
	DUTemplateConfigMapName = kustomizePrefix + "du-template"
	RUTemplateConfigMapName = kustomizePrefix + "ru-template"
	operatorNamespace       = kustomizePrefix + "system"

	SplitMemoryLimitValue   = "512Mi"
	SplitMemoryRequestValue = "256Mi"
	SplitCPULimitValue      = "500m"
	SplitCPURequestValue    = "150m"

	cuConfigMapContentTemplate = "upfaddress: %s\nlocaladdress: %s\nsouthaddress: %s\n"
	duConfigMapContentTemplate = "northaddress: %s\nlocaladdress: %s\nsouthaddress: %s\n"
	ruConfigMapContentTemplate = "northaddress: %s\nlocaladdress: %s\n"
)

var Empty struct{}

type StringSet map[string]struct{}

func NewStringSet(values ...string) StringSet {
	stringSet := make(StringSet)
	for _, v := range values {
		stringSet[v] = Empty
	}
	return stringSet
}

// Add adds new values to the set.
func (s *StringSet) Add(items ...string) {
	for _, item := range items {
		(*s)[item] = Empty
	}
}

// Has returns true if item is in the Set
func (s StringSet) Has(item string) bool {
	_, contained := s[item]
	return contained
}

type SplitPiece string

type cuContent struct {
	UPF          string
	LocalAddress string
	SouthAddress string
}

type duContent struct {
	LocalAddress string
	NorthAddress string
	SouthAddress string
}

type ruContent struct {
	LocalAddress string
	NorthAddress string
}

type Port struct {
	number   int32
	protocol v1.Protocol
}

var SplitPorts = map[SplitPiece][]Port{
	CU: {{501, v1.ProtocolUDP}, {601, v1.ProtocolUDP}, {2152, v1.ProtocolUDP},
		{36412, v1.ProtocolUDP}, {36422, v1.ProtocolUDP}, {30923, v1.ProtocolUDP},
		{37659, v1.ProtocolTCP}},
	DU: {{500, v1.ProtocolUDP}, {600, v1.ProtocolUDP}, {30923, v1.ProtocolUDP},
		{34878, v1.ProtocolUDP}, {45501, v1.ProtocolTCP}, {50001, v1.ProtocolUDP},
		{50011, v1.ProtocolUDP}},
	RU: {{8888, v1.ProtocolUDP}, {9999, v1.ProtocolUDP}, {10000, v1.ProtocolUDP},
		{32123, v1.ProtocolUDP}, {38927, v1.ProtocolTCP}, {50000, v1.ProtocolUDP},
		{50010, v1.ProtocolUDP}, {58363, v1.ProtocolUDP}},
}

var TemplateConfigMaps = map[SplitPiece]string{
	CU: CUTemplateConfigMapName,
	DU: DUTemplateConfigMapName,
	RU: RUTemplateConfigMapName,
}

var Splits = NewStringSet(
	string(CU),
	string(RU),
	string(DU),
)
