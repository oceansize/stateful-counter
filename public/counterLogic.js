async function fetchStartTime() {
  try {
      const response = await fetch('/start-time');
      const data = await response.json();

      // Set container label
      document.querySelector('.container-label').textContent = `Container: ${data.containerLabel}`;

      // Apply background colour to splash-container
      document.querySelector('.splash-container').style.backgroundColor = data.containerColour;

      // Start timer logic
      const startTime = new Date(data.startTime);

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
  } catch (error) {
      console.error("Error fetching start time:", error);
  }
}

fetchStartTime();