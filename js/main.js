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
  var next = 0;

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
      typeSpeed: -1,
      loop: false,
      backSpeed: -100,
      onStringTyped: function() {
        clearInterval(pressKeyInt);
        clearInterval(pressKeyInt2);
        clearInterval(scrollDownTerminal);
      },
    });
  }
  startTyping(javascript);

  $('.nextExample-btn').on('click', function() {
    changeExample("right");
  });


  $('.previousExample-btn').on('click', function() {
    changeExample("left");
  });

  $(document).keydown(function(e) {
    if(e.which==39){
      changeExample("right");
    }
  });

  $(document).keydown(function(event) {
    if(event.which == 37){
      changeExample("left");
    }
  });

  function changeExample(direction) {
    clearInterval(pressKeyInt);
    clearInterval(pressKeyInt2);
    clearInterval(scrollDownTerminal);
    $('.down').remove();
    if(direction=="left"){
      next--;
      if(next<=-1) next=languageExamples.length-1;
    }
    else {
      next++;
      if(next>=languageExamples.length) next=0;
    }
    if(next<=-1) next=languageExamples.length-1;
    startTyping(languageExamples[next]);
    pressKeyInt=setInterval(pressKey,100);
    pressKeyInt2=setInterval(pressKey,200);
    scrollDownTerminal = setInterval(ScrollTerminal,500);
  }

  /* Terminal autoscroll */
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

  // Navigation Scripts to Show Header on Scroll-Up
  jQuery(document).ready(function($) {
      var MQL = 1170;

      //primary navigation slide-in effect
      if ($(window).width() > MQL) {
          var headerHeight = $('.navbar-custom').height();
          $(window).on('scroll', {
                  previousTop: 0
              },
              function() {
                  var currentTop = $(window).scrollTop();
                  //check if user is scrolling up
                  if (currentTop < this.previousTop) {
                      //if scrolling up...
                      if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
                          $('.navbar-custom').addClass('is-visible');
                      } else {
                          $('.navbar-custom').removeClass('is-visible is-fixed');
                      }
                  } else {
                      //if scrolling down...
                      $('.navbar-custom').removeClass('is-visible');
                      if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
                  }
                  this.previousTop = currentTop;
              });
      }
  });

  /* Highlight section */

  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
  });

  /* Laptop Responsivness*/

  function laptop()  {
    var screenWidth = $('.screen').width();
    $('.screen').css({'height':screenWidth*0.6+'px'});
    $('.terminal').css('height','calc('+$('.screen').height()+'-20px)');
    var keyboardHeight = $('.screen').height()*0.6;
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
  $('.start').on("click mousedown", function() {
    $('.start').addClass('press');
  });

  $('.start').mouseout(function() {
    $('.start').removeClass('press');
  });

  $('.start').on("click", function(event) {
    event.preventDefault()
    var mouseButton = event.which;
    var link = 'start.html';

    if(mouseButton === 3) return;

    setTimeout(function() {
      window.location = link;
    }, 300);
  });
});

