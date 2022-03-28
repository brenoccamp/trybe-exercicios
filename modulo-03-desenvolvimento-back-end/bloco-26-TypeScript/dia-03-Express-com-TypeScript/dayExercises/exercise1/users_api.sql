CREATE DATABASE IF NOT EXISTS users_api;

USE users_api;

CREATE TABLE IF NOT EXISTS  users
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password varchar(20),
    PRIMARY KEY(id)
);

INSERT INTO users (name, email, password)
VALUES ('Código Limpo', 'email@email.com', 'senha123'),
    ('Refatoração', 'email@email.com', 'senha123'),
    ('Padrões de Projetos', 'email@email.com', 'senha123');           