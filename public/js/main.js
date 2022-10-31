

// console.log('hello')

// document
//   .querySelector('#profile-pic')
//   .addEventListener('click', function(event) {
//     console.log(req.session.user_username)
//     event.preventDefault()
//     document.location.replace(`/profile/${req.session.user_username}`)
//   });

if (document.querySelector('.login-btn')) {
  document
  .querySelector('.login-btn')
  .addEventListener('click', function(event) {
  event.preventDefault()
  document.location.replace('/login')
})
} else {
  document
  .querySelector('.profile-btn')
  .addEventListener('click', function(event) {
  event.preventDefault()
  document.location.replace('/profile')
})
}

const goHome = () => {
  document.location.replace('/')
}

document.querySelector('#home-btn')
.addEventListener('click', goHome)




