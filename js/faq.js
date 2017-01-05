$('.question').click(function () {
  if ($(this).next().is( ":hidden" ) ) {
     $(this).next().slideDown();
     $(this).find('.fa-arrow-down').addClass('rotation');
     $(this).find('.fa-arrow-down').removeClass('rotationBack');
  }
  else {
    $(this).next().slideUp();
    $(this).find('.fa-arrow-down').addClass('rotationBack');
    $(this).find('.fa-arrow-down').removeClass('rotation');
  }
});

$('.answer').click(function () {
  $(this).slideUp();
  $(this).find('.fa-arrow-down').addClass('rotationBack');
  $(this).find('.fa-arrow-down').removeClass('rotation');
});
