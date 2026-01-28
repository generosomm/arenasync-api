const db = require('../config/db');

const Tournament = {
    // Get all tournaments
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM tournaments');
        return rows;
    },

    // Get a specific tournament by ID
    getById: async (id) => {
        const [rows] = await db.query('SELECT * FROM tournaments WHERE id = ?', [id]);
        return rows[0];
    },

    // Create a new tournament
    create: async (data) => {
        const { name, game_title, prize_pool, format, start_date, banner_url, max_teams, description } = data;
        
        const [result] = await db.query(
            'INSERT INTO tournaments (name, game_title, prize_pool, format, start_date, banner_url, max_teams, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [name, game_title, prize_pool, format, start_date, banner_url, max_teams, description]
        );
        return result.insertId;
    }
};

module.exports = Tournament;