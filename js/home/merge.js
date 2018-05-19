const requireAll = require.context('./', true, /\.js$/);
requireAll.keys().forEach((filename) => {
  requireAll(filename);
});
require('../../promotion/promotion');

const hljs = require('highlight.js');

hljs.initHighlightingOnLoad();