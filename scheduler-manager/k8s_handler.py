import uuid

from kubernetes import client, config
from kubernetes.client.rest import ApiException

VOLUME_NAME_ALGORITHM_INPUT = "algorithm-input"
CONFIG_MAP_KEY_NODES = "nodes.json"
CONFIG_MAP_KEY_TOPOLOGY = "topology.json"
NAMESPACE = "default"

ROLLBACK_CONFIG_MAP_KEY = "config_map"
ROLLBACK_JOB_KEY = "job"

STATUS_COMPLETED = "completed"
STATUS_FAILED = "failed"
STATUS_RUNNING = "running"


class JobHandler:

    def __init__(self, job_token=None):
        self.resources_identifier = job_token
        if self.resources_identifier is None:
            self.resources_identifier = str(uuid.uuid1())

        # Configs can be set in Configuration class directly or using helper utility
        config.load_kube_config()

        configuration = client.Configuration()
        api_client = client.ApiClient(configuration)
        self.batch_client = client.BatchV1Api(api_client)
        self.v1_client = client.CoreV1Api(api_client)

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

        if job.status.completionTime is None:
            return {"status": STATUS_RUNNING}

        if job.status.succeeded is None or job.status.succeeded == 0:
            return {"status": STATUS_FAILED}

        return {"status": STATUS_COMPLETED, "result": self._get_algorithm_output()}

    def _register_job(self, algorithm):
        job = self._get_job_object(algorithm)
        self.batch_client.create_namespaced_job(NAMESPACE, job)

        self.rollback_resources.append(ROLLBACK_JOB_KEY)

    def _register_job_configmap(self, nodes, topology):
        cm = client.V1ConfigMap()

        cm.metadata = client.V1ObjectMeta(
            namespace=NAMESPACE, name=self.resources_identifier)

        cm.data = dict()
        cm.data[CONFIG_MAP_KEY_NODES] = str(nodes)
        cm.data[CONFIG_MAP_KEY_TOPOLOGY] = str(topology)

        self.v1_client.create_namespaced_config_map(
            namespace=NAMESPACE, body=cm)

        self.rollback_resources.append(ROLLBACK_CONFIG_MAP_KEY)

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

        volume_mounts = client.V1VolumeMount(
            name=VOLUME_NAME_ALGORITHM_INPUT, mount_path="/etc/config")
        container = client.V1Container(
            name="algorithm", image=algorithm, volume_mounts=volume_mounts,
            command=["sleep", "500"])

        cm_mount = client.V1ConfigMapVolumeSource(
            name=self.resources_identifier)
        volumes = [client.V1Volume(
            config_map=cm_mount, name=VOLUME_NAME_ALGORITHM_INPUT)]

        template.template.spec = client.V1PodSpec(
            containers=[container], restart_policy='Never', volumes=volumes)
        job.spec = client.V1JobSpec(
            ttl_seconds_after_finished=600, template=template.template)

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


job_handler = JobHandler()

job_handler.register({}, {}, "ubuntu")
