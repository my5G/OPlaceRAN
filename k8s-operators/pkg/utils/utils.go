package utils

import metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"

func GetTimePnt(t metav1.Time) *metav1.Time {
	return &t
}
