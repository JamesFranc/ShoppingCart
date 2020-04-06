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
        'Select * FROM items',
        [],
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