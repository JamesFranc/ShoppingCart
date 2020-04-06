const mysql = require('mysql')
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
dotenv.config();

const {
    MYSQL_HOSTNAME,
    MYSQL_DB,
    MYSQL_USER,
    MYSQL_PASS
} = process.env;

//local mysql db connection
var connection = mysql.createConnection({
    host     : MYSQL_HOSTNAME,
    user     : MYSQL_USER,
    password : MYSQL_PASS,
    database : MYSQL_DB
});

connection.connect(function(err) {
    if (err) throw err;
});

connection.on('error', console.error.bind(console, 'MySQL Connection Error:' + connection.host));
connection.on('success', () => {
    // we're connected !
    console.log('MySQL Connection successful');
});

module.exports = connection;
// JUST TO TEST THE CONNECTION
// connection.query('SELECT * FROM items;', (err, res) => {
//     console.log(connection.state);
//     console.log(res);
// });