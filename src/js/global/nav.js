import { Collapse } from 'bootstrap';

const navbarCustom = document.querySelector('.navbar-custom');
const siteNav = document.getElementById('site-nav');
const navbarCollapse = new Collapse(navbarCustom.querySelector('.collapse'));

let previousTop = 0;

function dynamicNavbar() {
  const headerHeight = navbarCustom.offsetHeight;
  const currentTop = window.scrollY;
  if (currentTop <= previousTop) {
    if (currentTop > 0 && navbarCustom.classList.contains('is-fixed')) {
      navbarCustom.classList.add('is-visible');
    } else {
      navbarCustom.classList.remove('is-visible', 'is-fixed');
    }
  } else {
    navbarCustom.classList.remove('is-visible');

    if (siteNav.classList.contains('show')) {
      navbarCollapse.hide();
    }

    if (currentTop > headerHeight && !navbarCustom.classList.contains('is-fixed')) {
      navbarCustom.classList.add('is-fixed');
    }
  }
  previousTop = currentTop;
}

window.addEventListener('scroll', dynamicNavbar);

if (window.matchMedia('(max-width: 991px)')) {
  setTimeout(() => navbarCollapse.hide(), 500);
}
