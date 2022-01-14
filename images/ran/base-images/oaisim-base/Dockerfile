FROM ubuntu:18.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y git vim nano net-tools \
    cmake g++ kmod linux-image-$(uname -r) linux-headers-$(uname -r) \
    sudo iputils-ping curl unzip dumb-init tzdata

RUN adduser l2nfapi
RUN adduser l2nfapi sudo
RUN echo "l2nfapi      ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

USER l2nfapi
USER root

RUN git clone https://gitlab.eurecom.fr/oai/openairinterface5g.git