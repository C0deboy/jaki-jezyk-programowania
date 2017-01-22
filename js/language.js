$(function(){
  window.addEventListener("resize", function(){$('.language-logo').height($('.language-logo').width());});
  $('.language-logo').height($('.language-logo').width());

  //**Charts**//

  var chartGradeCounter = 0;

  function chart(grade, color, divToPutInClass) {
    if (!$(divToPutInClass).length){return 0;}
    var chartGradeClass;
    for (var i=1; i<=grade; i++) {
      chartGradeClass = '.chart-grade:eq(' + chartGradeCounter + ')';
      chartGradeCounter++;
      addGradeDiv(chartGradeClass, color, divToPutInClass, chartGradeCounter, grade, i);
      color = shadeColor(color, 0.08);
    }

  }


  function shadeColor(color, percent) {
    var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
  }

  function addGradeDiv(klasa, color, divToPutInClass, chartGradeCounter, grade, i) {
    if(i==grade) {
    window.setTimeout(function(){$(divToPutInClass).append("<div class='chart-grade chart-text'>" + grade + "</div>");$( klasa ).css( "background-color", color );}, chartGradeCounter * 100);

    }
    else {
    window.setTimeout(function(){$(divToPutInClass).append("<div class='chart-grade'></div>");$( klasa ).css( "background-color", color );},  chartGradeCounter * 100);
    }
  }

  /* Charts colors */
  var dificultyColor = "#ad0101";
  var performanceColor = "#28A630";
  var popularityColor = "#e0e000";
  var strengthColor = "#c96800";
  var careerColor = "#0160ad";
  var futureColor = "#890082";
  
  /* Java charts */
  chart(3, dificultyColor, '.difficulty-java');
  chart(5, performanceColor, '.performance-java');
  chart(6, popularityColor, '.popularity-java');
  chart(5, strengthColor, '.strength-java');
  chart(6, careerColor, '.career-java');
  chart(6, futureColor, '.future-java');

  /* c++ charts */
  chart(6, dificultyColor, '.difficulty-cpp');
  chart(6, performanceColor, '.performance-cpp');
  chart(4, popularityColor, '.popularity-cpp');
  chart(5, strengthColor, '.strength-cpp');
  chart(4, careerColor, '.career-cpp');
  chart(5, futureColor, '.future-cpp');

  /* JavaScript charts */
  chart(2, dificultyColor, '.difficulty-javascript');
  chart(4, performanceColor, '.performance-javascript');
  chart(6, popularityColor, '.popularity-javascript');
  chart(5, strengthColor, '.strength-javascript');
  chart(6, careerColor, '.career-javascript');
  chart(6, futureColor, '.future-javascript');

  /* PHP charts */
  chart(3, dificultyColor, '.difficulty-php');
  chart(5, performanceColor, '.performance-php');
  chart(6, popularityColor, '.popularity-php');
  chart(5, strengthColor, '.strength-php');
  chart(6, careerColor, '.career-php');
  chart(6, futureColor, '.future-php');

  /* Python charts */
  chart(1, dificultyColor, '.difficulty-python');
  chart(4, performanceColor, '.performance-python');
  chart(6, popularityColor, '.popularity-python');
  chart(5, strengthColor, '.strength-python');
  chart(5, careerColor, '.career-python');
  chart(5, futureColor, '.future-python');

  /* C charts */
  chart(3, dificultyColor, '.difficulty-c');
  chart(6, performanceColor, '.performance-c');
  chart(6, popularityColor, '.popularity-c');
  chart(5, strengthColor, '.strength-c');
  chart(5, careerColor, '.career-c');
  chart(5, futureColor, '.future-c');

  /* Ruby charts */
  chart(1, dificultyColor, '.difficulty-ruby');
  chart(3, performanceColor, '.performance-ruby');
  chart(6, popularityColor, '.popularity-ruby');
  chart(5, strengthColor, '.strength-ruby');
  chart(6, careerColor, '.career-ruby');
  chart(5, futureColor, '.future-ruby');

  /* R charts */
  chart(5, dificultyColor, '.difficulty-r');
  chart(2, performanceColor, '.performance-r');
  chart(4, popularityColor, '.popularity-r');
  chart(1, strengthColor, '.strength-r');
  chart(5, careerColor, '.career-r');
  chart(5, futureColor, '.future-r');

  /* Swift charts */
  chart(1, dificultyColor, '.difficulty-swift');
  chart(5, performanceColor, '.performance-swift');
  chart(4, popularityColor, '.popularity-swift');
  chart(3, strengthColor, '.strength-swift');
  chart(4, careerColor, '.career-swift');
  chart(6, futureColor, '.future-swift');

});
