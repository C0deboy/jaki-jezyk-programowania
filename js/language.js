$(function(){
  var selected_section = '.examples-language';
  $('.examples-lang-menu').click(function () {
    if ($('.examples-language').is( ":hidden" ) ) {
      $('#content').css('display: none;')
      $(selected_section).slideUp();
      selected_section = '.examples-language';
      $('.examples-language').slideDown();
      $('.lang-menu-option').css('background-color','#3B94C4');
      $(this).css({'background-color':'#005B8C', 'border-bottom':'solid 1px #005b8c'});
    }
    else {
      $('.examples-language').slideUp();
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

  $('.scalability-lang-menu').click(function () {
    if ($('.scalability-language').is( ":hidden" ) ) {
      $(selected_section).slideUp();
      $('.scalability-language').slideDown();
      $('.lang-menu-option').css('background-color','#3B94C4');
      selected_section = '.scalability-language';
      $(this).css({'background-color':'#005B8C', 'border-bottom':'solid 1px #005b8c'});
    }
    else {
      $('.scalability-language').slideUp();
    }
  });

  $('.community-lang-menu').click(function () {
    if ($('.community-language').is( ":hidden" ) ) {
      $(selected_section).slideUp();
      $('.community-language').slideDown();
      selected_section = '.community-language';
      $('.lang-menu-option').css('background-color','#3B94C4');
      $(this).css({'background-color':'#005B8C', 'border-bottom':'solid 1px #005b8c'});
    }
    else {
      $('.community-language').slideUp();
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

  $('.future-lang-menu').click(function () {
    if ($('.future-language').is( ":hidden" ) ) {
      $(selected_section).slideUp();
      $('.future-language').slideDown();
      selected_section = '.future-language';
      $('.lang-menu-option').css('background-color','#3B94C4');
      $(this).css({'background-color':'#005B8C', 'border-bottom':'solid 1px #005b8c'});
    }
    else {
      $('.future-language').slideUp();
    }
  });

  //**Charts**//
  function chart(grade, color) {
    var chartGradeClass;
    for (var i=0; i<grade; i++) {
      chartGradeClass = '.chart-grade:eq(' + i + ')'; 
      color = shadeColor(color, 0.1);
      addGradeDiv(chartGradeClass, color, i);
    }


  }
  chart(6, '#0000ff');

  function shadeColor(color, percent) {
    var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
  }
  function addGradeDiv(klasa, color, i) {
    window.setTimeout(function(){$(".chart").append("<div class='chart-grade'></div>");$( klasa ).css( "background-color", color );}, i * 200);
  }
  
});
