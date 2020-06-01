FROM node:14

WORKDIR /opt/app
COPY package.json .
RUN yarn install --silent

COPY . .

CMD yarn watch
