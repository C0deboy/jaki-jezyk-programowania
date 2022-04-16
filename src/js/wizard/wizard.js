import ImageLoader from './ImageLoader';
import { NextQuestion } from './wizardData';

require('../../css/wizard.scss');

const firstQuestion = new NextQuestion('whyProgramming');
const previousQuestions = [firstQuestion];

ImageLoader.load(() => load(firstQuestion));

const returnBtn = document.querySelector('.return-btn');

function loadNextQuestionAndRememberPrevious() {
  const { next } = this;

  previousQuestions.push(next);

  load(next);
}

function load(next) {
  if (previousQuestions.length === 1) {
    returnBtn.style.visibility = 'hidden';
  } else {
    returnBtn.style.visibility = 'visible';
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

returnBtn.addEventListener('click', loadPreviousQuestion);
returnBtn.addEventListener('mouseleave', (e) => e.target.blur());

window.addEventListener('keydown', (e) => {
  if ((e.key.toLowerCase() === 'backspace')) {
    loadPreviousQuestion();
  }
});

const againBtn = document.querySelector('.again-btn');
againBtn.addEventListener('click', () => load(firstQuestion));
againBtn.addEventListener('mouseleave', (e) => e.target.blur());

window.addEventListener('keydown', (e) => {
  if ((e.key.toLowerCase() === 'escape')) {
    load(firstQuestion);
  }
});

export { loadNextQuestionAndRememberPrevious };
