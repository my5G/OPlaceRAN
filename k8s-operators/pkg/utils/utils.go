package utils

import (
	"k8s.io/apimachinery/pkg/api/resource"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

func GetTimePnt(t metav1.Time) *metav1.Time {
	return &t
}

func NewQuantity(value string) *resource.Quantity {
	v := resource.MustParse(value)
	return &v
}
