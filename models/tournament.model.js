const db = require('../config/db');

const getAllTournaments = async () => {
    const [rows] = await db.query('SELECT * FROM tournaments');
    return rows;
};

const getTournamentById = async (id) => {
    const [rows] = await db.query('SELECT * FROM tournaments WHERE id = ?', [id]);
    return rows[0];
};

module.exports = {
    getAllTournaments,
    getTournamentById
};