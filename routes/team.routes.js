const express = require('express');
const router = express.Router();

const { getAllTeams } = require('../controllers/team.controller');

router.get('/', getAllTeams);

module.exports = router;
