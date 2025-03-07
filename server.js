const express = require('express');
const path = require('path');  // Import path module
const app = express();
const PORT = process.env.PORT || 3000;

// Store container start time
const containerStartTime = Date.now();

// Read optional container name from environment variables
const containerLabel = process.env.CONTAINER_LABEL || "Unnamed Container";

// API endpoint to provide container start time & name
app.get('/start-time', (req, res) => {
    res.json({
        containerLabel: containerLabel,
        startTime: containerStartTime
    });
});

// Serve static files from 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html when accessing the root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Container "${containerLabel}" started at ${new Date(containerStartTime)} on port ${PORT}`);
});