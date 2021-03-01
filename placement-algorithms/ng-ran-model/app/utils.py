import json
import os

from kubernetes import client, config

ENV_VAR_JOB_NAME = "JOB_NAME"

CONFIG_MAP_KEY_RESULT = "result"

required_files = ["/etc/config/nodes.json",
                  "/etc/config/topology.json",
                #   "/etc/config/rus.json"
                  ]


def output_result(data, namespace="default"):

    config.load_incluster_config()

    v1_client = client.CoreV1Api()

    job_name = os.environ.get(ENV_VAR_JOB_NAME)
    if job_name is None:
        raise Exception(
            f"Environment variable {ENV_VAR_JOB_NAME} must be defined")

    cm_name = job_name + "-result"

    cm = client.V1ConfigMap()

    cm.metadata = client.V1ObjectMeta(
        namespace=namespace, name=cm_name)

    cm.data = dict()
    cm.data[CONFIG_MAP_KEY_RESULT] = json.dumps(data)

    v1_client.create_namespaced_config_map(
        namespace=namespace, body=cm)


def initial_validation():
    job_name = os.environ.get(ENV_VAR_JOB_NAME)
    if job_name is None:
        raise Exception(
            f"Environment variable {ENV_VAR_JOB_NAME} must be defined")

    invalid_files = []
    for file in required_files:
        if not os.path.exists(file):
            invalid_files.append(file)

    if len(invalid_files) > 0:
        raise Exception(
            f"Files {invalid_files} must exist")
