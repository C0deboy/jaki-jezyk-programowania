// SCSS
require('../../css/home/home.scss');

// LIBS
require('./typed');
const hljs = require('highlight.js/lib/core');
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('cpp', require('highlight.js/lib/languages/cpp'));
hljs.registerLanguage('php', require('highlight.js/lib/languages/php'));
hljs.registerLanguage('java', require('highlight.js/lib/languages/java'));
hljs.registerLanguage('ruby', require('highlight.js/lib/languages/ruby'));
hljs.registerLanguage('python', require('highlight.js/lib/languages/python'));
hljs.registerLanguage('c', require('highlight.js/lib/languages/c'));
hljs.registerLanguage('swift', require('highlight.js/lib/languages/swift'));
hljs.registerLanguage('csharp', require('highlight.js/lib/languages/csharp'));
hljs.registerLanguage('r', require('highlight.js/lib/languages/r'));
hljs.registerLanguage('kotlin', require('highlight.js/lib/languages/kotlin'));
hljs.registerLanguage('scala', require('highlight.js/lib/languages/scala'));

hljs.highlightAll();

// CUSTOM
require('./cookiesInfo');
require('./laptop');
require('./survey');
require('./typing');
