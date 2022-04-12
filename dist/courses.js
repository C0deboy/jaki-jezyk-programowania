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

/***/ "./src/js/courses.js":
/*!***************************!*\
  !*** ./src/js/courses.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../css/courses.scss */ \"./src/css/courses.scss\");\n\ndocument.querySelectorAll('.stars').forEach(function (container) {\n  return showStars(container);\n});\n\nif (document.location.hash.includes(encodeURI('książki'))) {\n  document.querySelector('.books').scrollIntoView();\n} else if (document.location.hash.includes('kursy')) {\n  document.querySelector('.courses').scrollIntoView();\n}\n\nfunction showStars(stars) {\n  var rating = stars.getAttribute('data-rating');\n  var i;\n\n  for (i = rating; i > 1; i--) {\n    var _starDiv = getStarDiv();\n\n    var starFilled = document.createElement('i');\n    starFilled.classList.add('fa', 'fa-star', 'filled');\n\n    _starDiv.append(starFilled);\n\n    stars.append(_starDiv);\n  }\n\n  var starDiv = getStarDiv();\n  var starPartFilled = document.createElement('i');\n  starPartFilled.classList.add('fa', 'fa-star', 'filled', 'not-full');\n  starPartFilled.style.width = \"\".concat(i * 17.66, \"px\");\n  starDiv.append(starPartFilled);\n  stars.append(starDiv);\n}\n\nfunction getStarDiv() {\n  var emptyStarDiv = document.createElement('div');\n  var emptyStar = document.createElement('i');\n  emptyStar.classList.add('fa', 'fa-star');\n  emptyStarDiv.append(emptyStar);\n  return emptyStarDiv;\n}\n\n//# sourceURL=webpack://jaki-jezyk-programowania/./src/js/courses.js?");

/***/ }),

/***/ "./src/css/courses.scss":
/*!******************************!*\
  !*** ./src/css/courses.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://jaki-jezyk-programowania/./src/css/courses.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/courses.js");
/******/ 	
/******/ })()
;