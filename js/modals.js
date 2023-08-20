const modalButtons = document.querySelectorAll('.btn-modal');
const modalOverlay = document.querySelector('.modals__overlay');
const modals = document.querySelectorAll('.modal');

const closeButtons = document.querySelectorAll('.modal-close');

modalButtons.forEach((btn) => {
	btn.addEventListener('click', (event) => {
    profileMenu.classList.remove('profile-enter__menu--active');
		let currentBtn = event.currentTarget.getAttribute('data-btn');

		modals.forEach((item) => {
			item.classList.remove('modal--visible');
		});

    document.querySelector(`[data-modal="${currentBtn}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modals__overlay--visible');
	});
});

function closeModalWindow() {
  modalOverlay.classList.remove('modals__overlay--visible');
    modals.forEach((item) => {
			item.classList.remove('modal--visible');
		});
}

modalOverlay.addEventListener('click', (event) => {
	if (event.target == modalOverlay) {
		closeModalWindow()
	}
});

closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    closeModalWindow()
  })
})