FROM ue_base_w16

COPY ue.nfapi.conf /openairinterface5g/ci-scripts/conf_files/ue.nfapi.conf
COPY ue_eurecom_test_sfr.conf /openairinterface5g/openair3/NAS/TOOLS/ue_eurecom_test_sfr.conf
COPY script.sh /root/script.sh

RUN sudo ./root/script.sh
RUN cd openairinterface5g/targets/bin && sudo ./conf2uedata -c /openairinterface5g/openair3/NAS/TOOLS/ue_eurecom_test_sfr.conf -o /openairinterface5g/cmake_targets/ran_build/build/

COPY exec.sh /exec.sh

ENTRYPOINT ["/exec.sh"]
