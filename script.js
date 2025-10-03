function showSection(event, sectionId) {
  event.preventDefault();

  // Deactivate all nav links
  document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));

  // Hide all sections
  document.querySelectorAll('.container section').forEach(section => section.classList.remove('active'));

  // Activate clicked nav link
  event.target.classList.add('active');

  // Show the selected section
  document.getElementById(sectionId).classList.add('active');
}

// Show main content after DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('mainContent').style.display = 'block';
});