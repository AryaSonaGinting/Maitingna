function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const error = document.getElementById('loginError');

  if (username === 'monthe27' && password === 'arya27') {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
    error.style.display = 'none';
  } else {
    error.style.display = 'block';
  }
}

function showSection(event, id) {
  event.preventDefault();
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
  event.currentTarget.classList.add('active');
}

function updateTime() {
  const timeElem = document.getElementById('time');
  const now = new Date();
  const hours = now.getHours().toString().padStart(2,
