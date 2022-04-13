import { ScrollSpy } from 'bootstrap';

const navbarCustom = document.querySelector('.navbar-custom');

let previousTop = 0;

function dynamicNavbar() {
  const headerHeight = navbarCustom.offsetHeight;
  const currentTop = window.scrollY;
  if (currentTop < previousTop) {
    if (currentTop > 0 && navbarCustom.classList.contains('is-fixed')) {
      navbarCustom.classList.add('is-visible');
    } else {
      navbarCustom.classList.remove('is-visible', 'is-fixed');
    }
  } else {
    navbarCustom.classList.remove('is-visible');

    if (currentTop > headerHeight && !navbarCustom.classList.contains('is-fixed')) {
      navbarCustom.classList.add('is-fixed');
    }
  }
  previousTop = currentTop;
}

window.addEventListener('scroll', dynamicNavbar);

new ScrollSpy(document.body, {
  target: '#site-nav',
  offset: 65,
});
