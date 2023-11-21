import authorizedUser from "./autorize.js";
import {modalOverlay} from "./modals.js";

//объявление переменных
export const loginForm = document.querySelector('.login__form');
const loginEmail = document.getElementById('email-login');
const loginPassword = document.getElementById('password-login');
const loginButton = document.getElementById('login-btn');
const modalWindowLogin = document.querySelector('.login');

// достать данные из localStorage
let users = JSON.parse(localStorage.getItem('users'));

// валидация формы login + выполнение действий после успешно пройденной валидации
function userLogin(event) {
  event.preventDefault();

  if (users === null) {
    alert('You do not have an account. Please Sign up using the link below')
  }

  // записать в переменную найденного пользователя
  let foundUser = users.find(user => (user.email === loginEmail.value || user.cardNumber === loginEmail.value) && user.password === loginPassword.value);

  //валидация формы login
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
    localStorage.setItem('currentUser', JSON.stringify(foundUser)); //сохранение в localStorage текущего пользователя
    authorizedUser(foundUser); // отрисовать данные пользователя на странице
    loginForm.reset(); //очистить поля после отправки формы
    modalWindowLogin.classList.remove('modal--visible'); //закрыть модальное окно
    modalOverlay.classList.remove('modals__overlay--visible'); //закрыть модальное окно
  }
}

loginButton.addEventListener('click', userLogin);

const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (currentUser !== null) {
  authorizedUser(currentUser)
}

