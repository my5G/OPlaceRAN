docker build -f Dockerfile -t controller:latest .

docker tag controller:latest cr.mti.mt.gov.br/oplaceran/controller:latest

docker push cr.mti.mt.gov.br/oplaceran/controller:latest
