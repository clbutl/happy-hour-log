const registerFormHandler = async (event) => {
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
    console.log(response)
    if (response.ok) {
      document.location.replace('/profile');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', registerFormHandler);