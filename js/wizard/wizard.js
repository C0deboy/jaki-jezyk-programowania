import Question from './question';
import Answers from './answers';
import wizardData from './wizardData';
import Guide from './guide';
import ImageLoader from './imageLoader';

const question = new Question();
const answers = new Answers();

const firstQuestion = 'whyProgramming';
const previousQuestions = [firstQuestion];

const imageLoader = new ImageLoader();
imageLoader.load(() => load(firstQuestion));

const returnBtn = $('.return-btn');

function clickedAnswer() {
  if (previousQuestions.length !== 0) {
    returnBtn.css('visibility', 'visible');
  }

  const next = this.next;

  if (next) {
    previousQuestions.push(next);
  }

  load(next);
}

function load(next) {
  if (previousQuestions.length === 1) {
    returnBtn.css('visibility', 'hidden');
  }

  answers.clear();

  if (next instanceof Guide) {
    question.set('Sugestia:');
    answers.addMessage('Zacznij z:');

    next.guides.forEach((guide, i) => {
      if (i > 0) { answers.addMessage('lub', 'span'); }

      const guides = new Answers(true);

      guide.forEach((technology, j) => {
        if (j % 2 === 0 && j !== 0) { guides.addMessage('lub', 'span'); }

        if (j === 1) { guides.addMessage('Później:<br><i class="then fa fa-long-arrow-down fa-4x" aria-hidden="true"></i>', 'p'); }

        guides.add(technology, technology + '.png', false);
      });
    });
  } else if (typeof next === 'string') {
    question.set(wizardData[next].question);

    wizardData[next].answers.forEach((ans) => {
      answers.add(ans.text, ans.img, ans.next);
    });
  }
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

export { clickedAnswer as functionClickedAnswer };

