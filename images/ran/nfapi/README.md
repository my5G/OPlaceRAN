# Run NFAPI Scenario

## Core

1. Build the core base image: `sudo docker build -t free5gc-base .`
2. Start the core: `docker-compose build && docker-compose up -d`
3. Go to the webapp (port 3000) and register the UE device.

## RAN

1. First build the base images by running the `build_all.sh` script.
2. Start the nfapi scenario: `docker-compose build && docker-compose up -d`
3. Access the UE pod and make sure the `oaitun_ue1` tunnel is configure when running `ifconfig`.

PS: Sometimes the tunnel `oaitun_ue1` may not be configured, try stopping the
ran containers with `docker-compose stop` and starting them again `docker-compose up -d`. If
the issue isn't solved, check the AMF logs.
