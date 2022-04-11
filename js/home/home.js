require('../../css/home/home.scss');
require('../../css/faq.scss');

const requireAll = require.context('./', true, /\.js$/);
requireAll.keys()
  .forEach((filename) => {
    requireAll(filename);
  });

const hljs = require('highlight.js');

hljs.highlightAll();
