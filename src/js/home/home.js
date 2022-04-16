import { Modal } from 'bootstrap';

// SCSS
require('../../css/home/home.scss');

// CUSTOM
require('./cookiesInfo');
require('./laptop');
require('./typing');

if (document.location.hash === '#ankieta') {
  const survey = new Modal(document.getElementById('survey'));
  survey.toggle();
}
