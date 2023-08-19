// бургер-меню
let burger = document.querySelector('.burger');
let menuBurger = document.querySelector('.nav');
let menuLinks = document.querySelectorAll('.nav__link');
let body = document.querySelector('.body');

let openBurgerMenu = function () {
  burger.classList.toggle('burger--active');
  menuBurger.classList.toggle('nav--active');
  body.classList.toggle('stop-scroll');
}

burger.addEventListener('click', function (e) {
  profileMenu.classList.remove('profile-enter__menu--active');
  e.stopPropagation();
  openBurgerMenu();
});

menuLinks.forEach(function(el) {
  el.addEventListener('click', function() {
    burger.classList.remove('burger--active');
    menuBurger.classList.remove('nav--active');
    body.classList.remove('stop-scroll');
  });
});

body.addEventListener('click', function (e) {
  let target = e.target;
  let targetBurger = target == burger;
  let targetMenu = target == menuBurger || menuBurger.contains(target);
  let activeMenu = menuBurger.classList.contains('nav--active');

  if (!targetBurger && !targetMenu && activeMenu) {
    openBurgerMenu();
  }
});

//profile-enter
let profileButton = document.querySelector('.profile-btn');
let profileMenu = document.querySelector('.profile-enter__menu');

let openProfileMenu = function () {
  profileMenu.classList.toggle('profile-enter__menu--active');
}

profileButton.addEventListener('click', function (e) {
  burger.classList.remove('burger--active');
  menuBurger.classList.remove('nav--active');
  e.stopPropagation();
  openProfileMenu();
});

body.addEventListener('click', function (e) {
  let target = e.target;
  let targetProfile = target == profileButton;
  let targetMenu = target == profileMenu || profileMenu.contains(target);
  let activeMenu = profileMenu.classList.contains('profile-enter__menu--active');

  if (!targetProfile && !targetMenu && activeMenu) {
    openProfileMenu();
  }
});


