package algorithm

import (
	"fmt"
	"time"

	"github.com/CROSSHAUL/RANPlacer/k8s-operators/api/v1alpha1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

func GetDurationInSeconds(ranPlacer *v1alpha1.RANPlacer) string {
	endTime := metav1.NewTime(time.Now())
	endTimePnt := &endTime
	if ranPlacer.Status.Algorithm.EndTimestamp == nil {
		endTimePnt = ranPlacer.Status.Algorithm.EndTimestamp
	}

	return fmt.Sprintf("%s", endTimePnt.Sub(ranPlacer.Status.Algorithm.StartTimestamp.Time))
}
