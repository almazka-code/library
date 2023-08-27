let bankCardNumber = document.getElementById('bank-card-number');
let firstExpirationCode = document.querySelector('.expiration-code--first');
let secondExpirationCode = document.querySelector('.expiration-code--second');
let cvc = document.getElementById('cvc');
let cardholder = document.getElementById('cardholder');
let postalCode = document.getElementById('postal-code');
let city = document.getElementById('city');
let buttonBuySubscription = document.querySelector('.btn-buy');
let buyBook = document.querySelectorAll('.btn-book');

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
    buyBook.forEach(btn => {
      btn.removeAttribute('data-btn')
    });
    // clearRegisterFields()
    modalWindowRegister.classList.remove('modal--visible');
    modalOverlay.classList.remove('modals__overlay--visible');
    // document.querySelector('.notification__text').textContent = 'Text copied to clipboard';
    //   notice.classList.add('notification--active');
    //   setTimeout(function () {
    //   notice.classList.remove('notification--active');
    //   }, 2000);

  }
}

buttonBuySubscription.addEventListener('click', buySubscription);