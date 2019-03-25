import $ from 'jquery';

window.jQuery = $;
window.$ = $;

require('../../css/global/global.css');

require('bootstrap');
require('./forEachPolyfill');
require('./parentElementAppendPolyfill');
require('./nav');
require('./tooltips');
require('../technologies-list');
