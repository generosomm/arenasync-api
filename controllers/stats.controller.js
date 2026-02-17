// Import Stats model
const Stats = require('../models/stats.model');

const getStats = async (req, res) => {
    try {
        // Get stats from the model
        const totals = await Stats.getTotals();
        const leaderboard = await Stats.getLeaderboard();
        const games_breakdown = await Stats.getGamesBreakdown();

        const stats = {
            ...totals,
            leaderboard,
            games_breakdown
        };

        res.json({
            success: true,
            data: stats
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            error: error.message 
        });
    }
};

module.exports = {
    getStats
};
