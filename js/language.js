require('../css/language.css');
require('./courses.js');

const books = document.querySelectorAll('.book');

books.forEach((book) => {
  const title = book.querySelector('.helion-ksiazkasm4');
  if (!title) return;
  if (title.innerText.startsWith('nak')) {
    book.parentElement.removeChild(book);
  }
  const bookId = book.getAttribute('data-book-id');
  const bookLink = document.createElement('a');
  bookLink.style.color = '#fff';
  bookLink.target = '_blank';
  bookLink.href = `https://helion.pl/view/9102Q/${bookId}.htm`;
  wrap(book, bookLink);
});

function wrap(el, wrapper) {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
}
