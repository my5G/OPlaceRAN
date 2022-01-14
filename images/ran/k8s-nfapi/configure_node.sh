#install Docker
apt update
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
sudo apt update
sudo apt install -y docker-ce

# Configure register
cat > /etc/docker/daemon.json <<EOL
{
    "insecure-registries" : [ "10.43.0.201:5000" ]
}
EOL

#Restart Docker engine to apply new settings
systemctl restart docker

