#!/bin/bash

DOCKER_REPOSITORY=$1

if [ -z "$DOCKER_REPOSITORY" ]; then
    DOCKER_REPOSITORY="10.43.0.201:5000";
fi

docker build . -t ${DOCKER_REPOSITORY}/algorithm-scheduler:1

docker push ${DOCKER_REPOSITORY}/algorithm-scheduler:1

kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/rbac.yaml
