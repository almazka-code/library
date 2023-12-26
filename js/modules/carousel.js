const carousel = document.querySelector('.carousel__list');
const prevBtn = document.querySelector('.carousel__button--prev');
const nextBtn = document.querySelector('.carousel__button--next');
const paginationContainer = document.querySelector('.carousel__control');
const paginationButtons = document.querySelectorAll('.carousel__pagination');

let currentIndex = 0;
// let slideWidth = document.querySelector('.carousel__slide').offsetWidth;

function showSlide(index) {
  const offset = index * 450 + 25 * index;
  carousel.style.transform = `translateX(-${offset}px)`;
  updatePagination(index);
}

function updatePagination(index) {
  paginationButtons.forEach((btn, btnIndex) => {
      btnIndex === index ? btn.classList.add('carousel__pagination--active') : btn.classList.remove('carousel__pagination--active');
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  buttonDisabled();
  showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = Math.min(currentIndex + 1, carousel.children.length - 1);
  buttonDisabled();
  // if (document.documentElement.clientWidth > 1024 && currentIndex > 2) currentIndex = 0;
  if (document.documentElement.clientWidth > 1024 && currentIndex >= 2) {
      nextBtn.classList.add('disabled');
  }
  showSlide(currentIndex);
});

paginationContainer.addEventListener('click', event => {
  if (event.target.classList.contains('carousel__pagination')) {
      currentIndex = Array.from(paginationContainer.children).indexOf(event.target);
      // if (document.documentElement.clientWidth > 768 && currentIndex > 2) currentIndex = 0;
      showSlide(currentIndex);
      buttonDisabled ()
  }
});

function buttonDisabled () {
  nextBtn.classList.remove('disabled');
  prevBtn.classList.remove('disabled');

  if (currentIndex === 0) prevBtn.classList.add('disabled');
  if (currentIndex === carousel.children.length - 1) nextBtn.classList.add('disabled');
}

showSlide(currentIndex);