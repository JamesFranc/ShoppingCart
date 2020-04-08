const Item = require('./item.model')
var databaseConnection = require('../database')

var Cart = function(items){
    this.items = [];
    items.map(item => {
        this.items.push(Item.Item(item));
    })
};

Cart.getCart = function (result) {
    databaseConnection.query(
        'Select * FROM orders INNER JOIN items ON orders.item_id = items.item_id WHERE quantity <> 0 AND status = "active"', [],
        (err, res) => {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else {
                result(null, res);
            }
        });
}

Cart.addItem = function (itemId, result) {
    console.log('adding item: ', itemId);
    databaseConnection.query("INSERT INTO orders (user_id, item_id, quantity, status) VALUES (1, ?, 1,'active')", [itemId],
        (err, res) => {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else {
                result(null, res);
            }
        });
}

Cart.updateQuantity = function (itemId, quantity, status, result) {
    console.log('updating item: ', itemId);
    console.log('updating quantity: ', quantity);
    console.log('updating status: ', status);
    databaseConnection.query("UPDATE orders SET quantity = ?, status = ? WHERE item_id = ? AND status = 'active'", [quantity, status, itemId],
        (err, res) => {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else {
                result(null, res);
            }
        });
}
module.exports = Cart;