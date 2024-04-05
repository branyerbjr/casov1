CREATE DATABASE IF NOT EXISTS casov1;

USE casov1;

CREATE TABLE IF NOT EXISTS productos(
    id INIT AUTO_INCREMENT PRIMARY KEY;
    nombre VARCHAR(255) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    actualizado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);