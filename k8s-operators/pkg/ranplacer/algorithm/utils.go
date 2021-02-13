package algorithm

import (
	"fmt"
	"time"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"

	"github.com/CROSSHAUL/RANPlacer/k8s-operators/api/v1alpha1"
)

func GetDurationInSeconds(ranPlacer *v1alpha1.RANPlacer) string {
	endTimePnt := ranPlacer.Status.Algorithm.EndTimestamp

	if endTimePnt == nil {
		endTime := metav1.NewTime(time.Now())
		endTimePnt = &endTime
	}

	return fmt.Sprintf("%s", endTimePnt.Sub(ranPlacer.Status.Algorithm.StartTimestamp.Time))
}
