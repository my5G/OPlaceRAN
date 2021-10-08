docker build -f Dockerfile -t core:latest .

docker tag core:latest 10.43.0.201:5000/core:latest

docker push 10.43.0.201:5000/core:latest
