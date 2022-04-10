require('../../css/home/home.css');
require('../../css/faq.css');

const requireAll = require.context('./', true, /\.js$/);
requireAll.keys()
  .forEach((filename) => {
    requireAll(filename);
  });

const hljs = require('highlight.js');

hljs.highlightAll();
