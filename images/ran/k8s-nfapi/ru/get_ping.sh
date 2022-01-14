#!/bin/bash
echo "get_ping | Sleeping to wait interface oaitun_ue1 up."

sleep 120

echo "get_ping | Creating output file $HOSTNAME.txt"

touch $HOSTNAME.txt


echo "get_ping | Ping from interface oaitun_ue1."

ping -I oaitun_ue1 10.43.0.201 -w 10 >> $HOSTNAME.txt

echo "get_ping | Send file to collector."

chmod 400 /root/.ssh/id_rsa

scp -o "StrictHostKeyChecking no" -i ~/.ssh/id_rsa $HOSTNAME.txt vmadmin@10.43.0.201:tests/ping_results