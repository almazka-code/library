const logout = document.querySelector('.btn--logout');

logout.addEventListener('click', function() {
  localStorage.removeItem('currentUser');
  location.reload();
});