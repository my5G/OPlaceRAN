#!/bin/sh
#vars
PLACER="/root/RANPlacer/k8s-operators/config/samples/ran_v1alpha1_ranplacer.yaml"
TESTE_NUMBER="3"
mkdir "$TESTE_NUMBER"

for i in 1 2 3 4 5 6 7 8 9 10
do
    DIR="$TESTE_NUMBER/$(date +%Y-%m-%d_%H:%M)/"
    mkdir "$DIR"
    echo "$PLACER"
    kubectl apply -f "$PLACER"
    kubectl top nodes > "$DIR"it_"$i"_nodes_0s.txt && kubectl top pods > "$DIR"it_"$i"_pods_0s.txt
    sleep 30 && kubectl top nodes > "$DIR"it_"$i"_nodes_30s.txt && kubectl top pods > "$DIR"it_"$i"_pods_30s.txt
    sleep 30 && kubectl top nodes > "$DIR"it_"$i"_nodes_60s.txt && kubectl top pods > "$DIR"it_"$i"_pods_60s.txt
    sleep 30 && kubectl top nodes > "$DIR"it_"$i"_nodes_90s.txt && kubectl top pods > "$DIR"it_"$i"_pods_90s.txt
    sleep 30 && kubectl top nodes > "$DIR"it_"$i"_nodes_120s.txt && kubectl top pods > "$DIR"it_"$i"_pods_120s.txt
    sleep 30 && kubectl top nodes > "$DIR"it_"$i"_nodes_180s.txt && kubectl top pods > "$DIR"it_"$i"_pods_180s.txt
    sleep 30 && kubectl top nodes > "$DIR"it_"$i"_nodes_210s.txt && kubectl top pods > "$DIR"it_"$i"_pods_210s.txt
    sleep 30 && kubectl top nodes > "$DIR"it_"$i"_nodes_240s.txt && kubectl top pods > "$DIR"it_"$i"_pods_240s.txt
    sleep 30 && kubectl top nodes > "$DIR"it_"$i"_nodes_270s.txt && kubectl top pods > "$DIR"it_"$i"_pods_270s.txt
    sleep 30 && kubectl top nodes > "$DIR"it_"$i"_nodes_300s.txt && kubectl top pods > "$DIR"it_"$i"_pods_300s.txt
    sleep 30 && kubectl top nodes > "$DIR"it_"$i"_nodes_360s.txt && kubectl top pods > "$DIR"it_"$i"_pods_360s.txt
    sleep 30 && kubectl top nodes > "$DIR"it_"$i"_nodes_420s.txt && kubectl top pods > "$DIR"it_"$i"_pods_420s.txt
    sleep 30 && kubectl top nodes > "$DIR"it_"$i"_nodes_480s.txt && kubectl top pods > "$DIR"it_"$i"_pods_480s.txt
    sleep 30 && kubectl top nodes > "$DIR"it_"$i"_nodes_540s.txt && kubectl top pods > "$DIR"it_"$i"_pods_540s.txt
    sleep 30 && kubectl top nodes > "$DIR"it_"$i"_nodes_600s.txt && kubectl top pods > "$DIR"it_"$i"_pods_600s.txt
    kubectl get randeployer --all-namespaces > "$DIR"pods_location.txt
    kubectl delete ranplacer ranplacer-sample && sleep 300
done