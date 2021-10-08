FROM ubuntu:18.04

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get -y install iptables autoconf libtool gcc pkg-config \
    git flex bison libsctp-dev libgnutls28-dev libgcrypt-dev \
    libssl-dev libidn11-dev libmongoc-dev libbson-dev libyaml-dev \
    golang-go ifupdown net-tools curl vim net-tools sudo apt-utils && \
    go get -u -v "github.com/gorilla/mux" && \
    go get -u -v "golang.org/x/net/http2" && \
    go get -u -v "golang.org/x/sys/unix"

COPY context/free5gc free5gc

RUN cd /free5gc/support/freeDiameter && ./make_certs.sh . && \
    cd /free5gc && autoreconf -iv && ./configure --prefix=`pwd`/install && \
    make -j `nproc` && make install

COPY context/setup-uptun.sh /root/setup-uptun.sh
COPY context/iptables.sh /root/iptables.sh
COPY context/create-interfaces.sh /root/create-interfaces.sh
COPY context/exec.sh exec.sh 
RUN chmod +x exec.sh
COPY context/replacer.sh /root/replacer.sh 
RUN touch free5gc/install/var/log/free5gc/free5gc.log
RUN ln -sf /dev/stdout free5gc/install/var/log/free5gc/free5gc.log \
    && ln -sf /dev/stderr free5gc/install/var/log/free5gc/free5gc.log
ENTRYPOINT ["/exec.sh"]
