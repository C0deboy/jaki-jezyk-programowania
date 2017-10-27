class Question {
  constructor() {
    this.element = document.querySelector('.question');
  }
  set(question) {
    this.element.innerText = question;
  }
}

export default Question;
