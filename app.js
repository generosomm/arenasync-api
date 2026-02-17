const express = require('express');
const cors = require('cors');
const tournamentRoutes = require('./routes/tournament.routes');
const teamRoutes = require('./routes/team.routes');
const matchRoutes = require('./routes/match.routes');
const statsRoutes = require('./routes/stats.routes');

const app = express();

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/tournaments', tournamentRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/matches', matchRoutes);
app.use('/api/stats', statsRoutes);

app.get('/', (req, res) => {
	res.send('API is running...');
});

module.exports = app;