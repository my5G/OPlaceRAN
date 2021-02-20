import uuid
import json
import os

from kubernetes import client, config
from kubernetes.client.rest import ApiException

VOLUME_NAME_ALGORITHM_INPUT = "algorithm-input"

NAMESPACE = "default"

CONFIG_MAP_KEY_NODES = "nodes.json"
CONFIG_MAP_KEY_TOPOLOGY = "topology.json"
CONFIG_MAP_KEY_RUS = "rus.json"

ROLLBACK_CONFIG_MAP_KEY = "config_map"
ROLLBACK_JOB_KEY = "job"

STATUS_COMPLETED = "completed"
STATUS_FAILED = "failed"
STATUS_RUNNING = "running"
STATUS_BAD_OUTPUT = "bad_output"

ENV_VAR_JOB_NAME = "JOB_NAME"
ENV_VAR_DOCKER_REPOSITORY = "DOCKER_REPOSITORY"


class JobHandler:

    def __init__(self, job_token=None):
        self.resources_identifier = job_token
        if self.resources_identifier is None:
            self.resources_identifier = str(uuid.uuid1())

        config.load_incluster_config()

        self.batch_client = client.BatchV1Api()
        self.v1_client = client.CoreV1Api()

# Use the following if running from outside K8S
#         config.load_kube_config()
#
#         configuration = client.Configuration()
#         api_client = client.ApiClient(configuration)
#         self.batch_client = client.BatchV1Api(api_client)
#         self.v1_client = client.CoreV1Api(api_client)

        # Resources to rollback in case of issues during processing
        self.rollback_resources = []

    def register(self, nodes, topology, algorithm):

        try:
            # Register Job Config Map
            self._register_job_configmap(nodes, topology)

            # Register Job
            self._register_job(algorithm)

            # Update Config Map Owner Reference
            self._update_config_map_owner_reference()
        except ApiException as e:
            self._rollback()
            print(e)
            raise

        return self.resources_identifier

    def get_result(self):
        job = self.batch_client.read_namespaced_job(
            name=self.resources_identifier, namespace=NAMESPACE)

        if job.status.failed == 5:
            return {"status": STATUS_FAILED}

        if job.status.completion_time is None:
            return {"status": STATUS_RUNNING}

        output = self._get_algorithm_output()

        try:
            output_obj = json.loads(output)
        except ValueError:
            return {"status": STATUS_BAD_OUTPUT}

        print(output_obj)

        return {"status": STATUS_COMPLETED, "result": output_obj}

    def _register_job(self, algorithm):
        job = self._get_job_object(algorithm)
        self.batch_client.create_namespaced_job(NAMESPACE, job)

        self.rollback_resources.append(ROLLBACK_JOB_KEY)

    def _register_job_configmap(self, nodes, topology):
        cm = client.V1ConfigMap()

        cm.metadata = client.V1ObjectMeta(
            namespace=NAMESPACE, name=self.resources_identifier)

        values = self._prepare_data_for_algorithm(nodes, topology)

        cm.data = dict()
        cm.data[CONFIG_MAP_KEY_NODES] = json.dumps(values["nodes"])
        cm.data[CONFIG_MAP_KEY_TOPOLOGY] = json.dumps(values["topology"])
        # cm.data[CONFIG_MAP_KEY_RUS] = str(rus)

        self.v1_client.create_namespaced_config_map(
            namespace=NAMESPACE, body=cm)

        self.rollback_resources.append(ROLLBACK_CONFIG_MAP_KEY)

    def _prepare_data_for_algorithm(self, nodes, topology):
        # Keeping pattern from ng-ran-model, should be removed after
        # the nodes key is not necessary.
        nodes_value = {
            "nodes": nodes
        }

        # topology_value = []
        # for v in topology:
        #     topology_value.append(topology[v])

        t = {
            "links": topology
        }

        return {
            "nodes": nodes_value,
            "topology": t
        }

    def _update_config_map_owner_reference(self):
        cm = self.v1_client.read_namespaced_config_map(
            name=self.resources_identifier, namespace=NAMESPACE)
        job = self.batch_client.read_namespaced_job(
            name=self.resources_identifier, namespace=NAMESPACE)
        cm.metadata.owner_references = []

        job_owner_ref = client.V1OwnerReference(
            api_version=job.api_version, kind="Job", name=self.resources_identifier, uid=job.metadata.uid)

        cm.metadata.owner_references.append(job_owner_ref)

        self.v1_client.patch_namespaced_config_map(
            name=self.resources_identifier, namespace=NAMESPACE, body=cm)

    def _get_job_object(self, algorithm):
        job = client.V1Job()

        # Define job metadata
        job.metadata = client.V1ObjectMeta(
            namespace=NAMESPACE, name=self.resources_identifier)

        # Define job spec
        template = client.V1PodTemplate()
        template.template = client.V1PodTemplateSpec()

        env_list = []
        env_list.append(client.V1EnvVar(name=ENV_VAR_JOB_NAME,
                                        value=self.resources_identifier))

        docker_repo = os.environ.get(ENV_VAR_DOCKER_REPOSITORY, "")
        if docker_repo != "":
            image_name = f"{docker_repo}/{algorithm}:latest"
        else:
            image_name = f"{algorithm}:latest"

        volume_mounts = [client.V1VolumeMount(
            name=VOLUME_NAME_ALGORITHM_INPUT, mount_path="/etc/config")]
        container = client.V1Container(
            name="algorithm", image=image_name, volume_mounts=volume_mounts, env=env_list, image_pull_policy="Always")
        # command=["sleep", "5"])

        cm_mount = client.V1ConfigMapVolumeSource(
            name=self.resources_identifier)
        volumes = [client.V1Volume(
            config_map=cm_mount, name=VOLUME_NAME_ALGORITHM_INPUT)]

        template.template.spec = client.V1PodSpec(
            containers=[container], restart_policy='Never', volumes=volumes)
        job.spec = client.V1JobSpec(
            ttl_seconds_after_finished=1200, template=template.template)

        return job

    def _rollback(self):
        body = client.V1DeleteOptions()

        # Owner reference may not be set
        if ROLLBACK_CONFIG_MAP_KEY in self.rollback_resources:
            try:
                self.v1_client.delete_namespaced_config_map(
                    name=self.resources_identifier, namespace=NAMESPACE, body=body)
            except ApiException as e:
                print(
                    f"error rolling back ConfigMap {self.resources_identifier}: {e}")
        if ROLLBACK_JOB_KEY in self.rollback_resources:
            try:
                self.batch_client.delete_namespaced_job(
                    name=self.resources_identifier, namespace=NAMESPACE, body=body)
            except ApiException as e:
                print(
                    f"error rolling back Job {self.resources_identifier}: {e}")

    def _get_algorithm_output(self):
        cm_name = f"{self.resources_identifier}-result"
        cm = self.v1_client.read_namespaced_config_map(
            name=cm_name, namespace=NAMESPACE)

        return cm.data["result"]
