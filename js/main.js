$(function(){
    /* Typed function on terminal */
    $(".element").typed({
      strings: [
      '<span class="l">JavaScript</span> <br> function <span class="nf">addition</span>(<span class="nv">a</span>, <span class="nv">b</span>) {<br><span style="margin-left: 2em;"> <span class="k">return</span> <span class="nv">a</span> + <span class="nv">b</span>;</span><br>}',
     '<span class="l">PHP</span> <br> function <span class="nf">addition</span>(<span class="nv">$a</span>, <span class="nv">$b</span>) {<br><span style="margin-left: 2em;"> <span class="k">return</span> <span class="nv">$a</span> + <span class="nv">$b</span>;</span><br>}',
     '<span class="l">Python</span> <br> def <span class="nf">addition</span>(a, b):<br><span style="margin-left: 2em;"> <span class="k">return</span> a + b</span><br>',
     '<span class="l">Java</span> <br> public <span class="kt">int</span> <span class="nf">addition</span>(<span class="kt">int</span> <span class="nv">a</span>, <span class="kt">int</span> <span class="nv">b</span>) {<br><span style="margin-left: 2em;"> <span class="k">return</span> <span class="nv">a</span> + <span class="nv">b</span>;</span><br>}',
     '<span class="l">C</span><br> <span class="kt">int</span> <span class="nf">addition</span>(<span class="kt">int</span> <span class="nv">a</span>, <span class="kt">int</span> <span class="nv">b</span>) {<br><span style="margin-left: 2em;"> <span class="k">return</span> <span class="nv">a</span> + <span class="nv">b</span>;</span><br>}',
     '<span class="l">C++</span> <br> <span class="kt">int</span> <span class="nf">addition</span>(<span class="kt">int</span> <span class="nv">a</span>, <span class="kt">int</span> <span class="nv">b</span>) {<br><span style="margin-left: 2em;"> <span class="k">return</span> <span class="nv">a</span> + <span class="nv">b</span>;</span><br>}'
      ],
      typeSpeed: 100,
      loop:true,
    });

    /* Scroll to element effect */

    var scrollToElement = function(el, ms){
      var speed = (ms) ? ms : 600;
      $('html,body').animate({
          scrollTop: $(el).offset().top
      }, speed);
    }

    $(".intro-btn").click(function() {
    scrollToElement('#intro', 600);
    });

    $(".how-works-btn").click(function() {
    scrollToElement('#how-works', 600);
    });

    $(".program-languages-btn").click(function() {
    scrollToElement('#program-languages', 600);
    });

    $(".about-project-btn").click(function() {
    scrollToElement('#about-project', 600);
    });

    /* Highlight section */

    $('body').scrollspy({
      target: '.navbar-fixed-top',
      offset: 51
    });

    /* Laptop Responsivness Sets width to the 1.5 height of the laptop*/

    var cw = $('.laptop').height()*1.5;
    $('.laptop').css({'max-width':cw+'px'});
});
