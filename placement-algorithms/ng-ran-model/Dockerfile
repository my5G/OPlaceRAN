FROM leoliveroso/cplex-ubuntu-python36:1.0

COPY . /usr/src

WORKDIR /usr/src/

RUN pip install --no-cache-dir -r requirements.txt

WORKDIR /usr/src/app

# COPY exec.sh /exec.sh

# ENTRYPOINT ["/exec.sh"]

ENTRYPOINT [ "python3", "./algorithm.py" ]
