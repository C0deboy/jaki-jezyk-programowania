const cookiesAcceptedCookieName = 'cookies-accepted';


if (getCookie(cookiesAcceptedCookieName) === '1') {
  $('.cookies-info').hide();
}

$('.close-cookies-info').on('click', () => {
  $('.cookies-info').fadeOut();
  console.log(getCookie(cookiesAcceptedCookieName));
  setCookie(cookiesAcceptedCookieName, '1', 30);
});

function setCookie(nae, value, days) {
  let expires;
  if (days) {
    const data = new Date();
    data.setTime(data.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + data.toGMTString();
  } else {
    expires = '';
  }
  document.cookie = name + '=' + value + expires + '; path=/';
}

function getCookie(name) {
  if (document.cookie !== '') {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
      const cookieName = cookies[i].split('=')[0];
      const cookieValue = cookies[i].split('=')[1];
      if (cookieName === name) {
        return decodeURI(cookieValue);
      }
    }
  }
}
