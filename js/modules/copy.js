const copyButton = document.querySelector('.copy-btn');
const copyText = document.querySelector('.profile__card-number');
const notice = document.querySelector('.notification');

copyButton.addEventListener('click', () => {
  let text = copyText.textContent;
  copyTextToClipboard(text)
});

async function copyTextToClipboard(text) {
  try {
      await navigator.clipboard.writeText(text);
      document.querySelector('.notification__text').textContent = 'Text copied to clipboard';
      notice.classList.add('notification--active');
      setTimeout(function () {
      notice.classList.remove('notification--active');
      }, 2000);
  } catch (err) {
      console.error('Error in copying text: ', err);
  }
};