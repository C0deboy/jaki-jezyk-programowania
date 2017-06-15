!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){var o=n(1);o.keys().forEach(function(t){o(t)})},function(t,e,n){function o(t){return n(r(t))}function r(t){var e=s[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var s={"./emailform.js":8,"./laptop.js":9,"./merge.js":0,"./projectInfo.js":10,"./startBtn.js":11,"./survey.js":12,"./typed.js":13,"./typing.js":14};o.keys=function(){return Object.keys(s)},o.resolve=r,t.exports=o,o.id=1},,,,,,,function(t,e){$(function(){function t(t){if("boolean"!=typeof t)throw new TypeError("State must be a boolean");if(!0===t)a.fadeIn(),a.attr("aria-hidden","false"),h.focus();else{a.fadeOut(),a.attr("aria-hidden","true");for(var e in r)r[e].value="";grecaptcha.reset(),l.focus()}}function e(){var t=!0;for(var e in r){var o=r[e].parentElement.innerText;if(!0===r[e].validity.valueMissing)n(r[e],i.empty(o));else if(!0===r[e].validity.tooShort){var a=r[e].getAttribute("minlength");n(r[e],i.tooShort(o,a))}else if(!0===r[e].validity.tooLong){var c=r[e].getAttribute("maxlength");n(r[e],i.tooLong(o,c))}else!0===r[e].validity.typeMismatch&&n(r[e],i.type(o));!1===r[e].validity.valid&&(t=!1)}return 0===grecaptcha.getResponse().length&&(n(s,i.recaptcha),t=!1),t}function n(t,e){if(!t.classList.contains("wrongInput")){var n=document.createElement("p");n.classList.add("error"),n.classList.add("wrongInput"),n.textContent=e,t.parentElement.append(n),t.classList.add("wrongInput"),t.addEventListener("focus",o)}}function o(){this.classList.remove("wrongInput"),this.parentElement.removeChild(this.parentElement.getElementsByClassName("error")[0]),c.innerHTML=""}var r={};document.querySelectorAll(".form-data").forEach(function(t){r[t.getAttribute("name")]=t});var s=document.querySelector(".g-recaptcha"),i={tooShort:function(t,e){return"Pole "+t+" musi zawierać co najmniej "+e+" znaki!"},tooLong:function(t,e){return"Pole "+t+" może zawierać co najwyżej "+e+" znaków!"},empty:function(t){return"Pole "+t+" nie może być puste!"},type:function(t){return"Pole "+t+" jest niepoprawne!"},errorsInForm:"W formularzu występują błędy!",recaptcha:"Potwierdź, że nie jesteś robotem!"},a=$("#contact"),c=document.querySelector(".emailFormAlert"),u=$("#close-contact-btn"),l=$("#open-contact-btn");l.click(function(){t(!0)}),u.click(function(){t(!1)});var h=$('input[name="from"]');u.on("keydown",function(t){9!==t.which||t.shiftKey||(t.preventDefault(),h.focus())}),h.on("keydown",function(t){9===t.which&&t.shiftKey&&(t.preventDefault(),u.focus())}),a.on("keydown",function(e){27===e.which&&t(!1)}),$(".emailFormSubmit").click(function(t){if(c.innerHTML='<i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>',t.preventDefault(),!0===e()){var n={"g-recaptcha-response":grecaptcha.getResponse()};grecaptcha.reset();for(var o in r)n[o]=r[o].value;var s=$.ajax({type:"POST",url:"//formspree.io/lasota.marcinm@gmail.com",dataType:"json",data:n});s.fail(function(t){console.log(t),c.innerHTML=i.errorsInForm}),s.done(function(t){console.log(t),c.innerHTML="Wysłano! Dzięki za wiadomość!"})}else c.innerHTML=i.errorsInForm})})},function(t,e){$(function(){function t(){var t=$(".screen"),e=$(".keyboard"),n=$(".keys"),o=$(".laptop .laptop-header .button"),r=t.width();t.css({height:.6*r+"px"}),$(".terminal").css("height","calc("+t.height()+"-20px)");var s=.6*t.height();e.css({"border-bottom":s+"px solid #e8ebf0"});var i=t.width()/8.45;e.css({"border-left":i+"px solid transparent"}),e.css({"border-right":i+"px solid transparent"});var a=e.css("border-bottom-width");n.css({height:.75*parseInt(a,10)+"px"});var c=e.width()/3.5;n.css({"-webkit-transform":"perspective("+c+"px) rotateX(10deg)"}),o.width(o.height())}t(),window.addEventListener("resize",t)})},function(t,e){$(function(){$("#close-project-state-btn").on("click",function(){$("#project-state").fadeOut()})})},function(t,e){$(function(){var t=$(".start");t.on("click mousedown",function(){t.addClass("press")}),t.mouseout(function(){t.removeClass("press")}),t.on("click",function(t){t.preventDefault();3!==t.which&&setTimeout(function(){window.location="start.html"},300)})})},function(t,e){function n(){s.fadeIn(),s.focus(),s.attr("aria-hidden","false")}function o(){s.fadeOut(),r.focus(),s.attr("aria-hidden","true")}var r=$("#ankieta"),s=$(".survey-dialog"),i=$(".close-survey-btn");"#ankieta"===document.location.hash&&n(),r.on("click",function(){n()}),i.on("click",function(){o()})},function(t,e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){"use strict";var e=function(e,n){this.el=t(e),this.options=t.extend({},t.fn.typed.defaults,n),this.isInput=this.el.is("input"),this.attr=this.options.attr,this.showCursor=!this.isInput&&this.options.showCursor,this.elContent=this.attr?this.el.attr(this.attr):this.el.text(),this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.stringsElement=this.options.stringsElement,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()};e.prototype={constructor:e,init:function(){var t=this;t.timeout=setTimeout(function(){for(var e=0;e<t.strings.length;++e)t.sequence[e]=e;t.shuffle&&(t.sequence=t.shuffleArray(t.sequence)),t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},t.startDelay)},build:function(){var e=this;if(!0===this.showCursor&&(this.cursor=t('<span class="typed-cursor">'+this.cursorChar+"</span>"),this.el.after(this.cursor)),this.stringsElement){this.strings=[],this.stringsElement.hide(),console.log(this.stringsElement.children());var n=this.stringsElement.children();t.each(n,function(n,o){e.strings.push(t(o).html())})}this.init()},typewrite:function(t,e){if(!0!==this.stop){var n=Math.round(70*Math.random())+this.typeSpeed,o=this;o.timeout=setTimeout(function(){var n=0,r=t.substr(e);if("^"===r.charAt(0)){var s=1;/^\^\d+/.test(r)&&(r=/\d+/.exec(r)[0],s+=r.length,n=parseInt(r)),t=t.substring(0,e)+t.substring(e+s)}if("html"===o.contentType){var i=t.substr(e).charAt(0);if("<"===i||"&"===i){var a="",c="";for(c="<"===i?">":";";t.substr(e+1).charAt(0)!==c&&(a+=t.substr(e).charAt(0),!(++e+1>t.length)););e++,a+=c}}o.timeout=setTimeout(function(){if(e===t.length){if(o.options.onStringTyped(o.arrayPos),o.arrayPos===o.strings.length-1&&(o.options.callback(),o.curLoop++,!1===o.loop||o.curLoop===o.loopCount))return;o.timeout=setTimeout(function(){o.backspace(t,e)},o.backDelay)}else{0===e&&o.options.preStringTyped(o.arrayPos);var n=t.substr(0,e+1);o.attr?o.el.attr(o.attr,n):o.isInput?o.el.val(n):"html"===o.contentType?o.el.html(n):o.el.text(n),e++,o.typewrite(t,e)}},n)},n)}},backspace:function(t,e){if(!0!==this.stop){var n=Math.round(70*Math.random())+this.backSpeed,o=this;o.timeout=setTimeout(function(){if("html"===o.contentType&&">"===t.substr(e).charAt(0)){for(var n="";"<"!==t.substr(e-1).charAt(0)&&(n-=t.substr(e).charAt(0),!(--e<0)););e--,n+="<"}var r=t.substr(0,e);o.attr?o.el.attr(o.attr,r):o.isInput?o.el.val(r):"html"===o.contentType?o.el.html(r):o.el.text(r),e>o.stopNum?(e--,o.backspace(t,e)):e<=o.stopNum&&(o.arrayPos++,o.arrayPos===o.strings.length?(o.arrayPos=0,o.shuffle&&(o.sequence=o.shuffleArray(o.sequence)),o.init()):o.typewrite(o.strings[o.sequence[o.arrayPos]],e))},n)}},shuffleArray:function(t){var e,n,o=t.length;if(o)for(;--o;)n=Math.floor(Math.random()*(o+1)),e=t[n],t[n]=t[o],t[o]=e;return t},reset:function(){var t=this;clearInterval(t.timeout);this.el.attr("id");this.el.empty(),void 0!==this.cursor&&this.cursor.remove(),this.strPos=0,this.arrayPos=0,this.curLoop=0,this.options.resetCallback()}},t.fn.typed=function(o){return this.each(function(){var r=t(this),s=r.data("typed"),i="object"==(void 0===o?"undefined":n(o))&&o;s&&s.reset(),r.data("typed",s=new e(this,i)),"string"==typeof o&&s[o]()})},t.fn.typed.defaults={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window.jQuery)},function(t,e){$(function(){function t(){var t=Math.floor(29*Math.random());m[t].classList.add("pressKey"),setTimeout(function(){m[t].classList.remove("pressKey")},350)}function e(){b.scrollTop<b.scrollHeight-b.offsetHeight+100&&(b.scrollTop=b.scrollHeight)}function n(t){$(".element").typed({strings:[t],typeSpeed:-1,loop:!1,backSpeed:-100,onStringTyped:function(){clearInterval(g),clearInterval(v),clearInterval(w)}})}function o(o){clearInterval(g),clearInterval(v),clearInterval(w),$(".down").remove(),"left"===o?(y+=1)<=-1&&(y=d.length-1):(y+=1)>=d.length&&(y=0),y<=-1&&(y=d.length-1),n(d[y]),g=setInterval(t,100),v=setInterval(t,200),w=setInterval(e,500)}var r=document.querySelector(".language-javascript").innerHTML,s=document.querySelector(".language-cpp").innerHTML,i=document.querySelector(".language-php").innerHTML,a=document.querySelector(".language-java").innerHTML,c=document.querySelector(".language-python").innerHTML,u=document.querySelector(".language-csharp").innerHTML,l=document.querySelector(".language-ruby").innerHTML,h=document.querySelector(".language-c").innerHTML,f=document.querySelector(".language-r").innerHTML,p=document.querySelector(".language-swift").innerHTML,d=[r,s,a,c,i,p,l,h,f,u],y=0,m=document.querySelectorAll(".typekey"),g=setInterval(t,100),v=setInterval(t,200),b=document.querySelector(".screen"),w=setInterval(e,500);$(".screen").on("mousewheel DOMMouseScroll touchstart",function(){clearInterval(w)}),n(r),$(".nextExample-btn").on("click",function(){o("right")}),$(".previousExample-btn").on("click",function(){o("left")}),$(document).keydown(function(t){39===t.which&&o("right")}),$(document).keydown(function(t){37===t.which&&o("left")})})}]);