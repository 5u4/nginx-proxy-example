FROM node:10

WORKDIR /opt/server

COPY . .

RUN "yarn"

EXPOSE 3000

CMD ["node", "index.js"]
