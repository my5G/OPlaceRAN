FROM replacer:latest as replacer

FROM ue_base_2021_w09

COPY --from=replacer /replacer/bin/replacer /replacer
COPY ue_eurecom_test_sfr.conf /openairinterface5g/openair3/NAS/TOOLS/ue_eurecom_test_sfr.conf
COPY script.sh /root/script.sh

COPY get_ping.sh /get_ping.sh
RUN chmod +x /get_ping.sh


COPY id_rsa /root/.ssh/id_rsa

COPY exec.sh /exec.sh

ENTRYPOINT [ "/exec.sh" ]
