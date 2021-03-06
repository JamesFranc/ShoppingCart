ALTER USER 'root' IDENTIFIED BY 'aucc'; 
ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'aucc';
flush privileges;

CREATE DATABASE aucc;
USE aucc;

CREATE TABLE IF NOT EXISTS items (
    item_id INT auto_increment,
    name VARCHAR(64) NOT NULL,
    description VARCHAR(200) NOT NULL,
	price DECIMAL(16,2) NOT NULL,
	image_ref VARCHAR(200),
	credit VARCHAR(256),
    created DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    retired DATETIME DEFAULT NULL,
	primary key(item_id, created)
);
CREATE TABLE IF NOT EXISTS users (
    user_id INT auto_increment,
    name VARCHAR(64) NOT NULL,
    created DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    retired DATETIME DEFAULT NULL,
	primary key(user_id, created)
);
CREATE TABLE IF NOT EXISTS orders (
	user_id INT NOT NULL,
	item_id INT NOT NULL,
	quantity INT,
	status ENUM("active", "cleared", "ordered"),
	created DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	primary key(user_id, item_id, created)
);
INSERT INTO users (name) VALUES ("Nemo");
INSERT INTO items (name, description, image_ref, credit, price) VALUES ("big treat", "OH THIS TREAT IS BIG, AND GOOD", "image-1.jpg","Photo by Susan Yin on Unsplash", 2.00);
INSERT INTO items (name, description, image_ref, credit, price) VALUES ("really big treat", "How do I get this faster?", "image-2.jpg","Photo by Charles Deluvio on Unsplash", 4.00);
INSERT INTO items (name, description, image_ref, credit, price) VALUES ("little treat", "this treat is kind of small but still good", "image-3.jpg","Photo by Masimo Grabar on Unsplash", 1.00);
