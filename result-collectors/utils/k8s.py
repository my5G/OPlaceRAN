from kubernetes import config, client
from kubernetes.client.rest import ApiException
from tenacity import retry, stop_after_delay, retry_if_exception_type, TryAgain, wait_fixed

import utils.constants as constants
import logging


class K8S:
    @staticmethod
    def get_client():
        """
            Gets a K8S client.
        """
        return config.new_client_from_config()

    @staticmethod
    def get_custom_object_client():
        """
            Gets k8s api client for custom objects.
        """
        return client.CustomObjectsApi(K8S.get_client())

    @staticmethod
    def get_core_v1_client():
        """
            Gets k8s core V1 api.
        """
        return client.CoreV1Api(K8S.get_client())

    @staticmethod
    @retry(stop=stop_after_delay(60), retry=retry_if_exception_type(TryAgain),
           wait=wait_fixed(5), reraise=True)
    def list_pods():
        v1_client = K8S.get_core_v1_client()
        try:
            return v1_client.list_namespaced_pod(constants.NAMESPACE_DEFAULT, label_selector='split')
        except ApiException as err:
            logging.error(f"[K8S] Error listing pods: {err}")
            raise TryAgain

    @staticmethod
    @retry(stop=stop_after_delay(60), retry=retry_if_exception_type(TryAgain),
           wait=wait_fixed(5), reraise=True)
    def logs(pod_name: str):
        """
            Gets the logs of the desired pod.
        """
        k8s_client = K8S.get_core_v1_client()
        try:
            return k8s_client.read_namespaced_pod_log(name=pod_name,
                                                      namespace=constants.NAMESPACE_OAI)
        except ApiException as err:
            logging.error(f"[K8S] Error getting pod logs: {err}")
            raise TryAgain
