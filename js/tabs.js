const radioButtons = document.querySelectorAll('.radio-btn__item');
const tabsItems = document.querySelectorAll('.favorites__list');

radioButtons.forEach(item => {
  item.addEventListener('click', () => {
    let currentButton = item;
    let tabId = currentButton.getAttribute("data-tab");
    let currentTabItem = document.querySelector(tabId);

    if( !currentButton.classList.contains('radio-btn__item--active') ) {
      radioButtons.forEach((item) => {
          item.classList.remove('radio-btn__item--active');
      });

      currentButton.classList.add('radio-btn__item--active');

      document.querySelector('.favorites__list--active').classList.add('fade-out');

      setTimeout(function () {

        tabsItems.forEach((item) => {
            item.classList.remove('favorites__list--active', 'transparent', 'fade-in', 'fade-out');
        });

        currentTabItem.classList.add('favorites__list--active', 'transparent');
        setTimeout(function () {
          currentTabItem.classList.add("fade-in");
        }, 100);

      }, 1000);

    }
  })
})