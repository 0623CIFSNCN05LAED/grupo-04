DROP DATABASE IF EXISTS animalandia;

CREATE DATABASE animalandia;

USE animalandia;

CREATE TABLE users (
	id VARCHAR(36) DEFAULT (UUID()) PRIMARY KEY,
    username VARCHAR(100) not null,
	email VARCHAR(100),
	password VARCHAR(50) unique,
	name VARCHAR(100) not null,
	dni DECIMAL,
    home VARCHAR(100),
    phone_number VARCHAR(15),
    image VARCHAR(50)
);

CREATE TABLE products( 
	id VARCHAR(36) DEFAULT (UUID()) PRIMARY key,
	name VARCHAR(100) not null,
	taste VARCHAR(100),
	weight DECIMAL,
	category VARCHAR(100),
	description TEXT,
	age VARCHAR(100),
	price INT,
	image VARCHAR(50)
);
