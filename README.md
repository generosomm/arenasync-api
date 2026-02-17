# ArenaSync API - Quick Guide

## Group Members
- Generoso, Merwin
- Corales, Zedryl Hershey
- Diaz, Lashawn Railey

## What is this?
ArenaSync API is a clean, modular backend for managing esports tournaments, teams, matches, and stats. It’s built with Node.js, Express, and MySQL. All endpoints are GET only and database-driven.

## Project Structure & Code Logic (Reference)

This backend uses a scalable, reusable structure for any Node.js + MySQL API:

```
arenasync_api/
│   app.js                # Main Express app, sets up middleware and routes
│   server.js             # Starts the server (imports app.js)
│   package.json          # Project metadata and dependencies
│   README.md             # Quick start guide (this file)
│
├── config/
│     db.js               # MySQL connection setup
│
├── controllers/          # Route handler logic (business logic)
│     match.controller.js
│     stats.controller.js
│     team.controller.js
│     tournament.controller.js
│
├── models/               # Database query logic (one per resource)
│     match.model.js
│     stats.model.js
│     team.model.js
│     tournament.model.js
│
├── routes/               # Express route definitions (one per resource)
│     match.routes.js
│     stats.routes.js
│     team.routes.js
│     tournament.routes.js
│
└── arenasync_dummy_data.sql  # SQL file for populating the database
```

- **app.js**: Imports Express, CORS, and all route files. Sets up middleware, mounts routes at `/api/...`, and provides a root health check endpoint. Exports the app for use in server.js.
- **server.js**: Imports the app and starts the server on the specified port.
- **config/db.js**: Sets up and exports the MySQL connection using mysql2. All models use this connection.
- **models/**: Each file exports named async functions for DB queries (e.g., `getAllTeams`). No controller or route logic here—just database access.
- **controllers/**: Each file imports its model and exports async route handler functions (e.g., `getAllTeams`). Controllers never access the DB directly—only through models. Minimal, clear comments.
- **routes/**: Each file imports Express, destructures controller functions, defines GET routes, and exports the router. Follows the format:
	```js
	const express = require('express');
	const router = express.Router();
	const { getAllTeams } = require('../controllers/team.controller');
	router.get('/', getAllTeams);
	module.exports = router;
	```

## How to run
1. Make sure you have Node.js and MySQL installed.
2. Import the `arenasync_dummy_data.sql` file into your MySQL database (db_arenasync).
3. Edit `config/db.js` if your MySQL password or user is different.
4. Run `npm install` to get the dependencies.
5. Start the server with `node server.js`.
6. Use Thunder Client or Postman to test the endpoints at `http://localhost:3000/api/`.

## Endpoints
- GET /api/tournaments
- GET /api/tournaments/:id
- GET /api/teams
- GET /api/matches
- GET /api/stats