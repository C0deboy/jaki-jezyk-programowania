const cookiesAcceptedCookieName = 'cookies-accepted';

if (localStorage.getItem(cookiesAcceptedCookieName) !== '1') {
  $('.cookies-info').css('display', 'flex');
}

$('.close-cookies-info').on('click', () => {
  $('.cookies-info').fadeOut();
  localStorage.setItem(cookiesAcceptedCookieName, '1');
});
