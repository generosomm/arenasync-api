// Import Match model
const Match = require('../models/match.model');

const getAllMatches = async (req, res) => {
    try {
        // Get all matches from the model
        const matches = await Match.getAll();
        res.json({
            success: true,
            count: matches.length,
            data: matches
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            error: error.message 
        });
    }
};

module.exports = {
    getAllMatches
};
