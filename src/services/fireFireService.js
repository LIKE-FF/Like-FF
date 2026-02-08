// fireFireService.js

// This service fetches real Free Fire player data from external APIs.

const axios = require('axios');

const API_URL = 'https://api.freefire.com'; // Example API endpoint

const fetchPlayerData = async (playerId) => {
    try {
        const response = await axios.get(`${API_URL}/players/${playerId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching player data:', error);
        throw error;
    }
};

module.exports = {
    fetchPlayerData,
};