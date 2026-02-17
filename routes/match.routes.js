const express = require('express');
const router = express.Router();

const { getAllMatches } = require('../controllers/match.controller');

router.get('/', getAllMatches);

module.exports = router;
