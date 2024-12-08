import Typed from 'typed.js';
import hljs from 'highlight.js';

new Typed('.typed-languages', {
  strings: [
    'JavaScript?', 'Python?', 'Java?', 'Kotlin?', 'Scala?', 'C#?', 'PHP?', 'C++?', 'Swift?', 'Ruby?', 'C?', 'R?',
  ],
  typeSpeed: 30,
  loop: true,
  backSpeed: 30,
});

const typedExample = '.typed-example';
const typedExampleEl = document.querySelector(typedExample);
const terminalLang = document.querySelector('.terminal .lang');

const languages = [
  'javascript',
  'cpp',
  'php',
  'java',
  'python',
  'csharp',
  'ruby',
  'c',
  'r',
  'swift',
  'kotlin',
  'scala',
];

let typed = startTyping(languages[0]);
let readyCode;

function startTyping(language) {
  const example = getExample(language);
  const code = printLanguageAndGetCode(example);
  const highlightedCode = hljs.highlight(code, { language }).value;
  readyCode = highlightedCode;
  return new Typed(typedExample, {
    strings: [
      highlightedCode,
    ],
    typeSpeed: 20,
    loop: false,
    backSpeed: 0,
    smartBackspace: false,
    contentType: 'html',
    ignoreUnescapedHTML: true,
    onComplete: stopTyping,
    onStop: stopTyping,
  });
}

const animatedKeys = document.querySelectorAll('.typekey');

function pressKey() {
  const randomKeyNum = Math.floor((Math.random() * 29));
  animatedKeys[randomKeyNum].classList.add('pressKey');
  setTimeout(() => animatedKeys[randomKeyNum].classList.remove('pressKey'), 250);
}

let pressKeyInt = setInterval(pressKey, 100);
let pressKeyInt2 = setInterval(pressKey, 200);

function stopTyping() {
  clearInterval(pressKeyInt);
  clearInterval(pressKeyInt2);
  clearInterval(scrollDownTerminal);
}

function skipTyping() {
  typed.stop();
  typed.destroy();
  typedExampleEl.innerHTML = readyCode;
}

document.querySelector('.skip')
  .addEventListener('click', skipTyping);

window.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    skipTyping();
  }
});

const scrollTerminalEl = document.querySelector('.screen');

function scrollTerminal() {
  const terminalHeight = (scrollTerminalEl.scrollHeight - scrollTerminalEl.offsetHeight);
  if (scrollTerminalEl.scrollTop < terminalHeight + 100) {
    scrollTerminalEl.scrollTop = scrollTerminalEl.scrollHeight;
  }
}

let scrollDownTerminal = setInterval(scrollTerminal, 500);

document.querySelector('.screen')
  .addEventListener('mousewheel DOMMouseScroll touchstart', () => clearInterval(scrollDownTerminal));

const nextExampleBtn = document.querySelector('.next-example-btn');
nextExampleBtn.addEventListener('click', () => changeExample('right'));
nextExampleBtn.addEventListener('mouseleave', () => nextExampleBtn.classList.remove('tip'));

document.querySelector('.previous-example-btn')
  .addEventListener('click', () => changeExample('left'));

window.addEventListener('keydown', (e) => {
  if (e.code === 'ArrowRight') {
    changeExample('right');
  }
});

window.addEventListener('keydown', (e) => {
  if (e.code === 'ArrowLeft') {
    changeExample('left');
  }
});

let next = 0;

function changeExample(direction) {
  typed.stop();
  typed.destroy();
  clearInterval(pressKeyInt);
  clearInterval(pressKeyInt2);
  clearInterval(scrollDownTerminal);
  if (direction === 'left') {
    next -= 1;
    if (next <= -1) next = languages.length - 1;
  } else {
    next += 1;
    if (next >= languages.length) next = 0;
  }
  if (next <= -1) next = languages.length - 1;
  pressKeyInt = setInterval(pressKey, 100);
  pressKeyInt2 = setInterval(pressKey, 200);
  scrollDownTerminal = setInterval(scrollTerminal, 500);
  typed = startTyping(languages[next]);
}

function printLanguageAndGetCode(language) {
  const langComment = language.substring(0, language.indexOf('\n'));
  terminalLang.innerHTML = langComment;
  return language.substring(langComment.length + 1);
}

function getExample(language) {
  return document.querySelector(`.language-${language}`).textContent;
}
