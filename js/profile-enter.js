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