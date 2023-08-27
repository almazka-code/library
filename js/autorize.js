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
  const profileImage =document.querySelector('.profile__img');
  const profileName = document.querySelector('.profile__name');
  const profileVisits = document.querySelectorAll('.statistics__count--visits');
  const profileCountBooks = document.querySelectorAll('.statistics__count--books');
  const booksList = document.querySelector('.profile__list');
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

   // let account = users.find(user => (user.email === loginEmail.value || user.cardNumber === loginEmail.value) && user.password === loginPassword.value);
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
  // profileVisits
  profileCountBooks.forEach(book => {
    book.textContent = account.books.length;
  });
  profileCardNumber.textContent = account.cardNumber;

// Rented books
  const books = account.books; //массив с книгами
  books.forEach(book => {
    let node = document.createElement('li');
    node.classList.add('profile__item');
    node.appendChild(document.createTextNode(book));
    booksList.appendChild(node);
  })

  formCardName.value = fullName;
  formCardNumber.value = account.cardNumber;
  formButton.classList.add('btn--inactive');
  formStatistics.classList.remove('statistics--inactive');

  libraryCardSubtitle.textContent = 'Visit your profile';
  libraryCardText.textContent = 'With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.';
  buttonCardSignUp.classList.add('btn--inactive');
  buttonCardLogin.classList.add('btn--inactive');
  buttonCardProfile.classList.remove('btn--inactive');

  bookButton.forEach(btn => {
    btn.setAttribute('data-btn', 'buy-card');
  })
}