

console.log('hello')

document
  .querySelector('#profile-pic')
  .addEventListener('click', function(event) {
    console.log(req.session.user_username)
    event.preventDefault()
    document.location.replace(`/profile/${req.session.user_username}`)
  });