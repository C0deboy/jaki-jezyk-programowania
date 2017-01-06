$(function(){
  var selected_section = '.about-language';
  $('.about-lang-menu').click(function () {
    if ($('.about-language').is( ":hidden" ) ) {
      $('#content').css('display: none;')
      $(selected_section).slideUp();
      selected_section = '.about-language';
      $('.about-language').slideDown();
    }
    else {
      $('.about-language').slideUp();
    }
  });


  $('.complication-lang-menu').click(function () {
    if ($('.complication-language').is( ":hidden" ) ) {
      $(selected_section).slideUp();
      $('.complication-language').slideDown();
      selected_section = '.complication-language';
    }
    else {
      $('.complication-language').slideUp();
    }

  });

  $('.syntax-lang-menu').click(function () {
    if ($('.syntax-language').is( ":hidden" ) ) {
      $(selected_section).slideUp();
      $('.syntax-language').slideDown();
      selected_section = '.syntax-language';
    }
    else {
      $('.syntax-language').slideUp();
    }
  });

  $('.examples-lang-menu').click(function () {
    if ($('.examples-language').is( ":hidden" ) ) {
      $(selected_section).slideUp();
      $('.examples-language').slideDown();
      selected_section = '.examples-language';
    }
    else {
      $('.examples-language').slideUp();
    }
  });

  $('.money-lang-menu').click(function () {
    if ($('.money-language').is( ":hidden" ) ) {
      $(selected_section).slideUp();
      $('.money-language').slideDown();
      selected_section = '.money-language';
    }
    else {
      $('.money-language').slideUp();
    }
  });

  $('.summary-lang-menu').click(function () {
    if ($('.summary-language').is( ":hidden" ) ) {
      $(selected_section).slideUp();
      $('.summary-language').slideDown();
      selected_section = '.summary-language';
    }
    else {
      $('.summary-language').slideUp();
    }
  });
});
