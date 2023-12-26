import {buttonsBook} from "./buy-card.js";
import {buttonsProduct} from "./buy-card.js";

// Rented books в модальном окне My profile
export function rentedBooks(user) {
  const books = user.books; //массив с книгами
  const booksList = document.querySelector('.profile__list');

  //сначала удалить все книги, иначе будет задвоение
  while (booksList.firstChild) {
    booksList.removeChild(booksList.firstChild);
  }

  //отрисовать все книги
  books.forEach(book => {
    let node = document.createElement('li');
    node.classList.add('profile__item');
    node.appendChild(document.createTextNode(book));
    booksList.appendChild(node);
  })
}

export function numberOfBooks(user) {
  const profileCountBooks = document.querySelectorAll('.statistics__count--books');
  profileCountBooks.forEach(book => {
    book.textContent = user.books.length;
  });
}

export default function authorizedUser(account) {
  // Изменяющиеся после авторизации поля
  const bookButton = document.querySelectorAll('.btn-book');

  // menuProfile
  const profileButtonIcon = document.querySelector('.profile-btn__icon');
  const profileButtonName = document.querySelector('.profile-btn__name');
  const profileTitle = document.querySelector('.profile-enter__title');
  const buttonMenuLogin = document.querySelector('.btn--menu-login');
  const buttonMenuCard = document.querySelector('.btn--profile-card');
  const buttonMenuRegister = document.querySelector('.btn--register');
  const buttonMenuLogOut = document.querySelector('.btn--logout');

  // модальное окно my Profile
  const profileImage = document.querySelector('.profile__img');
  const profileName = document.querySelector('.profile__name');
  const profileCardNumber = document.querySelector('.profile__card-number');

  //section digital library card
  const formCardName = document.getElementById('card-name');
  const formCardNumber = document.getElementById('card-number');
  const formStatistics = document.querySelector('.statistics--small');
  const formButton = document.querySelector('.form__btn');

  const libraryCardSubtitle = document.querySelector('.library-card__subtitle');
  const libraryCardText = document.querySelector('.library-card__text');
  const buttonCardSignUp = document.querySelector('.btn-card-signup');
  const buttonCardLogin = document.querySelector('.btn-card-login');
  const buttonCardProfile = document.querySelector('.btn-card-profile');

  let initials = (account.firstName.slice(0, 1) + account.lastName.slice(0, 1)).toUpperCase();
  let fullName = account.firstName + ' ' + account.lastName;

  profileButtonIcon.classList.add('profile-btn__icon--inactive');
  profileButtonName.classList.add('profile-btn__name--active');
  profileButtonName.textContent = initials;
  profileButtonName.setAttribute('title', fullName);
  buttonMenuLogin.classList.add('btn--inactive');
  buttonMenuCard.classList.remove('btn--inactive');
  buttonMenuRegister.classList.add('btn--inactive');
  buttonMenuLogOut.classList.remove('btn--inactive');
  profileTitle.textContent = account.cardNumber;
  profileTitle.classList.add('profile-enter__title--small');

  profileImage.textContent = initials;
  profileName.textContent = fullName;

  profileCardNumber.textContent = account.cardNumber;

  rentedBooks(account);
  numberOfBooks(account);

  formCardName.value = fullName;
  formCardNumber.value = account.cardNumber;
  formButton.classList.add('btn--inactive');
  formStatistics.classList.remove('statistics--inactive');

  libraryCardSubtitle.textContent = 'Visit your profile';
  libraryCardText.textContent = 'With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.';
  buttonCardSignUp.classList.add('btn--inactive');
  buttonCardLogin.classList.add('btn--inactive');
  buttonCardProfile.classList.remove('btn--inactive');


  if (account.bookSubscription === false) {
    bookButton.forEach(btn => {
      btn.setAttribute('data-btn', 'buy-card');
    })
  } else {
    buttonsBook.forEach(btn => {
      btn.classList.add('btn--inactive');
    });

    buttonsProduct.forEach(btn => {
      btn.classList.remove('btn--inactive');
    })

    let booksOfUsers = account.books;
    buttonsProduct.forEach(btn => {
      booksOfUsers.forEach(book => {
        if (btn.getAttribute('data-product') === book) {
          btn.textContent = 'Own';
          btn.classList.add('btn--own');
        }
      })
    })
  }
}