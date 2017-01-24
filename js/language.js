
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
