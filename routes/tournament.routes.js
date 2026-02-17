const express = require('express');
const router = express.Router();

const { getAllTournaments, getTournamentById } = require('../controllers/tournament.controller');

router.get('/', getAllTournaments);
router.get('/:id', getTournamentById);

module.exports = router;