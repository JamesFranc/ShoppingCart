# ShoppingCart

## What is this?

This repo is a dockerized full stack example of simple shopping cart application. This project leverages MySQL for the database, Node (Express) for the api layer, and React for the UI. Each layer has its own Dockerfile so it can be worked on in a development environment independent of the other layers.

## How do you use the production application?
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
web_1    | wait-for-it.sh: mysql:3306 is available after 1 seconds
web_1    | 
web_1    | > server@1.0.0 start /usr/src/app/server
web_1    | > node server.js
web_1    | 
web_1    | Visit http://localhost:8080 in your browser to use the shopping cart
```

Enjoy using the shopping cart!

## Client unit testing and coverage reporting
We test the React + Redux client using Jest and Enzyme. To run tests and check coverage for the client open a terminal window and navigate to the client directory.
Once in the client directory enter:

```
npm run test -- --coverage --watchAll=false -u
```

Tests will be run and a coverage report will be generated for you.

## Server unit testing
We test the Node + Express server using Mocha. To run tests and check coverage for the client open a terminal window and navigate to the server directory.
Once in the server directory enter:

```
mocha
```

Tests will be run and a coverage report will be generated for you.
