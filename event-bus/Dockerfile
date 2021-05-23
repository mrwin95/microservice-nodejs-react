FROM node:14-alpine

WORKDIR /event-bus

COPY package*.json ./

RUN mkdir app && chown -R node:node .
USER node

RUN npm i && npm cache clean --force

WORKDIR /event-bus/app

COPY ./ ./

CMD ["npm", "start"]

