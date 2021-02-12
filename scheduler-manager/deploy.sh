#!/bin/bash

docker build . -t algorithm-scheduler:1

kubectl apply -f deployment.yaml
