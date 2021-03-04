#!/bin/sh
#vars
PLACER="/home/vmadmin/RANPlacer/k8s-operators/config/samples/ran_v1alpha1_ranplacer.yaml"
OUTPUT_FOLDER="/home/vmadmin/RANPlacer/result-collectors/resources-validation"
COLLECT_INTERVAL=5
EACH_TEST_DURATION=900
NUMBER_OF_TESTS=10
mkdir "$OUTPUT_FOLDER"
i=1
s=0
while [ $i -le $NUMBER_OF_TESTS ]
do
    DIR="$OUTPUT_FOLDER/$(date +%Y-%m-%d_%H:%M)/"
    mkdir "$DIR"
    #echo "$PLACER"
    kubectl apply -f "$PLACER"
    while [ $s -le $EACH_TEST_DURATION ]
    do
        kubectl top nodes > "$DIR"it_"$i"_nodes_"$s"s.txt && kubectl top pods > "$DIR"it_"$i"_pods_"$s"s.txt && sleep "$COLLECT_INTERVAL"
        s=$(( $s + $COLLECT_INTERVAL ))
        #echo $s
    done
    kubectl get randeployer --all-namespaces > "$DIR"pods_location.txt
    kubectl delete ranplacer ranplacer-sample && sleep 180
    i=$(( $i + 1 ))
    #echo $i
    s=0
done