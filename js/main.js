/* languages examples showing up in terminal, laptop section */
var languagesExamples = [
  'JavaScript<br><span class="function-highlighter">function</span> <span class="function-name-highlighter">divide</span>(<span class="function-arg-highlighter">a</span>, <span class="function-arg-highlighter">b</span>) {<br><span style="margin-left: 2em;"> <span class="keyword-highlighter">if</span> (b <span class="keyword-highlighter"><span class="keyword-highlighter">==</span></span> <span class="number-highlighter">0</span>) <span class="keyword-highlighter">return</span> <span class="string-highlighter">"Warning"</span>;</span><br><span style="margin-left: 2em"><span class="keyword-highlighter">else return</span> a <span class="keyword-highlighter">/</span> b;</span> <br>}<br>console.<span class="function-highlighter">log</span>(<span class="function-name-highlighter">divide</span>(<span class="number-highlighter">15</span>, <span class="number-highlighter">5</span>));<br><span class="number-highlighter">3</span>',
  'Python<br><span class="function-highlighter">def</span> <span class="function-name-highlighter">divide</span>(<span class="function-arg-highlighter">a</span>, <span class="function-arg-highlighter">b</span>): <br><span style="margin-left: 2em;"> <span class="keyword-highlighter">if</span> b <span class="keyword-highlighter">==</span> <span class="number-highlighter">0</span> <span class="keyword-highlighter">return</span> <span class="string-highlighter">"Warning"</span></span><br><span style="margin-left: 2em"><span class="keyword-highlighter">else return</span> a <span class="keyword-highlighter">/</span> b</span><br><span class="keyword-highlighter">print</span> <span class="function-name-highlighter">divide</span>(<span class="number-highlighter">15</span>, <span class="number-highlighter">5</span>)<br><span class="number-highlighter">3</span>',
  'PHP<br><span class="function-highlighter">function</span> <span class="function-name-highlighter">divide</span>(<span class="function-arg-highlighter">$a</span>, <span class="function-arg-highlighter">$b</span>) {<br><span style="margin-left: 2em;"> <span class="keyword-highlighter">if</span> ($b <span class="keyword-highlighter">==</span> <span class="number-highlighter">0</span>) <span class="keyword-highlighter">return</span> <span class="string-highlighter">"Warning"</span>;</span><br><span style="margin-left: 2em"><span class="keyword-highlighter">else return</span> a <span class="keyword-highlighter">/</span> b;</span> <br>}<br><span class="keyword-highlighter">echo</span> divide(<span class="string-highlighter">15</span>, <span class="number-highlighter">5</span>);<br><span class="number-highlighter">3</span>',
  'C++<br><span class="function-highlighter">int</span> <span class="function-name-highlighter">divide</span>(<span class="keyword-highlighter">int</span> <span class="function-arg-highlighter">a</span>, <span class="keyword-highlighter">int</span> <span class="function-arg-highlighter">b</span>) {<br><span style="margin-left: 2em;"> <span class="keyword-highlighter">if</span> (b <span class="keyword-highlighter">==</span> <span class="number-highlighter">0</span>) <span class="keyword-highlighter">return</span> <span class="string-highlighter">"Warning"</span>;</span><br><span style="margin-left: 2em"><span class="keyword-highlighter">else return</span> a <span class="keyword-highlighter">/</span> b;</span> <br>}<br><span class="keyword-highlighter">cout</span> << <span class="function-name-highlighter">divide</span>(<span class="number-highlighter">15</span>, <span class="number-highlighter">5</span>) << endl;<br><span class="number-highlighter">3</span>',
  'Java<br>public <span class="function-highlighter">int</span> <span class="function-name-highlighter">divide</span>(<span class="keyword-highlighter">int</span> <span class="function-arg-highlighter">a</span>, <span class="keyword-highlighter">int</span> <span class="function-arg-highlighter">b</span>) {<br><span style="margin-left: 2em;"> <span class="keyword-highlighter">if</span> (b <span class="keyword-highlighter">==</span> <span class="number-highlighter">0</span>) <span class="keyword-highlighter">return</span> <span class="string-highlighter">"Warning";</span></span><br><span style="margin-left: 2em"><span class="keyword-highlighter">else return</span> a <span class="keyword-highlighter">/</span> b;</span> <br>}<br><span class="keyword-highlighter">System.out.print</span>(<span class="function-name-highlighter">divide</span>(<span class="number-highlighter">15</span>, <span class="number-highlighter">5</span>));<br><span class="number-highlighter">3</span>',
  'Ruby<br><span class="function-highlighter">def</span> <span class="function-name-highlighter">divide</span>(<span class="function-arg-highlighter">a</span>, <span class="function-arg-highlighter">b</span>) <br><span style="margin-left: 2em;"> <span class="keyword-highlighter">if</span> b <span class="keyword-highlighter">==</span> <span class="number-highlighter">0</span> <span class="keyword-highlighter">return</span> <span class="string-highlighter">"Warning"</span></span><br><span style="margin-left: 2em"><span class="keyword-highlighter">else return</span> a <span class="keyword-highlighter">/</span> b</span><br>end<br><span class="keyword-highlighter">print</span> <span class="function-name-highlighter">divide</span>(<span class="number-highlighter">15</span>, <span class="number-highlighter">5</span>)<br><span class="number-highlighter">3</span>',
  'C<br><span class="function-highlighter">int</span> <span class="function-name-highlighter">divide</span>(<span class="keyword-highlighter">int</span> <span class="function-arg-highlighter">a</span>, <span class="keyword-highlighter">int</span> <span class="function-arg-highlighter">b</span>) {<br><span style="margin-left: 2em;"> <span class="keyword-highlighter">if</span> (b <span class="keyword-highlighter">==</span> <span class="number-highlighter">0</span>) <span class="keyword-highlighter">return</span> <span class="string-highlighter">"Warning"</span>;</span><br><span style="margin-left: 2em"><span class="keyword-highlighter">else return</span> a <span class="keyword-highlighter">/</span> b;</span> <br>}<br><span class="keyword-highlighter">printf</span> (<span class="function-name-highlighter">divide</span>(<span class="number-highlighter">15</span>, <span class="number-highlighter">5</span>))<br><span class="number-highlighter">3</span>',
  'Swift<br><span class="function-highlighter">funct</span> <span class="function-name-highlighter">divide</span>(<span class="function-arg-highlighter">a</span>: <span class="keyword-highlighter">Int</span>, <span class="function-arg-highlighter">b</span>: <span class="keyword-highlighter">Int</span>) -> <span class="keyword-highlighter">Int</span>{<br><span style="margin-left: 2em;"> <span class="keyword-highlighter">if</span> (b <span class="keyword-highlighter">==</span> <span class="number-highlighter">0</span>) <span class="keyword-highlighter">return</span> <span class="string-highlighter">"Warning"</span>;</span><br><span style="margin-left: 2em"><span class="keyword-highlighter">else return</span> a <span class="keyword-highlighter">/</span> b;</span> <br>}<br><span class="keyword-highlighter">print</span> (<span class="function-name-highlighter">divide</span>(<span class="number-highlighter">15</span>, <span class="number-highlighter">5</span>))<br><span class="number-highlighter">3</span>',
  'C#<br>public <span class="function-highlighter">int</span> <span class="function-name-highlighter">divide</span>(<span class="keyword-highlighter">int</span> <span class="function-arg-highlighter">a</span>, <span class="keyword-highlighter">int</span> <span class="function-arg-highlighter">b</span>) {<br><span style="margin-left: 2em;"> <span class="keyword-highlighter">if</span> (b <span class="keyword-highlighter">==</span> <span class="number-highlighter">0</span>) <span class="keyword-highlighter">return</span> <span class="string-highlighter">"Warning";</span></span><br><span style="margin-left: 2em"><span class="keyword-highlighter">else return</span> a <span class="keyword-highlighter">/</span> b;</span> <br>}<br><span class="keyword-highlighter">Console.WriteLine</span>(<span class="function-name-highlighter">divide</span>(<span class="number-highlighter">15</span>, <span class="number-highlighter">5</span>));<br><span class="number-highlighter">3</span>',
  'R<br><span class="function-name-highlighter">divide</span> <- <span class="function-highlighter">function</span>(<span class="function-arg-highlighter">a</span>, <span class="function-arg-highlighter">b</span>) {<br><span style="margin-left: 2em;"><span class="keyword-highlighter">if</span> (b <span class="keyword-highlighter">==</span> <span class="number-highlighter">0</span>)<span class="string-highlighter"> "Warning"</span></span><br><span style="margin-left: 2em;"><span class="keyword-highlighter">else </span>a <span class="keyword-highlighter">/</span> b</span><br>}<br><span class="function-name-highlighter">divide</span>(<span class="number-highlighter">15</span>, <span class="number-highlighter">5</span>)<br><span class="number-highlighter">3</span>'
];

//C#, R

$(function(){
    /* Typed function on terminal */
    $(".element").typed({
      strings: [
        languagesExamples[0], languagesExamples[1], languagesExamples[2], languagesExamples[3], languagesExamples[4], languagesExamples[5], languagesExamples[6], languagesExamples[7], languagesExamples[8], languagesExamples[9],
      ],
      typeSpeed: 50,
      loop: true,
      backDelay: 1200,
      backSpeed: -100,
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

    /* Laptop Responsivness sets width to the 1.5 height of the laptop*/

    function laptop()  {
      var laptopWidth = $('.laptop').height()*1.2;
      $('.laptop').css({'max-width':laptopWidth+'px'});
      var screenHeight = $('.laptop').width();
      $('.screen').css({'max-height':screenHeight+'px'});
      var keyboardWidth = $('.screen').width()/8.45;
      $('.keyboard').css({'border-left':keyboardWidth+'px solid transparent'});
      $('.keyboard').css({'border-right':keyboardWidth+'px solid transparent'});
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
    var pressKeyInt=setInterval(pressKey,300);
    var pressKeyInt2=setInterval(pressKey,500);

    /*Rotating animations*/
    $('.lang-link').click(function(event) {
      event.preventDefault();
      var href = this.href;
      $('.lang').addClass('rotation');
      setTimeout(function () {window.location = href; $('.lang').removeClass('rotation');},1000);
    });

    $('.start').click(function() {
      console.log("poszło");
      $('.play').addClass('rotation');
      setTimeout(function () {window.location = "start.html";},1000);
      
    });
});


