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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const $ = function (selector) {
  return new $.prototype.init(selector);
};
$.prototype.init = function (selector) {
  if (!selector) {
    return this;
  }
  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }
  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
};
$.prototype.init.prototype = $.prototype;
window.$ = $;
/* harmony default export */ __webpack_exports__["default"] = ($);

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/attributes */ "./src/js/lib/modules/attributes.js");
/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/handlers */ "./src/js/lib/modules/handlers.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");







/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (content) {
  if (!content) {
    return this[0].innerHTML;
  } else {
    for (let i = 0; i < this.length; i++) {
      this[i].innerHTML = content;
    }
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function () {
  let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  const swap = this[i];
  const objLength = Object.keys(this);
  for (let i = 0; i < objLength.length; i++) {
    delete this[objLength[i]];
  }
  this[0] = swap;
  this.length = 1;
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  const parentElement = [...this[0].parentElement.children];
  return parentElement.findIndex(item => {
    return item === this[0];
  });
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
  const copyObj = Object.assign({}, this);
  let counter = 0;
  const clearThis = () => {
    let thisLength = Object.keys(this);
    for (let i = 0; i < thisLength.length; i++) {
      delete this[thisLength[i]];
    }
  };
  clearThis();
  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].querySelectorAll(selector);
    if (arr.length === 0) continue;
    for (let i = 0; i < arr.length; i++) {
      this[counter] = arr[i];
      counter++;
    }
  }
  this.length = counter;
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function (selector) {
  let counter = 0;
  for (let i = 0; i < this.length; i++) {
    if (!this[i].closest(selector)) continue;
    this[counter] = this[i].closest(selector);
    counter++;
  }
  for (let i = counter; i < this.length; i++) {
    delete this[i];
  }
  this.length = counter;
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.sibling = function () {
  let counter = 0;
  const copyObj = Object.assign({}, this);
  const clearThis = () => {
    let thisLength = Object.keys(this);
    for (let i = 0; i < thisLength.length; i++) {
      delete this[thisLength[i]];
    }
  };
  clearThis();
  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].parentElement.children;
    for (let k = 0; k < arr.length; k++) {
      if (copyObj[i] === arr[k]) continue;
      this[counter] = arr[k];
      counter++;
    }
  }
  this.length = counter;
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/attributes.js":
/*!******************************************!*\
  !*** ./src/js/lib/modules/attributes.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.attr = function (attributeName, value) {
  if (!attributeName) return this;
  for (let i = 0; i < this.length; i++) {
    if (!value) {
      if (!this[i].getAttribute || !this[i].getAttribute(attributeName)) {
        continue;
      }
      return this[i].getAttribute(attributeName);
    } else {
      if (!this[i].setAttribute) continue;
      this[i].setAttribute(attributeName, value);
    }
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.attrRemove = function (attributeName) {
  if (!attributeName) return this;
  for (let i = 0; i < this.length; i++) {
    if (this[i].removeAttribute) {
      continue;
    }
    this[i].removeAttribute(attributeName);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.attrToggle = function (attributeName) {
  let valueFirst = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  let valueSecond = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  if (!attributeName || !valueFirst) return this;
  for (let i = 0; i < this.length; i++) {
    if (!this[i].setAttribute) continue;
    if (this[i].hasAttribute(attributeName)) {
      if (this[i].getAttribute(attributeName) === valueFirst) {
        this[i].setAttribute(attributeName, valueSecond);
      } else {
        this[i].setAttribute(attributeName, valueFirst);
      }
    }
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function () {
  for (var _len = arguments.length, className = new Array(_len), _key = 0; _key < _len; _key++) {
    className[_key] = arguments[_key];
  }
  if (!className) return this;
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) continue;
    this[i].classList.add(...className);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function () {
  for (var _len2 = arguments.length, className = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    className[_key2] = arguments[_key2];
  }
  if (!className) return this;
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) continue;
    this[i].classList.remove(...className);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (className) {
  if (!className) return this;
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) continue;
    if (this[i].classList.contains(className)) {
      this[i].classList.remove(className);
    } else {
      this[i].classList.add(className);
    }
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.containsClass = function (className) {
  if (!className) return this;
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) continue;
    return this[i].classList.contains(className);
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) continue;
    this[i].style.display = "";
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) continue;
    this[i].style.display = "none";
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleDisplay = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) continue;
    this[i].style.display = window.getComputedStyle(this[i]).display === "none" ? "" : "none";
  }
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (duration, callback, fin) {
  let timeStart = null;
  function _animateOverTime(time) {
    if (!timeStart) {
      timeStart = time;
    }
    let timeElapsed = time - timeStart;
    let completion = Math.min(timeElapsed / duration, 1);
    console.log(time);
    callback(completion);
    if (timeElapsed < duration) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof fin === "function") {
        fin();
      }
    }
  }
  return _animateOverTime;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (duration) {
  let display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "block";
  let fin = arguments.length > 2 ? arguments[2] : undefined;
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display;
    let _fadeIn = completion => {
      this[i].style.opacity = completion;
    };
    const animate = this.animateOverTime(duration, _fadeIn, fin);
    requestAnimationFrame(animate);
  }
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (duration, fin) {
  for (let i = 0; i < this.length; i++) {
    let _fadeOut = completion => {
      this[i].style.opacity = 1 - completion;
      if (completion === 1) {
        this[i].style.display = "none";
      }
    };
    const animate = this.animateOverTime(duration, _fadeOut, fin);
    requestAnimationFrame(animate);
  }
};

/***/ }),

/***/ "./src/js/lib/modules/handlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/handlers.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (handler, callback) {
  if (!handler || !callback) return this;
  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(handler, callback);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (handler, callback) {
  if (!handler || !callback) return this;
  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(handler, callback);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (callback) {
  if (!callback) {
    this[0].click();
  } else {
    for (let i = 0; i < this.length; i++) {
      this[i].addEventListener("click", callback);
    }
  }
  console.log(this);
  return this;
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");


/*
$("p.active").hide();
$("p.active").toggleDisplay();
$("p.active").show();

// ________________

$("p").addClass("hello", "world");
$("p.active").removeClass("class-1");
$("p").toggleClass("active").addClass("active-1");
$("p").containsClass("hello");

// ________________


function sayHi() {
    console.log("Hello world");
}

$("button").on("click", sayHi);

$("button").off("click", sayHi);

$("p").click(function () {
    $(this).toggleClass("current");
});

// ________________


console.log($("p").attr("data-close"));
// $("p").attr("data-close", "1");
// $("p").attrRemove("data-close");
$("p").attrToggle("data-close", "x");

$("button").on("click", ()=> {
    $("p").attrToggle("data-close", "value-1", "value-2");
})

// ________________

console.log($("p").html("con"));
// ________________

console.log($("p").eq(0));
// ________________

$("p").click(function () {
    console.log($(this).index())
})


console.log($("div").find(".more"));
// ________________


// console.log($(".some").closest(".content"));
// ________________

console.log($(".content").sibling());

*/

// $("div").fadeIn(2000);
//
// $("div").fadeOut(2000);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map