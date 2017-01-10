$(function(){
  var selected_section = '.about-language';
  $('.about-lang-menu').click(function () {
    if ($('.about-language').is( ":hidden" ) ) {
      $('#content').css('display: none;')
      $(selected_section).slideUp();
      selected_section = '.about-language';
      $('.about-language').slideDown();
      $('.lang-menu-option').css('background-color','#3B94C4');
      $(this).css({'background-color':'#005B8C', 'border-bottom':'solid 1px #005b8c'});
    }
    else {
      $('.about-language').slideUp();
    }
  });


  $('.complication-lang-menu').click(function () {
    if ($('.complication-language').is( ":hidden" ) ) {
      $(selected_section).slideUp();
      $('.complication-language').slideDown();
      $('.lang-menu-option').css('background-color','#3B94C4');
      selected_section = '.complication-language';
      $(this).css({'background-color':'#005B8C', 'border-bottom':'solid 1px #005b8c'});
    }
    else {
      $('.complication-language').slideUp();
    }

  });

  $('.syntax-lang-menu').click(function () {
    if ($('.syntax-language').is( ":hidden" ) ) {
      $(selected_section).slideUp();
      $('.syntax-language').slideDown();
      $('.lang-menu-option').css('background-color','#3B94C4');
      selected_section = '.syntax-language';
      $(this).css({'background-color':'#005B8C', 'border-bottom':'solid 1px #005b8c'});
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
      $('.lang-menu-option').css('background-color','#3B94C4');
      $(this).css({'background-color':'#005B8C', 'border-bottom':'solid 1px #005b8c'});
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
      $('.lang-menu-option').css('background-color','#3B94C4');
      $(this).css({'background-color':'#005B8C', 'border-bottom':'solid 1px #005b8c'});
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
      $('.lang-menu-option').css('background-color','#3B94C4');
      $(this).css({'background-color':'#005B8C', 'border-bottom':'solid 1px #005b8c'});
    }
    else {
      $('.summary-language').slideUp();
    }
  });

  function chart(iter, color, i) {
    var klasa;
    var lolxd = 0;

    for (var i=0; i<iter; i++) {
    klasa = '.chart_square:eq(' + i + ')';

    adddiv(klasa, color, i)
    lolxd = lolxd + 1000;
    console.log(color)
    color = shadeColor2(color, 0.1);

    }


  }
  chart(6, '#0000ff');

  function shadeColor2(color, percent) {
      var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
      return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
  }
  function adddiv(klasa1, color1, i) {
    window.setTimeout(function(){$(".chart").append("<div class='chart_square'></div>");$( klasa1 ).css( "background-color", color1 );}, i * 200);

  }
  
});
