const promotion = {
  start: new Date('2018-04-23'),
  end: new Date('2018-04-25'),
  number: '4812',
  discount: '2 książki w cenie 1',
  host: 'helion.pl',
  img: true,
};

const customMessage = '';
const promotionURL = new URL(`http://${promotion.host}/page/9102Q/promocja/${promotion.number}`);

let promotionAdText = `Na ${promotionURL.hostname} jest <a href="${promotionURL}" target="_blank">promocja</a> ${promotion.discount}. Zobacz książki, które warto kupić.".`;

if (isPromotionActive()) {
  if (customMessage !== '') {
    promotionAdText = customMessage;
  } else {
    createPromotionAd();
  }
  createPromotionMessagePopup();
}

modifyBookButtons();
styleBookButtons();
addImagesForTopList();


function isPromotionActive() {
  const currentDate = new Date();

  currentDate.setHours(0, 0, 0, 0);
  promotion.end.setHours(0, 0, 0, 0);
  promotion.start.setHours(0, 0, 0, 0);

  return currentDate >= promotion.start && currentDate <= promotion.end;
}


function createPromotionMessagePopup() {
  const booksBtn = document.querySelector('.books-btn');
  if (booksBtn) {
    const promotionSign = document.createElement('p');
    promotionSign.innerHTML = promotionAdText;
    promotionSign.classList.add('promotion-sign');
    document.body.appendChild(promotionSign);

    positionPromotionSign(booksBtn, promotionSign);
    window.addEventListener('resize', () => positionPromotionSign(booksBtn, promotionSign));
  }
}

function positionPromotionSign(booksBtn, promotionSign) {
  const booksBtnRect = booksBtn.getBoundingClientRect();
  const left = (booksBtnRect.left - promotionSign.offsetWidth) + +(booksBtnRect.width / 4);

  if (document.documentElement.clientWidth <= 768) {
    promotionSign.style.right = '25px';
  } else {
    promotionSign.style.left = left + 'px';
    promotionSign.style.right = '';
  }
}

function createPromotionAd() {
  const promotionLink = document.querySelector('.promotions-link');
  if (promotionLink) {
    promotionLink.href = promotionURL;
    let to;
    if (promotion.start.valueOf() !== promotion.end.valueOf()) {
      to = `do ${promotion.end.toLocaleDateString('pl-Pl')}`;
    } else {
      to = 'tylko dziś';
    }
    promotionLink.innerHTML = 'Promocja ' + to;
    if (promotion.img) {
      promotionLink.innerHTML += '<br> <img src="/promocje/promotion.png"/>';
    }
  }
  changeBookLinksHost();
}

function changeBookLinksHost() {
  document.querySelectorAll('.book a').forEach((link) => {
    link.hostname = promotionURL.hostname;
  });
}

function modifyBookButtons() {
  document.querySelectorAll('.helion-ksiazkasm4 a:first-of-type').forEach((link) => {
    let host = 'helion.pl';

    const nextLink = link.parentElement.querySelector('a:last-of-type');

    if (isPromotionActive() && promotionURL.hostname === 'ebookpoint.pl') {
      host = promotionURL.hostname;
      nextLink.hostname = 'helion.pl';
      nextLink.innerText = 'Wersja papierowa';
    } else {
      nextLink.style.display = 'none';
    }
    link.innerText = 'Kup na ' + host;
  });
}

function styleBookButtons() {
  document.querySelectorAll('.helion-ksiazkasm4 a').forEach((link) => {
    link.classList.add('main-btn');
  });
}

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
      book.appendChild(a);
      // a.parentElement.insertBefore(book, a);
    });
    topBooks.removeChild(topBooks.querySelector('ol'));
    topBooks.style.textAlign = 'center';
  }
}
