FROM ubuntu:bionic

ENV NODE_ENV=production

WORKDIR /app

RUN apt-get update -y && apt-get install wget -y && wget https://nodejs.org/dist/v14.9.0/node-v14.9.0-linux-x64.tar.gz \
    && tar -xf "node-v14.9.0-linux-x64.tar.gz"

COPY create-private-key-pair.js .

ENTRYPOINT ["/app/node-v14.9.0-linux-x64/bin/node", "/app/create-private-key-pair.js"]