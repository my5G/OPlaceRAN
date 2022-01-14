#!/bin/bash

date "+%Y-%m-%dT%H:%M:%S"

/replacer
if [ $? -ne 0 ]; then
    echo "replacer failed"
    exit 1
fi

cd openairinterface5g/cmake_targets/ran_build/build/

if [[ $HOSTNAME = *du-* ]]
then
    echo "Delaying DU to start to avoid race condition..."
    sleep 30
    echo "Starting DU..."
fi

if [[ $HOSTNAME = *cu-* ]]
then
    echo "Starting CU..."
fi

sudo -E ./lte-softmodem -O /config/config.conf
# sudo -E /openairinterface5g/targets/bin/lte-softmodem.Rel15 -O /openairinterface5g/ci-scripts/conf_files/cu.conf
