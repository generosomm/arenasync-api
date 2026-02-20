// Import Tournament model
const Tournament = require('../models/tournament.model');


const getAllTournaments = async (req, res) => {
    try {
        // Get all tournaments from the model
        const tournaments = await Tournament.getAllTournaments();
        res.json(tournaments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTournamentById = async (req, res) => {
    try {
        // Get tournament by ID from the model
        const tournament = await Tournament.getTournamentById(req.params.id);
        if (!tournament) return res.status(404).json({ message: 'Tournament not found' });
        res.json(tournament);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllTournaments,
    getTournamentById
};

