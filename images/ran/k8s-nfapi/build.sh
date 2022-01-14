#!/bin/bash

docker build -t replacer -f replacer/Dockerfile replacer/
docker build -t lte_softmodem_k8s -f cu-du/Dockerfile cu-du/
docker build -t ue_softmodem_k8s -f ru/Dockerfile ru/

docker tag replacer 10.43.0.201:5000/replacer:1
docker tag lte_softmodem_k8s 10.43.0.201:5000/lte_softmodem_k8s:1
docker tag ue_softmodem_k8s 10.43.0.201:5000/ue_softmodem_k8s:1

docker push 10.43.0.201:5000/replacer:1
docker push 10.43.0.201:5000/lte_softmodem_k8s:1
docker push 10.43.0.201:5000/ue_softmodem_k8s:1
