const formBtn = document.querySelector('#form_btn');

formBtn.addEventListener('click', (event) => {
  event.preventDefault();

  let cardName = document.getElementById('card-name').value;
  let cardNumber = document.getElementById('card-number').value;

  const usersArray = JSON.parse(localStorage.getItem('users'));
  let findUser = usersArray.find(user => user.firstName + ' ' + user.lastName ===  cardName && user.cardNumber === cardNumber);

  if (findUser) {
    formBtn.classList.add('btn--inactive');
    document.querySelector('.statistics--small').classList.remove('statistics--inactive');
    document.getElementById('stat-books').textContent = findUser.books.length;

    setTimeout(function () {
      formBtn.classList.remove('btn--inactive');
      document.querySelector('.statistics--small').classList.add('statistics--inactive');
      document.getElementById('card-name').value = '';
      document.getElementById('card-number').value = '';
    }, 10000);
  }
});