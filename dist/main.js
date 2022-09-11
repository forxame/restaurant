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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ About)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\nfunction About() {\n    const main = document.querySelector(\"main\");\n\n    const contact = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createHeader)(\"Contact\");\n    const phoneNo = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createParagraph)(\"*403-104\");\n    const container1 = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createContainer)(contact, phoneNo);\n\n    const scheduleHeader = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createHeader)(\"Schedule\");\n    const workDays = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createParagraph)(\"Mon - Fri: 8am - 10pm\");\n    const freeDays = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createParagraph)(\"Sat - Sun: 10am - 5pm\");\n    const container2 = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createContainer)(scheduleHeader, workDays, freeDays);\n\n    const locationHeader = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createHeader)(\"Location\");\n    const locationText = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createParagraph)(\"11 Berry West, Joremy City, Leonda\");\n    const container3 = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createContainer)(locationHeader, locationText);\n\n    main.innerHTML = null;\n    setMainFocusedClass(main); // only for main container\n    setFocusedBtn();\n    main.append(container1, container2, container3);\n}\n\nfunction setMainFocusedClass(main) {\n    if (main.classList.contains(\"home\")) {\n        main.classList.replace(\"home\", \"about\");\n    } else {\n        main.classList.replace(\"menu\", \"about\");\n    }\n}\n\nfunction setFocusedBtn() {\n    const home = document.querySelector(\"#home\");\n    const menu = document.querySelector(\"#menu\");\n    const about = document.querySelector(\"#about\");\n\n    if (about.classList.length == 0) {\n        about.classList.toggle(\"active\");\n        if (menu.classList.contains(\"active\")) {\n            menu.classList.remove(\"active\");\n        } else {\n            home.classList.remove(\"active\");\n        }\n    }\n}\n\n//# sourceURL=webpack://restaurant/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContainer\": () => (/* binding */ createContainer),\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader),\n/* harmony export */   \"createParagraph\": () => (/* binding */ createParagraph),\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\nfunction Home() {\n    const main = document.querySelector(\"main\");\n\n\n    const welcomeText = createParagraph(`WELCOME to Rally's Buck! Best restaurant in town\n                                        with a big variety of dishes that you can choose from.\n                                        Give it a try and you won't regret the experience.`);\n    const container1 = createContainer(welcomeText);\n\n\n    main.innerHTML = null;\n    setMainFocusedClass(main); // only for main container\n    setFocusedBtn();\n    main.append(container1);\n}\n\nfunction createParagraph(text) {\n    const p = document.createElement(\"p\");\n    p.textContent = text;\n    p.className = \"about container-text\";\n    return p;\n}\n\nfunction createHeader(text) {\n    const h2 = document.createElement(\"h2\");\n    h2.textContent = text;\n    h2.className = \"about container-title\";\n\n    return h2;\n}\n\nfunction createContainer(...child) {\n    const container = document.createElement(\"div\");\n    container.classList.add(\"even-columns\");\n    for (let i = 0; i < child.length; i++) {\n        container.appendChild(child[i]);\n    }\n\n    return container;\n}\n\nfunction setMainFocusedClass(main) {\n    if (main.classList.length == 0) {\n        main.classList.toggle(\"home\");\n    } else if (main.classList.contains(\"menu\")) {\n        main.classList.replace(\"menu\", \"home\");\n    } else {\n        main.classList.replace(\"about\", \"home\");\n    }\n}\n\nfunction setFocusedBtn() {\n    const home = document.querySelector(\"#home\");\n    const menu = document.querySelector(\"#menu\");\n    const about = document.querySelector(\"#about\");\n\n    if (home.classList.length == 0) {\n        home.classList.toggle(\"active\");\n        if (menu.classList.contains(\"active\")) {\n            menu.classList.remove(\"active\");\n        } else {\n            about.classList.remove(\"active\");\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\n\n(0,_website__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Menu)\n/* harmony export */ });\nfunction Menu() {\n    const main = document.querySelector(\"main\");\n    \n    const img1 = createContainer(\"../dist/img/waffles.jpg\", \"Waffles\");\n    const img2 = createContainer(\"../dist/img/potato-bacon.jpg\", \"Potato & bacon\");\n    const img3 = createContainer(\"../dist/img/shakshuka.jpg\", \"Shakshuka\");\n    const img4 = createContainer(\"../dist/img/salmon.jpg\", \"Salmon\");\n\n\n    main.innerHTML = null;\n    setMainFocusedClass(main); // only for main container\n    setFocusBtn();\n    main.append(img1, img2, img3, img4);\n}\n\nfunction createContainer(source, title) {\n    const container = document.createElement(\"div\");\n\n    const h3 = document.createElement(\"h3\");\n    h3.classList.add(\"dish-title\");\n    h3.textContent = title;\n\n    const img = document.createElement(\"img\");\n    h3.classList.add(\"dish-image\");\n    img.setAttribute(\"src\", source);\n\n    container.append(h3, img);\n    return container;\n}\n\nfunction setMainFocusedClass(main) {\n    if (main.classList.contains(\"home\")) {\n        main.classList.replace(\"home\", \"menu\");\n    } else {\n        main.classList.replace(\"about\", \"menu\");\n    }\n}\n\nfunction setFocusBtn() {\n    const home = document.querySelector(\"#home\");\n    const menu = document.querySelector(\"#menu\");\n    const about = document.querySelector(\"#about\");\n\n    if (menu.classList.length == 0) {\n        menu.classList.toggle(\"active\");\n        if (home.classList.contains(\"active\")) {\n            home.classList.remove(\"active\");\n        } else {\n            about.classList.remove(\"active\");\n        }\n    } \n\n}\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initWebsite)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\n\nfunction createHeader() {\n    const header = document.createElement(\"header\");\n    const title = document.createElement(\"h1\");\n    const nav = document.createElement(\"nav\");\n    title.textContent = \"Rally's Buck\";\n\n    const homeBtn = document.createElement(\"button\");\n    homeBtn.textContent = \"Home\";\n    homeBtn.setAttribute(\"id\", \"home\");\n    homeBtn.addEventListener(\"click\", () => {\n        (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    })\n\n    const menuBtn = document.createElement(\"button\");\n    menuBtn.textContent = \"Menu\";\n    menuBtn.setAttribute(\"id\", \"menu\");\n    menuBtn.addEventListener(\"click\", () => {\n        (0,_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    })\n\n    const aboutBtn = document.createElement(\"button\");\n    aboutBtn.textContent = \"About\";\n    aboutBtn.setAttribute(\"id\", \"about\");\n    aboutBtn.addEventListener(\"click\", () => {\n        (0,_about__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    })\n\n    header.appendChild(title);\n    nav.append(homeBtn, menuBtn, aboutBtn);\n    header.appendChild(nav);\n\n    return header;\n}\n\nfunction createMain() {\n    const main = document.createElement(\"main\");\n    return main;\n}\n\nfunction createFooter() {\n    const footer = document.createElement(\"footer\");\n\n    const p = document.createElement(\"p\");\n    p.textContent = \"You can do better. It is true.\";\n\n    footer.appendChild(p);\n\n    return footer;\n}\n\nfunction initWebsite() {\n    const content = document.querySelector(\"#content\");\n    \n    content.appendChild(createHeader());\n    content.appendChild(createMain());\n    content.appendChild(createFooter());\n\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\n//# sourceURL=webpack://restaurant/./src/website.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;