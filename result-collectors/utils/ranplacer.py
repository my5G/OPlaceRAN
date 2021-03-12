import logging
import os
import yaml
import time
import math

from datetime import datetime
from utils.k8s import K8S
import utils.constants as constants

from kubernetes import config, client
from kubernetes.client.rest import ApiException

from tenacity import retry, stop_after_delay, retry_if_exception_type, TryAgain, wait_fixed


class RANPlacer:

    template_file = ""
    ranplacer = None

    def __init__(self, template_file: str):
        template_folder = f"{os.path.dirname(os.path.abspath(__file__))}/templates"
        self.template_file = f"{template_folder}/{template_file}"
        self.ranplacer = next(yaml.safe_load_all(
            open(self.template_file, "r").read()))

    @retry(stop=stop_after_delay(120), retry=retry_if_exception_type(TryAgain),
           wait=wait_fixed(5), reraise=True)
    def create(self):
        """
            Creates the RANPlacer resource.
        """

        k8s_cli = K8S.get_custom_object_client()
        try:
            res = k8s_cli.create_namespaced_custom_object(group=constants.CRD_GROUP,
                                                          plural=constants.CRD_KIND_RANPLACER,
                                                          version=constants.APIVERSION_V1ALPHA1,
                                                          namespace=constants.NAMESPACE_DEFAULT,
                                                          body=self.ranplacer)
            self.ranplacer = res
        except ApiException as err:
            if err.status != 409:
                logging.error(
                    f"[RANPLACER] Error creating RANPlacer: {err}")
                raise TryAgain

    @retry(stop=stop_after_delay(120), retry=retry_if_exception_type(TryAgain),
           wait=wait_fixed(5), reraise=True)
    def get(self):
        """
            Get RANPlacer.
        """
        ranplacer = None
        ranplacer_name = self.ranplacer["metadata"]["name"]
        k8s_cli = K8S.get_custom_object_client()

        try:
            ranplacer = k8s_cli.get_namespaced_custom_object(group=constants.CRD_GROUP,
                                                                version=constants.APIVERSION_V1ALPHA1,
                                                                namespace=constants.NAMESPACE_DEFAULT,
                                                                plural=constants.CRD_KIND_RANPLACER,
                                                                name=ranplacer_name)
        except ApiException as err:
            if err.status != 404:
                logging.error(
                    f"[RANPLACER] Error getting ranplacer: {err}")
                raise TryAgain

        if ranplacer is not None:
            self.ranplacer = ranplacer

        return ranplacer

    @retry(stop=stop_after_delay(1200), retry=retry_if_exception_type(TryAgain),
           wait=wait_fixed(constants.WAIT_FIXED_INTERVAL), reraise=True)
    def wait_to_be_finished(self):
        """
            Wait for the ranplacer to be in a defined states, and if not throws an error.
        """
        try:
            ranplacer = self.get()
            if ranplacer is None or ("status" not in ranplacer) or ("state" not in ranplacer["status"]):
                raise TryAgain
            status = ranplacer["status"]["state"]

            if status == constants.STATUS_FINISHED or status == constants.STATUS_ERROR:
                return True
        except ApiException as err:
            logging.error(
                f"[RANPLACER] Unexpected error waiting for ranplacer to be finished: {err}")
            raise

    @retry(stop=stop_after_delay(120), retry=retry_if_exception_type(TryAgain),
           wait=wait_fixed(5), reraise=True)
    def delete(self):
        """
            Deletes the RANPlacer.
        """
        ranplacer = self.get()
        if ranplacer is None:
            return

        ranplacer_name = ranplacer["metadata"]["name"]
        k8s_cli = K8S.get_custom_object_client()
        try:
            k8s_cli.delete_namespaced_custom_object(group=constants.CRD_GROUP,
                                                    version=constants.APIVERSION_V1ALPHA1,
                                                    namespace=constants.NAMESPACE_DEFAULT,
                                                    plural=constants.CRD_KIND_RANPLACER,
                                                    name=ranplacer_name,
                                                    body=client.V1DeleteOptions())
        except ApiException as err:
            if err.status != 404:
                logging.error(
                    f"[RANPLACER] Error deleting ranplacer: {err}")
                raise TryAgain

    def collect_result(self):
        ranplacer = self.get()

        if ranplacer["status"]["state"] == constants.STATUS_ERROR:
            return {
                "state": constants.STATUS_ERROR
            }

        creation_timestamp = ranplacer["metadata"]["creationTimestamp"]

        while True:
            pods = K8S.list_pods()
            ready = True
            if len(pods.items) < int(ranplacer["status"]["ranDeployerCount"]) * 3:
                ready = False
            else:
                for pod in pods.items:
                    if pod.status.phase != "Running":
                        logging.info(
                            f"pod {pod.metadata.name} in state {pod.status.phase}")
                        ready = False
                        break
            if ready:
                logging.info("all pods running")
                break
            logging.info("waiting pods to be ready")
            time.sleep(5)

        initialization_time = {"name": "", "difference": 0}
        duration = []
        latest_initialization = {"duration": -math.inf }
        for pod in pods.items:
            logging.info(f"getting logs for pod {pod.metadata.name}")
            pod_logs = K8S.logs(pod.metadata.name).split("\n")

            timestamp = pod_logs[0]

            if "Starting replacer" in timestamp:
                timestamp = timestamp.split("\"")[1]
                timestamp = timestamp[:-1]

            initialization_time[pod.metadata.name] = timestamp
            init_time = datetime.strptime(timestamp, "%Y-%m-%dT%H:%M:%S")
            creation_time = datetime.strptime(
                creation_timestamp, "%Y-%m-%dT%H:%M:%SZ")
            difference = (init_time - creation_time)
            duration.append(difference.total_seconds())

            if latest_initialization["duration"] < difference.total_seconds():
                latest_initialization["duration"] = difference.total_seconds()
                latest_initialization["name"] = pod.metadata.name

        average_initialization_time = 0
        for v in duration:
            average_initialization_time += v
        average_initialization_time = average_initialization_time/len(duration)

        return {
            "creation_timestamp": creation_timestamp,
            "initialization_time": initialization_time,
            "latest_to_init": latest_initialization,
            "state": constants.STATUS_FINISHED,
            "average_initialization_time": average_initialization_time,
            "allocated_ran_deployers": ranplacer["status"]["ranDeployerCount"],
        }
