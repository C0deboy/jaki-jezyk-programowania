$(function(){
var iter = 1;
var clasa = '.que' + iter;

  $('.ans').click(function() {
    if($(clasa).hasClass( 'slide_in' )) $( clasa ).removeClass( 'slide_in' );
    if($(this).hasClass( 'slide_out' )) $( this ).removeClass( 'slide_out' );
    if($(clasa).find(".answers").hasClass( 'slide_up' )) $(clasa).find(".answers").removeClass( 'slide_up' );

    $( this ).addClass( 'slide_out' );
    $( clasa ).fadeOut( "slow" );
    if (iter==1) {
      $('.back').css("display", "block");
    }

    iter++;
    clasa = '.que' + iter;
    window.setTimeout(function(){$(clasa).fadeIn( "slow" );$(clasa).find(".answers").show().addClass('slide_up');}, 1000);
    if($(clasa).hasClass( 'slide_in' )) $( clasa ).removeClass( 'slide_in' );

  });

  $('.back').click(function() {
    //if($(clasa).hasClass( 'slide_in' )) $( clasa ).removeClass( 'slide_in' );
    if($('.ans').hasClass( 'slide_out' )) $( '.ans' ).removeClass( 'slide_out' );
    if($(clasa).find(".answers").hasClass( 'slide_up' )) $(clasa).find(".answers").removeClass( 'slide_up' );

    $( clasa ).fadeOut( "slow" );
    iter--;
    clasa = '.que' + iter;
    window.setTimeout(function(){$( clasa ).show().addClass( 'slide_in' );}, 1000);
    if(iter==1) {
      $('.back').css("display", "none");
    }
  });

})
