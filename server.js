const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Store container start time
const containerStartTime = Date.now();

// Read optional container name and color from environment variables
const containerLabel = process.env.CONTAINER_LABEL || "Unnamed Container";
const containerColor = process.env.CONTAINER_COLOR || "#1f8dd6"; // Default blue color

// API endpoint to provide container start time, name, and color
app.get('/start-time', (req, res) => {
    res.json({
        containerLabel: containerLabel,
        startTime: containerStartTime,
        containerColor: containerColor
    });
});

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Container "${containerLabel}" started at ${new Date(containerStartTime)} on port ${PORT}`);
    console.log(`Using background color: ${containerColor}`);
});