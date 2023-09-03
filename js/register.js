import authorizedUser from "./autorize.js";
import {modalOverlay} from "./modals.js";

//объявление переменных
export const registerForm = document.querySelector('.register__form');
const firstNameRegister = document.getElementById('first-name-register');
const lastNameRegister = document.getElementById('last-name-register');
const emailRegister = document.getElementById('email-register');
const passwordRegister = document.getElementById('password-register');
const registerButton = document.getElementById('btn-register');
const modalWindowRegister = document.querySelector('.register');
const notification = document.querySelector('.notification');

const emailRegExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

// генерация cardNumber
function generateCardNumber () {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

  let cardNumber = '';

  for (let i=0; i<9; i++) {
    let random = Math.floor(Math.random() * (numbers.length - 1));
    cardNumber += numbers[random]
  }

  return cardNumber
}

// создание аккаунта - объект с данными пользователя
function createAccount() {
  let arrayOfUsers = JSON.parse(localStorage.getItem('users')) || [];

  let user = {
    firstName: firstNameRegister.value,
    lastName: lastNameRegister.value,
    email: emailRegister.value,
    password: passwordRegister.value,
    books: [],
    bookSubscription: false,
    cardNumber: generateCardNumber()
  }

  arrayOfUsers.push(user);
  localStorage.setItem('users', JSON.stringify(arrayOfUsers));

  return user
}

// валидация формы register + выполнение действий после успешно пройденной валидации
function userRegister(event) {
  event.preventDefault();

  if (!firstNameRegister.value.length) {
    firstNameRegister.classList.add('red-border');
    alert('First name is required');
    firstNameRegister.focus();
  } else if (!lastNameRegister.value.length) {
    lastNameRegister.classList.add('red-border');
    alert('Last name is required');
    lastNameRegister.focus();
  } else if (!emailRegister.value.length) {
    emailRegister.classList.add('red-border');
    alert('Email is required');
    emailRegister.focus();
  } else if(!emailRegExp.test(emailRegister.value)) {
    emailRegister.classList.add('red-border');
    alert('Email is incorrect');
    emailRegister.focus();
  } else if (passwordRegister.value.length < 8) {
    passwordRegister.classList.add('red-border');
    alert('Password can not be less than 8 characters');
    passwordRegister.focus();
  } else {
    let newUser = createAccount(); // создание аккаунта - объект с данными пользователя
    localStorage.setItem('currentUser', JSON.stringify(newUser)); //сохранение в localStorage текущего пользователя
    authorizedUser(newUser); // вход в личный кабинет

    // clearRegisterFields(); // очистить поля формы регистрации после отправки формы
    registerForm.reset(); // очистить поля формы регистрации после отправки формы
    modalWindowRegister.classList.remove('modal--visible'); // закрыть модальное окно
    modalOverlay.classList.remove('modals__overlay--visible'); // закрыть модальное окно

    // надпись об успешной регистрации
    notification.classList.add('notification--active');
    setTimeout(function () {
    notification.classList.remove('notification--active');
    }, 2000);
  }
}

registerButton.addEventListener('click', userRegister);