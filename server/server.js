const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const CLIENT_BUILD_PATH = path.join(__dirname, "../client/build");
const catalogRouter = require('./src/routes/catalog.router');
const cartRouter = require('./src/routes/cart.router');
const PORT = 8080;
const app = express();

// Static files
app.use(express.static(CLIENT_BUILD_PATH));

// Server React Client
app.get("/", function(req, res) {
  res.sendFile(path.join(CLIENT_BUILD_PATH , "index.html"));
});

app.listen(PORT, function() {
    console.log(`Visit http://localhost:${PORT} in your browser to use the shopping cart`)
});

// Our DB Configuration
require('./src/database');

app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
app.use(bodyParser.json());
  
app.use('/catalog', catalogRouter);
app.use('/cart', cartRouter);