# Dockerfile for Node Express Backend api (Dev)

FROM node:10.16-alpine

# ARG NODE_ENV=development

# Install bash 
RUN apk add --update bash

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./

RUN npm ci

# Copy app source code
COPY . .
RUN find wait-for-it.sh
RUN chmod +x wait-for-it.sh
# Exports
EXPOSE 8080

CMD ["npm", "start"]
