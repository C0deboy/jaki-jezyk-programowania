$(() => {
  $('.typed-languages').typed({
    strings: [
      'JavaScript?', 'Python?', 'Java?', 'Kotlin?', 'Scala?', 'C#?', 'PHP?', 'C++?', 'Swift?', 'Ruby?', 'C?', 'R?',
    ],
    typeSpeed: 40,
    loop: true,
    backSpeed: 40,
  });

  const terminalElement = $('.element');
  const terminalLang = $('.terminal .lang');

  const javascript = document.querySelector('.language-javascript').innerHTML;
  const cpp = document.querySelector('.language-cpp').innerHTML;
  const php = document.querySelector('.language-php').innerHTML;
  const java = document.querySelector('.language-java').innerHTML;
  const python = document.querySelector('.language-python').innerHTML;
  const csharp = document.querySelector('.language-csharp').innerHTML;
  const ruby = document.querySelector('.language-ruby').innerHTML;
  const c = document.querySelector('.language-c').innerHTML;
  const r = document.querySelector('.language-r').innerHTML;
  const swift = document.querySelector('.language-swift').innerHTML;
  const kotlin = document.querySelector('.language-kotlin').innerHTML;
  const scala = document.querySelector('.language-scala').innerHTML;

  const languageExamples = [
    javascript,
    python,
    java,
    kotlin,
    scala,
    cpp,
    php,
    swift,
    ruby,
    c,
    r,
    csharp,
  ];

  let next = 0;

  const animatedKeys = document.querySelectorAll('.typekey');

  function pressKey() {
    const randomKeyNum = Math.floor((Math.random() * 29));
    animatedKeys[randomKeyNum].classList.add('pressKey');
    setTimeout(() => {
      animatedKeys[randomKeyNum].classList.remove('pressKey');
    }, 350);
  }

  let pressKeyInt = setInterval(pressKey, 100);
  let pressKeyInt2 = setInterval(pressKey, 200);

  const scrollTerminal = document.querySelector('.screen');

  function ScrollTerminal() {
    const terminalHeight = (scrollTerminal.scrollHeight - scrollTerminal.offsetHeight);
    if (scrollTerminal.scrollTop < terminalHeight + 100) {
      scrollTerminal.scrollTop = scrollTerminal.scrollHeight;
    }
  }

  let scrollDownTerminal = setInterval(ScrollTerminal, 500);

  $('.screen').on('mousewheel DOMMouseScroll touchstart', () => {
    clearInterval(scrollDownTerminal);
  });

  function startTyping(language) {
    const langComment = language.substr(0, language.indexOf('\n'));
    terminalLang.html(langComment);
    const code = language.substr(langComment.length + 1);
    terminalElement.typed({
      strings: [
        code,
      ],
      typeSpeed: -1,
      loop: false,
      backSpeed: -100,
      onStringTyped() {
        clearInterval(pressKeyInt);
        clearInterval(pressKeyInt2);
        clearInterval(scrollDownTerminal);
      },
    });
  }

  startTyping(javascript);

  function changeExample(direction) {
    clearInterval(pressKeyInt);
    clearInterval(pressKeyInt2);
    clearInterval(scrollDownTerminal);
    $('.down').remove();
    if (direction === 'left') {
      next -= 1;
      if (next <= -1) next = languageExamples.length - 1;
    } else {
      next += 1;
      if (next >= languageExamples.length) next = 0;
    }
    if (next <= -1) next = languageExamples.length - 1;
    startTyping(languageExamples[next]);
    pressKeyInt = setInterval(pressKey, 100);
    pressKeyInt2 = setInterval(pressKey, 200);
    scrollDownTerminal = setInterval(ScrollTerminal, 500);
  }

  function skipTyping() {
    startTyping('');
    document.querySelector('.element').innerHTML = languageExamples[next];
  }
  document.querySelector('.skip').addEventListener('click', () => {
    skipTyping();
  });

  $('.laptop').keydown((e) => {
    if (e.which === 32) {
      e.preventDefault();
      skipTyping();
    }
  });

  const nextExampleBtn = $('.nextExample-btn');

  nextExampleBtn.on('click', () => {
    changeExample('right');
  });

  nextExampleBtn.on('mouseleave', () => {
    nextExampleBtn.removeClass('tip');
  });

  nextExampleBtn[0].dispatchEvent(new Event('open'));

  $('.previousExample-btn').on('click', () => {
    changeExample('left');
  });

  $(document).keydown((e) => {
    if (e.which === 39) {
      changeExample('right');
    }
  });

  $(document).keydown((event) => {
    if (event.which === 37) {
      changeExample('left');
    }
  });
});
