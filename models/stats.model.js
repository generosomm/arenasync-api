const db = require('../config/db');

const getTotals = async () => {
    const [[{ total_tournaments }]] = await db.query('SELECT COUNT(*) AS total_tournaments FROM tournaments');
    const [[{ total_teams }]] = await db.query('SELECT COUNT(*) AS total_teams FROM teams');
    const [[{ total_matches }]] = await db.query('SELECT COUNT(*) AS total_matches FROM matches');
    const [[{ total_prize_pool }]] = await db.query('SELECT SUM(prize_pool) AS total_prize_pool FROM tournaments');
    return { total_tournaments, total_teams, total_matches, total_prize_pool };
};

const getLeaderboard = async () => {
    const [rows] = await db.query('SELECT name AS team_name, wins, losses FROM teams ORDER BY wins DESC, losses ASC LIMIT 5');
    return rows;
};

const getGamesBreakdown = async () => {
    const [rows] = await db.query('SELECT game_title, COUNT(*) AS count FROM tournaments GROUP BY game_title');
    const breakdown = {};
    rows.forEach(row => {
        breakdown[row.game_title] = row.count;
    });
    return breakdown;
};

module.exports = {
    getTotals,
    getLeaderboard,
    getGamesBreakdown
};
