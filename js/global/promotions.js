const date = new Date();

const promotionStart = new Date('2018-01-18');
const promotionEnd = new Date('2018-01-28');
const promotionNumber = 4301;
const href = new URL('http://helion.pl/page/9102Q/promocja/' + promotionNumber);
// const promotionAd = `Do końca tygodnia jest <a href="${href}" target="_blank">promocja</a>  -30% na książki w ${href.hostname}. Zobacz książki, które warto kupić.`;

const promotionAd = 'Biorę udział w konkursie na stworzenie gry w JS (strategia turowa) do 20KB. Mogę liczyć na twój głos? ;) Wystarczy polubić filmik z demem na <a href=" https://youtu.be/3Nbu50KgFbw" target="_blank">YouTube</a>.';

date.setHours(0, 0, 0, 0);
promotionEnd.setHours(0, 0, 0, 0);
promotionStart.setHours(0, 0, 0, 0);

// if (date >= promotionStart && date <= promotionEnd) {
//   window.promotion = true;
//
//   const promotionLink = document.querySelector('.promotions-link');
//   if (promotionLink) {
//     promotionLink.href = href;
//     let fromTo;
//     if (promotionStart.valueOf() !== promotionEnd.valueOf()) {
//       fromTo = 'od ' + promotionStart.toLocaleDateString() + ' do ' + promotionEnd.toLocaleDateString();
//     }
//     else {
//       fromTo = 'tylko dziś';
//     }
//     promotionLink.innerHTML = 'Promocja ' + fromTo + '<br> <img src="/img/promotions/promotion.png"/>';
//   }
//
//   document.querySelectorAll('.book a').forEach((link) => {
//     link.hostname = href.hostname;
//   });
// }

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

// if (window.promotion) {
if (true) {
  const booksBtn = document.querySelector('.books-btn');
  if (booksBtn) {
    const promotionSign = document.createElement('p');
    promotionSign.innerHTML = promotionAd;
    promotionSign.classList.add('promotion-sign');
    document.body.appendChild(promotionSign);

    positionPromotionSign(booksBtn, promotionSign);
    window.addEventListener('resize', () => positionPromotionSign(booksBtn, promotionSign));
  }
}

document.querySelectorAll('.helion-ksiazkasm4 a:first-of-type').forEach((link) => {
  let host = 'helion.pl';

  const nextLink = link.parentElement.querySelector('a:last-of-type');

  if (window.promotion && href.hostname === 'ebookpoint.pl') {
    host = href.hostname;
    nextLink.hostname = 'helion.pl';
    nextLink.innerText = 'Wersja papierowa';
  } else {
    nextLink.style.display = 'none';
  }
  link.innerText = 'Kup na ' + host;
});

document.querySelectorAll('.helion-ksiazkasm4 a').forEach((link) => {
  link.classList.add('main-btn');
});
