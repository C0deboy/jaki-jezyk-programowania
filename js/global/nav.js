const scrollToElement = (el, ms) => {
  const speed = ms || 600;
  $('html,body').animate({
    scrollTop: $(el).offset().top,
  }, speed);
};

$('.navbar a[href^="#"]').on('click', function scrollTo() {
  scrollToElement($(this).attr('href'), 600);
});

function dynamicNavbar() {
  const navbarCustom = $('.navbar-custom');
  const headerHeight = navbarCustom.height();
  const currentTop = $(window).scrollTop();
  if (currentTop < this.previousTop) {
    if (currentTop > 0 && navbarCustom.hasClass('is-fixed')) {
      navbarCustom.addClass('is-visible');
    } else {
      navbarCustom.removeClass('is-visible is-fixed');
    }
  } else {
    navbarCustom.removeClass('is-visible');
    $('.navbar-collapse').removeClass('in');
    if (currentTop > headerHeight && !navbarCustom.hasClass('is-fixed')) navbarCustom.addClass('is-fixed');
  }
  this.previousTop = currentTop;
}

$(document).ready(($) => {
  $(window).on('scroll', {
    previousTop: 0,
  }, dynamicNavbar);
});

$('body').scrollspy({
  target: '.navbar-fixed-top',
  offset: 51,
});
