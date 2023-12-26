const profileButton = document.querySelector('.profile-btn');
const profileMenu = document.querySelector('.profile-enter__menu');
const body = document.querySelector('.body');
const burger = document.querySelector('.burger');
const menuBurger = document.querySelector('.nav');

const openProfileMenu = function () {
  profileMenu.classList.toggle('profile-enter__menu--active');
}

profileButton.addEventListener('click', function (e) {
  burger.classList.remove('burger--active');
  menuBurger.classList.remove('nav--active');
  e.stopPropagation();
  openProfileMenu();
});

body.addEventListener('click', function (e) {
  const target = e.target;
  const targetProfile = target == profileButton;
  const targetMenu = target == profileMenu || profileMenu.contains(target);
  const activeMenu = profileMenu.classList.contains('profile-enter__menu--active');

  if (!targetProfile && !targetMenu && activeMenu) {
    openProfileMenu();
  }
});