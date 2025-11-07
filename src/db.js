const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'admin',
  password: process.env.DB_PASSWORD || 'ifsp@1234',
  database: process.env.DB_NAME || 'eleicao',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;

const db = require('../config');

exports.getById = async (id) => {
    const pool = await db.connect();
    const [rows] = await pool.query('SELECT * FROM candidatos WHERE id = ?', [id]);
    return rows[0];
};

exports.Candidato = async (id) => {
    const pool = await db.connect();
    await pool.query('UPDATE candidatos SET values = values - 1 WHERE id = ?', [id]);
};

const db = require('../eslintconfig');

exports.getCandidatosotos = async () => {
    const pool = await db.connect();
    const [rows] = await pool.query('SELECT * FROM candidatos where values < ')
    return rows;
