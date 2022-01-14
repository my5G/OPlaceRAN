#!/bin/bash

echo "Building base images"

docker build -f base-images/oaisim-base/Dockerfile -t oaisim_base base-images/oaisim-base/

#docker build -f base-images/lte-softmodem/Dockerfile.develop -t lte_base_develop base-images/lte-softmodem/
#docker build -f base-images/lte-softmodem/Dockerfile.w16 -t lte_base_w16 base-images/lte-softmodem/
#docker build -f base-images/lte-softmodem/Dockerfile.w30 -t lte_base_w30 base-images/lte-softmodem/
docker build -f base-images/lte-softmodem/Dockerfile.2021.w09 -t lte_base_2021_w09 base-images/lte-softmodem/

#docker build -f base-images/lte-uesoftmodem/Dockerfile.develop -t ue_base_develop base-images/lte-uesoftmodem/
#docker build -f base-images/lte-uesoftmodem/Dockerfile.w16 -t ue_base_w16 base-images/lte-uesoftmodem/
#docker build -f base-images/lte-uesoftmodem/Dockerfile.w30 -t ue_base_w30 base-images/lte-uesoftmodem/
docker build -f base-images/lte-uesoftmodem/Dockerfile.2021.w09 -t ue_base_2021_w09 base-images/lte-uesoftmodem/