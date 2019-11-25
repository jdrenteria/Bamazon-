DROP DATABASE IF EXISTS bamazon_db;
​
CREATE DATABASE bamazon_db;
USE bamazon_db;
​
CREATE TABLE products(
    item_id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50),
    department_name VARCHAR(50),
    price INTEGER,
    stock_quantity INTEGER,
    product_sales INTEGER,
    PRIMARY KEY (item_id)
);
​
​
INSERT INTO products (product_name,department_name,price,stock_quantity,product_sales)
VALUES 
('god of war 3','Video Games',19.99,45,4000),
('minecraft','Video Games',40.00,35,4500),
('doritos','Chips',1.70,99,550),
('mountain Dew','Soda',2.00,60,1500),
('cat Shirt','Clothes',19.99,200,1000),
('coco','Movie',19.99,50,1000),
('action Figure','Toys',17.99,60,700),
('skittles','Candy',1.99,60,700),
('headphones','Accesories',19.99,60,500),
('key Chain','Accesories',1.99,60,400)