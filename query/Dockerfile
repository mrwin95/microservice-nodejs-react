FROM node:14-alpine

WORKDIR /query

COPY package*.json ./

RUN mkdir app && chown -R node:node .
USER node

RUN npm i && npm cache clean --force

WORKDIR /query/app

COPY ./ ./

CMD ["npm", "start"]

