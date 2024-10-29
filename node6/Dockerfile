FROM ubuntu:bionic

ENV NODE_ENV=production

WORKDIR /app

    # apk update \
    # && apk add --no-cache wget \
RUN apt-get update -y && apt-get install wget -y && wget https://nodejs.org/dist/v6.17.1/node-v6.17.1-linux-x64.tar.gz \
    && tar -xf "node-v6.17.1-linux-x64.tar.gz"

COPY where-is-the-tmp-dir.js .

ENTRYPOINT ["/app/node-v6.17.1-linux-x64/bin/node", "/app/where-is-the-tmp-dir.js"]
