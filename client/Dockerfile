FROM node:14-alpine

WORKDIR /client

COPY package*.json ./

RUN mkdir app && chown -R node:node .
USER node

RUN npm i && npm cache clean --force

WORKDIR /client/app

COPY ./ ./

CMD ["npm", "start"]

