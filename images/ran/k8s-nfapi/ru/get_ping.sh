#!/bin/bash
echo "get_ping | Sleeping to wait interface oaitun_ue1 up."

sleep 60

echo "get_ping | Creating output file $HOSTNAME.txt"

touch $HOSTNAME.txt


echo "get_ping | Ping from interface oaitun_ue1."

unlink /etc/localtime   
cp /usr/share/zoneinfo/America/Cuiaba /etc/localtime
date >> $HOSTNAME.txt
iperf -c 10.41.101.100 -i 1 -B 45.45.0.2 -t 60 >> $HOSTNAME.txt

echo "get_ping | Send file to collector."

chmod 400 /root/.ssh/id_rsa

scp -o "StrictHostKeyChecking no" -i ~/.ssh/id_rsa $HOSTNAME.txt vmadmin@10.41.101.100:tests/results