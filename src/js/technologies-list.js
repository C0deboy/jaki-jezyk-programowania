require('../css/technologies-list.scss');

const langElements = document.querySelectorAll('.lang');
const langLinks = document.querySelectorAll('.lang-link');

const mobile = window.matchMedia('(max-width: 992px)').matches;

window.addEventListener('touchstart', function onFirstTouch() {
  langLinks.forEach((link) => link.addEventListener('click', disableLink));
  window.removeEventListener('touchstart', onFirstTouch, false);
}, false);

langElements.forEach((lang) => {
  const subs = lang.querySelectorAll('.sub');

  if (!mobile) {
    lang.addEventListener('mouseover', () => showSubTechnologies(subs, lang));
    lang.addEventListener('mouseout', () => hideSubTechnologies(subs, lang));
  } else {
    showSubTechnologies(subs, lang);
    if (subs.length === 0) {
      lang.style.minHeight = '140px';
    }
  }
});

function showSubTechnologies(subs, lang) {
  if (subs.length !== 0) {
    subs.forEach((sub) => {
      sub.style.height = `${60}px`;
      sub.style.width = `${60}px`;
      sub.classList.add('backToPosition');
    });
  }
}

function hideSubTechnologies(subs, lang) {
  if (subs.length !== 0) {
    subs.forEach((sub) => {
      sub.style.height = `${35}px`;
      sub.style.width = `${35}px`;
      sub.classList.remove('backToPosition');
    });
  }
}

function disableLink(e) {
  e.preventDefault();
  this.removeEventListener('click', disableLink);
}
