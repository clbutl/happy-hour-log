const registerFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-register').value.trim();
  const password = document.querySelector('#password-register').value.trim();
  const username = document.querySelector('#username-register').value.trim();
  const errorMsg = document.querySelector('#error-message-register')

  if (email && password && username) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/', {
      method: 'POST',
      body: JSON.stringify({ email, password, username }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      errorMsg.classList.add('hidden')
      document.location.replace('/profile');
    } else {
      errorMsg.classList.remove('hidden')
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', registerFormHandler);

document
  .querySelector('#login-btn')
  .addEventListener( 'click', function(event) {
    event.preventDefault()
    document.location.replace('/login')
  })