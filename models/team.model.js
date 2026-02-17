const db = require('../config/db');

const getAllTeams = async () => {
    const [rows] = await db.query('SELECT id, name, game, members, captain, wins, losses FROM teams');
    return rows;
};

module.exports = {
    getAllTeams
};
