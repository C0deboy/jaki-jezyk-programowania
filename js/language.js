$(() => {
  const languageLogo = $('.language-logo');
  window.addEventListener('resize', () => { languageLogo.height(languageLogo.width()); });
  languageLogo.height(languageLogo.width());
});
