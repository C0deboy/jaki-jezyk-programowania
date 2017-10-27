import { loadNextQuestionAndRememberPrevious } from './wizard';
import AnswerElementBuilder from './AnswerElementBuilder';

const answersContainer = document.querySelectorAll('.answers')[0];

class Answers {
  constructor() {
    this.container = answersContainer;
  }

  createWrapperForGuide() {
    const guideContainer = document.createElement('div');
    guideContainer.classList.add('guide-container');
    answersContainer.append(guideContainer);
    this.container = guideContainer;
  }

  add(answer, imgName, nextQuestionReference) {
    const answerBuilder = new AnswerElementBuilder();

    answerBuilder.appendImage(imgName);

    answerBuilder.appendShade();

    answerBuilder.appendAnswerText(answer);

    if (nextQuestionReference !== null) {
      answerBuilder.setNextAnswerReference(nextQuestionReference);
      answerBuilder.onClick(loadNextQuestionAndRememberPrevious);
    } else {
      answerBuilder.makeItLinkToTechnology(answer);
    }

    this.container.appendChild(answerBuilder.getAnswerElement());
  }

  addMessage(text) {
    const message = document.createElement('p');
    if (text === 'lub') {
      message.classList.add('or');
    }
    message.innerHTML = text;
    this.container.appendChild(message);
  }

  clear() {
    const answersToBeRemoved = this.container.children;

    for (let i = answersToBeRemoved.length; i--;) {
      answersToBeRemoved[i].classList.add('fadeOut');
      answersToBeRemoved[i].style.display = 'none';
      answersToBeRemoved[i].remove();
    }
  }

  endGuideWrapper() {
    this.container = answersContainer;
  }
}

export default Answers;
