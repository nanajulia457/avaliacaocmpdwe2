DROP DATABASE IF EXISTS eleicao;

CREATE DATABASE eleicao;

USE eleicao;

DROP TABLE IF EXISTS votantes;
DROP TABLE IF EXISTS candidatos;

CREATE TABLE candidatos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_candidato VARCHAR(255) NOT NULL,
    numero_candidato INT,
    votos INT DEFAULT 0
);

CREATE TABLE votantes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE
);

INSERT INTO candidatos (nome_candidato, numero_candidato, votos) VALUES 
('Maria Silva', 1, 0), 
('João Santos', 2,  0), 
('Ana Oliveira', 3, 0);

INSERT INTO votantes (email) VALUES 
('joao@example.com'), 
('maria@example.com'), 
('ana@example.com'); 
