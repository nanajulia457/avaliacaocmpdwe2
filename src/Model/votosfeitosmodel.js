const db = require('../config/db');
exports.javotou = async (email, candidatoId) => {
    const pool = await db.connect();
    const [rows] = await pool.query('SELECT * FROM votos WHERE email_municipe = ? AND candidato_id = ?', [email, candidatoId]);
    return rows.length > 0;
};

exports.registrarvotos = async (email, candidatoId) => {
    const pool = await db.connect();
    await pool.query('INSERT INTO votos (email_municipe, candidato_id) VALUES (?, ?)', [email, candidatoId]);
};