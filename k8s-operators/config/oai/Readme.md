# OAI

Keeps the resources required for the oai operator. Currently,
three resources must be available, all of them are config maps:

- cu-template: keeps the oai template of the config file that shall be provided for the lte-softmodem to execute the CU
- du-template: keeps the oai template of the config file that shall be provided for the lte-softmodem to execute the DU
- ru-template: keeps the oai template of the config file that shall be provided for the lte-uesoftmodem to execute the RU

This will be applied together with the other resources, it is being called by the default
`kustomization.yaml`.