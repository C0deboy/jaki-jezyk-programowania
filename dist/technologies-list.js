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

/***/ "./src/js/technologies-list.js":
/*!*************************************!*\
  !*** ./src/js/technologies-list.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../css/technologies-list.scss */ \"./src/css/technologies-list.scss\");\n\nvar langElements = document.querySelectorAll('.lang');\nwindow.addEventListener('touchstart', function onFirstHover() {\n  document.querySelectorAll('.lang-link').forEach(function (link) {\n    link.addEventListener('click', disableLink);\n  });\n  window.DOUBLE_CLICK_ENABLED = true;\n  window.removeEventListener('touchstart', onFirstHover, false);\n}, false);\nlangElements.forEach(function (lang) {\n  var subs = lang.querySelectorAll('.sub');\n  lang.addEventListener('mouseover', function () {\n    return showSubTechnologies(subs, lang);\n  });\n  lang.addEventListener('mouseout', function () {\n    return hideSubTechnologies(subs, lang);\n  });\n});\n\nfunction showSubTechnologies(subs, lang) {\n  if (subs.length !== 0) {\n    subs.forEach(function (sub) {\n      sub.style.height = 60 + 'px';\n      sub.style.width = 60 + 'px';\n      sub.classList.add('backToPosition');\n    });\n  }\n\n  if (subs.length > 4 && window.matchMedia('(max-width: 992px)').matches) {\n    lang.style.marginBottom = '50px';\n  }\n}\n\nfunction hideSubTechnologies(subs, lang) {\n  if (subs.length !== 0) {\n    subs.forEach(function (sub) {\n      sub.style.height = 35 + 'px';\n      sub.style.width = 35 + 'px';\n      sub.classList.remove('backToPosition');\n    });\n  }\n\n  if (subs.length > 4 && window.matchMedia('(max-width: 992px)').matches) {\n    lang.style.marginBottom = '0';\n  }\n\n  if (window.DOUBLE_CLICK_ENABLED) {\n    lang.querySelectorAll('.lang-link').forEach(function (link) {\n      link.addEventListener('click', disableLink);\n    });\n  }\n}\n\nfunction disableLink(e) {\n  e.preventDefault();\n  this.removeEventListener('click', disableLink);\n}\n\n//# sourceURL=webpack://jaki-jezyk-programowania/./src/js/technologies-list.js?");

/***/ }),

/***/ "./src/css/technologies-list.scss":
/*!****************************************!*\
  !*** ./src/css/technologies-list.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://jaki-jezyk-programowania/./src/css/technologies-list.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/technologies-list.js");
/******/ 	
/******/ })()
;