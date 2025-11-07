const db = require('../config/db');
exports.getAllCandidatos = async () => {
    const pool = await db.connect();
    const [rows] = await pool.query('SELECT * FROM Candidatos');
    return rows;
};

exports.getById = async (id) => {
    const pool = await db.connect();
    const [rows] = await pool.query('SELECT * FROM Candidatos WHERE id = ?', [id]);
    return rows[0];
};
exports.diminuirEstoque = async (id) => {
    const pool = await db.connect();
    await pool.query('UPDATE Candidatos SET values = values - 1 WHERE id = ?', [id]);
};