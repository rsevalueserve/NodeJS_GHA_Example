FROM node:16.18.1-alpine as base

WORKDIR /usr/src/api
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${API_PORT}

CMD ["npm", "run", "dev"]