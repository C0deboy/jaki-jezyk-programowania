$(function(){
    $(".element").typed({
      strings: ['JavaScript <br> function addition(a, b) {<br><span style="margin-left: 2em;"> return a + b;</span><br>}', 'PHP <br> function addition($a, $b) {<br><span style="margin-left: 2em;"> return $a + $b;</span><br>}','Python <br> def addition(a, b):<br><span style="margin-left: 2em;"> return a + b</span><br>','Java <br> public int addition(int a, int b) {<br><span style="margin-left: 2em;"> return a + b;</span><br>}','C<br> int addition(int a, int b) {<br><span style="margin-left: 2em;"> return a + b;</span><br>}','C++ <br> int addition(int a, int b) {<br><span style="margin-left: 2em;"> return a + b;</span><br>}'],
      typeSpeed: 100,
      loop:true,
    });
});

var scrollToElement = function(el, ms){
  var speed = (ms) ? ms : 600;
  $('html,body').animate({
      scrollTop: $(el).offset().top
  }, speed);
}

$(".intro-btn").click(function() {
scrollToElement('#intro', 600);
});

$(".howWorks-btn").click(function() {
scrollToElement('#howWorks', 600);
});

$(".about-programming-btn").click(function() {
scrollToElement('#about-programming', 600);
});

$(".about-us-btn").click(function() {
scrollToElement('#about-us', 600);
});

$('body').scrollspy({
  target: '.navbar-fixed-top',
  offset: 51
});

<!-- Laptop auto width -->
var cw = $('.laptop').height()*1.5;
$('.laptop').css({'max-width':cw+'px'});
