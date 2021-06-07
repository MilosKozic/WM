/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

var paragraph = ['LOREM IPSUM DOLOR SIT', 'LOREM IPSUM DOLOR SIT2', 'LOREM IPSUM DOLOR SIT3'];
var p = document.querySelector('.head-text');
var p1 = document.querySelector('.head-text1');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var dot1 = document.querySelector('#dot1');
var dot2 = document.querySelector('#dot2');
var dot3 = document.querySelector('#dot3');
var burgerMenu = document.querySelector('.menu');
var dropdown = document.querySelector('.dropdown');
var nav = document.querySelector('#nav');
var navbar = document.querySelector('#navbar');
var search = document.querySelector('#search-input');
var searchBtn = document.querySelector('#search-btn');
var showBtn = document.querySelector('.show-more');
var pSection = document.querySelector('#txt');
var showBtn2 = document.querySelector('.show-more2');
var pSection2 = document.querySelector('#txt2');
var n = 0;
dot2.addEventListener('click', function () {
  p.textContent = paragraph[1];
  p1.textContent = paragraph[1];
  n = 1;
});
dot1.addEventListener('click', function () {
  p.textContent = paragraph[0];
  p1.textContent = paragraph[0];
  n = 0;
});
dot3.addEventListener('click', function () {
  p.textContent = paragraph[2];
  p1.textContent = paragraph[2];
  n = 1;
});

function check(n) {
  if (n == 1) dot1.checked = true;
  if (n == 2) dot2.checked = true;
  if (n == 3) dot3.checked = true;
} // change check on dot when we use mobile size, so if we back on tablet or desktop size wright dot will be checked


check(n + 1); //start position

prev.addEventListener('click', function () {
  if (n == 0) n = 3;
  p.textContent = paragraph[n - 1];
  p1.textContent = paragraph[n - 1];
  check(n);
  n--;
});
next.addEventListener('click', function () {
  if (n == 2) n = -1;
  p.textContent = paragraph[n + 1];
  p1.textContent = paragraph[n + 1];
  check(n + 2);
  n++;
});
var menuActive = false;
burgerMenu.addEventListener('click', function () {
  if (menuActive) {
    dropdown.classList.add('open');
    navbar.classList.add('hidden-border');
    burgerMenu.classList.add('active');
  } else {
    dropdown.classList.remove('open');
    navbar.classList.remove('hidden-border');
    burgerMenu.classList.remove('active');
  }

  menuActive = !menuActive;
});
var searchAtive = false;
searchBtn.addEventListener('click', function () {
  if (searchAtive) {
    search.classList.add('search-active');
  } else {
    search.classList.remove('search-active');
  }

  searchAtive = !searchAtive;
});
var showClass = false;
showBtn.addEventListener('click', function () {
  if (showClass) {
    pSection.classList.add('paragraph-active');
    showBtn.textContent = "Show less";
  } else {
    pSection.classList.remove('paragraph-active');
    showBtn.textContent = "Show more";
  }

  showClass = !showClass;
});
var showClass2 = false;
showBtn2.addEventListener('click', function () {
  if (showClass2) {
    pSection2.classList.add('paragraph-active');
    showBtn2.textContent = "Show less";
  } else {
    pSection2.classList.remove('paragraph-active');
    showBtn2.textContent = "Show more";
  }

  showClass2 = !showClass2;
});

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map