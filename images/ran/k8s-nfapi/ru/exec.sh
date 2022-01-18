#!/bin/bash

date "+%Y-%m-%dT%H:%M:%S"

echo "MSIN is: $MSIN"
MSIN=$MSIN ./root/script.sh

echo "=== /openairinterface5g/openair3/NAS/TOOLS/ue_eurecom_test_sfr.conf FILE"
cat /openairinterface5g/openair3/NAS/TOOLS/ue_eurecom_test_sfr.conf
echo "=== /openairinterface5g/openair3/NAS/TOOLS/ue_eurecom_test_sfr.conf FILE"

cd /openairinterface5g/targets/bin && sudo ./conf2uedata -c /openairinterface5g/openair3/NAS/TOOLS/ue_eurecom_test_sfr.conf -o /openairinterface5g/cmake_targets/ran_build/build/

/replacer
if [ $? -ne 0 ]; then
    echo "replacer failed"
    exit 1
fi

echo "Delaying RU to start to avoid race condition..."
sleep 120

cd /
nohup /get_ping.sh &>/dev/stdout &

echo "Starting RU..."
cd /openairinterface5g/cmake_targets/ran_build/build/
./lte-uesoftmodem -O /config/config.conf --L2-emul 3 --num-ues 1 --nums_ue_thread 1 --nokrnmod 1