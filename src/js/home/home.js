require('../../css/home/home.scss');

const requireAll = require.context('./', true, /\.js$/);
requireAll.keys()
  .forEach((filename) => {
    requireAll(filename);
  });

const hljs = require('highlight.js');

hljs.highlightAll();
