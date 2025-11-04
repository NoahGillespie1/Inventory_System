create database db_inventory;
use db_inventory;


CREATE TABLE inventory_db (
    id INT AUTO_INCREMENT PRIMARY KEY,
    prod_name VARCHAR(255) NOT NULL,
    quantity INT CHECK (quantity >= 0)
);
