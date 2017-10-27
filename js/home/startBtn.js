const startBtn = $('.start');

startBtn.on('click mousedown', () => {
  startBtn.addClass('press');
});

startBtn.mouseout(() => {
  startBtn.removeClass('press');
});

startBtn.on('click', (event) => {
  event.preventDefault();

  const mouseButton = event.which;
  const link = startBtn.attr('href');

  if (mouseButton === 3) return;

  setTimeout(() => {
    window.location = link;
  }, 300);
});
