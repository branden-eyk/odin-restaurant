/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Odin_Face_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Odin-Face.jpg */ \"./src/Odin-Face.jpg\");\n\n\nfunction displayHome (){\n    const contentDiv = document.querySelector('.content');\n    contentDiv.append(createHeader(), createContent());\n}\n\nfunction createHeader(){\n    const header = document.createElement('div');\n    header.classList.add('header');\n    \n    const logo = document.createElement('img');\n    logo.src = _Odin_Face_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    logo.alt = 'Odin';\n    logo.classList.add('header__logo');\n\n    const title = document.createElement('h1');\n    title.innerText = \"Odin's Eatery of The Gods\"\n    title.classList.add('header__title');\n\n    header.append(logo, title);\n    return header;\n}\n\nfunction createContent(){\n    const content = document.createElement('div');\n    content.classList.add('content');\n\n    const aboutUs = document.createElement('p');\n    aboutUs.classList.add('content__subsection');\n    aboutUs.innerText = \"Dare you, mortal, eat of the nectar of the gods? Dost thou possess the hubris that thou thinkest thee worthy to eat of the food that sustaineth thy masters? Then tarry not and cometh thee to Odin's Eatery of The Gods. Where the game ceases never to be fresh, and the mead dost eternally overfloweth.\"; \n\n    const hours = document.createElement('div');\n    hours.classList.add('content__subsection');\n    const hoursSubtitle = document.createElement('h2');\n    hoursSubtitle.classList.add('content__subtitle');\n    hoursSubtitle.innerText = 'Hours';\n    const hoursList = document.createElement('ul');\n    hoursList.classList.add('content__list');\n    const hoursArray = ['Sunnandæg: 8am - 8pm', 'Monandæg: 9am - 9pm', 'Tiwesdæg: 9am - 9pm', 'Wodnesdæg: 6am - 11pm', 'Ðunresdæg: 8am - 10pm', 'Frigedæg: 8am - 10pm', 'Sæternesdæg: 8am - 10pm'];\n    for (const day of hoursArray) {\n        const item = document.createElement('li');\n        item.innerText = day;\n        hoursList.appendChild(item);\n    }\n    hours.append(hoursSubtitle, hoursList);\n\n    const location = document.createElement('div');\n    location.classList.add('content__subsection');\n    const locationSubtitle = document.createElement('h2');\n    locationSubtitle.classList.add('content__subtitle');\n    locationSubtitle.innerText = 'Location';\n    const locationText = document.createElement('p');\n    locationText.innerText = '246 Gungnir Ave., Valhalla, Asgard';\n    location.append(locationSubtitle, locationText);\n    \n    content.append(aboutUs, hours, location);\n    return content;\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHome);\n\n//# sourceURL=webpack://odin-restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/Odin-Face.jpg":
/*!***************************!*\
  !*** ./src/Odin-Face.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"83facb5520593c847b5d.jpg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/Odin-Face.jpg?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;