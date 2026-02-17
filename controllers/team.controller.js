// Import Team model
const Team = require('../models/team.model');

const getAllTeams = async (req, res) => {
    try {
        // Get all teams from the model
        const teams = await Team.getAll();
        res.json({
            success: true,
            count: teams.length,
            data: teams
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            error: error.message 
        });
    }
};

module.exports = {
    getAllTeams
};
