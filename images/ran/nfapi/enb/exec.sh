#!/bin/bash

cd openairinterface5g/cmake_targets/ran_build/build/
sudo -E ./lte-softmodem -O /openairinterface5g/ci-scripts/conf_files/rcc.band7.tm1.nfapi.conf
