/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/top-books.js":
/*!*****************************!*\
  !*** ./src/js/top-books.js ***!
  \*****************************/
/***/ (() => {

eval("addImagesForTopList();\n\nfunction addImagesForTopList() {\n  var topBooks = document.querySelector('.top-books');\n  var positionNum = 1;\n\n  if (topBooks) {\n    topBooks.querySelectorAll('a').forEach(function (a) {\n      var bookId = a.href.replace('http://helion.pl/view/9102Q/', '').replace('.htm', '');\n      var book = document.createElement('div');\n      var link = document.createElement('a');\n      var img = document.createElement('img');\n      var position = document.createElement('span');\n      position.innerText = '#' + positionNum++;\n      position.classList.add('position');\n      img.src = \"https://static01.helion.com.pl/global/okladki/181x236/\".concat(bookId, \".jpg\");\n      book.classList.add('book', 'darker-overlay-on-hover');\n      link.href = a.href;\n      book.appendChild(position);\n      link.appendChild(img);\n      book.appendChild(link);\n      topBooks.appendChild(book);\n      a.style.boxShadow = 'none';\n      book.appendChild(a);\n    });\n    topBooks.removeChild(topBooks.querySelector('ol'));\n    topBooks.style.textAlign = 'center';\n  }\n}\n\n//# sourceURL=webpack://jaki-jezyk-programowania/./src/js/top-books.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/top-books.js"]();
/******/ 	
/******/ })()
;