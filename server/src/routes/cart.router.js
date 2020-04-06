const express = require('express');
const cartRouter = express.Router();
const Cart = require('../models/cart.model');
const User = require('../models/user.model');
// let currentUser = User.User();
/* Get all Posts */
cartRouter.get('/', (req, res, next) => {
    Cart.getCart((err, result) => {
        if(err) {
            res.status(400).send({
                'success': false,
                'error': err.message
            });
        }
        res.status(200).send({
            'success': true,
            'data': result
        });
    });
});
module.exports = cartRouter;
