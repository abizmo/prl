FROM node:14

WORKDIR /opt/app
COPY package.json .
RUN yarn

COPY . .

CMD yarn watch
