require('../css/language.css');
require('./courses.js');

const books = document.querySelectorAll('.book');

books.forEach((book) => {
  const title = book.querySelector('.helion-ksiazkasm4');
  if (!title) return;
  if (title.innerText.startsWith('nak')) {
    book.parentElement.removeChild(book);
  }
  const bookImg = book.querySelector('img');
  if (bookImg.src.endsWith('brak.jpg')) {
    const bookId = bookImg.id.replace('przod', '');
    bookImg.src = bookImg.src.replace('helion-brak', bookId);
  }
});
