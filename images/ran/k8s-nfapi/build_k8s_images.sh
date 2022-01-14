#!/bin/bash

docker build -t replacer -f replacer/Dockerfile replacer/
docker build -t lte_softmodem_k8s -f cu-du/Dockerfile cu-du/
docker build -t ue_softmodem_k8s -f ru/Dockerfile ru/

docker tag replacer cr.mti.mt.gov.br/oplaceran/replacer:1
docker tag lte_softmodem_k8s cr.mti.mt.gov.br/oplaceran/lte_softmodem_k8s:1
docker tag ue_softmodem_k8s cr.mti.mt.gov.br/oplaceran/ue_softmodem_k8s:1

docker push cr.mti.mt.gov.br/oplaceran/replacer:1
docker push cr.mti.mt.gov.br/oplaceran/lte_softmodem_k8s:1
docker push cr.mti.mt.gov.br/oplaceran/ue_softmodem_k8s:1
