
$(function(){
  
  $('.question').click(function () {
    if ($(this).next().is( ":hidden" ) ) {
       $(this).next().slideDown();
       $(this).find('.fa-arrow-down').addClass('rotation');
       $(this).find('.fa-arrow-down').removeClass('rotationBack');
    }
    else {
      $(this).next().slideUp();
      $(this).find('.fa-arrow-down').addClass('rotationBack');
      $(this).find('.fa-arrow-down').removeClass('rotation');
    }
  });

  $('.answer').click(function () {
    $(this).slideUp();
    $(this).find('.fa-arrow-down').addClass('rotationBack');
    $(this).find('.fa-arrow-down').removeClass('rotation');
  });

/* Scroll to element effect */

  var scrollToElement = function(el, ms){
    var speed = (ms) ? ms : 600;
    $('html,body').animate({
        scrollTop: $(el).offset().top
    }, speed);
  }

  $(".common-concerns-btn").click(function() {
  scrollToElement('#common-concerns', 600);
  });

  $(".how-to-lern-btn").click(function() {
  scrollToElement('#how-to-lern', 600);
  });


/* Highlight section */

  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
  });

});

// Navigation Scripts to Show Header on Scroll-Up
jQuery(document).ready(function($) {
  var MQL = 1170;

  //primary navigation slide-in effect
  if ($(window).width() > MQL) {
      var headerHeight = $('.navbar-custom').height();
      $(window).on('scroll', {
              previousTop: 0
          },
          function() {
              var currentTop = $(window).scrollTop();
              //check if user is scrolling up
              if (currentTop < this.previousTop) {
                  //if scrolling up...
                  if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
                      $('.navbar-custom').addClass('is-visible');
                  } else {
                      $('.navbar-custom').removeClass('is-visible is-fixed');
                  }
              } else {
                  //if scrolling down...
                  $('.navbar-custom').removeClass('is-visible');
                  if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
              }
              this.previousTop = currentTop;
          });
  }
});