DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
    item_id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) not NULL,
    department_name VARCHAR(50) NOT NULL,
    price INTEGER,
    stock_quantity INTEGER(10) not null,
    product_sales INTEGER(10) not null,
    PRIMARY KEY (item_id)
);


INSERT INTO products (product_name,department_name,price,stock_quantity,product_sales)
VALUES 
('kingdom hearts','Video Games',19.99,45,4000),
('destiny','Video Games',40.00,35,4500),
('lays','Chips',1.70,99,550),
('coke','Soda',2.00,60,1500),
('express shirt','Clothes',19.99,200,1000),
('a silent voice','Movie',19.99,50,1000),
('nerf blaster','Toys',17.99,60,700),
('starburst','Candy',1.99,60,700),
('air pods','Accesories',19.99,60,500),
('bracelet','Accesories',1.99,60,400);
