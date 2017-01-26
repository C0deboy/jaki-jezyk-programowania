$(function(){
window.onunload = function(){};
var queNumber = 1;
var previousQueNumber = new Array();
var queClass = '.que' + queNumber;
var lolxd = false;

var web = new Array(11);
web[0] = {answer: 'odpA', nextQuestion: 2, actualQuestion: 1};
web[1] = {answer: 'odpA', nextQuestion: 3, actualQuestion: 2};
web[2] = {answer: 'odpC', nextQuestion: 5, actualQuestion: 2};
web[3] = {answer: 'odpB', nextQuestion: 12, actualQuestion: 1};
web[4] = {answer: 'odpC', nextQuestion: 5, actualQuestion: 12};
web[5] = {answer: 'odpD', nextQuestion: 14, actualQuestion: 1};
web[6] = {answer: 'odpB', nextQuestion: 5, actualQuestion: 14};
web[7] = {answer: 'odpB', nextQuestion: 6, actualQuestion: 5};
web[8] = {answer: 'odpA', nextQuestion: 16, actualQuestion: 6};
web[9] = {answer: 'odpB', nextQuestion: 7, actualQuestion: 6};
web[10] = {answer: 'odpA', nextQuestion: 17, actualQuestion: 7};

var mobile = new Array(6);
mobile[0] = {answer: 'odpA', nextQuestion: 2, actualQuestion: 1};
mobile[1] = {answer: 'odpD', nextQuestion: 8, actualQuestion: 2};
mobile[2] = {answer: 'odpA', nextQuestion: 3, actualQuestion: 8};
mobile[3] = {answer: 'odpB', nextQuestion: 13, actualQuestion: 12};
mobile[4] = {answer: 'odpC', nextQuestion: 3, actualQuestion: 13};
mobile[5] = {answer: 'odpC', nextQuestion: 3, actualQuestion: 14};

var games = new Array(3);
games[0] = {answer: 'odpA', nextQuestion: 3, actualQuestion: 8};
games[1] = {answer: 'odpB', nextQuestion: 9, actualQuestion: 8};
games[2] = {answer: 'odpC', nextQuestion: 10, actualQuestion: 9};

var corp = new Array(2);
corp[0] = {answer: 'odpB', nextQuestion: 4, actualQuestion: 2};
corp[1] = {answer: 'odpC', nextQuestion: 18, actualQuestion: 4};

var smallGame = new Array(3);
smallGame[0] = {answer: 'odpB', nextQuestion: 13, actualQuestion: 12};
smallGame[1] = {answer: 'odpB', nextQuestion: 19, actualQuestion: 13};
smallGame[2] = {answer: 'odpC', nextQuestion: 3, actualQuestion: 13};

var software = {answer: 'odpE', nextQuestion: 11, actualQuestion: 2};

var scripting = {answer: 'odpD', nextQuestion: 20, actualQuestion: 14};

var dataAnalysis = {answer: 'odpA', nextQuestion: 15, actualQuestion: 14};

var automation = {answer: 'odpD', nextQuestion: 17, actualQuestion: 12};

var creatingOS = {answer: 'odpD', nextQuestion: 14, actualQuestion: 1};

var lowLevel = {answer: 'odpE', nextQuestion: 21, actualQuestion: 12};




  $('.ans img, .ans p').click(function() {
    if($(queClass).hasClass( 'slide_in' )) $( queClass ).removeClass( 'slide_in' );
    if($(this).parent('.ans').hasClass( 'slide_out' )) $( this ).parent('.ans').removeClass( 'slide_out' );
    if($(queClass).find(".ans").hasClass( 'slide_up' )) $(queClass).find(".ans").removeClass( 'slide_up' );
    if($(this).parent().parent().attr("target")) return 0;
    $( this ).parent('.ans').addClass( 'slide_out' );
    $( queClass ).fadeOut( "slow" );


    if (queNumber==1) {
      $('.back').css("visibility", "visible");
    }
    previousQueNumber.push(queNumber);
    var id = $(this).parent('.ans').attr('id');

    for(var i=0; i<web.length; i++) {
      if(web[i].actualQuestion == queNumber) {
        if(web[i].answer == id) {
          queNumber = web[i].nextQuestion;
          break;
        }
      }
    }

    for(var i=0; i<mobile.length; i++) {
      if(previousQueNumber[previousQueNumber.length - 1] != queNumber) break;
      if(mobile[i].actualQuestion == queNumber) {
        if(mobile[i].answer == id) {
          queNumber = mobile[i].nextQuestion;
        }
      }
    }

    for(var i=0; i<games.length; i++) {
      if(previousQueNumber[previousQueNumber.length - 1] != queNumber) break;
      if(games[i].actualQuestion == queNumber) {
        if(games[i].answer == id) {
          queNumber = games[i].nextQuestion;
        }
      }
    }

    for(var i=0; i<corp.length; i++) {
      if(previousQueNumber[previousQueNumber.length - 1] != queNumber) break;
      if(corp[i].actualQuestion == queNumber) {
        if(corp[i].answer == id) {
          queNumber = corp[i].nextQuestion;
        }
      }
    }

    for(var i=0; i<smallGame.length; i++) {
      if(previousQueNumber[previousQueNumber.length - 1] != queNumber) break;
      if(smallGame[i].actualQuestion == queNumber) {
        if(smallGame[i].answer == id) {
          queNumber = smallGame[i].nextQuestion;
        }
      }
    }


  if(previousQueNumber[previousQueNumber.length - 1] == queNumber) {
      if(software.actualQuestion == queNumber) {
        if(software.answer == id) {
          queNumber = software.nextQuestion;
        }
      }
    }


  if(previousQueNumber[previousQueNumber.length - 1] == queNumber) {
      if(scripting.actualQuestion == queNumber) {
        if(scripting.answer == id) {
          queNumber = scripting.nextQuestion;
        }
      }
    }

  if(previousQueNumber[previousQueNumber.length - 1] == queNumber) {
      if(dataAnalysis.actualQuestion == queNumber) {
        if(dataAnalysis.answer == id) {
          queNumber = dataAnalysis.nextQuestion;
        }
      }
    }

  if(previousQueNumber[previousQueNumber.length - 1] == queNumber) {
      if(automation.actualQuestion == queNumber) {
        if(automation.answer == id) {
          queNumber = automation.nextQuestion;
        }
      }
    }

  if(previousQueNumber[previousQueNumber.length - 1] == queNumber) {
      if(creatingOS.actualQuestion == queNumber) {
        if(creatingOS.answer == id) {
          queNumber = creatingOS.nextQuestion;
        }
      }
    }
  if(previousQueNumber[previousQueNumber.length - 1] == queNumber) {
      if(lowLevel.actualQuestion == queNumber) {
        if(lowLevel.answer == id) {
          queNumber = lowLevel.nextQuestion;
        }
      }
    }

    queClass = '.que' + queNumber;
    window.setTimeout(function(){$(queClass).fadeIn( "slow" );$(queClass).find(".ans").show().addClass('slide_up');}, 1000);
    if($(queClass).hasClass( 'slide_in' )) $( queClass ).removeClass( 'slide_in' );

  });

  $('.back').click(function() {
    if($('.ans').hasClass( 'slide_out' )) $( '.ans' ).removeClass( 'slide_out' );
    if($(queClass).find(".ans").hasClass( 'slide_up' )) $(queClass).find(".ans").removeClass( 'slide_up' );

    $( queClass ).fadeOut( "slow" );
    queClass = '.que' + previousQueNumber[previousQueNumber.length - 1];
    queNumber = previousQueNumber[previousQueNumber.length - 1];
    previousQueNumber.pop();
    window.setTimeout(function(){$( queClass ).show().addClass( 'slide_in' );}, 1000);
    if(queNumber==1) {
      $('.back').css("visibility", "hidden");
    }
  });

  $('.ans img, .ans p').hover(
  function() {
    $(this).parent('.ans').children('img').addClass('jumpImg');
    $(this).parent('.ans').children('p').css('background-color', '#4488f4');
    $(this).parent('.ans').children('.shade').addClass('shadeImg');
  }, function() {
    $(this).parent('.ans').children('img').removeClass('jumpImg');
    $(this).parent('.ans').children('p').css('background-color', '#337ab7');
    $(this).parent('.ans').children('.shade').removeClass('shadeImg');
  }
);

})
