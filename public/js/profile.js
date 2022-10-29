const logOut = async (event) => {
  event.preventDefault();

  await fetch('/api/users/logout', {
    method: 'POST',
  });
  document.location.replace(`/login`);
}

document
  .querySelector('#logout-btn')
  .addEventListener('click', logOut);