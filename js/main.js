$(function(){
    /* Typed function on terminal */
    $(".element").typed({
      strings: [
      'JavaScript<br><span class="keyword-highlighter">function</span> <span class="function-highlighter">division</span>(a, b) {<br><span style="margin-left: 5em;"> <span class="keyword-highlighter">if</span> (b == <span class="number-highlighter">0</span>) <span class="keyword-highlighter">return</span> <span class="string-highlighter">"Warning"</span>;</span></br><span style="margin-left: 5em"><span class="keyword-highlighter">else return</span> a / b;</span> <br>}',
      'Python<br><span class="keyword-highlighter">def</span> <span class="function-highlighter">division</span>(a, b): <br><span style="margin-left: 5em;"> <span class="keyword-highlighter">if</span> b == <span class="number-highlighter">0</span> <span class="keyword-highlighter">return</span> <span class="string-highlighter">"Warning"</span></span></br><span style="margin-left: 5em"><span class="keyword-highlighter">else return</span> a / b</span>',
      'PHP<br><span class="keyword-highlighter">function</span> <span class="function-highlighter">division</span>($a, $b) {<br><span style="margin-left: 5em;"> <span class="keyword-highlighter">if</span> ($b == <span class="number-highlighter">0</span>) <span class="keyword-highlighter">return</span> <span class="string-highlighter">"Warning"</span>;</span></br><span style="margin-left: 5em"><span class="keyword-highlighter">else return</span> a / b;</span> <br>}',
      'C++<br><span class="keyword-highlighter">int</span> <span class="function-highlighter">division</span>(<span class="keyword-highlighter">int</span> a, <span class="keyword-highlighter">int</span> b) {<br><span style="margin-left: 5em;"> <span class="keyword-highlighter">if</span> (b == <span class="number-highlighter">0</span>) <span class="keyword-highlighter">return</span> <span class="string-highlighter">"Warning"</span>;</span></br><span style="margin-left: 5em"><span class="keyword-highlighter">else return</span> a / b;</span> <br>}',
      'Java<br>public <span class="keyword-highlighter">int</span> <span class="function-highlighter">division</span>(<span class="keyword-highlighter">int</span> a, <span class="keyword-highlighter">int</span> b) {<br><span style="margin-left: 5em;"> <span class="keyword-highlighter">if</span> (b == <span class="number-highlighter">0</span>) <span class="keyword-highlighter">return</span> <span class="string-highlighter">"Warning";</span></span></br><span style="margin-left: 5em"><span class="keyword-highlighter">else return</span> a / b;</span> <br>}',
      'Ruby<br><span class="keyword-highlighter">def</span> <span class="function-highlighter">division</span>(a, b) <br><span style="margin-left: 5em;"> <span class="keyword-highlighter">if</span> b == <span class="number-highlighter">0</span> <span class="keyword-highlighter">return</span> <span class="string-highlighter">"Warning"</span></span></br><span style="margin-left: 5em"><span class="keyword-highlighter">else return</span> a / b</span><br>end',
      'C<br><span class="keyword-highlighter">int</span> <span class="function-highlighter">division</span>(<span class="keyword-highlighter">int</span> a, <span class="keyword-highlighter">int</span> b) {<br><span style="margin-left: 5em;"> <span class="keyword-highlighter">if</span> (b == <span class="number-highlighter">0</span>) <span class="keyword-highlighter">return</span> <span class="string-highlighter">"Warning"</span>;</span></br><span style="margin-left: 5em"><span class="keyword-highlighter">else return</span> a / b;</span> <br>}',
      'Swift<br><span class="keyword-highlighter">funct</span> <span class="function-highlighter">division</span>(a: <span class="keyword-highlighter">Int</span>, b: <span class="keyword-highlighter">Int</span>) -> <span class="keyword-highlighter">Int</span>{<br><span style="margin-left: 5em;"> <span class="keyword-highlighter">if</span> (b == <span class="number-highlighter">0</span>) <span class="keyword-highlighter">return</span> <span class="string-highlighter">"Warning"</span>;</span></br><span style="margin-left: 5em"><span class="keyword-highlighter">else return</span> a / b;</span> <br>}',

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
