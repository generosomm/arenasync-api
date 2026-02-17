-- ArenaSync API -Dummy Data SQL
-- Import this into your db_arenasync database

-- Tournaments Table
CREATE TABLE IF NOT EXISTS tournaments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  game_title VARCHAR(50) NOT NULL,
  prize_pool DECIMAL(10,2) NOT NULL,
  format VARCHAR(50) NOT NULL,
  status VARCHAR(20) DEFAULT 'Upcoming',
  start_date DATETIME NOT NULL,
  max_teams INT DEFAULT 16,
  description TEXT DEFAULT NULL
);

INSERT INTO tournaments (name, game_title, prize_pool, format, status, start_date, max_teams, description) VALUES
('Valorant City Cup', 'Valorant', 15000.00, 'Single Elimination', 'Upcoming', '2026-02-14 10:00:00', 16, '5v5 Bomb Defusal mode. No smurfing allowed.'),
('MLBB Champions League', 'Mobile Legends', 10000.00, 'Double Elimination', 'Upcoming', '2026-03-01 15:00:00', 16, 'Mobile Legends Bang Bang tournament.'),
('COD Mobile Pro Series', 'Call of Duty: Mobile', 12000.00, 'Single Elimination', 'Upcoming', '2026-03-10 18:00:00', 16, 'Call of Duty: Mobile event.'),
('League of Legends Grand Finals', 'League of Legends', 20000.00, 'Single Elimination', 'Upcoming', '2026-04-05 20:00:00', 16, 'LoL Grand Finals.'),
('Dota 2 Invitational', 'Dota 2', 18000.00, 'Double Elimination', 'Upcoming', '2026-05-10 17:00:00', 12, 'Dota 2 pro teams only.');

-- Teams Table
CREATE TABLE IF NOT EXISTS teams (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  game VARCHAR(50) NOT NULL,
  members INT NOT NULL,
  captain VARCHAR(50) NOT NULL,
  wins INT DEFAULT 0,
  losses INT DEFAULT 0
);

INSERT INTO teams (name, game, members, captain, wins, losses) VALUES
('Phoenix Esports', 'Valorant', 5, 'xXShadowXx', 12, 3),
('Dragon Force', 'Mobile Legends', 5, 'DragonSlayer99', 8, 2),
('Cyber Knights', 'Call of Duty: Mobile', 4, 'KnightRider', 15, 5),
('Apex Legends', 'League of Legends', 5, 'LegendKiller', 10, 4),
('Storm Riders', 'Valorant', 5, 'StormBreaker', 7, 3),
('Dota Titans', 'Dota 2', 5, 'InvokerPro', 9, 2),
('MLBB Allstars', 'Mobile Legends', 5, 'MLBBKing', 6, 4),
('LoL Warriors', 'League of Legends', 5, 'LoLMaster', 8, 3);

-- Matches Table
CREATE TABLE IF NOT EXISTS matches (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tournament_name VARCHAR(100) NOT NULL,
  team_a VARCHAR(100) NOT NULL,
  team_b VARCHAR(100) NOT NULL,
  score_a INT,
  score_b INT,
  status VARCHAR(20) NOT NULL,
  match_date DATETIME NOT NULL,
  winner VARCHAR(100)
);

INSERT INTO matches (tournament_name, team_a, team_b, score_a, score_b, status, match_date, winner) VALUES
('Valorant City Cup', 'Phoenix Esports', 'Storm Riders', 13, 11, 'completed', '2026-02-10 18:00:00', 'Phoenix Esports'),
('MLBB Champions League', 'Dragon Force', 'MLBB Allstars', 2, 1, 'completed', '2026-02-12 15:00:00', 'Dragon Force'),
('COD Mobile Pro Series', 'Cyber Knights', 'Phoenix Esports', 10, 8, 'completed', '2026-03-11 20:00:00', 'Cyber Knights'),
('League of Legends Grand Finals', 'Apex Legends', 'LoL Warriors', 3, 2, 'live', '2026-04-05 21:00:00', NULL),
('Dota 2 Invitational', 'Dota Titans', 'Storm Riders', NULL, NULL, 'upcoming', '2026-05-11 17:00:00', NULL),
('Valorant City Cup', 'Storm Riders', 'Phoenix Esports', NULL, NULL, 'upcoming', '2026-02-17 19:00:00', NULL),
('MLBB Champions League', 'MLBB Allstars', 'Dragon Force', NULL, NULL, 'upcoming', '2026-03-02 15:00:00', NULL);
