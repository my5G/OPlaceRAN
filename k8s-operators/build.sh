docker build -f Dockerfile -t controller:latest .

docker tag controller:latest 10.43.0.201:5000/controller:latest

docker push 10.43.0.201:5000/controller:latest
