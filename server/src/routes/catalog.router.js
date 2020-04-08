const express = require('express');
const catalogRouter = express.Router();
const Catalog = require('../models/catalog.model');
// let currentUser = User.User();
/* Get all active items in catalog */
catalogRouter.get('/', (req, res, next) => {
    Catalog.getItems((err, result) => {
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
module.exports = catalogRouter;
