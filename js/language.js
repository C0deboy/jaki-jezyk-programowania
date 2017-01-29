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

    $(".performanc-btn").click(function() {
    scrollToElement('#performanc', 600);
    });

    $(".money-btn").click(function() {
    scrollToElement('#money', 600);
    });

    /* Highlight section */

    $('body').scrollspy({
      target: '.navbar-fixed-top',
      offset: 51
    });
 });