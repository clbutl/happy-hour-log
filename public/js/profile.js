const logOut = async (event) => {
  event.preventDefault();
  console.log(document.location.href)

  if (document.location.href === 'http://localhost:3001/profile') {
    await fetch('/api/users/logout', {
      method: 'POST',
    });
  } else {
    document.location.replace('/profile')
    await fetch('/api/users/logout', {
      method: 'POST',
    });
  }
  document.location.replace(`/login`);

  
}

document
  .querySelector('#logout-btn')
  .addEventListener('click', logOut);

