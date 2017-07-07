const requireAll = require.context('./', true, /\.js$/);
requireAll.keys().forEach(function(filename)  {
  requireAll(filename);
});
