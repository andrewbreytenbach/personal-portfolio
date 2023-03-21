// Smooth scroll to section on click
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Toggle mobile menu
const toggleBtn = document.querySelector('.toggle-btn');
const navMenu = document.querySelector('nav ul');

toggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Form submission
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  // Validate input
  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  // Send email
  const data = {
    name,
    email,
    message
  };

  // Replace the URL below with your own email sending URL
  fetch('https://example.com/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    alert('Email sent successfully.');
    form.reset();
  })
  .catch(error => {
    console.error('Error:', error);
    alert('There was an error sending the email. Please try again later.');
  });
});
