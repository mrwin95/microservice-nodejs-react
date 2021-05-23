FROM node:14-alpine

WORKDIR /moderation

COPY package*.json ./

RUN mkdir app && chown -R node:node .
USER node

RUN npm i && npm cache clean --force

WORKDIR /moderation/app

COPY ./ ./

CMD ["npm", "start"]

