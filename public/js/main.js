const homeBtn = () => {
  document.location.replace('/')
}

document.querySelector('#home-btn')
.addEventListener('click', homeBtn)


const dropdownList = document.querySelector('.dropdown-content-main')
const dropdownList2 = document.querySelector('.dropdown-content-main-2')
const showDropdown = () => {
  if (dropdownList.classList.contains('hidden')) {
    dropdownList.classList.remove('hidden')
  } else {
    dropdownList.classList.add('hidden')
  }
}
const showDropdown2 = () => {
  if (dropdownList2.classList.contains('hidden')) {
    dropdownList2.classList.remove('hidden')
  } else {
    dropdownList2.classList.add('hidden')
  }
}
if (dropdownList) {
  document.querySelector('#profile-pic').addEventListener('click', showDropdown)
} else {
  document.querySelector('#profile-pic').addEventListener('click', showDropdown2)
}

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
  document.location.replace(`/login`);
}
const login = () => {
  document.location.replace(`/login`);
}

if (document.querySelector('#main-login-btn')) {
  document.querySelector('#main-login-btn').addEventListener('click', login)
} else {
  document.querySelector('#main-profile-btn').addEventListener('click', goProfile)
  document.querySelector('#main-create-btn').addEventListener('click', goPost)
  document.querySelector('#main-logout-btn').addEventListener('click', logOut)
}
