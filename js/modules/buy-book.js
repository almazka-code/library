import {rentedBooks} from "./autorize.js";
import {numberOfBooks} from "./autorize.js";
import {buttonsProduct} from "./buy-card.js";
import {replaceUser} from "./buy-card.js";

buttonsProduct.forEach(btn => {
  btn.addEventListener('click', () => {
    let bookName = btn.getAttribute('data-product');

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    currentUser.books.push(bookName);
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    rentedBooks(currentUser); //изменить список книг
    numberOfBooks(currentUser); // изменить количество книг
    replaceUser(currentUser); // обновить массив с пользователями в localStorage

    btn.textContent = 'Own';
    btn.classList.add('btn--own');
  })
});