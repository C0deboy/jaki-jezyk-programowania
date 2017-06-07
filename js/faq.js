$(() => {
  function toggleAnswer() {
    const answer = $(this).next();
    const arrow = $(this).find('.fa-arrow-down');

    if (answer.is(':hidden')) {
      answer.slideDown();
      arrow.addClass('rotation');
      arrow.removeClass('rotationBack');
    } else {
      answer.slideUp();
      arrow.addClass('rotationBack');
      arrow.removeClass('rotation');
    }
  }
  const question = $('.question');
  question.on('click', toggleAnswer);
  question.on('keypress', toggleAnswer);
})();
