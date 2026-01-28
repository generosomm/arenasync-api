const API_URL = 'http://localhost:3000/api/tournaments';

// 1. Fetch and Display Tournaments
async function loadTournaments() {
    const grid = document.getElementById('tournamentGrid');
    
    try {
        const response = await fetch(API_URL);
        const tournaments = await response.json();

        grid.innerHTML = ''; // Clear "Loading..." text

        tournaments.forEach(t => {
            const card = document.createElement('div');
            card.className = 'card';
            
            // Format date nicely
            const date = new Date(t.start_date).toLocaleDateString();

            card.innerHTML = `
                <div class="card-image" style="background-image: url('${t.banner_url || 'https://placehold.co/600x400/1e293b/8b5cf6?text=No+Image'}')"></div>
                <div class="card-content">
                    <span class="game-tag">${t.game_title}</span>
                    <h3>${t.name}</h3>
                    <p class="desc">${t.description || 'No description provided.'}</p>
                    <div class="stats">
                        <span class="prize">💰 PHP ${t.prize_pool}</span>
                        <span class="teams">👥 Max: ${t.max_teams} Teams</span>
                    </div>
                    <p class="date">📅 Starts: ${date}</p>
                </div>
            `;
            grid.appendChild(card);
        });

    } catch (error) {
        console.error('Error:', error);
        grid.innerHTML = '<p style="color:red">Failed to load tournaments. Is the server running?</p>';
    }
}

// 2. Handle Form Submit (Create Tournament)
document.getElementById('tournamentForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Stop page refresh

    const data = {
        name: document.getElementById('tName').value,
        game_title: document.getElementById('tGame').value,
        prize_pool: document.getElementById('tPrize').value,
        format: document.getElementById('tFormat').value,
        start_date: document.getElementById('tDate').value
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Tournament Created!');
            document.getElementById('tournamentForm').reset();
            loadTournaments(); // Refresh the list instantly
        } else {
            alert('Error creating tournament');
        }
    } catch (error) {
        alert('Server Error');
    }
});

// Load data when page opens
loadTournaments();