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

package controllers

import (
	"context"
	"time"

	"github.com/go-logr/logr"
	"k8s.io/apimachinery/pkg/runtime"
	ctrl "sigs.k8s.io/controller-runtime"
	"sigs.k8s.io/controller-runtime/pkg/client"

	v1alpha1 "github.com/CROSSHAUL/RANPlacer/k8s-operators/api/v1alpha1"
	"github.com/CROSSHAUL/RANPlacer/k8s-operators/pkg/ranplacer"
	customerrors "github.com/CROSSHAUL/RANPlacer/k8s-operators/pkg/utils/errors"
)

// RANPlacerReconciler reconciles a RANPlacer object
type RANPlacerReconciler struct {
	client.Client
	Log    logr.Logger
	Scheme *runtime.Scheme
}

const requeueAfter = 30 * time.Second

// +kubebuilder:rbac:groups=ran.unisinos,resources=ranplacers,verbs=get;list;watch;create;update;patch;delete
// +kubebuilder:rbac:groups=ran.unisinos,resources=ranplacers/status,verbs=get;update;patch
// +kubebuilder:rbac:groups="",resources=configmaps,verbs=get
// +kubebuilder:rbac:groups="",resources=nodes,verbs=get;list;watch

func (r *RANPlacerReconciler) Reconcile(ctx context.Context, req ctrl.Request) (ctrl.Result, error) {

	// TODO: Use context properly
	log := r.Log.WithValues("ranplacer", req.NamespacedName)

	ranPlacer := &v1alpha1.RANPlacer{}
	if err := r.Get(ctx, req.NamespacedName, ranPlacer); err != nil {
		log.Error(err, "unable to fetch RANPlacer")
		return ctrl.Result{}, client.IgnoreNotFound(err)
	}

	handler := ranplacer.NewHandler(ctx, r.Client, log, req)

	if err := handler.Sync(ranPlacer); err != nil {
		switch err.(type) {
		case *customerrors.DoNotRequeueError:
			log.Error(err, "sync failed, RANPlacer will not be enqueued")
			return ctrl.Result{}, nil
		default:
			log.Error(err, "sync failed, RANPlacer will be enqueued")
			return ctrl.Result{}, err
		}
	}

	return ctrl.Result{RequeueAfter: requeueAfter}, nil
}

func (r *RANPlacerReconciler) SetupWithManager(mgr ctrl.Manager) error {
	return ctrl.NewControllerManagedBy(mgr).
		For(&v1alpha1.RANPlacer{}).
		Complete(r)
}
