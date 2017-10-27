
class AnswerElementBuilder {
  constructor() {
    this.answerElement = document.createElement('button');
    this.answerElement.classList.add('answer');
    this.answerElement.addEventListener('mouseover', markAnswer);
    this.answerElement.addEventListener('focus', markAnswer);
    this.answerElement.addEventListener('mouseout', unmarkAnswer);
    this.answerElement.addEventListener('blur', unmarkAnswer);
    this.answerElement.setAttribute('tabindex', '0');
  }

  setNextAnswerReference(nextAnswerReference) {
    this.answerElement.next = nextAnswerReference;
  }

  appendImage(imgName) {
    const img = document.createElement('img');
    img.setAttribute('src', '/img/' + escaped(imgName));
    img.setAttribute('alt', '');
    this.answerElement.appendChild(img);
  }

  appendShade() {
    const shade = document.createElement('div');
    shade.classList.add('shade');
    this.answerElement.appendChild(shade);
  }

  appendAnswerText(answer) {
    const text = document.createElement('p');
    text.innerText = answer.replace(/-/g, ' ');
    this.answerElement.appendChild(text);
  }

  onClick(functionReference) {
    this.answerElement.addEventListener('click', functionReference);
  }

  getAnswerElement() {
    return this.answerElement;
  }

  makeItLinkToTechnology(answer) {
    const linkToTechnology = document.createElement('a');
    linkToTechnology.setAttribute('href', '/technologie/' + escaped(answer));
    linkToTechnology.setAttribute('target', '_blank');
    linkToTechnology.appendChild(this.answerElement);
    this.answerElement = linkToTechnology;
  }
}
function escaped(e) {
  return e.toLowerCase().replace(/[-]/g, '').replace('#', 'sharp');
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

export default AnswerElementBuilder;
