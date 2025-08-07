document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;

  // Simple hardcoded user
  const validUser = {
    email: 'user@example.com',
    password: 'password123'
  };

  if(email === validUser.email && password === validUser.password) {
    alert('Login successful!');
    // Redirect or update UI here
  } else {
    alert('Invalid credentials.');
  }
});
