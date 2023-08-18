// бургер-меню
let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav');
let menuLinks = document.querySelectorAll('.nav__link');
let body = document.querySelector('.body');

let openMenu = function () {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('nav--active');
  body.classList.toggle('stop-scroll');
}

burger.addEventListener('click', function (e) {
  e.stopPropagation();
  openMenu();
});

menuLinks.forEach(function(el) {
  el.addEventListener('click', function() {
    burger.classList.remove('burger--active');
    menu.classList.remove('nav--active');
    body.classList.remove('stop-scroll');
  });
});

body.addEventListener('click', function (e) {
  let target = e.target;
  let targetBurger = target == burger;
  let targetMenu = target == menu || menu.contains(target);
  let activeMenu = menu.classList.contains('nav--active');

  if (!targetBurger && !targetMenu && activeMenu) {
    openMenu();
  }
});

