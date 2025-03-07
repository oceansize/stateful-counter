const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Store container start time
const containerStartTime = Date.now();

// Read optional container name and colour from environment variables
const containerLabel = process.env.CONTAINER_LABEL || "Unnamed Container";
const containerColour = process.env.CONTAINER_COLOUR || "#1f8dd6"; // Default blue colour

// API endpoint to provide container start time, name, and colour
app.get('/start-time', (req, res) => {
    res.json({
        containerLabel: containerLabel,
        startTime: containerStartTime,
        containerColour: containerColour
    });
});

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Container "${containerLabel}" started at ${new Date(containerStartTime)} on port ${PORT}`);
    console.log(`Using background colour: ${containerColour}`);
});