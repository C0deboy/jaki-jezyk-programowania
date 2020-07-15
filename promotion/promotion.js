const promotions = [
  {
    start: new Date('2020-07-14'),
    end: new Date('2020-07-20'),
    number: '6094',
    host: 'helion.pl',
    img: '/promotion/p.jpg',
    popup: true,
    message: 'Promocja w [Helion] - 2 książki w cenie 1. Wolisz video kursy? Zajrzyj na <a href="https://click.linksynergy.com/fs-bin/click?id=0Bz3A2CPbI4&offerid=358574.1389&subid=0&type=4" target="_blank">Udemy</a>',
    adHeader: 'Promocja w [Helion] - 2 książki w cenie 1. Wolisz video kursy? Zajrzyj na <a href="https://click.linksynergy.com/fs-bin/click?id=0Bz3A2CPbI4&offerid=358574.1389&subid=0&type=4" target="_blank">Udemy</a>',
    adContent: '',
  },
];

const customMessage = '';

promotions.forEach((promotion, i) => {
  if (isPromotionActive(promotion)) {

    let url = `http://${promotion.host}/page/9102Q/kategorie/promocja-2za1`;
    // let url = `http://${promotion.host}/page/9102Q/promocja/${promotion.number}`;

    promotion.url = new URL(url);

    promotion.message = appendLinkToMessage(promotion.message, promotion.url);
    promotion.adHeader = appendLinkToMessage(promotion.adHeader, promotion.url);

    if (customMessage !== '') {
      promotion.message = customMessage;
    } else {
      showPromotionAd(promotion, i);
    }

    if (promotion.popup && localStorage.getItem('ad-closed') !== '1') {
      createPromotionMessagePopup(promotion);
    }
  }
});

function appendLinkToMessage(message, url) {
  return message.replace(/\[(.*?)]/, `<a href="${url}" target="_blank">$1</a>`);
}

function isPromotionActive(promotion) {
  const currentDate = new Date();

  currentDate.setHours(0, 0, 0, 0);
  promotion.end.setHours(0, 0, 0, 0);
  promotion.start.setHours(0, 0, 0, 0);

  return currentDate >= promotion.start && currentDate <= promotion.end;
}

function createPromotionMessagePopup(promotion) {
  const booksBtn = document.querySelector('.books-btn');
  if (booksBtn) {
    const promotionPopup = document.createElement('p');
    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-ad');
    closeBtn.innerHTML = '<i class="fa fa-times"></i>';
    closeBtn.setAttribute('title', 'Nie pokazuj');
    closeBtn.setAttribute('data-toggle', 'tooltip');
    closeBtn.setAttribute('data-placement', 'right');
    closeBtn.addEventListener('click', () => closeAd(promotionPopup));

    promotionPopup.innerHTML = promotion.message;
    promotionPopup.classList.add('promotion-popup', 'box-effect');
    promotionPopup.appendChild(closeBtn);
    document.body.appendChild(promotionPopup);
    positionPromotionPopup(booksBtn, promotionPopup);
    window.addEventListener('resize', () => positionPromotionPopup(booksBtn, promotionPopup));
  }
}

function closeAd(ad) {
  localStorage.setItem('ad-closed', '1');
  ad.style.display = 'none';
}

function positionPromotionPopup(booksBtn, popup) {
  const booksBtnRect = booksBtn.getBoundingClientRect();
  const left = (booksBtnRect.left - popup.offsetWidth) + +(booksBtnRect.width / 4);

  if (document.documentElement.clientWidth <= 992) {
    popup.style.right = '25px';
  } else {
    popup.style.left = left + 'px';
    popup.style.right = '';
  }
}

function getWhenEndMessage(promotion) {
  let to;
  if (promotion.start.valueOf() !== promotion.end.valueOf()) {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    if (promotion.end.valueOf() === currentDate.valueOf()) {
      to = 'Ostatni dzień promocji!'
    } else {
      to = `Promocja do ${promotion.end.toLocaleDateString('pl-Pl')}`;
    }
  } else {
    to = 'Promocja tylko dziś!';
  }
  return '(' + to + ')';
}

function cloneAd(promotionLink, i) {
  const newPromotionLink = promotionLink.cloneNode(true);
  promotionLink.parentElement.insertBefore(newPromotionLink, promotionLink);
  newPromotionLink.classList.add(`link-${i}`);
  promotionLink = document.querySelector(`.promotion.link-${i}`);
  return promotionLink;
}

function showPromotionAd(promotion, i) {
  let promotionLink = document.querySelector('.promotion');

  if (promotionLink) {
    promotion.popup = false;
    if (i > 0) {
      promotionLink = cloneAd(promotionLink, i);
    }
    promotionLink.style.display = 'inline-block';

    const header = promotionLink.querySelector('.promotion-header');
    header.innerHTML = promotion.adHeader;

    const promoDesc = promotionLink.querySelector('.promotion-content');

    let desc = promotion.adContent;

    if (document.title === 'devcave.pl' && promotion.url.hostname === 'helion.pl') {
      if (desc !== '') desc += '<br><br>';
      desc += 'Zobacz książki, które warto kupić w <a href="/moja-biblioteka">mojej bibliotece</a>';
    }
    promoDesc.innerHTML = desc;

    const imageLink = document.createElement('a');
    imageLink.href = promotion.url.toString();
    const img = document.createElement('img');
    img.src = promotion.img;

    imageLink.appendChild(img);
    promoDesc.appendChild(imageLink);
    const endsAt = document.createElement('span');
    endsAt.innerText = getWhenEndMessage(promotion);
    promotionLink.appendChild(endsAt);
  }
}
