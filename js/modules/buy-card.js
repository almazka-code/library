import {modalOverlay} from "./modals.js";

export const bankCardForm = document.querySelector('.bank-card');
let bankCardNumber = document.getElementById('bank-card-number');
let firstExpirationCode = document.querySelector('.expiration-code--first');
let secondExpirationCode = document.querySelector('.expiration-code--second');
let cvc = document.getElementById('cvc');
let cardholder = document.getElementById('cardholder');
let postalCode = document.getElementById('postal-code');
let city = document.getElementById('city');
let buttonBuySubscription = document.querySelector('.btn-buy');
export let buttonsBook = document.querySelectorAll('.btn-book');
export let buttonsProduct = document.querySelectorAll('.btn-product');

export function replaceUser(currentUser) {
  const users = JSON.parse(localStorage.getItem('users'));
  const searchFirstName = currentUser.firstName;
  const searchLastName = currentUser.lastName;
  const index = users.findIndex(el => el.firstName === searchFirstName && el.lastName === searchLastName);

  users.splice(index, 1, currentUser);
  localStorage.setItem('users', JSON.stringify(users));
  console.log(users);
}

function buySubscription(event) {
  event.preventDefault();

  if (bankCardNumber.value.length < 16) {
    bankCardNumber.classList.add('red-border');
    alert('Incorrect bank card number');
    bankCardNumber.focus();
  } else if (firstExpirationCode.value.length < 2) {
    firstExpirationCode.classList.add('red-border');
    alert('Incorrect expiration code');
    firstExpirationCode.focus();
  } else if (secondExpirationCode.value.length < 2) {
    secondExpirationCode.classList.add('red-border');
    alert('Incorrect expiration code');
    secondExpirationCode.focus();
  } else if(cvc.value.length < 3) {
    cvc.classList.add('red-border');
    alert('Incorrect cvc');
    cvc.focus();
  } else if (!cardholder.value.length) {
    cardholder.classList.add('red-border');
    alert('Cardholder name is required');
    cardholder.focus();
  } else if (!postalCode.value.length) {
    postalCode.classList.add('red-border');
    alert('Postal code is required');
    postalCode.focus();
  } else if (!city.value.length) {
    city.classList.add('red-border');
    alert('City / Town is required');
    city.focus();
  } else {
    buttonBuySubscription.classList.remove('btn--disabled');

    buttonsBook.forEach(btn => {
      btn.classList.add('btn--inactive');
    });

    buttonsProduct.forEach(btn => {
      btn.classList.remove('btn--inactive');
    })

    bankCardForm.reset(); //очистить поля формы
    modalOverlay.classList.remove('modals__overlay--visible');

    const user = JSON.parse(localStorage.getItem('currentUser'));
    user.bookSubscription = true;
    localStorage.setItem('currentUser', JSON.stringify(user));

    replaceUser(user);
  }
}

buttonBuySubscription.addEventListener('click', buySubscription);