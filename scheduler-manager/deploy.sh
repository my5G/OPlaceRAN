#!/bin/bash

DOCKER_REPOSITORY=$1

docker build . -t ${DOCKER_REPOSITORY}/algorithm-scheduler:1

kubectl apply -f deployment.yaml
