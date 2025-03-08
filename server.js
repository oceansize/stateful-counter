const cssColours = require('css-color-names');
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Store container start time
const containerStartTime = Date.now();

// Check if a colour is valid CSS colour
function isValidCssColour(colour) {
  return colour in cssColours;
}

function sanitizeColour(colour) {
  return colour.replace(/\s+/g, '').toLowerCase(); // Removes all spaces and converts to lowercase
}

// Read optional container name and colour from environment variables
const containerLabel = process.env.CONTAINER_LABEL || "Unnamed Container";
let containerColour = process.env.CONTAINER_COLOUR
  ? sanitizeColour(process.env.CONTAINER_COLOUR)
  : "#1f8dd6"; // Default colour

if (!isValidCssColour(containerColour)) {
    console.warn(`Warning: '${containerColour}' is not a recognized CSS colour. Using default.`);
    containerColour = "#1f8dd6";
}

// API endpoint to provide container start time, name, and colour
app.get('/start-time', (req, res) => {
    res.json({
        containerLabel,
        startTime: containerStartTime,
        containerColour
    });
});

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Container "${containerLabel}" started at ${new Date(containerStartTime)} on port ${PORT}`);
    console.log(`Using background colour: ${containerColour}`);
});