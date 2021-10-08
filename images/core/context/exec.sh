#!/bin/bash

echo Setting up the core.

bash /root/replacer.sh
chmod +x /free5gc/free5gc-ngcd
cd free5gc
echo Starting core.
./free5gc-ngcd