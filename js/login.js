import authorizedUser from "./autorize.js";

const loginEmail = document.getElementById('email-login');
const loginPassword = document.getElementById('password-login');
const loginButton = document.getElementById('login-btn');
const modalWindowLogin = document.querySelector('.login');

let users = JSON.parse(localStorage.getItem('users'));

function clearLoginFields() {
  loginEmail.value = '';
  loginEmail.classList.remove('red-border');
  loginPassword.value = '';
  loginPassword.classList.remove('red-border');
}

function userLogin(event) {
  event.preventDefault();

  let foundUser = users.find(user => (user.email === loginEmail.value || user.cardNumber === loginEmail.value) && user.password === loginPassword.value);

  if (!loginEmail.value.length) {
    loginEmail.classList.add('red-border');
    alert('Please enter email or readers card');
    loginEmail.focus();
  } else if (loginPassword.value.length < 8) {
    loginPassword.classList.add('red-border');
    alert('Incorrect password');
    loginEmail.focus();
  } else if (!foundUser) {
    alert('You do not have an account. Please Sign up using the link below')
  } else {
    // let foundUser = users.find(user => (user.email === loginEmail.value || user.cardNumber === loginEmail.value) && user.password === loginPassword.value);

    authorizedUser (foundUser);
    clearLoginFields();
    modalWindowLogin.classList.remove('modal--visible');
    modalOverlay.classList.remove('modals__overlay--visible');
  }
}


loginButton.addEventListener('click', userLogin);
