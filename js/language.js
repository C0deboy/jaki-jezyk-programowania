$(function(){
  var selected_section;
  $('.about-lang-menu').click(function () {
    $('#content').css('display: none;')
    $(selected_section).slideUp();
    selected_section = '.about-language';
    $('.about-language').slideToggle();
  });


  $('.complication-lang-menu').click(function () {
    $(selected_section).slideUp();
    $('.complication-language').slideToggle();
    selected_section = '.complication-language';

  });

  $('.syntax-lang-menu').click(function () {
    $(selected_section).slideUp();
    $('.syntax-language').slideToggle();
    selected_section = '.syntax-language'
  });

  $('.examples-lang-menu').click(function () {
    $(selected_section).slideUp();
    $('.examples-language').slideToggle();
    selected_section = '.examples-language';
  });

  $('.money-lang-menu').click(function () {
    $(selected_section).slideUp();
    $('.money-language').slideToggle();
    selected_section = '.money-language';
  });

  $('.summary-lang-menu').click(function () {
    $(selected_section).slideUp();
    $('.summary-language').slideToggle();
    selected_section = '.summary-language';
  });
});
