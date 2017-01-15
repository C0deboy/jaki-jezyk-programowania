$(function(){
  //**Charts**//

  var chartGradeCounter = 0;

  function chart(grade, color, divToPutInClass) {
    if (!$(divToPutInClass).length){return 0;}
    var chartGradeClass;
    for (var i=1; i<=grade; i++) {
      chartGradeClass = '.chart-grade:eq(' + chartGradeCounter + ')';
      chartGradeCounter++;
      //if(i==grade) window.setTimeout(function(){$(divToPutInClass).append('<p>'+grade+'</p>');},chartGradeCounter*210);
      addGradeDiv(chartGradeClass, color, divToPutInClass, chartGradeCounter, grade, i);
      color = shadeColor(color, 0.15);
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

  chart(6, '#c48f00', '.chart1_pyt');
  chart(5, '#a01800', '.chart2_pyt');
  chart(4, '#219e2d', '.chart3_pyt');
  chart(1, '#3399ff', '.chart4_pyt');
  chart(2, '#631362', '.chart5_pyt');
  chart(3, '#8e830c', '.chart6_pyt');

});
