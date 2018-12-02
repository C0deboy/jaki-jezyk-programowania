import Question from './Question';
import Answers from './Answers';

const question = new Question();
const answers = new Answers();

class Guide {
  constructor(...propositions) {
    this.guides = [];
    if (propositions !== undefined) {
      propositions.forEach((proposition) => {
        this.guides.push(proposition.toString().split(' '));
      });
    }
  }

  show() {
    answers.clear();

    question.set('Sugestia:');
    answers.addMessage('Zacznij z:');

    this.guides.forEach((guide, guideIndex) => {
      if (guideIndex > 0) {
        answers.addMessage('lub', 'span');
      }

      answers.createWrapperForGuide();

      guide.forEach((element) => {
        if (element === 'or') {
          answers.addMessage('lub');
        } else if (element === '->') {
          answers.addMessage('Później:<br><i class="then fa fa-long-arrow-down fa-4x" aria-hidden="true"></i>');
        } else {
          answers.add(element, element + '.png', null);
        }
      });

      answers.endGuideWrapper();
    });
  }
}

export default Guide;
