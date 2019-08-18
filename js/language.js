require('../css/language.css');
require('./courses.js');

const books = document.querySelectorAll('.book');

books.forEach((book) => {
  const title = book.querySelector('.helion-ksiazkasm4');
  if (!title) return;
  if (title.innerText.startsWith('nak')) {
    book.parentElement.removeChild(book);
  }
});
