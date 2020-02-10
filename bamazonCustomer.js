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
connection.connect();

var display = function(){
    connection.query("SELECT * FROM products", function(err,res){
        if (err) throw err;
        console.log("-------------------------------------------");
        console.log("          WELCOME TO BAMAZON           ");
        console.log("-------------------------------------------");
        console.log("");
        console.log(" FIND YOUR PRODUCT BELOW");
        console.log("");
    })
}