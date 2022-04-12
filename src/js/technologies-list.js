require('../css/technologies-list.scss');

const langElements = document.querySelectorAll('.lang');

window.addEventListener('touchstart', function onFirstHover() {
  document.querySelectorAll('.lang-link')
    .forEach((link) => {
      link.addEventListener('click', disableLink);
    });
  window.DOUBLE_CLICK_ENABLED = true;
  window.removeEventListener('touchstart', onFirstHover, false);
}, false);

langElements.forEach((lang) => {
  const subs = lang.querySelectorAll('.sub');
  lang.addEventListener('mouseover', () => showSubTechnologies(subs, lang));
  lang.addEventListener('mouseout', () => hideSubTechnologies(subs, lang));
});

function showSubTechnologies(subs, lang) {
  if (subs.length !== 0) {
    subs.forEach((sub) => {
      sub.style.height = 60 + 'px';
      sub.style.width = 60 + 'px';
      sub.classList.add('backToPosition');
    });
  }
  if (subs.length > 4 && window.matchMedia('(max-width: 992px)').matches) {
    lang.style.marginBottom = '50px';
  }
}

function hideSubTechnologies(subs, lang) {
  if (subs.length !== 0) {
    subs.forEach((sub) => {
      sub.style.height = 35 + 'px';
      sub.style.width = 35 + 'px';
      sub.classList.remove('backToPosition');
    });
  }

  if (subs.length > 4 && window.matchMedia('(max-width: 992px)').matches) {
    lang.style.marginBottom = '0';
  }

  if (window.DOUBLE_CLICK_ENABLED) {
    lang.querySelectorAll('.lang-link')
      .forEach((link) => {
        link.addEventListener('click', disableLink);
      });
  }
}

function disableLink(e) {
  e.preventDefault();
  this.removeEventListener('click', disableLink);
}
