$(function(){
 var javascript = document.querySelector(".language-javascript").innerHTML;
 var cpp = document.querySelector(".language-cpp").innerHTML;
 var php = document.querySelector(".language-php").innerHTML;
 var java = document.querySelector(".language-java").innerHTML;
 var python = document.querySelector(".language-python").innerHTML;
 var csharp = document.querySelector(".language-csharp").innerHTML;
 var ruby = document.querySelector(".language-ruby").innerHTML;
 var c = document.querySelector(".language-c").innerHTML;
 var r = document.querySelector(".language-r").innerHTML;
 var swift = document.querySelector(".language-swift").innerHTML;

var languageExamples = [javascript, cpp, java, python, swift, ruby, c, r, csharp];
var next = 1;
  /* Project state */
  $('#close-project-state-btn').on('click', function() {
    $('#project-state').fadeOut();
  });

  /* Typed function on terminal */
  function startTyping(language) {
    
    $(".element").typed({
      strings: [
        language
      ],
      typeSpeed: 1,
      loop: false,
      backSpeed: -100,
      onStringTyped: function() {
        clearInterval(pressKeyInt);
        clearInterval(pressKeyInt2);
        window.setTimeout(function() {clearInterval(scrollDownTerminal);}, 500);
        $(".terminal code").append('<button class="nextExample-btn">nextExample();</button>');
        $('.nextExample-btn').on('click', function() {
          if(next==languageExamples.length) next=0;
          startTyping(languageExamples[next++]);
          $(".nextExample-btn").remove();
          pressKeyInt=setInterval(pressKey,100);
          pressKeyInt2=setInterval(pressKey,200);
          scrollDownTerminal = setInterval(ScrollTerminal,500);
        });

      },
    });
  }
  startTyping(javascript);

  $('.screen').on('mousewheel DOMMouseScroll touchstart', function(){clearInterval(scrollDownTerminal);});

  var scrollTerminal= document.querySelector('.screen');
  function ScrollTerminal(){
    if(scrollTerminal.scrollTop<(scrollTerminal.scrollHeight-scrollTerminal.offsetHeight+100)){
      scrollTerminal.scrollTop=scrollTerminal.scrollHeight
    }
  }

  var scrollDownTerminal = setInterval(ScrollTerminal,500);
  /* Scroll to element effect */

  var scrollToElement = function(el, ms){
    var speed = (ms) ? ms : 600;
    $('html,body').animate({
      scrollTop: $(el).offset().top
    }, speed);
  }

  $('.navbar a[href^="#"]').on('click', function() {
    scrollToElement($(this).attr('href'), 600);
  });

  $('.lets-go').on('click', function() {
    scrollToElement($('#jak-to-dziala'), 600);
  });

  /* Highlight section */

  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
  });

  /* Laptop Responsivness*/

  function laptop()  {
    var screenWidth = $('.screen').width();
    $('.laptop').css({'height':screenWidth*1.1+'px'});
    $('.screen').css({'height':screenWidth*0.6+'px'});
    $('.terminal').css('height','calc('+$('.screen').height()+'-20px)');
    var keyboardHeight = $('.laptop').height()*0.3;
    $('.keyboard').css({'border-bottom':keyboardHeight+'px solid #e8ebf0'});
    var keyboardWidth = $('.screen').width()/8.45;
    $('.keyboard').css({'border-left':keyboardWidth+'px solid transparent'});
    $('.keyboard').css({'border-right':keyboardWidth+'px solid transparent'});
    var keysHeight = $('.keyboard').css("border-bottom-width");
    $('.keys').css({'height':parseInt(keysHeight)*0.75+'px'});
    var keysWidth = $('.keyboard').width()/3.5;
    $('.keys').css({'-webkit-transform': 'perspective('+keysWidth+'px) rotateX(10deg)'});
    $('.laptop .laptop-header .button').width($('.laptop .laptop-header .button').height());
  }

  laptop();
  window.addEventListener("resize", laptop);

  /*Laptop animated keys*/
  var animatedKeys = document.querySelectorAll(".typekey");
  function pressKey(){
    var randomKeyNum=Math.floor((Math.random() * 29));
    animatedKeys[randomKeyNum].classList.add("pressKey");
    setTimeout(function(){animatedKeys[randomKeyNum].classList.remove("pressKey");},350);
  }
  var pressKeyInt=setInterval(pressKey,100);
  var pressKeyInt2=setInterval(pressKey,200);

  /*Start animation*/
  $('.start').mousedown(function() {
    $('.start').addClass('press');
  });

  $('.start').mouseout(function() {
    $('.start').removeClass('press');
  });

  $('.start').click(function(event) {
    event.preventDefault();
  });

  $('.start').mouseup(function(event) {
    var mouseButton = event.which;
    var link = 'start.html';

    if(mouseButton === 3) return;

    setTimeout(function() {
      window.location = link;
    }, 500);
  });

  /*Pop up email form*/
  function toggleContactModal(state) {
    if (typeof state !== 'boolean') return TypeError('State must be a boolean');

    var modal = $('#contact');
    var modalContent = modal.find('.contact-content');

    if (state === true) {
      modal.fadeIn();
      modal.attr('aria-hidden', 'false');
      modalContent.attr('tabindex', '0');
      modalContent.focus();
    }
    else {
      modal.fadeOut();
      modal.attr('aria-hidden', 'true');
      modalContent.attr('tabindex', '-1');
      $('body').focus();
    }
  }

  $('#close-contact-btn').click(function () {
    toggleContactModal(false);

    $('.emailFormAlert').html('');
    grecaptcha.reset();
  });

  $('#open-contact-btn').click(function () {
    toggleContactModal(true);
  });

  /*Ajax post email form*/
  $('.emailFormSubmit').click(function (event) {
    event.preventDefault();

    post_data = {
      'userEmail'   	      : $('.emailForm input[name="from"]').val(),
      'subject'			  : $('.emailForm input[name="subject"]').val(),
      'message'			  : $('.emailForm textarea[name="message"]').val(),
      'g-recaptcha-response': $("#g-recaptcha-response").val()
    };

    $.post('emailform.php', post_data, function(response){
      $('.emailFormAlert').html(response.text);
      grecaptcha.reset();
    }, 'json');

  });
});
