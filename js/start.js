$(function(){
var iter = 1;
var previousQuestionIter = new Array();
var clasa = '.que' + iter;

var python = new Array(4);

python[0] = {odpowiedz: 'odpA', nextQuestion: 2, actualQuestion: 1};
python[1] = {odpowiedz: 'odpB', nextQuestion: 4, actualQuestion: 2};
python[2] = {odpowiedz: 'odpC', nextQuestion: 5, actualQuestion: 4};
python[3] = {odpowiedz: 'odpA', nextQuestion: 6, actualQuestion: 5};

var cpp = new Array(4);
cpp[0] = {odpowiedz: 'odpC', nextQuestion: 2, actualQuestion: 1};
cpp[1] = {odpowiedz: 'odpA', nextQuestion: 3, actualQuestion: 2};
cpp[2] = {odpowiedz: 'odpB', nextQuestion: 5, actualQuestion: 3};
cpp[3] = {odpowiedz: 'odpB', nextQuestion: 6, actualQuestion: 5};

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

    for(var i=0; i<4; i++) {
      if(python[i].actualQuestion == iter) {
        if(python[i].odpowiedz == id) {
          iter = python[i].nextQuestion;
          break;
        }
      }
      if(cpp[i].actualQuestion == iter) {
        if(cpp[i].odpowiedz == id) {
          iter = cpp[i].nextQuestion;
          break;
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
