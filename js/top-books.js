
addImagesForTopList();


function addImagesForTopList() {
  const topBooks = document.querySelector('.top-books');
  let positionNum = 1;
  if (topBooks) {
    topBooks.querySelectorAll('a').forEach((a) => {
      const bookId = a.href.replace('http://helion.pl/view/9102Q/', '').replace('.htm', '');
      const book = document.createElement('div');
      const link = document.createElement('a');
      const img = document.createElement('img');
      const position = document.createElement('span');
      position.innerText = '#' + positionNum++;
      position.classList.add('position');
      img.src = `https://static01.helion.com.pl/global/okladki/181x236/${bookId}.jpg`;
      book.classList.add('book');
      link.href = a.href;
      book.appendChild(position);
      link.appendChild(img);
      book.appendChild(link);
      topBooks.appendChild(book);
      a.style.boxShadow = 'none';
      book.appendChild(a);
    });
    topBooks.removeChild(topBooks.querySelector('ol'));
    topBooks.style.textAlign = 'center';
  }
}
