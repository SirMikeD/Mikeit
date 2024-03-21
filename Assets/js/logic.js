// Function to toggle between light mode and dark mode
function toggleMode() {
    document.body.classList.toggle('dark-mode');
  }
  
  // Event listener for the toggle button
  document.getElementById('toggleMode').addEventListener('click', toggleMode);