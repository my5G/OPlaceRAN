FROM golang:1.14.4
COPY . /replacer
WORKDIR /replacer

RUN GOOS=linux GOARCH=amd64 go build -o bin/replacer -mod vendor cmd/main.go

#FROM ubuntu:18.04
#COPY --from=builder /replacer/bin/replacer /replacer
#COPY config /config
#CMD ./replacer ; tail -f /dev/null