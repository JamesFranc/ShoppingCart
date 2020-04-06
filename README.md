# ShoppingCart

## What is this?

This repo is a dockerized full stack example of simple shopping cart application. This project leverages MySQL for the database, Node (Express) for the api layer, and React for the UI. Each layer has its own Dockerfile so it can be worked on in a development environment independent of the other layers.

## How do?
- Open a terminal window
- Navigate to a directory you want the project to reside in
```
git clone https://github.com/JamesFranc/ShoppingCart.git
```

Once the repository has been cloned run the following:

```
cd ShoppingCart/ && docker-compose up --build
```
Wait for the following to display:

```
web_1    | > server@1.0.0 start /usr/src/app/server
web_1    | > node server.js
web_1    | 
web_1    | Server listening on 8080
```
Open your web browser and go to: http://localhost:8080/

Enjoy using the shopping cart!
