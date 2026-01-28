const express = require('express');
const cors = require('cors');
const tournamentRoutes = require('./routes/tournament.routes');

const app = express();

app.use(cors());
app.use(express.json()); // Important: This allows us to read JSON body in POST requests

// We define the base URL here
app.use('/api/tournaments', tournamentRoutes);

module.exports = app;