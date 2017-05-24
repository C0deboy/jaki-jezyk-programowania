$(() => {
    /* Scroll to element effect */

  const scrollToElement = (el, ms) => {
    const speed = ms || 600;
    $('html,body').animate({
      scrollTop: $(el).offset().top,
    }, speed);
  };

  $('.navbar a[href^="#"]').on('click', function scrollTo() {
    scrollToElement($(this).attr('href'), 600);
  });

    // Navigation Scripts to Show Header on Scroll-Up
  jQuery(document).ready(($) => {
    const MQL = 1170;

        // primary navigation slide-in effect
    if ($(window).width() > MQL) {
      const navbarCustom = $('.navbar-custom');
      const headerHeight = navbarCustom.height();
      $(window).on('scroll', {
        previousTop: 0,
      }, function dynamicNavbar() {
        const currentTop = $(window).scrollTop();
            // check if user is scrolling up
        if (currentTop < this.previousTop) {
                // if scrolling up...
          if (currentTop > 0 && navbarCustom.hasClass('is-fixed')) {
            navbarCustom.addClass('is-visible');
          } else {
            navbarCustom.removeClass('is-visible is-fixed');
          }
        } else {
                // if scrolling down...
          navbarCustom.removeClass('is-visible');
          if (currentTop > headerHeight && !navbarCustom.hasClass('is-fixed')) navbarCustom.addClass('is-fixed');
        }
        this.previousTop = currentTop;
      });
    }
  });

    /* Highlight section */

  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51,
  });
});
