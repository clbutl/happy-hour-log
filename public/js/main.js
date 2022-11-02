const homeBtn = () => {
  document.location.replace('/')
}

document.querySelector('#home-btn')
.addEventListener('click', homeBtn)


const dropdownList = document.querySelector('.dropdown-content-main')
const showDropdown = () => {
  if (dropdownList.classList.contains('hidden')) {
    dropdownList.classList.remove('hidden')
  } else {
    dropdownList.classList.add('hidden')
  }
}

document.querySelector('#profile-pic').addEventListener('click', showDropdown)

const goProfile = () => {
  dropdownList.classList.add('hidden')
  document.location.replace('/profile')
}
const goPost = () => {
  dropdownList.classList.add('hidden')
  document.location.replace('/post')
}
const logOut = async (event) => {
  event.preventDefault();

  if (document.location.href === 'http://localhost:3001/profile' || document.location.href === 'http://localhost:3001/post') {
    await fetch('/api/users/logout', {
      method: 'POST',
    });
  } else {
    document.location.replace('/profile')
    await fetch('/api/users/logout', {
      method: 'POST',
    });
  }
  dropdownList.classList.add('hidden')
  document.location.replace(`/login`);
}
const login = () => {
  dropdownList.classList.add('hidden')
  document.location.replace(`/login`);
}

if (document.querySelector('#main-login-btn')) {
  document.querySelector('#main-login-btn').addEventListener('click', login)
} else {
  document.querySelector('#main-profile-btn').addEventListener('click', goProfile)
  document.querySelector('#main-create-btn').addEventListener('click', goPost)
  document.querySelector('#main-logout-btn').addEventListener('click', logOut)
}
