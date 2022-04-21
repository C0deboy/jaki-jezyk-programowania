require('../css/technologies-list.scss');

const langElements = document.querySelectorAll('.lang');
const langLinks = document.querySelectorAll('.lang-link');

const mobile = window.matchMedia('(max-width: 992px)').matches;

if (mobile) {
  createMobileLabels();
}

langElements.forEach((lang) => {
  const subs = lang.querySelectorAll('.sub');

  if (!mobile) {
    lang.addEventListener('mouseover', () => showSubTechnologies(subs));
    lang.addEventListener('mouseout', () => hideSubTechnologies(subs));
  } else {
    showSubTechnologies(subs);
    if (subs.length === 0) {
      lang.style.minHeight = '140px';
    } else if (subs.length > 4) {
      lang.style.marginBottom = '50px';
    }
  }
});

function showSubTechnologies(subs) {
  if (subs.length !== 0) {
    subs.forEach((sub) => {
      sub.style.height = `${60}px`;
      sub.style.width = `${60}px`;
      sub.classList.add('backToPosition');
    });
  }
}

function createMobileLabels() {
  langLinks.forEach((link) => {
    const img = link.querySelector('img');
    const lang = img.getAttribute('data-tip');
    const languageEl = document.createElement('span');
    languageEl.innerText = lang;
    languageEl.classList.add('mobile-label');
    link.appendChild(languageEl);
  });
}

function hideSubTechnologies(subs) {
  if (subs.length !== 0) {
    subs.forEach((sub) => {
      sub.style.height = `${35}px`;
      sub.style.width = `${35}px`;
      sub.classList.remove('backToPosition');
    });
  }
}
