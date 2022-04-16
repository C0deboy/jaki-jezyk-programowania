const laptop = document.querySelector('.laptop');
const screen = document.querySelector('.screen');
const terminal = document.querySelector('.terminal');
const keyboard = document.querySelector('.keyboard');
const keys = document.querySelector('.keys');

responsiveLaptop();
openShortcutsTooltip();

window.addEventListener('resize', responsiveLaptop);

function responsiveLaptop() {
  laptop.style.visibility = 'visible';
  laptop.style.position = 'relative';

  laptop.parentElement.querySelector('.fa-spin').style.display = 'none';

  const screenWidth = screen.clientWidth;
  screen.style.height = `${screenWidth * 0.6}px`;
  terminal.style.height = `${screen.clientHeight - 20}px`;

  const keyboardHeight = screen.clientHeight * 0.6;
  keyboard.style.borderBottom = `${keyboardHeight}px solid #e8ebf0`;

  const keyboardWidth = screen.clientWidth / 8.45;
  keyboard.style.borderStart = `${keyboardWidth}px solid transparent`;
  keyboard.style.borderEnd = `${keyboardWidth}px solid transparent`;

  const keysHeight = parseInt(keyboard.style.borderBottomWidth, 10);
  const keysWidth = keyboard.clientWidth / 3.5;
  keys.style.height = `${keysHeight * 0.75}px`;
  keys.style.transform = `perspective(${keysWidth}px) rotateX(10deg)`;
}

function openShortcutsTooltip() {
  document.getElementById('arrow-down-key')
    .dispatchEvent(new Event('open'));
}
