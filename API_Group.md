# ArenaSync API - Final Project Submission
**Group 5**

## Group Members
1. Generoso, Merwi
2. Corales, Zedryl Hershey
3. Diaz, Lashawn Railey

---

## API Overview
**API Name:** ArenaSync API  
**Purpose:** Esports Tournament Management System - provides tournament information, team details, match schedules, and statistics for competitive gaming events.

**Tech Stack:**
- Node.js + Express.js
- MySQL2 (database-driven endpoints)

---

## Project Structure & Code Logic (Reusable Reference)

This project follows a clean, modular backend structure that is ideal for any database-driven Node.js API. Use this as a template for future backend/database projects.

### Folder Structure

```
arenasync_api/
│   app.js                # Main Express app, sets up middleware and routes
│   server.js             # Starts the server (imports app.js)
│   package.json          # Project metadata and dependencies
│   API_Group.md          # Project documentation (this file)
│   README.md             # Quick start guide
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

### Code Format & Logic

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

### Best Practices Used
- All endpoints are GET-only and return JSON.
- MVC pattern: Models (DB), Controllers (logic), Routes (HTTP mapping).
- No direct DB access in controllers or routes—only in models.
- Minimal, clear comments for maintainability.
- All files use module.exports and named exports for clarity and consistency.
- Project is easy to extend: just add a new model, controller, and route for each new resource.

---

## GET Endpoints (5 Total)

### 1. Get All Tournaments
**Endpoint:** `GET /api/tournaments`  
**Description:** Returns a list of all esports tournaments from the database.  
**Response:** Array of tournament objects with name, game_title, prize_pool, format, dates, etc.

### 2. Get Tournament by ID
**Endpoint:** `GET /api/tournaments/:id`  
**Description:** Returns detailed information about a specific tournament.  
**Response:** Single tournament object or 404 if not found.

### 3. Get All Teams
**Endpoint:** `GET /api/teams`  
**Description:** Returns a list of all registered esports teams.  
**Response:** Array of team objects with name, game, members, captain, wins/losses.

### 4. Get All Matches
**Endpoint:** `GET /api/matches`  
**Description:** Returns all matches (completed, live, and upcoming).  
**Response:** Array of match objects with teams, scores, status, dates, winners.

### 5. Get Tournament Statistics
**Endpoint:** `GET /api/stats`  
**Description:** Returns overall tournament statistics and team leaderboard.  
**Response:** Object containing totals, leaderboard rankings, and game breakdown.

---

## How to Run
1. Install dependencies: `npm install`
2. Ensure MySQL is running (XAMPP)
3. Import the provided `arenasync_dummy_data.sql` file into your MySQL database (`db_arenasync`).
4. Configure database in `config/db.js` if needed
5. Start server: `node server.js`
6. Access API at: `http://localhost:3000/api/`

---

## Sample API Calls
```
http://localhost:3000/api/tournaments
http://localhost:3000/api/teams
http://localhost:3000/api/matches
http://localhost:3000/api/stats
http://localhost:3000/api/tournaments/1
```

---

**Submission Date:** February 20, 2026  
**Course:** ELECTV3  
**Professor:** Cruz, Jerwin P.
