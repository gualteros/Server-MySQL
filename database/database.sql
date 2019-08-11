CREATE DATABASE Librosdb;

use Librosdb;

CREATE TABLE game(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR (20),
    titulo VARCHAR (20),
    fecha VARCHAR (20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

RENAME TABLE game to libros;

DESCRIBE libros;