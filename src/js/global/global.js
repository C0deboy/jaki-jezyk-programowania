import $ from 'jquery';

window.jQuery = $;
window.$ = $;

// SCSS
require('../../css/global/global.scss');

// LIBS
require('bootstrap');

// POLYFILLS
require('./forEachPolyfill');
require('./parentElementAppendPolyfill');

// CUSTOM
require('./nav');
require('./tooltips');
require('../technologies-list');
