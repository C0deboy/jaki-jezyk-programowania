
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
  console.log("ldgsoakfdas")
  });

  $(".how-to-lern-btn").click(function() {
  scrollToElement('#how-to-lern', 600);
  });

  $(".program-languages-btn").click(function() {
  scrollToElement('#program-languages', 600);
  });

  $(".about-project-btn").click(function() {
  scrollToElement('#about-project', 600);
  });
});