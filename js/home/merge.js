const requireAll = require.context('./', true, /\.js$/);
requireAll.keys().forEach((filename) => {
  requireAll(filename);
});

require('../extendTechnologies');