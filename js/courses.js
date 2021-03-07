require('../css/courses.css');

document.querySelectorAll('.stars')
  .forEach((container) => showStars(container));

if (document.location.hash.includes(encodeURI('książki'))) {
  document.querySelector('.books').scrollIntoView();
} else if (document.location.hash.includes('kursy')) {
  document.querySelector('.courses').scrollIntoView();
}

function showStars(stars) {
  const rating = stars.getAttribute('data-rating');

  let i;
  for (i = rating; i > 1; i--) {
    const starDiv = getStarDiv();
    const starFilled = document.createElement('i');
    starFilled.classList.add('fa', 'fa-star', 'filled');
    starDiv.append(starFilled);
    stars.append(starDiv);
  }

  const starDiv = getStarDiv();
  const starPartFilled = document.createElement('i');
  starPartFilled.classList.add('fa', 'fa-star', 'filled', 'not-full');
  starPartFilled.style.width = `${i * 17.66}px`;
  starDiv.append(starPartFilled);

  stars.append(starDiv);
}

function getStarDiv() {
  const emptyStarDiv = document.createElement('div');
  const emptyStar = document.createElement('i');
  emptyStar.classList.add('fa', 'fa-star');
  emptyStarDiv.append(emptyStar);
  return emptyStarDiv;
}
