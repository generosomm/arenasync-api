const Tournament = require('../models/tournament.model');

exports.getAllTournaments = async (req, res) => {
    try {
        const tournaments = await Tournament.getAll();
        res.json(tournaments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTournamentById = async (req, res) => {
    try {
        const tournament = await Tournament.getById(req.params.id);
        if (!tournament) return res.status(404).json({ message: 'Tournament not found' });
        res.json(tournament);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createTournament = async (req, res) => {
    try {
        if (!req.body.name || !req.body.game_title) {
            return res.status(400).json({ message: "Name and Game Title are required" });
        }
        const newId = await Tournament.create(req.body);
        res.status(201).json({ 
            message: 'Tournament created successfully', 
            tournament_id: newId 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};