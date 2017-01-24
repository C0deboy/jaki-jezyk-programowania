$(function(){
window.onunload = function(){};
var queNumber = 1;
var previousQueNumber = new Array();
var queClass = '.que' + queNumber;

var web = new Array(18);
web[0] = {answer: 'odpA', nextQuestion: 2, actualQuestion: 1};
web[1] = {answer: 'odpA', nextQuestion: 3, actualQuestion: 2};
web[2] = {answer: 'odpC', nextQuestion: 5, actualQuestion: 2};
web[3] = {answer: 'odpB', nextQuestion: 12, actualQuestion: 1};
web[4] = {answer: 'odpC', nextQuestion: 5, actualQuestion: 12};
web[5] = {answer: 'odpD', nextQuestion: 14, actualQuestion: 1};
web[6] = {answer: 'odpB', nextQuestion: 5, actualQuestion: 14};
web[7] = {answer: 'odpA', nextQuestion: '/languages/javascript.html', actualQuestion: 5};
web[8] = {answer: 'odpB', nextQuestion: 6, actualQuestion: 5};
web[9] = {answer: 'odpA', nextQuestion: 16, actualQuestion: 6};
web[10] = {answer: 'odpA', nextQuestion: '/languages/c#.html', actualQuestion: 16};
web[11] = {answer: 'odpB', nextQuestion: '/languages/java.html', actualQuestion: 16};
web[12] = {answer: 'odpB', nextQuestion: 7, actualQuestion: 6};
web[13] = {answer: 'odpC', nextQuestion: '/languages/PHP.html', actualQuestion: 6};
web[14] = {answer: 'odpA', nextQuestion: 17, actualQuestion: 7};
web[15] = {answer: 'odpA', nextQuestion: '/languages/python.html', actualQuestion: 17};
web[16] = {answer: 'odpB', nextQuestion: '/languages/ruby.html', actualQuestion: 17};
web[17] = {answer: 'odpB', nextQuestion: '/languages/PHP.html', actualQuestion: 7};

var mobile = new Array(9);
mobile[0] = {answer: 'odpA', nextQuestion: 2, actualQuestion: 1};
mobile[1] = {answer: 'odpD', nextQuestion: 8, actualQuestion: 2};
mobile[2] = {answer: 'odpA', nextQuestion: 3, actualQuestion: 8};
mobile[3] = {answer: 'odpB', nextQuestion: 13, actualQuestion: 12};
mobile[4] = {answer: 'odpC', nextQuestion: 3, actualQuestion: 13};
mobile[5] = {answer: 'odpC', nextQuestion: 3, actualQuestion: 14};
mobile[6] = {answer: 'odpA', nextQuestion: '/languages/swift.html', actualQuestion: 3};
mobile[7] = {answer: 'odpB', nextQuestion: '/languages/java.html', actualQuestion: 3};
mobile[8] = {answer: 'odpC', nextQuestion: '/languages/c#.html', actualQuestion: 3};

var games = new Array(7);
games[0] = {answer: 'odpA', nextQuestion: 3, actualQuestion: 8};
games[1] = {answer: 'odpB', nextQuestion: 9, actualQuestion: 8};
games[2] = {answer: 'odpA', nextQuestion: '/languages/c#.html', actualQuestion: 9};
games[3] = {answer: 'odpB', nextQuestion: '/languages/c++.html', actualQuestion: 9};
games[4] = {answer: 'odpC', nextQuestion: 10, actualQuestion: 9};
games[5] = {answer: 'odpA', nextQuestion: '/languages/c#.html', actualQuestion: 10};
games[6] = {answer: 'odpB', nextQuestion: '/languages/c++.html', actualQuestion: 10};

var corp = new Array(7);
corp[0] = {answer: 'odpB', nextQuestion: 4, actualQuestion: 2};
corp[1] = {answer: 'odpA', nextQuestion: '/languages/c#.html', actualQuestion: 4};
corp[2] = {answer: 'odpB', nextQuestion: '/languages/swift.html', actualQuestion: 4};
corp[3] = {answer: 'odpC', nextQuestion: 18, actualQuestion: 4};
corp[4] = {answer: 'odpA', nextQuestion: '/languages/python.html', actualQuestion: 18};
corp[5] = {answer: 'odpB', nextQuestion: '/languages/PHP.html', actualQuestion: 18};
corp[6] = {answer: 'odpD', nextQuestion: '/languages/python.html', actualQuestion: 4};

var smallGame = new Array(6);
smallGame[0] = {answer: 'odpB', nextQuestion: 13, actualQuestion: 12};
smallGame[1] = {answer: 'odpA', nextQuestion: '/languages/javascript.html', actualQuestion: 13};
smallGame[2] = {answer: 'odpB', nextQuestion: 19, actualQuestion: 13};
smallGame[3] = {answer: 'odpA', nextQuestion: '/languages/python.html', actualQuestion: 19};
smallGame[4] = {answer: 'odpB', nextQuestion: '/languages/c#.html', actualQuestion: 19};
smallGame[5] = {answer: 'odpC', nextQuestion: 3, actualQuestion: 13};

var software = new Array(5);
software[0] = {answer: 'odpE', nextQuestion: 11, actualQuestion: 2};
software[1] = {answer: 'odpA', nextQuestion: '/languages/swift.html', actualQuestion: 11};
software[2] = {answer: 'odpB', nextQuestion: '/languages/c#.html', actualQuestion: 11};
software[3] = {answer: 'odpC', nextQuestion: '/languages/java.html', actualQuestion: 11};
software[4] = {answer: 'odpD', nextQuestion: '/languages/c.html', actualQuestion: 11};

var scripting = new Array(5);
scripting[0] = {answer: 'odpD', nextQuestion: 20, actualQuestion: 14};
scripting[1] = {answer: 'odpA', nextQuestion: '/languages/python.html', actualQuestion: 20};
scripting[2] = {answer: 'odpB', nextQuestion: '/languages/powershell.html', actualQuestion: 20};
scripting[3] = {answer: 'odpC', nextQuestion: '/languages/bash.html', actualQuestion: 20};
scripting[4] = {answer: 'odpD', nextQuestion: '/languages/ruby.html', actualQuestion: 20};

var dataAnalysis = new Array(3);
dataAnalysis[0] = {answer: 'odpA', nextQuestion: 15, actualQuestion: 14};
dataAnalysis[1] = {answer: 'odpA', nextQuestion: '/languages/r.html', actualQuestion: 15};
dataAnalysis[2] = {answer: 'odpB', nextQuestion: '/languages/python.html', actualQuestion: 15};

var automation = new Array(3);
automation[0] = {answer: 'odpD', nextQuestion: 17, actualQuestion: 12};
automation[1] = {answer: 'odpC', nextQuestion: '/languages/python.html', actualQuestion: 17};
automation[2] = {answer: 'odpC', nextQuestion: '/languages/ruby.html', actualQuestion: 17};

var creatingOS = new Array(2);
creatingOS[0] = {answer: 'odpD', nextQuestion: 14, actualQuestion: 1};
creatingOS[1] = {answer: 'odpE', nextQuestion: '/languages/c.html', actualQuestion: 14};

var machineLearning = {answer: 'odpA', nextQuestion: '/languages/python.html', actualQuestion: 12};

var lowLevelSoftware = {answer: 'odpE', nextQuestion: '/languages/c.html', actualQuestion: 12};

var forKids = {answer: 'odpC', nextQuestion: '/languages/scratch.html', actualQuestion: 1};


  $('.ans').click(function() {
    if($(queClass).hasClass( 'slide_in' )) $( queClass ).removeClass( 'slide_in' );
    if($(this).hasClass( 'slide_out' )) $( this ).removeClass( 'slide_out' );
    if($(queClass).find(".ans").hasClass( 'slide_up' )) $(queClass).find(".ans").removeClass( 'slide_up' );

    $( this ).addClass( 'slide_out' );
    $( queClass ).fadeOut( "slow" );
    if (queNumber==1) {
      $('.back').css("visibility", "visible");
    }
    previousQueNumber.push(queNumber);
    var id = $(this).attr('id');


    for(var i=0; i<web.length; i++) {
      if(web[i].actualQuestion == queNumber) {
        if(web[i].answer == id) {
          if(isNaN(web[i].nextQuestion)) window.location.href = web[i].nextQuestion;
          queNumber = web[i].nextQuestion;
          break;
        }
      }
    }

    for(var i=0; i<mobile.length; i++) {
      if(previousQueNumber[previousQueNumber.length - 1] != queNumber) break;
      if(mobile[i].actualQuestion == queNumber) {
        if(mobile[i].answer == id) {
          if(isNaN(mobile[i].nextQuestion)) window.location.href = mobile[i].nextQuestion;
          queNumber = mobile[i].nextQuestion;
        }
      }
    }

    for(var i=0; i<games.length; i++) {
      if(previousQueNumber[previousQueNumber.length - 1] != queNumber) break;
      if(games[i].actualQuestion == queNumber) {
        if(games[i].answer == id) {
          if(isNaN(games[i].nextQuestion)) window.location.href = games[i].nextQuestion;
          queNumber = games[i].nextQuestion;
        }
      }
    }

    for(var i=0; i<corp.length; i++) {
      if(previousQueNumber[previousQueNumber.length - 1] != queNumber) break;
      if(corp[i].actualQuestion == queNumber) {
        if(corp[i].answer == id) {
          if(isNaN(corp[i].nextQuestion)) window.location.href = corp[i].nextQuestion;
          queNumber = corp[i].nextQuestion;
        }
      }
    }

    for(var i=0; i<smallGame.length; i++) {
      if(previousQueNumber[previousQueNumber.length - 1] != queNumber) break;
      if(smallGame[i].actualQuestion == queNumber) {
        if(smallGame[i].answer == id) {
          if(isNaN(smallGame[i].nextQuestion)) window.location.href = smallGame[i].nextQuestion;
          queNumber = smallGame[i].nextQuestion;
        }
      }
    }

    for(var i=0; i<software.length; i++) {
      if(previousQueNumber[previousQueNumber.length - 1] != queNumber) break;
      if(software[i].actualQuestion == queNumber) {
        if(software[i].answer == id) {
          if(isNaN(software[i].nextQuestion)) window.location.href = software[i].nextQuestion;
          queNumber = software[i].nextQuestion;
        }
      }
    }

    for(var i=0; i<scripting.length; i++) {
      if(previousQueNumber[previousQueNumber.length - 1] != queNumber) break;
      if(scripting[i].actualQuestion == queNumber) {
        if(scripting[i].answer == id) {
          if(isNaN(scripting[i].nextQuestion)) window.location.href = scripting[i].nextQuestion;
          queNumber = scripting[i].nextQuestion;
        }
      }
    }

    for(var i=0; i<dataAnalysis.length; i++) {
      if(previousQueNumber[previousQueNumber.length - 1] != queNumber) break;
      if(dataAnalysis[i].actualQuestion == queNumber) {
        if(dataAnalysis[i].answer == id) {
          if(isNaN(dataAnalysis[i].nextQuestion)) window.location.href = dataAnalysis[i].nextQuestion;
          queNumber = dataAnalysis[i].nextQuestion;
        }
      }
    }

    for(var i=0; i<automation.length; i++) {
      if(previousQueNumber[previousQueNumber.length - 1] != queNumber) break;
      if(automation[i].actualQuestion == queNumber) {
        if(automation[i].answer == id) {
          if(isNaN(automation[i].nextQuestion)) window.location.href = automation[i].nextQuestion;
          queNumber = automation[i].nextQuestion;
        }
      }
    }

    for(var i=0; i<creatingOS.length; i++) {
      if(previousQueNumber[previousQueNumber.length - 1] != queNumber) break;
      if(creatingOS[i].actualQuestion == queNumber) {
        if(creatingOS[i].answer == id) {
          if(isNaN(creatingOS[i].nextQuestion)) window.location.href = creatingOS[i].nextQuestion;
          queNumber = creatingOS[i].nextQuestion;
        }
      }
    }

    if(previousQueNumber[previousQueNumber.length - 1] == queNumber) {
      if(machineLearning.actualQuestion == queNumber) {
        if(machineLearning.answer == id) {
          window.location.href = machineLearning.nextQuestion;
        }
      }
    }

    if(previousQueNumber[previousQueNumber.length - 1] == queNumber) {
      if(lowLevelSoftware.actualQuestion == queNumber) {
        if(lowLevelSoftware.answer == id) {
          window.location.href = lowLevelSoftware.nextQuestion;
        }
      }
    }



    if(previousQueNumber[previousQueNumber.length - 1] == queNumber) {
      if(forKids.actualQuestion == queNumber) {
        if(forKids.answer == id) {
          window.location.href = forKids.nextQuestion;
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
