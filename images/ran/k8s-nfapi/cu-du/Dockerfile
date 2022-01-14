FROM replacer:latest as replacer

FROM lte_base_2021_w09

COPY --from=replacer /replacer/bin/replacer /replacer
COPY exec.sh /exec.sh

ENTRYPOINT ["/exec.sh"]
