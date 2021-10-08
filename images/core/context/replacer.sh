#!/bin/bash

POD_IP=$(/sbin/ip -o -4 addr list eth0 | awk '{print $4}' | cut -d/ -f1)

#Updates Ips
sed -i "s/192.188.2.2/$POD_IP/g" /free5gc/install/etc/free5gc/amf.conf
sed -i "s/localhost\/free5gc/$DB_IP\/free5gc/g" /free5gc/install/etc/free5gc/amf.conf
sed -i "s/192.188.2.2/$POD_IP/g" /free5gc/install/etc/free5gc/upf.conf
sed -i "s/localhost\/free5gc/$DB_IP\/free5gc/g" /free5gc/install/etc/free5gc/pcrf.conf
sed -i "s/192.188.2.2/$POD_IP/g" /free5gc/install/etc/free5gc/free5gc.conf
sed -i "s/localhost\/free5gc/$DB_IP\/free5gc/g" /free5gc/install/etc/free5gc/free5gc.conf
sed -i "s/192.188.2.2/$POD_IP/g" /free5gc/install/etc/free5gc/test/free5gc.testngc.conf
sed -i "s/localhost\/free5gc/$DB_IP\/free5gc/g" /free5gc/install/etc/free5gc/test/free5gc.testngc.conf

#Increase log verbosity
sed -i "s/app: 1/app: 5/g" /free5gc/install/etc/free5gc/free5gc.conf
sed -i "s/s1ap: 1/s1ap: 5/g" /free5gc/install/etc/free5gc/free5gc.conf
sed -i "s/diameter: 1/diameter: 5/g" /free5gc/install/etc/free5gc/free5gc.conf
sed -i "s/pfcp: 1/pfcp: 5/g" /free5gc/install/etc/free5gc/free5gc.conf
sed -i "s/sbi: 1/sbi: 5/g" /free5gc/install/etc/free5gc/free5gc.conf
sed -i "s/nas: 1/nas: 5/g" /free5gc/install/etc/free5gc/free5gc.conf
sed -i "s/gtp: 1/gtp: 5/g" /free5gc/install/etc/free5gc/free5gc.conf

/root/create-interfaces.sh
sleep 5
/root/setup-uptun.sh
sleep 5
/root/iptables.sh