# Dockerfile for client

# Stage 1: build react client
FROM node:10.16-alpine

# Working directory is app
WORKDIR /usr/app

COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
