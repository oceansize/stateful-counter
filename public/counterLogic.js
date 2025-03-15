// Fetch start time and initialize the timer
async function fetchStartTime() {
    try {
        const data = await getStartTimeData();
        updateContainerLabel(data.containerLabel);
        updateSplashContainerColor(data.containerColour);
        startTimer(new Date(data.startTime));
    } catch (error) {
        console.error("Error fetching start time:", error);
    }
}

// Fetch start time data from the server
async function getStartTimeData() {
    const response = await fetch('/start-time');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}

// Update the container label
function updateContainerLabel(label) {
    document.querySelector('.container-label').textContent = `Container "${label}" has been`;
}

// Update the splash container background color
function updateSplashContainerColor(color) {
    document.querySelector('.splash-container').style.backgroundColor = color;
}

// Start the timer and update it every second
function startTimer(startTime) {
    function updateTimer() {
        const elapsedTimeMs = Date.now() - startTime;
        const totalSeconds = Math.floor(elapsedTimeMs / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        document.getElementById('timer').textContent =
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}

// Initialize the app
fetchStartTime();