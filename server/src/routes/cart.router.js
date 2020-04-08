const express = require('express');
const cartRouter = express.Router();
const Cart = require('../models/cart.model');

/* Get all items in the cart */
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
            'data': [...result]
        });
    });
});

/* Add item to the cart */
cartRouter.post('/', (req, res, next) => {
    Cart.addItem(req.body.id, (err, result) => {
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
/* Update item in the cart */
cartRouter.put('/', (req, res, next) => {
    Cart.updateQuantity(req.body.id, req.body.quantity, req.body.status, (err, result) => {
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
