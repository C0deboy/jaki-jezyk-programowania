$(() => {
    /* Laptop Responsivness*/
  function laptop() {
    const screen = $('.screen');
    const keyboard = $('.keyboard');
    const keys = $('.keys');
    const button = $('.laptop .laptop-header .button');
    const screenWidth = screen.width();

    screen.css({ height: `${screenWidth * 0.6}px` });
    $('.terminal').css('height', `calc(${screen.height()}-20px)`);
    const keyboardHeight = screen.height() * 0.6;
    keyboard.css({ 'border-bottom': `${keyboardHeight}px solid #e8ebf0` });
    const keyboardWidth = screen.width() / 8.45;
    keyboard.css({ 'border-left': `${keyboardWidth}px solid transparent` });
    keyboard.css({ 'border-right': `${keyboardWidth}px solid transparent` });
    const keysHeight = keyboard.css('border-bottom-width');
    keys.css({ height: `${parseInt(keysHeight, 10) * 0.75}px` });
    const keysWidth = keyboard.width() / 3.5;
    keys.css({ '-webkit-transform': `perspective(${keysWidth}px) rotateX(10deg)` });
    button.width(button.height());
  }

  laptop();
  window.addEventListener('resize', laptop);
});
