#!/bin/bash

docker build . -t lte_softmodem_k8s:latest
docker build . -t ue_softmodem_k8s:latest
