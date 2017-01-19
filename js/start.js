$(function(){
var iter = 1;
var previousQuestionIter = new Array();
var clasa = '.que' + iter;

var web = new Array(18);
web[0] = {odpowiedz: 'odpA', nextQuestion: 2, actualQuestion: 1};
web[1] = {odpowiedz: 'odpA', nextQuestion: 3, actualQuestion: 2};
web[2] = {odpowiedz: 'odpC', nextQuestion: 5, actualQuestion: 2};
web[3] = {odpowiedz: 'odpB', nextQuestion: 12, actualQuestion: 1};
web[4] = {odpowiedz: 'odpC', nextQuestion: 5, actualQuestion: 12};
web[5] = {odpowiedz: 'odpD', nextQuestion: 14, actualQuestion: 1};
web[6] = {odpowiedz: 'odpB', nextQuestion: 5, actualQuestion: 14};
web[7] = {odpowiedz: 'odpA', nextQuestion: '/languages/javascript.html', actualQuestion: 5};
web[8] = {odpowiedz: 'odpB', nextQuestion: 6, actualQuestion: 5};
web[9] = {odpowiedz: 'odpA', nextQuestion: 16, actualQuestion: 6};
web[10] = {odpowiedz: 'odpA', nextQuestion: '/languages/c#.html', actualQuestion: 16};
web[11] = {odpowiedz: 'odpB', nextQuestion: '/languages/java.html', actualQuestion: 16};
web[12] = {odpowiedz: 'odpB', nextQuestion: 7, actualQuestion: 6};
web[13] = {odpowiedz: 'odpC', nextQuestion: '/languages/PHP.html', actualQuestion: 6};
web[14] = {odpowiedz: 'odpA', nextQuestion: 17, actualQuestion: 7};
web[15] = {odpowiedz: 'odpA', nextQuestion: '/languages/python.html', actualQuestion: 17};
web[16] = {odpowiedz: 'odpB', nextQuestion: '/languages/ruby.html', actualQuestion: 17};
web[17] = {odpowiedz: 'odpB', nextQuestion: '/languages/PHP.html', actualQuestion: 7};

var mobilki = new Array(9);
mobilki[0] = {odpowiedz: 'odpA', nextQuestion: 2, actualQuestion: 1};
mobilki[1] = {odpowiedz: 'odpD', nextQuestion: 8, actualQuestion: 2};
mobilki[2] = {odpowiedz: 'odpA', nextQuestion: 3, actualQuestion: 8};
mobilki[3] = {odpowiedz: 'odpB', nextQuestion: 13, actualQuestion: 12};
mobilki[4] = {odpowiedz: 'odpC', nextQuestion: 3, actualQuestion: 13};
mobilki[5] = {odpowiedz: 'odpC', nextQuestion: 3, actualQuestion: 14};
mobilki[6] = {odpowiedz: 'odpA', nextQuestion: '/languages/swift.html', actualQuestion: 3};
mobilki[7] = {odpowiedz: 'odpB', nextQuestion: '/languages/java.html', actualQuestion: 3};
mobilki[8] = {odpowiedz: 'odpC', nextQuestion: '/languages/c#.html', actualQuestion: 3};

var gry = new Array(7);
gry[0] = {odpowiedz: 'odpA', nextQuestion: 3, actualQuestion: 8};
gry[1] = {odpowiedz: 'odpB', nextQuestion: 9, actualQuestion: 8};
gry[2] = {odpowiedz: 'odpA', nextQuestion: '/languages/c#.html', actualQuestion: 9};
gry[3] = {odpowiedz: 'odpB', nextQuestion: '/languages/c++.html', actualQuestion: 9};
gry[4] = {odpowiedz: 'odpC', nextQuestion: 10, actualQuestion: 9};
gry[5] = {odpowiedz: 'odpA', nextQuestion: '/languages/c++.html', actualQuestion: 10};
gry[6] = {odpowiedz: 'odpB', nextQuestion: '/languages/c#.html', actualQuestion: 10};

var korpo = new Array(7);
korpo[0] = {odpowiedz: 'odpB', nextQuestion: 4, actualQuestion: 2};
korpo[1] = {odpowiedz: 'odpA', nextQuestion: '/languages/c#.html', actualQuestion: 4};
korpo[2] = {odpowiedz: 'odpB', nextQuestion: '/languages/swift.html', actualQuestion: 4};
korpo[3] = {odpowiedz: 'odpC', nextQuestion: 18, actualQuestion: 4};
korpo[4] = {odpowiedz: 'odpA', nextQuestion: '/languages/python.html', actualQuestion: 18};
korpo[5] = {odpowiedz: 'odpB', nextQuestion: '/languages/PHP.html', actualQuestion: 18};
korpo[6] = {odpowiedz: 'odpD', nextQuestion: '/languages/python.html', actualQuestion: 4};

var malaGra = new Array(6);
malaGra[0] = {odpowiedz: 'odpB', nextQuestion: 13, actualQuestion: 12};
malaGra[1] = {odpowiedz: 'odpA', nextQuestion: '/languages/javascript.html', actualQuestion: 13};
malaGra[2] = {odpowiedz: 'odpB', nextQuestion: 19, actualQuestion: 13};
malaGra[3] = {odpowiedz: 'odpA', nextQuestion: '/languages/python.html', actualQuestion: 19};
malaGra[4] = {odpowiedz: 'odpB', nextQuestion: '/languages/c#.html', actualQuestion: 19};
malaGra[5] = {odpowiedz: 'odpC', nextQuestion: 3, actualQuestion: 13};

var oprogramowanie = new Array(5);
oprogramowanie[0] = {odpowiedz: 'odpE', nextQuestion: 11, actualQuestion: 2};
oprogramowanie[1] = {odpowiedz: 'odpA', nextQuestion: '/languages/swift.html', actualQuestion: 11};
oprogramowanie[2] = {odpowiedz: 'odpB', nextQuestion: '/languages/c#.html', actualQuestion: 11};
oprogramowanie[3] = {odpowiedz: 'odpC', nextQuestion: '/languages/java.html', actualQuestion: 11};
oprogramowanie[4] = {odpowiedz: 'odpD', nextQuestion: '/languages/c.html', actualQuestion: 11};

var skryptowanie = new Array(5);
skryptowanie[0] = {odpowiedz: 'odpD', nextQuestion: 20, actualQuestion: 14};
skryptowanie[1] = {odpowiedz: 'odpA', nextQuestion: '/languages/python.html', actualQuestion: 20};
skryptowanie[2] = {odpowiedz: 'odpB', nextQuestion: '/languages/powershell.html', actualQuestion: 20};
skryptowanie[3] = {odpowiedz: 'odpC', nextQuestion: '/languages/bash.html', actualQuestion: 20};
skryptowanie[4] = {odpowiedz: 'odpD', nextQuestion: '/languages/ruby.html', actualQuestion: 20};

var analizowanieDanych = new Array(3);
analizowanieDanych[0] = {odpowiedz: 'odpA', nextQuestion: 15, actualQuestion: 14};
analizowanieDanych[1] = {odpowiedz: 'odpA', nextQuestion: '/languages/r.html', actualQuestion: 15};
analizowanieDanych[2] = {odpowiedz: 'odpB', nextQuestion: '/languages/python.html', actualQuestion: 15};

var zautomatyzowanie = new Array(3);
zautomatyzowanie[0] = {odpowiedz: 'odpD', nextQuestion: 17, actualQuestion: 12};
zautomatyzowanie[1] = {odpowiedz: 'odpC', nextQuestion: '/languages/python.html', actualQuestion: 17};
zautomatyzowanie[2] = {odpowiedz: 'odpC', nextQuestion: '/languages/ruby.html', actualQuestion: 17};

var tworzenieOs = new Array(2);
tworzenieOs[0] = {odpowiedz: 'odpD', nextQuestion: 14, actualQuestion: 1};
tworzenieOs[1] = {odpowiedz: 'odpE', nextQuestion: '/languages/c.html', actualQuestion: 14};

var uczenieMaszynowe = {odpowiedz: 'odpA', nextQuestion: '/languages/python.html', actualQuestion: 12};

var orogramowanieNiskoPoziom = {odpowiedz: 'odpE', nextQuestion: '/languages/c.html', actualQuestion: 12};

var dlaDzieci = {odpowiedz: 'odpC', nextQuestion: '/languages/scratch.html', actualQuestion: 1};


  $('.ans').click(function() {
    if($(clasa).hasClass( 'slide_in' )) $( clasa ).removeClass( 'slide_in' );
    if($(this).hasClass( 'slide_out' )) $( this ).removeClass( 'slide_out' );
    if($(clasa).find(".ans").hasClass( 'slide_up' )) $(clasa).find(".ans").removeClass( 'slide_up' );

    $( this ).addClass( 'slide_out' );
    $( clasa ).fadeOut( "slow" );
    if (iter==1) {
      $('.back').css("visibility", "visible");
    }
    previousQuestionIter.push(iter);
    var id = $(this).attr('id');


    for(var i=0; i<18; i++) {
      if(web[i].actualQuestion == iter) {
        if(web[i].odpowiedz == id) {
          if(isNaN(web[i].nextQuestion)) window.location.href = web[i].nextQuestion;
          iter = web[i].nextQuestion;
          console.log(iter);
          break;
        }
      }
    }

    for(var i=0; i<9; i++) {
      if(previousQuestionIter[previousQuestionIter.length - 1] != iter) break;
      if(mobilki[i].actualQuestion == iter) {
        if(mobilki[i].odpowiedz == id) {
          if(isNaN(mobilki[i].nextQuestion)) window.location.href = mobilki[i].nextQuestion;
          iter = mobilki[i].nextQuestion;
          console.log(iter);
        }
      }
    }

    for(var i=0; i<7; i++) {
      if(previousQuestionIter[previousQuestionIter.length - 1] != iter) break;
      if(gry[i].actualQuestion == iter) {
        if(gry[i].odpowiedz == id) {
          if(isNaN(gry[i].nextQuestion)) window.location.href = gry[i].nextQuestion;
          iter = gry[i].nextQuestion;
          console.log(iter);
        }
      }
      if(korpo[i].actualQuestion == iter) {
        if(korpo[i].odpowiedz == id) {
          if(isNaN(korpo[i].nextQuestion)) window.location.href = korpo[i].nextQuestion;
          iter = korpo[i].nextQuestion;
          console.log(iter);
        }
      }
    }

    for(var i=0; i<6; i++) {
      if(previousQuestionIter[previousQuestionIter.length - 1] != iter) break;
      if(malaGra[i].actualQuestion == iter) {
        if(malaGra[i].odpowiedz == id) {
          if(isNaN(malaGra[i].nextQuestion)) window.location.href = malaGra[i].nextQuestion;
          iter = malaGra[i].nextQuestion;
          console.log(iter);
        }
      }
    }

    for(var i=0; i<5; i++) {
      if(previousQuestionIter[previousQuestionIter.length - 1] != iter) break;
      if(oprogramowanie[i].actualQuestion == iter) {
        if(oprogramowanie[i].odpowiedz == id) {
          if(isNaN(oprogramowanie[i].nextQuestion)) window.location.href = oprogramowanie[i].nextQuestion;
          iter = oprogramowanie[i].nextQuestion;
          console.log(iter);
        }
      }
      if(skryptowanie[i].actualQuestion == iter) {
        if(skryptowanie[i].odpowiedz == id) {
          if(isNaN(skryptowanie[i].nextQuestion)) window.location.href = skryptowanie[i].nextQuestion;
          iter = skryptowanie[i].nextQuestion;
          console.log(iter);
        }
      }
    }

    for(var i=0; i<3; i++) {
      if(previousQuestionIter[previousQuestionIter.length - 1] != iter) break;
      if(analizowanieDanych[i].actualQuestion == iter) {
        if(analizowanieDanych[i].odpowiedz == id) {
          if(isNaN(analizowanieDanych[i].nextQuestion)) window.location.href = analizowanieDanych[i].nextQuestion;
          iter = analizowanieDanych[i].nextQuestion;
          console.log(iter);
        }
      }
      if(zautomatyzowanie[i].actualQuestion == iter) {
        if(zautomatyzowanie[i].odpowiedz == id) {
          if(isNaN(zautomatyzowanie[i].nextQuestion)) window.location.href = zautomatyzowanie[i].nextQuestion;
          iter = zautomatyzowanie[i].nextQuestion;
          console.log(iter);
        }
      }
    }

    for(var i=0; i<2; i++) {
      if(previousQuestionIter[previousQuestionIter.length - 1] != iter) break;
      if(tworzenieOs[i].actualQuestion == iter) {
        if(tworzenieOs[i].odpowiedz == id) {
          if(isNaN(tworzenieOs[i].nextQuestion)) window.location.href = tworzenieOs[i].nextQuestion;
          iter = tworzenieOs[i].nextQuestion;
          console.log(iter);
        }
      }
    }

    if(previousQuestionIter[previousQuestionIter.length - 1] == iter) {
      if(uczenieMaszynowe.actualQuestion == iter) {
        if(uczenieMaszynowe.odpowiedz == id) {
          window.location.href = uczenieMaszynowe.nextQuestion;
        }
      }
    }

    if(previousQuestionIter[previousQuestionIter.length - 1] == iter) {
      if(orogramowanieNiskoPoziom.actualQuestion == iter) {
        if(orogramowanieNiskoPoziom.odpowiedz == id) {
          window.location.href = orogramowanieNiskoPoziom.nextQuestion;
        }
      }
    }



    if(previousQuestionIter[previousQuestionIter.length - 1] == iter) {
      if(dlaDzieci.actualQuestion == iter) {
        if(dlaDzieci.odpowiedz == id) {
          window.location.href = dlaDzieci.nextQuestion;
        }
      }
    }

    clasa = '.que' + iter;
    window.setTimeout(function(){$(clasa).fadeIn( "slow" );$(clasa).find(".ans").show().addClass('slide_up');}, 1000);
    if($(clasa).hasClass( 'slide_in' )) $( clasa ).removeClass( 'slide_in' );

  });

  $('.back').click(function() {
    if($('.ans').hasClass( 'slide_out' )) $( '.ans' ).removeClass( 'slide_out' );
    if($(clasa).find(".ans").hasClass( 'slide_up' )) $(clasa).find(".ans").removeClass( 'slide_up' );

    $( clasa ).fadeOut( "slow" );
    clasa = '.que' + previousQuestionIter[previousQuestionIter.length - 1];
    iter = previousQuestionIter[previousQuestionIter.length - 1];
    previousQuestionIter.pop();
    window.setTimeout(function(){$( clasa ).show().addClass( 'slide_in' );}, 1000);
    if(iter==1) {
      $('.back').css("visibility", "hidden");
    }
  });

})
