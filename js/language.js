$(() => {
  const languageLogo = $('.language-logo');
  document.addEventListener('resize', () => { languageLogo.height(languageLogo.width()); });
  languageLogo.height(languageLogo.width());
});
