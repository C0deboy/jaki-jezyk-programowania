import ImageLoader from './ImageLoader';
import { NextQuestion } from './wizardData';


const firstQuestion = new NextQuestion('whyProgramming');
const previousQuestions = [firstQuestion];

const imageLoader = new ImageLoader();
imageLoader.load(() => load(firstQuestion));

const returnBtn = $('.return-btn');

function loadNextQuestionAndRememberPrevious() {
  const next = this.next;

  previousQuestions.push(next);

  load(next);
}

function load(next) {
  if (previousQuestions.length === 1) {
    returnBtn.css('visibility', 'hidden');
  } else {
    returnBtn.css('visibility', 'visible');
  }

  next.show();
}

function loadPreviousQuestion() {
  if (previousQuestions.length !== 1) {
    previousQuestions.pop();
  } else {
    return;
  }
  const previous = previousQuestions[previousQuestions.length - 1];
  load(previous);
}

returnBtn.on('click', loadPreviousQuestion);
returnBtn.on('mouseleave', e => e.target.blur());

$(document).on('keydown', (e) => {
  if ((e.which === 8)) { // backspace
    loadPreviousQuestion();
  }
});

const againBtn = $('.again-btn');
againBtn.on('click', () => load(firstQuestion));
againBtn.on('mouseleave', e => e.target.blur());

$(document).on('keydown', (e) => {
  if ((e.which === 27)) { // esc
    load(firstQuestion);
  }
});

export { loadNextQuestionAndRememberPrevious };

