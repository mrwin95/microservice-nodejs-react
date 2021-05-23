FROM node:14-apline

WORKDIR /comments

COPY package*.json ./

RUN mkdir app && chown -R node:node .

USER node

RUN npm i && npm clear cache --force

WORKDIR /comments/app

COPY ./ ./

CMD [ "npm","start" ]