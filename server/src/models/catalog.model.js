const Item = require('./item.model')
var databaseConnection = require('../database')

var Catalog = function(items){
    this.items = [];
    items.map(item => {
        this.items.push(Item.Item(item));
    })
};

Catalog.getItems = function (result) {
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

module.exports = Catalog;