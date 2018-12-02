import wizardData from './wizardData';
import Answers from './answers';
import Question from './question';

const answers = new Answers();
const question = new Question();

class NextQuestion {
  constructor(key) {
    this.key = key;
  }

  show() {
    answers.clear();

    question.set(wizardData[this.key].question);

    wizardData[this.key].answers.forEach((ans) => {
      answers.add(ans.text, ans.img, ans.next);
    });
  }
}

export default NextQuestion;
