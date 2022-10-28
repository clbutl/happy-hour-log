const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-register').value.trim();
  const password = document.querySelector('#password-register').value.trim();
  const username = document.querySelector('#username-register').value.trim();

  if (email && password && username) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/', {
      method: 'POST',
      body: JSON.stringify({ email, password, username }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);