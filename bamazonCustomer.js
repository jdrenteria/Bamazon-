var mysql = require ("mysql");
var inquirer = ("inquirer");
var table = require ("cli-table2");

var connection = mysql.createConnection({
    host: "localhost",
    user: "",
    password: "",
    database: "bamazon_db",
    port: 3000
})
