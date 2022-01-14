  
#!/bin/bash

# if [ -z $1 ]; then
#     echo "Error: ue file must be passed as first argument!"
#     echo ""
#     echo "usage: register_ues <ues_file>"
#     echo ""

#     exit 1
# fi

ues_file="/openairinterface5g/openair3/NAS/TOOLS/ue_eurecom_test_sfr.conf"

# default credentials
user='admin'
password='1423'

if [ -z $NUM_UES ]; then
    NUM_UES=1
fi

FREE5G_WEB_URL=192.188.2.11:3000
# if [ -z $FREE5G_WEB_URL ]; then
#     echo "Error: FREE5G_WEB_URL env var must be defined!"
#     exit 1
# fi

if [ ! -z $FREE5G_WEB_USER ]; then
    user=$FREE5G_WEB_USER
fi

if [ ! -z $FREE5G_WEB_PASSWORD ]; then
    password=$FREE5G_WEB_PASSWORD
fi

csrf=$(curl "$FREE5G_WEB_URL/api/auth/csrf" \
  -H 'Connection: keep-alive' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36' \
  -H 'X-CSRF-TOKEN: undefined' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Accept-Language: en-US,en;q=0.9,pt;q=0.8,pt-BR;q=0.7' \
  --cookie-jar /tmp/free5gc.txt \
  --silent \
  --compressed | sed 's/.*"csrfToken":"\([^"]\+\)".*/\1/')


status_code=$(curl -L "$FREE5G_WEB_URL/api/auth/login" \
  -H 'Connection: keep-alive' \
  -H 'Accept: application/json, text/plain, */*' \
  -H "X-CSRF-TOKEN: $csrf" \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36' \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H "Origin: $FREE5G_WEB_URL" \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Accept-Language: en-US,en;q=0.9,pt;q=0.8,pt-BR;q=0.7' \
  -b /tmp/free5gc.txt \
  -o /dev/null \
  --data-binary "{\"username\":\"$user\",\"password\":\"$password\"}" \
  --compressed \
  --write-out %{http_code} --silent --output /dev/null)


if [ $status_code -ne 200 ]; then
    echo "Error on login! HTTP Status Code: $status_code"
    exit 1
fi

i=1

HPLMN=20893
USIM_API_K="8baf473f2f8fd09487cccbd7097c6862"
OPC="e734f8734007d6c5ce7a0508809e7e9c"

while [ $i -le $NUM_UES ]; do
  MSIN=$(printf "%010d" $i)
  IMSI="$HPLMN$MSIN"

  status_code=$(curl -L "$FREE5G_WEB_URL/api/db/Subscriber" \
    -H 'Connection: keep-alive' \
    -H 'Accept: application/json, text/plain, */*' \
    -H "X-CSRF-TOKEN: $csrf" \
    -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36' \
    -H 'Content-Type: application/json;charset=UTF-8' \
    -H 'Sec-Fetch-Site: same-origin' \
    -H 'Sec-Fetch-Mode: cors' \
    -H 'Sec-Fetch-Dest: empty' \
    -H 'Accept-Language: en-US,en;q=0.9,pt;q=0.8,pt-BR;q=0.7' \
    -b /tmp/free5gc.txt \
    --data-binary '{"imsi":"'$IMSI'","security":{"k":"'$USIM_API_K'","amf":"8000","op_type":0,"op_value":"'$OPC'","op":null,"opc":"'$OPC'"},"ambr":{"downlink":1024000,"uplink":1024000},"pdn":[{"apn":"internet","qos":{"qci":9,"arp":{"priority_level":8,"pre_emption_capability":1,"pre_emption_vulnerability":1}}}]}' \
    --compressed \
    --write-out %{http_code} --silent --output /dev/null)

  # Remove if exists and not increment $i to try to create
  if [ $status_code -eq 400 ]; then
    curl -XDELETE "$FREE5G_WEB_URL/api/db/Subscriber/$IMSI" -b /tmp/free5gc.txt -H "X-CSRF-TOKEN: $csrf" --silent
  else
    ue_number=$((i-1))

echo 'UE'$ue_number':
{
    USER: {
        IMEI="356113022094149";
        MANUFACTURER="EURECOM";
        MODEL="LTE Android PC";
        PIN="0000";
    };
    SIM: {
        MSIN="'$MSIN'";
        USIM_API_K="'$USIM_API_K'";
        OPC="'$OPC'";
        MSISDN="33611123456";
    };
    # Home PLMN Selector with Access Technology
    HPLMN= "20893";
    # User controlled PLMN Selector with Access Technology
    UCPLMN_LIST = ();
    # Operator PLMN List
    OPLMN_LIST = ("00101", "20810", "20811", "20813", "20893", "310280", "310028");
    # Operator controlled PLMN Selector with Access Technology
    OCPLMN_LIST = ("22210", "21401", "21406", "26202", "26204");
    # Forbidden plmns
    FPLMN_LIST = ();
    # List of Equivalent HPLMNs
#TODO: UE does not connect if set, to be fixed in the UE
#    EHPLMN_LIST= ("20811", "20813");
    EHPLMN_LIST= ();
};' >> $ues_file

     i=$((i+1))
    
   fi
done
