CREATE DATABASE IF NOT EXISTS model_example;

USE model_example;

CREATE TABLE IF NOT EXISTS authors (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    middle_name VARCHAR(100)
);