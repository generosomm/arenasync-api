const db = require('../config/db');

const getAllMatches = async () => {
    const [rows] = await db.query('SELECT * FROM matches');
    return rows;
};

module.exports = {
    getAllMatches
};
