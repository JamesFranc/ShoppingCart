# Production Build

#Stage 1: build react client
FROM node:10.16-alpine as client

# Working directory is app
WORKDIR /usr/app/client

COPY client/package*.json ./

# Install dependencies
RUN yarn install

# Copy local files to app folder
COPY client/ ./

RUN yarn build

# Stage 2 : Build Server

FROM node:10.16-alpine

WORKDIR /usr/src/app/
COPY --from=client /usr/app/client/build ./client/build/

WORKDIR /usr/src/app/server/
COPY server/package*.json ./
RUN npm install -qy
COPY server/ ./
RUN apk add --update bash

RUN find wait-for-it.sh
RUN chmod +x wait-for-it.sh

ENV PORT 8000
EXPOSE 8000

CMD ["npm", "start"]