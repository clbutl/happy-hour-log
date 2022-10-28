const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log('GRRRRRR')

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  const showError = document.querySelector('#error-message-login')

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      showError.classList.add('hidden')
      document.location.replace('/profile');
    } else {
      showError.classList.remove('hidden')
    }
  }
};


document
  .querySelector('#register-btn')
  .addEventListener( 'click', function(event) {
    event.preventDefault()
    document.location.replace('/register')
  })

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);