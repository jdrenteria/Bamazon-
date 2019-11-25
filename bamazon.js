var mysql = require('mysql')
var inquirer = require('inquirer');
​
// create the connection information for the sql database
var connection = mysql.createConnection({
    host: 'localhost',
    // Your port; if not 3306
    port: 3306,
    user: 'root',
    // Your password
    password: 'password',
    database: 'bamazon_db'
})
​
​
​
// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    console.log('connected to database');
    makeTable();
​
​
})
​
var makeTable = function () {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        // this for loop will display the table of items 
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " || " + res[i].product_name + "  ||  " + res[i].department_name + "  ||  " + res[i].price + "   ||  " + res[i].stock_quantity + "\n");
        }
        promptCustomer(res);
    })
}
​
​
​
​
        var promptCustomer = function (res) {
            inquirer.prompt([{
                type: 'input',
                name: 'choice',
                message: "What Product would you like to buy? [Quit with Q]"
            }]).then(function (answer) {
                var correct = false;
                if (answer.choice.toUpperCase() == "Q") {
                    process.exit();
                }
                for (var i = 0; i < res.length; i++) {
                    // if (err) throw err;
                    if (res[i].product_name == answer.choice) {
                        correct = true;
                        var product = answer.choice;
                        var id = i;
                        inquirer.prompt({
                            type: "input",
                            name: "quant",
                            message: "how many would you like to buy?",
                            validate: function (value) {
                                if (isNaN(value) == false) {
                                    return true;
                                } else {
                                    return false;
                                }
                            }
                        }).then(function (answer) {
                            if ((res[id].stock_quantity-answer.quant)> 0){
                                connection.query("UPDATE products SET stock_quantity='" + (res[id].stock_quantity- 
                                     answer.quant) + "' WHERE product_name=' " + product 
                                     + "'", function (err, res2) {
                                    console.log("Purchased Item!");
                                    makeTable();
                                })
                            } else {
                                console.log("not a valid selection!");
                                promptCustomer(res);
                            }
​
​
                        })
                    }
                }
                if (i == res.length && correct == false) {
                    console.log("not a valid selection!!");
                    promptCustomer(res);
                }
            })
​
​
​
        }
​
​
