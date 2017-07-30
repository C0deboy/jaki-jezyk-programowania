import { functionClickedAnswer } from './wizard';

class Answers {
  constructor(guide) {
    this.container = document.querySelectorAll('.answers')[0];
    if (guide) {
      const answersContainer = this.container;
      const guideContainer = document.createElement('div');
      guideContainer.classList.add('guide-container');
      answersContainer.append(guideContainer);
      this.container = guideContainer;
    }
  }

  add(answer, imgName, next) {
    const answerElement = document.createElement('div');
    answerElement.classList.add('answer');
    answerElement.next = next;
    answerElement.addEventListener('mouseover', markAnswer);
    answerElement.addEventListener('mouseout', unmarkAnswer);

    const img = document.createElement('img');
    img.setAttribute('src', 'img/' + imgName.toLowerCase().replace(/\s/g, ''));
    img.setAttribute('alt', '');
    answerElement.appendChild(img);

    const shade = document.createElement('div');
    shade.classList.add('shade');
    answerElement.appendChild(shade);

    const text = document.createElement('p');
    text.innerText = answer;
    answerElement.appendChild(text);

    if (next !== false) {
      this.container.appendChild(answerElement);
      answerElement.addEventListener('click', functionClickedAnswer);
    } else {
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', 'technologies/' + answer.toLowerCase().replace(/\s/g, '') + '.html');
      linkElement.setAttribute('target', '_blank');
      linkElement.appendChild(answerElement);
      this.container.appendChild(linkElement);
    }
  }

  addMessage(text, container = 'p') {
    const message = document.createElement(container);
    if (text === 'lub') {
      message.classList.add('or');
    }
    message.innerHTML = text;
    this.container.appendChild(message);
  }

  clear() {
    const answers = this.container.children;

    for (let i = answers.length; i--;) {
      answers[i].classList.add('fadeOut');
      answers[i].style.display = 'none';
      answers[i].remove();
    }
  }
}

let previousColor;

function markAnswer() {
  previousColor = $(this).children('p').css('background-color');
  $(this).children('img').addClass('jumpImg');
  $(this).children('p').css('background-color', '#0a5677');
  $(this).children('.shade').addClass('shadeImg');
}

function unmarkAnswer() {
  $(this).children('img').removeClass('jumpImg');
  $(this).children('p').css('background-color', previousColor);
  $(this).children('.shade').removeClass('shadeImg');
}

export default Answers;
