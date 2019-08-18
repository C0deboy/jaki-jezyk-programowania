require('../../css/home/home.css');


const requireAll = require.context('./', true, /\.js$/);
requireAll.keys().forEach((filename) => {
  requireAll(filename);
});

const hljs = require('highlight.js');

hljs.initHighlightingOnLoad();

require('../../promotion/promotion.js');
