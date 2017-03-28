$(function(){

  window.addEventListener("resize", function(){$('.language-logo').height($('.language-logo').width());});
  $('.language-logo').height($('.language-logo').width());

	/* Scroll to element effect */

  var scrollToElement = function(el, ms){
    var speed = (ms) ? ms : 600;
    $('html,body').animate({
        scrollTop: $(el).offset().top
    }, speed);
  }

  $(".use-btn").click(function() {
  scrollToElement('#use', 600);
  });

  $(".difficulty-btn").click(function() {
  scrollToElement('#difficulty', 600);
  });

  $(".popularity-btn").click(function() {
  scrollToElement('#popularity', 600);
  });

  /* Highlight section */

  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
  });

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
});