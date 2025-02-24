/*
@license

dhtmlxGrid v.9.0.3 GPL

This software is covered by GPL license.
To use it in non-GPL project, you need obtain Commercial or Enterprise license
Please contact sales@dhtmlx.com. Usage without proper license is prohibited.
(c) XB Software.

*/
if (window.dhx){ window.dhx_legacy = dhx; delete window.dhx; }(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dhx"] = factory();
	else
		root["dhx"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/codebase/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTextLines = exports.getCloneObject = exports.rgbToHex = exports.getStringWidth = exports.getMinArrayNumber = exports.getMaxArrayNumber = exports.isEmptyObj = exports.isType = exports.compare = exports.debounce = exports.downloadFile = exports.isNumeric = exports.range = exports.isId = exports.isDefined = exports.wrapBox = exports.unwrapBox = exports.detectWidgetClick = exports.singleOuterClick = exports.isExistValue = exports.findIndex = exports.naturalSort = exports.copy = exports.extend = exports.extendComponent = exports.uid = void 0;
var html_1 = __webpack_require__(2);
var counter = new Date().valueOf();
function uid() {
    return "u" + counter++;
}
exports.uid = uid;
function bindFunctionality(target, source, key) {
    var srcObj = source[key];
    if (typeof srcObj === "function") {
        target[key] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return source[key].apply(source, args);
        };
    }
    else {
        Object.defineProperty(target, key, {
            get: function () { return source[key]; },
            set: function (value) { return (source[key] = value); },
            enumerable: true,
            configurable: true,
        });
    }
}
function extendComponent(target, source) {
    if (!source)
        return target;
    for (var _i = 0, _a = Object.keys(source); _i < _a.length; _i++) {
        var key = _a[_i];
        bindFunctionality(target, source, key);
    }
    var proto = Object.getPrototypeOf(source);
    while (proto && proto !== Object.prototype) {
        for (var _b = 0, _c = Object.getOwnPropertyNames(proto); _b < _c.length; _b++) {
            var key = _c[_b];
            if (!target.hasOwnProperty(key)) {
                bindFunctionality(target, source, key);
            }
        }
        proto = Object.getPrototypeOf(proto);
    }
    return target;
}
exports.extendComponent = extendComponent;
function extend(target, source, deep) {
    if (deep === void 0) { deep = true; }
    if (source) {
        for (var key in source) {
            var sobj = source[key];
            var tobj = target[key];
            if (sobj === undefined) {
                delete target[key];
            }
            else if (deep &&
                typeof tobj === "object" &&
                !(tobj instanceof Date) &&
                !(tobj instanceof Array)) {
                extend(tobj, sobj);
            }
            else {
                target[key] = sobj;
            }
        }
    }
    return target;
}
exports.extend = extend;
function copy(source, withoutInner) {
    var result = {};
    for (var key in source) {
        if (!withoutInner || !key.startsWith("$")) {
            result[key] = source[key];
        }
    }
    return result;
}
exports.copy = copy;
function naturalSort(arr) {
    return arr.sort(function (a, b) {
        var nn = typeof a === "string" ? a.localeCompare(b) : a - b;
        return nn;
    });
}
exports.naturalSort = naturalSort;
function findIndex(arr, predicate) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        if (predicate(arr[i])) {
            return i;
        }
    }
    return -1;
}
exports.findIndex = findIndex;
function isExistValue(target, value) {
    var str = value.toString();
    var text = target.toString();
    if (str.length > text.length)
        return false;
    return text.toLowerCase().includes(str.toLowerCase());
}
exports.isExistValue = isExistValue;
function singleOuterClick(fn) {
    var click = function (e) {
        if (fn(e)) {
            document.removeEventListener("click", click);
        }
    };
    document.addEventListener("click", click);
}
exports.singleOuterClick = singleOuterClick;
function detectWidgetClick(widgetId, cb) {
    var click = function (e) { return cb((0, html_1.locate)(e, "data-dhx-widget-id") === widgetId); };
    document.addEventListener("click", click);
    return function () { return document.removeEventListener("click", click); };
}
exports.detectWidgetClick = detectWidgetClick;
function unwrapBox(box) {
    if (Array.isArray(box)) {
        return box[0];
    }
    return box;
}
exports.unwrapBox = unwrapBox;
function wrapBox(unboxed) {
    if (Array.isArray(unboxed)) {
        return unboxed;
    }
    return [unboxed];
}
exports.wrapBox = wrapBox;
function isDefined(some) {
    return some !== null && some !== undefined;
}
exports.isDefined = isDefined;
function isId(some) {
    return typeof some === "number" || (typeof some === "string" && some !== "");
}
exports.isId = isId;
function range(from, to) {
    if (from > to) {
        return [];
    }
    var result = [];
    while (from <= to) {
        result.push(from++);
    }
    return result;
}
exports.range = range;
function isNumeric(val) {
    return !isNaN(val - parseFloat(val));
}
exports.isNumeric = isNumeric;
function downloadFile(data, filename, mimeType) {
    if (mimeType === void 0) { mimeType = "text/plain"; }
    var file = new Blob([data], { type: mimeType });
    if (window.navigator.msSaveOrOpenBlob) {
        // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    }
    else {
        var a_1 = document.createElement("a");
        var url_1 = URL.createObjectURL(file);
        a_1.href = url_1;
        a_1.download = filename;
        document.body.appendChild(a_1);
        a_1.click();
        setTimeout(function () {
            document.body.removeChild(a_1);
            window.URL.revokeObjectURL(url_1);
        }, 0);
    }
}
exports.downloadFile = downloadFile;
function debounce(func, wait, immediate) {
    var timeout;
    return function executedFunction() {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var later = function () {
            timeout = null;
            if (!immediate) {
                func.apply(_this, args);
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(this, args);
        }
    };
}
exports.debounce = debounce;
function compare(obj1, obj2) {
    for (var p in obj1) {
        if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) {
            return false;
        }
        switch (typeof obj1[p]) {
            case "object":
                if (!compare(obj1[p], obj2[p])) {
                    return false;
                }
                break;
            case "function":
                if (typeof obj2[p] === "undefined" ||
                    (p !== "compare" && obj1[p].toString() !== obj2[p].toString())) {
                    return false;
                }
                break;
            default:
                if (obj1[p] !== obj2[p]) {
                    return false;
                }
        }
    }
    for (var p in obj2) {
        if (!obj1.hasOwnProperty(p)) {
            return false;
        }
    }
    return true;
}
exports.compare = compare;
var isType = function (value) {
    var regex = /^\[object (\S+?)\]$/;
    var matches = Object.prototype.toString.call(value).match(regex) || [];
    return (matches[1] || "undefined").toLowerCase();
};
exports.isType = isType;
var isEmptyObj = function (obj) {
    for (var key in obj) {
        return false;
    }
    return true;
};
exports.isEmptyObj = isEmptyObj;
var getMaxArrayNumber = function (array) {
    if (!array.length)
        return;
    var maxNumber = -Infinity;
    var index = 0;
    var length = array.length;
    for (index; index < length; index++) {
        if (array[index] > maxNumber)
            maxNumber = array[index];
    }
    return maxNumber;
};
exports.getMaxArrayNumber = getMaxArrayNumber;
var getMinArrayNumber = function (array) {
    if (!array.length)
        return;
    var minNumber = +Infinity;
    var index = 0;
    var length = array.length;
    for (index; index < length; index++) {
        if (array[index] < minNumber)
            minNumber = array[index];
    }
    return minNumber;
};
exports.getMinArrayNumber = getMinArrayNumber;
var getStringWidth = function (value, config) {
    config = __assign({ font: "normal 14px Roboto", lineHeight: 20 }, config);
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    if (config.font)
        ctx.font = config.font;
    var width = ctx.measureText(value).width;
    if (!(0, html_1.isIE)())
        canvas.remove();
    return width;
};
exports.getStringWidth = getStringWidth;
var rgbToHex = function (color) {
    if (color.substr(0, 1) === "#") {
        return color;
    }
    if (color.substr(0, 3) !== "rgb") {
        return;
    }
    var digits = /(.*?)rgb[a]?\((\d+), *(\d+), *(\d+),* *([\d+.]*)\)/.exec(color);
    var red = parseInt(digits[2], 10)
        .toString(16)
        .padStart(2, "0");
    var green = parseInt(digits[3], 10)
        .toString(16)
        .padStart(2, "0");
    var blue = parseInt(digits[4], 10)
        .toString(16)
        .padStart(2, "0");
    return "#".concat(red).concat(green).concat(blue);
};
exports.rgbToHex = rgbToHex;
function getCloneObject(obj) {
    if (!obj) {
        return obj;
    }
    var clone = Array.isArray(obj) ? [] : {};
    for (var key in obj) {
        var value = obj[key];
        if (value instanceof Date) {
            clone[key] = new Date(value);
            continue;
        }
        clone[key] = typeof value === "object" ? getCloneObject(value) : value;
    }
    return clone;
}
exports.getCloneObject = getCloneObject;
function getTextLines(ctx, text, maxWidth) {
    var words = text.split(" ");
    var line = "";
    var testLine = "";
    var lineArray = [];
    for (var n = 0; n < words.length; n++) {
        testLine += "".concat(words[n], " ");
        var metrics = ctx.measureText(testLine.trimEnd());
        var testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            lineArray.push(line);
            line = "".concat(words[n], " ");
            testLine = "".concat(words[n], " ");
        }
        else {
            line += "".concat(words[n], " ");
        }
        if (n === words.length - 1) {
            lineArray.push(line);
        }
    }
    return lineArray;
}
exports.getTextLines = getTextLines;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTheme = exports.awaitRedraw = exports.resizeHandler = exports.resizer = exports.disableHelp = exports.KEYED_LIST = exports.inject = exports.create = exports.view = exports.sv = exports.el = void 0;
var dom = __webpack_require__(65);
var html_1 = __webpack_require__(2);
exports.el = dom.defineElement;
exports.sv = dom.defineSvgElement;
exports.view = dom.defineView;
exports.create = dom.createView;
exports.inject = dom.injectView;
exports.KEYED_LIST = dom.KEYED_LIST;
function disableHelp() {
    dom.DEVMODE.mutations = false;
    dom.DEVMODE.warnings = false;
    dom.DEVMODE.verbose = false;
    dom.DEVMODE.UNKEYED_INPUT = false;
}
exports.disableHelp = disableHelp;
function resizer(handler) {
    var resize = window.ResizeObserver;
    var activeHandler = function (node) {
        var height = node.el.offsetHeight;
        var width = node.el.offsetWidth;
        handler(width, height);
    };
    if (resize) {
        return (0, exports.el)("div.dhx-resize-observer", {
            _hooks: {
                didInsert: function (node) {
                    new resize(function () { return activeHandler(node); }).observe(node.el);
                },
            },
        });
    }
    return (0, exports.el)("iframe.dhx-resize-observer", {
        _hooks: {
            didInsert: function (node) {
                node.el.contentWindow.onresize = function () { return activeHandler(node); };
                activeHandler(node);
            },
        },
    });
}
exports.resizer = resizer;
function resizeHandler(container, handler) {
    return (0, exports.create)({
        render: function () {
            return resizer(handler);
        },
    }).mount(container);
}
exports.resizeHandler = resizeHandler;
function awaitRedraw() {
    return new Promise(function (res) {
        requestAnimationFrame(function () {
            res();
        });
    });
}
exports.awaitRedraw = awaitRedraw;
function setTheme(theme, container) {
    if (theme === void 0) { theme = "light"; }
    var dhxAttr = "data-dhx-theme";
    if (!container) {
        var elements = document.querySelectorAll("[".concat(dhxAttr, "]"));
        elements.forEach(function (el) { return el.removeAttribute(dhxAttr); });
    }
    container = container || document.documentElement;
    (0, html_1.toNode)(container).setAttribute(dhxAttr, theme);
}
exports.setTheme = setTheme;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getElementFromPoint = exports.getPageLinksCss = exports.getPageInlineCss = exports.getLabelStyle = exports.getPageCss = exports.fitPosition = exports.calculatePosition = exports.getRealPosition = exports.isFirefox = exports.isSafari = exports.isIE = exports.getScrollbarHeight = exports.getScrollbarWidth = exports.getBox = exports.locateNodeByClassName = exports.locate = exports.locateNode = exports.eventHandler = exports.toNode = void 0;
function toNode(node) {
    var _a;
    return typeof node === "string"
        ? document.getElementById(node) || document.querySelector("[data-cell-id=".concat(node, "]")) || document.querySelector(node) || ((_a = document.querySelector("[data-dhx-root-id=".concat(node, "]"))) === null || _a === void 0 ? void 0 : _a.parentElement) || document.body
        : node || document.body;
}
exports.toNode = toNode;
function eventHandler(prepare, hash, afterCall) {
    var keys = Object.keys(hash);
    return function (ev) {
        var data = prepare(ev);
        if (data !== undefined) {
            var node = ev.target;
            outer_block: while (node) {
                var cssstring = node.getAttribute ? node.getAttribute("class") || "" : "";
                if (cssstring.length) {
                    var css = cssstring.split(" ");
                    for (var j = 0; j < keys.length; j++) {
                        if (css.includes(keys[j])) {
                            if (hash[keys[j]](ev, data) === false || ev.cancelBubble)
                                return false;
                            else
                                break outer_block;
                        }
                    }
                }
                node = node.parentNode;
            }
        }
        if (typeof afterCall === "function")
            afterCall(ev);
        return true;
    };
}
exports.eventHandler = eventHandler;
function locateNode(target, attr, dir) {
    if (attr === void 0) { attr = "data-dhx-id"; }
    if (dir === void 0) { dir = "target"; }
    if (target instanceof Event) {
        target = target[dir];
    }
    while (target) {
        if (target.getAttribute && target.getAttribute(attr)) {
            return target;
        }
        target = target.parentNode;
    }
}
exports.locateNode = locateNode;
function locate(target, attr) {
    if (attr === void 0) { attr = "data-dhx-id"; }
    var node = locateNode(target, attr);
    return node ? node.getAttribute(attr) : "";
}
exports.locate = locate;
function locateNodeByClassName(target, className) {
    if (target instanceof Event) {
        target = target.target;
    }
    while (target) {
        if (className) {
            if (target.classList && target.classList.contains(className)) {
                return target;
            }
        }
        else if (target.getAttribute && target.getAttribute("data-dhx-id")) {
            return target;
        }
        target = target.parentNode;
    }
}
exports.locateNodeByClassName = locateNodeByClassName;
function getBox(elem) {
    var box = elem.getBoundingClientRect();
    var body = document.body;
    var scrollTop = window.pageYOffset || body.scrollTop;
    var scrollLeft = window.pageXOffset || body.scrollLeft;
    var top = box.top + scrollTop;
    var left = box.left + scrollLeft;
    var right = body.offsetWidth - box.right;
    var bottom = body.offsetHeight - box.bottom;
    var width = box.right - box.left;
    var height = box.bottom - box.top;
    return { top: top, left: left, right: right, bottom: bottom, width: width, height: height };
}
exports.getBox = getBox;
var scrollWidth = -1;
function getScrollbarWidth() {
    if (scrollWidth > -1) {
        return scrollWidth;
    }
    var scrollDiv = document.createElement("div");
    document.body.appendChild(scrollDiv);
    scrollDiv.style.cssText = "position: absolute;left: -99999px;overflow:scroll;width: 100px;height: 100px;";
    scrollWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollWidth;
}
exports.getScrollbarWidth = getScrollbarWidth;
var scrollHeight = -1;
function getScrollbarHeight() {
    if (scrollHeight > -1) {
        return scrollHeight;
    }
    var scrollDiv = document.createElement("div");
    document.body.appendChild(scrollDiv);
    scrollDiv.style.cssText = "position: absolute;left: -99999px;overflow:scroll;width: 100px;height: 100px;";
    scrollHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
    document.body.removeChild(scrollDiv);
    return scrollHeight;
}
exports.getScrollbarHeight = getScrollbarHeight;
function isIE() {
    var ua = window.navigator.userAgent;
    return ua.includes("MSIE ") || ua.includes("Trident/");
}
exports.isIE = isIE;
function isSafari() {
    var check = function (str) { return str.test(window.navigator.userAgent); };
    var chrome = check(/Chrome/);
    var firefox = check(/Firefox/);
    return !chrome && !firefox && check(/Safari/);
}
exports.isSafari = isSafari;
function isFirefox() {
    var check = function (str) { return str.test(window.navigator.userAgent); };
    var chrome = check(/Chrome/);
    var safari = check(/Safari/);
    return !chrome && !safari && check(/Firefox/);
}
exports.isFirefox = isFirefox;
function getRealPosition(node) {
    var rects = node.getBoundingClientRect();
    return {
        left: rects.left + window.pageXOffset,
        right: rects.right + window.pageXOffset,
        top: rects.top + window.pageYOffset,
        bottom: rects.bottom + window.pageYOffset,
    };
}
exports.getRealPosition = getRealPosition;
function getWindowBorders() {
    return {
        rightBorder: window.pageXOffset + window.innerWidth,
        bottomBorder: window.pageYOffset + window.innerHeight,
    };
}
function horizontalCentering(pos, width, rightBorder) {
    var nodeWidth = pos.right - pos.left;
    var diff = (width - nodeWidth) / 2;
    var left = pos.left - diff;
    var right = pos.right + diff;
    if (left >= 0 && right <= rightBorder) {
        return left;
    }
    if (left < 0) {
        return 0;
    }
    return rightBorder - width;
}
function verticalCentering(pos, height, bottomBorder) {
    var nodeHeight = pos.bottom - pos.top;
    var diff = (height - nodeHeight) / 2;
    var top = pos.top - diff;
    var bottom = pos.bottom + diff;
    if (top >= 0 && bottom <= bottomBorder) {
        return top;
    }
    if (top < 0) {
        return 0;
    }
    return bottomBorder - height;
}
function placeBottomOrTop(pos, config) {
    var _a = getWindowBorders(), rightBorder = _a.rightBorder, bottomBorder = _a.bottomBorder;
    var left;
    var top;
    var bottomDiff = bottomBorder - pos.bottom - config.height;
    var topDiff = pos.top - config.height;
    if (config.mode === "bottom") {
        if (bottomDiff >= 0) {
            top = pos.bottom;
        }
        else if (topDiff >= 0) {
            top = topDiff;
        }
    }
    else {
        if (topDiff >= 0) {
            top = topDiff;
        }
        else if (bottomDiff >= 0) {
            top = pos.bottom;
        }
    }
    if (bottomDiff < 0 && topDiff < 0) {
        if (config.auto) {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            return placeRightOrLeft(pos, __assign(__assign({}, config), { mode: "right", auto: false }));
        }
        top = bottomDiff > topDiff ? pos.bottom : topDiff;
    }
    if (config.centering) {
        left = horizontalCentering(pos, config.width, rightBorder);
    }
    else {
        var leftDiff = rightBorder - pos.left - config.width;
        var rightDiff = pos.right - config.width;
        if (leftDiff >= 0) {
            left = pos.left;
        }
        else if (rightDiff >= 0) {
            left = rightDiff;
        }
        else {
            left = rightDiff > leftDiff ? pos.left : rightDiff;
        }
    }
    return { left: left, top: top };
}
function placeRightOrLeft(pos, config) {
    var _a = getWindowBorders(), rightBorder = _a.rightBorder, bottomBorder = _a.bottomBorder;
    var left;
    var top;
    var rightDiff = rightBorder - pos.right - config.width;
    var leftDiff = pos.left - config.width;
    if (config.mode === "right") {
        if (rightDiff >= 0) {
            left = pos.right;
        }
        else if (leftDiff >= 0) {
            left = leftDiff;
        }
    }
    else {
        if (leftDiff >= 0) {
            left = leftDiff;
        }
        else if (rightDiff >= 0) {
            left = pos.right;
        }
    }
    if (leftDiff < 0 && rightDiff < 0) {
        if (config.auto) {
            return placeBottomOrTop(pos, __assign(__assign({}, config), { mode: "bottom", auto: false }));
        }
        left = leftDiff > rightDiff ? leftDiff : pos.right;
    }
    if (config.centering) {
        top = verticalCentering(pos, config.height, bottomBorder);
    }
    else {
        var bottomDiff = pos.bottom - config.height;
        var topDiff = bottomBorder - pos.top - config.height;
        if (topDiff >= 0) {
            top = pos.top;
        }
        else if (bottomDiff > 0) {
            top = bottomDiff;
        }
        else {
            top = bottomDiff > topDiff ? bottomDiff : pos.top;
        }
    }
    return { left: left, top: top };
}
function calculatePosition(pos, config) {
    var _a = config.mode === "bottom" || config.mode === "top"
        ? placeBottomOrTop(pos, config)
        : placeRightOrLeft(pos, config), left = _a.left, top = _a.top;
    return {
        left: Math.round(left) + "px",
        top: Math.round(top) + "px",
        minWidth: Math.round(config.width) + "px",
        position: "absolute",
    };
}
exports.calculatePosition = calculatePosition;
function fitPosition(node, config) {
    return calculatePosition(getRealPosition(node), config);
}
exports.fitPosition = fitPosition;
function getPageCss() {
    var css = [];
    for (var sheeti = 0; sheeti < document.styleSheets.length; sheeti++) {
        var sheet = document.styleSheets[sheeti];
        var rules = "cssRules" in sheet ? sheet.cssRules : sheet.rules;
        for (var rulei = 0; rulei < rules.length; rulei++) {
            var rule = rules[rulei];
            if ("cssText" in rule) {
                css.push(rule.cssText);
            }
            else {
                css.push("".concat(rule.selectorText, " {\n").concat(rule.style.cssText, "\n}\n"));
            }
        }
    }
    return css.join("\n");
}
exports.getPageCss = getPageCss;
function getLabelStyle(config) {
    var helpMessage = config.helpMessage, type = config.type, labelWidth = config.labelWidth, label = config.label;
    var isZero = labelWidth && labelWidth.toString().startsWith("0");
    var required = type !== "text" && config.required;
    if (!helpMessage && !required && (!label || (label && isZero)) && (!labelWidth || isZero)) {
        return false;
    }
    return {
        style: (label || labelWidth) && !isZero && { width: labelWidth, "max-width": "100%" },
        label: label && isZero ? null : label,
    };
}
exports.getLabelStyle = getLabelStyle;
var checkCrossLink = function (sheet) { return sheet.href && !sheet.href.startsWith(window.location.origin); };
function getPageInlineCss() {
    var css = [];
    for (var i = 0; i < document.styleSheets.length; i++) {
        var sheet = document.styleSheets[i];
        if (!checkCrossLink(sheet)) {
            var rules = "cssRules" in sheet && sheet.cssRules.length
                ? sheet.cssRules
                : sheet.rules;
            for (var j = 0; j < rules.length; j++) {
                var rule = rules[j];
                if ("cssText" in rule) {
                    css.push(rule.cssText);
                }
                else {
                    css.push("".concat(rule.selectorText, " {\n").concat(rule.style.cssText, "\n}\n"));
                }
            }
        }
    }
    return css.join("\n");
}
exports.getPageInlineCss = getPageInlineCss;
function getPageLinksCss(exportStyles) {
    var css = [];
    if (exportStyles) {
        exportStyles.forEach(function (link) { return css.push("<link href=\"".concat(link, "\" rel=\"stylesheet\"/>")); });
    }
    else {
        for (var i = 0; i < document.styleSheets.length; i++) {
            var sheet = document.styleSheets[i];
            if (checkCrossLink(sheet)) {
                css.push("<link href=\"".concat(sheet.href, "\" rel=\"stylesheet\"/>"));
            }
        }
    }
    return css.join("\n");
}
exports.getPageLinksCss = getPageLinksCss;
function getElementFromPoint(e) {
    var _a, _b;
    var clientX = e.targetTouches
        ? ((_a = e.targetTouches[0]) === null || _a === void 0 ? void 0 : _a.clientX) || 0
        : e.clientX;
    var clientY = e.targetTouches
        ? ((_b = e.targetTouches[0]) === null || _b === void 0 ? void 0 : _b.clientY) || 0
        : e.clientY;
    var el = document.elementFromPoint(clientX, clientY);
    return (el === null || el === void 0 ? void 0 : el.shadowRoot) ? el.shadowRoot.elementFromPoint(clientX, clientY) : el;
}
exports.getElementFromPoint = getElementFromPoint;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Split = exports.HeaderFilterEvent = exports.GridSystemEvents = exports.GridEvents = void 0;
var GridEvents;
(function (GridEvents) {
    GridEvents["scroll"] = "scroll";
    GridEvents["expand"] = "expand";
    GridEvents["filterChange"] = "filterChange";
    GridEvents["beforeFilter"] = "beforeFilter";
    GridEvents["beforeResizeStart"] = "beforeResizeStart";
    GridEvents["resize"] = "resize";
    GridEvents["afterResizeEnd"] = "afterResizeEnd";
    GridEvents["cellClick"] = "cellClick";
    GridEvents["cellRightClick"] = "cellRightClick";
    GridEvents["cellMouseOver"] = "cellMouseOver";
    GridEvents["cellMouseDown"] = "cellMouseDown";
    GridEvents["cellDblClick"] = "cellDblClick";
    GridEvents["headerCellClick"] = "headerCellClick";
    GridEvents["footerCellClick"] = "footerCellClick";
    GridEvents["headerCellMouseOver"] = "headerCellMouseOver";
    GridEvents["footerCellMouseOver"] = "footerCellMouseOver";
    GridEvents["headerCellMouseDown"] = "headerCellMouseDown";
    GridEvents["footerCellMouseDown"] = "footerCellMouseDown";
    GridEvents["headerCellDblClick"] = "headerCellDblClick";
    GridEvents["footerCellDblClick"] = "footerCellDblClick";
    GridEvents["headerCellRightClick"] = "headerCellRightClick";
    GridEvents["footerCellRightClick"] = "footerCellRightClick";
    GridEvents["beforeEditStart"] = "beforeEditStart";
    GridEvents["afterEditStart"] = "afterEditStart";
    GridEvents["beforeEditEnd"] = "beforeEditEnd";
    GridEvents["afterEditEnd"] = "afterEditEnd";
    GridEvents["beforeKeyDown"] = "beforeKeyDown";
    GridEvents["afterKeyDown"] = "afterKeyDown";
    GridEvents["beforeColumnHide"] = "beforeColumnHide";
    GridEvents["afterColumnHide"] = "afterColumnHide";
    GridEvents["beforeColumnShow"] = "beforeColumnShow";
    GridEvents["afterColumnShow"] = "afterColumnShow";
    GridEvents["beforeRowHide"] = "beforeRowHide";
    GridEvents["afterRowHide"] = "afterRowHide";
    GridEvents["beforeRowShow"] = "beforeRowShow";
    GridEvents["afterRowShow"] = "afterRowShow";
    GridEvents["beforeRowDrag"] = "beforeRowDrag";
    GridEvents["dragRowStart"] = "dragRowStart";
    GridEvents["dragRowOut"] = "dragRowOut";
    GridEvents["dragRowIn"] = "dragRowIn";
    GridEvents["canRowDrop"] = "canRowDrop";
    GridEvents["cancelRowDrop"] = "cancelRowDrop";
    GridEvents["beforeRowDrop"] = "beforeRowDrop";
    GridEvents["afterRowDrop"] = "afterRowDrop";
    GridEvents["afterRowDrag"] = "afterRowDrag";
    GridEvents["beforeColumnDrag"] = "beforeColumnDrag";
    GridEvents["dragColumnStart"] = "dragColumnStart";
    GridEvents["dragColumnOut"] = "dragColumnOut";
    GridEvents["dragColumnIn"] = "dragColumnIn";
    GridEvents["canColumnDrop"] = "canColumnDrop";
    GridEvents["cancelColumnDrop"] = "cancelColumnDrop";
    GridEvents["beforeColumnDrop"] = "beforeColumnDrop";
    GridEvents["afterColumnDrop"] = "afterColumnDrop";
    GridEvents["afterColumnDrag"] = "afterColumnDrag";
    GridEvents["beforeRowResize"] = "beforeRowResize";
    GridEvents["afterRowResize"] = "afterRowResize";
    GridEvents["beforeSort"] = "beforeSort";
    GridEvents["afterSort"] = "afterSort";
    GridEvents["groupPanelItemClick"] = "groupPanelItemClick";
    GridEvents["groupPanelItemMouseDown"] = "groupPanelItemMouseDown";
})(GridEvents || (exports.GridEvents = GridEvents = {}));
var GridSystemEvents;
(function (GridSystemEvents) {
    GridSystemEvents["cellTouchMove"] = "cellTouchMove";
    GridSystemEvents["cellTouchEnd"] = "cellTouchEnd";
    GridSystemEvents["headerCellTouchMove"] = "headerCellTouchMove";
    GridSystemEvents["headerCellTouchEnd"] = "headerCellTouchEnd";
    GridSystemEvents["groupPanelItemTouchMove"] = "groupPanelItemTouchMove";
    GridSystemEvents["groupPanelItemItemTouchEnd"] = "groupPanelItemItemTouchEnd";
})(GridSystemEvents || (exports.GridSystemEvents = GridSystemEvents = {}));
var HeaderFilterEvent;
(function (HeaderFilterEvent) {
    HeaderFilterEvent["change"] = "change";
})(HeaderFilterEvent || (exports.HeaderFilterEvent = HeaderFilterEvent = {}));
var Split;
(function (Split) {
    Split["left"] = "leftSplit";
    Split["right"] = "rightSplit";
    Split["top"] = "topSplit";
    Split["bottom"] = "bottomSplit";
})(Split || (exports.Split = Split = {}));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsMixin = exports.EventSystem = void 0;
var EventSystem = /** @class */ (function () {
    function EventSystem(context) {
        this.events = {};
        this.context = context || this;
    }
    EventSystem.prototype.on = function (name, callback, context) {
        var event = name.toLowerCase();
        this.events[event] = this.events[event] || [];
        this.events[event].push({ callback: callback, context: context || this.context });
    };
    EventSystem.prototype.detach = function (name, context) {
        var event = name.toLowerCase();
        var eStack = this.events[event];
        if (context && eStack && eStack.length) {
            for (var i = eStack.length - 1; i >= 0; i--) {
                if (eStack[i].context === context) {
                    eStack.splice(i, 1);
                }
            }
        }
        else {
            this.events[event] = [];
        }
    };
    EventSystem.prototype.fire = function (name, args) {
        if (typeof args === "undefined") {
            args = [];
        }
        var event = name.toLowerCase();
        if (this.events[event]) {
            var res = this.events[event].map(function (e) { return e.callback.apply(e.context, args); });
            return !res.includes(false);
        }
        return true;
    };
    EventSystem.prototype.clear = function () {
        this.events = {};
    };
    return EventSystem;
}());
exports.EventSystem = EventSystem;
function EventsMixin(obj) {
    obj = obj || {};
    var eventSystem = new EventSystem(obj);
    obj.detachEvent = eventSystem.detach.bind(eventSystem);
    obj.attachEvent = eventSystem.on.bind(eventSystem);
    obj.callEvent = eventSystem.fire.bind(eventSystem);
}
exports.EventsMixin = EventsMixin;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(9), exports);
__exportStar(__webpack_require__(30), exports);
__exportStar(__webpack_require__(71), exports);
__exportStar(__webpack_require__(72), exports);
__exportStar(__webpack_require__(14), exports);
__exportStar(__webpack_require__(74), exports);
__exportStar(__webpack_require__(10), exports);
__exportStar(__webpack_require__(33), exports);
__exportStar(__webpack_require__(32), exports);
__exportStar(__webpack_require__(75), exports);
__exportStar(__webpack_require__(31), exports);
__exportStar(__webpack_require__(20), exports);
__exportStar(__webpack_require__(34), exports);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.toViewLike = exports.View = void 0;
var core_1 = __webpack_require__(0);
var html_1 = __webpack_require__(2);
var View = /** @class */ (function () {
    function View(_container, config) {
        var _a;
        this.config = config || {};
        this._uid = (_a = this.config.rootId) !== null && _a !== void 0 ? _a : (0, core_1.uid)();
    }
    View.prototype.mount = function (container, vnode) {
        if (vnode) {
            this._view = vnode;
        }
        if (container && this._view && this._view.mount) {
            // init view inside of HTML container
            this._container = (0, html_1.toNode)(container);
            if (this._container.tagName) {
                this._view.mount(this._container);
            }
            else if (this._container.attach) {
                this._container.attach(this);
            }
        }
    };
    View.prototype.unmount = function () {
        var rootView = this.getRootView();
        if (rootView && rootView.node) {
            if (this.getRootNode())
                rootView.unmount();
            this._view = null;
        }
    };
    View.prototype.getRootView = function () {
        return this._view;
    };
    View.prototype.getRootNode = function () {
        return this._view && this._view.node && this._view.node.el;
    };
    View.prototype.paint = function () {
        if (this._view && // was mounted
            (this._view.node || // already rendered node
                this._container)) {
            // not rendered, but has container
            this._doNotRepaint = false;
            this._view.redraw();
        }
    };
    return View;
}());
exports.View = View;
function toViewLike(view) {
    return {
        getRootView: function () { return view; },
        paint: function () { return view.node && view.redraw(); },
        mount: function (container) { return view.mount(container); },
    };
}
exports.toViewLike = toViewLike;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrollFixedColsAndRows = exports.getTotalHeight = exports.getTotalWidth = exports.isHtmlEnable = exports.isTooltip = exports.getTooltipConfig = exports.isContentTooltip = exports.showTooltip = exports.isAutoWidth = exports.isSortable = exports.isRowEmpty = exports.isCssSupport = exports.removeHTMLTags = exports.getStyleByClass = exports.transpose = void 0;
var core_1 = __webpack_require__(0);
var html_1 = __webpack_require__(2);
var ts_message_1 = __webpack_require__(78);
function transpose(arr, transform) {
    var columns = [];
    for (var i = 0; i < arr.length; i++) {
        var row = arr[i];
        for (var cellInd = 0; cellInd < row.length; cellInd++) {
            columns[cellInd] = columns[cellInd] || [];
            var cell = transform ? transform(row[cellInd]) : row[cellInd];
            columns[cellInd].push(cell);
        }
    }
    return columns;
}
exports.transpose = transpose;
function insert(node, newone) {
    if (typeof newone === "string") {
        node.insertAdjacentHTML("beforeend", newone);
        return node.lastChild;
    }
    else {
        node.appendChild(newone);
        return newone;
    }
}
function getStyleByClass(cssClass, targetClass, def, container) {
    if (container === void 0) { container = document.body; }
    var cont = container.querySelector("." + targetClass.trim().replace(/\s/g, "."));
    var testDiv = insert(cont, "<div class=\"".concat(cssClass, "\"></div>"));
    var styles = window.getComputedStyle(testDiv);
    var TRANSPARENT = "rgba(0, 0, 0, 0)";
    var background;
    if (styles.backgroundColor === TRANSPARENT) {
        var contStyles = window.getComputedStyle(cont);
        background =
            contStyles.backgroundColor === TRANSPARENT
                ? def.background
                : (0, core_1.rgbToHex)(contStyles.backgroundColor);
    }
    else {
        background = (0, core_1.rgbToHex)(styles.backgroundColor);
    }
    var result = {
        color: styles.color === "rgb(0, 0, 0)" ? def.color : (0, core_1.rgbToHex)(styles.color),
        background: background,
        fontSize: Math.round(parseFloat(styles.fontSize)),
        bold: ["bold", "700", "600", "500"].includes(styles.fontWeight),
    };
    cont.removeChild(testDiv);
    if ((0, core_1.compare)(result, def))
        return null;
    return result;
}
exports.getStyleByClass = getStyleByClass;
function removeHTMLTags(str) {
    if (typeof str !== "string" && typeof str !== "number" && typeof str !== "boolean") {
        return "";
    }
    return "".concat(str === undefined || str === null ? "" : str)
        .replace(/<[^>]*>/g, "")
        .replace(/["]/g, "&quot;")
        .trim();
}
exports.removeHTMLTags = removeHTMLTags;
function isCssSupport(property, value) {
    try {
        return CSS.supports(property, value);
    }
    catch (err) {
        var el = document.createElement("div");
        el.style[property] = value;
        return el.style[property] === value;
    }
}
exports.isCssSupport = isCssSupport;
function isRowEmpty(row) {
    if (!row) {
        return;
    }
    return Object.keys(row).reduce(function (acc, col) {
        if (col === "id" || col.startsWith("$")) {
            return acc;
        }
        if (acc && row[col] !== undefined && row[col] !== "") {
            return;
        }
        return acc;
    }, true);
}
exports.isRowEmpty = isRowEmpty;
function isSortable(config, col) {
    return (col.sortable !== false && config.sortable) || col.sortable;
}
exports.isSortable = isSortable;
function isAutoWidth(config, col) {
    if (col) {
        return (col.autoWidth !== false && config.autoWidth) || col.autoWidth;
    }
    var check = false;
    config.columns.map(function (col) {
        if ((col.autoWidth !== false && config.autoWidth) || col.autoWidth) {
            check = true;
            return;
        }
    });
    return check;
}
exports.isAutoWidth = isAutoWidth;
function showTooltip(value, config) {
    if (!config.node)
        return;
    (0, ts_message_1.tooltip)(value.toString(), __assign(__assign({}, config), { css: "dhx_grid_tooltip " + (config.css || "") }));
}
exports.showTooltip = showTooltip;
function isContentTooltip(config, col, cell, type) {
    var isEnable = false;
    var cellProp = type === "header" ? config.headerTooltip : config.footerTooltip;
    var prop = [config.tooltip, cellProp, col.tooltip, cell === null || cell === void 0 ? void 0 : cell.tooltip];
    for (var index = 0; index < prop.length; index++) {
        if (prop[index] || typeof prop[index] === "boolean") {
            isEnable = !!prop[index];
        }
    }
    return isEnable;
}
exports.isContentTooltip = isContentTooltip;
function getTooltipConfig(config, col, cell, type) {
    return ([
        cell === null || cell === void 0 ? void 0 : cell.tooltip,
        col === null || col === void 0 ? void 0 : col.tooltip,
        type && (type === "header" ? config.headerTooltip : config.footerTooltip),
        config.tooltip,
    ].find(function (tooltip) { return tooltip instanceof Object; }) || {});
}
exports.getTooltipConfig = getTooltipConfig;
function isTooltip(config, element) {
    return (element.tooltip !== false && config.tooltip) || element.tooltip;
}
exports.isTooltip = isTooltip;
function isHtmlEnable(config, col, content) {
    var _a, _b;
    return !!((_b = (_a = content === null || content === void 0 ? void 0 : content.htmlEnable) !== null && _a !== void 0 ? _a : col.htmlEnable) !== null && _b !== void 0 ? _b : config.htmlEnable);
}
exports.isHtmlEnable = isHtmlEnable;
function getTotalWidth(columns) {
    return columns.reduce(function (total, col) { return total + (col.$width || 0); }, 0);
}
exports.getTotalWidth = getTotalWidth;
function getTotalHeight(rows) {
    return rows.reduce(function (total, row) { return total + (row.$height || 0); }, 0);
}
exports.getTotalHeight = getTotalHeight;
function scrollFixedColsAndRows(e) {
    var grid = (0, html_1.locateNode)(e, "data-dhx-widget-id");
    var gridBody = grid.querySelector(".dhx_grid-body");
    var delta = e.deltaY;
    var position = e.shiftKey ? [delta, 0] : [0, delta];
    gridBody === null || gridBody === void 0 ? void 0 : gridBody.scrollBy.apply(gridBody, position);
}
exports.scrollFixedColsAndRows = scrollFixedColsAndRows;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEditorValue = exports.getValueForNumberColumn = exports.getEditorOptions = exports.applyPattern = exports.getMaxColsWidth = exports.getTreeCellWidthOffset = exports.getCalculatedRowHeight = exports.getMaxRowHeight = exports.getUnique = exports.calculatePositions = exports.countColumns = exports.measureTextHeight = exports.normalizeArray = void 0;
var core_1 = __webpack_require__(0);
var main_1 = __webpack_require__(7);
var date_1 = __webpack_require__(13);
var input_1 = __webpack_require__(23);
function normalizeArray(obj, name) {
    if (!obj[name]) {
        return;
    }
    if (typeof obj[name] === "string") {
        obj[name] = [
            {
                text: "".concat(obj[name]),
            },
        ];
    }
    else {
        obj[name] = obj[name].map(function (el) {
            if (typeof el === "string") {
                el = { text: el };
            }
            return el;
        });
    }
}
exports.normalizeArray = normalizeArray;
function measureTextHeight(_a) {
    var _b = _a.text, text = _b === void 0 ? "" : _b, _c = _a.width, width = _c === void 0 ? 0 : _c, _d = _a.lineHeight, lineHeight = _d === void 0 ? 20 : _d, _e = _a.font, font = _e === void 0 ? "14px Arial" : _e, _f = _a.htmlEnable, htmlEnable = _f === void 0 ? false : _f;
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d", {
        alpha: false,
    });
    ctx.font = font;
    var defaultLineBreak = [];
    var mathLineBreak = [];
    if (htmlEnable)
        text = (0, main_1.removeHTMLTags)(text);
    var lineBreak = Math.ceil(ctx.measureText(text).width / width);
    if (lineBreak > 1)
        lineBreak = (0, core_1.getTextLines)(ctx, text, width).length;
    mathLineBreak.push(lineBreak);
    defaultLineBreak.push(text.split("\n").length);
    var maxRows = Math.max((0, core_1.getMaxArrayNumber)(defaultLineBreak), (0, core_1.getMaxArrayNumber)(mathLineBreak));
    canvas.remove();
    return maxRows * lineHeight;
}
exports.measureTextHeight = measureTextHeight;
function countColumns(config, columns) {
    var headerRowsCount = 0;
    var footerRowsCount = 0;
    var totalWidth = 0;
    var colspans = false;
    var rowsHeadersCount = 0;
    var footer = false;
    columns.forEach(function (col) {
        headerRowsCount = Math.max(headerRowsCount, col.header.length);
        totalWidth += col.$width;
        if (col.footer) {
            footerRowsCount = Math.max(footerRowsCount, col.footer.length);
            if (!footer) {
                footer = true;
            }
        }
        if (!colspans) {
            for (var _i = 0, _a = col.header; _i < _a.length; _i++) {
                var head = _a[_i];
                if (head.colspan) {
                    colspans = true;
                    return;
                }
            }
        }
    });
    // fill missing cells
    columns.forEach(function (col) {
        if (footer) {
            col.footer = col.footer || [];
        }
        if (col.header.length < headerRowsCount) {
            for (var i = 0; i < headerRowsCount; i++) {
                col.header[i] = col.header[i] || { text: "" };
            }
        }
        if (col.footer) {
            if (col.footer.length < footerRowsCount) {
                for (var i = 0; i < footerRowsCount; i++) {
                    col.footer[i] = col.footer[i] || { text: "" };
                }
            }
            for (var i = 0; i < col.footer.length; i++) {
                if (!col.footer[i].id)
                    col.footer[i].id = (0, core_1.uid)();
            }
        }
        col.header = col.header.map(function (head) {
            if (typeof head !== "object") {
                head = { text: head };
            }
            head.css = head.css || "";
            if (!head.text && !head.css.includes("dhx_cell-empty")) {
                head.css += " dhx_cell-empty";
            }
            if (!head.id)
                head.id = (0, core_1.uid)();
            return head;
        });
        // find header columns indexes
        if (col.header[0].text === "") {
            rowsHeadersCount++;
        }
    });
    config.$totalWidth = totalWidth;
    config.$colspans = colspans;
    config.$footer = footer;
    return rowsHeadersCount;
}
exports.countColumns = countColumns;
function calculatePositions(width, height, scroll, conf, data) {
    var _a, _b, _c;
    var columns = conf.columns || [];
    var columnsLength = columns.length;
    var rows = data || [];
    var rowsLength = rows.length;
    var leftSplit = conf.leftSplit
        ? conf.columns.slice(0, conf.leftSplit).filter(function (col) { return !col.hidden; }).length
        : 0;
    var topSplit = (_a = conf.topSplit) !== null && _a !== void 0 ? _a : 0;
    var rightSplit = (_b = conf.rightSplit) !== null && _b !== void 0 ? _b : 0;
    var bottomSplit = (_c = conf.bottomSplit) !== null && _c !== void 0 ? _c : 0;
    var x = 0;
    var hiddenColCount = 0;
    var scrollLeft = scroll.left;
    var avrColWidth = conf.$totalWidth / columnsLength;
    for (var i = 0; i < columnsLength; i++) {
        var col = columns[i];
        if (col.hidden) {
            hiddenColCount++;
            continue;
        }
        scrollLeft = scrollLeft - col.$width;
        if (scrollLeft + avrColWidth / 2 > 0) {
            x++;
        }
        else {
            break;
        }
    }
    var y = 0;
    var hiddenRowCount = 0;
    var scrollTop = scroll.top;
    var avrRowHeight = conf.$totalHeight / rowsLength;
    for (var i = 0; i < rowsLength; i++) {
        var row = rows[i];
        if (row.hidden) {
            hiddenRowCount++;
            continue;
        }
        scrollTop = scrollTop - row.$height;
        if (scrollTop + avrRowHeight / 2 > 0) {
            y++;
        }
        else {
            break;
        }
    }
    var sizeByWidth = 0;
    var itemsTotalByWidth = 0;
    var maxWidth = -Infinity;
    var minWidth = +Infinity;
    var xStartIdx = x + hiddenColCount;
    for (var index = 0; index < columnsLength; index++) {
        var column = columns[index];
        if (index >= xStartIdx && sizeByWidth < width && !column.hidden) {
            sizeByWidth += column.$width;
            itemsTotalByWidth++;
        }
        if (column.$width > maxWidth)
            maxWidth = column.$width;
        if (column.$width < minWidth)
            minWidth = column.$width;
    }
    var sizeByHeight = 0;
    var itemsTotalByHeight = 0;
    var maxHeight = -Infinity;
    var minHeight = +Infinity;
    var yStartIdx = y + hiddenRowCount;
    for (var index = 0; index < rowsLength; index++) {
        var row = rows[index];
        if (index >= yStartIdx && sizeByHeight < height && !row.hidden) {
            sizeByHeight += row.$height;
            itemsTotalByHeight++;
        }
        if (row.$height > maxHeight)
            maxHeight = row.$height;
        if (row.$height < minHeight)
            minHeight = row.$height;
    }
    minHeight = minHeight < conf.rowHeight ? minHeight : conf.rowHeight;
    var xReserve = Math.round(maxWidth / minWidth);
    var yReserve = Math.round(maxHeight / minHeight);
    var xStart = x - xReserve >= leftSplit ? x - xReserve : leftSplit;
    var xTotal = x + itemsTotalByWidth + xReserve;
    var leftSplitHidden = (conf.leftSplit || 0) - leftSplit;
    var colIndexStartSplit = columns.length - rightSplit - leftSplitHidden;
    var xEnd = xTotal < colIndexStartSplit ? xTotal : colIndexStartSplit;
    var yStart = y - yReserve >= topSplit ? y - yReserve : topSplit;
    var yTotal = y + itemsTotalByHeight + yReserve;
    var rowIndexStartSplit = rows.length - bottomSplit;
    var yEnd = yTotal < rowIndexStartSplit ? yTotal : rowIndexStartSplit;
    return {
        xStart: xStart,
        xEnd: xEnd,
        yStart: yStart,
        yEnd: yEnd,
    };
}
exports.calculatePositions = calculatePositions;
function getUnique(arr, name, multiselection) {
    var allItems = arr.map(function (item) { return item[name]; });
    if (multiselection) {
        allItems.forEach(function (item, index) {
            if (typeof item === "string" && item.includes(", ")) {
                item.split(", ").forEach(function (i) { return allItems.push(i); });
                delete allItems[index];
            }
        });
    }
    return allItems
        .filter(function (item, i, array) { return array.indexOf(item) === i && (0, core_1.isDefined)(item); })
        .sort(function (a, b) {
        var numA = parseFloat(a);
        var numB = parseFloat(b);
        if (!isNaN(numA) && !isNaN(numB)) {
            return numA === numB ? a.toString().localeCompare(b.toString()) : numA - numB;
        }
        a = typeof a === "boolean" ? a.toString() : a;
        b = typeof b === "boolean" ? b.toString() : b;
        if (isNaN(a) && isNaN(b))
            return a.localeCompare(b);
        return a === "" ? -1 : b === "" ? 1 : isNaN(a) ? 1 : -1;
    });
}
exports.getUnique = getUnique;
var getMaxRowHeight = function (row, cols, config) {
    var _a, _b;
    if (config === void 0) { config = { font: "14px Arial", lineHeight: 20 }; }
    var HORIZONTAL_OFFSET = 24;
    var VERTICAL_OFFSET = 8;
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d", {
        alpha: false,
    });
    ctx.font = config.font;
    var definedColumns = {};
    var colLength = cols.length;
    for (var index = 0; index < colLength; index++) {
        definedColumns[cols[index].id] = {
            width: cols[index].$width - HORIZONTAL_OFFSET || 0,
            col: cols[index],
        };
    }
    var defaultLineBreak = [];
    var mathLineBreak = [];
    // eslint-disable-next-line prefer-const
    for (var _i = 0, _c = Object.entries(row); _i < _c.length; _i++) {
        var _d = _c[_i], key = _d[0], value = _d[1];
        var column = (_a = definedColumns[key]) === null || _a === void 0 ? void 0 : _a.col;
        if (column &&
            key !== "height" &&
            !key.startsWith("$") &&
            (typeof value === "string" ||
                typeof value === "number" ||
                value instanceof Date ||
                Array.isArray(value))) {
            value =
                column.editorType === "combobox" || column.editorType === "multiselect"
                    ? getComboEditorValue(value, column, row)
                    : applyPattern(value, column);
            var currentValue = "";
            if (typeof column.template === "function") {
                var templateValue = column.template(value, row, definedColumns[key].col);
                currentValue = column.htmlEnable ? (0, main_1.removeHTMLTags)(templateValue) : templateValue.toString();
            }
            else if (typeof value === "string") {
                if (column.htmlEnable) {
                    currentValue = (0, main_1.removeHTMLTags)(value);
                }
                else {
                    currentValue = value;
                }
            }
            else {
                currentValue = value.toString();
            }
            var lineBreak = Math.ceil(ctx.measureText(currentValue).width / definedColumns[key].width);
            if (lineBreak > 1) {
                lineBreak = (0, core_1.getTextLines)(ctx, currentValue, (_b = definedColumns[key]) === null || _b === void 0 ? void 0 : _b.width).length;
            }
            mathLineBreak.push(lineBreak);
            defaultLineBreak.push(currentValue.split("\n").length);
        }
    }
    var maxRows = Math.max((0, core_1.getMaxArrayNumber)(defaultLineBreak), (0, core_1.getMaxArrayNumber)(mathLineBreak));
    canvas.remove();
    return maxRows * config.lineHeight + VERTICAL_OFFSET;
};
exports.getMaxRowHeight = getMaxRowHeight;
var getCalculatedRowHeight = function (height, config) {
    config = __assign({ rowHeight: 40, padding: 12 }, config);
    var calculateHeight = config.rowHeight < 40 ? height : height + config.padding * 2;
    return height < config.rowHeight ? config.rowHeight : calculateHeight;
};
exports.getCalculatedRowHeight = getCalculatedRowHeight;
var getTreeCellWidthOffset = function (row, toArrow) {
    if (toArrow === void 0) { toArrow = false; }
    return 20 + row.$level * 20 - (toArrow && row.$items ? 20 : 0);
};
exports.getTreeCellWidthOffset = getTreeCellWidthOffset;
var getMaxColsWidth = function (rows, cols, config, target) {
    var _a;
    if (config === void 0) { config = {
        font: "normal 14.4px Arial",
    }; }
    if (!rows.length || !cols.length) {
        return {};
    }
    var definedColumns = {};
    var colLength = cols.length;
    var rowsLength = rows.length;
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d", {
        alpha: false,
    });
    ctx.font = config.font;
    for (var index = 0; index < colLength; index++) {
        definedColumns[cols[index].id] = {
            width: 20,
            col: cols[index],
        };
    }
    for (var index = 0; index < rowsLength; index++) {
        // eslint-disable-next-line prefer-const
        for (var _i = 0, _b = Object.entries(rows[index]); _i < _b.length; _i++) {
            var _c = _b[_i], key = _c[0], value = _c[1];
            var column = (_a = definedColumns[key]) === null || _a === void 0 ? void 0 : _a.col;
            if (column &&
                key !== "height" &&
                !key.startsWith("$") &&
                (typeof value === "string" ||
                    typeof value === "number" ||
                    value instanceof Date ||
                    Array.isArray(value))) {
                value =
                    column.editorType === "combobox" || column.editorType === "multiselect"
                        ? getComboEditorValue(value, column, rows[index])
                        : value;
                if (target !== "header") {
                    value = applyPattern(value, column);
                }
                var currentValue = void 0;
                if (typeof (column === null || column === void 0 ? void 0 : column.template) === "function" && target === "data") {
                    var templateValue = column.template(value, rows[index], column);
                    currentValue = column.htmlEnable ? (0, main_1.removeHTMLTags)(templateValue) : templateValue;
                }
                else {
                    currentValue = column.htmlEnable ? (0, main_1.removeHTMLTags)(value) : value.toString();
                }
                var width = ctx.measureText(currentValue).width;
                if (width > definedColumns[key].width)
                    definedColumns[key].width = width;
            }
        }
    }
    canvas.remove();
    var totalColumns = {};
    for (var _d = 0, _e = Object.entries(definedColumns); _d < _e.length; _d++) {
        var _f = _e[_d], key = _f[0], value = _f[1];
        totalColumns[key] = Math.ceil(value.width);
    }
    return totalColumns;
};
exports.getMaxColsWidth = getMaxColsWidth;
function applyPattern(value, col) {
    if (!(0, core_1.isDefined)(value) || typeof value === "boolean" || value === "") {
        return value;
    }
    if (col.type === "date") {
        var dateFormat = col.dateFormat || "%M %d %Y";
        if (typeof value === "string") {
            if (!(0, date_1.stringToDate)(value, dateFormat, true)) {
                var date = new Date(value);
                if (date === null || date === void 0 ? void 0 : date.valueOf()) {
                    value = (0, date_1.getFormattedDate)(dateFormat, date);
                }
            }
        }
        else if (typeof value === "object") {
            value = (0, date_1.getFormattedDate)(dateFormat, value);
        }
        return value;
    }
    if (col.type === "number" || col.numberMask) {
        value = parseFloat(value);
        if (isNaN(value)) {
            return value;
        }
    }
    if (col.numberMask) {
        var maxDecLength = col.numberMask.maxDecLength;
        if ((0, core_1.isDefined)(maxDecLength)) {
            value = +value.toFixed(maxDecLength);
        }
        return (0, input_1.numberMask)(value, __assign(__assign({}, col.numberMask), { onlyView: true }));
    }
    if (col.patternMask) {
        return (0, input_1.patternMask)(value, col.patternMask);
    }
    return value;
}
exports.applyPattern = applyPattern;
function getEditorOptions(col, row) {
    return __spreadArray(__spreadArray([], ((typeof col.options === "function" ? col.options(col, row) : col.options) || []), true), (col.$customOptions || []), true);
}
exports.getEditorOptions = getEditorOptions;
function getValueForNumberColumn(col, value) {
    if (!(0, core_1.isDefined)(value) ||
        value === "" ||
        typeof value === "number" ||
        ["select", "combobox", "multiselect"].includes(col.editorType)) {
        return value;
    }
    else if (typeof value === "string") {
        return parseFloat(value);
    }
    else {
        return NaN;
    }
}
exports.getValueForNumberColumn = getValueForNumberColumn;
function getComboEditorValue(value, col, row) {
    var options = getEditorOptions(col, row);
    return col.editorType === "multiselect" && typeof value === "string"
        ? value
            .split(",")
            .map(function (val) { return getEditorValue(val.trim(), options); })
            .join(", ")
        : getEditorValue(value, options);
}
function getEditorValue(value, options) {
    var option = options.find(function (option) { return option instanceof Object && option.id == value; });
    return option ? option.value : value;
}
exports.getEditorValue = getEditorValue;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DataDriver = exports.DragEvents = exports.DataEvents = exports.TreeFilterType = void 0;
var TreeFilterType;
(function (TreeFilterType) {
    TreeFilterType["all"] = "all";
    TreeFilterType["level"] = "level";
    TreeFilterType["leafs"] = "leafs";
})(TreeFilterType || (exports.TreeFilterType = TreeFilterType = {}));
var DataEvents;
(function (DataEvents) {
    DataEvents["afterAdd"] = "afteradd";
    DataEvents["beforeAdd"] = "beforeadd";
    DataEvents["removeAll"] = "removeall";
    DataEvents["beforeRemove"] = "beforeremove";
    DataEvents["afterRemove"] = "afterremove";
    DataEvents["change"] = "change";
    DataEvents["filter"] = "filter";
    DataEvents["dataRequest"] = "dataRequest";
    DataEvents["load"] = "load";
    DataEvents["loadError"] = "loaderror";
    DataEvents["beforeLazyLoad"] = "beforelazyload";
    DataEvents["afterLazyLoad"] = "afterlazyload";
    DataEvents["beforeItemLoad"] = "beforeItemLoad";
    DataEvents["afterItemLoad"] = "afterItemLoad";
    DataEvents["beforeGroup"] = "beforeGroup";
    DataEvents["afterGroup"] = "afterGroup";
    DataEvents["beforeUnGroup"] = "beforeUnGroup";
    DataEvents["afterUnGroup"] = "afterUnGroup";
})(DataEvents || (exports.DataEvents = DataEvents = {}));
var DragEvents;
(function (DragEvents) {
    DragEvents["beforeDrag"] = "beforeDrag";
    DragEvents["dragStart"] = "dragStart";
    DragEvents["dragOut"] = "dragOut";
    DragEvents["dragIn"] = "dragIn";
    DragEvents["canDrop"] = "canDrop";
    DragEvents["cancelDrop"] = "cancelDrop";
    DragEvents["beforeDrop"] = "beforeDrop";
    DragEvents["afterDrop"] = "afterDrop";
    DragEvents["afterDrag"] = "afterDrag";
})(DragEvents || (exports.DragEvents = DragEvents = {}));
var DataDriver;
(function (DataDriver) {
    DataDriver["json"] = "json";
    DataDriver["csv"] = "csv";
    DataDriver["xml"] = "xml";
})(DataDriver || (exports.DataDriver = DataDriver = {}));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isOnlyPermanentFilters = exports.hasJsonOrArrayStructure = exports.isTreeCollection = exports.copyWithoutInner = exports.toDataDriver = exports.toProxy = exports.dhxError = exports.dhxWarning = exports.isDebug = exports.findByConf = exports.naturalCompare = exports.isEqualObj = void 0;
var core_1 = __webpack_require__(0);
var dataproxy_1 = __webpack_require__(14);
var drivers_1 = __webpack_require__(31);
function isEqualObj(a, b) {
    for (var key in a) {
        if (a[key] !== b[key] || Array.isArray(a[key])) {
            return false;
        }
    }
    return true;
}
exports.isEqualObj = isEqualObj;
function naturalCompare(a, b) {
    if (isNaN(a) || isNaN(b)) {
        var ax_1 = [];
        var bx_1 = [];
        a.replace(/(\d+)|(\D+)/g, function (_, $1, $2) {
            ax_1.push([$1 || Infinity, $2 || ""]);
        });
        b.replace(/(\d+)|(\D+)/g, function (_, $1, $2) {
            bx_1.push([$1 || Infinity, $2 || ""]);
        });
        while (ax_1.length && bx_1.length) {
            var an = ax_1.shift();
            var bn = bx_1.shift();
            var nn = an[0] - bn[0] || an[1].localeCompare(bn[1]);
            if (nn) {
                return nn;
            }
        }
        return ax_1.length - bx_1.length;
    }
    return a - b;
}
exports.naturalCompare = naturalCompare;
function findByConf(item, conf, index, array) {
    if (typeof conf === "function") {
        if (conf.call(this, item, index, array)) {
            return item;
        }
    }
    else if (conf.by && conf.match) {
        if (item[conf.by] === conf.match) {
            return item;
        }
    }
}
exports.findByConf = findByConf;
function isDebug() {
    var dhx = window.dhx;
    if (typeof dhx !== "undefined") {
        return typeof dhx.debug !== "undefined" && dhx.debug;
    }
    // return typeof DHX_DEBUG_MODE !== "undefined" && DHX_DEBUG_MODE;
}
exports.isDebug = isDebug;
function dhxWarning(msg) {
    // tslint:disable-next-line:no-console
    console.warn(msg);
}
exports.dhxWarning = dhxWarning;
function dhxError(msg) {
    throw new Error(msg);
}
exports.dhxError = dhxError;
function toProxy(proxy) {
    var type = typeof proxy;
    if (type === "string") {
        return new dataproxy_1.DataProxy(proxy);
    }
    else if (type === "object") {
        return proxy;
    }
}
exports.toProxy = toProxy;
function toDataDriver(driver) {
    if (typeof driver === "string") {
        var dhx = window.dhx;
        var drivers = (dhx && dhx.dataDrivers) || drivers_1.dataDrivers;
        if (drivers[driver]) {
            return new drivers[driver]();
        }
        else {
            // tslint:disable-next-line:no-console
            console.warn("Incorrect data driver type:", driver);
            // tslint:disable-next-line:no-console
            console.warn("Available types:", JSON.stringify(Object.keys(drivers)));
        }
    }
    else if (typeof driver === "object") {
        return driver;
    }
}
exports.toDataDriver = toDataDriver;
function copyWithoutInner(obj, forbidden) {
    var result = {};
    for (var key in obj) {
        if (!key.startsWith("$") && (!forbidden || !forbidden[key])) {
            result[key] = obj[key];
        }
    }
    return result;
}
exports.copyWithoutInner = copyWithoutInner;
function isTreeCollection(obj) {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    return Boolean(obj.getRoot);
}
exports.isTreeCollection = isTreeCollection;
function hasJsonOrArrayStructure(str) {
    if (typeof str === "object") {
        return true;
    }
    if (typeof str !== "string") {
        return false;
    }
    try {
        var result = JSON.parse(str);
        return Object.prototype.toString.call(result) === "[object Object]" || Array.isArray(result);
    }
    catch (err) {
        return false;
    }
}
exports.hasJsonOrArrayStructure = hasJsonOrArrayStructure;
function isOnlyPermanentFilters(filters) {
    if (!filters || (0, core_1.isEmptyObj)(filters))
        return false;
    return Object.keys(filters).every(function (key) {
        var _a;
        return (_a = filters[key].config) === null || _a === void 0 ? void 0 : _a.permanent;
    });
}
exports.isOnlyPermanentFilters = isOnlyPermanentFilters;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrFixedCols = exports.calcScrollBarWidth = exports.BORDERS = void 0;
var html_1 = __webpack_require__(2);
var types_1 = __webpack_require__(3);
exports.BORDERS = 2;
function calcScrollBarWidth(config, customScroll, sizes) {
    var _a, _b;
    if (customScroll === void 0) { customScroll = false; }
    var yState = config.$totalHeight + config.$headerHeight + config.$footerHeight + exports.BORDERS >
        ((_a = sizes === null || sizes === void 0 ? void 0 : sizes.height) !== null && _a !== void 0 ? _a : config.$height);
    var scrollbarY = !yState || customScroll ? 0 : (0, html_1.getScrollbarWidth)();
    var xState = config.$totalWidth + exports.BORDERS + scrollbarY > ((_b = sizes === null || sizes === void 0 ? void 0 : sizes.width) !== null && _b !== void 0 ? _b : config.$width);
    var scrollbarX = !xState || customScroll ? 0 : (0, html_1.getScrollbarWidth)();
    return { x: scrollbarX, y: scrollbarY, xState: xState, yState: yState };
}
exports.calcScrollBarWidth = calcScrollBarWidth;
function getCurrFixedCols(config, split) {
    if (!config[split])
        return [];
    return (split === types_1.Split.left
        ? config.columns.slice(0, config.leftSplit)
        : config.columns.slice(-config.rightSplit)).filter(function (col) { return !col.hidden; });
}
exports.getCurrFixedCols = getCurrFixedCols;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {(function () {
  global = typeof window !== 'undefined' ? window : this

  var queueId = 1
  var queue = {}
  var isRunningTask = false

  if (!global.setImmediate)
    global.addEventListener('message', function (e) {
      if (e.source == global){
        if (isRunningTask)
          nextTick(queue[e.data])
        else {
          isRunningTask = true
          try {
            queue[e.data]()
          } catch (e) {}

          delete queue[e.data]
          isRunningTask = false
        }
      }
    })

  function nextTick(fn) {
    if (global.setImmediate) setImmediate(fn)
    // if inside of web worker
    else if (global.importScripts) setTimeout(fn)
    else {
      queueId++
      queue[queueId] = fn
      global.postMessage(queueId, '*')
    }
  }

  Deferred.resolve = function (value) {
    if (!(this._d == 1))
      throw TypeError()

    if (value instanceof Deferred)
      return value

    return new Deferred(function (resolve) {
        resolve(value)
    })
  }

  Deferred.reject = function (value) {
    if (!(this._d == 1))
      throw TypeError()

    return new Deferred(function (resolve, reject) {
        reject(value)
    })
  }

  Deferred.all = function (arr) {
    if (!(this._d == 1))
      throw TypeError()

    if (!(arr instanceof Array))
      return Deferred.reject(TypeError())

    var d = new Deferred()

    function done(e, v) {
      if (v)
        return d.resolve(v)

      if (e)
        return d.reject(e)

      var unresolved = arr.reduce(function (cnt, v) {
        if (v && v.then)
          return cnt + 1
        return cnt
      }, 0)

      if(unresolved == 0)
        d.resolve(arr)

      arr.map(function (v, i) {
        if (v && v.then)
          v.then(function (r) {
            arr[i] = r
            done()
            return r
          }, done)
      })
    }

    done()

    return d
  }

  Deferred.race = function (arr) {
    if (!(this._d == 1))
      throw TypeError()

    if (!(arr instanceof Array))
      return Deferred.reject(TypeError())

    if (arr.length == 0)
      return new Deferred()

    var d = new Deferred()

    function done(e, v) {
      if (v)
        return d.resolve(v)

      if (e)
        return d.reject(e)

      var unresolved = arr.reduce(function (cnt, v) {
        if (v && v.then)
          return cnt + 1
        return cnt
      }, 0)

      if(unresolved == 0)
        d.resolve(arr)

      arr.map(function (v, i) {
        if (v && v.then)
          v.then(function (r) {
            done(null, r)
          }, done)
      })
    }

    done()

    return d
  }

  Deferred._d = 1


  /**
   * @constructor
   */
  function Deferred(resolver) {
    'use strict'
    if (typeof resolver != 'function' && resolver != undefined)
      throw TypeError()

    if (typeof this != 'object' || (this && this.then))
      throw TypeError()

    // states
    // 0: pending
    // 1: resolving
    // 2: rejecting
    // 3: resolved
    // 4: rejected
    var self = this,
      state = 0,
      val = 0,
      next = [],
      fn, er;

    self['promise'] = self

    self['resolve'] = function (v) {
      fn = self.fn
      er = self.er
      if (!state) {
        val = v
        state = 1

        nextTick(fire)
      }
      return self
    }

    self['reject'] = function (v) {
      fn = self.fn
      er = self.er
      if (!state) {
        val = v
        state = 2

        nextTick(fire)

      }
      return self
    }

    self['_d'] = 1

    self['then'] = function (_fn, _er) {
      if (!(this._d == 1))
        throw TypeError()

      var d = new Deferred()

      d.fn = _fn
      d.er = _er
      if (state == 3) {
        d.resolve(val)
      }
      else if (state == 4) {
        d.reject(val)
      }
      else {
        next.push(d)
      }

      return d
    }

    self['catch'] = function (_er) {
      return self['then'](null, _er)
    }

    var finish = function (type) {
      state = type || 4
      next.map(function (p) {
        state == 3 && p.resolve(val) || p.reject(val)
      })
    }

    try {
      if (typeof resolver == 'function')
        resolver(self['resolve'], self['reject'])
    } catch (e) {
      self['reject'](e)
    }

    return self

    // ref : reference to 'then' function
    // cb, ec, cn : successCallback, failureCallback, notThennableCallback
    function thennable (ref, cb, ec, cn) {
      // Promises can be rejected with other promises, which should pass through
      if (state == 2) {
        return cn()
      }
      if ((typeof val == 'object' || typeof val == 'function') && typeof ref == 'function') {
        try {

          // cnt protects against abuse calls from spec checker
          var cnt = 0
          ref.call(val, function (v) {
            if (cnt++) return
            val = v
            cb()
          }, function (v) {
            if (cnt++) return
            val = v
            ec()
          })
        } catch (e) {
          val = e
          ec()
        }
      } else {
        cn()
      }
    };

    function fire() {

      // check if it's a thenable
      var ref;
      try {
        ref = val && val.then
      } catch (e) {
        val = e
        state = 2
        return fire()
      }

      thennable(ref, function () {
        state = 1
        fire()
      }, function () {
        state = 2
        fire()
      }, function () {
        try {
          if (state == 1 && typeof fn == 'function') {
            val = fn(val)
          }

          else if (state == 2 && typeof er == 'function') {
            val = er(val)
            state = 1
          }
        } catch (e) {
          val = e
          return finish()
        }

        if (val == self) {
          val = TypeError()
          finish()
        } else thennable(ref, function () {
            finish(3)
          }, finish, function () {
            finish(state == 1 && 3)
          })

      })
    }


  }

  // Export our library object, either for node.js or as a globally scoped variable
  if (true) {
    module['exports'] = Deferred
  } else {}
})()

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(19), __webpack_require__(62).setImmediate))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DateHelper = exports.stringToDate = exports.getFormattedDate = exports.locale = void 0;
var core_1 = __webpack_require__(0);
var core_2 = __webpack_require__(0);
exports.locale = {
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Monday"],
    cancel: "Cancel",
};
/*
    %d	day as a number with leading zero, 01..31
    %j	day as a number, 1..31
    %D	short name of the day, Su Mo Tu...
    %l	full name of the day, Sunday Monday Tuesday...
    %m	month as a number with leading zero, 01..12
    %n	month as a number, 1..12
    %M	short name of the month, Jan Feb Mar...
    %F	full name of the month, January February March...
    %y	year as a number, 2 digits
    %Y	year as a number, 4 digits
    %h	hours 12-format with leading zero, 01..12)
    %g	hours 12-format, 1..12)
    %H	hours 24-format with leading zero, 01..24
    %G	hours 24-format, 1..24
    %i	minutes with leading zero, 01..59
    %s	seconds with leading zero, 01..59
    %a	am or pm
    %A	AM or PM
    %u	milliseconds
*/
var formatters = {
    "%d": function (date) {
        var day = date.getDate();
        return day < 10 ? "0" + day : day;
    },
    "%j": function (date) { return date.getDate(); },
    "%l": function (date) {
        return exports.locale.days[date.getDay()];
    },
    "%D": function (date) {
        return exports.locale.daysShort[date.getDay()];
    },
    "%m": function (date) {
        var month = date.getMonth() + 1;
        return month < 10 ? "0" + month : month;
    },
    "%n": function (date) { return date.getMonth() + 1; },
    "%M": function (date) { return exports.locale.monthsShort[date.getMonth()]; },
    "%F": function (date) { return exports.locale.months[date.getMonth()]; },
    "%y": function (date) {
        return date
            .getFullYear()
            .toString()
            .slice(2);
    },
    "%Y": function (date) { return date.getFullYear(); },
    "%h": function (date) {
        var hours = date.getHours() % 12;
        if (hours === 0) {
            hours = 12;
        }
        return hours < 10 ? "0" + hours : hours;
    },
    "%g": function (date) {
        var hours = date.getHours() % 12;
        if (hours === 0) {
            hours = 12;
        }
        return hours;
    },
    "%H": function (date) {
        var hours = date.getHours();
        return hours < 10 ? "0" + hours : hours;
    },
    "%G": function (date) { return date.getHours(); },
    "%i": function (date) {
        var minutes = date.getMinutes();
        return minutes < 10 ? "0" + minutes : minutes;
    },
    "%s": function (date) {
        var seconds = date.getSeconds();
        return seconds < 10 ? "0" + seconds : seconds;
    },
    "%a": function (date) {
        return date.getHours() >= 12 ? "pm" : "am";
    },
    "%A": function (date) {
        return date.getHours() >= 12 ? "PM" : "AM";
    },
    "%u": function (date) { return date.getMilliseconds(); },
};
var setFormatters = {
    "%d": function (date, value, _format, validate) {
        var check = /(^([0-9][0-9])$)/i.test(value);
        if (validate) {
            return check;
        }
        check ? date.setDate(Number(value)) : date.setDate(Number(1));
    },
    "%j": function (date, value, _format, validate) {
        var check = /(^([0-9]?[0-9])$)/i.test(value);
        if (validate) {
            return check;
        }
        check ? date.setDate(Number(value)) : date.setDate(Number(1));
    },
    "%m": function (date, value, _format, validate) {
        var check = /(^([0-9][0-9])$)/i.test(value);
        if (validate) {
            return check;
        }
        check ? date.setMonth(Number(value) - 1) : date.setMonth(Number(0));
        if (check && date.getMonth() !== Number(value) - 1)
            date.setMonth(Number(value) - 1);
    },
    "%n": function (date, value, _format, validate) {
        var check = /(^([0-9]?[0-9])$)/i.test(value);
        if (validate) {
            return check;
        }
        check ? date.setMonth(Number(value) - 1) : date.setMonth(Number(0));
        if (check && date.getMonth() !== Number(value) - 1)
            date.setMonth(Number(value) - 1);
    },
    "%M": function (date, value, _format, validate) {
        var index = (0, core_2.findIndex)(exports.locale.monthsShort, function (v) { return v === value; });
        if (validate) {
            return index !== -1;
        }
        index === -1 ? date.setMonth(0) : date.setMonth(index);
        if (index !== -1 && date.getMonth() !== index)
            date.setMonth(index);
    },
    "%F": function (date, value, _format, validate) {
        var index = (0, core_2.findIndex)(exports.locale.months, function (v) { return v === value; });
        if (validate) {
            return index !== -1;
        }
        index === -1 ? date.setMonth(0) : date.setMonth(index);
        if (index !== -1 && date.getMonth() !== index)
            date.setMonth(index);
    },
    "%y": function (date, value, _format, validate) {
        var check = /(^([0-9][0-9])$)/i.test(value);
        if (validate) {
            return check;
        }
        check ? date.setFullYear(Number("20" + value)) : date.setFullYear(Number("2000"));
    },
    "%Y": function (date, value, _format, validate) {
        var check = /(^([0-9][0-9][0-9][0-9])$)/i.test(value);
        if (validate) {
            return check;
        }
        check ? date.setFullYear(Number(value)) : date.setFullYear(Number("2000"));
    },
    "%h": function (date, value, dateFormat, validate) {
        var check = /(^0[1-9]|1[0-2]$)/i.test(value);
        if (validate) {
            return check;
        }
        (check && (dateFormat === "am" || dateFormat === "pm")) || dateFormat === "AM" || dateFormat === "PM"
            ? date.setHours(Number(value))
            : date.setHours(Number(0));
    },
    "%g": function (date, value, dateFormat, validate) {
        var check = /(^[1-9]$)|(^0[1-9]|1[0-2]$)/i.test(value);
        if (validate) {
            return check;
        }
        (check && (dateFormat === "am" || dateFormat === "pm")) || dateFormat === "AM" || dateFormat === "PM"
            ? date.setHours(Number(value))
            : date.setHours(Number(0));
    },
    "%H": function (date, value, _format, validate) {
        var check = /(^[0-2][0-9]$)/i.test(value);
        if (validate) {
            return check;
        }
        check ? date.setHours(Number(value)) : date.setHours(Number(0));
    },
    "%G": function (date, value, _format, validate) {
        var check = /(^[1-9][0-9]?$)/i.test(value);
        if (validate) {
            return check;
        }
        check ? date.setHours(Number(value)) : date.setHours(Number(0));
    },
    "%i": function (date, value, _format, validate) {
        var check = /(^([0-5][0-9])$)/i.test(value);
        if (validate) {
            return check;
        }
        check ? date.setMinutes(Number(value)) : date.setMinutes(Number(0));
    },
    "%s": function (date, value, _format, validate) {
        var check = /(^([0-5][0-9])$)/i.test(value);
        if (validate) {
            return check;
        }
        check ? date.setSeconds(Number(value)) : date.setSeconds(Number(0));
    },
    "%u": function (date, value, _format, validate) {
        var check = /(^([0-9][0-9][0-9])$)/i.test(value);
        if (validate) {
            return check;
        }
        check ? date.setMilliseconds(Number(value)) : date.setMilliseconds(Number(0));
    },
    "%a": function (date, value, _format, validate) {
        if (validate) {
            return value === "pm" || value === "am";
        }
        value === "pm" && date.setHours(date.getHours() + 12);
    },
    "%A": function (date, value, _format, validate) {
        if (validate) {
            return value === "PM" || value === "AM";
        }
        value === "PM" && date.setHours(date.getHours() + 12);
    },
};
var TokenType;
(function (TokenType) {
    TokenType[TokenType["separator"] = 0] = "separator";
    TokenType[TokenType["datePart"] = 1] = "datePart";
})(TokenType || (TokenType = {}));
function tokenizeFormat(format) {
    var tokens = [];
    var currentSeparator = "";
    for (var i = 0; i < format.length; i++) {
        if (format[i] === "%") {
            if (currentSeparator.length > 0) {
                tokens.push({
                    type: TokenType.separator,
                    value: currentSeparator,
                });
                currentSeparator = "";
            }
            tokens.push({
                type: TokenType.datePart,
                value: format[i] + format[i + 1],
            });
            i++;
        }
        else {
            currentSeparator += format[i];
        }
    }
    if (currentSeparator.length > 0) {
        tokens.push({
            type: TokenType.separator,
            value: currentSeparator,
        });
    }
    return tokens;
}
function getFormattedDate(format, date) {
    return tokenizeFormat(format).reduce(function (res, token) {
        if (token.type === TokenType.separator) {
            return res + token.value;
        }
        else {
            if (!formatters[token.value]) {
                return res;
            }
            return res + formatters[token.value](date);
        }
    }, "");
}
exports.getFormattedDate = getFormattedDate;
var datePartQueue = { "%Y": 1, "%y": 1, "%M": 2, "%F": 2, "%m": 2, "%n": 2 };
function stringToDate(str, format, validate) {
    if (typeof str !== "string") {
        return;
    }
    format = format.replace(/([a-z])(%a)/i, function () {
        var match = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            match[_i] = arguments[_i];
        }
        str = str.replace(/(am|pm)/i, " $&");
        return match[1] + " " + match[2];
    });
    var tokens = tokenizeFormat(format);
    var dateParts = new Array(2);
    var index = 0;
    var formatter = null;
    var dateFormat;
    var message = "Incorrect date, see docs: https://docs.dhtmlx.com/suite/calendar__api__calendar_dateformat_config.html";
    var addDatePart = function (part) {
        var queue = datePartQueue[part.formatter];
        if (queue) {
            dateParts[queue - 1] = part;
            return;
        }
        if (part.formatter === "%A" || part.formatter === "%a") {
            dateFormat = part.value;
        }
        dateParts.push(part);
    };
    for (var i = 0; i < tokens.length; i++) {
        if (tokens[i].type === TokenType.separator) {
            var separatorIndex = str.indexOf(tokens[i].value, index);
            if (separatorIndex === -1) {
                if (validate) {
                    return false;
                }
                throw new Error(message);
            }
            if (formatter) {
                addDatePart({
                    formatter: formatter,
                    value: str.slice(index, separatorIndex),
                });
                formatter = null;
            }
            index = separatorIndex + tokens[i].value.length;
        }
        else if (tokens[i].type === TokenType.datePart) {
            if (tokens[i + 1] && tokens[i + 1].type !== TokenType.separator) {
                if (validate) {
                    return false;
                }
                throw new Error(message);
            }
            else {
                formatter = tokens[i].value;
            }
        }
    }
    if (formatter) {
        addDatePart({
            formatter: formatter,
            value: str.slice(index),
        });
    }
    var date = new Date(0);
    for (var _i = 0, dateParts_1 = dateParts; _i < dateParts_1.length; _i++) {
        var datePart = dateParts_1[_i];
        if (!datePart)
            continue;
        if (setFormatters[datePart.formatter]) {
            if (validate && !setFormatters[datePart.formatter](date, datePart.value, dateFormat, validate)) {
                return false;
            }
            setFormatters[datePart.formatter](date, datePart.value, dateFormat);
        }
    }
    return validate ? true : date;
}
exports.stringToDate = stringToDate;
var DateHelper = exports.DateHelper = /** @class */ (function () {
    function DateHelper() {
    }
    DateHelper.copy = function (d) {
        return new Date(d);
    };
    DateHelper.fromYear = function (year) {
        return new Date(year, 0, 1);
    };
    DateHelper.fromYearAndMonth = function (year, month) {
        return new Date(year, month, 1);
    };
    DateHelper.weekStart = function (d, firstWeekday) {
        var diff = (d.getDay() + 7 - firstWeekday) % 7;
        return new Date(d.getFullYear(), d.getMonth(), d.getDate() - diff);
    };
    DateHelper.monthStart = function (d) {
        return new Date(d.getFullYear(), d.getMonth(), 1);
    };
    DateHelper.yearStart = function (d) {
        return new Date(d.getFullYear(), 0, 1);
    };
    DateHelper.dayStart = function (d) {
        return new Date(d.getFullYear(), d.getMonth(), d.getDate());
    };
    DateHelper.addDay = function (d, count) {
        if (count === void 0) { count = 1; }
        return new Date(d.getFullYear(), d.getMonth(), d.getDate() + count);
    };
    DateHelper.addMonth = function (d, count) {
        if (count === void 0) { count = 1; }
        return new Date(d.getFullYear(), d.getMonth() + count);
    };
    DateHelper.addYear = function (d, count) {
        if (count === void 0) { count = 1; }
        return new Date(d.getFullYear() + count, d.getMonth());
    };
    DateHelper.withHoursAndMinutes = function (d, hours, minutes, dateFormat) {
        if (dateFormat === undefined || (!dateFormat && hours === 12) || (dateFormat && hours !== 12)) {
            return new Date(d.getFullYear(), d.getMonth(), d.getDate(), hours, minutes);
        }
        else if (dateFormat && hours === 12) {
            return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, minutes);
        }
        else {
            return new Date(d.getFullYear(), d.getMonth(), d.getDate(), hours + 12, minutes);
        }
    };
    DateHelper.setMonth = function (d, month) {
        d.setMonth(month);
    };
    DateHelper.setYear = function (d, year) {
        d.setFullYear(year);
    };
    DateHelper.mergeHoursAndMinutes = function (source, target) {
        return new Date(source.getFullYear(), source.getMonth(), source.getDate(), target.getHours(), target.getMinutes());
    };
    DateHelper.isWeekEnd = function (d) {
        return d.getDay() === 0 || d.getDay() === 6;
    };
    DateHelper.getTwelweYears = function (d) {
        var y = d.getFullYear();
        var firstYear = y - (y % 12);
        return (0, core_1.range)(firstYear, firstYear + 11);
    };
    DateHelper.getDayOrdinal = function (d) {
        var dayMS = 24 * 60 * 60 * 1000;
        return (d.valueOf() - DateHelper.yearStart(d).valueOf()) / dayMS;
    };
    DateHelper.getWeekNumber = function (d) {
        var currThursday = d.getDay() === 4 ? d : DateHelper.addDay(d, 4 - d.getDay());
        var ordinal = DateHelper.getDayOrdinal(currThursday);
        return Math.trunc(ordinal / 7) + 1;
    };
    DateHelper.isSameDay = function (d1, d2) {
        return (d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate());
    };
    DateHelper.toDateObject = function (date, dateFormat) {
        if (typeof date === "string") {
            return stringToDate(date, dateFormat);
        }
        else {
            return new Date(date);
        }
    };
    DateHelper.nullTimestampDate = new Date(0);
    return DateHelper;
}());


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DataProxy = void 0;
var ajax_1 = __webpack_require__(20);
var DataProxy = /** @class */ (function () {
    function DataProxy(url, config) {
        if (config === void 0) { config = {}; }
        this.url = this._url = url;
        this.config = config;
    }
    DataProxy.prototype.updateUrl = function (url, params) {
        if (params === void 0) { params = {}; }
        this._url = this.url = url || this._url;
        this.url += this.url.includes("?") ? "&" : "?";
        for (var param in params) {
            this.config[param] = params[param];
            this.url += "".concat(param, "=").concat(encodeURIComponent(params[param]), "&");
        }
        this.url = this.url.slice(0, -1);
    };
    DataProxy.prototype.load = function () {
        return ajax_1.ajax.get(this.url, undefined, this.config);
    };
    DataProxy.prototype.save = function (data, mode) {
        switch (mode) {
            case "delete":
                return ajax_1.ajax.delete(this.url, data, this.config);
            case "update":
                return ajax_1.ajax.put(this.url, data, this.config);
            case "insert":
            default:
                return ajax_1.ajax.post(this.url, data, this.config);
        }
    };
    return DataProxy;
}());
exports.DataProxy = DataProxy;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeCell = exports.getReducedRowspan = exports.getReducedColspan = exports.getHeight = exports.getWidth = void 0;
function getWidth(columns, colspan, index) {
    return columns
        .slice(index, index + (colspan || 1))
        .filter(function (col) { return !col.hidden; })
        .reduce(function (width, col) { return width + col.$width; }, 0);
}
exports.getWidth = getWidth;
function getHeight(rows, span) {
    var range = span.$rowsVisibility;
    return rows.slice(range[0], range[1] + 1).reduce(function (height, row) { return height + row.$height; }, 0);
}
exports.getHeight = getHeight;
function getReducedColspan(columns, colId, colspan) {
    var index = columns.findIndex(function (item) { return item.id === colId; });
    return columns.slice(index, index + (colspan || 1)).filter(function (col) { return !col.hidden; }).length;
}
exports.getReducedColspan = getReducedColspan;
function getReducedRowspan(initialRows, currRows, rowIndex, span) {
    var _a;
    var spanHeight = span.rowspan || 1;
    if (initialRows.length === currRows.length)
        return spanHeight;
    var initialRowIndex = (_a = initialRows === null || initialRows === void 0 ? void 0 : initialRows.findIndex(function (i) { return i.id === span.row; })) !== null && _a !== void 0 ? _a : -1;
    var rowCount = 0;
    if (initialRowIndex !== -1) {
        for (var i = 1; i < spanHeight; i++) {
            var curRow = currRows[rowIndex - rowCount + i];
            var initialRow = initialRows[initialRowIndex + i];
            if ((curRow === null || curRow === void 0 ? void 0 : curRow.id) !== (initialRow === null || initialRow === void 0 ? void 0 : initialRow.id)) {
                rowCount++;
            }
        }
    }
    return spanHeight - rowCount;
}
exports.getReducedRowspan = getReducedRowspan;
function normalizeCell(cell, grid) {
    if (!cell)
        return;
    var row = cell.row, column = cell.column;
    var span = grid.getSpan(row.id, column.id);
    if (!span)
        return cell;
    return {
        row: row.id === span.row ? row : grid.data.getItem(span.row),
        column: column.id === span.column ? column : grid.config.columns.find(function (col) { return col.id === span.column; }),
    };
}
exports.normalizeCell = normalizeCell;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectionEvents = void 0;
var SelectionEvents;
(function (SelectionEvents) {
    SelectionEvents["beforeUnSelect"] = "beforeunselect";
    SelectionEvents["afterUnSelect"] = "afterunselect";
    SelectionEvents["beforeSelect"] = "beforeselect";
    SelectionEvents["afterSelect"] = "afterselect";
})(SelectionEvents || (exports.SelectionEvents = SelectionEvents = {}));


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.focusManager = void 0;
var html_1 = __webpack_require__(2);
var FocusManager = /** @class */ (function () {
    function FocusManager() {
        var _this = this;
        this._initHandler = function (e) { return (_this._activeWidgetId = (0, html_1.locate)(e, "data-dhx-widget-id")); };
        this._removeFocusClass = function (e) {
            var classList = document.body.classList;
            if (classList.contains("utilityfocus"))
                classList.remove("utilityfocus");
        };
        this._addFocusClass = function (e) {
            var classList = document.body.classList;
            if (e.code === "Tab") {
                if (!classList.contains("utilityfocus"))
                    classList.add("utilityfocus");
            }
            else {
                if (classList.contains("utilityfocus"))
                    classList.remove("utilityfocus");
            }
        };
        document.addEventListener("focusin", this._initHandler);
        document.addEventListener("pointerdown", this._initHandler);
        document.addEventListener("mousedown", this._removeFocusClass);
        document.addEventListener("keydown", this._addFocusClass);
    }
    FocusManager.prototype.getFocusId = function () {
        return this._activeWidgetId;
    };
    FocusManager.prototype.setFocusId = function (id) {
        this._activeWidgetId = id;
    };
    return FocusManager;
}());
exports.focusManager = new FocusManager();


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeSpan = exports.getShifts = exports.getSpans = exports.getCells = exports.getTreeCell = exports.getHandlers = void 0;
var core_1 = __webpack_require__(0);
var dom_1 = __webpack_require__(1);
var cells_1 = __webpack_require__(15);
var main_1 = __webpack_require__(7);
var types_1 = __webpack_require__(3);
var editors_1 = __webpack_require__(85);
var html_1 = __webpack_require__(2);
var data_1 = __webpack_require__(8);
var common_1 = __webpack_require__(11);
function handleMouse(rowStart, colStart, conf, type, e) {
    colStart = (0, html_1.locateNodeByClassName)(e.target, "dhx_grid-fixed-cols-wrap") ? 0 : colStart;
    var target = (0, html_1.locateNodeByClassName)(e.target, "dhx_grid-cell");
    var targetSpan = (0, html_1.locateNodeByClassName)(e.target, "dhx_span-cell");
    if ((!target && !targetSpan) || !type) {
        return;
    }
    var rowNode = target ? target.parentNode : targetSpan;
    var colId = (target || targetSpan).getAttribute("data-dhx-col-id");
    var col = conf.filteredColumns.find(function (column) { return column.id === colId; });
    var rowId = rowNode.getAttribute("data-dhx-id");
    var row = (conf.$data || conf.data).find(function (r) { return r.id.toString() === rowId; });
    var systemEvent = type.toLocaleLowerCase().includes("touch");
    if (systemEvent) {
        conf._events.fire(type, [row, col, e]);
    }
    else {
        conf.events.fire(type, [row, col, e]);
    }
}
function getHandlers(row, column, conf) {
    return {
        onclick: [handleMouse, row, column, conf, types_1.GridEvents.cellClick],
        onmouseover: [handleMouse, row, column, conf, types_1.GridEvents.cellMouseOver],
        onmousedown: [handleMouse, row, column, conf, types_1.GridEvents.cellMouseDown],
        ondblclick: [handleMouse, row, column, conf, types_1.GridEvents.cellDblClick],
        oncontextmenu: [handleMouse, row, column, conf, types_1.GridEvents.cellRightClick],
        ontouchstart: [handleMouse, row, column, conf, types_1.GridEvents.cellMouseDown],
        ontouchmove: [handleMouse, row, column, conf, types_1.GridSystemEvents.cellTouchMove],
        ontouchend: [handleMouse, row, column, conf, types_1.GridSystemEvents.cellTouchEnd],
    };
}
exports.getHandlers = getHandlers;
function getTreeCell(content, row, col, conf) {
    var getCellAriaAttrs = function (col, ind) { return ({
        role: "gridcell",
        "aria-colindex": ind,
    }); };
    var getToggleAriaAttrs = function (row) { return ({
        role: "button",
        "aria-label": row.$opened ? "Collapse group" : "Expand group",
    }); };
    var isEditable = conf.$editable && conf.$editable.row === row.id && conf.$editable.col === col.id;
    var isFilledCell = !conf.fixedColumns.left.length || conf.$renderFrom === "leftFixedCols";
    var cellAlign = col.align ? "dhx_align-".concat(col.align) : "dhx_align-left";
    var css = "";
    if (isFilledCell) {
        css = "dhx_tree-cell ".concat(col.$cellCss[row.id] || "", " ").concat(cellAlign);
        if (row.$items)
            css += " dhx_grid-expand-cell";
        if (isEditable)
            css += " dhx_tree-editing-cell";
        if (conf.dragMode && !isEditable) {
            css +=
                (row.$drophere ? " dhx_grid-cell--drophere" : "") +
                    (row.$dragtarget ? " dhx_grid-cell--dragtarget" : "");
        }
    }
    var parentPadding = (0, data_1.getTreeCellWidthOffset)(row, true);
    return (0, dom_1.el)(".dhx_grid-cell", __assign({ class: css, style: {
            width: col.$width,
            height: row.$height,
            padding: !row.$items ? "0 0 0 ".concat(parentPadding, "px") : 0,
        }, "data-dhx-col-id": col.id }, getCellAriaAttrs(col, 1)), isFilledCell
        ? [
            row.$items
                ? (0, dom_1.el)(".dhx_grid-expand-cell-icon", __assign(__assign({ class: row.$opened ? "dxi dxi-chevron-down" : "dxi dxi-chevron-right", "data-dhx-id": row.id }, getToggleAriaAttrs(row)), { style: {
                        padding: row.$level ? "0 0 0 ".concat(4 + parentPadding, "px") : "0 0 0 4px",
                    } }))
                : null,
            (0, dom_1.el)(".dhx_tree-cell", {
                class: cellAlign + "".concat((conf.autoHeight && " dhx_tree-cell_auto-height") || ""),
            }, [content]),
        ]
        : null);
}
exports.getTreeCell = getTreeCell;
function getEditorCell(row, col, conf, span) {
    return (0, editors_1.getEditor)(row, col, conf, span);
}
function getCells(conf) {
    if (!conf.data || !conf.filteredColumns) {
        return [];
    }
    var getRowAriaAttrs = function (ind) { return ({
        role: "row",
        "aria-rowindex": ind,
    }); };
    var pos = conf.$positions;
    var data = conf.data ? conf.data.slice(pos.yStart, pos.yEnd) : [];
    var columns = conf.filteredColumns.slice(pos.xStart, pos.xEnd);
    var selectedCell = conf.selection.getCell();
    var isFirstTabindex = true;
    var filteredDragRows;
    var dragGhost = document.querySelector(".dhx_drag-ghost");
    if (dragGhost) {
        var dragRowIndexes = Array.from(dragGhost.querySelectorAll(".dhx_grid-row")).map(function (elem) {
            return Number(elem.getAttribute("aria-rowindex")) - 1;
        });
        if (dragRowIndexes.length) {
            filteredDragRows = dragRowIndexes
                .map(function (i) { return conf.data[i]; })
                .filter(function (item) { return item && !data.find(function (i) { return i.id === item.id; }); });
            data.push.apply(data, filteredDragRows);
        }
    }
    return data.map(function (row, index) {
        var isFilteredDragRow = filteredDragRows === null || filteredDragRows === void 0 ? void 0 : filteredDragRows.some(function (item) { return item.id === row.id; });
        var isLastRow = data.length - 1 === index;
        var rowCss = "";
        if (conf.rowCss) {
            rowCss = conf.rowCss(row);
        }
        if (row.$css) {
            rowCss += row.$css;
        }
        return (0, dom_1.el)(".dhx_grid-row", __assign({ style: {
                height: isLastRow ? row.$height + 1 : row.$height,
                display: isFilteredDragRow ? "none" : null,
            }, "data-dhx-id": row.id, class: rowCss, _key: row.id, _flags: dom_1.KEYED_LIST }, (isFilteredDragRow ? {} : getRowAriaAttrs(pos.yStart + index + 1))), columns.map(function (col, colIndex) {
            var _a;
            if (!col.hidden) {
                var initValue = row[col.id];
                var options_1 = (0, data_1.getEditorOptions)(col, row);
                if ((col.editable || (conf.editable && col.editable !== false)) &&
                    (col.editorType === "select" ||
                        col.editorType === "combobox" ||
                        col.editorType === "multiselect") &&
                    options_1) {
                    initValue =
                        typeof initValue === "string" && col.editorType === "multiselect"
                            ? initValue.split(",").map(function (item) { return item.trim(); })
                            : [initValue === null || initValue === void 0 ? void 0 : initValue.toString()];
                    initValue = initValue
                        .map(function (item) {
                        var _a, _b;
                        return ((_b = (_a = options_1.find(function (option) {
                            return option.id &&
                                option.id.toString() === item;
                        })) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : item);
                    })
                        .join(", ");
                }
                var value = (0, data_1.applyPattern)(initValue, col);
                var getTabIndex_1 = function (col, row) {
                    var attrs = {
                        tabindex: -1,
                    };
                    if (selectedCell) {
                        // is current cell selected?
                        if (selectedCell.row.id === row.id && selectedCell.column.id === col.id) {
                            attrs["tabindex"] = 0;
                        }
                    }
                    else if (isFirstTabindex) {
                        attrs["tabindex"] = 0;
                    }
                    return attrs;
                };
                var getEditBtnAriaAttrs = function () { return ({
                    role: "button",
                    "aria-label": "Edit content",
                }); };
                var getCellAriaAttrs = function (col, colIndex, rowIndex, isEditable) { return (__assign({ role: "gridcell", "aria-colindex": colIndex, "aria-readonly": isEditable ? "false" : "true" }, getTabIndex_1(col, row))); };
                var defaultTemplate = function (text) {
                    if (typeof text === "boolean" || col.type === "boolean") {
                        if (typeof text !== "string") {
                            return "".concat(Boolean(text));
                        }
                    }
                    return text || text === 0 ? text : "";
                };
                var content = col.template ? col.template(value, row, col) : defaultTemplate(value);
                // content can be a domvm node or a string
                if (typeof content === "string") {
                    content = (0, main_1.isHtmlEnable)(conf, col)
                        ? (0, dom_1.el)("div.dhx_grid-cell__content", __assign({ ".innerHTML": content }, getEditBtnAriaAttrs()))
                        : content;
                }
                var css = "".concat((col.$cellCss && col.$cellCss[row.id]) || "", " dhx_").concat(col.type, "-cell").replace(/\s+/g, " ");
                var colWidth = col.$width;
                var isEditable = conf.$editable &&
                    conf.$editable.row === row.id &&
                    conf.$editable.col === col.id &&
                    !conf.$editable.isSpan;
                var leftSplit = conf.leftSplit, filteredColumns = conf.filteredColumns;
                if (isEditable ||
                    (col.type === "boolean" &&
                        ((conf.editable && ((_a = col.editable) !== null && _a !== void 0 ? _a : true)) || (!conf.editable && col.editable)))) {
                    content = getEditorCell(row, col, conf).toHTML();
                    css += " dhx_grid-cell__editable";
                    if (leftSplit === filteredColumns.indexOf(col) + 1) {
                        colWidth -= 1;
                    }
                }
                if (conf.type === "tree" && conf.firstColId === col.id) {
                    return getTreeCell(content, row, col, conf);
                }
                if (conf.dragMode && !isEditable) {
                    css +=
                        (row.$drophere ? " dhx_grid-cell--drophere" : "") +
                            (row.$dragtarget ? " dhx_grid-cell--dragtarget" : "");
                }
                if (col.align) {
                    css += " dhx_align-".concat(col.align);
                }
                if ((0, main_1.isHtmlEnable)(conf, col)) {
                    css += " dhx_grid-cell__content_html-enable";
                }
                if (conf.autoHeight) {
                    css += " dhx_grid-cell__content_auto-height";
                }
                return (0, dom_1.el)(".dhx_grid-cell", __assign({ class: css, style: {
                        width: colWidth,
                        height: row.$height + "px",
                    }, _key: col.id, "data-dhx-col-id": col.id }, getCellAriaAttrs(col, pos.xStart + colIndex + 1, index, conf.editable)), [content]);
            }
        }));
    });
}
exports.getCells = getCells;
function getReverseScrollState(config) {
    var $scrollBarWidth = config.$scrollBarWidth;
    var totalScrollX = config.$totalWidth - config.$width + common_1.BORDERS + $scrollBarWidth.y;
    var totalScrollY = config.$totalHeight -
        config.$height +
        config.$headerHeight +
        config.$footerHeight +
        common_1.BORDERS +
        $scrollBarWidth.x;
    return {
        x: totalScrollX > 0 ? totalScrollX - config.scroll.left : 0,
        y: totalScrollY > 0 ? totalScrollY - config.scroll.top : 0,
    };
}
function getSpans(config, mode) {
    var _a, _b;
    var spanCells = [];
    var columns = config.columns, filteredColumns = config.filteredColumns, data = config.data, rSpans = config.currentSpans, _c = config.bottomSplit, bottomSplit = _c === void 0 ? 0 : _c;
    if (!filteredColumns.length || !rSpans)
        return null;
    var rightSplit = config.fixedColumns.right.length;
    var filteredSpans = rSpans.filter(function (span) { var _a; return (_a = span.$renderFrom) === null || _a === void 0 ? void 0 : _a.includes(config.$renderFrom); });
    var spans = filteredSpans.sort(function (a, b) {
        return typeof a.row === "string" && typeof b.row === "string"
            ? a.row.localeCompare(b.row)
            : a.row - b.row;
    });
    var _loop_1 = function (i) {
        var row = spans[i].row;
        var col = spans[i].column;
        var spanHeight = spans[i].$rowsVisibility[1] - spans[i].$rowsVisibility[0] + 1;
        var spanWidth = spans[i].$colsVisibility[1] - spans[i].$colsVisibility[0] + 1;
        var spanText = spans[i].text;
        var spanCss = spans[i].css;
        var isFixedColsByBottomSplit = mode === types_1.Split.bottom && config.$renderFrom.endsWith("FixedCols");
        var rows = isFixedColsByBottomSplit ? config.$data : data;
        var colIndex = filteredColumns === null || filteredColumns === void 0 ? void 0 : filteredColumns.findIndex(function (i) { return "".concat(i.id) === "".concat(col); });
        var rowIndex = rows === null || rows === void 0 ? void 0 : rows.findIndex(function (i) { return "".concat(i.id) === "".concat(row); });
        if (colIndex < 0 || rowIndex < 0) {
            return "continue";
        }
        if (isFixedColsByBottomSplit) {
            var item_1 = config.$data[rowIndex + spanHeight - 1];
            if (!data.find(function (i) { return i.id === (item_1 === null || item_1 === void 0 ? void 0 : item_1.id); }))
                return "continue";
        }
        var currCol = filteredColumns[colIndex];
        var currRow = rows[rowIndex];
        var cellCss = currCol.$cellCss[row];
        var spanType = (0, core_1.isDefined)(spans[i].text) ? "string" : currCol.type;
        if (currCol.hidden) {
            return "continue";
        }
        var content = void 0;
        if ((0, core_1.isDefined)(spanText)) {
            if (typeof spanText === "function") {
                var summary = __assign(__assign({}, config.commonSummary), config.colSummary[col]);
                if (typeof currCol.summary === "string" && currCol.summary !== "count") {
                    summary[currCol.summary] = (0, data_1.applyPattern)(summary[currCol.summary], currCol);
                }
                content = spanText(summary);
            }
            else {
                content = spanText.toString();
            }
        }
        else {
            content = currRow[col] === undefined ? "" : (0, data_1.applyPattern)(currRow[col], currCol);
        }
        if (typeof spanText !== "function") {
            var template = currCol.template || (function (text, _row, _col) { return (text || text === 0 ? text : ""); });
            content = template(content, currRow, currCol);
        }
        var htmlEnable = (0, main_1.isHtmlEnable)(config, currCol);
        content =
            typeof content === "string"
                ? (0, dom_1.el)("div.dhx_span-cell-content", {
                    class: config.autoHeight ? " dhx_grid-cell__content_auto-height" : "",
                    ".innerHTML": htmlEnable ? content : null,
                }, htmlEnable ? null : content)
                : content;
        var top_1 = void 0;
        if (config.$renderFrom === "bottomFixedRows" || isFixedColsByBottomSplit) {
            var rowIndexStartSplit = rows.length - bottomSplit;
            top_1 =
                rowIndex < rowIndexStartSplit
                    ? -(0, main_1.getTotalHeight)(rows.slice(rowIndex, rowIndexStartSplit))
                    : (0, main_1.getTotalHeight)(rows.slice(rowIndexStartSplit, rowIndex));
        }
        else {
            top_1 = (0, main_1.getTotalHeight)(rows.slice(0, rowIndex)) - (mode ? 0 : 1);
        }
        var left = 0;
        if (config.$renderFrom === "rightFixedCols") {
            var colIndexStartSplit = filteredColumns.length - config.fixedColumns.right.length;
            left =
                colIndex < colIndexStartSplit
                    ? -(0, main_1.getTotalWidth)(filteredColumns.slice(colIndex, colIndexStartSplit))
                    : (0, main_1.getTotalWidth)(filteredColumns.slice(colIndexStartSplit, colIndex));
        }
        else {
            for (var s = colIndex - 1; s >= 0; s--) {
                left += filteredColumns[s].$width;
            }
        }
        var isExpandingSpan = currRow.$items && colIndex === 0;
        var rowspanWithLastCol = colIndex === filteredColumns.length - 1;
        var colspanWithLastCol = colIndex + spanWidth === filteredColumns.length;
        var firstRightFixedCol = rightSplit && colIndex === filteredColumns.length - rightSplit;
        var allFixedSpanByBottomFixedRows = mode === types_1.Split.bottom && config.fixedRows.bottom.find(function (item) { return item.id === row; });
        var bottomFixedRowWithPartSpan = !!bottomSplit && rowIndex + spanHeight > rows.length - bottomSplit;
        var spanBeforeFixedCol = !!rightSplit && colIndex + spanWidth === filteredColumns.length - rightSplit;
        var css = currCol.header[0].text ? " dhx_span-cell" : " dhx_span-cell dhx_span-cell--title";
        css += isExpandingSpan ? " dhx_span-expand-cell" : "";
        css += cellCss ? " ".concat(cellCss) : "";
        css += spanCss ? " ".concat(spanCss) : "";
        css += rowIndex === 0 ? " dhx_span-first-row" : "";
        css += rowIndex + spanHeight === rows.length ? " dhx_grid__span_bottom--last-row" : "";
        css += colIndex === 0 || firstRightFixedCol ? " dhx_span-first-col" : "";
        css += rowspanWithLastCol || colspanWithLastCol ? " dhx_span-last-col" : "";
        css += spanWidth === 1 ? " dhx_span-".concat(currCol.type || "string", "-cell") : " dhx_span-string-cell";
        css += currCol.align ? " dhx_align-".concat(currCol.align) : " dhx_".concat(spanType, "-cell");
        css += allFixedSpanByBottomFixedRows ? " dhx_grid__span_bottom--all-fixed" : "";
        css += bottomFixedRowWithPartSpan ? " dhx_grid__span_bottom--part-fixed" : "";
        css += spanBeforeFixedCol ? " dhx_grid__span_right--before-fixed" : "";
        var width = void 0;
        if (spanWidth > 1) {
            var rColIndex = columns.findIndex(function (item) { return item.id === col; });
            width = (0, cells_1.getWidth)(columns, spans[i].colspan, rColIndex);
        }
        else {
            width = currCol.$width;
        }
        var height = void 0;
        if (spanHeight > 1) {
            height = (0, cells_1.getHeight)(rows, spans[i]);
            if (mode === types_1.Split.top && config.$renderFrom.endsWith("FixedCols")) {
                var delta = rowIndex + spanHeight - rows.length;
                if (delta > 0) {
                    var i_1 = config.fixedRows.top.length;
                    height += (0, main_1.getTotalHeight)(config.$data.slice(i_1, i_1 + delta));
                }
            }
        }
        else {
            height = currRow.$height;
        }
        var zIndex = null;
        var isEditable = (((_a = config.$editable) === null || _a === void 0 ? void 0 : _a.isSpan) && config.$editable.row === row && config.$editable.col === col) ||
            (currCol.type === "boolean" &&
                ((config.editable && ((_b = currCol.editable) !== null && _b !== void 0 ? _b : true)) || (!config.editable && currCol.editable)));
        if (isEditable) {
            var _d = config.topSplit, topSplit = _d === void 0 ? 0 : _d;
            var leftSplit = config.fixedColumns.left.length;
            var allFixedByCol = (leftSplit && colIndex + spanWidth <= leftSplit) ||
                (rightSplit && colIndex >= filteredColumns.length - rightSplit);
            var fixedByRow = rowIndex < topSplit || rowIndex + spanHeight > rows.length - bottomSplit;
            var allFixedByRow = (topSplit && rowIndex + spanHeight <= topSplit) ||
                (bottomSplit && rowIndex >= rows.length - bottomSplit);
            var fixedByCol = colIndex < leftSplit || colIndex + spanWidth > filteredColumns.length - rightSplit;
            if (config.$renderFrom === "render" ||
                (allFixedByCol && !fixedByRow) ||
                (allFixedByRow && !fixedByCol)) {
                var $height = config.$height, $scrollBarWidth = config.$scrollBarWidth, scroll_1 = config.scroll, fixedRows = config.fixedRows, fixedColumns = config.fixedColumns;
                var text = spans[i].text;
                var gap = 0;
                content = getEditorCell(currRow, currCol, config, spans[i]).toHTML(text);
                css += " dhx_span__editable";
                if (!allFixedByRow) {
                    var topFixedHeight = (0, main_1.getTotalHeight)(fixedRows.top);
                    var bottomFixedHeight = (0, main_1.getTotalHeight)(fixedRows.bottom);
                    var bodyHeight = $scrollBarWidth.yState
                        ? $height - config.$headerHeight - config.$footerHeight - $scrollBarWidth.x - common_1.BORDERS
                        : config.$totalHeight;
                    var bottomByScroll = top_1 + height - scroll_1.top;
                    var isOutsideByTop = top_1 - topFixedHeight < scroll_1.top;
                    var isOutsideByBottom = bottomByScroll > bodyHeight - bottomFixedHeight;
                    if (isOutsideByTop && isOutsideByBottom && $scrollBarWidth.xState)
                        gap = 1;
                    top_1 = isOutsideByTop
                        ? scroll_1.top + topFixedHeight - (topFixedHeight && !allFixedByCol ? 1 : 0)
                        : top_1;
                    if (isOutsideByBottom) {
                        height = bodyHeight - top_1 - bottomFixedHeight + scroll_1.top - gap;
                    }
                    else {
                        height = isOutsideByTop ? bottomByScroll - topFixedHeight : height;
                    }
                }
                if (config.$renderFrom === "render") {
                    zIndex = 12;
                    if (fixedColumns.left.find(function (i) { return i.id === col; })) {
                        left = scroll_1.left + (0, main_1.getTotalWidth)(fixedColumns.left.slice(0, colIndex));
                        if (!allFixedByCol) {
                            var minWidth = (0, main_1.getTotalWidth)(fixedColumns.left.slice(colIndex, leftSplit));
                            width = width - scroll_1.left > minWidth ? width - scroll_1.left : minWidth;
                        }
                    }
                    if (fixedRows.top.find(function (i) { return i.id === row; })) {
                        top_1 = scroll_1.top + (0, main_1.getTotalHeight)(fixedRows.top.slice(0, rowIndex));
                        if (!allFixedByRow) {
                            var minHeight = (0, main_1.getTotalHeight)(config.fixedRows.top.slice(rowIndex, config.topSplit));
                            height = height > 0 ? minHeight + height - gap : minHeight;
                        }
                    }
                    if (fixedColumns.right.find(function (col) {
                        return col === filteredColumns[filteredColumns.indexOf(currCol) + spanWidth - 1];
                    })) {
                        var totalLength = filteredColumns.length;
                        var reverseScrollState = getReverseScrollState(config);
                        var i_2 = totalLength - filteredColumns.indexOf(currCol) - spanWidth;
                        var minWidth = i_2
                            ? (0, main_1.getTotalWidth)(fixedColumns.right.slice(0, -i_2))
                            : (0, main_1.getTotalWidth)(fixedColumns.right);
                        var widthBeforeFixed = (0, main_1.getTotalWidth)(filteredColumns.slice(colIndex, totalLength - rightSplit));
                        left =
                            reverseScrollState.x > widthBeforeFixed
                                ? left - reverseScrollState.x + widthBeforeFixed
                                : left;
                        if (!allFixedByCol) {
                            width =
                                reverseScrollState.x < widthBeforeFixed
                                    ? width - reverseScrollState.x - 1
                                    : minWidth - 1;
                        }
                    }
                    if (fixedRows.bottom.find(function (row) {
                        return row === rows[rows.indexOf(currRow) + spanHeight - 1];
                    })) {
                        var totalLength = rows.length;
                        var reverseScrollState = getReverseScrollState(config);
                        var i_3 = totalLength - rows.indexOf(currRow) - spanHeight;
                        var minHeight = i_3
                            ? (0, main_1.getTotalHeight)(fixedRows.bottom.slice(0, -i_3))
                            : (0, main_1.getTotalHeight)(config.fixedRows.bottom);
                        var heightBeforeFixed = (0, main_1.getTotalHeight)(rows.slice(rowIndex, totalLength - bottomSplit));
                        top_1 =
                            reverseScrollState.y > heightBeforeFixed
                                ? top_1 - reverseScrollState.y + heightBeforeFixed
                                : top_1;
                        if (!allFixedByRow) {
                            height =
                                reverseScrollState.y < heightBeforeFixed
                                    ? minHeight + height - gap - (i_3 ? -1 : gap ? 0 : 1)
                                    : minHeight - (i_3 ? -1 : 1);
                        }
                    }
                }
                if (leftSplit === colIndex + 1) {
                    width -= 1;
                }
                if (colIndex === filteredColumns.length - rightSplit) {
                    left += 1;
                    width -= 1;
                }
            }
        }
        spanCells.push((0, dom_1.el)("div", {
            class: css,
            style: {
                width: width,
                height: height,
                top: top_1,
                left: left,
                zIndex: zIndex,
            },
            "data-dhx-col-id": col,
            "data-dhx-id": row,
            "aria-hidden": "true",
        }, [
            isExpandingSpan
                ? (0, dom_1.el)(".dhx_span-expand-cell-icon", {
                    class: currRow.$opened ? "dxi dxi-chevron-down" : "dxi dxi-chevron-right",
                    "data-dhx-id": currRow.id,
                    role: "button",
                    "aria-label": currRow.$opened ? "Collapse group" : "Expand group",
                    style: {
                        padding: "0 0 0 ".concat(4 + (0, data_1.getTreeCellWidthOffset)(currRow, true), "px"),
                    },
                })
                : null,
            content,
        ]));
    };
    for (var i = 0; i < spans.length; i++) {
        _loop_1(i);
    }
    return spanCells;
}
exports.getSpans = getSpans;
function getShifts(conf) {
    var columnsLeft = conf.filteredColumns.slice(0, conf.$positions.xStart);
    var rowsTop = conf.data.slice(0, conf.$positions.yStart);
    return {
        x: (0, main_1.getTotalWidth)(columnsLeft),
        y: (0, main_1.getTotalHeight)(rowsTop),
    };
}
exports.getShifts = getShifts;
function normalizeSpan(span, config, data) {
    var _a = config.topSplit, topSplit = _a === void 0 ? 0 : _a, _b = config.bottomSplit, bottomSplit = _b === void 0 ? 0 : _b, columns = config.columns;
    var column = span.column, row = span.row, colspan = span.colspan, rowspan = span.rowspan;
    var rows = data.getRawData(0, -1, null, 2);
    var filteredColumns = columns.filter(function (col) { return !col.hidden; });
    var colIndexStart = filteredColumns.findIndex(function (c) { return c.id == column; });
    var rowIndexStart = rows.findIndex(function (i) { return i.id == row; });
    var colIndexEnd = colIndexStart + (colspan ? (0, cells_1.getReducedColspan)(columns, column, colspan) - 1 : 0);
    var rowIndexEnd = rowIndexStart +
        (rowspan ? (0, cells_1.getReducedRowspan)(data.getInitialData(), rows, rowIndexStart, span) - 1 : 0);
    var colIndexVisibility = colIndexStart === -1 ? [] : [colIndexStart, colIndexEnd];
    var rowsIndexVisibility = rowIndexStart === -1 ? [] : [rowIndexStart, rowIndexEnd];
    var $renderFrom = [];
    if (colIndexStart !== -1 && rowIndexStart !== -1) {
        var leftSplit = (0, common_1.getCurrFixedCols)(config, types_1.Split.left).length;
        var rightSplit = (0, common_1.getCurrFixedCols)(config, types_1.Split.right).length;
        var fixedLeftByStart = colIndexStart < leftSplit;
        var fixedTopByStart = rowIndexStart < topSplit;
        var fixedRightByEnd = colIndexEnd >= filteredColumns.length - rightSplit;
        var fixedBottomByEnd = rowIndexEnd >= rows.length - bottomSplit;
        // if the span is not fully fixed
        if (colIndexEnd >= leftSplit &&
            rowIndexEnd >= topSplit &&
            colIndexStart < filteredColumns.length - rightSplit &&
            rowIndexStart < rows.length - bottomSplit) {
            $renderFrom.push("render");
        }
        // if the span is fixed left
        if (fixedLeftByStart) {
            $renderFrom.push("leftFixedCols");
        }
        // if the span is fixed right
        if (fixedRightByEnd) {
            $renderFrom.push("rightFixedCols");
        }
        // if the span isn't fixed left or right and fixed top
        if (fixedTopByStart && !fixedLeftByStart && !fixedRightByEnd) {
            $renderFrom.push("topFixedRows");
        }
        else if (fixedTopByStart && !$renderFrom.includes("render")) {
            $renderFrom.push("render");
        }
        // if the span isn't fixed left or right and fixed bottom
        if (fixedBottomByEnd && !fixedLeftByStart && !fixedRightByEnd) {
            $renderFrom.push("bottomFixedRows");
        }
        else if (fixedBottomByEnd && !$renderFrom.includes("render")) {
            $renderFrom.push("render");
        }
    }
    return __assign(__assign({}, span), { $renderFrom: $renderFrom, $rowsVisibility: rowsIndexVisibility, $colsVisibility: colIndexVisibility });
}
exports.normalizeSpan = normalizeSpan;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.ajax = void 0;
var types_1 = __webpack_require__(9);
var helpers_1 = __webpack_require__(10);
function toQueryString(data) {
    return Object.keys(data)
        .reduce(function (entries, key) {
        var value = typeof data[key] === "object" ? JSON.stringify(data[key]) : data[key];
        entries.push(key + "=" + encodeURIComponent(value));
        return entries;
    }, [])
        .join("&");
}
function inferResponseType(contentType) {
    if (!contentType) {
        return "text";
    }
    if (contentType.includes("json")) {
        return "json";
    }
    if (contentType.includes("xml")) {
        return "xml";
    }
    return "text";
}
function send(url, data, method, headers, responseType) {
    function parseResponse(responseText, genResponseType) {
        switch (genResponseType) {
            case "json": {
                return JSON.parse(responseText);
            }
            case "text": {
                return responseText;
            }
            case "xml": {
                var driver = (0, helpers_1.toDataDriver)(types_1.DataDriver.xml);
                if (driver) {
                    return driver.toJsonObject(responseText);
                }
                else {
                    return { parseError: "Incorrect data driver type: 'xml'" };
                }
            }
            default: {
                return responseText;
            }
        }
    }
    var allHeaders = headers || {};
    if (responseType) {
        allHeaders.Accept = "application/" + responseType;
    }
    if (method !== "GET") {
        allHeaders["Content-Type"] = allHeaders["Content-Type"] || "application/json";
    }
    if (method === "GET") {
        var urlData = data && typeof data === "object"
            ? toQueryString(data)
            : data && typeof data === "string"
                ? data
                : "";
        if (urlData) {
            url += !url.includes("?") ? "?" : "&";
            url += urlData;
        }
        data = null;
    }
    if (!window.fetch) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    if (responseType === "raw") {
                        resolve({
                            url: xhr.responseURL,
                            headers: xhr
                                .getAllResponseHeaders()
                                .trim()
                                .split(/[\r\n]+/)
                                .reduce(function (acc, cur) {
                                var kv = cur.split(": ");
                                acc[kv[0]] = kv[1];
                                return acc;
                            }, {}),
                            body: xhr.response,
                        });
                    }
                    if (xhr.status === 204) {
                        resolve();
                    }
                    else {
                        resolve(parseResponse(xhr.responseText, responseType || inferResponseType(xhr.getResponseHeader("Content-Type"))));
                    }
                }
                else {
                    reject({
                        status: xhr.status,
                        statusText: xhr.statusText,
                    });
                }
            };
            xhr.onerror = function () {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText,
                    message: xhr.responseText,
                });
            };
            xhr.open(method, url);
            for (var headerKey in allHeaders) {
                xhr.setRequestHeader(headerKey, allHeaders[headerKey]);
            }
            switch (method) {
                case "POST":
                case "DELETE":
                case "PUT":
                    xhr.send(data !== undefined ? JSON.stringify(data) : "");
                    break;
                case "GET":
                    xhr.send();
                    break;
                default:
                    xhr.send();
                    break;
            }
        });
    }
    else {
        var isJson = allHeaders["Content-Type"] === "application/json";
        if (isJson && data && typeof data === "object") {
            data = JSON.stringify(data);
        }
        return window
            .fetch(url, {
            method: method,
            body: data || null,
            headers: allHeaders,
        })
            .then(function (response) {
            if (response.ok) {
                var genResponseType = responseType || inferResponseType(response.headers.get("Content-Type"));
                if (genResponseType === "raw") {
                    return {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        headers: Object.fromEntries(response.headers.entries()),
                        url: response.url,
                        body: response.body,
                    };
                }
                if (response.status !== 204) {
                    switch (genResponseType) {
                        case "json": {
                            return response.json();
                        }
                        case "xml": {
                            var driver_1 = (0, helpers_1.toDataDriver)(types_1.DataDriver.xml);
                            if (driver_1) {
                                return response.text().then(function (xmlData) { return driver_1.toJsonObject(xmlData); });
                            }
                            else {
                                return response.text();
                            }
                        }
                        default:
                            return response.text();
                    }
                }
            }
            else {
                return response.text().then(function (message) {
                    return Promise.reject({
                        status: response.status,
                        statusText: response.statusText,
                        message: message,
                    });
                });
            }
        });
    }
}
exports.ajax = {
    get: function (url, data, config) {
        return send(url, data, "GET", config && config.headers, config !== undefined ? config.responseType : undefined);
    },
    post: function (url, data, config) {
        return send(url, data, "POST", config && config.headers, config !== undefined ? config.responseType : undefined);
    },
    put: function (url, data, config) {
        return send(url, data, "PUT", config && config.headers, config !== undefined ? config.responseType : undefined);
    },
    delete: function (url, data, config) {
        return send(url, data, "DELETE", config && config.headers, config !== undefined ? config.responseType : undefined);
    },
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyManager = void 0;
var FocusManager_1 = __webpack_require__(17);
var html_1 = __webpack_require__(2);
function getHotKeyCode(code) {
    var matches = code.toLowerCase().match(/\w+/g);
    var comp = 0;
    var key = "";
    for (var i = 0; i < matches.length; i++) {
        var check = matches[i];
        if (check === "ctrl") {
            comp += 4;
        }
        else if (check === "shift") {
            comp += 2;
        }
        else if (check === "alt") {
            comp += 1;
        }
        else {
            key = check;
        }
    }
    return comp + key;
}
var ie_key_map = {
    Up: "arrowUp",
    Down: "arrowDown",
    Right: "arrowRight",
    Left: "arrowLeft",
    Esc: "escape",
    Spacebar: "space",
};
var KeyManager = /** @class */ (function () {
    function KeyManager(beforeCall) {
        var _this = this;
        this._keysStorage = {};
        this._initHandler = function (e) {
            var key;
            if ((e.which >= 48 && e.which <= 57) || (e.which >= 65 && e.which <= 90)) {
                key = String.fromCharCode(e.which);
            }
            else {
                var keyName = e.which === 32 ? e.code : e.key;
                key = (0, html_1.isIE)() ? ie_key_map[keyName] || keyName : keyName;
            }
            var actions = _this._keysStorage[(e.ctrlKey || e.metaKey ? 4 : 0) +
                (e.shiftKey ? 2 : 0) +
                (e.altKey ? 1 : 0) +
                (key && key.toLowerCase())];
            if (actions) {
                for (var i = 0; i < actions.length; i++) {
                    if (_this._beforeCall && _this._beforeCall(e, FocusManager_1.focusManager.getFocusId()) === false) {
                        return;
                    }
                    actions[i].handler(e);
                }
            }
        };
        if (beforeCall) {
            this._beforeCall = beforeCall;
        }
        document.addEventListener("keydown", this._initHandler);
    }
    KeyManager.prototype.destructor = function () {
        document.removeEventListener("keydown", this._initHandler);
        this.removeHotKey();
    };
    KeyManager.prototype.addHotKey = function (key, handler) {
        var code = getHotKeyCode(key);
        if (!this._keysStorage[code]) {
            this._keysStorage[code] = [];
        }
        this._keysStorage[code].push({ handler: handler });
    };
    KeyManager.prototype.removeHotKey = function (key, handler) {
        var _this = this;
        if (key) {
            if (key && handler) {
                var code_1 = getHotKeyCode(key);
                var functionToString_1 = function (fun) {
                    return fun
                        .toString()
                        .replace(/\n/g, "")
                        .replace(/\s/g, "");
                };
                this._keysStorage[code_1].forEach(function (existHotKey, i) {
                    if (functionToString_1(existHotKey.handler) === functionToString_1(handler)) {
                        delete _this._keysStorage[code_1][i];
                        _this._keysStorage[code_1] = _this._keysStorage[code_1].filter(function (el) { return el; });
                    }
                });
            }
            else {
                var code = getHotKeyCode(key);
                delete this._keysStorage[code];
            }
        }
        else {
            this._keysStorage = {};
        }
    };
    KeyManager.prototype.exist = function (key) {
        var code = getHotKeyCode(key);
        return !!this._keysStorage[code];
    };
    KeyManager.prototype.getKeyStorageLength = function () {
        return Object.keys(this._keysStorage).length;
    };
    return KeyManager;
}());
exports.KeyManager = KeyManager;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageContainerPosition = exports.Position = exports.RealPosition = void 0;
var RealPosition;
(function (RealPosition) {
    RealPosition["left"] = "left";
    RealPosition["right"] = "right";
    RealPosition["top"] = "top";
    RealPosition["bottom"] = "bottom";
    RealPosition["center"] = "center";
})(RealPosition || (exports.RealPosition = RealPosition = {}));
var Position;
(function (Position) {
    Position["right"] = "right";
    Position["bottom"] = "bottom";
    Position["center"] = "center";
    Position["left"] = "left";
    Position["top"] = "top";
})(Position || (exports.Position = Position = {}));
var MessageContainerPosition;
(function (MessageContainerPosition) {
    MessageContainerPosition["topLeft"] = "top-left";
    MessageContainerPosition["topRight"] = "top-right";
    MessageContainerPosition["bottomLeft"] = "bottom-left";
    MessageContainerPosition["bottomRight"] = "bottom-right";
})(MessageContainerPosition || (exports.MessageContainerPosition = MessageContainerPosition = {}));


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removePatternMask = exports.patternMask = exports.removeNumberMask = exports.numberMask = void 0;
var core_1 = __webpack_require__(0);
function numberMask(value, options, input) {
    var _a, _b, _c;
    var prefix = options.prefix || "";
    var suffix = options.suffix || "";
    var maxIntLength = options.maxIntLength;
    var maxDecLength = options.maxDecLength;
    var minDecLength = options.minDecLength;
    var groupSeparator = (_a = options.groupSeparator) !== null && _a !== void 0 ? _a : ",";
    var decSeparator = typeof maxDecLength === "number" && !maxDecLength ? "" : (_b = options.decSeparator) !== null && _b !== void 0 ? _b : ".";
    var limit = false;
    var numericValue = value.toString();
    var parts = numericValue.split(".");
    if ((0, core_1.isDefined)(maxIntLength) && parts[0].length > maxIntLength) {
        parts[0] = parts[0].slice(0, maxIntLength);
        limit = true;
    }
    if ((0, core_1.isDefined)(maxDecLength) && ((_c = parts[1]) === null || _c === void 0 ? void 0 : _c.length) > maxDecLength) {
        parts[1] = parts[1].slice(0, maxDecLength);
        limit = true;
    }
    if (options.onlyView && minDecLength && parts[0]) {
        if (!parts[1])
            parts[1] = "";
        while (parts[1].length < minDecLength) {
            parts[1] += "0";
        }
    }
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparator);
    numericValue = parts.join(decSeparator);
    var maskedValue = prefix + numericValue + suffix;
    if (!numericValue.length)
        maskedValue = "";
    if (input) {
        var lastLength = input.value.length;
        var lastPosition = input.selectionStart;
        var changeInLength = maskedValue.length - lastLength;
        var position = lastPosition + changeInLength;
        var firstCharIndex = 0;
        if (numericValue[firstCharIndex] === "-" && numericValue[firstCharIndex + 2] !== decSeparator)
            ++firstCharIndex;
        if (numericValue[firstCharIndex] === "0" && numericValue.length > 1 && numericValue[1] !== decSeparator) {
            maskedValue = prefix + "0" + suffix;
        }
        if (numericValue[firstCharIndex] === decSeparator) {
            if (numericValue[0] === "-") {
                maskedValue = prefix + "-0" + decSeparator + suffix;
            }
            else {
                maskedValue = prefix + "0" + decSeparator + suffix;
            }
            ++position;
        }
        if (position > maskedValue.length) {
            position = maskedValue.length;
        }
        else if (position < 0) {
            position = 0;
        }
        if (suffix && (maskedValue.length - suffix.length <= position)) {
            position = position - suffix.length + (maskedValue.length - position);
        }
        if (maskedValue[position - 1] === groupSeparator) {
            --position;
        }
        if (limit && changeInLength === -1) {
            position++;
            if (maskedValue[position - 1] === groupSeparator)
                position++;
        }
        input.value = maskedValue;
        input.setSelectionRange(position, position);
        input.focus();
    }
    return maskedValue;
}
exports.numberMask = numberMask;
function removeNumberMask(value, options) {
    var _a;
    var decSeparator = options.decSeparator || ".";
    var allowNegative = (_a = options.allowNegative) !== null && _a !== void 0 ? _a : true;
    if (options.prefix && value.startsWith(options.prefix)) {
        value = value.slice(options.prefix.length);
    }
    if (options.suffix && value.endsWith(options.suffix)) {
        value = value.slice(0, value.length - options.suffix.length);
    }
    var numericSign = (allowNegative && value[0] === "-") ? "-" : "";
    var _b = value.split(decSeparator), integer = _b[0], decimal = _b.slice(1);
    value = decimal.length ? integer + decSeparator + decimal.join("") : integer;
    var unmaskedValue = value
        .replace(new RegExp("[^0-9\\".concat(decSeparator, "]"), 'g'), '')
        .replace(new RegExp("\\".concat(decSeparator)), '.');
    if (options.lastCall) {
        if (unmaskedValue[unmaskedValue.length - 1] === '.') {
            if (+unmaskedValue === 0) {
                unmaskedValue = "";
            }
            else {
                unmaskedValue = unmaskedValue.slice(0, -1);
            }
        }
        if (isNaN(+unmaskedValue) || +unmaskedValue == 0)
            numericSign = "";
    }
    return numericSign + unmaskedValue;
}
exports.removeNumberMask = removeNumberMask;
var defaultChartFormat = {
    "0": /\d/,
    "a": /[A-Za-z]/,
    "#": /[A-Za-z0-9]/,
    "*": /./,
};
function applyMask(value, mask, charFormat) {
    if (charFormat === void 0) { charFormat = {}; }
    if (!value)
        return "";
    var maskedValue = "";
    var valueIndex = 0;
    var hasDynamicPattern = false;
    var hasDynamicChars = false;
    charFormat = __assign(__assign({}, defaultChartFormat), charFormat);
    for (var index = 0; index < mask.length; index++) {
        var maskChar = mask[index];
        var pattern = charFormat[maskChar];
        if (pattern) {
            while (valueIndex < value.length && !pattern.test(value[valueIndex])) {
                valueIndex++;
            }
            if (valueIndex < value.length) {
                maskedValue += value[valueIndex];
                valueIndex++;
                hasDynamicPattern = true;
            }
            else {
                break;
            }
        }
        else {
            if (valueIndex < value.length) {
                maskedValue += maskChar;
                if (value.length > 1 && value[valueIndex] === maskChar) {
                    valueIndex++;
                }
            }
        }
    }
    for (var index = maskedValue.length; index < mask.length; index++) {
        if (charFormat[mask[index]]) {
            hasDynamicChars = true;
            break;
        }
    }
    if (!hasDynamicChars) {
        for (var index = maskedValue.length; index < mask.length; index++) {
            var maskChar = mask[index];
            if (!charFormat[maskChar]) {
                maskedValue += maskChar;
            }
            else {
                break;
            }
        }
    }
    if (hasDynamicChars && maskedValue.length > 0 && !charFormat[mask[maskedValue.length - 1]]) {
        var lastStaticIndex = maskedValue.length - 1;
        while (lastStaticIndex >= 0 && !charFormat[mask[lastStaticIndex]]) {
            lastStaticIndex--;
        }
        maskedValue = maskedValue.substring(0, lastStaticIndex + 1);
    }
    if (!hasDynamicPattern)
        maskedValue = "";
    return maskedValue;
}
function patternMask(value, options, input) {
    var _a;
    var maskedValue = "";
    value = ((_a = input === null || input === void 0 ? void 0 : input.value) === null || _a === void 0 ? void 0 : _a.toString()) || value.toString();
    var mask = options;
    var charFormat = __assign({}, defaultChartFormat);
    if (typeof options === "object") {
        mask = typeof options.pattern === "function" ? options.pattern(value) : options.pattern;
        charFormat = __assign(__assign({}, charFormat), (options.charFormat || {}));
    }
    maskedValue = applyMask(value, mask, charFormat);
    if (input) {
        var unmaskedInputValue = removePatternMask(input.value, options);
        var unmaskedValue = removePatternMask(maskedValue, options);
        var position = input.selectionStart || 0;
        if (unmaskedInputValue.length === unmaskedValue.length) {
            if (unmaskedInputValue !== unmaskedValue) {
                while (position < mask.length && !charFormat[mask[position - 1]] || position === 0 && !charFormat[mask[position]]) {
                    position++;
                }
            }
            else {
                while (position > 0 && !charFormat[mask[position - 1]]) {
                    position--;
                }
            }
        }
        else {
            if (unmaskedInputValue.length < unmaskedValue.length) {
                while (position < mask.length && !charFormat[mask[position - 1]] || position === 0 && !charFormat[mask[position]]) {
                    position++;
                }
            }
        }
        if (position === 0)
            position = maskedValue.length;
        input.value = maskedValue;
        input.setSelectionRange(position, position);
        input.focus();
    }
    return maskedValue;
}
exports.patternMask = patternMask;
function removePatternMask(value, options) {
    var unmaskedValue = "";
    var mask = options;
    var charFormat = __assign({}, defaultChartFormat);
    if (typeof options === "object") {
        mask = typeof options.pattern === "function" ? options.pattern(value) : options.pattern;
        charFormat = __assign(__assign({}, charFormat), (options.charFormat || {}));
    }
    for (var i = 0; i < value.length; i++) {
        if (charFormat[mask[i]]) {
            unmaskedValue += value[i];
        }
    }
    return unmaskedValue;
}
exports.removePatternMask = removePatternMask;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(25), exports);
__exportStar(__webpack_require__(94), exports);
__exportStar(__webpack_require__(26), exports);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var types_1 = __webpack_require__(26);
var Cell_1 = __webpack_require__(37);
var dom_1 = __webpack_require__(1);
var Layout = /** @class */ (function (_super) {
    __extends(Layout, _super);
    function Layout(parent, config) {
        var _this = _super.call(this, parent, config) || this;
        // root layout
        _this._root = _this.config.parent || _this;
        _this._all = {};
        _this._parseConfig();
        _this._progress = false;
        if (_this.config.activeTab) {
            _this.config.activeView = _this.config.activeTab;
        }
        // Need replace to tabbar
        if (_this.config.views) {
            _this.config.activeView = _this.config.activeView || _this._cells[0].id;
            _this._isViewLayout = true;
        }
        if (!config.parent) {
            var view = (0, dom_1.create)({ render: function () { return _this._root && _this.toVDOM(); } }, _this);
            _this.mount(parent, view);
        }
        return _this;
    }
    Layout.prototype.destructor = function () {
        this.unmount();
        if (this.config) {
            for (var _i = 0, _a = this._cells; _i < _a.length; _i++) {
                var cell = _a[_i];
                cell === null || cell === void 0 ? void 0 : cell.destructor();
            }
            this.config = this._cells = this._root = this._xLayout = this._isViewLayout = null;
            this._all = {};
        }
    };
    Layout.prototype.toVDOM = function () {
        var _a;
        if (this._isViewLayout) {
            var roots = [this.getCell(this.config.activeView).toVDOM()];
            return _super.prototype.toVDOM.call(this, roots);
        }
        var nodes = [];
        this._inheritTypes();
        (_a = this._cells) === null || _a === void 0 ? void 0 : _a.forEach(function (cell) {
            var node = cell.toVDOM();
            if (Array.isArray(node)) {
                nodes = nodes.concat(node);
            }
            else {
                nodes.push(node);
            }
        });
        return _super.prototype.toVDOM.call(this, nodes);
    };
    Layout.prototype.removeCell = function (id) {
        if (!this.events.fire(types_1.LayoutEvents.beforeRemove, [id])) {
            return;
        }
        var root = this.config.parent || this;
        if (root !== this) {
            root.removeCell(id);
            return;
        }
        // this === root layout
        var view = this.getCell(id);
        if (view) {
            var parent_1 = view.getParent();
            delete this._all[id];
            parent_1._cells = parent_1._cells.filter(function (cell) { return cell.id != id; });
            parent_1.paint();
        }
        this.events.fire(types_1.LayoutEvents.afterRemove, [id]);
    };
    Layout.prototype.addCell = function (config, index) {
        if (index === void 0) { index = -1; }
        if (!this.events.fire(types_1.LayoutEvents.beforeAdd, [config.id])) {
            return;
        }
        var view = this._createCell(config);
        if (index < 0) {
            index = this._cells.length + index + 1;
        }
        this._cells.splice(index, 0, view);
        this.paint();
        if (!this.events.fire(types_1.LayoutEvents.afterAdd, [config.id])) {
            return;
        }
    };
    Layout.prototype.getId = function (index) {
        if (index < 0) {
            index = this._cells.length + index;
        }
        return this._cells[index] ? this._cells[index].id : undefined;
    };
    Layout.prototype.getRefs = function (name) {
        var _a;
        return (_a = this._root.getRootView().refs) === null || _a === void 0 ? void 0 : _a[name];
    };
    Layout.prototype.getCell = function (id) {
        var _a;
        return (_a = this._root) === null || _a === void 0 ? void 0 : _a._all[id];
    };
    Layout.prototype.forEach = function (callback, parent, level) {
        if (level === void 0) { level = Infinity; }
        if (!this._haveCells(parent) || level < 1) {
            return;
        }
        var array;
        if (parent) {
            array = this._root._all[parent]._cells;
        }
        else {
            array = this._root._cells;
        }
        for (var index = 0; index < array.length; index++) {
            var cell = array[index];
            callback.call(this, cell, index, array);
            if (this._haveCells(cell.id)) {
                cell.forEach(callback, cell.id, --level);
            }
        }
    };
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    Layout.prototype.cell = function (id) {
        return this.getCell(id);
    };
    Layout.prototype.progressShow = function () {
        this._progress = true;
        this.paint();
    };
    Layout.prototype.progressHide = function () {
        this._progress = false;
        this.paint();
    };
    Layout.prototype._getCss = function (content) {
        var layoutCss = this._xLayout ? "dhx_layout-columns" : "dhx_layout-rows";
        var directionCss = this.config.align ? " " + layoutCss + "--" + this.config.align : "";
        if (content) {
            return (layoutCss +
                " dhx_layout-cell" +
                (this.config.align ? " dhx_layout-cell--" + this.config.align : ""));
        }
        else {
            var cellCss = this.config.parent ? _super.prototype._getCss.call(this) : "dhx_widget dhx_layout";
            var fullModeCss = this.config.parent ? "" : " dhx_layout-cell";
            return cellCss + (this.config.full ? fullModeCss : " " + layoutCss) + directionCss;
        }
    };
    Layout.prototype._parseConfig = function () {
        var _this = this;
        var config = this.config;
        var cells = config.rows || config.cols || config.views || [];
        this._xLayout = !config.rows;
        this._cells = cells.map(function (a) { return _this._createCell(a); });
    };
    Layout.prototype._createCell = function (cell) {
        var view;
        if (cell.rows || cell.cols || cell.views) {
            cell.parent = this._root;
            view = new Layout(this, cell);
        }
        else {
            view = new Cell_1.Cell(this, cell);
        }
        // FIxME
        this._root._all[view.id] = view;
        if (cell.init) {
            cell.init(view, cell);
        }
        return view;
    };
    Layout.prototype._haveCells = function (id) {
        if (id) {
            var array = this._root._all[id];
            return array._cells && array._cells.length > 0;
        }
        return Object.keys(this._all).length > 0;
    };
    Layout.prototype._inheritTypes = function (obj) {
        var _this = this;
        if (obj === void 0) { obj = this._cells; }
        if (Array.isArray(obj)) {
            obj.forEach(function (cell) { return _this._inheritTypes(cell); });
        }
        else {
            var cellConfig = obj === null || obj === void 0 ? void 0 : obj.config;
            if ((cellConfig === null || cellConfig === void 0 ? void 0 : cellConfig.rows) || (cellConfig === null || cellConfig === void 0 ? void 0 : cellConfig.cols)) {
                var viewParent = obj.getParent();
                if (!cellConfig.type && viewParent) {
                    if (viewParent.config.type) {
                        cellConfig.type = viewParent.config.type;
                    }
                    else {
                        this._inheritTypes(viewParent);
                    }
                }
            }
        }
    };
    return Layout;
}(Cell_1.Cell));
exports.Layout = Layout;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutEvents = void 0;
var LayoutEvents;
(function (LayoutEvents) {
    LayoutEvents["beforeShow"] = "beforeShow";
    LayoutEvents["afterShow"] = "afterShow";
    LayoutEvents["beforeHide"] = "beforeHide";
    LayoutEvents["afterHide"] = "afterHide";
    LayoutEvents["beforeResizeStart"] = "beforeResizeStart";
    LayoutEvents["resize"] = "resize";
    LayoutEvents["afterResizeEnd"] = "afterResizeEnd";
    LayoutEvents["beforeAdd"] = "beforeAdd";
    LayoutEvents["afterAdd"] = "afterAdd";
    LayoutEvents["beforeRemove"] = "beforeRemove";
    LayoutEvents["afterRemove"] = "afterRemove";
    LayoutEvents["beforeCollapse"] = "beforeCollapse";
    LayoutEvents["afterCollapse"] = "afterCollapse";
    LayoutEvents["beforeExpand"] = "beforeExpand";
    LayoutEvents["afterExpand"] = "afterExpand";
})(LayoutEvents || (exports.LayoutEvents = LayoutEvents = {}));


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(98), exports);
__exportStar(__webpack_require__(39), exports);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEvents = void 0;
var ListEvents;
(function (ListEvents) {
    ListEvents["click"] = "click";
    ListEvents["doubleClick"] = "doubleclick";
    ListEvents["focusChange"] = "focuschange";
    ListEvents["beforeEditStart"] = "beforeEditStart";
    ListEvents["afterEditStart"] = "afterEditStart";
    ListEvents["beforeEditEnd"] = "beforeEditEnd";
    ListEvents["afterEditEnd"] = "afterEditEnd";
    ListEvents["itemRightClick"] = "itemRightClick";
    ListEvents["itemMouseOver"] = "itemMouseOver";
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    ListEvents["contextmenu"] = "contextmenu";
})(ListEvents || (exports.ListEvents = ListEvents = {}));


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    notFound: "Not Found",
    selectAll: "Select All",
    unselectAll: "Unselect All",
    selectedItems: "selected items",
    createItem: "Create",
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataCollection = void 0;
var events_1 = __webpack_require__(4);
var loader_1 = __webpack_require__(66);
var sort_1 = __webpack_require__(69);
var dataproxy_1 = __webpack_require__(14);
var helpers_1 = __webpack_require__(10);
var types_1 = __webpack_require__(9);
var core_1 = __webpack_require__(0);
var group_1 = __webpack_require__(70);
var DataCollection = /** @class */ (function () {
    function DataCollection(config, events) {
        var _this = this;
        this._filters = {};
        this._changes = { order: [] };
        this.config = config || {};
        this._group = new group_1.Group();
        this._sort = new sort_1.Sort();
        this._loader = new loader_1.Loader(this, this._changes);
        this.events = events || new events_1.EventSystem(this);
        this.events.on(types_1.DataEvents.dataRequest, function (from, to) {
            var proxy = _this.dataProxy;
            if (proxy && proxy.updateUrl) {
                proxy.updateUrl(null, { from: from, limit: proxy.config.limit || to - from });
                _this.load(proxy);
            }
        });
        this.events.on(types_1.DataEvents.loadError, function (response) {
            setTimeout(function () {
                if (typeof response !== "string") {
                    (0, helpers_1.dhxError)(response);
                }
                else {
                    (0, helpers_1.dhxWarning)(response);
                }
            }, 0);
        });
        this._reset();
    }
    DataCollection.prototype._reset = function (config) {
        if (config === void 0) { config = {}; }
        if (!config.grouping)
            this.ungroup();
        this._order = [];
        this._pull = {};
        this._changes = { order: [] };
        this._initOrder = null;
        this._meta = new WeakMap();
        this._loaded = false;
    };
    DataCollection.prototype.group = function (order, config) {
        if (config === void 0) { config = {}; }
        if (!order) {
            (0, helpers_1.dhxError)("The group method has mandatory arguments");
        }
        if (!Array.isArray(order)) {
            (0, helpers_1.dhxError)("The group method expects an array as an argument");
        }
        if (!order.length) {
            (0, helpers_1.dhxError)("The array with the group method values cannot be empty");
        }
        if (this.isGrouped())
            this.ungroup();
        var groupConfig = this._group.getGroupConfig(config);
        if (!this.events.fire(types_1.DataEvents.beforeGroup, [groupConfig])) {
            return;
        }
        this._parse(this._group.group(order, (config === null || config === void 0 ? void 0 : config.data) || this._order, config), types_1.DataDriver.json, true);
        this.events.fire(types_1.DataEvents.afterGroup, [this._group.getGroupedFields(), groupConfig]);
    };
    DataCollection.prototype.ungroup = function () {
        if (!this.isGrouped()) {
            return;
        }
        var grouped = this._group.getGroupedFields();
        var groupConfig = this._group.getGroupConfig();
        if (!this.events.fire(types_1.DataEvents.beforeUnGroup, [grouped, groupConfig])) {
            return;
        }
        this._parse(this._group.ungroup(this._order));
        this.events.fire(types_1.DataEvents.afterUnGroup, [grouped, groupConfig]);
    };
    DataCollection.prototype.isGrouped = function () {
        return this._group.isGrouped();
    };
    DataCollection.prototype.add = function (newItem, index) {
        var _this = this;
        if (!this.events.fire(types_1.DataEvents.beforeAdd, [newItem])) {
            return;
        }
        var out;
        if (Array.isArray(newItem)) {
            out = newItem.map(function (element, key) {
                if (key !== 0 && index >= 0) {
                    index = index + 1;
                }
                return _this._add((0, core_1.copy)(element), index);
            });
        }
        else {
            out = this._add((0, core_1.copy)(newItem), index);
        }
        this._reapplyFilters();
        return out;
    };
    DataCollection.prototype.remove = function (id) {
        var _this = this;
        if (id instanceof Array) {
            __spreadArray([], id, true).map(function (elementId) {
                _this._remove(elementId);
            });
        }
        else if ((0, core_1.isId)(id)) {
            this._remove(id);
        }
    };
    DataCollection.prototype.removeAll = function () {
        this._reset();
        this.events.fire(types_1.DataEvents.removeAll);
        this.events.fire(types_1.DataEvents.change);
    };
    DataCollection.prototype.exists = function (id) {
        return !!this._pull[id];
    };
    DataCollection.prototype.getNearId = function (id) {
        var _a;
        var item = this._pull[id];
        if (!item) {
            return ((_a = this._order[0]) === null || _a === void 0 ? void 0 : _a.id) || "";
        }
    };
    DataCollection.prototype.getItem = function (id) {
        return this._pull[id];
    };
    DataCollection.prototype.update = function (id, newItem, silent) {
        var item = this.getItem(id);
        if (item) {
            if ((0, helpers_1.isEqualObj)(newItem, item)) {
                return;
            }
            if ((0, core_1.isId)(newItem.id) && id !== newItem.id) {
                (0, helpers_1.dhxWarning)("this method doesn't allow changing the id");
                if ((0, helpers_1.isDebug)()) {
                    // eslint-disable-next-line no-debugger
                    debugger;
                }
            }
            else {
                if (newItem.parent && item.parent && newItem.parent !== item.parent) {
                    this.move(id, -1, this, newItem.parent);
                }
                (0, core_1.extend)(this._pull[id], newItem, false);
                if (this.config.update) {
                    this.config.update(this._pull[id]);
                }
                if (!silent) {
                    this._onChange("update", id, this._pull[id]);
                }
            }
            this._reapplyFilters();
        }
        else {
            (0, helpers_1.dhxWarning)("item not found");
        }
    };
    DataCollection.prototype.getIndex = function (id) {
        if (!(0, core_1.isId)(id) || !(0, core_1.isDefined)(this._pull[id])) {
            return -1;
        }
        return this._order.findIndex(function (i) { return (i === null || i === void 0 ? void 0 : i.id) == id; });
    };
    DataCollection.prototype.getId = function (index) {
        if (!this._order[index]) {
            return;
        }
        return this._order[index].id;
    };
    DataCollection.prototype.getLength = function () {
        return this._order.length;
    };
    DataCollection.prototype.isDataLoaded = function (from, to) {
        if (from === void 0) { from = 0; }
        if (to === void 0) { to = this._order.length; }
        if ((0, core_1.isNumeric)(from) && (0, core_1.isNumeric)(to)) {
            return this._order.slice(from, to).filter(function (item) { return item && item.$empty; }).length === 0;
        }
        // if check succeeds once, collection can't go back to not-loaded state
        if (!this._loaded) {
            this._loaded = !this.find(function (item) { return item.$empty; });
        }
        return !!this._loaded;
    };
    DataCollection.prototype.filter = function (rule, config, silent) {
        var _a;
        if (config === null || config === void 0 ? void 0 : config.$restore) {
            rule = this._normalizeFilters(rule || this._filters);
        }
        if (!(config === null || config === void 0 ? void 0 : config.add)) {
            this._order = this._initOrder || this._order;
            this._initOrder = null;
            if (!(config === null || config === void 0 ? void 0 : config.$restore)) {
                for (var key in this._filters) {
                    var filter = this._filters[key];
                    if ((_a = filter.config) === null || _a === void 0 ? void 0 : _a.permanent) {
                        this._applyFilters(filter.rule);
                    }
                    else {
                        delete this._filters[key];
                    }
                }
            }
        }
        var id;
        if (rule && !(config === null || config === void 0 ? void 0 : config.$restore)) {
            id = (config === null || config === void 0 ? void 0 : config.id) || (0, core_1.uid)();
            this._filters[id] = { rule: rule, config: config || {} };
        }
        if (rule && typeof rule !== "function") {
            if ((0, core_1.isDefined)(rule.by)) {
                this._applyFilters(rule);
            }
            else {
                for (var key in rule) {
                    this._applyFilters(rule[key]);
                }
            }
        }
        else {
            this._applyFilters(rule);
        }
        if (!silent) {
            var filters = this._getPureFilters(this._filters);
            this.events.fire(types_1.DataEvents.filter, [(0, core_1.isEmptyObj)(filters) ? null : filters]);
        }
        return id;
    };
    DataCollection.prototype.resetFilter = function (config, silent) {
        var _a;
        var _b = config || {}, id = _b.id, permanent = _b.permanent;
        if ((0, core_1.isEmptyObj)(config)) {
            for (var key in this._filters) {
                if (!((_a = this._filters[key].config) === null || _a === void 0 ? void 0 : _a.permanent)) {
                    delete this._filters[key];
                }
            }
        }
        else if (permanent) {
            this._filters = {};
        }
        else if (id) {
            delete this._filters[id];
        }
        this.filter(null, { $restore: true }, silent);
        return (0, core_1.isEmptyObj)(this._getPureFilters(this._filters));
    };
    DataCollection.prototype.getFilters = function (config) {
        var filters = this.getRawFilters(config);
        var pureFilters = filters ? this._getPureFilters(filters) : {};
        return (0, core_1.isEmptyObj)(pureFilters) ? null : pureFilters;
    };
    DataCollection.prototype.getRawFilters = function (config) {
        var filters = this._filters;
        if (config === null || config === void 0 ? void 0 : config.permanent) {
            filters = Object.keys(filters).reduce(function (obj, key) {
                var _a;
                if ((_a = filters[key].config) === null || _a === void 0 ? void 0 : _a.permanent) {
                    obj[key] = filters[key];
                }
                return obj;
            }, {});
        }
        return (0, core_1.isEmptyObj)(filters) ? null : filters;
    };
    DataCollection.prototype.find = function (conf) {
        var data = this._initOrder || this._order;
        for (var i = 0; i < data.length; i++) {
            var res = (0, helpers_1.findByConf)(data[i], conf, i, data);
            if (res) {
                return res;
            }
        }
        return null;
    };
    DataCollection.prototype.findAll = function (conf) {
        var data = this._initOrder || this._order;
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var item = (0, helpers_1.findByConf)(data[i], conf, i, data);
            if (item) {
                res.push(item);
            }
        }
        return res;
    };
    DataCollection.prototype.sort = function (rule, config) {
        if (!this.isDataLoaded()) {
            (0, helpers_1.dhxWarning)("the method doesn't work with lazyLoad");
            return;
        }
        if (config && config.smartSorting) {
            this._sorter = rule;
        }
        if (rule) {
            this._applySorters(rule);
        }
        this.events.fire(types_1.DataEvents.change, [undefined, "sort", rule]);
    };
    DataCollection.prototype.copy = function (id, index, target, targetId) {
        var _this = this;
        if (id instanceof Array) {
            return id.map(function (elementId, key) {
                return _this._copy(elementId, index, target, targetId, key);
            });
        }
        else {
            return this._copy(id, index, target, targetId);
        }
    };
    DataCollection.prototype.move = function (id, index, target, targetId, newId) {
        var _this = this;
        if (id instanceof Array) {
            return id.map(function (elementId, key) {
                return _this._move(elementId, index, target, targetId, key);
            });
        }
        else {
            return this._move(id, index, target, targetId, 0, newId);
        }
    };
    DataCollection.prototype.forEach = function (callback) {
        for (var i = 0; i < this._order.length; i++) {
            callback.call(this, this._order[i], i, this._order);
        }
    };
    DataCollection.prototype.load = function (url, driver) {
        if (typeof url === "string") {
            this.dataProxy = url = new dataproxy_1.DataProxy(url);
        }
        if (typeof driver === "string") {
            var driverName = driver.toLocaleLowerCase();
            if (driverName === "xml" || driverName === "csv") {
                url.config.responseType = url.config.responseType || "text";
            }
        }
        this.dataProxy = url;
        return this._loader.load(url, driver);
    };
    DataCollection.prototype.parse = function (data, driver) {
        return this._parse(data, driver);
    };
    DataCollection.prototype.$parse = function (data) {
        var apx = this.config.approximate;
        if (apx) {
            data = this._approximate(data, apx.value, apx.maxNum);
        }
        this._parse_data(data);
        this._reapplyFilters();
        this.events.fire(types_1.DataEvents.change, [undefined, "load"]);
        this.events.fire(types_1.DataEvents.load);
    };
    DataCollection.prototype.save = function (url) {
        if (typeof url === "string") {
            url = new dataproxy_1.DataProxy(url);
        }
        this._loader.save(url);
    };
    DataCollection.prototype.changeId = function (id, newId, silent) {
        if (newId === void 0) { newId = (0, core_1.uid)(); }
        if (id == newId)
            return;
        if (this.exists(newId)) {
            (0, helpers_1.dhxWarning)("item with ID ".concat(newId, " already exists"));
            return;
        }
        var item = this.getItem(id);
        if (!item) {
            (0, helpers_1.dhxWarning)("item not found");
        }
        else {
            item.id = newId;
            (0, core_1.extend)(this._pull[id], item);
            this._pull[newId] = this._pull[id];
            if (!silent) {
                this._onChange("update", newId, this._pull[newId]);
            }
            delete this._pull[id];
        }
    };
    // todo: loop through the array and check saved statuses
    DataCollection.prototype.isSaved = function () {
        return !this._changes.order.length; // todo: bad solution, errors and holded elments are missed...
    };
    DataCollection.prototype.map = function (callback) {
        var result = [];
        for (var i = 0; i < this._order.length; i++) {
            result.push(callback.call(this, this._order[i], i, this._order));
        }
        return result;
    };
    DataCollection.prototype.mapRange = function (from, to, callback) {
        if (from < 0)
            from = 0;
        if (to > this._order.length - 1)
            to = this._order.length - 1;
        var arr = this._order.slice(from, to + 1);
        var result = [];
        for (var i = from; i <= to; i++) {
            result.push(callback.call(this, this._order[i], i, arr));
        }
        return result;
    };
    DataCollection.prototype.reduce = function (callback, acc) {
        for (var i = 0; i < this._order.length; i++) {
            acc = callback.call(this, acc, this._order[i], i);
        }
        return acc;
    };
    DataCollection.prototype.serialize = function (driver) {
        if (driver === void 0) { driver = types_1.DataDriver.json; }
        // remove $ attrs
        var data = [];
        var _loop_1 = function (index) {
            var item = __assign({}, this_1._order[index]);
            Object.keys(item).forEach(function (key) {
                if (key.startsWith("$")) {
                    delete item[key];
                }
            });
            if (!(0, core_1.isDefined)(item.parent))
                delete item.parent;
            data.push(item);
        };
        var this_1 = this;
        for (var index = 0; index < this._order.length; index++) {
            _loop_1(index);
        }
        var dataDriver = (0, helpers_1.toDataDriver)(driver);
        if (dataDriver) {
            return dataDriver.serialize(data);
        }
    };
    DataCollection.prototype.getInitialData = function () {
        return this._initOrder;
    };
    DataCollection.prototype.setMeta = function (obj, key, value) {
        if (!obj)
            return;
        var map = this._meta.get(obj);
        if (!map) {
            map = {};
            this._meta.set(obj, map);
        }
        map[key] = value;
    };
    DataCollection.prototype.getMeta = function (obj, key) {
        var map = this._meta.get(obj);
        return map ? map[key] : null;
    };
    DataCollection.prototype.getMetaMap = function (obj) {
        return this._meta.get(obj);
    };
    DataCollection.prototype.setRange = function (from, to) {
        this._range = !to ? null : [from, to];
    };
    DataCollection.prototype.getRawData = function (from, to, order, mode) {
        order = order || this._order;
        if (mode === 1)
            return order;
        if (this._range) {
            from = this._range[0] + from;
            if (to === -1) {
                to = this._range[1];
            }
            else {
                var diff = Math.abs(to - from);
                to = from + diff > this._range[1] ? this._range[1] : from + diff;
            }
        }
        if (!to || (from === 0 && (to === -1 || to === order.length))) {
            return order;
        }
        if (from >= order.length)
            return [];
        if (to === -1 || to > order.length)
            to = order.length;
        var slice = order.slice(from, to);
        if (slice.filter(function (item) { return item.$empty; }).length !== 0) {
            this.events.fire(types_1.DataEvents.dataRequest, [from, to]);
        }
        return slice;
    };
    DataCollection.prototype._add = function (newItem, index) {
        var id = this._addCore(newItem, index);
        this._onChange("add", newItem.id, newItem);
        this.events.fire(types_1.DataEvents.afterAdd, [newItem]);
        return id;
    };
    DataCollection.prototype._remove = function (id) {
        var removedItem = this._pull[id];
        if (removedItem) {
            if (!this.events.fire(types_1.DataEvents.beforeRemove, [removedItem])) {
                return;
            }
            this._removeCore(removedItem.id);
            this._onChange("remove", id, removedItem);
        }
        this.events.fire(types_1.DataEvents.afterRemove, [removedItem]);
    };
    DataCollection.prototype._copy = function (id, index, target, targetId, key) {
        if (!this.exists(id)) {
            return null;
        }
        var newid = (0, core_1.uid)();
        if (key) {
            index = index === -1 ? -1 : index + key;
        }
        if (target) {
            if (!(target instanceof DataCollection) && targetId) {
                target.add((0, helpers_1.copyWithoutInner)(this.getItem(id)), index);
                return;
            }
            if (target.exists(id)) {
                target.add(__assign(__assign({}, (0, helpers_1.copyWithoutInner)(this.getItem(id))), { id: newid }), index);
                return newid;
            }
            else {
                target.add((0, helpers_1.copyWithoutInner)(this.getItem(id)), index);
                return id;
            }
        }
        this.add(__assign(__assign({}, (0, helpers_1.copyWithoutInner)(this.getItem(id))), { id: newid }), index);
        return newid;
    };
    DataCollection.prototype._move = function (id, index, target, targetId, key, newId) {
        if (key && index < this.getIndex(id)) {
            index = index === -1 ? -1 : index + key;
        }
        if (target && target !== this && this.exists(id)) {
            var item = (0, core_1.copy)(this.getItem(id), true);
            if (newId)
                item.id = newId;
            if ((!newId && target.exists(id)) || target.exists(newId)) {
                item.id = (0, core_1.uid)();
            }
            if (targetId) {
                item.parent = targetId;
            }
            target.add(item, index);
            // remove data from original collection
            this.remove(id);
            return item.id;
        }
        if (this.getIndex(id) === index) {
            return null;
        }
        // move other elements
        var spliced = this._order.splice(this.getIndex(id), 1)[0];
        if (index === -1) {
            index = this._order.length;
        }
        this._order.splice(index, 0, spliced);
        this.events.fire(types_1.DataEvents.change, [id, "update", this.getItem(id)]);
        return id;
    };
    DataCollection.prototype._addCore = function (obj, index) {
        var _a;
        if (this.config.init) {
            obj = this.config.init(obj);
        }
        obj.id = (_a = obj.id) !== null && _a !== void 0 ? _a : (0, core_1.uid)();
        if (this._pull[obj.id]) {
            (0, helpers_1.dhxError)("Item ".concat(obj.id, " already exist"));
        }
        // todo: not ideal solution
        if (this._initOrder && !(0, helpers_1.isTreeCollection)(this)) {
            this._addToOrder(this._initOrder, obj, index);
        }
        this._addToOrder(this._order, obj, index);
        return obj.id;
    };
    DataCollection.prototype._removeCore = function (id) {
        if (this.getIndex(id) >= 0) {
            this._order = this._order.filter(function (el) { return el.id !== id; });
            delete this._pull[id];
        }
        if (this._initOrder && this._initOrder.length) {
            this._initOrder = this._initOrder.filter(function (el) { return el.id !== id; });
            delete this._pull[id];
        }
    };
    DataCollection.prototype._parse_data = function (data) {
        var index = this._order.length;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var obj = data_1[_i];
            this._addCore(obj, index++);
        }
    };
    DataCollection.prototype._approximate = function (data, values, maxNum) {
        var len = data.length;
        var vlen = values.length;
        var rlen = Math.floor(len / maxNum);
        var newData = Array(Math.ceil(len / rlen));
        var index = 0;
        for (var i = 0; i < len; i += rlen) {
            var newItem = (0, core_1.copy)(data[i]);
            var end = Math.min(len, i + rlen);
            for (var j = 0; j < vlen; j++) {
                var sum = 0;
                for (var z = i; z < end; z++) {
                    sum += data[z][values[j]];
                }
                newItem[values[j]] = sum / (end - i);
            }
            newData[index++] = newItem;
        }
        return newData;
    };
    DataCollection.prototype._onChange = function (status, id, obj) {
        var itemCount = 0;
        var maxStack = 10;
        for (var _i = 0, _a = this._changes.order; _i < _a.length; _i++) {
            var item = _a[_i];
            // update pending item if previous state is "saving" or if item not saved yet
            var index = this._changes.order.indexOf(item);
            if (item.id === id && !item.saving) {
                itemCount += 1;
                if (index === this._changes.order.length - 1 || this._changes.order[index + 1].id !== id) {
                    // update item
                    if (item.error) {
                        item.error = false;
                    }
                    item = __assign(__assign({}, item), { obj: obj, status: status });
                    itemCount += 1;
                    if (itemCount > maxStack) {
                        this._changes.order.splice(index, itemCount - maxStack, item);
                    }
                    else {
                        this._changes.order.splice(index + 1, 0, item);
                    }
                    this._loader.updateChanges(this._changes);
                    if (status === "remove" && obj.$emptyRow)
                        return;
                    this.events.fire(types_1.DataEvents.change, [id, status, obj]);
                    return;
                }
            }
        }
        this._changes.order.push({ id: id, status: status, obj: __assign({}, obj), saving: false });
        this._loader.updateChanges(this._changes);
        this.events.fire(types_1.DataEvents.change, [id, status, obj]);
    };
    DataCollection.prototype._addToOrder = function (array, obj, index) {
        if (index >= 0 && array[index]) {
            this._pull[obj.id] = obj;
            array.splice(index, 0, obj);
        }
        else {
            this._pull[obj.id] = obj;
            array.push(obj);
        }
    };
    DataCollection.prototype._applySorters = function (by) {
        this._sort.sort(this._order, by, this._sorter);
        // sort the not-filtered dataset
        if (this._initOrder && this._initOrder.length) {
            this._sort.sort(this._initOrder, by, this._sorter);
        }
    };
    DataCollection.prototype._applyFilters = function (rule) {
        if (!rule)
            return;
        if (!this._checkFilterRule(rule)) {
            throw new Error("Invalid filter rule");
        }
        var filter = typeof rule !== "function" ? this._getRuleCallback(rule) : rule;
        var fOrder = this._order.filter(function (item) { return filter(item); });
        if (!this._initOrder) {
            this._initOrder = this._order;
        }
        this._order = fOrder;
    };
    DataCollection.prototype._reapplyFilters = function () {
        var permFilters = this.getFilters({ permanent: true });
        if (permFilters) {
            this.filter(permFilters, { $restore: true, add: true }, true);
        }
        if (this._sorter) {
            this._applySorters();
        }
    };
    DataCollection.prototype._getRuleCallback = function (rule) {
        if (!(0, core_1.isDefined)(rule.by) || !(0, core_1.isDefined)(rule.match))
            return;
        return rule.compare
            ? function (obj) { return rule.compare(obj[rule.by], rule.match, obj, rule.multi); }
            : function (obj) { return obj[rule.by] == rule.match; };
    };
    DataCollection.prototype._getPureFilters = function (filters) {
        return Object.keys(filters).reduce(function (obj, key) {
            var _a;
            if (!((_a = filters[key].config) === null || _a === void 0 ? void 0 : _a.$local)) {
                obj[key] = filters[key];
            }
            return obj;
        }, {});
    };
    DataCollection.prototype._normalizeFilters = function (filters) {
        var rules = [];
        for (var key in filters) {
            var rule = filters[key].rule;
            if (typeof rule !== "function") {
                if ((0, core_1.isDefined)(rule.by)) {
                    rules.push(this._getRuleCallback(rule));
                }
                else {
                    for (var key_1 in rule) {
                        rules.push(this._getRuleCallback(rule[key_1]));
                    }
                }
            }
            else {
                rules.push(rule);
            }
        }
        return __assign({}, rules);
    };
    DataCollection.prototype._checkFilterRule = function (rule) {
        return typeof rule === "function" || ((0, core_1.isDefined)(rule.by) && (0, core_1.isDefined)(rule.match));
    };
    DataCollection.prototype._parse = function (data, driver, grouping) {
        if (driver === void 0) { driver = types_1.DataDriver.json; }
        if (grouping === void 0) { grouping = false; }
        this._reset({ grouping: grouping });
        return this._loader.parse(data, driver);
    };
    return DataCollection;
}());
exports.DataCollection = DataCollection;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataDriversPro = exports.dataDrivers = void 0;
var JsonDriver_1 = __webpack_require__(32);
var CsvDriver_1 = __webpack_require__(33);
var XMLDriver_1 = __webpack_require__(67);
exports.dataDrivers = {
    json: JsonDriver_1.JsonDriver,
    csv: CsvDriver_1.CsvDriver,
};
exports.dataDriversPro = __assign(__assign({}, exports.dataDrivers), { xml: XMLDriver_1.XMLDriver });


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonDriver = void 0;
var JsonDriver = /** @class */ (function () {
    function JsonDriver() {
    }
    JsonDriver.prototype.toJsonArray = function (data) {
        return this.getRows(data);
    };
    JsonDriver.prototype.serialize = function (data) {
        return data;
    };
    JsonDriver.prototype.getFields = function (row) {
        return row;
    };
    JsonDriver.prototype.getRows = function (data) {
        return typeof data === "string" ? JSON.parse(data) : data;
    };
    return JsonDriver;
}());
exports.JsonDriver = JsonDriver;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvDriver = void 0;
var CsvDriver = /** @class */ (function () {
    function CsvDriver(config) {
        var initConfig = {
            skipHeader: 0,
            nameByHeader: false,
            rowDelimiter: "\n",
            columnDelimiter: ",",
        };
        this.config = __assign(__assign({}, initConfig), config);
        if (this.config.nameByHeader) {
            this.config.skipHeader = 1;
        }
    }
    CsvDriver.prototype.getFields = function (row, headers) {
        var regex = new RegExp("(?<!\")".concat(this.config.columnDelimiter, "(?!\")"));
        var parts = row.trim().split(regex);
        var obj = {};
        for (var i = 0; i < parts.length; i++) {
            obj[headers ? headers[i] : i + 1] = isNaN(Number(parts[i]))
                ? parts[i].replace(/"[,;"]"/gi, function (match) {
                    return match
                        .split("")
                        .splice(1, 1)
                        .slice(-1, 1)
                        .join("");
                })
                : parseFloat(parts[i]);
        }
        return obj;
    };
    CsvDriver.prototype.getRows = function (data) {
        return data.trim().split(this.config.rowDelimiter);
    };
    CsvDriver.prototype.toJsonArray = function (data) {
        var _this = this;
        var rows = this.getRows(data);
        var names = this.config.names;
        if (this.config.skipHeader) {
            var top_1 = rows.splice(0, this.config.skipHeader);
            if (this.config.nameByHeader) {
                names = top_1[0].trim().split(this.config.columnDelimiter);
            }
        }
        return rows.map(function (row) { return _this.getFields(row, names); });
    };
    CsvDriver.prototype.serialize = function (data, withoutHeader) {
        var header = data[0]
            ? Object.keys(data[0])
                .filter(function (key) { return !key.startsWith("$"); })
                .join(this.config.columnDelimiter) + this.config.rowDelimiter
            : "";
        var readyData = this._serialize(data);
        if (withoutHeader) {
            return readyData;
        }
        return header + readyData;
    };
    CsvDriver.prototype._serialize = function (data) {
        var _this = this;
        return data.reduce(function (csv, row) {
            var keys = Object.keys(row);
            var cells = keys.reduce(function (total, key, i) {
                var _a, _b;
                if (key.startsWith("$") || key === "items") {
                    return total;
                }
                return "".concat(total).concat(((_b = (_a = row[key]) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : "").replaceAll(/[,;"]/gi, function (match) { return "\"".concat(match, "\""); })).concat(i === keys.length - 1 || (i !== keys.length - 1 && keys[i + 1].startsWith("$"))
                    ? ""
                    : _this.config.columnDelimiter);
            }, "");
            if (row.items) {
                return "".concat(csv).concat(csv ? "\n" : "").concat(cells).concat(_this._serialize(row.items));
            }
            return "".concat(csv).concat(csv ? _this.config.rowDelimiter : "").concat(cells);
        }, "");
    };
    return CsvDriver;
}());
exports.CsvDriver = CsvDriver;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.methods = void 0;
var core_1 = __webpack_require__(0);
exports.methods = {
    sum: function (items, field) {
        return parseFloat(items.reduce(function (sum, item) { return sum + (+item[field] || 0); }, 0).toFixed(12));
    },
    avg: function (items, field) {
        return parseFloat((items.reduce(function (sum, item) { return sum + (+item[field] || 0); }, 0) / items.length).toFixed(12));
    },
    count: function (items, field) {
        if (items === void 0) { items = []; }
        return items.filter(function (item) { return (0, core_1.isDefined)(item[field]) && item[field] !== ""; }).length;
    },
    min: function (items, field) {
        return Math.min.apply(Math, items.map(function (item) { return +item[field]; }));
    },
    max: function (items, field) {
        return Math.max.apply(Math, items.map(function (item) { return +item[field]; }));
    },
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var locale = {
    apply: "apply",
    reject: "reject",
};
exports.default = locale;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.blockScreen = void 0;
function blockKeys(e) {
    var active = document.activeElement;
    if (active.classList.contains("dhx_alert__apply-button") && e.key === "Enter") {
        return;
    }
    if (!active.classList.contains("dhx_alert__confirm-reject") &&
        !active.classList.contains("dhx_alert__confirm-aply")) {
        e.preventDefault();
    }
}
function blockScreen(css) {
    var blocker = document.createElement("div");
    blocker.className = "dhx_alert__overlay " + (css || "");
    document.body.appendChild(blocker);
    document.addEventListener("keydown", blockKeys);
    return function () {
        document.body.removeChild(blocker);
        document.removeEventListener("keydown", blockKeys);
    };
}
exports.blockScreen = blockScreen;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell = void 0;
var core_1 = __webpack_require__(0);
var dom_1 = __webpack_require__(1);
var view_1 = __webpack_require__(6);
var types_1 = __webpack_require__(26);
var helpers_1 = __webpack_require__(93);
var events_1 = __webpack_require__(4);
var Layout_1 = __webpack_require__(25);
var Cell = /** @class */ (function (_super) {
    __extends(Cell, _super);
    function Cell(parent, config) {
        var _this = _super.call(this, parent, config) || this;
        _this._disabled = [];
        var p = parent;
        if (p && p.isVisible) {
            _this._parent = p;
        }
        if (_this._parent && _this._parent.events) {
            _this.events = _this._parent.events;
        }
        else {
            _this.events = new events_1.EventSystem(_this);
        }
        _this.config.full =
            _this.config.full === undefined
                ? Boolean(_this.config.header ||
                    _this.config.collapsable ||
                    _this.config.headerHeight ||
                    _this.config.headerIcon ||
                    _this.config.headerImage)
                : _this.config.full;
        _this._afterWindowResized = _this._resizedWindow.bind(_this);
        _this.id = _this.config.id || (0, core_1.uid)();
        _this._initHandlers();
        _this._progress = !!_this.config.progressDefault;
        _this._stopProgressDefault = false;
        if (_this._isXDirection() && !config.width)
            config.$autoWidth = true;
        if (!_this._isXDirection() && !config.height)
            config.$autoHeight = true;
        return _this;
    }
    Cell.prototype.paint = function () {
        var _a;
        if (this.isVisible()) {
            var view = this.getRootView();
            if (view) {
                view.redraw();
            }
            else {
                (_a = this._parent) === null || _a === void 0 ? void 0 : _a.paint();
            }
        }
    };
    Cell.prototype.isVisible = function () {
        var _a;
        // top level node
        if (!this._parent) {
            if (this._container && this._container.tagName) {
                return true;
            }
            return Boolean(this.getRootNode());
        }
        // check active view in case of multiview
        var active = (_a = this._parent.config) === null || _a === void 0 ? void 0 : _a.activeView;
        if (active && active !== this.id) {
            return false;
        }
        // check that all parents of the cell are visible as well
        return !this.config.hidden && (!this._parent || this._parent.isVisible());
    };
    Cell.prototype.hide = function () {
        if (!this.events.fire(types_1.LayoutEvents.beforeHide, [this.id])) {
            return;
        }
        this.config.hidden = true;
        this._resetCellsSize();
        if (this._parent && this._parent.paint) {
            this._parent.paint();
        }
        this.events.fire(types_1.LayoutEvents.afterHide, [this.id]);
    };
    Cell.prototype.show = function () {
        if (!this.events.fire(types_1.LayoutEvents.beforeShow, [this.id])) {
            return;
        }
        if (this._parent && this._parent.config && this._parent.config.activeView !== undefined) {
            this._parent.config.activeView = this.id;
        }
        else {
            this.config.hidden = false;
        }
        if (this._parent && !this._parent.isVisible()) {
            this._parent.show();
        }
        this.paint();
        this.events.fire(types_1.LayoutEvents.afterShow, [this.id]);
    };
    Cell.prototype.expand = function () {
        if (!this.events.fire(types_1.LayoutEvents.beforeExpand, [this.id])) {
            return;
        }
        this.config.collapsed = false;
        this._checkNextSize() || this._checkNextSize(this._getAnyFlexCell());
        this.events.fire(types_1.LayoutEvents.afterExpand, [this.id]);
        this.paint();
    };
    Cell.prototype.collapse = function () {
        if (!this.events.fire(types_1.LayoutEvents.beforeCollapse, [this.id])) {
            return;
        }
        this.config.collapsed = true;
        this._checkNextSize() || this._checkNextSize(this._getAnyFlexCell());
        this.events.fire(types_1.LayoutEvents.afterCollapse, [this.id]);
        this.paint();
    };
    Cell.prototype.toggle = function () {
        if (this.config.collapsed) {
            this.expand();
        }
        else {
            this.collapse();
        }
    };
    Cell.prototype._checkNextSize = function (cell) {
        var nextCell = cell !== null && cell !== void 0 ? cell : this._getNextCell();
        if (!nextCell)
            return false;
        if (this._isXDirection() && nextCell.config.$autoWidth && nextCell.config.width) {
            nextCell.config.width = undefined;
            return true;
        }
        if (!this._isXDirection() && nextCell.config.$autoHeight && nextCell.config.height) {
            nextCell.config.height = undefined;
            return true;
        }
        return !cell ? nextCell._checkNextSize() : false;
    };
    Cell.prototype.getParent = function () {
        return this._parent;
    };
    Cell.prototype.destructor = function () {
        var _a;
        this.events && this.events.clear();
        window.removeEventListener("resize", this._afterWindowResized);
        if (this._ui && this._ui.config && typeof ((_a = this._ui) === null || _a === void 0 ? void 0 : _a.destructor) === "function") {
            this._ui.destructor();
        }
        this.config = this.events = this.id = this._parent = this._handlers = this._uid = this._disabled = this._resizerHandlers = null;
        this.unmount();
    };
    Cell.prototype.getWidget = function () {
        return this._ui;
    };
    Cell.prototype.getCellView = function () {
        return this._parent && this._parent.getRefs(this._uid);
    };
    Cell.prototype.attach = function (component, config) {
        this.config.html = null;
        if (typeof component === "object") {
            this._ui = component;
        }
        else if (typeof component === "string") {
            this._ui = new window.dhx[component](null, config);
        }
        else if (typeof component === "function") {
            if (component.prototype instanceof view_1.View) {
                this._ui = new component(null, config);
            }
            else {
                this._ui = {
                    getRootView: function () {
                        return component(config);
                    },
                };
            }
        }
        this.paint();
        return this._ui;
    };
    Cell.prototype.attachHTML = function (html) {
        this.config.html = html;
        this.paint();
    };
    Cell.prototype.detach = function () {
        this._stopProgressDefault = false;
        this._ui = this.config.html = null;
        this.paint();
    };
    Cell.prototype.progressShow = function () {
        if (this.config.progressDefault) {
            this._stopProgressDefault = false;
        }
        this._progress = true;
        this.paint();
    };
    Cell.prototype.progressHide = function () {
        if (this.config.progressDefault) {
            this._stopProgressDefault = true;
        }
        this._progress = false;
        this.paint();
    };
    Cell.prototype.isVisibleProgress = function () {
        return this._progress;
    };
    Cell.prototype.toVDOM = function (nodes) {
        var _a;
        var _b, _c;
        this._saveTheme();
        if (this.config === null) {
            this.config = {};
        }
        if (this.config.hidden) {
            return;
        }
        var isFieldset = this.config.$fieldset;
        var style = this._calculateStyle();
        var stylePadding = (0, core_1.isDefined)(this.config.padding)
            ? !isNaN(Number(this.config.padding))
                ? { padding: "".concat(this.config.padding, "px") }
                : { padding: this.config.padding }
            : "";
        var fullStyle = this.config.full || this.config.html ? style : __assign(__assign({}, style), stylePadding);
        var progressBar = this._checkProgress() ? this._getProgressBar() : null;
        var kids;
        if (!this.config.html) {
            if (this._ui) {
                var view = this._ui.getRootView();
                if (view.render) {
                    view = (0, dom_1.inject)(view);
                }
                kids = [view];
            }
            else {
                kids = nodes || null;
            }
        }
        var resizer = this.config.resizable && !this._isLastCell() && this._getNextCell() && !this.config.collapsed
            ? (0, dom_1.el)(".dhx_layout-resizer." +
                (this._isXDirection() ? "dhx_layout-resizer--x" : "dhx_layout-resizer--y"), __assign(__assign({}, this._resizerHandlers), { _ref: "resizer_" + this._uid, tabindex: 0 }), [
                (0, dom_1.el)("span.dhx_layout-resizer__icon", {
                    class: "dxi " +
                        (this._isXDirection() ? "dxi-dots-vertical" : "dxi-dots-horizontal"),
                }),
            ])
            : null;
        var handlers = {};
        if (this.config.on) {
            for (var key in this.config.on) {
                handlers["on" + key] = this.config.on[key];
            }
        }
        var typeClass = "";
        var isParent = this.config.cols || this.config.rows;
        if (this.config.type && isParent) {
            switch (this.config.type) {
                case "line":
                    typeClass = " dhx_layout-line";
                    break;
                case "wide":
                    typeClass = " dhx_layout-wide";
                    break;
                case "space":
                    typeClass = " dhx_layout-space";
                    break;
                default:
                    break;
            }
        }
        var cellContent = isFieldset
            ? (0, dom_1.el)("fieldset.dhx_form-fieldset", {
                class: (this.config.$disabled && " dhx_form-fieldset--disabled") || "",
                style: stylePadding,
                disabled: this.config.$disabled,
            }, [
                (0, dom_1.el)("legend.dhx_form-fieldset-legend", {
                    class: "dhx_form-fieldset-legend--".concat(this.config.labelAlignment || "left"),
                }, this.config.label),
                (0, dom_1.el)(".dhx_layout-cell-content", {
                    class: this._getCss(false),
                }, [].concat(kids)),
            ])
            : this.config.full
                ? [
                    (0, dom_1.el)("div", {
                        tabindex: this.config.collapsable ? "0" : "-1",
                        role: this.config.collapsable ? "button" : null,
                        "aria-label": this.config.collapsable
                            ? "click to ".concat(this.config.collapsed ? "expand" : "collapse")
                            : null,
                        class: "dhx_layout-cell-header" +
                            (this._isXDirection()
                                ? " dhx_layout-cell-header--col"
                                : " dhx_layout-cell-header--row") +
                            (this.config.collapsable ? " dhx_layout-cell-header--collapseble" : "") +
                            (this.config.collapsed ? " dhx_layout-cell-header--collapsed" : "") +
                            (((this.getParent() || {}).config || {}).isAccordion
                                ? " dhx_layout-cell-header--accordion"
                                : ""),
                        style: {
                            height: this.config.headerHeight,
                        },
                        onclick: this._handlers.toggle,
                        onkeydown: this._handlers.enterCollapse,
                    }, [
                        this.config.headerIcon &&
                            (0, dom_1.el)("span.dhx_layout-cell-header__icon", {
                                class: this.config.headerIcon,
                            }),
                        this.config.headerImage &&
                            (0, dom_1.el)(".dhx_layout-cell-header__image-wrapper", [
                                (0, dom_1.el)("img", {
                                    src: this.config.headerImage,
                                    class: "dhx_layout-cell-header__image",
                                }),
                            ]),
                        this.config.header && (0, dom_1.el)("h3.dhx_layout-cell-header__title", this.config.header),
                        this.config.collapsable
                            ? (0, dom_1.el)("div.dhx_layout-cell-header__collapse-icon", {
                                class: this._getCollapseIcon(),
                            })
                            : (0, dom_1.el)("div.dhx_layout-cell-header__collapse-icon", {
                                class: "dxi dxi-empty",
                            }),
                    ]),
                    !this.config.collapsed
                        ? (0, dom_1.el)("div", {
                            style: __assign(__assign({}, stylePadding), { height: "calc(100% - ".concat(this.config.headerHeight || 37, "px)") }),
                            class: this._getCss(true) +
                                " dhx_layout-cell-content" +
                                (this.config.type ? typeClass : ""),
                        }, this.config.html
                            ? [
                                (0, dom_1.el)("div", {
                                    ".innerHTML": this.config.html,
                                    class: "dhx_layout-cell dhx_layout-cell-inner_html",
                                }),
                            ]
                            : kids)
                        : null,
                ]
                : this.config.html &&
                    !(this.config.rows &&
                        this.config.cols &&
                        this.config.views)
                    ? [
                        !this.config.collapsed
                            ? (0, dom_1.el)(".dhx_layout-cell-content", { style: stylePadding }, [
                                (0, dom_1.el)(".dhx_layout-cell-inner_html", {
                                    ".innerHTML": this.config.html,
                                }),
                            ])
                            : null,
                    ]
                    : kids;
        var cell = (0, dom_1.el)("div", __assign(__assign((_a = { _key: this._uid, _ref: this._uid }, _a["aria-label"] = this.config.id ? "tab-content-" + this.config.id : null, _a["data-cell-id"] = (_b = this.config.id) !== null && _b !== void 0 ? _b : null, _a["data-dhx-theme"] = (_c = this._theme) !== null && _c !== void 0 ? _c : null, _a), handlers), { class: this._getCss(false) +
                (this.config.css ? " " + this.config.css : "") +
                (this.config.collapsed ? " dhx_layout-cell--collapsed" : "") +
                (this.config.resizable ? " dhx_layout-cell--resizable" : "") +
                (this.config.type && !this.config.full ? typeClass : ""), style: isFieldset ? style : fullStyle }), cellContent || progressBar ? [].concat(cellContent, progressBar) : null);
        return resizer ? [].concat(cell, resizer) : cell;
    };
    Cell.prototype._saveTheme = function () {
        var _a;
        var cellEl = (_a = this.getCellView()) === null || _a === void 0 ? void 0 : _a.el;
        if (cellEl) {
            this._theme = cellEl.getAttribute("data-dhx-theme");
        }
    };
    Cell.prototype._getProgressBar = function () {
        return (0, dom_1.el)("span", {
            class: "dhx_progress-bar",
        }, [
            (0, dom_1.sv)("svg", {
                viewBox: "25 25 50 50",
                class: "dhx_spinner",
            }, [
                (0, dom_1.sv)("circle", {
                    cx: "50",
                    cy: "50",
                    r: "20",
                    class: "path",
                }),
            ]),
        ]);
    };
    Cell.prototype._getCss = function (_content) {
        return "dhx_layout-cell";
    };
    Cell.prototype._initHandlers = function () {
        var _this = this;
        if (this.getParent() &&
            !(this.config.cols || this.config.rows)) {
            window.addEventListener("resize", this._afterWindowResized);
        }
        this._handlers = {
            enterCollapse: function (e) {
                if (e.keyCode === 13) {
                    _this._handlers.toggle();
                }
            },
            collapse: function () {
                if (!_this.config.collapsable) {
                    return;
                }
                _this.collapse();
            },
            expand: function () {
                if (!_this.config.collapsable) {
                    return;
                }
                _this.expand();
            },
            toggle: function () {
                if (!_this.config.collapsable) {
                    return;
                }
                _this.toggle();
            },
        };
        var blockOpts = {
            left: null,
            top: null,
            isActive: false,
            range: null,
            xLayout: null,
            nextCell: null,
            size: null,
            resizerLength: null,
            margin: null,
            collapsedSize: null,
        };
        var resizeMove = function (event, startCoords) {
            if (startCoords === void 0) { startCoords = { x: 0, y: 0 }; }
            if (!blockOpts.isActive) {
                return;
            }
            var xLayout = blockOpts.xLayout;
            var clientX = event.targetTouches
                ? event.targetTouches[0].clientX
                : event.clientX + startCoords.x;
            var clientY = event.targetTouches
                ? event.targetTouches[0].clientY
                : event.clientY + startCoords.y;
            var newValue = xLayout
                ? clientX - blockOpts.range.min + window.pageXOffset
                : clientY - blockOpts.range.min + window.pageYOffset;
            var prop = xLayout ? "width" : "height";
            if (newValue < 0) {
                newValue = blockOpts.resizerLength / 2;
            }
            else if (newValue > blockOpts.size) {
                newValue = blockOpts.size - blockOpts.resizerLength;
            }
            var getValue = function (key) { var _a; return parseInt((_a = _this.config[key]) === null || _a === void 0 ? void 0 : _a.toString()); };
            var maxSize = getValue(xLayout ? "maxWidth" : "maxHeight");
            var minSize = getValue(xLayout ? "minWidth" : "minHeight");
            if ((!maxSize || newValue < maxSize) && (!minSize || newValue > minSize)) {
                _this.config[prop] = newValue - blockOpts.resizerLength / 2 + "px";
                blockOpts.nextCell.config[prop] =
                    blockOpts.size - newValue - blockOpts.resizerLength / 2 + "px";
                if (blockOpts.nextCell._getAnyFlexCell())
                    blockOpts.nextCell._getAnyFlexCell().config[prop] = undefined;
                _this.paint();
                _this.events.fire(types_1.LayoutEvents.resize, [_this.id]);
            }
        };
        var iframesInfo = {};
        var resizeEnd = function (event) {
            blockOpts.isActive = false;
            document.body.classList.remove("dhx_no-select--resize");
            if (!event.targetTouches) {
                document.removeEventListener("mouseup", resizeEnd);
                document.removeEventListener("mousemove", resizeMove);
                for (var index in iframesInfo) {
                    iframesInfo[index].node.contentWindow.document.removeEventListener("mouseup", resizeEnd);
                    iframesInfo[index].node.contentWindow.document.removeEventListener("mousemove", iframesInfo[index].listener);
                }
            }
            else {
                document.removeEventListener("touchend", resizeEnd);
                document.removeEventListener("touchmove", resizeMove);
                for (var index in iframesInfo) {
                    iframesInfo[index].node.contentWindow.document.removeEventListener("touchend", resizeEnd);
                    iframesInfo[index].node.contentWindow.document.removeEventListener("touchmove", iframesInfo[index].listener);
                }
            }
            _this.events.fire(types_1.LayoutEvents.afterResizeEnd, [_this.id]);
        };
        var resizeStart = function (event) {
            event.targetTouches && event.preventDefault();
            if (event.which === 3) {
                return;
            }
            if (blockOpts.isActive) {
                resizeEnd(event);
            }
            if (!_this.events.fire(types_1.LayoutEvents.beforeResizeStart, [_this.id])) {
                return;
            }
            document.body.classList.add("dhx_no-select--resize");
            var block = _this.getCellView();
            var nextCell = _this._getNextCell();
            var nextBlock = nextCell.getCellView();
            var resizerBlock = _this._getResizerView();
            var blockOffsets = block.el.getBoundingClientRect();
            var resizerOffsets = resizerBlock.el.getBoundingClientRect();
            var nextBlockOffsets = nextBlock.el.getBoundingClientRect();
            blockOpts.xLayout = _this._isXDirection();
            blockOpts.left = blockOffsets.left + window.pageXOffset;
            blockOpts.top = blockOffsets.top + window.pageYOffset;
            blockOpts.collapsedSize = _this._getCollapsedSize(_this, nextCell);
            blockOpts.margin = (0, helpers_1.getMarginSize)(_this.getParent().config);
            blockOpts.range = (0, helpers_1.getBlockRange)(blockOffsets, nextBlockOffsets, blockOpts.xLayout);
            blockOpts.size =
                blockOpts.range.max - blockOpts.range.min - blockOpts.margin - blockOpts.collapsedSize;
            blockOpts.isActive = true;
            blockOpts.nextCell = nextCell;
            blockOpts.resizerLength = blockOpts.xLayout ? resizerOffsets.width : resizerOffsets.height;
        };
        this._resizerHandlers = {
            onmousedown: function (e) {
                resizeStart(e);
                document.addEventListener("mouseup", resizeEnd);
                document.addEventListener("mousemove", resizeMove);
                var iframes = document.querySelectorAll("iframe");
                if (iframes.length) {
                    iframes.forEach(function (iframe, index) {
                        var iframeCoords = {
                            x: iframe.getBoundingClientRect().x,
                            y: iframe.getBoundingClientRect().y,
                        };
                        iframesInfo[index] = {
                            node: iframe,
                            listener: function (event) { return resizeMove(event, iframeCoords); },
                        };
                    });
                    for (var index in iframesInfo) {
                        iframesInfo[index].node.contentWindow.document.addEventListener("mouseup", resizeEnd);
                        iframesInfo[index].node.contentWindow.document.addEventListener("mousemove", iframesInfo[index].listener);
                    }
                }
            },
            ontouchstart: function (e) {
                resizeStart(e);
                document.addEventListener("touchend", resizeEnd);
                document.addEventListener("touchmove", resizeMove);
                var iframes = document.querySelectorAll("iframe");
                if (iframes.length) {
                    iframes.forEach(function (iframe, index) {
                        var iframeCoords = {
                            x: iframe.getBoundingClientRect().x,
                            y: iframe.getBoundingClientRect().y,
                        };
                        iframesInfo[index] = {
                            node: iframe,
                            listener: function (event) { return resizeMove(event, iframeCoords); },
                        };
                    });
                    for (var index in iframesInfo) {
                        iframesInfo[index].node.contentWindow.document.addEventListener("touchend", resizeEnd);
                        iframesInfo[index].node.contentWindow.document.addEventListener("touchmove", iframesInfo[index].listener);
                    }
                }
            },
            ondragstart: function (e) { return e.preventDefault(); },
        };
    };
    Cell.prototype._getCollapsedSize = function (cell, nextCell) {
        var collapsedSize = 0;
        var parent = this._parent;
        var index = parent._cells.indexOf(cell);
        var nextIndex = parent._cells.indexOf(nextCell);
        if (nextIndex - index === 1)
            return collapsedSize;
        for (var i = index + 1; i < nextIndex; i++) {
            if (parent._cells[i].config.collapsed) {
                if (!this._isXDirection()) {
                    collapsedSize += Number(parent._cells[i].config.headerHeight) || 37;
                }
                else {
                    collapsedSize += 45;
                }
            }
        }
        return collapsedSize;
    };
    Cell.prototype._getCollapseIcon = function () {
        if (this._isXDirection() && this.config.collapsed) {
            return "dxi dxi-chevron-right";
        }
        if (this._isXDirection() && !this.config.collapsed) {
            return "dxi dxi-chevron-left";
        }
        if (!this._isXDirection() && this.config.collapsed) {
            return "dxi dxi-chevron-up";
        }
        if (!this._isXDirection() && !this.config.collapsed) {
            return "dxi dxi-chevron-down";
        }
    };
    Cell.prototype._isLastCell = function () {
        var parent = this._parent;
        return parent && parent._cells.indexOf(this) === parent._cells.length - 1;
    };
    Cell.prototype._getNextCell = function () {
        var parent = this._parent;
        var index = parent._cells.indexOf(this);
        var nextCell = !this._isLastCell() && parent._cells[index + 1];
        if (!nextCell)
            return false;
        if (nextCell.config.hidden || nextCell.config.collapsed) {
            return nextCell._getNextCell();
        }
        else
            return nextCell;
    };
    Cell.prototype._getAnyFlexCell = function (selfInclude) {
        var _this = this;
        var _a;
        if (selfInclude === void 0) { selfInclude = false; }
        var parent = this._parent;
        var prop = this._isXDirection() ? "$autoWidth" : "$autoHeight";
        var cells = (_a = parent === null || parent === void 0 ? void 0 : parent._cells) === null || _a === void 0 ? void 0 : _a.filter(function (cell) { return cell.config[prop] === true && (selfInclude ? true : cell.id !== _this.id); });
        return (cells === null || cells === void 0 ? void 0 : cells.length) ? cells[cells.length - 1] : false;
    };
    Cell.prototype._getResizerView = function () {
        return this._parent.getRefs("resizer_" + this._uid);
    };
    Cell.prototype._isXDirection = function () {
        return this._parent && this._parent._xLayout;
    };
    Cell.prototype._checkProgress = function () {
        if (this instanceof Layout_1.Layout) {
            return this.isVisibleProgress();
        }
        this._calculateProgressState();
        return ((this._progress || this._checkAutoProgress()) &&
            !this.config.collapsed &&
            !this.config.hidden &&
            !this._parent.isVisibleProgress());
    };
    Cell.prototype._checkAutoProgress = function () {
        if (this._stopProgressDefault)
            return false;
        var _a = this.config, html = _a.html, progressDefault = _a.progressDefault;
        return progressDefault && !this._ui && !html;
    };
    Cell.prototype._calculateProgressState = function () {
        if (this._stopProgressDefault)
            return;
        var _a = this.config, html = _a.html, progressDefault = _a.progressDefault;
        if (progressDefault && !this._ui && !html) {
            this._progress = true;
        }
        if (progressDefault && (this._ui || html)) {
            this._progress = false;
        }
    };
    Cell.prototype._calculateStyle = function () {
        var config = this.config;
        if (!config) {
            return;
        }
        var style = {};
        var autoWidth = false;
        var autoHeight = false;
        if (!isNaN(Number(config.width)))
            config.width = config.width + "px";
        if (!isNaN(Number(config.height)))
            config.height = config.height + "px";
        if (!isNaN(Number(config.minWidth)))
            config.minWidth = config.minWidth + "px";
        if (!isNaN(Number(config.minHeight)))
            config.minHeight = config.minHeight + "px";
        if (!isNaN(Number(config.maxWidth)))
            config.maxWidth = config.maxWidth + "px";
        if (!isNaN(Number(config.maxHeight)))
            config.maxHeight = config.maxHeight + "px";
        if (config.width === "content")
            autoWidth = true;
        if (config.height === "content")
            autoHeight = true;
        // if (this._isXDirection() && !config.width) config.$autoWidth = true;
        // if (!this._isXDirection() && !config.height) config.$autoHeight = true;
        var _a = config, width = _a.width, height = _a.height, cols = _a.cols, rows = _a.rows, minWidth = _a.minWidth, minHeight = _a.minHeight, maxWidth = _a.maxWidth, maxHeight = _a.maxHeight, gravity = _a.gravity, collapsed = _a.collapsed, $fixed = _a.$fixed;
        var gravityNumber = Math.sign(gravity) === -1 ? 0 : gravity;
        if (typeof gravity === "boolean") {
            gravityNumber = gravity ? 1 : 0;
        }
        var fixed = typeof gravity === "boolean" ? !gravity : Math.sign(gravity) === -1;
        if (this._isXDirection()) {
            if ($fixed || width || (gravity === undefined && (minWidth || maxWidth))) {
                fixed = true;
            }
        }
        else {
            if ($fixed || height || (gravity === undefined && (minHeight || maxHeight))) {
                fixed = true;
            }
        }
        var isFullSizeCell = this._checkFullSizeCell();
        var grow = fixed && !isFullSizeCell ? 0 : isFullSizeCell ? 1 : gravityNumber || 1;
        var fillSpace = this._isXDirection() ? "x" : "y";
        if (minWidth !== undefined && !collapsed)
            style.minWidth = minWidth;
        if (minHeight !== undefined && !collapsed)
            style.minHeight = minHeight;
        if (maxWidth !== undefined)
            style.maxWidth = maxWidth;
        if (maxHeight !== undefined)
            style.maxHeight = maxHeight;
        if (this._parent === undefined && !fillSpace !== undefined) {
            fillSpace = true;
        }
        if (!isFullSizeCell && width !== undefined && width !== "content") {
            style.width = width;
        }
        else {
            if (fillSpace === true) {
                style.width = "100%";
            }
            else if (fillSpace === "x") {
                if (autoWidth) {
                    style.flex = "0 0 auto";
                }
                else {
                    var isAuto = this._isXDirection() ? "1px" : "auto";
                    style.flex = "".concat(grow, " ").concat(cols || rows ? "0 ".concat(isAuto) : "1 auto");
                }
            }
        }
        if (!isFullSizeCell && height !== undefined && height !== "content") {
            style.height = height;
        }
        else {
            if (fillSpace === true) {
                style.height = "100%";
            }
            else if (fillSpace === "y") {
                if (autoHeight) {
                    style.flex = "0 0 auto";
                }
                else {
                    var isAuto = !this._isXDirection() ? "1px" : "auto";
                    style.flex = "".concat(grow, " ").concat(cols || rows ? "0 ".concat(isAuto) : "1 auto");
                }
            }
        }
        if (fillSpace === true && config.width === undefined && config.height === undefined) {
            style.flex = "".concat(grow, " 1 auto");
        }
        if (collapsed) {
            if (this._isXDirection()) {
                style.width = "auto";
            }
            else {
                style.height = "auto";
            }
            style.flex = "0 0 auto";
        }
        return style;
    };
    Cell.prototype._resizedWindow = function () {
        var _a;
        if (this._isLastFlexCell === undefined) {
            this._isLastFlexCell = ((_a = this._getAnyFlexCell(true)) === null || _a === void 0 ? void 0 : _a.id) === this.id;
        }
        else if (!this._isLastFlexCell) {
            window.removeEventListener("resize", this._afterWindowResized);
        }
        if (this._isLastFlexCell) {
            var prop = this._isXDirection() ? "width" : "height";
            this.config[prop] = undefined;
            this.paint();
        }
    };
    Cell.prototype._resetCellsSize = function () {
        var _this = this;
        var cells = this._parent._cells.filter(function (cell) {
            return cell !== _this && !cell.config.hidden && !cell.config.collapsed;
        });
        var direction = this._isXDirection();
        var autoSize = direction ? "$autoWidth" : "$autoHeight";
        var size = direction ? "width" : "height";
        cells.forEach(function (cell) {
            if (cell.config[autoSize]) {
                cell.config[size] = undefined;
            }
        });
    };
    Cell.prototype._checkFullSizeCell = function () {
        var _this = this;
        if (!this._parent)
            return false;
        var autoSize = this._isXDirection() ? "$autoWidth" : "$autoHeight";
        if (!this.config[autoSize])
            return false;
        var cells = this._parent._cells.filter(function (cell) {
            return cell !== _this && !cell.config.hidden;
        });
        return !!cells.length && cells.every(function (cell) { return cell.config.collapsed; });
    };
    return Cell;
}(view_1.View));
exports.Cell = Cell;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollView = exports.scrollViewConfig = void 0;
var core_1 = __webpack_require__(0);
var dom_1 = __webpack_require__(1);
var html_1 = __webpack_require__(2);
exports.scrollViewConfig = {
    enable: false,
    autoHide: true,
    timeout: 1000,
    scrollHandler: function () { },
};
var ScrollView = /** @class */ (function () {
    function ScrollView(getRootView, config) {
        var _a;
        if (config === void 0) { config = {}; }
        var _this = this;
        this.config = (0, core_1.extend)({
            enable: exports.scrollViewConfig.enable,
            autoHide: exports.scrollViewConfig.autoHide,
            timeout: exports.scrollViewConfig.timeout,
            scrollHandler: exports.scrollViewConfig.scrollHandler,
        }, config);
        this._wheelName = (0, html_1.isIE)() ? "onmousewheel" : "onwheel";
        this._getRootView = getRootView;
        this._scrollYTop = this._scrollXLeft = this._runnerYTop = this._runnerXLeft = this._runnerHeight = this._runnerWidth = 0;
        this._visibleYArea = this._visibleXArea = 1;
        this._scrollWidth = (0, html_1.getScrollbarWidth)();
        this._scrollHeight = (0, html_1.getScrollbarHeight)();
        this._handlers = (_a = {
                onscroll: function (e) {
                    _this.config.scrollHandler(e);
                    _this.update();
                }
            },
            _a[this._wheelName] = function (e) {
                var isY = !!(0, html_1.locateNodeByClassName)(e.target, "y-scroll");
                e.preventDefault();
                var sign = (e.deltaY || -e.wheelDelta) > 0 ? 1 : -1;
                var delta = sign * 40;
                var area = _this._getRefs().area;
                if (isY) {
                    var maxBottom = area.scrollHeight - _this._runnerHeight;
                    var newScrollTop = _this._scrollYTop + delta;
                    if (newScrollTop < 0) {
                        area.scrollTop = 0;
                    }
                    else if (newScrollTop > maxBottom) {
                        area.scrollTop = maxBottom;
                    }
                    else {
                        area.scrollTop = newScrollTop;
                    }
                }
                else {
                    var maxRight = area.scrollWidth - _this._runnerWidth;
                    var newScrollLeft = _this._scrollXLeft + delta;
                    if (newScrollLeft < 0) {
                        area.scrollLeft = 0;
                    }
                    else if (newScrollLeft > maxRight) {
                        area.scrollLeft = maxRight;
                    }
                    else {
                        area.scrollLeft = newScrollLeft;
                    }
                }
                _this.update();
            },
            _a.onmousedownRunner = function (mouseDownEv) {
                mouseDownEv.preventDefault();
                var isY = !!(0, html_1.locateNodeByClassName)(mouseDownEv.target, "y-scroll");
                var _a = _this._getRefs(), area = _a.area, runnerY = _a.runnerY, runnerX = _a.runnerX;
                var rect = area.getBoundingClientRect();
                var top = rect.top + window.pageYOffset;
                var bottom = rect.bottom + window.pageYOffset;
                var maxBottom = area.scrollHeight - _this._runnerHeight;
                var deltaY = mouseDownEv.pageY - runnerY.getBoundingClientRect().top - window.pageYOffset;
                var left = rect.left + window.pageXOffset;
                var right = rect.right + window.pageXOffset;
                var maxRight = area.scrollWidth - _this._runnerWidth;
                var deltaX = mouseDownEv.pageX - runnerX.getBoundingClientRect().left - window.pageXOffset;
                var mouseMove = function (e) {
                    if (isY) {
                        var y = e.pageY - deltaY;
                        if (y <= top) {
                            area.scrollTop = 0;
                        }
                        else if (y > bottom) {
                            area.scrollTop = maxBottom;
                        }
                        else {
                            area.scrollTop = (y - top) / _this._visibleYArea;
                        }
                    }
                    else {
                        var x = e.pageX - deltaX;
                        if (x <= left) {
                            area.scrollLeft = 0;
                        }
                        else if (x > right) {
                            area.scrollLeft = maxRight;
                        }
                        else {
                            area.scrollLeft = (x - left) / _this._visibleXArea;
                        }
                    }
                    _this.update();
                };
                var mouseUp = function () {
                    document.removeEventListener("mousemove", mouseMove);
                    document.removeEventListener("mouseup", mouseUp);
                    document.body.classList.remove("dhx-no-select");
                };
                document.body.classList.add("dhx-no-select");
                document.addEventListener("mousemove", mouseMove);
                document.addEventListener("mouseup", mouseUp);
            },
            _a.onmousedownArea = function (e) {
                if ((0, html_1.locateNodeByClassName)(e, "scroll-runner"))
                    return;
                e.preventDefault();
                var isY = !!(0, html_1.locateNodeByClassName)(e.target, "y-scroll");
                var _a = _this._getRefs(), area = _a.area, runnerY = _a.runnerY, runnerX = _a.runnerX;
                if (isY) {
                    area.scrollTop += (e.pageY - runnerY.getBoundingClientRect().top) / _this._visibleYArea;
                }
                else {
                    area.scrollLeft += (e.pageX - runnerX.getBoundingClientRect().left) / _this._visibleXArea;
                }
                _this.update();
            },
            _a.onmouseenter = function (e) {
                if ((0, html_1.locateNodeByClassName)(e, "scroll-runner"))
                    return;
                var refs = _this._getRefs();
                if (!refs) {
                    return;
                }
                var isY = !!(0, html_1.locateNodeByClassName)(e.target, "y-scroll");
                var areaX = refs.areaX, areaY = refs.areaY;
                if (isY && _this._runnerHeight > 0) {
                    areaY.style.background = "#eee";
                }
                else if (!isY && _this._runnerWidth > 0) {
                    areaX.style.background = "#eee";
                }
            },
            _a.onmouseleave = function (e) {
                if ((0, html_1.locateNodeByClassName)(e, "scroll-runner"))
                    return;
                var refs = _this._getRefs();
                if (!refs) {
                    return;
                }
                var isY = !!(0, html_1.locateNodeByClassName)(e.target, "y-scroll");
                var areaX = refs.areaX, areaY = refs.areaY;
                if (isY && _this._runnerHeight > 0) {
                    areaY.style.background = "transparent";
                }
                else if (!isY && _this._runnerWidth > 0) {
                    areaX.style.background = "transparent";
                }
            },
            _a);
    }
    ScrollView.prototype.enable = function () {
        this.config.enable = true;
        this._getRootView().redraw();
    };
    ScrollView.prototype.disable = function () {
        this.config.enable = false;
        this._getRootView().redraw();
    };
    ScrollView.prototype.render = function (element, uid) {
        var _a, _b;
        var _this = this;
        if (uid === void 0) { uid = ""; }
        if (!this.config.enable || !element.length) {
            return element;
        }
        if (uid)
            this._uid = uid;
        var scrollView = this.config.enable
            ? [
                (0, dom_1.el)(".y-scroll", (_a = {},
                    _a[this._wheelName] = this._handlers[this._wheelName],
                    _a._ref = uid ? "scroll-y-area-".concat(uid) : "scroll-y-area",
                    _a.onmousedown = this._handlers.onmousedownArea,
                    _a.onmouseenter = this._handlers.onmouseenter,
                    _a.onmouseleave = this._handlers.onmouseleave,
                    _a.style = {
                        width: "6px",
                        height: "100%",
                        right: 0,
                        top: 0,
                        position: "absolute",
                    },
                    _a), [
                    (0, dom_1.el)(".scroll-runner", {
                        _ref: uid ? "scroll-y-runner-".concat(uid) : "scroll-y-runner",
                        onmousedown: this._handlers.onmousedownRunner,
                        style: {
                            height: this._runnerHeight + "px",
                            top: this._runnerYTop,
                        },
                    }),
                ]),
                (0, dom_1.el)(".x-scroll", (_b = {},
                    _b[this._wheelName] = this._handlers[this._wheelName],
                    _b._ref = uid ? "scroll-x-area-".concat(uid) : "scroll-x-area",
                    _b.onmousedown = this._handlers.onmousedownArea,
                    _b.onmouseenter = this._handlers.onmouseenter,
                    _b.onmouseleave = this._handlers.onmouseleave,
                    _b.style = {
                        width: "100%",
                        height: "6px",
                        left: 0,
                        bottom: 0,
                        position: "absolute",
                    },
                    _b), [
                    (0, dom_1.el)(".scroll-runner", {
                        _ref: uid ? "scroll-x-runner-".concat(uid) : "scroll-x-runner",
                        onmousedown: this._handlers.onmousedownRunner,
                        style: {
                            width: this._runnerWidth + "px",
                            left: this._runnerXLeft,
                        },
                    }),
                ]),
            ]
            : null;
        return (0, dom_1.el)(".scroll-view-wrapper", [
            (0, dom_1.el)(".scroll-view", {
                onscroll: this._handlers.onscroll,
                _ref: uid ? "scroll-view-".concat(uid) : "scroll-view",
                _hooks: {
                    didInsert: function () {
                        _this.update();
                    },
                    didRecycle: function () {
                        _this.update();
                    },
                },
                style: {
                    width: "calc(100% + ".concat(this._scrollWidth, "px)"),
                    height: "calc(100% + ".concat(this._scrollHeight, "px)"),
                    "margin-bottom": "-".concat(this._scrollHeight, "px"),
                },
            }, element),
        ].concat(scrollView));
    };
    ScrollView.prototype.update = function () {
        var refs = this._getRefs();
        if (!refs) {
            return;
        }
        var area = refs.area, areaX = refs.areaX, areaY = refs.areaY, runnerY = refs.runnerY, runnerX = refs.runnerX;
        this._visibleYArea = area.clientHeight / area.scrollHeight;
        this._visibleXArea = area.clientWidth / area.scrollWidth;
        this._scrollYTop = area.scrollTop;
        this._scrollXLeft = area.scrollLeft;
        this._runnerYTop = this._scrollYTop * this._visibleYArea;
        this._runnerXLeft = this._scrollXLeft * this._visibleXArea;
        this._runnerHeight = this._visibleYArea < 1 ? area.clientHeight * this._visibleYArea : 0;
        this._runnerWidth = this._visibleXArea < 1 ? area.clientWidth * this._visibleXArea : 0;
        var initialTop = runnerY.style.top;
        var initialLeft = runnerX.style.left;
        // update dom
        runnerY.style.opacity = 1;
        runnerY.style.top = this._runnerYTop + "px";
        runnerY.style.height = this._runnerHeight + "px";
        runnerX.style.opacity = 1;
        runnerX.style.left = this._runnerXLeft + "px";
        runnerX.style.width = this._runnerWidth + "px";
        if (initialTop !== runnerY.style.top) {
            areaY.style.opacity = 0.9;
            areaY.style.width = "10px";
        }
        if (initialLeft !== runnerX.style.left) {
            areaX.style.opacity = 0.9;
            areaX.style.height = "10px";
        }
        if (this.config.autoHide) {
            !this._autoHideFunc &&
                (this._autoHideFunc = (0, core_1.debounce)(function () {
                    runnerY.style.opacity = 0;
                    areaY.style.width = "6px";
                    runnerX.style.opacity = 0;
                    areaX.style.height = "6px";
                }, this.config.timeout));
        }
        else {
            this._autoHideFunc = (0, core_1.debounce)(function () {
                areaY.style.width = "6px";
                areaX.style.height = "6px";
            }, this.config.timeout);
        }
        this._autoHideFunc();
    };
    ScrollView.prototype._getRefs = function () {
        var rootView = this._getRootView();
        var refsCheck = !!(rootView.refs["scroll-view"] &&
            (rootView.refs["scroll-x-runner"] || rootView.refs["scroll-y-runner"]));
        var refsIdCheck = !!(this._uid &&
            rootView.refs["scroll-view-".concat(this._uid)] &&
            (rootView.refs["scroll-x-runner-".concat(this._uid)] || rootView.refs["scroll-y-runner-".concat(this._uid)]));
        if (rootView.refs) {
            if (refsCheck) {
                return {
                    area: rootView.refs["scroll-view"].el,
                    areaY: rootView.refs["scroll-y-area"].el,
                    areaX: rootView.refs["scroll-x-area"].el,
                    runnerY: rootView.refs["scroll-y-runner"].el,
                    runnerX: rootView.refs["scroll-x-runner"].el,
                };
            }
            else if (refsIdCheck) {
                return {
                    area: rootView.refs["scroll-view-".concat(this._uid)].el,
                    areaY: rootView.refs["scroll-y-area-".concat(this._uid)].el,
                    areaX: rootView.refs["scroll-x-area-".concat(this._uid)].el,
                    runnerY: rootView.refs["scroll-y-runner-".concat(this._uid)].el,
                    runnerX: rootView.refs["scroll-x-runner-".concat(this._uid)].el,
                };
            }
        }
    };
    return ScrollView;
}());
exports.ScrollView = ScrollView;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PopupEvents = void 0;
var PopupEvents;
(function (PopupEvents) {
    PopupEvents["beforeHide"] = "beforeHide";
    PopupEvents["beforeShow"] = "beforeShow";
    PopupEvents["afterHide"] = "afterHide";
    PopupEvents["afterShow"] = "afterShow";
    PopupEvents["click"] = "click";
})(PopupEvents || (exports.PopupEvents = PopupEvents = {}));


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SliderEvents = void 0;
var SliderEvents;
(function (SliderEvents) {
    SliderEvents["beforeChange"] = "beforeChange";
    SliderEvents["change"] = "change";
    SliderEvents["focus"] = "focus";
    SliderEvents["blur"] = "blur";
    SliderEvents["keydown"] = "keydown";
    SliderEvents["mousedown"] = "mousedown";
    SliderEvents["mouseup"] = "mouseup";
})(SliderEvents || (exports.SliderEvents = SliderEvents = {}));


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TimepickerEvents = void 0;
var TimepickerEvents;
(function (TimepickerEvents) {
    TimepickerEvents["beforeChange"] = "beforeChange";
    TimepickerEvents["change"] = "change";
    TimepickerEvents["beforeApply"] = "beforeApply";
    TimepickerEvents["afterApply"] = "afterApply";
    TimepickerEvents["beforeClose"] = "beforeClose";
    TimepickerEvents["afterClose"] = "afterClose";
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    TimepickerEvents["apply"] = "apply";
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    TimepickerEvents["close"] = "close";
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    TimepickerEvents["save"] = "save";
})(TimepickerEvents || (exports.TimepickerEvents = TimepickerEvents = {}));


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarEvents = void 0;
var CalendarEvents;
(function (CalendarEvents) {
    CalendarEvents["change"] = "change";
    CalendarEvents["beforeChange"] = "beforechange";
    CalendarEvents["modeChange"] = "modeChange";
    CalendarEvents["monthSelected"] = "monthSelected";
    CalendarEvents["yearSelected"] = "yearSelected";
    CalendarEvents["cancelClick"] = "cancelClick";
    CalendarEvents["dateMouseOver"] = "dateMouseOver";
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    CalendarEvents["dateHover"] = "dateHover";
})(CalendarEvents || (exports.CalendarEvents = CalendarEvents = {}));


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(44), exports);
__exportStar(__webpack_require__(109), exports);
__exportStar(__webpack_require__(49), exports);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Combobox = exports.$template = void 0;
var core_1 = __webpack_require__(0);
var dom_1 = __webpack_require__(1);
var events_1 = __webpack_require__(4);
var html_1 = __webpack_require__(2);
var keycodes_1 = __webpack_require__(104);
var view_1 = __webpack_require__(6);
var ts_data_1 = __webpack_require__(5);
var ts_layout_1 = __webpack_require__(24);
var ts_list_1 = __webpack_require__(45);
var ts_popup_1 = __webpack_require__(27);
var keyListener_1 = __webpack_require__(108);
var en_1 = __webpack_require__(29);
var types_1 = __webpack_require__(16);
var helper_1 = __webpack_require__(48);
var types_2 = __webpack_require__(49);
function itemsCountTemplate(count, templateFN) {
    if (typeof templateFN === "function") {
        return templateFN(count);
    }
    else {
        return count + " " + en_1.default.selectedItems;
    }
}
var $template = function (item) {
    if (item.icon) {
        return (0, dom_1.el)("div.dhx_combobox-options-wrapper", [
            (0, dom_1.el)("span", { class: "".concat(item.icon, " dhx_combobox-options__icon") }),
            (0, dom_1.el)("span", { class: "dhx_combobox-options__value" }, item.value),
        ]);
    }
    if (item.src) {
        return (0, dom_1.el)("div.dhx_combobox-options-wrapper", [
            (0, dom_1.el)("img", { class: "dhx_combobox-options__image", alt: item.value, src: item.src }),
            (0, dom_1.el)("span", { class: "dhx_combobox-options__value" }, item.value),
        ]);
    }
    return (0, dom_1.el)("span", { class: "dhx_combobox-options__value" }, item.value);
};
exports.$template = $template;
var Combobox = /** @class */ (function (_super) {
    __extends(Combobox, _super);
    function Combobox(element, config) {
        var _this = _super.call(this, element, (0, core_1.extend)({
            listHeight: 224,
            disabled: false,
            readOnly: false,
            newOptions: false,
            htmlEnable: true,
        }, config)) || this;
        _this.config.itemsCount = _this.config.itemsCount || _this.config.showItemsCount; // TODO: remove suite_7.0
        _this.config.helpMessage = _this.config.helpMessage || _this.config.help; // TODO: remove suite_7.0
        if (_this.config.cellHeight && _this.config.itemHeight === 36) {
            _this.config.itemHeight = _this.config.cellHeight; // TODO: remove suite_7.0
        }
        if (_this.config.labelInline) {
            _this.config.labelPosition = "left"; // TODO: remove suite_7.0
        }
        if (Array.isArray(_this.config.data)) {
            _this.events = new events_1.EventSystem(_this);
            _this.data = new ts_data_1.DataCollection({});
            _this.data.parse(_this.config.data);
        }
        else if (_this.config.data) {
            _this.data = _this.config.data;
            _this.events = new events_1.EventSystem(_this);
            _this.events.context = _this;
        }
        else {
            _this.events = new events_1.EventSystem(_this);
            _this.data = new ts_data_1.DataCollection({});
        }
        _this.popup = new ts_popup_1.Popup();
        _this.popup.events.on(ts_popup_1.PopupEvents.afterShow, function () {
            _this.paint();
        });
        _this.popup.events.on(ts_popup_1.PopupEvents.afterHide, function () {
            if (_this.config.multiselection) {
                _this._state.value = "";
            }
            _this.paint();
        });
        _this.popup.events.on(ts_popup_1.PopupEvents.beforeHide, function (fromOuterClick) {
            fromOuterClick && _this._hideOptions();
        });
        if (_this.config.readonly || _this.config.readOnly) {
            _this.config.readOnly = _this.config.readOnly || _this.config.readonly;
            _this._keyListener = new keyListener_1.KeyListener();
        }
        _this._state = {
            value: "",
            ignoreNext: false,
            canDelete: false,
            unselectActive: false,
            currentState: types_2.ComboState.default,
            creatingState: false,
        };
        _this._initHandlers();
        _this._createLayout();
        if (_this.config.value && _this.data.getLength()) {
            _this._setValue(_this.config.value, true);
            _this.config.value = "";
        }
        _this._initEvents();
        var vnode = (0, dom_1.create)({
            render: function () { return _this._draw(); },
            hooks: {
                didRedraw: function () {
                    if (_this.popup.isVisible()) {
                        _this.focus();
                        _this._configurePopup();
                    }
                },
            },
        });
        // const container = toNode(element);
        _this.mount(element, vnode);
        return _this;
    }
    Combobox.prototype.focus = function () {
        if (this.config.disabled)
            return false;
        var rootView = this.getRootView();
        rootView.refs.input.el.focus();
    };
    Combobox.prototype.blur = function () {
        if (this.config.disabled)
            return false;
        var rootView = this.getRootView();
        rootView.refs.input.el.blur();
        this.popup.hide();
    };
    Combobox.prototype.enable = function () {
        this.config.disabled = false;
        this.paint();
    };
    Combobox.prototype.disable = function () {
        this.config.disabled = true;
        this.paint();
    };
    Combobox.prototype.isDisabled = function () {
        return this.config.disabled;
    };
    Combobox.prototype.clear = function () {
        this.list.selection.remove();
        this._state.value = "";
        this._filter();
        this.paint();
    };
    Combobox.prototype.getValue = function (asArray) {
        var ids = this.list.selection.getId();
        if (asArray) {
            return (0, core_1.wrapBox)(ids);
        }
        return Array.isArray(ids) ? ids.join(",") : ids;
    };
    Combobox.prototype.setValue = function (ids, silent) {
        return this._setValue(ids, silent);
    };
    Combobox.prototype.addOption = function (value, join) {
        if (join === void 0) { join = true; }
        if (!value)
            return;
        var id;
        if (typeof value === "string") {
            id = this.data.add({ value: value });
        }
        else if (typeof value === "object") {
            id = this.data.add(value);
        }
        var options = this.config.multiselection && join ? __spreadArray(__spreadArray([], this.list.selection.getId(), true), [id], false) : id;
        this.setValue(options);
    };
    Combobox.prototype.destructor = function () {
        this.popup && this.popup.destructor();
        this.events && this.events.clear();
        this.list && this.list.destructor();
        this._helper && this._helper.destructor();
        this._layout && this._layout.destructor();
        this._keyListener && this._keyListener.destructor();
        this.config = this.events = this.list = this.popup = null;
        this._helper = this._keyListener = this._handlers = this._state = this._uid = this._isPopupConfiqureted = null;
        this.unmount();
    };
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    Combobox.prototype.setState = function (state) {
        switch (state) {
            case "success":
                this._state.currentState = types_2.ComboState.success;
                break;
            case "error":
                this._state.currentState = types_2.ComboState.error;
                break;
            default:
                this._state.currentState = types_2.ComboState.default;
                break;
        }
        this.paint();
    };
    Combobox.prototype._setValue = function (ids, silent) {
        var _this = this;
        if (silent === void 0) { silent = false; }
        if (!this._exsistId(ids)) {
            return false;
        }
        this._filter();
        this.list.selection.remove(null, silent);
        if (this.config.multiselection) {
            if (typeof ids === "string") {
                ids = ids.split(",");
            }
            if (typeof ids === "number") {
                ids = [ids];
            }
            ids.forEach(function (id) {
                _this.list.selection.add(id, false, false, silent);
            });
        }
        else {
            var id = (0, core_1.unwrapBox)(ids);
            this.list.selection.add(id, false, false, silent);
            var item = this.data.getItem(id);
            if (item) {
                this._state.value = this._getItemText(item);
            }
        }
        this.paint();
    };
    Combobox.prototype._createLayout = function () {
        var list = (this.list = new ts_list_1.List(null, {
            $template: exports.$template,
            template: this.config.template,
            htmlEnable: this.config.htmlEnable,
            virtual: this.config.virtual,
            keyNavigation: true,
            multiselection: this.config.multiselection,
            itemHeight: this.config.itemHeight,
            height: this.config.listHeight,
            data: this.data,
            eventHandlers: this.config.eventHandlers,
        }));
        var layout = (this._layout = new ts_layout_1.Layout(this.popup.getContainer(), {
            css: "dhx_combobox-options dhx_combobox__options",
            rows: [
                {
                    id: "select-unselect-all",
                    hidden: !this.config.multiselection || !this.config.selectAllButton,
                },
                { id: "list", height: "content" },
                {
                    id: "not-found",
                    hidden: true,
                },
            ],
            on: {
                click: {
                    ".dhx_combobox__action-select-all": this._handlers.selectAll,
                    ".dhx_combobox-options__action-create-option": this._handlers.addOption,
                },
            },
        }));
        layout.getCell("list").attach(list);
        if (this.config.multiselection && this.config.selectAllButton) {
            layout.getCell("select-unselect-all").attach(helper_1.selectAllView);
        }
    };
    Combobox.prototype._initHandlers = function () {
        var _this = this;
        if (this.config.helpMessage) {
            this._helper = new ts_popup_1.Popup({
                css: "dhx_tooltip dhx_tooltip--forced dhx_tooltip--light",
            });
            this._helper.attachHTML(this.config.helpMessage);
        }
        this._handlers = {
            addOption: function () { return _this.addOption(_this._state.value); },
            showHelper: function (e) {
                e.preventDefault();
                e.stopPropagation();
                _this._helper.show(e.target, {
                    mode: _this.config.labelPosition === "left" ? "bottom" : "right",
                    theme: e.target,
                });
            },
            selectAll: function () {
                if (_this._state.unselectActive) {
                    _this.list.selection.remove();
                    if (_this.config.selectAllButton) {
                        _this._layout.getCell("select-unselect-all").attach(helper_1.selectAllView);
                        _this._state.unselectActive = false;
                    }
                }
                else {
                    _this.data.filter();
                    _this.list.selection.add();
                    if (_this.config.selectAllButton) {
                        _this._layout.getCell("select-unselect-all").attach(helper_1.unselectAllView);
                        _this._state.unselectActive = true;
                    }
                }
                _this._changePopupPosition();
                _this.paint();
            },
            onkeydown: function (e) {
                if (e.key === "Tab" && _this.popup.isVisible()) {
                    _this._hideOptions();
                }
                else {
                    if (!_this.popup.isVisible() && e.which === keycodes_1.KEY_CODES.DOWN_ARROW) {
                        _this._showOptions();
                    }
                    if (_this.popup.isVisible()) {
                        if (e.which === keycodes_1.KEY_CODES.RIGHT_ARROW) {
                            if (_this.config.readOnly && !_this.config.multiselection) {
                                _this.list.moveFocus(ts_list_1.MOVE_DOWN);
                                e.preventDefault();
                            }
                        }
                        if (e.which === keycodes_1.KEY_CODES.LEFT_ARROW) {
                            if (_this.config.readOnly && !_this.config.multiselection) {
                                _this.list.moveFocus(ts_list_1.MOVE_UP);
                                e.preventDefault();
                            }
                        }
                        if (e.which === keycodes_1.KEY_CODES.DOWN_ARROW) {
                            _this.list.moveFocus(ts_list_1.MOVE_DOWN);
                            e.preventDefault();
                        }
                        if (e.which === keycodes_1.KEY_CODES.UP_ARROW) {
                            _this.list.moveFocus(ts_list_1.MOVE_UP);
                            e.preventDefault();
                        }
                        if (e.which === keycodes_1.KEY_CODES.ESC) {
                            _this._hideOptions();
                        }
                        if (e.which === keycodes_1.KEY_CODES.ENTER) {
                            if (_this.data.getLength()) {
                                var id = _this.list.getFocus();
                                var value = _this.config.multiselection
                                    ? __spreadArray(__spreadArray([], _this.list.selection.getId(), true), [id], false) : id;
                                _this.setValue(value);
                            }
                            else if (_this.config.newOptions) {
                                _this.addOption(_this._state.value, true);
                            }
                            if (_this.config.multiselection) {
                                _this._updatePopup();
                            }
                            else if (_this.data.getLength()) {
                                _this._hideOptions();
                            }
                        }
                    }
                }
                _this.events.fire(types_2.ComboboxEvents.keydown, [e, _this.list.getFocus()]);
            },
            onkeyup: function (e) {
                if (!_this.config.multiselection || _this.config.itemsCount) {
                    return;
                }
                if (_this._state.ignoreNext) {
                    _this._state.ignoreNext = false;
                    return;
                }
                if (e.which === keycodes_1.KEY_CODES.BACKSPACE &&
                    !_this._state.value &&
                    _this.config.multiselection &&
                    _this.list.selection.getId().length) {
                    var selected = _this.list.selection.getId();
                    var id = selected[selected.length - 1];
                    _this.list.selection.remove(id);
                    _this._changePopupPosition();
                    _this.paint();
                }
            },
            oninput: function (e) {
                if (_this.config.disabled) {
                    return;
                }
                var input = e.target;
                var value = input.value;
                _this.events.fire(types_2.ComboboxEvents.input, [value]);
                _this._state.value = value;
                if (!value.length) {
                    _this._state.ignoreNext = true;
                    _this._state.canDelete = true;
                }
                else {
                    _this._state.canDelete = false;
                }
                if (!_this.config.multiselection) {
                    _this.list.selection.remove();
                }
                _this._filter(true);
                if (!_this.popup.isVisible()) {
                    _this._showOptions();
                }
                _this._updatePopup();
            },
            oninputclick: function (e) {
                var _a;
                if (_this.config.disabled) {
                    return;
                }
                _this.focus();
                if (e.target.classList.contains("dhx_combobox__action-remove")) {
                    var id = (_a = _this.data.getItem((0, html_1.locate)(e))) === null || _a === void 0 ? void 0 : _a.id;
                    if (!(0, core_1.isId)(id)) {
                        return;
                    }
                    _this.list.selection.remove(id);
                    _this._changePopupPosition();
                    _this.paint();
                    return;
                }
                if (e.target.classList.contains("dhx_combobox__action-clear-all")) {
                    _this.list.selection.getId().forEach(function (id) { return _this.list.selection.remove(id); });
                    if (_this.config.selectAllButton && _this._state.unselectActive) {
                        _this._layout.getCell("select-unselect-all").attach(helper_1.selectAllView);
                        _this._state.unselectActive = false;
                    }
                    _this.paint();
                    return;
                }
                e.preventDefault();
                if (!_this.popup.isVisible()) {
                    _this._showOptions();
                    return;
                }
                _this.focus();
            },
            toggleIcon: function () {
                _this.focus();
                if (_this.popup.isVisible()) {
                    _this._hideOptions();
                }
                else {
                    _this._showOptions();
                }
            },
            onfocus: function () { var _a; return (_a = _this.events) === null || _a === void 0 ? void 0 : _a.fire(types_2.ComboboxEvents.focus, []); },
            onblur: function () { var _a; return (_a = _this.events) === null || _a === void 0 ? void 0 : _a.fire(types_2.ComboboxEvents.blur, []); },
        };
    };
    Combobox.prototype._initEvents = function () {
        var _this = this;
        this.data.events.on(ts_data_1.DataEvents.load, function () {
            if (_this.config.value) {
                _this._setValue(_this.config.value, true);
                _this.config.value = "";
            }
            if (_this.popup.isVisible()) {
                _this._filter();
            }
        });
        this.data.events.on(ts_data_1.DataEvents.removeAll, function () {
            _this._state.value = "";
            _this.paint();
        });
        this.data.events.on(ts_data_1.DataEvents.afterAdd, function () {
            if (!_this.config.multiselection) {
                _this._hideOptions();
            }
            else {
                _this._changePopupPosition();
            }
        });
        this.list.events.on(ts_list_1.ListEvents.click, function () {
            if (!_this.config.multiselection) {
                _this._hideOptions();
            }
            _this._changePopupPosition();
        });
        this.list.selection.events.on(types_1.SelectionEvents.beforeSelect, function (id) {
            var value = _this.config.multiselection
                ? __spreadArray(__spreadArray([], _this.getValue(_this.config.multiselection), true), [id], false) : id;
            return _this.events.fire(types_2.ComboboxEvents.beforeChange, [value]);
        });
        this.list.selection.events.on(types_1.SelectionEvents.afterSelect, function () {
            var value = _this.getValue(_this.config.multiselection);
            _this.events.fire(types_2.ComboboxEvents.change, [value]);
            _this._updateSelectedItem(value);
        });
        this.list.selection.events.on(types_1.SelectionEvents.beforeUnSelect, function (id) {
            var value = _this.config.multiselection
                ? _this.getValue(_this.config.multiselection).filter(function (i) { return i != id; })
                : id;
            return _this.events.fire(types_2.ComboboxEvents.beforeChange, [value]);
        });
        this.list.selection.events.on(types_1.SelectionEvents.afterUnSelect, function () {
            var multi = _this.config.multiselection;
            var value = _this.getValue(multi);
            _this.events.fire(types_2.ComboboxEvents.change, [value]);
            if (multi)
                _this._updateSelectedItem(value);
        });
        this.popup.events.on(ts_popup_1.PopupEvents.beforeShow, function () {
            if (!_this.popup.isVisible() && !_this._isPopupConfiqureted) {
                _this._configurePopup();
                return false;
            }
        });
        this.popup.events.on(ts_popup_1.PopupEvents.afterShow, function () {
            var _a;
            if ((_a = _this.list.scrollView) === null || _a === void 0 ? void 0 : _a.config.enable) {
                _this.list.scrollView.update();
            }
            if (_this.config.readOnly) {
                if (_this._state.value) {
                    var id = _this.list.selection.getId();
                    _this.list.setFocus(id);
                }
                else {
                    _this.list.resetFocus();
                }
                _this._keyListener.startNewListen(function (val) { return _this._findBest(val); });
            }
            _this.list.scrollTo(_this.list.getFocus());
        });
    };
    Combobox.prototype._showOptions = function () {
        if (!this.events.fire(types_2.ComboboxEvents.beforeOpen)) {
            return;
        }
        if (this._state.value.length) {
            this._state.canDelete = true;
        }
        this._filter();
        if (this._configurePopup()) {
            this.events.fire(types_2.ComboboxEvents.open);
            this.events.fire(types_2.ComboboxEvents.afterOpen);
        }
    };
    Combobox.prototype._configurePopup = function () {
        this._isPopupConfiqureted = true;
        var rootView = this.getRootView();
        if (!rootView || !rootView.refs || !rootView.refs.holder) {
            return false;
        }
        if (!this.popup.isVisible()) {
            this._updatePopup();
        }
        return true;
    };
    Combobox.prototype._hideOptions = function () {
        var _this = this;
        if (!this.events.fire(types_2.ComboboxEvents.beforeClose)) {
            return;
        }
        if (this.config.readOnly) {
            this._keyListener.endListen();
        }
        if (!this.config.multiselection && !this.config.readOnly && !this.list.selection.contains()) {
            this._state.value = "";
        }
        (0, dom_1.awaitRedraw)().then(function () { return _this.popup.isVisible() && _this.popup.hide(); });
        this.events.fire(types_2.ComboboxEvents.afterClose);
        this.events.fire(types_2.ComboboxEvents.close); // TODO: remove suite_7.0
        this.data.resetFilter();
        this._filter();
        this.paint();
    };
    Combobox.prototype._filter = function (baseFilter) {
        var _this = this;
        if (baseFilter === void 0) { baseFilter = false; }
        if (this.config.readOnly) {
            return;
        }
        if (this.config.filter) {
            this.data.filter(function (item) { return _this.config.filter(item, _this._state.value); });
        }
        else if (baseFilter) {
            this.data.filter(function (item) { return (0, core_1.isExistValue)(_this._getItemText(item) || "", _this._state.value); });
        }
        var selectedItemId = this.list.selection.getId();
        if (!selectedItemId || this.config.multiselection) {
            this.list.resetFocus();
        }
        else {
            this.list.setFocus(selectedItemId);
        }
        var listCell = this._layout.getCell("list");
        var notFoundCell = this._layout.getCell("not-found");
        if (this.data.getLength() === 0) {
            if (this.config.multiselection && this.config.selectAllButton) {
                this._layout.getCell("select-unselect-all").hide();
            }
            listCell.hide();
            this._state.creatingState = true;
            var notFoundContent = this.config.newOptions ? this._state.value : "";
            notFoundCell.height = (0, helper_1.emptyListHeight)(notFoundContent, this.getRootView().refs.holder.el.offsetWidth);
            notFoundCell.attach(helper_1.emptyListView, notFoundContent);
            notFoundCell.show();
        }
        else {
            if (this.config.multiselection && this.config.selectAllButton) {
                this._layout.getCell("select-unselect-all").show();
            }
            var sameItem = this._state.value && this.data.find(function (item) { return item.value === _this._state.value; });
            if (!sameItem && this._state.value) {
                this._state.creatingState = this.config.newOptions;
                listCell.show();
                if (this.config.newOptions) {
                    var notFoundContent = this._state.value;
                    notFoundCell.height = (0, helper_1.emptyListHeight)(notFoundContent, this.getRootView().refs.holder.el.offsetWidth);
                    notFoundCell.attach(helper_1.emptyListView, notFoundContent);
                    notFoundCell.show();
                }
                else
                    notFoundCell.hide();
            }
            else {
                this._state.creatingState = false;
                if (notFoundCell.isVisible()) {
                    listCell.show();
                    notFoundCell.hide();
                }
            }
        }
    };
    Combobox.prototype._findBest = function (value) {
        var _this = this;
        var best = this.data.find(function (item) { return (0, core_1.isExistValue)(_this._getItemText(item) || "", value); });
        if (!best) {
            return;
        }
        if (this.list.selection.getId() === best.id) {
            return;
        }
        this.list.setFocus(best.id);
        this.paint();
    };
    Combobox.prototype._exsistId = function (id) {
        var _this = this;
        if (id instanceof Array) {
            return id.every(function (i) { return _this.data.exists(i); });
        }
        return this.data.exists(id);
    };
    Combobox.prototype._draw = function () {
        var _a;
        if (!this.config) {
            return (0, dom_1.el)("div");
        }
        var _b = this.config, multiselection = _b.multiselection, labelPosition = _b.labelPosition, hiddenLabel = _b.hiddenLabel, required = _b.required, disabled = _b.disabled, css = _b.css, helpMessage = _b.helpMessage, readOnly = _b.readOnly, placeholder = _b.placeholder;
        var item = multiselection ? null : this.data.getItem(this.list.selection.getId());
        var showPlaceholder = !this.list.selection.getId() ||
            (typeof this.list.selection.getId() === "object" &&
                this.list.selection.getId().length === 0);
        var labelStyle = (0, html_1.getLabelStyle)(this.config);
        var canTemplate = !this.config.multiselection && (this.config.readOnly || !this.popup.isVisible());
        var isInputTemplate = canTemplate && this.config.htmlEnable && this.config.template;
        var isInputImageOrIcon = canTemplate && ((item === null || item === void 0 ? void 0 : item.icon) || (item === null || item === void 0 ? void 0 : item.src)) && !this.config.template;
        return (0, dom_1.el)("div", {
            "data-dhx-widget-id": this._uid,
            onkeydown: this._handlers.onkeydown,
            onkeyup: this._handlers.onkeyup,
            class: "dhx_widget dhx_combobox" +
                (labelPosition === "left" ? " dhx_combobox--label-inline" : "") +
                (hiddenLabel ? " dhx_combobox--sr_only" : "") +
                (required ? " dhx_combobox--required" : "") +
                (disabled ? " dhx_combobox--disabled" : "") +
                (css ? " ".concat(css) : ""),
        }, [
            labelStyle
                ? (0, dom_1.el)("label.dhx_label.dhx_combobox__label", {
                    style: labelStyle.style,
                    class: helpMessage ? "dhx_label--with-help" : "",
                    onclick: this._handlers.oninputclick,
                }, helpMessage
                    ? [
                        (labelStyle.label || required) &&
                            (0, dom_1.el)("span.dhx_label__holder", labelStyle.label),
                        (0, dom_1.el)("span.dhx_label-help.dxi.dxi-help-circle-outline", {
                            tabindex: "0",
                            role: "button",
                            onclick: this._handlers.showHelper,
                            id: "dhx_label__help_".concat(this._uid),
                        }),
                    ]
                    : labelStyle.label)
                : null,
            (0, dom_1.el)("div.dhx_combobox-input-box" +
                // (this.popup.isVisible() ? ".dhx_combobox-input-box" : "") +
                (disabled ? ".dhx_combobox-input-box--disabled" : "") +
                (readOnly ? ".dhx_combobox-input-box--readonly" : "") +
                (this._state.currentState === types_2.ComboState.error
                    ? ".dhx_combobox-input-box--state_error"
                    : "") +
                (this._state.currentState === types_2.ComboState.success
                    ? ".dhx_combobox-input-box--state_success"
                    : ""), {
                _ref: "holder",
            }, [
                (0, dom_1.el)("div.dhx_combobox-input__icon", {
                    onclick: this._handlers.toggleIcon,
                }, [
                    (0, dom_1.el)("span" +
                        (this.popup.isVisible() ? ".dxi.dxi-menu-up" : ".dxi.dxi-menu-down")),
                ]),
                (0, dom_1.el)("div.dhx_combobox-input-list-wrapper", {
                    onclick: this._handlers.oninputclick,
                }, [
                    (0, dom_1.el)("ul.dhx_combobox-input-list", __spreadArray(__spreadArray([], this._drawSelectedItems(), true), [
                        (0, dom_1.el)("li.dhx_combobox-input-list__item.dhx_combobox-input-list__item--input", [
                            (isInputTemplate || isInputImageOrIcon) && item
                                ? (0, dom_1.el)("div.dhx_combobox-input__template", {
                                    ".innerHTML": isInputTemplate
                                        ? this.config.template(item)
                                        : null,
                                }, isInputImageOrIcon ? [(0, exports.$template)(item)] : null)
                                : null,
                            (0, dom_1.el)("input.dhx_combobox-input", {
                                oninput: this._handlers.oninput,
                                onfocus: this._handlers.onfocus,
                                onblur: this._handlers.onblur,
                                _ref: "input",
                                _key: this._uid,
                                type: "text",
                                placeHolder: showPlaceholder && placeholder ? placeholder : undefined,
                                value: readOnly && item
                                    ? this._getItemText(item)
                                    : this._state.value,
                                readOnly: readOnly || disabled,
                                required: required,
                                role: "combobox",
                                "aria-label": readOnly
                                    ? "Select value"
                                    : "Type or select value",
                                "aria-describedby": helpMessage
                                    ? "dhx_label__help_".concat(this._uid)
                                    : null,
                                "aria-expanded": this.popup.isVisible().toString(),
                                "aria-controls": (_a = this.list.getRootView().node) === null || _a === void 0 ? void 0 : _a.attrs.id,
                            }),
                        ]),
                    ], false)),
                ]),
            ]),
        ]);
    };
    Combobox.prototype._drawSelectedItems = function () {
        var _this = this;
        if (!this.config.multiselection) {
            return [];
        }
        if (this.config.itemsCount) {
            var count = this.list.selection.getId().length;
            return count
                ? [
                    (0, dom_1.el)("li.dhx_combobox-input-list__item.dhx_combobox-tag", [
                        (0, dom_1.el)("span.dhx_combobox-tag__value", itemsCountTemplate(count, this.config.itemsCount)),
                        (0, dom_1.el)("button.dhx_button.dhx_combobox-tag__action.dhx_combobox__action-clear-all", { "aria-label": "clear all" }, [(0, dom_1.el)("span.dhx_button__icon.dxi.dxi-close-circle")]),
                    ]),
                ]
                : [];
        }
        return this.list.selection.getId().map(function (id) {
            var item = _this.data.getItem(id);
            if (!item) {
                return null;
            }
            var imageOrIcon = _this._drawImageOrIcon(item);
            return (0, dom_1.el)("li.dhx_combobox-input-list__item.dhx_combobox-tag", { "data-dhx-id": id }, __spreadArray(__spreadArray([], (imageOrIcon || !_this.config.template
                ? [imageOrIcon, (0, dom_1.el)("span.dhx_combobox-tag__value", _this._getItemText(item))]
                : [
                    (0, dom_1.el)("span.dhx_combobox-tag__template", {
                        ".innerHTML": _this.config.template(item),
                    }),
                ]), true), [
                (0, dom_1.el)("button.dhx_button.dhx_button--icon.dhx_combobox-tag__action.dhx_combobox__action-remove", {
                    type: "button",
                    "aria-label": "remove",
                }, [(0, dom_1.el)("span.dhx_button__icon.dxi.dxi-close-circle")]),
            ], false));
        });
    };
    Combobox.prototype._drawImageOrIcon = function (item) {
        if (item.src) {
            return (0, dom_1.el)("img.dhx_combobox-tag__image", { src: item.src, alt: "" });
        }
        else if (item.icon) {
            return (0, dom_1.el)("span.dhx_combobox-tag__icon", { class: item.icon });
        }
        return null;
    };
    Combobox.prototype._getItemText = function (item) {
        if (!item) {
            return null;
        }
        return item.value;
    };
    Combobox.prototype._updateSelectedItem = function (id) {
        var _a;
        if (this.config.multiselection) {
            if (this.config.selectAllButton &&
                !this._state.unselectActive &&
                this.data.getLength() === id.length) {
                this._layout.getCell("select-unselect-all").attach(helper_1.unselectAllView);
                this._state.unselectActive = true;
            }
            else if (this.config.selectAllButton && this._state.unselectActive) {
                this._layout.getCell("select-unselect-all").attach(helper_1.selectAllView);
                this._state.unselectActive = false;
            }
            if (this._state.value) {
                this._state.value = "";
                this._state.canDelete = id.length === 0;
                this.data.resetFilter();
                this._filter();
            }
        }
        else {
            this._state.value = (_a = this._getItemText(this.data.getItem(id))) !== null && _a !== void 0 ? _a : "";
        }
        this.paint();
    };
    Combobox.prototype._changePopupPosition = function () {
        var _this = this;
        if (this.config.multiselection) {
            (0, dom_1.awaitRedraw)().then(function () {
                _this._updatePopup();
            });
        }
    };
    Combobox.prototype._updatePopup = function () {
        var holderNode = this.getRootView().refs.holder.el;
        this.popup.getContainer().style.width = holderNode.offsetWidth + "px";
        this.popup.show(holderNode, {
            mode: "bottom",
            theme: this.getRootNode(),
        });
    };
    return Combobox;
}(view_1.View));
exports.Combobox = Combobox;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(46), exports);
__exportStar(__webpack_require__(107), exports);
__exportStar(__webpack_require__(47), exports);
__exportStar(__webpack_require__(28), exports);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = exports.MOVE_DOWN = exports.MOVE_UP = void 0;
var core_1 = __webpack_require__(0);
var ts_data_1 = __webpack_require__(5);
var dom_1 = __webpack_require__(1);
var KeyManager_1 = __webpack_require__(21);
var types_1 = __webpack_require__(16);
var view_1 = __webpack_require__(6);
var Selection_1 = __webpack_require__(47);
var html_1 = __webpack_require__(2);
var types_2 = __webpack_require__(28);
var editors_1 = __webpack_require__(105);
exports.MOVE_UP = 1;
exports.MOVE_DOWN = 2;
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List(node, config) {
        if (config === void 0) { config = {}; }
        var _this = this;
        var itemHeight = config.itemHeight || (config.virtual ? 37 : null);
        if (itemHeight && typeof itemHeight === "number") {
            itemHeight = itemHeight.toString() + "px";
        }
        _this = _super.call(this, node, (0, core_1.extend)({
            itemHeight: itemHeight,
            keyNavigation: true,
            editable: false,
            selection: true,
            htmlEnable: true,
        }, config)) || this;
        _this._destructed = false;
        _this._touch = {
            duration: 350,
            dblDuration: 300,
            timer: null,
            start: false,
            timeStamp: null,
        };
        // init data colleciton and link events between widget and data
        var data = _this.config.data;
        if (!(data instanceof ts_data_1.DataCollection)) {
            _this.data = new ts_data_1.DataCollection({});
            _this.events = _this.data.events;
            if (data)
                _this.data.parse(data);
        }
        else {
            // [TODO] deprecate in favor of raw data input
            _this.data = data;
            _this.events = data.events;
        }
        _this.selection = new Selection_1.Selection({
            disabled: !_this.config.selection,
            multiselection: _this.config.multiselection,
        }, _this.data, _this.events);
        if (_this.config.keyNavigation) {
            _this.keyManager = new KeyManager_1.KeyManager(function (e, focusId) {
                return focusId == _this._uid && (!_this._edited || (_this._edited && e.key !== "escape"));
            });
            _this._initHotKey();
        }
        _this.events.on(ts_data_1.DataEvents.change, function (_, status, item) {
            if (status === "setPage") {
                _this.scrollTo(_this.data.getId(item[0]));
            }
            _this.paint();
        });
        _this.events.on(ts_data_1.DataEvents.filter, function () {
            _this.paint();
        });
        _this.events.on(types_1.SelectionEvents.afterUnSelect, function () { return _this.paint(); });
        _this.events.on(types_1.SelectionEvents.afterSelect, function (id) {
            if ((0, core_1.isId)(id) && _this.config.selection)
                _this.setFocus(id);
            _this.paint();
        });
        _this.events.on(types_2.ListEvents.afterEditEnd, _this.editEnd.bind(_this));
        var drop = function (value) { return function (info) {
            _this.data.setMeta(_this.data.getItem(info.target), "drop", value);
            _this.paint();
        }; };
        _this.events.on(ts_data_1.DragEvents.canDrop, drop(true));
        _this.events.on(ts_data_1.DragEvents.cancelDrop, drop(false));
        var drag = function (value) { return function (info) {
            info.source.map(function (id) { return _this.data.setMeta(_this.data.getItem(id), "drag", value); });
            _this.paint();
        }; };
        _this.events.on(ts_data_1.DragEvents.dragStart, drag(true));
        _this.events.on(ts_data_1.DragEvents.afterDrag, drag(false));
        _this._handlers = {
            onmousedown: function (e) {
                _this._dragStart(e);
            },
            ontouchstart: function (e) {
                _this._touch.timer = setTimeout(function () {
                    _this._dragStart(e);
                }, _this._touch.duration);
                if (!_this._touch.timeStamp) {
                    _this._touch.timeStamp = +e.timeStamp.toFixed();
                }
                else {
                    var dblTap = _this._touch.dblDuration >= _this._touch.timeStamp - +e.timeStamp.toFixed();
                    if (dblTap) {
                        e.preventDefault();
                        _this._dblClick(e);
                    }
                    _this._touch.timeStamp = null;
                }
                setTimeout(function () {
                    _this._touch.timeStamp = null;
                }, _this._touch.dblDuration);
            },
            ontouchmove: function (e) {
                _this._touch.start && e.preventDefault();
                _this._clearTouchTimer();
            },
            ontouchend: function () {
                _this._touch.start = false;
                _this._clearTouchTimer();
            },
            ondragstart: function () { return (_this.config.dragMode && !_this._edited ? false : null); },
            oncontextmenu: function (e) {
                var _a;
                var id = (_a = _this.data.getItem((0, html_1.locate)(e))) === null || _a === void 0 ? void 0 : _a.id;
                if (!(0, core_1.isId)(id)) {
                    return;
                }
                _this.events.fire(types_2.ListEvents.itemRightClick, [id, e]);
            },
            onclick: function (e) {
                var _a;
                var id = (_a = _this.data.getItem((0, html_1.locate)(e))) === null || _a === void 0 ? void 0 : _a.id;
                if (!(0, core_1.isId)(id)) {
                    return;
                }
                _this.selection.add(id, e.ctrlKey || e.metaKey, e.shiftKey);
                if (_this.config.selection) {
                    _this._focus = id;
                }
                _this.events.fire(types_2.ListEvents.click, [id, e]);
                _this.paint();
            },
            ondblclick: function (e) {
                _this._dblClick(e);
            },
            onscroll: function (e) {
                if (_this.config.virtual) {
                    _this._topOffset = e.target.scrollTop;
                    _this._visibleHeight = e.target.offsetHeight;
                    _this.paint();
                }
            },
            onmouseover: function (e) {
                var _a;
                var id = (_a = _this.data.getItem((0, html_1.locate)(e))) === null || _a === void 0 ? void 0 : _a.id;
                if (!(0, core_1.isId)(id)) {
                    return;
                }
                var prevId = (0, html_1.locate)(e.relatedTarget);
                if (id !== prevId)
                    _this.events.fire(types_2.ListEvents.itemMouseOver, [id, e]);
            },
        };
        var evs = _this.config.eventHandlers;
        if (evs) {
            for (var _i = 0, _a = Object.entries(evs); _i < _a.length; _i++) {
                var _b = _a[_i], event_name = _b[0], events = _b[1];
                _this._handlers[event_name] = (0, html_1.eventHandler)(function (e) { return (0, html_1.locate)(e); }, events, _this._handlers[event_name]);
            }
        }
        if (_this.config.dragMode) {
            ts_data_1.dragManager.setItem(_this._uid, _this);
        }
        // defaults for virtual rendering
        _this._topOffset = _this._visibleHeight = 0;
        var view = (0, dom_1.create)({
            render: function () {
                return _this._destructed ? (0, dom_1.el)("div") : _this._renderList();
            },
            hooks: {
                didMount: function (vm) {
                    if (_this.config.virtual)
                        _this._visibleHeight = vm.node.el.offsetHeight;
                },
                didRedraw: function (vm) { return _this._didRedraw(vm); },
            },
        });
        _this.mount(node, view);
        return _this;
    }
    List.prototype._didRedraw = function (vm) {
        // do nothing
    };
    List.prototype._dblClick = function (e) {
        var _a;
        var id = (0, html_1.locate)(e);
        if (!id) {
            return;
        }
        id = (_a = this.data.getItem(id)) === null || _a === void 0 ? void 0 : _a.id;
        if (this.config.editable) {
            this.editItem(id);
        }
        this.events.fire(types_2.ListEvents.doubleClick, [id, e]);
    };
    List.prototype._clearTouchTimer = function () {
        if (this._touch.timer) {
            clearTimeout(this._touch.timer);
            this._touch.timer = null;
        }
    };
    List.prototype._dragStart = function (event) {
        var _this = this;
        this._touch.start = true;
        var itemsForGhost = [];
        var item = (0, html_1.locateNode)(event, "data-dhx-id");
        var itemId = item && item.getAttribute("data-dhx-id");
        var selectionIds = this.selection.getId();
        if (this.config.multiselection && selectionIds instanceof Array) {
            selectionIds.map(function (id) {
                if (id !== itemId && _this.getRootView().refs[id]) {
                    itemsForGhost.push(_this.getRootView().refs[id].el);
                }
            });
            selectionIds = __spreadArray([], selectionIds, true);
        }
        if (typeof selectionIds === "string") {
            selectionIds = [selectionIds];
        }
        return this.config.dragMode && !this._edited
            ? ts_data_1.dragManager.onMouseDown({
                event: event,
                type: "row",
                source: selectionIds || [itemId],
                itemsForGhost: itemsForGhost,
            })
            : null;
    };
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    List.prototype.disableSelection = function () {
        this.selection.disable();
    };
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    List.prototype.enableSelection = function () {
        this.selection.enable();
    };
    List.prototype.editItem = function (id) {
        this._edited = id;
        if (!this.data.getItem(this._edited) || !this.events.fire(types_2.ListEvents.beforeEditStart, [id])) {
            this._edited = null;
            return;
        }
        this.paint();
        this.events.fire(types_2.ListEvents.afterEditStart, [id]);
    };
    // [TODO] maybe better name
    List.prototype.editEnd = function (value, id) {
        if (this._edited) {
            if (value !== null) {
                var item = this.data.getItem(id);
                this.data.update(id, __assign(__assign({}, item), { value: value }));
                this._changed = true;
            }
            this._edited = null;
            this.paint();
        }
    };
    /*
        Focus API allows to mark item as active one, but not selected yet
        Used by keyboard navigation
    */
    List.prototype.getFocusItem = function () {
        return this.data.getItem(this._focus);
    };
    List.prototype.setFocus = function (id) {
        if (this._focus != id && this.data.exists(id)) {
            this._focus = id;
            this.events.fire(types_2.ListEvents.focusChange, [this.data.getIndex(this._focus), this._focus]);
            this.scrollTo(id);
            this.paint();
        }
    };
    List.prototype.resetFocus = function () {
        this._focus = undefined;
        this.events.fire(types_2.ListEvents.focusChange);
        this.scrollTo(this.data.getId(0));
        this.paint();
    };
    List.prototype.getFocus = function () {
        return this._focus;
    };
    List.prototype.destructor = function () {
        this._destructed = true;
        this.events && this.events.clear();
        this.keyManager && this.keyManager.destructor();
        this.selection && this.selection.destructor();
        this.config = this.events = this.selection = this.keyManager = null;
        this._handlers = this._focus = this._edited = this._events = this._topOffset = this._visibleHeight = this._touch = null;
        this.unmount();
    };
    List.prototype.scrollTo = function (id) {
        var rootView = this.getRootView();
        if (!rootView || !rootView.node || !rootView.node.el || typeof id === "undefined") {
            return;
        }
        var listEl = this.getRootNode();
        this._scrollTo(id, listEl);
    };
    List.prototype._scrollTo = function (id, el) {
        if (!el)
            return;
        var index = this.data.getIndex(id);
        if (index === -1)
            return;
        var virtual = this.config.virtual;
        var currentPage = Math.floor(index / el.children.length) || 0;
        var item = el.children[index - el.children.length * currentPage];
        if (!virtual && !item)
            return;
        var height = virtual ? parseInt(this.config.itemHeight) : item.clientHeight;
        var top = virtual ? index * height : item.offsetTop;
        if (top >= el.scrollTop + el.clientHeight - height) {
            el.scrollTo(0, top - el.clientHeight + height);
        }
        else if (top < el.scrollTop) {
            el.scrollTo(0, top);
        }
    };
    List.prototype._renderItem = function (item, index) {
        var addEmpty = function (node) {
            node.class += " dhx_list-item--empty";
        };
        var itemHeight = this.config.itemHeight;
        if (item.$empty) {
            return (0, dom_1.el)("li", {
                class: "dhx_list-item",
                style: {
                    height: itemHeight,
                },
            });
        }
        var html = "";
        if (this.config.template)
            html = this.config.template(item);
        if (item.html)
            html = item.html;
        var focus = item.id == this._focus && this.config.keyNavigation;
        if (item.id == this._edited) {
            var editor = (0, editors_1.getEditor)(item, this);
            return editor.toHTML();
        }
        var mx = this.data.getMetaMap(item);
        var node = __assign(__assign(__assign(__assign({}, this._events), { class: "dhx_list-item" +
                (mx && mx.selected ? " dhx_list-item--selected" : "") +
                (focus ? " dhx_list-item--focus" : "") +
                (mx && mx.drop && !this._edited ? " dhx_list-item--drophere" : "") +
                (mx && mx.drag && !this._edited ? " dhx_list-item--dragtarget" : "") +
                (this.config.dragMode && !this._edited ? " dhx_list-item--drag" : "") +
                (item.css ? " " + item.css : ""), "data-dhx-id": item.id, _ref: item.id.toString(), style: {
                height: itemHeight,
            }, _key: item.id }), this.getItemAriaAttrs(this, item)), { tabindex: focus ? 0 : -1 });
        if (html) {
            if (html === item.html || this.config.htmlEnable) {
                node[".innerHTML"] = html;
                return (0, dom_1.el)("li", node);
            }
            else {
                return (0, dom_1.el)("li", node, html);
            }
        }
        else if (this.config.$template) {
            if (!item.value)
                addEmpty(node);
            return (0, dom_1.el)("li", node, [this.config.$template(item)]);
        }
        else {
            var value = item.text || item.value;
            if (!value)
                addEmpty(node);
            if (this.config.htmlEnable) {
                node[".innerHTML"] = value;
            }
            else
                node.class += " dhx_list-item--text";
            return this.config.htmlEnable ? (0, dom_1.el)("li", node) : (0, dom_1.el)("li", node, value);
        }
    };
    List.prototype._renderList = function () {
        var _this = this;
        var range = this._getRange();
        // mapRange
        var data = this.data.getRawData(range[0], range[1]);
        var kids = data.map(function (obj, index) { return _this._renderItem(obj, index); });
        if (this.config.virtual) {
            kids = __spreadArray(__spreadArray([
                (0, dom_1.el)(".div", { style: { height: range[2] + "px" } })
            ], kids, true), [
                (0, dom_1.el)(".div", { style: { height: range[3] + "px" } }),
            ], false);
        }
        return (0, dom_1.el)("ul.dhx_widget.dhx_list", __assign(__assign({ style: {
                "max-height": this.config.height,
                position: "relative",
            }, tabindex: 0, id: this._uid, class: (this.config.css ? this.config.css : "") +
                (this.config.multiselection && this.selection.getItem() ? " dhx_no-select--pointer" : ""), "data-dhx-widget-id": this._uid, "data-dhx-drop-area": "row" }, this._handlers), this._getListAriaAttrs(this.config, this.data.getLength())), kids);
    };
    List.prototype.moveFocus = function (mode, step) {
        var length = this.data.getLength();
        if (!length) {
            return;
        }
        var id = this._focus;
        var index = id ? this.data.getIndex(id) : -1;
        step = step || 1;
        if (mode === exports.MOVE_DOWN) {
            id = this.data.getId(Math.min(index + step, length - 1));
        }
        else if (mode === exports.MOVE_UP) {
            id = this.data.getId(Math.max(index - step, 0));
        }
        this.setFocus(id);
    };
    List.prototype._getRange = function () {
        if (this.config.virtual) {
            var overscanCount = 5;
            var visibleHeight = this._visibleHeight || parseInt(this.config.height);
            var itemHeight = parseInt(this.config.itemHeight);
            var total = this.data.getRawData(0, -1).length;
            var totalHeight = total * itemHeight;
            var position = this._topOffset;
            // correct value to be in [0, total-visible] range
            position = Math.max(0, Math.min(position, totalHeight - visibleHeight));
            var index = Math.floor(position / itemHeight);
            var count = Math.min(total - index, Math.floor(visibleHeight / itemHeight) + overscanCount);
            this._topOffset = position;
            return [index, count + index, index * itemHeight, totalHeight - itemHeight * (count + index)];
        }
        else {
            return [0, -1, 0, 0];
        }
    };
    List.prototype._getHotkeys = function () {
        var _this = this;
        return {
            arrowDown: function (e) {
                _this.moveFocus(exports.MOVE_DOWN);
                if (_this._changed)
                    _this._changed = false;
                e.preventDefault();
            },
            arrowUp: function (e) {
                _this.moveFocus(exports.MOVE_UP);
                if (_this._changed)
                    _this._changed = false;
                e.preventDefault();
            },
            escape: function () {
                _this.editEnd(null);
                if (_this._changed)
                    _this._changed = false;
            },
            enter: function (e) {
                var _a;
                if (_this._changed) {
                    _this._changed = false;
                    return;
                }
                var selected = _this.selection.getItem();
                var selectedId = selected instanceof Array ? (_a = selected[0]) === null || _a === void 0 ? void 0 : _a.id : selected === null || selected === void 0 ? void 0 : selected.id;
                if (_this.config.editable &&
                    !_this._edited &&
                    ((selected && selectedId === _this._focus) || !selected)) {
                    _this.editItem(_this._focus);
                }
                else
                    _this.selection.add(_this._focus);
                _this.events.fire(types_2.ListEvents.click, [_this._focus, e]);
            },
            "shift+enter": function (e) {
                _this.selection.add(_this._focus, false, true);
                _this.events.fire(types_2.ListEvents.click, [_this._focus, e]);
            },
            "ctrl+enter": function (e) {
                _this.selection.add(_this._focus, true, false);
                _this.events.fire(types_2.ListEvents.click, [_this._focus, e]);
            },
            "ctrl+a": function (e) {
                if (_this.config.multiselection) {
                    e.preventDefault();
                    _this.selection.remove();
                    var ids = _this.data.map(function (i) { return i.id; });
                    ids.forEach(function (id) {
                        if (_this.config.multiselection === "ctrlClick") {
                            _this.selection.add(id, true);
                        }
                        else {
                            _this.selection.add(id);
                        }
                    });
                }
            },
        };
    };
    List.prototype._initHotKey = function () {
        var handlers = this._getHotkeys();
        for (var key in handlers) {
            this.keyManager.addHotKey(key, handlers[key]);
        }
        for (var key in this.config.hotkeys) {
            this.keyManager.addHotKey(key, this.config.hotkeys[key]);
        }
    };
    List.prototype.getItemAriaAttrs = function (context, item) {
        var getAriaGrabbed = function (context, item) {
            return context.config.dragMode && !context._edited
                ? { "aria-grabbed": Boolean(item.$dragtarget && !context._edited).toString() }
                : {};
        };
        var getAriaRoleDescription = function (context) {
            return context.config.editable
                ? {
                    "aria-roledescription": "".concat(context._edited ? "Press Enter to stop editing" : "Double click to edit content"),
                }
                : {};
        };
        return __assign(__assign({ role: "option", "aria-selected": item.id === this._focus ? "true" : "false" }, getAriaGrabbed(context, item)), getAriaRoleDescription(context));
    };
    List.prototype._getListAriaAttrs = function (config, dataLength) {
        return {
            role: "listbox",
            "aria-label": "Listbox ".concat(config.title || "", ", count of options = ").concat(dataLength, ".").concat(config.editable ? " Content is editable." : ""),
            "aria-multiselectable": config.selection && config.multiselection ? "true" : "false",
            "aria-readonly": config.editable ? "false" : "true",
        };
    };
    return List;
}(view_1.View));
exports.List = List;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Selection = void 0;
var types_1 = __webpack_require__(16);
var ts_data_1 = __webpack_require__(5);
var core_1 = __webpack_require__(0);
var Selection = /** @class */ (function () {
    function Selection(config, data, events) {
        var _this = this;
        this.config = config;
        this.events = events;
        this._data = data;
        this._selected = [];
        this._data.events.on(ts_data_1.DataEvents.removeAll, function () {
            _this._selected = [];
        });
        if (typeof this.config.multiselection === "string") {
            var types = ["click", "ctrlClick"];
            if (!types.includes(this.config.multiselection)) {
                this.config.multiselection = false;
            }
        }
        this._data.events.on(ts_data_1.DataEvents.beforeRemove, function (obj) {
            _this._nextSelection = null;
            if (_this._selected.length === 1) {
                var next = _this._data.getIndex(obj.id);
                var count = _this._data.getLength();
                if (count > 1) {
                    var lastIndex = count == next - 1 ? next - 1 : next + 1;
                    _this._nextSelection = _this._data.getId(lastIndex);
                }
            }
        });
        this._data.events.on(ts_data_1.DataEvents.afterRemove, function (obj) {
            var hasIndex = _this._selected.indexOf(obj.id);
            if (hasIndex !== -1) {
                _this._selected.splice(hasIndex, 1);
            }
            if ((0, core_1.isId)(_this._nextSelection)) {
                _this.add(_this._nextSelection);
                _this._nextSelection = null;
            }
        });
    }
    Selection.prototype.enable = function () {
        this.config.disabled = false;
    };
    Selection.prototype.disable = function () {
        this.remove();
        this.config.disabled = true;
    };
    Selection.prototype.getId = function () {
        if (this.config.multiselection) {
            return this._selected;
        }
        return this._selected[0];
    };
    Selection.prototype.getItem = function () {
        var _this = this;
        if (this.config.multiselection) {
            return this._selected.map(function (id) { return _this._data.getItem(id); });
        }
        return this._selected.length ? this._data.getItem(this._selected[0]) : null;
    };
    Selection.prototype.contains = function (id) {
        if ((0, core_1.isId)(id)) {
            return this._selected.includes(id);
        }
        return this._selected.length > 0;
    };
    Selection.prototype.remove = function (id, silent) {
        var _this = this;
        if ((0, core_1.isId)(id)) {
            this._unselectItem(id, silent);
        }
        else {
            this._selected.forEach(function (selectedId) { return _this._unselectItem(selectedId, silent); });
            this._selected = [];
        }
    };
    Selection.prototype.add = function (id, isCtrl, isShift, silent) {
        var _this = this;
        if (this.config.disabled) {
            return;
        }
        if (typeof id === "undefined") {
            var unSelected = this._data.serialize().filter(function (_a) {
                var id = _a.id;
                return !_this._selected.includes(id);
            });
            unSelected.forEach(function (_a) {
                var id = _a.id;
                _this._addMulti(id, silent);
            });
            return;
        }
        var multi = this.config.multiselection;
        if (isShift && this._selected.length && multi) {
            this._addMulti(id, silent);
        }
        else {
            this._addSingle(id, multi && (multi !== "ctrlClick" || isCtrl), silent);
        }
    };
    Selection.prototype.destructor = function () {
        var _this = this;
        this._selected.forEach(function (selectedId) { return _this._unselectItem(selectedId, true); });
    };
    Selection.prototype._addMulti = function (id, silent) {
        var _a;
        var last = this._selected[this._selected.length - 1];
        var i1 = this._data.getIndex(last);
        var i2 = this._data.getIndex(id);
        if (i1 > i2) {
            _a = [i2, i1], i1 = _a[0], i2 = _a[1];
        }
        for (i1; i1 <= i2; i1++) {
            var id_1 = this._data.getId(i1);
            this._selectItem(id_1, silent);
        }
    };
    Selection.prototype._addSingle = function (id, isCtrl, silent) {
        var _this = this;
        if (!isCtrl) {
            this._selected.forEach(function (selectedId) {
                if (selectedId != id)
                    _this._unselectItem(selectedId);
            });
        }
        if (isCtrl && this._selected.includes(id)) {
            this._unselectItem(id, silent);
        }
        else {
            this._selectItem(id, silent);
        }
    };
    Selection.prototype._selectItem = function (id, silent) {
        var item = this._data.getItem(id);
        if (!item || this._data.getMeta(item, "selected"))
            return;
        if (!silent && !this.events.fire(types_1.SelectionEvents.beforeSelect, [id]))
            return;
        this._selected.push(id);
        this._data.setMeta(item, "selected", true);
        if (!silent)
            this.events.fire(types_1.SelectionEvents.afterSelect, [id]);
    };
    Selection.prototype._unselectItem = function (id, silent) {
        if (!silent && !this.events.fire(types_1.SelectionEvents.beforeUnSelect, [id]))
            return;
        this._selected = this._selected.filter(function (selectedId) { return selectedId !== id; });
        this._data.setMeta(this._data.getItem(id), "selected", false);
        if (!silent)
            this.events.fire(types_1.SelectionEvents.afterUnSelect, [id]);
    };
    return Selection;
}());
exports.Selection = Selection;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.emptyListHeight = exports.emptyListView = exports.unselectAllView = exports.selectAllView = void 0;
var dom_1 = __webpack_require__(1);
var en_1 = __webpack_require__(29);
function selectAllView() {
    return (0, dom_1.el)(".dhx_list-item.dhx_combobox-options__item.dhx_combobox-options__item--select-all.dhx_combobox__action-select-all", en_1.default.selectAll);
}
exports.selectAllView = selectAllView;
function unselectAllView() {
    return (0, dom_1.el)(".dhx_list-item.dhx_combobox-options__item.dhx_combobox-options__item--select-all.dhx_combobox__action-select-all", en_1.default.unselectAll);
}
exports.unselectAllView = unselectAllView;
function emptyListView(value) {
    return (0, dom_1.el)("ul.dhx_list", [
        (0, dom_1.el)("li.dhx_list-item.dhx_combobox-options__item".concat(value ? ".dhx_combobox-options__action-create-option" : ""), {}, value ? "".concat(en_1.default.createItem, " \"").concat(value, "\"") : en_1.default.notFound),
    ]);
}
exports.emptyListView = emptyListView;
function emptyListHeight(value, width) {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d", {
        alpha: false,
    });
    ctx.font = "normal 14px Roboto";
    var sumValue = value ? "".concat(en_1.default.createItem, " \"").concat(value, "\"") : en_1.default.notFound;
    return 13 + 20 * Math.ceil(ctx.measureText(sumValue).width / (width - 16));
}
exports.emptyListHeight = emptyListHeight;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ComboState = exports.ComboboxEvents = void 0;
var ComboboxEvents;
(function (ComboboxEvents) {
    ComboboxEvents["beforeChange"] = "beforeChange";
    ComboboxEvents["change"] = "change";
    ComboboxEvents["focus"] = "focus";
    ComboboxEvents["blur"] = "blur";
    ComboboxEvents["keydown"] = "keydown";
    ComboboxEvents["input"] = "input";
    ComboboxEvents["beforeOpen"] = "beforeOpen";
    ComboboxEvents["afterOpen"] = "afterOpen";
    ComboboxEvents["beforeClose"] = "beforeClose";
    ComboboxEvents["afterClose"] = "afterClose";
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    ComboboxEvents["open"] = "open";
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    ComboboxEvents["close"] = "close";
})(ComboboxEvents || (exports.ComboboxEvents = ComboboxEvents = {}));
var ComboState;
(function (ComboState) {
    ComboState[ComboState["default"] = 0] = "default";
    ComboState[ComboState["error"] = 1] = "error";
    ComboState[ComboState["success"] = 2] = "success";
})(ComboState || (exports.ComboState = ComboState = {}));


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFixedCols = exports.getFixedColsHeader = void 0;
var dom_1 = __webpack_require__(1);
var types_1 = __webpack_require__(3);
var Cells_1 = __webpack_require__(18);
var FixedRows_1 = __webpack_require__(51);
var main_1 = __webpack_require__(7);
var common_1 = __webpack_require__(11);
function getFixedColsHeader(renderConfig, layout, mode) {
    if ((mode === types_1.Split.left &&
        (typeof renderConfig.leftSplit !== "number" || !renderConfig.fixedColumns.left.length)) ||
        (mode === types_1.Split.right &&
            (typeof renderConfig.rightSplit !== "number" || !renderConfig.fixedColumns.right.length))) {
        return;
    }
    var leftSplit = renderConfig.leftSplit, rightSplit = renderConfig.rightSplit, $positions = renderConfig.$positions, $totalWidth = renderConfig.$totalWidth, $scrollBarWidth = renderConfig.$scrollBarWidth;
    var isRightSplit = mode === types_1.Split.right;
    var columns = isRightSplit ? renderConfig.fixedColumns.right : renderConfig.fixedColumns.left;
    var width = (0, main_1.getTotalWidth)(columns);
    var getRowAriaAttrs = function (count) { return ({
        role: "rowgroup",
        "aria-rowcount": count,
    }); };
    var frozenHeaderCols = (0, FixedRows_1.getFixedRows)(__assign(__assign({}, renderConfig), { currentColumns: columns, $positions: __assign(__assign({}, $positions), { xStart: 0, xEnd: isRightSplit ? rightSplit : leftSplit }), scroll: { top: 0, left: 0 }, filteredColumns: columns }), __assign(__assign({}, layout), { name: "header", position: "top", shifts: { x: 0, y: 0 } }), mode);
    var headerRowsConfig = __assign(__assign({}, layout), { name: "header", position: "top" });
    return (0, dom_1.el)(".dhx_".concat(headerRowsConfig.name, "-fixed-cols"), __assign({ onwheel: main_1.scrollFixedColsAndRows, class: isRightSplit ? "dhx_grid__cols_right--fixed" : "dhx_grid__cols_left--fixed", style: {
            position: "absolute",
            top: 0,
            left: isRightSplit
                ? $totalWidth < layout.wrapper.width - $scrollBarWidth.y - common_1.BORDERS
                    ? $totalWidth - width
                    : layout.wrapper.width - width - $scrollBarWidth.y - common_1.BORDERS
                : 0,
            width: width,
            overflow: "hidden",
        } }, getRowAriaAttrs(frozenHeaderCols.length)), frozenHeaderCols.body);
}
exports.getFixedColsHeader = getFixedColsHeader;
function getFixedCols(renderConfig, layout, mode, source) {
    if ((mode === types_1.Split.left &&
        (typeof renderConfig.leftSplit !== "number" || !renderConfig.fixedColumns.left.length)) ||
        (mode === types_1.Split.right &&
            (typeof renderConfig.rightSplit !== "number" || !renderConfig.fixedColumns.right.length))) {
        return;
    }
    var leftSplit = renderConfig.leftSplit, rightSplit = renderConfig.rightSplit, $totalWidth = renderConfig.$totalWidth, $totalHeight = renderConfig.$totalHeight, headerHeight = renderConfig.headerHeight, configFooterHeight = renderConfig.footerHeight, $positions = renderConfig.$positions, scroll = renderConfig.scroll, data = renderConfig.data, $scrollBarWidth = renderConfig.$scrollBarWidth;
    var isRightSplit = mode === types_1.Split.right;
    var fixedContentHeight = $totalHeight + headerHeight + configFooterHeight;
    var fixedColsHeight;
    if (fixedContentHeight > layout.gridBodyHeight) {
        fixedColsHeight = renderConfig.$footer
            ? fixedContentHeight - $scrollBarWidth.x
            : layout.gridBodyHeight;
    }
    else if (fixedContentHeight < layout.gridBodyHeight - $scrollBarWidth.x) {
        fixedColsHeight = fixedContentHeight;
    }
    else {
        fixedColsHeight = renderConfig.$footer
            ? layout.gridBodyHeight
            : layout.gridBodyHeight - $scrollBarWidth.x;
    }
    var columns = isRightSplit ? renderConfig.fixedColumns.right : renderConfig.fixedColumns.left;
    var width = (0, main_1.getTotalWidth)(columns);
    var renderFrom = isRightSplit ? "rightFixedCols" : "leftFixedCols";
    var fixedCols = (0, Cells_1.getCells)(__assign(__assign({}, renderConfig), { filteredColumns: columns, $renderFrom: renderFrom, $positions: __assign(__assign({}, $positions), { xStart: 0, xEnd: isRightSplit ? rightSplit : leftSplit }) }));
    var isSticky = layout.sticky;
    var footerRowsConfig = __assign(__assign({}, layout), { name: "footer", position: "bottom" });
    var frozenFooterCols = (0, FixedRows_1.getRows)(__assign(__assign({}, renderConfig), { currentColumns: columns, $positions: __assign(__assign({}, $positions), { xStart: 0, xEnd: isRightSplit ? rightSplit : leftSplit }) }), __assign(__assign({}, layout), { name: "footer", position: "bottom" }));
    var footerHeight = 0;
    frozenFooterCols.forEach(function (node) { return (footerHeight += node.attrs.style.height); });
    var frozenFooterSpans = (0, FixedRows_1.getFixedSpans)(__assign(__assign({}, renderConfig), { filteredColumns: columns }), __assign(__assign({}, layout), { name: "footer", position: "bottom" }), mode);
    var getRowAriaAttrs = function (count) { return ({
        role: "rowgroup",
        "aria-rowcount": count,
    }); };
    var frozenFooter = isSticky
        ? (0, dom_1.el)(".dhx_".concat(footerRowsConfig.name, "-fixed-cols"), __assign({ onwheel: main_1.scrollFixedColsAndRows, class: isRightSplit ? "dhx_grid__cols_right--fixed" : "dhx_grid__cols_left--fixed", style: {
                position: "absolute",
                top: fixedColsHeight < layout.gridBodyHeight ? fixedColsHeight - footerHeight : null,
                left: isRightSplit
                    ? $totalWidth < layout.wrapper.width - $scrollBarWidth.y - common_1.BORDERS
                        ? $totalWidth - width
                        : layout.wrapper.width - width - $scrollBarWidth.y - common_1.BORDERS
                    : 0,
                bottom: fixedColsHeight >= layout.gridBodyHeight
                    ? "".concat(isSticky ? $scrollBarWidth.x : 0, "px")
                    : null,
                overflow: "hidden",
            } }, getRowAriaAttrs(frozenFooterCols.length)), __spreadArray(__spreadArray([], frozenFooterCols, true), [
            (0, dom_1.el)("span.dhx_span-spans", {
                class: "dhx_footer-spans",
                role: "presentation",
            }, frozenFooterSpans),
        ], false))
        : null;
    var pos = $positions;
    var spans = (0, Cells_1.getSpans)(__assign(__assign({}, renderConfig), { $renderFrom: renderFrom }), source || (isRightSplit ? types_1.Split.right : types_1.Split.left));
    var getFixedColAriaAttrs = function () { return ({
        role: "presentation",
        "aria-label": "Fixed column",
    }); };
    return [
        (0, dom_1.el)(".dhx_grid-fixed-cols-wrap", __assign({ style: {
                left: isRightSplit
                    ? $totalWidth < layout.wrapper.width - $scrollBarWidth.y - common_1.BORDERS
                        ? $totalWidth - width
                        : layout.wrapper.width - width - $scrollBarWidth.y - common_1.BORDERS
                    : 0,
                height: fixedColsHeight >= layout.gridBodyHeight
                    ? (isSticky ? layout.gridBodyHeight : layout.gridBodyHeight + headerHeight) -
                        $scrollBarWidth.x
                    : fixedColsHeight,
                paddingTop: headerHeight,
                overflow: "hidden",
                width: width,
            } }, getFixedColAriaAttrs()), [
            (0, dom_1.el)(".dhx_grid-fixed-cols", __assign(__assign({ onwheel: main_1.scrollFixedColsAndRows, class: isRightSplit ? "dhx_grid__cols_right--fixed" : "dhx_grid__cols_left--fixed", style: {
                    top: -scroll.top + headerHeight - 1 + "px",
                    paddingTop: layout.shifts.y,
                    height: $totalHeight,
                    position: "absolute",
                }, _flags: dom_1.KEYED_LIST }, (0, Cells_1.getHandlers)(pos.yStart, pos.xStart, renderConfig)), getRowAriaAttrs(data.length)), __spreadArray(__spreadArray([], fixedCols, true), [spans && (0, dom_1.el)("span.dhx_span-spans", { role: "presentation" }, spans)], false)),
            isRightSplit
                ? (0, dom_1.el)(".dhx_grid__cols-border--frozen", { role: "presentation", style: { left: 0 } })
                : (0, dom_1.el)(".dhx_grid__cols-border--frozen", { role: "presentation", style: { right: 0 } }),
        ]),
        renderConfig.$footer ? frozenFooter : null,
    ];
}
exports.getFixedCols = getFixedCols;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFixedDataRows = exports.getFixedRows = exports.getFixedSpans = exports.getRows = void 0;
var dom_1 = __webpack_require__(1);
var cells_1 = __webpack_require__(15);
var main_1 = __webpack_require__(7);
var types_1 = __webpack_require__(3);
var Cells_1 = __webpack_require__(18);
var FixedCols_1 = __webpack_require__(50);
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(11);
var data_1 = __webpack_require__(8);
function handleMouse(cell, col, config, type, event) {
    if (!type)
        return;
    var systemEvent = type.toLocaleLowerCase().includes("touch");
    if (systemEvent) {
        config._events.fire(type, [cell, col, event]);
    }
    else {
        config.events.fire(type, [cell, col, event]);
    }
}
function getHandlers(column, rowName, config, cell) {
    return {
        onclick: [handleMouse, cell, column, config, types_1.GridEvents[rowName + "CellClick"]],
        onmouseover: [handleMouse, cell, column, config, types_1.GridEvents[rowName + "CellMouseOver"]],
        onmousedown: [handleMouse, cell, column, config, types_1.GridEvents[rowName + "CellMouseDown"]],
        ontouchstart: [handleMouse, cell, column, config, types_1.GridEvents[rowName + "CellMouseDown"]],
        ondblclick: [handleMouse, cell, column, config, types_1.GridEvents[rowName + "CellDblClick"]],
        oncontextmenu: [handleMouse, cell, column, config, types_1.GridEvents[rowName + "CellRightClick"]],
        ontouchmove: [handleMouse, cell, column, config, types_1.GridSystemEvents[rowName + "CellTouchMove"]],
        ontouchend: [handleMouse, cell, column, config, types_1.GridSystemEvents[rowName + "CelltouchEnd"]],
    };
}
function buildRows(columns, name) {
    var header = columns.map(function (col) { return col[name] || [{}]; });
    return (0, main_1.transpose)(header);
}
function getCustomContentCell(cell, column, config, rowName, css, rowIndex) {
    if (css === void 0) { css = ""; }
    var type = column.type ? "dhx_".concat(column.type, "-cell") : "dhx_string-cell";
    // TODO: over with index of filter inside of header or footer
    var content = config.content[cell.content] && config.content[cell.content].toHtml(column, config);
    var cellRow = {};
    config.filteredColumns.forEach(function (col) {
        var hasContent = !!config.content[col[rowName][rowIndex].content];
        cellRow[col.id] =
            (hasContent && config.content[col[rowName][rowIndex].content].toHtml(col, config)) ||
                col[rowName][rowIndex].text;
    });
    return (0, dom_1.el)(".".concat(type), {
        style: {
            class: css.trim(),
            padding: 0,
        },
    }, [content]);
}
function getRows(config, rowsConfig) {
    if (!config.data || !config.filteredColumns) {
        return [];
    }
    var getRowAriaAttrs = function (ind) { return ({
        role: "row",
        "aria-rowindex": ind + 1,
    }); };
    var rowName = rowsConfig.name;
    var isAutoHeight = rowName === "header" ? config.headerAutoHeight : config.footerAutoHeight;
    var pos = config.$positions;
    var columns = config.currentColumns;
    var rows = buildRows(columns, rowName);
    var colRange;
    var colsCount = 1;
    return rows.map(function (row, j) {
        var rowHeight = (rowName === "header"
            ? config.$headerHeightMap
            : config.$footerHeightMap)[j];
        return (0, dom_1.el)(".dhx_".concat(rowName, "-row"), __assign({ style: {
                height: rowHeight,
            } }, getRowAriaAttrs(j)), row.map(function (cell, i) {
            var _a;
            var css = cell.css || "";
            var column = columns[i];
            var colIndex = pos.xStart + i + 1;
            var isHTMLEnable = (0, main_1.isHtmlEnable)(config, column, cell);
            var sortIconCss = "dxi dxi-arrow-up dhx_grid-sort-icon";
            var ariaSort = "none";
            var text = cell.text;
            if (typeof cell.text === "function") {
                var summary = __assign(__assign({}, config.commonSummary), config.colSummary[column.id]);
                if (typeof column.summary === "string" && column.summary !== "count") {
                    summary[column.summary] = (0, data_1.applyPattern)(summary[column.summary], column);
                }
                text = cell.text(summary);
            }
            if (config.sortBy && "".concat(column.id) === config.sortBy && !cell.content) {
                var dir = config.sortDir || "asc";
                sortIconCss += " dhx_grid-sort-icon--".concat(dir);
                css += " dhx_grid-".concat(rowName, "-cell--sorted ");
                ariaSort = dir === "asc" ? "ascending" : "descending";
            }
            var sortIconVisible = (0, main_1.isSortable)(config, column) &&
                cell.text &&
                rowName !== "footer" &&
                cell.headerSort !== false;
            if (!column.$target && sortIconVisible) {
                css += " dhx_grid-header-cell--sortable";
            }
            var isFirstCol = i === 0 ? "dhx_first-column-cell" : "";
            var isLastCol = i === columns.length - 1 ? "dhx_last-column-cell" : "";
            if (!cell.content) {
                if (cell.align) {
                    css += " dhx_grid-header-cell--align_".concat(cell.align, " ");
                }
                else {
                    css += " dhx_grid-header-cell--".concat(column.type === "number" || column.type === "date" ? "align_right" : "align_left", " ");
                }
            }
            css += "".concat(isFirstCol, " ").concat(isLastCol);
            if (column.$target && rowName === "header") {
                css += " dhx_grid-header-drop-area--".concat(column.$target, " ");
            }
            var resizable = column.resizable !== undefined ? column.resizable : config.resizable;
            if (resizable) {
                var isLeftResize = config.rightSplit &&
                    config.$scrollBarWidth.xState &&
                    config.fixedColumns.right.includes(column);
                resizable = (0, dom_1.el)("div", {
                    class: "dhx_resizer_grip_wrap",
                    "aria-hidden": "true",
                }, [
                    (0, dom_1.el)("div", {
                        class: "dhx_resizer_grip" +
                            (isLeftResize
                                ? " dhx_resizer_grip--left"
                                : " dhx_resizer_grip--right"),
                        dhx_resized: column.id,
                        style: {
                            height: "".concat(rows.length * 100, "%"),
                        },
                    }, [(0, dom_1.el)("div", { class: "dhx_resizer_grip_line" })]),
                ]);
                var colSpan = column.header && ((_a = column.header[0]) === null || _a === void 0 ? void 0 : _a.colspan);
                if (colSpan) {
                    colRange = colSpan;
                    colsCount = 1;
                }
                if (colRange && colsCount !== colRange) {
                    if (j === 0)
                        resizable = null;
                    colsCount++;
                }
                if (rowName === "footer") {
                    resizable = null;
                }
            }
            if (cell.align) {
                css += " dhx_align-".concat(cell.align);
            }
            var getCellAriaAttrs = function (rowName, colIndex, ariaSort) {
                var attrs = {
                    "aria-colindex": colIndex,
                };
                if (!sortIconVisible) {
                    // if cell is sortable - set tabindex on button (getInnerCellAriaAttrs),
                    // else - on cell
                    // attrs["tabindex"] = 0;
                    // TODO: after sort AND if first cell is not visible: selection.setCell(first cell) -> scrollTo
                    // TODO: use arrows to navigate, set tabindex for first cell only
                }
                if (rowName === "footer" || cell.content) {
                    attrs["role"] = "gridcell";
                }
                else {
                    attrs["role"] = "columnheader";
                    attrs["aria-sort"] = ariaSort;
                    // attrs["aria-label"] = title;
                }
                return attrs;
            };
            if (cell.content) {
                return (0, dom_1.el)(".dhx_grid-".concat(rowName, "-cell.dhx_grid-custom-content-cell"), __assign(__assign({ class: css.trim(), "data-dhx-id": column.id, "data-dhx-text-id": cell.id, _key: column.id, style: {
                        width: column.$width,
                        height: rowName === "footer" ? rowHeight + common_1.BORDERS / 2 + "px" : rowHeight + "px",
                    } }, getHandlers(column, rowName, config, cell)), getCellAriaAttrs(rowName, colIndex, ariaSort)), [getCustomContentCell(cell, column, config, rowName, "", j), resizable || null]);
            }
            var getInnerCellAriaAttrs = function (rowName, text) {
                return sortIconVisible
                    ? {
                        role: "button",
                        "aria-label": "Sort by ".concat(text),
                        // tabindex: 0,
                        // TODO: after sort AND if first cell is not visible: selection.setCell(first cell) -> scrollTo
                        // TODO: use arrows to navigate, set tabindex for first cell only
                    }
                    : {};
            };
            var cellCss = "dhx_grid-header-cell-text_content";
            if (isAutoHeight)
                cellCss += " dhx_grid-header-cell-text_content-auto-height";
            return (0, dom_1.el)(".dhx_grid-".concat(rowName, "-cell"), __assign(__assign({ class: css.trim(), "data-dhx-id": column.id, "data-dhx-text-id": cell.id, _key: column.id, style: {
                    width: column.$width,
                    height: rowName === "footer" ? rowHeight + common_1.BORDERS / 2 + "px" : rowHeight + "px",
                } }, getHandlers(column, rowName, config, cell)), getCellAriaAttrs(rowName, colIndex, ariaSort)), [
                (0, dom_1.el)("div.dhx_grid-header-cell-text", {
                    role: "presentation",
                }, [
                    (0, dom_1.el)("span", __assign(__assign({ class: cellCss }, getInnerCellAriaAttrs(rowName, text)), { ".innerHTML": isHTMLEnable ? text : null }), isHTMLEnable ? null : text),
                    resizable || null,
                ]),
                sortIconVisible && (0, dom_1.el)("div", { class: sortIconCss, "aria-hidden": "true" }),
            ]);
        }));
    });
}
exports.getRows = getRows;
function getFixedSpans(config, rowsConfig, mode) {
    var columns = config.columns, cols = config.filteredColumns;
    var rows = (0, main_1.transpose)(cols.map(function (col) { return col[rowsConfig.name] || []; }));
    var rowName = rowsConfig.name;
    var isAutoHeight = rowName === "header" ? config.headerAutoHeight : config.footerAutoHeight;
    var heightMap = (rowName === "header" ? config.$headerHeightMap : config.$footerHeightMap);
    var leftShift = 0;
    return rows.map(function (row, i) {
        leftShift = 0;
        var rowHeight = heightMap[i];
        return (0, dom_1.el)(".dhx_span-row", {
            class: "dhx_header-row",
            "aria-hidden": "true",
        }, row
            .map(function (cell, cellIdx) {
            var spanPartByRightSplit;
            var col = cols[cellIdx];
            if (mode === types_1.Split.right && cellIdx === 0 && !(cell.colspan > 1)) {
                var rows_1 = (0, main_1.transpose)(columns.map(function (col) { return col[rowsConfig.name] || []; }));
                outer: for (var j = 0; j < rows_1[i].length; j++) {
                    var currCell = rows_1[i][j];
                    if (currCell.colspan > 1) {
                        var spanCols = columns.slice(j, j + currCell.colspan);
                        for (var k = 0; k < spanCols.length; k++) {
                            if (spanCols[k].id !== col.id)
                                continue;
                            spanPartByRightSplit = {
                                cell: currCell,
                                col: columns[j],
                                widthBefore: (0, cells_1.getWidth)(spanCols, k, 0),
                                isLastCol: j + currCell.colspan >= columns.length,
                            };
                            break outer;
                        }
                    }
                }
            }
            var nCell = (spanPartByRightSplit === null || spanPartByRightSplit === void 0 ? void 0 : spanPartByRightSplit.cell) || cell;
            var nCol = (spanPartByRightSplit === null || spanPartByRightSplit === void 0 ? void 0 : spanPartByRightSplit.col) || col;
            var isHTMLEnable = (0, main_1.isHtmlEnable)(config, col, cell);
            leftShift += nCol.hidden ? 0 : nCol.$width;
            var isFirstCol = cellIdx === 0 ? "dhx_first-column-cell" : "";
            var n = mode ? 1 : config.fixedColumns.right.length + 1;
            var reducedColspan = cell.colspan > 1 && (0, cells_1.getReducedColspan)(columns, col.id, cell.colspan);
            var isLastCol = (spanPartByRightSplit === null || spanPartByRightSplit === void 0 ? void 0 : spanPartByRightSplit.isLastCol) ||
                cellIdx === cols.length - n ||
                (reducedColspan || 1) + (cellIdx - 1) >= cols.length - n
                ? "dhx_last-column-cell"
                : "";
            var spanHeight = rowHeight;
            var spanPositionTop = rowHeight * i;
            if (nCell.rowspan > 1) {
                var count = nCell.rowspan - 1;
                while (count > 0) {
                    spanHeight += heightMap[i + count];
                    count--;
                }
                spanHeight -= 1;
            }
            if (nCell.rowspan > 1 || nCell.colspan > 1) {
                spanPositionTop = 0;
                for (var j = i - 1; j >= 0; j--) {
                    spanPositionTop += heightMap[j];
                }
            }
            var sortIconVisible = (0, main_1.isSortable)(config, nCol) &&
                nCell.rowspan > 1 &&
                nCell.text &&
                rowsConfig.name !== "footer" &&
                nCell.headerSort !== false;
            var sortIconCss = "dxi dxi-arrow-up dhx_grid-sort-icon";
            if (config.sortBy && "".concat(nCol.id) === config.sortBy && !nCell.content) {
                sortIconCss += " dhx_grid-sort-icon--".concat(config.sortDir || "asc");
            }
            var cellAlign = nCol.align
                ? "dhx_align-".concat(nCol.align)
                : (nCol.type === "number" || nCol.type === "percent" || nCol.type === "date") &&
                    !(nCell.colspan > 1)
                    ? "dhx_align-right"
                    : "dhx_align-left";
            var css = "dhx_grid-".concat(rowName, "-cell ").concat(isFirstCol, " ").concat(isLastCol, " ").concat(nCell.rowspan > 1 ? "dhx_span-cell__rowspan" : "", " ").concat(nCell.align ? "dhx_align-".concat(nCell.align) : cellAlign, " ").concat(nCell.css ? nCell.css : "");
            if (!nCol.$target && sortIconVisible) {
                css += " dhx_grid-header-cell--sortable";
            }
            if (!nCell.content) {
                if (nCell.align) {
                    css += " dhx_grid-header-cell--align_".concat(nCell.align, " ");
                }
                else {
                    css += " dhx_grid-header-cell--".concat(nCol.type === "number" || nCol.type === "percent" || nCol.type === "date"
                        ? "align_right"
                        : "align_left", " ");
                }
            }
            if (nCol.$target && rowName === "header") {
                css += " dhx_grid-header-drop-area--".concat(nCol.$target, " ");
            }
            var text = nCell.text;
            if (typeof nCell.text === "function") {
                var summary = __assign(__assign({}, config.commonSummary), config.colSummary[col.id]);
                if (typeof col.summary === "string" && col.summary !== "count") {
                    summary[col.summary] = (0, data_1.applyPattern)(summary[col.summary], col);
                }
                text = nCell.text(summary);
            }
            var content = null;
            if (nCell.content) {
                content = getCustomContentCell(nCell, nCol, config, rowName, css, i);
                content.attrs.style = __assign(__assign({}, content.attrs.style), { width: "100%", borderRight: "0" });
            }
            var borderLeft = "";
            if (leftShift - nCol.$width > 0) {
                borderLeft = "var(--dhx-border)";
            }
            var cellCss = "dhx_grid-header-cell-text_content";
            if (isAutoHeight)
                cellCss += " dhx_grid-header-cell-text_content-auto-height";
            var spanElement = (0, dom_1.el)("span", {
                class: cellCss,
                ".innerHTML": isHTMLEnable ? text : null,
            }, isHTMLEnable ? null : text);
            return nCell.colspan > 1 || nCell.rowspan > 1
                ? (0, dom_1.el)(".dhx_span-cell", __assign({ style: {
                        width: (0, cells_1.getWidth)(columns, nCell.colspan, (0, core_1.findIndex)(columns, function (item) { return item.id === nCol.id; })),
                        height: spanHeight,
                        left: leftShift -
                            nCol.$width -
                            ((spanPartByRightSplit === null || spanPartByRightSplit === void 0 ? void 0 : spanPartByRightSplit.widthBefore) || 0),
                        borderLeft: borderLeft,
                        top: spanPositionTop,
                    }, class: css.trim(), "data-dhx-id": nCol.id, "data-dhx-text-id": nCell.id }, getHandlers(nCol, rowName, config, nCell)), [
                    content || nCell.rowspan > 1
                        ? (0, dom_1.el)("div.dhx_grid-header-cell-text", {
                            role: "presentation",
                        }, [spanElement])
                        : spanElement,
                    sortIconVisible && (0, dom_1.el)("div", { class: sortIconCss }),
                    (mode === types_1.Split.left &&
                        reducedColspan &&
                        cellIdx + reducedColspan > cols.length) ||
                        spanPartByRightSplit
                        ? (0, dom_1.el)(".dhx_grid__cols-border--frozen", {
                            role: "presentation",
                            style: {
                                left: ((spanPartByRightSplit === null || spanPartByRightSplit === void 0 ? void 0 : spanPartByRightSplit.widthBefore) ||
                                    (0, cells_1.getWidth)(cols, cols.length - cellIdx, cellIdx)) -
                                    common_1.BORDERS / 2 -
                                    (cellIdx && mode === types_1.Split.left ? 1 : 0),
                            },
                        })
                        : null,
                ])
                : null;
        })
            .filter(function (cell) { return cell; }));
    });
}
exports.getFixedSpans = getFixedSpans;
function getRowAriaAttrs(rowCount) {
    return { role: "rowgroup", "aria-rowcount": rowCount };
}
function getFixedRows(config, rowsConfig, mode) {
    var _a;
    var leftSplit = config.leftSplit, $totalWidth = config.$totalWidth;
    var rows = getRows(config, rowsConfig);
    var spans = getFixedSpans(config, rowsConfig, mode);
    var fixedCols = null;
    if (rowsConfig.name === "footer" && !rowsConfig.sticky) {
        var rightSplit_1 = config.rightSplit, fixedColumns_1 = config.fixedColumns;
        var getCols = function (isRightSplit) {
            if (isRightSplit === void 0) { isRightSplit = false; }
            var columns = isRightSplit ? fixedColumns_1.right : fixedColumns_1.left;
            return (!isRightSplit && leftSplit >= 0) || (isRightSplit && rightSplit_1 >= 0)
                ? getRows(__assign(__assign({}, config), { currentColumns: columns, $positions: __assign(__assign({}, config.$positions), { xStart: 0, xEnd: isRightSplit ? rightSplit_1 : leftSplit }) }), rowsConfig)
                : [];
        };
        fixedCols = __spreadArray(__spreadArray([], getCols(), true), getCols(true), true);
    }
    var styles = (_a = {
            position: "sticky"
        },
        _a[rowsConfig.position] = 0,
        _a);
    var left;
    if (!rowsConfig.sticky) {
        styles.left = -config.scroll.left;
        left = -config.scroll.left;
        styles.position = "relative";
    }
    return (0, dom_1.el)(".dhx_".concat(rowsConfig.name, "-wrapper").concat(config.rightSplit ? ".dhx_grid__rows_right--fixed" : ""), {
        class: rowsConfig.sticky ? "" : "dhx_compatible-".concat(rowsConfig.name),
        style: __assign(__assign({}, styles), { left: rowsConfig.sticky ? left : 0, height: rowsConfig.name === "footer"
                ? config[rowsConfig.name + "Height"] + common_1.BORDERS / 2
                : config[rowsConfig.name + "Height"], width: rowsConfig.sticky ? $totalWidth : rowsConfig.wrapper.width - common_1.BORDERS }),
        role: "presentation",
        "data-dhx-drop-area": rowsConfig.name === "header" ? "column" : null,
    }, [
        (0, dom_1.el)(".dhx_grid-".concat(rowsConfig.name).concat(leftSplit ? ".dhx_grid_fixed_left" : ""), {
            style: {
                height: rowsConfig.name === "footer"
                    ? config[rowsConfig.name + "Height"] + common_1.BORDERS / 2
                    : config[rowsConfig.name + "Height"],
                left: left,
                paddingLeft: rowsConfig.shifts.x,
                width: $totalWidth,
            },
            role: "presentation",
        }, [
            (0, dom_1.el)(".dhx_".concat(rowsConfig.name, "-rows"), __assign({}, getRowAriaAttrs(__spreadArray([], rows, true).length)), __spreadArray([], rows, true)),
            (0, dom_1.el)(".dhx_".concat(rowsConfig.name, "-spans"), {
                style: {
                    marginLeft: -rowsConfig.shifts.x,
                },
                class: "dhx_".concat(rowsConfig.name, "-rows"),
                role: "presentation",
            }, spans),
            fixedCols &&
                (0, dom_1.el)(".dhx_".concat(rowsConfig.name, "-fixed-cols"), {
                    style: {
                        position: "absolute",
                        top: 0,
                        left: config.scroll.left + "px",
                        height: "100%",
                    },
                }, fixedCols),
        ]),
        (0, dom_1.el)("div", { style: { width: $totalWidth }, role: "presentation" }),
    ]);
}
exports.getFixedRows = getFixedRows;
function getFixedDataRows(config, layout, mode) {
    if ((mode === types_1.Split.top && typeof config.topSplit !== "number") ||
        (mode === types_1.Split.bottom && typeof config.bottomSplit !== "number")) {
        return;
    }
    var $totalWidth = config.$totalWidth, topSplit = config.topSplit, bottomSplit = config.bottomSplit, $positions = config.$positions, data = config.data, $totalHeight = config.$totalHeight, $width = config.$width, headerHeight = config.headerHeight, footerHeight = config.footerHeight, $scrollBarWidth = config.$scrollBarWidth;
    var isBottomSplit = mode === types_1.Split.bottom;
    var splitedData = isBottomSplit ? config.fixedRows.bottom : config.fixedRows.top;
    var $renderFrom = isBottomSplit ? "bottomFixedRows" : "topFixedRows";
    var fixedRows = (0, Cells_1.getCells)(__assign(__assign({}, config), { data: splitedData, $renderFrom: $renderFrom, $positions: __assign(__assign({}, $positions), { yStart: 0, yEnd: isBottomSplit ? bottomSplit : topSplit }) }));
    var fixedRowsHeight = splitedData.reduce(function (acc, item) { return acc + item.$height; }, 0);
    var spans = (0, Cells_1.getSpans)(__assign(__assign({}, config), { $renderFrom: $renderFrom, data: data }), isBottomSplit ? types_1.Split.bottom : types_1.Split.top);
    var bottomSplitHeight = (0, main_1.getTotalHeight)(config.fixedRows.bottom);
    var getCols = function (split) {
        return ((0, FixedCols_1.getFixedCols)(__assign(__assign({}, config), { headerHeight: 0, data: splitedData, $renderFrom: $renderFrom, scroll: __assign(__assign({}, config.scroll), { top: -1 }), $positions: __assign(__assign({}, $positions), { yStart: 0, yEnd: isBottomSplit ? bottomSplit : topSplit }), $totalHeight: fixedRowsHeight, $data: data }), __assign(__assign({}, layout), { shifts: __assign(__assign({}, layout.shifts), { y: 0 }) }), split, mode) || []);
    };
    var fixedCols = __spreadArray(__spreadArray([], getCols(types_1.Split.left), true), getCols(types_1.Split.right), true);
    return [
        (0, dom_1.el)(".dhx_grid-fixed-data-rows-wrap", {
            class: isBottomSplit ? "dhx_grid__rows_bottom--fixed" : "",
            style: {
                top: isBottomSplit
                    ? $totalHeight + headerHeight + footerHeight <
                        layout.wrapper.height - $scrollBarWidth.x - common_1.BORDERS
                        ? $totalHeight + headerHeight - bottomSplitHeight + common_1.BORDERS / 2
                        : layout.wrapper.height -
                            bottomSplitHeight -
                            footerHeight -
                            common_1.BORDERS / 2 -
                            $scrollBarWidth.x
                    : headerHeight,
                overflow: "hidden",
                height: fixedRowsHeight > layout.wrapper.height ? layout.wrapper.height : fixedRowsHeight,
                width: $totalWidth + $scrollBarWidth.y + common_1.BORDERS < $width
                    ? $totalWidth
                    : $width - $scrollBarWidth.y - common_1.BORDERS,
            },
        }, __spreadArray(__spreadArray([
            (0, dom_1.el)(".dhx_grid-fixed-cols", __assign(__assign({ onwheel: main_1.scrollFixedColsAndRows, style: {
                    left: -config.scroll.left + "px",
                    paddingLeft: layout.shifts.x,
                    position: "absolute",
                    width: $totalWidth,
                }, _flags: dom_1.KEYED_LIST }, (0, Cells_1.getHandlers)(0, $positions.xStart, config)), getRowAriaAttrs(data.length)), [
                (0, dom_1.el)(".dhx_grid-fixed-rows", {
                    class: config.rightSplit ? "dhx_grid__rows_right--fixed" : "",
                }, __spreadArray(__spreadArray([], fixedRows, true), [spans && (0, dom_1.el)(".dhx_span-spans", { role: "presentation" }, spans)], false)),
            ])
        ], fixedCols, true), [
            config.bottomSplit ? (0, dom_1.el)(".dhx_grid__rows-border--frozen", { role: "presentation" }) : null,
        ], false)),
    ];
}
exports.getFixedDataRows = getFixedDataRows;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53);
__webpack_require__(54);
__webpack_require__(55);
__webpack_require__(56);
__webpack_require__(57);
module.exports = __webpack_require__(58);


/***/ }),
/* 53 */
/***/ (function(module, exports) {

Object.values = Object.values
    ? Object.values
    : function (obj) {
        var allowedTypes = [
            "[object String]",
            "[object Object]",
            "[object Array]",
            "[object Function]",
        ];
        var objType = Object.prototype.toString.call(obj);
        if (obj === null || typeof obj === "undefined") {
            throw new TypeError("Cannot convert undefined or null to object");
        }
        else if (!~allowedTypes.indexOf(objType)) {
            return [];
        }
        else {
            // if ES6 is supported
            if (Object.keys) {
                return Object.keys(obj).map(function (key) {
                    return obj[key];
                });
            }
            var result = [];
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    result.push(obj[prop]);
                }
            }
            return result;
        }
    };
if (!Object.assign) {
    Object.defineProperty(Object, "assign", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (target) {
            "use strict";
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (target === undefined || target === null) {
                throw new TypeError("Cannot convert first argument to object");
            }
            var to = Object(target);
            for (var i = 0; i < args.length; i++) {
                var nextSource = args[i];
                if (nextSource === undefined || nextSource === null) {
                    continue;
                }
                var keysArray = Object.keys(Object(nextSource));
                for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                    var nextKey = keysArray[nextIndex];
                    var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                    if (desc !== undefined && desc.enumerable) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        },
    });
}


/***/ }),
/* 54 */
/***/ (function(module, exports) {

/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/unbound-method */
// eslint-disable-next-line @typescript-eslint/unbound-method
if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, "includes", {
        value: function (searchElement, fromIndex) {
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            // 1. Let O be ? ToObject(this value).
            var o = Object(this);
            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;
            // 3. If len is 0, return false.
            if (len === 0) {
                return false;
            }
            // 4. Let n be ? ToInteger(fromIndex).
            //    (If fromIndex is undefined, this step produces the value 0.)
            var n = fromIndex | 0;
            // 5. If n ≥ 0, then
            //  a. Let k be n.
            // 6. Else n < 0,
            //  a. Let k be len + n.
            //  b. If k < 0, let k be 0.
            var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
            function sameValueZero(x, y) {
                return x === y || (typeof x === "number" && typeof y === "number" && isNaN(x) && isNaN(y));
            }
            // 7. Repeat, while k < len
            while (k < len) {
                // a. Let elementK be the result of ? Get(O, ! ToString(k)).
                // b. If SameValueZero(searchElement, elementK) is true, return true.
                if (sameValueZero(o[k], searchElement)) {
                    return true;
                }
                // c. Increase k by 1.
                k++;
            }
            // 8. Return false
            return false;
        },
        configurable: true,
        writable: true,
    });
}
// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, "find", {
        value: function (predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            var o = Object(this);
            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;
            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== "function") {
                throw new TypeError("predicate must be a function");
            }
            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];
            // 5. Let k be 0.
            var k = 0;
            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return kValue.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return kValue;
                }
                // e. Increase k by 1.
                k++;
            }
            // 7. Return undefined.
            return undefined;
        },
        configurable: true,
        writable: true,
    });
}
if (!Array.prototype.findIndex) {
    Array.prototype.findIndex = function (predicate) {
        if (this == null) {
            throw new TypeError("Array.prototype.findIndex called on null or undefined");
        }
        if (typeof predicate !== "function") {
            throw new TypeError("predicate must be a function");
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;
        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return i;
            }
        }
        return -1;
    };
}


/***/ }),
/* 55 */
/***/ (function(module, exports) {

if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        "use strict";
        if (typeof start !== "number") {
            start = 0;
        }
        if (start + search.length > this.length) {
            return false;
        }
        else {
            return this.indexOf(search, start) !== -1;
        }
    };
}
if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, "startsWith", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (searchString, position) {
            position = position || 0;
            return this.indexOf(searchString, position) === position;
        },
    });
}
if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength, padString) {
        targetLength = targetLength >> 0;
        padString = String(padString || " ");
        if (this.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength - this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength / padString.length);
            }
            return padString.slice(0, targetLength) + String(this);
        }
    };
}
if (!String.prototype.padEnd) {
    String.prototype.padEnd = function padEnd(targetLength, padString) {
        targetLength = targetLength >> 0;
        padString = String(padString || " ");
        if (this.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength - this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength / padString.length);
            }
            return String(this) + padString.slice(0, targetLength);
        }
    };
}


/***/ }),
/* 56 */
/***/ (function(module, exports) {

/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/unbound-method */
if (Element && !Element.prototype.matches) {
    var proto = Element.prototype;
    proto.matches =
        proto.matchesSelector ||
            proto.mozMatchesSelector ||
            proto.msMatchesSelector ||
            proto.oMatchesSelector ||
            proto.webkitMatchesSelector;
}
// Source: https://github.com/naminho/svg-classlist-polyfill/blob/master/polyfill.js
if (!("classList" in SVGElement.prototype)) {
    Object.defineProperty(SVGElement.prototype, "classList", {
        get: function get() {
            var _this = this;
            return {
                contains: function contains(className) {
                    return _this.className.baseVal.split(" ").indexOf(className) !== -1;
                },
                add: function add(className) {
                    return _this.setAttribute("class", _this.getAttribute("class") + " " + className);
                },
                remove: function remove(className) {
                    var removedClass = _this
                        .getAttribute("class")
                        .replace(new RegExp("(\\s|^)".concat(className, "(\\s|$)"), "g"), "$2");
                    if (_this.classList.contains(className)) {
                        _this.setAttribute("class", removedClass);
                    }
                },
                toggle: function toggle(className) {
                    if (this.contains(className)) {
                        this.remove(className);
                    }
                    else {
                        this.add(className);
                    }
                },
            };
        },
        configurable: true,
    });
}
// Source: https://github.com/tc39/proposal-object-values-entries/blob/master/polyfill.js
if (!Object.entries) {
    var reduce_1 = Function.bind.call(Function.call, Array.prototype.reduce);
    var isEnumerable_1 = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable);
    var concat_1 = Function.bind.call(Function.call, Array.prototype.concat);
    Object.entries = function entries(O) {
        return reduce_1(Object.keys(O), function (e, k) { return concat_1(e, typeof k === "string" && isEnumerable_1(O, k) ? [[k, O[k]]] : []); }, []);
    };
}
// Source: https://gist.github.com/rockinghelvetica/00b9f7b5c97a16d3de75ba99192ff05c
if (!Event.prototype.composedPath) {
    Event.prototype.composedPath = function () {
        if (this.path) {
            return this.path;
        }
        var target = this.target;
        this.path = [];
        while (target.parentNode !== null) {
            this.path.push(target);
            target = target.parentNode;
        }
        this.path.push(document, window);
        return this.path;
    };
}


/***/ }),
/* 57 */
/***/ (function(module, exports) {

Math.sign =
    Math.sign ||
        function (x) {
            x = +x;
            if (x === 0 || isNaN(x)) {
                return x;
            }
            return x > 0 ? 1 : -1;
        };


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n = exports.Grid = exports.methods = exports.DataProxy = exports.DataCollection = exports.setTheme = exports.awaitRedraw = exports.cssManager = void 0;
__webpack_require__(59);
__webpack_require__(60);
// HELPERS
var CssManager_1 = __webpack_require__(61);
Object.defineProperty(exports, "cssManager", { enumerable: true, get: function () { return CssManager_1.cssManager; } });
var dom_1 = __webpack_require__(1);
Object.defineProperty(exports, "awaitRedraw", { enumerable: true, get: function () { return dom_1.awaitRedraw; } });
Object.defineProperty(exports, "setTheme", { enumerable: true, get: function () { return dom_1.setTheme; } });
var ts_data_1 = __webpack_require__(5);
Object.defineProperty(exports, "DataCollection", { enumerable: true, get: function () { return ts_data_1.DataCollection; } });
Object.defineProperty(exports, "DataProxy", { enumerable: true, get: function () { return ts_data_1.DataProxy; } });
Object.defineProperty(exports, "methods", { enumerable: true, get: function () { return ts_data_1.methods; } });
// WIDGETS
var Grid_1 = __webpack_require__(76);
Object.defineProperty(exports, "Grid", { enumerable: true, get: function () { return Grid_1.Grid; } });
// TOOLS
var date_1 = __webpack_require__(13);
var en_1 = __webpack_require__(29);
var locale_1 = __webpack_require__(119);
var w = window;
exports.i18n = w.dhx && w.dhx.i18n ? w.dhx.i18n : {};
exports.i18n.setLocale = locale_1.setLocale;
exports.i18n.calendar = exports.i18n.calendar || date_1.locale;
exports.i18n.combobox = exports.i18n.combobox || en_1.default;


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.cssManager = exports.CssManager = void 0;
var core_1 = __webpack_require__(0);
var CssManager = /** @class */ (function () {
    function CssManager() {
        this._classes = {};
        var styles = document.createElement("style");
        styles.id = "dhx_generated_styles";
        this._styleCont = document.head.appendChild(styles);
    }
    CssManager.prototype.update = function () {
        if (this._styleCont.innerHTML !== this._generateCss()) {
            document.head.appendChild(this._styleCont);
            this._styleCont.innerHTML = this._generateCss();
        }
    };
    CssManager.prototype.remove = function (className) {
        delete this._classes[className];
        this.update();
    };
    CssManager.prototype.add = function (cssList, customId, silent) {
        if (silent === void 0) { silent = false; }
        var cssString = this._toCssString(cssList);
        var id = this._findSameClassId(cssString);
        if (id && customId && customId !== id) {
            this._classes[customId] = this._classes[id];
            return customId;
        }
        if (id) {
            return id;
        }
        return this._addNewClass(cssString, customId, silent);
    };
    CssManager.prototype.get = function (className) {
        if (this._classes[className]) {
            var props = {};
            var css = this._classes[className].split(";");
            for (var _i = 0, css_1 = css; _i < css_1.length; _i++) {
                var item = css_1[_i];
                if (item) {
                    var prop = item.split(":");
                    props[prop[0]] = prop[1];
                }
            }
            return props;
        }
        return null;
    };
    CssManager.prototype.destructor = function () {
        this._classes = this._styleCont = null;
    };
    CssManager.prototype._findSameClassId = function (cssString) {
        for (var key in this._classes) {
            if (cssString === this._classes[key]) {
                return key;
            }
        }
        return null;
    };
    CssManager.prototype._addNewClass = function (cssString, customId, silent) {
        var id = customId || "dhx_generated_class_".concat((0, core_1.uid)());
        this._classes[id] = cssString;
        if (!silent) {
            this.update();
        }
        return id;
    };
    CssManager.prototype._toCssString = function (cssList) {
        var cssString = "";
        for (var key in cssList) {
            var prop = cssList[key];
            var name_1 = key.replace(/[A-Z]{1}/g, function (letter) { return "-".concat(letter.toLowerCase()); });
            cssString += "".concat(name_1, ":").concat(prop, ";");
        }
        return cssString;
    };
    CssManager.prototype._generateCss = function () {
        var result = "";
        for (var key in this._classes) {
            var cssProps = this._classes[key];
            result += ".".concat(key, "{").concat(cssProps, "}\n");
        }
        return result;
    };
    return CssManager;
}());
exports.CssManager = CssManager;
exports.cssManager = new CssManager();


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(63);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(19)))

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(19), __webpack_require__(64)))

/***/ }),
/* 64 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

/**
* Copyright (c) 2017, Leon Sorokin
* All rights reserved. (MIT Licensed)
*
* domvm.js (DOM ViewModel)
* A thin, fast, dependency-free vdom view layer
* @preserve https://github.com/leeoniya/domvm (v3.2.6, micro build)
*/

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

// NOTE: if adding a new *VNode* type, make it < COMMENT and renumber rest.
// There are some places that test <= COMMENT to assert if node is a VNode

// VNode types
var ELEMENT	= 1;
var TEXT		= 2;
var COMMENT	= 3;

// placeholder types
var VVIEW		= 4;
var VMODEL		= 5;

var ENV_DOM = typeof window !== "undefined";
var win = ENV_DOM ? window : {};
var rAF = win.requestAnimationFrame;

var emptyObj = {};

function noop() {}

var isArr = Array.isArray;

function isSet(val) {
	return val != null;
}

function isPlainObj(val) {
	return val != null && val.constructor === Object;		//  && typeof val === "object"
}

function insertArr(targ, arr, pos, rem) {
	targ.splice.apply(targ, [pos, rem].concat(arr));
}

function isVal(val) {
	var t = typeof val;
	return t === "string" || t === "number";
}

function isFunc(val) {
	return typeof val === "function";
}

function isProm(val) {
	return typeof val === "object" && isFunc(val.then);
}



function assignObj(targ) {
	var args = arguments;

	for (var i = 1; i < args.length; i++)
		{ for (var k in args[i])
			{ targ[k] = args[i][k]; } }

	return targ;
}

// export const defProp = Object.defineProperty;

function deepSet(targ, path, val) {
	var seg;

	while (seg = path.shift()) {
		if (path.length === 0)
			{ targ[seg] = val; }
		else
			{ targ[seg] = targ = targ[seg] || {}; }
	}
}

/*
export function deepUnset(targ, path) {
	var seg;

	while (seg = path.shift()) {
		if (path.length === 0)
			targ[seg] = val;
		else
			targ[seg] = targ = targ[seg] || {};
	}
}
*/

function sliceArgs(args, offs) {
	var arr = [];
	for (var i = offs; i < args.length; i++)
		{ arr.push(args[i]); }
	return arr;
}

function cmpObj(a, b) {
	for (var i in a)
		{ if (a[i] !== b[i])
			{ return false; } }

	return true;
}

function cmpArr(a, b) {
	var alen = a.length;

	if (b.length !== alen)
		{ return false; }

	for (var i = 0; i < alen; i++)
		{ if (a[i] !== b[i])
			{ return false; } }

	return true;
}

// https://github.com/darsain/raft
// rAF throttler, aggregates multiple repeated redraw calls within single animframe
function raft(fn) {
	if (!rAF)
		{ return fn; }

	var id, ctx, args;

	function call() {
		id = 0;
		fn.apply(ctx, args);
	}

	return function() {
		ctx = this;
		args = arguments;
		if (!id) { id = rAF(call); }
	};
}

function curry(fn, args, ctx) {
	return function() {
		return fn.apply(ctx, args);
	};
}

/*
export function prop(val, cb, ctx, args) {
	return function(newVal, execCb) {
		if (newVal !== undefined && newVal !== val) {
			val = newVal;
			execCb !== false && isFunc(cb) && cb.apply(ctx, args);
		}

		return val;
	};
}
*/

/*
// adapted from https://github.com/Olical/binary-search
export function binaryKeySearch(list, item) {
    var min = 0;
    var max = list.length - 1;
    var guess;

	var bitwise = (max <= 2147483647) ? true : false;
	if (bitwise) {
		while (min <= max) {
			guess = (min + max) >> 1;
			if (list[guess].key === item) { return guess; }
			else {
				if (list[guess].key < item) { min = guess + 1; }
				else { max = guess - 1; }
			}
		}
	} else {
		while (min <= max) {
			guess = Math.floor((min + max) / 2);
			if (list[guess].key === item) { return guess; }
			else {
				if (list[guess].key < item) { min = guess + 1; }
				else { max = guess - 1; }
			}
		}
	}

    return -1;
}
*/

// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
// impl borrowed from https://github.com/ivijs/ivi
function longestIncreasingSubsequence(a) {
	var p = a.slice();
	var result = [];
	result.push(0);
	var u;
	var v;

	for (var i = 0, il = a.length; i < il; ++i) {
		var j = result[result.length - 1];
		if (a[j] < a[i]) {
			p[i] = j;
			result.push(i);
			continue;
		}

		u = 0;
		v = result.length - 1;

		while (u < v) {
			var c = ((u + v) / 2) | 0;
			if (a[result[c]] < a[i]) {
				u = c + 1;
			} else {
				v = c;
			}
		}

		if (a[i] < a[result[u]]) {
			if (u > 0) {
				p[i] = result[u - 1];
			}
			result[u] = i;
		}
	}

	u = result.length;
	v = result[u - 1];

	while (u-- > 0) {
		result[u] = v;
		v = p[v];
	}

	return result;
}

// based on https://github.com/Olical/binary-search
function binaryFindLarger(item, list) {
	var min = 0;
	var max = list.length - 1;
	var guess;

	var bitwise = (max <= 2147483647) ? true : false;
	if (bitwise) {
		while (min <= max) {
			guess = (min + max) >> 1;
			if (list[guess] === item) { return guess; }
			else {
				if (list[guess] < item) { min = guess + 1; }
				else { max = guess - 1; }
			}
		}
	} else {
		while (min <= max) {
			guess = Math.floor((min + max) / 2);
			if (list[guess] === item) { return guess; }
			else {
				if (list[guess] < item) { min = guess + 1; }
				else { max = guess - 1; }
			}
		}
	}

	return (min == list.length) ? null : min;

//	return -1;
}

function isEvProp(name) {
	return name[0] === "o" && name[1] === "n";
}

function isSplProp(name) {
	return name[0] === "_";
}

function isStyleProp(name) {
	return name === "style";
}

function repaint(node) {
	node && node.el && node.el.offsetHeight;
}

function isHydrated(vm) {
	return vm.node != null && vm.node.el != null;
}

// tests interactive props where real val should be compared
function isDynProp(tag, attr) {
//	switch (tag) {
//		case "input":
//		case "textarea":
//		case "select":
//		case "option":
			switch (attr) {
				case "value":
				case "checked":
				case "selected":
//				case "selectedIndex":
					return true;
			}
//	}

	return false;
}

function getVm(n) {
	n = n || emptyObj;
	while (n.vm == null && n.parent)
		{ n = n.parent; }
	return n.vm;
}

function VNode() {}

var VNodeProto = VNode.prototype = {
	constructor: VNode,

	type:	null,

	vm:		null,

	// all this stuff can just live in attrs (as defined) just have getters here for it
	key:	null,
	ref:	null,
	data:	null,
	hooks:	null,
	ns:		null,

	el:		null,

	tag:	null,
	attrs:	null,
	body:	null,

	flags:	0,

	_class:	null,
	_diff:	null,

	// pending removal on promise resolution
	_dead:	false,
	// part of longest increasing subsequence?
	_lis:	false,

	idx:	null,
	parent:	null,

	/*
	// break out into optional fluent module
	key:	function(val) { this.key	= val; return this; },
	ref:	function(val) { this.ref	= val; return this; },		// deep refs
	data:	function(val) { this.data	= val; return this; },
	hooks:	function(val) { this.hooks	= val; return this; },		// h("div").hooks()
	html:	function(val) { this.html	= true; return this.body(val); },

	body:	function(val) { this.body	= val; return this; },
	*/
};

function defineText(body) {
	var node = new VNode;
	node.type = TEXT;
	node.body = body;
	return node;
}

// creates a one-shot self-ending stream that redraws target vm
// TODO: if it's already registered by any parent vm, then ignore to avoid simultaneous parent & child refresh

var tagCache = {};

var RE_ATTRS = /\[(\w+)(?:=(\w+))?\]/g;

function cssTag(raw) {
	{
		var cached = tagCache[raw];

		if (cached == null) {
			var tag, id, cls, attr;

			tagCache[raw] = cached = {
				tag:	(tag	= raw.match( /^[-\w]+/))		?	tag[0]						: "div",
				id:		(id		= raw.match( /#([-\w]+)/))		? 	id[1]						: null,
				class:	(cls	= raw.match(/\.([-\w.]+)/))		?	cls[1].replace(/\./g, " ")	: null,
				attrs:	null,
			};

			while (attr = RE_ATTRS.exec(raw)) {
				if (cached.attrs == null)
					{ cached.attrs = {}; }
				cached.attrs[attr[1]] = attr[2] || "";
			}
		}

		return cached;
	}
}

// (de)optimization flags

// forces slow bottom-up removeChild to fire deep willRemove/willUnmount hooks,
var DEEP_REMOVE = 1;
// prevents inserting/removing/reordering of children
var FIXED_BODY = 2;
// enables fast keyed lookup of children via binary search, expects homogeneous keyed body
var KEYED_LIST = 4;
// indicates an vnode match/diff/recycler function for body
var LAZY_LIST = 8;

function initElementNode(tag, attrs, body, flags) {
	var node = new VNode;

	node.type = ELEMENT;

	if (isSet(flags))
		{ node.flags = flags; }

	node.attrs = attrs;

	var parsed = cssTag(tag);

	node.tag = parsed.tag;

	// meh, weak assertion, will fail for id=0, etc.
	if (parsed.id || parsed.class || parsed.attrs) {
		var p = node.attrs || {};

		if (parsed.id && !isSet(p.id))
			{ p.id = parsed.id; }

		if (parsed.class) {
			node._class = parsed.class;		// static class
			p.class = parsed.class + (isSet(p.class) ? (" " + p.class) : "");
		}
		if (parsed.attrs) {
			for (var key in parsed.attrs)
				{ if (!isSet(p[key]))
					{ p[key] = parsed.attrs[key]; } }
		}

//		if (node.attrs !== p)
			node.attrs = p;
	}

	var mergedAttrs = node.attrs;

	if (isSet(mergedAttrs)) {
		if (isSet(mergedAttrs._key))
			{ node.key = mergedAttrs._key; }

		if (isSet(mergedAttrs._ref))
			{ node.ref = mergedAttrs._ref; }

		if (isSet(mergedAttrs._hooks))
			{ node.hooks = mergedAttrs._hooks; }

		if (isSet(mergedAttrs._data))
			{ node.data = mergedAttrs._data; }

		if (isSet(mergedAttrs._flags))
			{ node.flags = mergedAttrs._flags; }

		if (!isSet(node.key)) {
			if (isSet(node.ref))
				{ node.key = node.ref; }
			else if (isSet(mergedAttrs.id))
				{ node.key = mergedAttrs.id; }
			else if (isSet(mergedAttrs.name))
				{ node.key = mergedAttrs.name + (mergedAttrs.type === "radio" || mergedAttrs.type === "checkbox" ? mergedAttrs.value : ""); }
		}
	}

	if (body != null)
		{ node.body = body; }

	return node;
}

function setRef(vm, name, node) {
	var path = ["refs"].concat(name.split("."));
	deepSet(vm, path, node);
}

function setDeepRemove(node) {
	while (node = node.parent)
		{ node.flags |= DEEP_REMOVE; }
}

// vnew, vold
function preProc(vnew, parent, idx, ownVm) {
	if (vnew.type === VMODEL || vnew.type === VVIEW)
		{ return; }

	vnew.parent = parent;
	vnew.idx = idx;
	vnew.vm = ownVm;

	if (vnew.ref != null)
		{ setRef(getVm(vnew), vnew.ref, vnew); }

	var nh = vnew.hooks,
		vh = ownVm && ownVm.hooks;

	if (nh && (nh.willRemove || nh.didRemove) ||
		vh && (vh.willUnmount || vh.didUnmount))
		{ setDeepRemove(vnew); }

	if (isArr(vnew.body))
		{ preProcBody(vnew); }
	else {}
}

function preProcBody(vnew) {
	var body = vnew.body;

	for (var i = 0; i < body.length; i++) {
		var node2 = body[i];

		// remove false/null/undefined
		if (node2 === false || node2 == null)
			{ body.splice(i--, 1); }
		// flatten arrays
		else if (isArr(node2)) {
			insertArr(body, node2, i--, 1);
		}
		else {
			if (node2.type == null)
				{ body[i] = node2 = defineText(""+node2); }

			if (node2.type === TEXT) {
				// remove empty text nodes
				if (node2.body == null || node2.body === "")
					{ body.splice(i--, 1); }
				// merge with previous text node
				else if (i > 0 && body[i-1].type === TEXT) {
					body[i-1].body += node2.body;
					body.splice(i--, 1);
				}
				else
					{ preProc(node2, vnew, i, null); }
			}
			else
				{ preProc(node2, vnew, i, null); }
		}
	}
}

var unitlessProps = {
	animationIterationCount: true,
	boxFlex: true,
	boxFlexGroup: true,
	boxOrdinalGroup: true,
	columnCount: true,
	flex: true,
	flexGrow: true,
	flexPositive: true,
	flexShrink: true,
	flexNegative: true,
	flexOrder: true,
	gridRow: true,
	gridColumn: true,
	order: true,
	lineClamp: true,

	borderImageOutset: true,
	borderImageSlice: true,
	borderImageWidth: true,
	fontWeight: true,
	lineHeight: true,
	opacity: true,
	orphans: true,
	tabSize: true,
	widows: true,
	zIndex: true,
	zoom: true,

	fillOpacity: true,
	floodOpacity: true,
	stopOpacity: true,
	strokeDasharray: true,
	strokeDashoffset: true,
	strokeMiterlimit: true,
	strokeOpacity: true,
	strokeWidth: true
};

function autoPx(name, val) {
	{
		// typeof val === 'number' is faster but fails for numeric strings
		return !isNaN(val) && !unitlessProps[name] ? (val + "px") : val;
	}
}

// assumes if styles exist both are objects or both are strings
function patchStyle(n, o) {
	var ns =     (n.attrs || emptyObj).style;
	var os = o ? (o.attrs || emptyObj).style : null;

	// replace or remove in full
	if (ns == null || isVal(ns))
		{ n.el.style.cssText = ns; }
	else {
		for (var nn in ns) {
			var nv = ns[nn];

			if (os == null || nv != null && nv !== os[nn])
				{ n.el.style[nn] = autoPx(nn, nv); }
		}

		// clean old
		if (os) {
			for (var on in os) {
				if (ns[on] == null)
					{ n.el.style[on] = ""; }
			}
		}
	}
}

var didQueue = [];

function fireHook(hooks, name, o, n, immediate) {
	if (hooks != null) {
		var fn = o.hooks[name];

		if (fn) {
			if (name[0] === "d" && name[1] === "i" && name[2] === "d") {	// did*
				//	console.log(name + " should queue till repaint", o, n);
				immediate ? repaint(o.parent) && fn(o, n) : didQueue.push([fn, o, n]);
			}
			else {		// will*
				//	console.log(name + " may delay by promise", o, n);
				return fn(o, n);		// or pass  done() resolver
			}
		}
	}
}

function drainDidHooks(vm) {
	if (didQueue.length) {
		repaint(vm.node);

		var item;
		while (item = didQueue.shift())
			{ item[0](item[1], item[2]); }
	}
}

var doc = ENV_DOM ? document : null;

function closestVNode(el) {
	while (el._node == null)
		{ el = el.parentNode; }
	return el._node;
}

function createElement(tag, ns) {
	if (ns != null)
		{ return doc.createElementNS(ns, tag); }
	return doc.createElement(tag);
}

function createTextNode(body) {
	return doc.createTextNode(body);
}

function createComment(body) {
	return doc.createComment(body);
}

// ? removes if !recycled
function nextSib(sib) {
	return sib.nextSibling;
}

// ? removes if !recycled
function prevSib(sib) {
	return sib.previousSibling;
}

// TODO: this should collect all deep proms from all hooks and return Promise.all()
function deepNotifyRemove(node) {
	var vm = node.vm;

	var wuRes = vm != null && fireHook(vm.hooks, "willUnmount", vm, vm.data);

	var wrRes = fireHook(node.hooks, "willRemove", node);

	if ((node.flags & DEEP_REMOVE) === DEEP_REMOVE && isArr(node.body)) {
		for (var i = 0; i < node.body.length; i++)
			{ deepNotifyRemove(node.body[i]); }
	}

	return wuRes || wrRes;
}

function _removeChild(parEl, el, immediate) {
	var node = el._node, vm = node.vm;

	if (isArr(node.body)) {
		if ((node.flags & DEEP_REMOVE) === DEEP_REMOVE) {
			for (var i = 0; i < node.body.length; i++)
				{ _removeChild(el, node.body[i].el); }
		}
		else
			{ deepUnref(node); }
	}

	delete el._node;

	parEl.removeChild(el);

	fireHook(node.hooks, "didRemove", node, null, immediate);

	if (vm != null) {
		fireHook(vm.hooks, "didUnmount", vm, vm.data, immediate);
		vm.node = null;
	}
}

// todo: should delay parent unmount() by returning res prom?
function removeChild(parEl, el) {
	var node = el._node;

	// already marked for removal
	if (node._dead) { return; }

	var res = deepNotifyRemove(node);

	if (res != null && isProm(res)) {
		node._dead = true;
		res.then(curry(_removeChild, [parEl, el, true]));
	}
	else
		{ _removeChild(parEl, el); }
}

function deepUnref(node) {
	var obody = node.body;

	for (var i = 0; i < obody.length; i++) {
		var o2 = obody[i];
		delete o2.el._node;

		if (o2.vm != null)
			{ o2.vm.node = null; }

		if (isArr(o2.body))
			{ deepUnref(o2); }
	}
}

function clearChildren(parent) {
	var parEl = parent.el;

	if ((parent.flags & DEEP_REMOVE) === 0) {
		isArr(parent.body) && deepUnref(parent);
		parEl.textContent = null;
	}
	else {
		var el = parEl.firstChild;

		do {
			var next = nextSib(el);
			removeChild(parEl, el);
		} while (el = next);
	}
}

// todo: hooks
function insertBefore(parEl, el, refEl) {
	var node = el._node, inDom = el.parentNode != null;

	// el === refEl is asserted as a no-op insert called to fire hooks
	var vm = (el === refEl || !inDom) ? node.vm : null;

	if (vm != null)
		{ fireHook(vm.hooks, "willMount", vm, vm.data); }

	fireHook(node.hooks, inDom ? "willReinsert" : "willInsert", node);
	parEl.insertBefore(el, refEl);
	fireHook(node.hooks, inDom ? "didReinsert" : "didInsert", node);

	if (vm != null)
		{ fireHook(vm.hooks, "didMount", vm, vm.data); }
}

function insertAfter(parEl, el, refEl) {
	insertBefore(parEl, el, refEl ? nextSib(refEl) : null);
}

var onemit = {};

function emitCfg(cfg) {
	assignObj(onemit, cfg);
}

function emit(evName) {
	var targ = this,
		src = targ;

	var args = sliceArgs(arguments, 1).concat(src, src.data);

	do {
		var evs = targ.onemit;
		var fn = evs ? evs[evName] : null;

		if (fn) {
			fn.apply(targ, args);
			break;
		}
	} while (targ = targ.parent());

	if (onemit[evName])
		{ onemit[evName].apply(targ, args); }
}

var onevent = noop;

function config(newCfg) {
	onevent = newCfg.onevent || onevent;

	{
		if (newCfg.onemit)
			{ emitCfg(newCfg.onemit); }
	}

	
}

function bindEv(el, type, fn) {
	el[type] = fn;
}

function exec(fn, args, e, node, vm) {
	var out = fn.apply(vm, args.concat([e, node, vm, vm.data]));

	// should these respect out === false?
	vm.onevent(e, node, vm, vm.data, args);
	onevent.call(null, e, node, vm, vm.data, args);

	if (out === false) {
		e.preventDefault();
		e.stopPropagation();
	}
}

function handle(e) {
	var node = closestVNode(e.target);
	var vm = getVm(node);

	var evDef = e.currentTarget._node.attrs["on" + e.type], fn, args;

	if (isArr(evDef)) {
		fn = evDef[0];
		args = evDef.slice(1);
		exec(fn, args, e, node, vm);
	}
	else {
		for (var sel in evDef) {
			if (e.target.matches(sel)) {
				var evDef2 = evDef[sel];

				if (isArr(evDef2)) {
					fn = evDef2[0];
					args = evDef2.slice(1);
				}
				else {
					fn = evDef2;
					args = [];
				}

				exec(fn, args, e, node, vm);
			}
		}
	}
}

function patchEvent(node, name, nval, oval) {
	if (nval === oval)
		{ return; }

	var el = node.el;

	if (nval == null || isFunc(nval))
		{ bindEv(el, name, nval); }
	else if (oval == null)
		{ bindEv(el, name, handle); }
}

function remAttr(node, name, asProp) {
	if (name[0] === ".") {
		name = name.substr(1);
		asProp = true;
	}

	if (asProp)
		{ node.el[name] = ""; }
	else
		{ node.el.removeAttribute(name); }
}

// setAttr
// diff, ".", "on*", bool vals, skip _*, value/checked/selected selectedIndex
function setAttr(node, name, val, asProp, initial) {
	var el = node.el;

	if (val == null)
		{ !initial && remAttr(node, name, false); }		// will also removeAttr of style: null
	else if (node.ns != null)
		{ el.setAttribute(name, val); }
	else if (name === "class")
		{ el.className = val; }
	else if (name === "id" || typeof val === "boolean" || asProp)
		{ el[name] = val; }
	else if (name[0] === ".")
		{ el[name.substr(1)] = val; }
	else
		{ el.setAttribute(name, val); }
}

function patchAttrs(vnode, donor, initial) {
	var nattrs = vnode.attrs || emptyObj;
	var oattrs = donor.attrs || emptyObj;

	if (nattrs === oattrs) {
		
	}
	else {
		for (var key in nattrs) {
			var nval = nattrs[key];
			var isDyn = isDynProp(vnode.tag, key);
			var oval = isDyn ? vnode.el[key] : oattrs[key];

			if (nval === oval) {}
			else if (isStyleProp(key))
				{ patchStyle(vnode, donor); }
			else if (isSplProp(key)) {}
			else if (isEvProp(key))
				{ patchEvent(vnode, key, nval, oval); }
			else
				{ setAttr(vnode, key, nval, isDyn, initial); }
		}

		// TODO: bench style.cssText = "" vs removeAttribute("style")
		for (var key in oattrs) {
			!(key in nattrs) &&
			!isSplProp(key) &&
			remAttr(vnode, key, isDynProp(vnode.tag, key) || isEvProp(key));
		}
	}
}

function createView(view, data, key, opts) {
	if (view.type === VVIEW) {
		data	= view.data;
		key		= view.key;
		opts	= view.opts;
		view	= view.view;
	}

	return new ViewModel(view, data, key, opts);
}

//import { XML_NS, XLINK_NS } from './defineSvgElement';
function hydrateBody(vnode) {
	for (var i = 0; i < vnode.body.length; i++) {
		var vnode2 = vnode.body[i];
		var type2 = vnode2.type;

		// ELEMENT,TEXT,COMMENT
		if (type2 <= COMMENT)
			{ insertBefore(vnode.el, hydrate(vnode2)); }		// vnode.el.appendChild(hydrate(vnode2))
		else if (type2 === VVIEW) {
			var vm = createView(vnode2.view, vnode2.data, vnode2.key, vnode2.opts)._redraw(vnode, i, false);		// todo: handle new data updates
			type2 = vm.node.type;
			insertBefore(vnode.el, hydrate(vm.node));
		}
		else if (type2 === VMODEL) {
			var vm = vnode2.vm;
			vm._redraw(vnode, i);					// , false
			type2 = vm.node.type;
			insertBefore(vnode.el, vm.node.el);		// , hydrate(vm.node)
		}
	}
}

//  TODO: DRY this out. reusing normal patch here negatively affects V8's JIT
function hydrate(vnode, withEl) {
	if (vnode.el == null) {
		if (vnode.type === ELEMENT) {
			vnode.el = withEl || createElement(vnode.tag, vnode.ns);

		//	if (vnode.tag === "svg")
		//		vnode.el.setAttributeNS(XML_NS, 'xmlns:xlink', XLINK_NS);

			if (vnode.attrs != null)
				{ patchAttrs(vnode, emptyObj, true); }

			if ((vnode.flags & LAZY_LIST) === LAZY_LIST)	// vnode.body instanceof LazyList
				{ vnode.body.body(vnode); }

			if (isArr(vnode.body))
				{ hydrateBody(vnode); }
			else if (vnode.body != null && vnode.body !== "")
				{ vnode.el.textContent = vnode.body; }
		}
		else if (vnode.type === TEXT)
			{ vnode.el = withEl || createTextNode(vnode.body); }
		else if (vnode.type === COMMENT)
			{ vnode.el = withEl || createComment(vnode.body); }
	}

	vnode.el._node = vnode;

	return vnode.el;
}

// prevent GCC from inlining some large funcs (which negatively affects Chrome's JIT)
//window.syncChildren = syncChildren;
window.lisMove = lisMove;

function nextNode(node, body) {
	return body[node.idx + 1];
}

function prevNode(node, body) {
	return body[node.idx - 1];
}

function parentNode(node) {
	return node.parent;
}

var BREAK = 1;
var BREAK_ALL = 2;

function syncDir(advSib, advNode, insert, sibName, nodeName, invSibName, invNodeName, invInsert) {
	return function(node, parEl, body, state, convTest, lis) {
		var sibNode, tmpSib;

		if (state[sibName] != null) {
			// skip dom elements not created by domvm
			if ((sibNode = state[sibName]._node) == null) {
				state[sibName] = advSib(state[sibName]);
				return;
			}

			if (parentNode(sibNode) !== node) {
				tmpSib = advSib(state[sibName]);
				sibNode.vm != null ? sibNode.vm.unmount(true) : removeChild(parEl, state[sibName]);
				state[sibName] = tmpSib;
				return;
			}
		}

		if (state[nodeName] == convTest)
			{ return BREAK_ALL; }
		else if (state[nodeName].el == null) {
			insert(parEl, hydrate(state[nodeName]), state[sibName]);	// should lis be updated here?
			state[nodeName] = advNode(state[nodeName], body);		// also need to advance sib?
		}
		else if (state[nodeName].el === state[sibName]) {
			state[nodeName] = advNode(state[nodeName], body);
			state[sibName] = advSib(state[sibName]);
		}
		// head->tail or tail->head
		else if (!lis && sibNode === state[invNodeName]) {
			tmpSib = state[sibName];
			state[sibName] = advSib(tmpSib);
			invInsert(parEl, tmpSib, state[invSibName]);
			state[invSibName] = tmpSib;
		}
		else {
			if (lis && state[sibName] != null)
				{ return lisMove(advSib, advNode, insert, sibName, nodeName, parEl, body, sibNode, state); }

			return BREAK;
		}
	};
}

function lisMove(advSib, advNode, insert, sibName, nodeName, parEl, body, sibNode, state) {
	if (sibNode._lis) {
		insert(parEl, state[nodeName].el, state[sibName]);
		state[nodeName] = advNode(state[nodeName], body);
	}
	else {
		// find closest tomb
		var t = binaryFindLarger(sibNode.idx, state.tombs);
		sibNode._lis = true;
		var tmpSib = advSib(state[sibName]);
		insert(parEl, state[sibName], t != null ? body[state.tombs[t]].el : t);

		if (t == null)
			{ state.tombs.push(sibNode.idx); }
		else
			{ state.tombs.splice(t, 0, sibNode.idx); }

		state[sibName] = tmpSib;
	}
}

var syncLft = syncDir(nextSib, nextNode, insertBefore, "lftSib", "lftNode", "rgtSib", "rgtNode", insertAfter);
var syncRgt = syncDir(prevSib, prevNode, insertAfter, "rgtSib", "rgtNode", "lftSib", "lftNode", insertBefore);

function syncChildren(node, donor) {
	var obody	= donor.body,
		parEl	= node.el,
		body	= node.body,
		state = {
			lftNode:	body[0],
			rgtNode:	body[body.length - 1],
			lftSib:		((obody)[0] || emptyObj).el,
			rgtSib:		(obody[obody.length - 1] || emptyObj).el,
		};

	converge:
	while (1) {
//		from_left:
		while (1) {
			var l = syncLft(node, parEl, body, state, null, false);
			if (l === BREAK) { break; }
			if (l === BREAK_ALL) { break converge; }
		}

//		from_right:
		while (1) {
			var r = syncRgt(node, parEl, body, state, state.lftNode, false);
			if (r === BREAK) { break; }
			if (r === BREAK_ALL) { break converge; }
		}

		sortDOM(node, parEl, body, state);
		break;
	}
}

// TODO: also use the state.rgtSib and state.rgtNode bounds, plus reduce LIS range
function sortDOM(node, parEl, body, state) {
	var kids = Array.prototype.slice.call(parEl.childNodes);
	var domIdxs = [];

	for (var k = 0; k < kids.length; k++) {
		var n = kids[k]._node;

		if (n.parent === node)
			{ domIdxs.push(n.idx); }
	}

	// list of non-movable vnode indices (already in correct order in old dom)
	var tombs = longestIncreasingSubsequence(domIdxs).map(function (i) { return domIdxs[i]; });

	for (var i = 0; i < tombs.length; i++)
		{ body[tombs[i]]._lis = true; }

	state.tombs = tombs;

	while (1) {
		var r = syncLft(node, parEl, body, state, null, true);
		if (r === BREAK_ALL) { break; }
	}
}

function alreadyAdopted(vnode) {
	return vnode.el._node.parent !== vnode.parent;
}

function takeSeqIndex(n, obody, fromIdx) {
	return obody[fromIdx];
}

function findSeqThorough(n, obody, fromIdx) {		// pre-tested isView?
	for (; fromIdx < obody.length; fromIdx++) {
		var o = obody[fromIdx];

		if (o.vm != null) {
			// match by key & viewFn || vm
			if (n.type === VVIEW && o.vm.view === n.view && o.vm.key === n.key || n.type === VMODEL && o.vm === n.vm)
				{ return o; }
		}
		else if (!alreadyAdopted(o) && n.tag === o.tag && n.type === o.type && n.key === o.key && (n.flags & ~DEEP_REMOVE) === (o.flags & ~DEEP_REMOVE))
			{ return o; }
	}

	return null;
}

function findHashKeyed(n, obody, fromIdx) {
	return obody[obody._keys[n.key]];
}

/*
// list must be a sorted list of vnodes by key
function findBinKeyed(n, list) {
	var idx = binaryKeySearch(list, n.key);
	return idx > -1 ? list[idx] : null;
}
*/

// have it handle initial hydrate? !donor?
// types (and tags if ELEM) are assumed the same, and donor exists
function patch(vnode, donor) {
	fireHook(donor.hooks, "willRecycle", donor, vnode);

	var el = vnode.el = donor.el;

	var obody = donor.body;
	var nbody = vnode.body;

	el._node = vnode;

	// "" => ""
	if (vnode.type === TEXT && nbody !== obody) {
		el.nodeValue = nbody;
		return;
	}

	if (vnode.attrs != null || donor.attrs != null)
		{ patchAttrs(vnode, donor, false); }

	// patch events

	var oldIsArr = isArr(obody);
	var newIsArr = isArr(nbody);
	var lazyList = (vnode.flags & LAZY_LIST) === LAZY_LIST;

//	var nonEqNewBody = nbody != null && nbody !== obody;

	if (oldIsArr) {
		// [] => []
		if (newIsArr || lazyList)
			{ patchChildren(vnode, donor); }
		// [] => "" | null
		else if (nbody !== obody) {
			if (nbody != null)
				{ el.textContent = nbody; }
			else
				{ clearChildren(donor); }
		}
	}
	else {
		// "" | null => []
		if (newIsArr) {
			clearChildren(donor);
			hydrateBody(vnode);
		}
		// "" | null => "" | null
		else if (nbody !== obody) {
			if (el.firstChild)
				{ el.firstChild.nodeValue = nbody; }
			else
				{ el.textContent = nbody; }
		}
	}

	fireHook(donor.hooks, "didRecycle", donor, vnode);
}

// larger qtys of KEYED_LIST children will use binary search
//const SEQ_FAILS_MAX = 100;

// TODO: modify vtree matcher to work similar to dom reconciler for keyed from left -> from right -> head/tail -> binary
// fall back to binary if after failing nri - nli > SEQ_FAILS_MAX
// while-advance non-keyed fromIdx
// [] => []
function patchChildren(vnode, donor) {
	var nbody		= vnode.body,
		nlen		= nbody.length,
		obody		= donor.body,
		olen		= obody.length,
		isLazy		= (vnode.flags & LAZY_LIST) === LAZY_LIST,
		isFixed		= (vnode.flags & FIXED_BODY) === FIXED_BODY,
		isKeyed		= (vnode.flags & KEYED_LIST) === KEYED_LIST,
		domSync		= !isFixed && vnode.type === ELEMENT,
		doFind		= true,
		find		= (
			isKeyed ? findHashKeyed :				// keyed lists/lazyLists
			isFixed || isLazy ? takeSeqIndex :		// unkeyed lazyLists and FIXED_BODY
			findSeqThorough							// more complex stuff
		);

	if (isKeyed) {
		var keys = {};
		for (var i = 0; i < obody.length; i++)
			{ keys[obody[i].key] = i; }
		obody._keys = keys;
	}

	if (domSync && nlen === 0) {
		clearChildren(donor);
		if (isLazy)
			{ vnode.body = []; }	// nbody.tpl(all);
		return;
	}

	var donor2,
		node2,
		foundIdx,
		patched = 0,
		everNonseq = false,
		fromIdx = 0;		// first unrecycled node (search head)

	if (isLazy) {
		var fnode2 = {key: null};
		var nbodyNew = Array(nlen);
	}

	for (var i = 0; i < nlen; i++) {
		if (isLazy) {
			var remake = false;
			var diffRes = null;

			if (doFind) {
				if (isKeyed)
					{ fnode2.key = nbody.key(i); }

				donor2 = find(fnode2, obody, fromIdx);
			}

			if (donor2 != null) {
                foundIdx = donor2.idx;
				diffRes = nbody.diff(i, donor2);

				// diff returns same, so cheaply adopt vnode without patching
				if (diffRes === true) {
					node2 = donor2;
					node2.parent = vnode;
					node2.idx = i;
					node2._lis = false;
				}
				// diff returns new diffVals, so generate new vnode & patch
				else
					{ remake = true; }
			}
			else
				{ remake = true; }

			if (remake) {
				node2 = nbody.tpl(i);			// what if this is a VVIEW, VMODEL, injected element?
				preProc(node2, vnode, i);

				node2._diff = diffRes != null ? diffRes : nbody.diff(i);

				if (donor2 != null)
					{ patch(node2, donor2); }
			}
			else {
				// TODO: flag tmp FIXED_BODY on unchanged nodes?

				// domSync = true;		if any idx changes or new nodes added/removed
			}

			nbodyNew[i] = node2;
		}
		else {
			var node2 = nbody[i];
			var type2 = node2.type;

			// ELEMENT,TEXT,COMMENT
			if (type2 <= COMMENT) {
				if (donor2 = doFind && find(node2, obody, fromIdx)) {
					patch(node2, donor2);
					foundIdx = donor2.idx;
				}
			}
			else if (type2 === VVIEW) {
				if (donor2 = doFind && find(node2, obody, fromIdx)) {		// update/moveTo
					foundIdx = donor2.idx;
					var vm = donor2.vm._update(node2.data, vnode, i);		// withDOM
				}
				else
					{ var vm = createView(node2.view, node2.data, node2.key, node2.opts)._redraw(vnode, i, false); }	// createView, no dom (will be handled by sync below)

				type2 = vm.node.type;
			}
			else if (type2 === VMODEL) {
				// if the injected vm has never been rendered, this vm._update() serves as the
				// initial vtree creator, but must avoid hydrating (creating .el) because syncChildren()
				// which is responsible for mounting below (and optionally hydrating), tests .el presence
				// to determine if hydration & mounting are needed
				var withDOM = isHydrated(node2.vm);

				var vm = node2.vm._update(node2.data, vnode, i, withDOM);
				type2 = vm.node.type;
			}
		}

		// found donor & during a sequential search ...at search head
		if (!isKeyed && donor2 != null) {
			if (foundIdx === fromIdx) {
				// advance head
				fromIdx++;
				// if all old vnodes adopted and more exist, stop searching
				if (fromIdx === olen && nlen > olen) {
					// short-circuit find, allow loop just create/init rest
					donor2 = null;
					doFind = false;
				}
			}
			else
				{ everNonseq = true; }

			if (olen > 100 && everNonseq && ++patched % 10 === 0)
				{ while (fromIdx < olen && alreadyAdopted(obody[fromIdx]))
					{ fromIdx++; } }
		}
	}

	// replace List w/ new body
	if (isLazy)
		{ vnode.body = nbodyNew; }

	domSync && syncChildren(vnode, donor);
}

// view + key serve as the vm's unique identity
function ViewModel(view, data, key, opts) {
	var vm = this;

	vm.view = view;
	vm.data = data;
	vm.key = key;

	if (opts) {
		vm.opts = opts;
		vm.config(opts);
	}

	var out = isPlainObj(view) ? view : view.call(vm, vm, data, key, opts);

	if (isFunc(out))
		{ vm.render = out; }
	else {
		vm.render = out.render;
		vm.config(out);
	}

	// these must be wrapped here since they're debounced per view
	vm._redrawAsync = raft(function (_) { return vm.redraw(true); });
	vm._updateAsync = raft(function (newData) { return vm.update(newData, true); });

	vm.init && vm.init.call(vm, vm, vm.data, vm.key, opts);
}

var ViewModelProto = ViewModel.prototype = {
	constructor: ViewModel,

	_diff:	null,	// diff cache

	init:	null,
	view:	null,
	key:	null,
	data:	null,
	state:	null,
	api:	null,
	opts:	null,
	node:	null,
	hooks:	null,
	onevent: noop,
	refs:	null,
	render:	null,

	mount: mount,
	unmount: unmount,
	config: function(opts) {
		var t = this;

		if (opts.init)
			{ t.init = opts.init; }
		if (opts.diff)
			{ t.diff = opts.diff; }
		if (opts.onevent)
			{ t.onevent = opts.onevent; }

		// maybe invert assignment order?
		if (opts.hooks)
			{ t.hooks = assignObj(t.hooks || {}, opts.hooks); }

		{
			if (opts.onemit)
				{ t.onemit = assignObj(t.onemit || {}, opts.onemit); }
		}
	},
	parent: function() {
		return getVm(this.node.parent);
	},
	root: function() {
		var p = this.node;

		while (p.parent)
			{ p = p.parent; }

		return p.vm;
	},
	redraw: function(sync) {
		var vm = this;
		sync ? vm._redraw(null, null, isHydrated(vm)) : vm._redrawAsync();
		return vm;
	},
	update: function(newData, sync) {
		var vm = this;
		sync ? vm._update(newData, null, null, isHydrated(vm)) : vm._updateAsync(newData);
		return vm;
	},

	_update: updateSync,
	_redraw: redrawSync,
	_redrawAsync: null,
	_updateAsync: null,
};

function mount(el, isRoot) {
	var vm = this;

	if (isRoot) {
		clearChildren({el: el, flags: 0});

		vm._redraw(null, null, false);

		// if placeholder node doesnt match root tag
		if (el.nodeName.toLowerCase() !== vm.node.tag) {
			hydrate(vm.node);
			insertBefore(el.parentNode, vm.node.el, el);
			el.parentNode.removeChild(el);
		}
		else
			{ insertBefore(el.parentNode, hydrate(vm.node, el), el); }
	}
	else {
		vm._redraw(null, null);

		if (el)
			{ insertBefore(el, vm.node.el); }
	}

	if (el)
		{ drainDidHooks(vm); }

	return vm;
}

// asSub means this was called from a sub-routine, so don't drain did* hook queue
function unmount(asSub) {
	var vm = this;

	var node = vm.node;
	var parEl = node.el.parentNode;

	// edge bug: this could also be willRemove promise-delayed; should .then() or something to make sure hooks fire in order
	removeChild(parEl, node.el);

	if (!asSub)
		{ drainDidHooks(vm); }
}

function reParent(vm, vold, newParent, newIdx) {
	if (newParent != null) {
		newParent.body[newIdx] = vold;
		vold.idx = newIdx;
		vold.parent = newParent;
		vold._lis = false;
	}
	return vm;
}

function redrawSync(newParent, newIdx, withDOM) {
	var isRedrawRoot = newParent == null;
	var vm = this;
	var isMounted = vm.node && vm.node.el && vm.node.el.parentNode;

	var vold = vm.node, oldDiff, newDiff;

	if (vm.diff != null) {
		oldDiff = vm._diff;
		vm._diff = newDiff = vm.diff(vm, vm.data);

		if (vold != null) {
			var cmpFn = isArr(oldDiff) ? cmpArr : cmpObj;
			var isSame = oldDiff === newDiff || cmpFn(oldDiff, newDiff);

			if (isSame)
				{ return reParent(vm, vold, newParent, newIdx); }
		}
	}

	isMounted && fireHook(vm.hooks, "willRedraw", vm, vm.data);

	var vnew = vm.render.call(vm, vm, vm.data, oldDiff, newDiff);

	if (vnew === vold)
		{ return reParent(vm, vold, newParent, newIdx); }

	// todo: test result of willRedraw hooks before clearing refs
	vm.refs = null;

	// always assign vm key to root vnode (this is a de-opt)
	if (vm.key != null && vnew.key !== vm.key)
		{ vnew.key = vm.key; }

	vm.node = vnew;

	if (newParent) {
		preProc(vnew, newParent, newIdx, vm);
		newParent.body[newIdx] = vnew;
	}
	else if (vold && vold.parent) {
		preProc(vnew, vold.parent, vold.idx, vm);
		vold.parent.body[vold.idx] = vnew;
	}
	else
		{ preProc(vnew, null, null, vm); }

	if (withDOM !== false) {
		if (vold) {
			// root node replacement
			if (vold.tag !== vnew.tag || vold.key !== vnew.key) {
				// hack to prevent the replacement from triggering mount/unmount
				vold.vm = vnew.vm = null;

				var parEl = vold.el.parentNode;
				var refEl = nextSib(vold.el);
				removeChild(parEl, vold.el);
				insertBefore(parEl, hydrate(vnew), refEl);

				// another hack that allows any higher-level syncChildren to set
				// reconciliation bounds using a live node
				vold.el = vnew.el;

				// restore
				vnew.vm = vm;
			}
			else
				{ patch(vnew, vold); }
		}
		else
			{ hydrate(vnew); }
	}

	isMounted && fireHook(vm.hooks, "didRedraw", vm, vm.data);

	if (isRedrawRoot && isMounted)
		{ drainDidHooks(vm); }

	return vm;
}

// this also doubles as moveTo
// TODO? @withRedraw (prevent redraw from firing)
function updateSync(newData, newParent, newIdx, withDOM) {
	var vm = this;

	if (newData != null) {
		if (vm.data !== newData) {
			fireHook(vm.hooks, "willUpdate", vm, newData);
			vm.data = newData;

			
		}
	}

	return vm._redraw(newParent, newIdx, withDOM);
}

function defineElement(tag, arg1, arg2, flags) {
	var attrs, body;

	if (arg2 == null) {
		if (isPlainObj(arg1))
			{ attrs = arg1; }
		else
			{ body = arg1; }
	}
	else {
		attrs = arg1;
		body = arg2;
	}

	return initElementNode(tag, attrs, body, flags);
}

//export const XML_NS = "http://www.w3.org/2000/xmlns/";
var SVG_NS = "http://www.w3.org/2000/svg";

function defineSvgElement(tag, arg1, arg2, flags) {
	var n = defineElement(tag, arg1, arg2, flags);
	n.ns = SVG_NS;
	return n;
}

function defineComment(body) {
	var node = new VNode;
	node.type = COMMENT;
	node.body = body;
	return node;
}

// placeholder for declared views
function VView(view, data, key, opts) {
	this.view = view;
	this.data = data;
	this.key = key;
	this.opts = opts;
}

VView.prototype = {
	constructor: VView,

	type: VVIEW,
	view: null,
	data: null,
	key: null,
	opts: null,
};

function defineView(view, data, key, opts) {
	return new VView(view, data, key, opts);
}

// placeholder for injected ViewModels
function VModel(vm) {
	this.vm = vm;
}

VModel.prototype = {
	constructor: VModel,

	type: VMODEL,
	vm: null,
};

function injectView(vm) {
//	if (vm.node == null)
//		vm._redraw(null, null, false);

//	return vm.node;

	return new VModel(vm);
}

function injectElement(el) {
	var node = new VNode;
	node.type = ELEMENT;
	node.el = node.key = el;
	return node;
}

function lazyList(items, cfg) {
	var len = items.length;

	var self = {
		items: items,
		length: len,
		// defaults to returning item identity (or position?)
		key: function(i) {
			return cfg.key(items[i], i);
		},
		// default returns 0?
		diff: function(i, donor) {
			var newVals = cfg.diff(items[i], i);
			if (donor == null)
				{ return newVals; }
			var oldVals = donor._diff;
			var same = newVals === oldVals || isArr(oldVals) ? cmpArr(newVals, oldVals) : cmpObj(newVals, oldVals);
			return same || newVals;
		},
		tpl: function(i) {
			return cfg.tpl(items[i], i);
		},
		map: function(tpl) {
			cfg.tpl = tpl;
			return self;
		},
		body: function(vnode) {
			var nbody = Array(len);

			for (var i = 0; i < len; i++) {
				var vnode2 = self.tpl(i);

			//	if ((vnode.flags & KEYED_LIST) === KEYED_LIST && self. != null)
			//		vnode2.key = getKey(item);

				vnode2._diff = self.diff(i);			// holds oldVals for cmp

				nbody[i] = vnode2;

				// run preproc pass (should this be just preProc in above loop?) bench
				preProc(vnode2, vnode, i);
			}

			// replace List with generated body
			vnode.body = nbody;
		}
	};

	return self;
}

var nano = {
	config: config,

	ViewModel: ViewModel,
	VNode: VNode,

	createView: createView,

	defineElement: defineElement,
	defineSvgElement: defineSvgElement,
	defineText: defineText,
	defineComment: defineComment,
	defineView: defineView,

	injectView: injectView,
	injectElement: injectElement,

	lazyList: lazyList,

	FIXED_BODY: FIXED_BODY,
	DEEP_REMOVE: DEEP_REMOVE,
	KEYED_LIST: KEYED_LIST,
	LAZY_LIST: LAZY_LIST,
};

function protoPatch(n, doRepaint) {
	patch$1(this, n, doRepaint);
}

// newNode can be either {class: style: } or full new VNode
// will/didPatch hooks?
function patch$1(o, n, doRepaint) {
	if (n.type != null) {
		// no full patching of view roots, just use redraw!
		if (o.vm != null)
			{ return; }

		preProc(n, o.parent, o.idx, null);
		o.parent.body[o.idx] = n;
		patch(n, o);
		doRepaint && repaint(n);
		drainDidHooks(getVm(n));
	}
	else {
		// TODO: re-establish refs

		// shallow-clone target
		var donor = Object.create(o);
		// fixate orig attrs
		donor.attrs = assignObj({}, o.attrs);
		// assign new attrs into live targ node
		var oattrs = assignObj(o.attrs, n);
		// prepend any fixed shorthand class
		if (o._class != null) {
			var aclass = oattrs.class;
			oattrs.class = aclass != null && aclass !== "" ? o._class + " " + aclass : o._class;
		}

		patchAttrs(o, donor);

		doRepaint && repaint(o);
	}
}

VNodeProto.patch = protoPatch;

function nextSubVms(n, accum) {
	var body = n.body;

	if (isArr(body)) {
		for (var i = 0; i < body.length; i++) {
			var n2 = body[i];

			if (n2.vm != null)
				{ accum.push(n2.vm); }
			else
				{ nextSubVms(n2, accum); }
		}
	}

	return accum;
}

function defineElementSpread(tag) {
	var args = arguments;
	var len = args.length;
	var body, attrs;

	if (len > 1) {
		var bodyIdx = 1;

		if (isPlainObj(args[1])) {
			attrs = args[1];
			bodyIdx = 2;
		}

		if (len === bodyIdx + 1 && (isVal(args[bodyIdx]) || isArr(args[bodyIdx]) || attrs && (attrs._flags & LAZY_LIST) === LAZY_LIST))
			{ body = args[bodyIdx]; }
		else
			{ body = sliceArgs(args, bodyIdx); }
	}

	return initElementNode(tag, attrs, body);
}

function defineSvgElementSpread() {
	var n = defineElementSpread.apply(null, arguments);
	n.ns = SVG_NS;
	return n;
}

ViewModelProto.emit = emit;
ViewModelProto.onemit = null;

ViewModelProto.body = function() {
	return nextSubVms(this.node, []);
};

nano.defineElementSpread = defineElementSpread;
nano.defineSvgElementSpread = defineSvgElementSpread;

return nano;

})));
//# sourceMappingURL=domvm.micro.js.map


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
var core_1 = __webpack_require__(0);
var helpers_1 = __webpack_require__(10);
var types_1 = __webpack_require__(9);
var core_2 = __webpack_require__(0);
var Loader = /** @class */ (function () {
    function Loader(parent, changes) {
        this._parent = parent;
        this._changes = changes; // todo: [dirty] mutation
    }
    Loader.prototype.load = function (url, driver) {
        var _this = this;
        // TODO: change way for checking lazyLoad
        if (url.config && !this._parent.events.fire(types_1.DataEvents.beforeLazyLoad, [])) {
            return;
        }
        return (this._parent.loadData = url
            .load()
            .then(function (data) {
            if (data) {
                return _this.parse(data, driver);
            }
            else {
                return [];
            }
        })
            .catch(function (error) {
            _this._parent.events.fire(types_1.DataEvents.loadError, [error]);
        }));
    };
    Loader.prototype.parse = function (data, driver) {
        var _this = this;
        if (driver === void 0) { driver = types_1.DataDriver.json; }
        if (driver === "json" && !(0, helpers_1.hasJsonOrArrayStructure)(data)) {
            this._parent.events.fire(types_1.DataEvents.loadError, ["Uncaught SyntaxError: Unexpected end of input"]);
        }
        driver = (0, helpers_1.toDataDriver)(driver);
        data = driver.toJsonArray(data);
        if (!(data instanceof Array)) {
            var totalCount = data.total_count - 1;
            var from_1 = data.from;
            data = data.data;
            if (this._parent.getLength() === 0) {
                var newData = [];
                for (var i = 0, j = 0; i <= totalCount; i++) {
                    if (i >= from_1 && i <= from_1 + data.length - 1) {
                        newData.push(data[j]);
                        j++;
                    }
                    else {
                        newData.push({ $empty: true });
                    }
                }
                data = newData;
            }
            else {
                data.forEach(function (newItem, i) {
                    var index = from_1 + i;
                    var oldId = _this._parent.getId(index);
                    if ((0, core_1.isId)(oldId)) {
                        var emptyItem = _this._parent.getItem(oldId);
                        if (emptyItem && emptyItem.$empty) {
                            var id = newItem.id || emptyItem.id;
                            if ((0, core_2.isDefined)(newItem.id)) {
                                _this._parent.changeId(oldId, id, true);
                            }
                            _this._parent.update(id, __assign(__assign({}, newItem), { $empty: undefined }), true);
                        }
                    }
                    else {
                        (0, helpers_1.dhxWarning)("item not found");
                    }
                });
                this._parent.events.fire(types_1.DataEvents.afterLazyLoad, [from_1, data.length]);
                this._parent.events.fire(types_1.DataEvents.change);
                return data;
            }
        }
        if (this._parent.getInitialData()) {
            this._parent.removeAll();
        }
        this._parent.$parse(data);
        return data;
    };
    Loader.prototype.save = function (url) {
        var _this = this;
        var uniqueChanges = this._getUniqueOrder();
        var _loop_1 = function (el) {
            if (el.saving || el.pending) {
                (0, helpers_1.dhxWarning)("item is saving");
            }
            else {
                var prevEl_1 = this_1._findPrevState(el.id);
                if (prevEl_1 && prevEl_1.saving) {
                    var pending = new Promise(function (res, rej) {
                        prevEl_1.promise
                            .then(function () {
                            el.pending = false;
                            res(_this._setPromise(el, url));
                        })
                            .catch(function (err) {
                            _this._removeFromOrder(prevEl_1);
                            _this._setPromise(el, url);
                            (0, helpers_1.dhxWarning)(err);
                            rej(err);
                        });
                    });
                    this_1._addToChain(pending);
                    el.pending = true;
                }
                else {
                    this_1._setPromise(el, url);
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, uniqueChanges_1 = uniqueChanges; _i < uniqueChanges_1.length; _i++) {
            var el = uniqueChanges_1[_i];
            _loop_1(el);
        }
        if (uniqueChanges.length) {
            this._parent.saveData.then(function () {
                _this._saving = false;
            });
        }
    };
    Loader.prototype.updateChanges = function (changes) {
        this._changes = changes;
    };
    Loader.prototype._setPromise = function (el, url) {
        var _this = this;
        var status;
        switch (el.status) {
            case "remove":
                status = "delete";
                break;
            case "add":
                status = "insert";
                break;
            default:
                status = el.status;
                break;
        }
        el.promise = url.save(el.obj, status);
        el.promise
            .then(function () {
            _this._removeFromOrder(el);
        })
            .catch(function (err) {
            el.saving = false;
            el.error = true;
            (0, helpers_1.dhxError)(err);
        });
        el.saving = true;
        this._saving = true;
        this._addToChain(el.promise);
        return el.promise;
    };
    Loader.prototype._addToChain = function (promise) {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        if (this._parent.saveData && this._saving) {
            this._parent.saveData = this._parent.saveData.then(function () { return promise; });
        }
        else {
            this._parent.saveData = promise;
        }
    };
    Loader.prototype._findPrevState = function (id) {
        for (var _i = 0, _a = this._changes.order; _i < _a.length; _i++) {
            var el = _a[_i];
            if (el.id === id) {
                return el;
            }
        }
        return null;
    };
    Loader.prototype._removeFromOrder = function (el) {
        this._changes.order = this._changes.order.filter(function (item) { return !(0, helpers_1.isEqualObj)(item, el); });
    };
    Loader.prototype._getUniqueOrder = function () {
        return this._changes.order.reduce(function (unique, el) {
            var ind = unique.findIndex(function (item) { return item.id === el.id; });
            var involvedElem = ind > -1 ? unique[ind] : null;
            if (involvedElem && involvedElem.saving === false && involvedElem.status === "add") {
                if (el.status === "remove") {
                    unique.splice(ind, 1);
                }
                else {
                    involvedElem.obj = el.obj;
                }
            }
            else if (involvedElem && involvedElem.saving === false && involvedElem.status === "update") {
                unique.splice(ind, 1, el);
            }
            else {
                unique.push(el);
            }
            return unique;
        }, []);
    };
    return Loader;
}());
exports.Loader = Loader;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)))

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.XMLDriver = void 0;
var xml_1 = __webpack_require__(68);
var ARRAY_NAME = "items";
var ITEM_NAME = "item";
// convert xml tag to js object, all subtags and attributes are mapped to the properties of result object
function tagToObject(tag, initialObj) {
    initialObj = initialObj || {};
    // map attributes
    var a = tag.attributes;
    if (a && a.length) {
        for (var i = 0; i < a.length; i++) {
            initialObj[a[i].name] = a[i].value;
        }
    }
    // map subtags
    var b = tag.childNodes;
    for (var i = 0; i < b.length; i++) {
        var node = b[i];
        if (node.nodeType === node.ELEMENT_NODE) {
            var name_1 = node.tagName;
            if (initialObj[name_1]) {
                if (typeof initialObj[name_1].push !== "function") {
                    initialObj[name_1] = [initialObj[name_1]];
                }
                initialObj[name_1].push(tagToObject(node, {}));
            }
            else {
                initialObj[name_1] = tagToObject(node, {}); // sub-object for complex subtags
            }
        }
    }
    return initialObj;
}
var XMLDriver = /** @class */ (function () {
    function XMLDriver() {
    }
    XMLDriver.prototype.toJsonArray = function (data) {
        return this.getRows(data);
    };
    XMLDriver.prototype.toJsonObject = function (data) {
        var doc;
        if (typeof data === "string") {
            doc = this._fromString(data);
        }
        return tagToObject(doc);
    };
    XMLDriver.prototype.serialize = function (data) {
        return (0, xml_1.jsonToXML)(data);
    };
    XMLDriver.prototype.getFields = function (row) {
        return row;
    };
    XMLDriver.prototype.getRows = function (data) {
        if (typeof data === "string") {
            data = this._fromString(data);
        }
        if (data) {
            var childNodes = data.childNodes && data.childNodes[0] && data.childNodes[0].childNodes;
            if (!childNodes || !childNodes.length) {
                return null;
            }
            return this._getRows(childNodes);
        }
        return [];
    };
    XMLDriver.prototype._getRows = function (nodes) {
        var result = [];
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].tagName === ITEM_NAME) {
                result.push(this._nodeToJS(nodes[i]));
            }
        }
        return result;
    };
    XMLDriver.prototype._fromString = function (data) {
        try {
            return new DOMParser().parseFromString(data, "text/xml");
        }
        catch (_a) {
            return null;
        }
    };
    XMLDriver.prototype._nodeToJS = function (node) {
        var result = {};
        if (this._haveAttrs(node)) {
            var attrs = node.attributes;
            for (var i = 0; i < attrs.length; i++) {
                var _a = attrs[i], name_2 = _a.name, value = _a.value;
                result[name_2] = this._toType(value);
            }
        }
        if (node.nodeType === node.TEXT_NODE) {
            result.value = result.value || this._toType(node.textContent);
            return result;
        }
        var childNodes = node.childNodes;
        if (childNodes) {
            for (var i = 0; i < childNodes.length; i++) {
                var subNode = childNodes[i];
                var tag = subNode.tagName;
                if (!tag) {
                    continue;
                }
                if (tag === ARRAY_NAME && subNode.childNodes) {
                    result[tag] = this._getRows(subNode.childNodes);
                }
                else {
                    if (this._haveAttrs(subNode)) {
                        result[tag] = this._nodeToJS(subNode);
                    }
                    else {
                        result[tag] = this._toType(subNode.textContent);
                    }
                }
            }
        }
        return result;
    };
    XMLDriver.prototype._toType = function (val) {
        if (val === "false" || val === "true") {
            return val === "true";
        }
        return val;
    };
    XMLDriver.prototype._haveAttrs = function (node) {
        return node.attributes && node.attributes.length;
    };
    return XMLDriver;
}());
exports.XMLDriver = XMLDriver;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToXML = void 0;
var INDENT_STEP = 4;
function ws(count) {
    return " ".repeat(count);
}
function itemToXML(item, indent) {
    if (indent === void 0) { indent = INDENT_STEP; }
    var result = ws(indent) + "<item>\n";
    for (var key in item) {
        if (Array.isArray(item[key])) {
            result += ws(indent + INDENT_STEP) + "<".concat(key, ">\n");
            result +=
                item[key].map(function (subItem) { return itemToXML(subItem, indent + INDENT_STEP * 2); }).join("\n") +
                    "\n";
            result += ws(indent + INDENT_STEP) + "</".concat(key, ">\n");
        }
        else {
            result += ws(indent + INDENT_STEP) + "<".concat(key, ">").concat(item[key], "</").concat(key, ">\n");
        }
    }
    result += ws(indent) + "</item>";
    return result;
}
function jsonToXML(data, root) {
    if (root === void 0) { root = "root"; }
    var result = "<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n<".concat(root, ">");
    for (var i = 0; i < data.length; i++) {
        result += "\n" + itemToXML(data[i]);
    }
    return result + "\n</".concat(root, ">");
}
exports.jsonToXML = jsonToXML;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Sort = void 0;
var helpers_1 = __webpack_require__(10);
var Sort = /** @class */ (function () {
    function Sort() {
    }
    Sort.prototype.sort = function (array, by, perm) {
        this._createSorter(by);
        if (perm === by)
            by = null;
        if (perm || by)
            this._sort(array, perm, by);
    };
    Sort.prototype._createSorter = function (by) {
        var _this = this;
        if (by && !by.rule) {
            by.rule = function (a, b) {
                var _a, _b;
                var aa = (_a = _this._checkVal(by.as, a[by.by])) !== null && _a !== void 0 ? _a : "";
                var bb = (_b = _this._checkVal(by.as, b[by.by])) !== null && _b !== void 0 ? _b : "";
                // [TODO] why we need naturalCompare
                return (0, helpers_1.naturalCompare)(aa.toString(), bb.toString());
            };
        }
    };
    Sort.prototype._checkVal = function (method, val) {
        return method ? method.call(this, val) : val;
    };
    Sort.prototype._sort = function (arr, conf, conf2) {
        var _this = this;
        var dir = {
            asc: 1,
            desc: -1,
        };
        var sorted = arr.sort(function (a, b) {
            var t = 0;
            if (conf)
                t = conf.rule.call(_this, a, b) * (dir[conf.dir] || dir.asc);
            if (t === 0 && conf2)
                t = conf2.rule.call(_this, a, b) * (dir[conf2.dir] || dir.asc);
            return t;
        });
        var summaryIndex = sorted.findIndex(function (i) { return i.$groupSummary; });
        if (summaryIndex !== -1) {
            var summary = sorted[summaryIndex];
            sorted.splice(summaryIndex, 1);
            switch (summary.$groupSummary) {
                case "top":
                    sorted.unshift(summary);
                    break;
                case "bottom":
                    sorted.push(summary);
            }
        }
        return sorted;
    };
    return Sort;
}());
exports.Sort = Sort;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
var core_1 = __webpack_require__(0);
var methods_1 = __webpack_require__(34);
var Group = /** @class */ (function () {
    function Group() {
        this._init = [];
        this._groupSet = new Set();
    }
    Group.prototype.group = function (order, arr, config) {
        if (config === void 0) { config = {}; }
        if (!(order === null || order === void 0 ? void 0 : order.length) || !(arr === null || arr === void 0 ? void 0 : arr.length) || !Array.isArray(order)) {
            return arr || [];
        }
        this._init = __spreadArray([], arr, true);
        this._groupSet.clear();
        this._config = this.getGroupConfig(config);
        return this._group(order, arr);
    };
    Group.prototype.ungroup = function (modifiedData) {
        var data = this._init;
        this._init = [];
        this._groupSet.clear();
        if (modifiedData) {
            var pull_1 = {};
            var _loop_1 = function (index) {
                var i = modifiedData[index];
                if (i.$group)
                    return "continue";
                Object.keys(i).forEach(function (key) {
                    if (key.startsWith("$"))
                        delete i[key];
                });
                delete i.parent;
                pull_1[i.id] = i;
            };
            for (var index = 0; index < modifiedData.length; index++) {
                _loop_1(index);
            }
            return data.map(function (i) { return (__assign(__assign({}, i), pull_1[i.id])); });
        }
        return data || [];
    };
    Group.prototype.isGrouped = function () {
        return !!this._init.length;
    };
    Group.prototype.getGroupedFields = function () {
        return Array.from(this._groupSet);
    };
    Group.prototype.getGroupConfig = function (config) {
        var _a;
        if (config) {
            return {
                displayMode: config.displayMode || "column",
                field: config.field || "group",
                showMissed: (_a = config.showMissed) !== null && _a !== void 0 ? _a : true,
            };
        }
        return this._config;
    };
    Group.prototype._group = function (order, arr, parentId, level) {
        var _this = this;
        if (level === void 0) { level = 0; }
        if (level >= order.length) {
            return;
        }
        var flatTree = [];
        var grouped = {};
        var missed = [];
        var missedGroupField = "";
        var config = {};
        for (var index = 0; index < arr.length; index++) {
            var item = arr[index];
            var current = order[level];
            var isFunc = typeof current === "function" || typeof (current === null || current === void 0 ? void 0 : current.by) === "function";
            config = this._getOrderConfig(current, item);
            var ownProperty = item[config.by];
            var groupKey = isFunc ? config.by : ownProperty;
            if (!isFunc && !ownProperty && ownProperty !== 0) {
                if (this._config.showMissed) {
                    delete item.parent;
                    missed.push(item);
                }
                if (typeof this._config.showMissed === "string") {
                    missedGroupField = this._config.showMissed;
                }
                continue;
            }
            this._groupSet.add(config.by);
            if (!grouped[groupKey]) {
                grouped[groupKey] = [];
            }
            grouped[groupKey].push(item);
        }
        var groupedFields = Object.keys(grouped);
        if (missedGroupField) {
            groupedFields.push(missedGroupField);
        }
        groupedFields.forEach(function (groupKey) {
            var _a;
            var groupItems = grouped[groupKey] || missed;
            var nodeId = parentId ? "".concat(parentId, ":").concat(groupKey) : "$".concat((0, core_1.uid)(), ":").concat(groupKey);
            var aggregate = {};
            if (config.map) {
                Object.keys(config.map).forEach(function (field) {
                    aggregate[field] = _this._toAggregate(groupItems, config.map[field]);
                });
            }
            var groupNode = __assign((_a = { id: nodeId, $group: true, $row: _this._config.displayMode === "row", $count: groupItems.length }, _a[config.by] = groupKey, _a), aggregate);
            if (_this._config.displayMode === "column") {
                groupNode[_this._config.field] = groupKey;
            }
            if (parentId) {
                groupNode.parent = parentId;
            }
            flatTree.push(groupNode);
            if (level < order.length - 1) {
                flatTree.push.apply(flatTree, _this._group(order, groupItems, nodeId, level + 1));
            }
            if (level === order.length - 1) {
                groupItems.forEach(function (item) {
                    flatTree.push(__assign(__assign({}, item), { parent: nodeId }));
                });
            }
            if (config.summary) {
                _this._addSummaryRow(flatTree, nodeId, config.summary, aggregate);
            }
        });
        if (!missedGroupField)
            flatTree.push.apply(flatTree, missed);
        return flatTree;
    };
    Group.prototype._addSummaryRow = function (flatTree, groupKey, position, aggregate) {
        var summaryRow = __assign({ id: "".concat(groupKey, ":summary"), parent: groupKey, $groupSummary: position }, aggregate);
        if (position === "top") {
            var groupIndex = flatTree.findIndex(function (item) { return item.id === groupKey; });
            flatTree.splice(groupIndex + 1, 0, summaryRow);
        }
        else {
            flatTree.push(summaryRow);
        }
    };
    Group.prototype._toAggregate = function (items, order) {
        if (typeof order === "function") {
            return order(items);
        }
        var field = order[0], type = order[1];
        if (methods_1.methods[type]) {
            return methods_1.methods[type](items, field);
        }
        return "";
    };
    Group.prototype._getOrderConfig = function (order, item) {
        var by = (typeof order === "string" && order) ||
            (typeof order.by === "string" && order.by) ||
            (typeof order === "function" && order(item)) ||
            (typeof order.by === "function" && order.by(item));
        var config = { by: by };
        if (order.map) {
            config.map = order.map;
        }
        if (order.summary) {
            config.summary = order.summary;
        }
        return config;
    };
    return Group;
}());
exports.Group = Group;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeCollection = void 0;
var core_1 = __webpack_require__(0);
var datacollection_1 = __webpack_require__(30);
var dataproxy_1 = __webpack_require__(14);
var helpers_1 = __webpack_require__(10);
var types_1 = __webpack_require__(9);
function addToOrder(store, obj, parent, index) {
    if (index !== undefined && index !== -1 && store[parent] && store[parent][index]) {
        store[parent].splice(index, 0, obj);
    }
    else {
        if (!store[parent]) {
            store[parent] = [];
        }
        store[parent].push(obj);
    }
}
var TreeCollection = /** @class */ (function (_super) {
    __extends(TreeCollection, _super);
    function TreeCollection(config, events) {
        var _a;
        var _this = _super.call(this, config, events) || this;
        _this._childs = {};
        var root = (_this._root = (config && config.rootId) || "_ROOT_" + (0, core_1.uid)());
        _this._childs = (_a = {}, _a[root] = [], _a);
        _this._initChilds = null;
        return _this;
    }
    TreeCollection.prototype.add = function (newItem, index, parent) {
        var _this = this;
        if (index === void 0) { index = -1; }
        if (parent === void 0) { parent = this._root; }
        if (!this.events.fire(types_1.DataEvents.beforeAdd, [newItem])) {
            return;
        }
        if (typeof newItem !== "object") {
            newItem = {
                value: newItem,
            };
        }
        var out;
        if (Array.isArray(newItem)) {
            out = newItem.map(function (element, key) {
                return _this._add(element, index, parent, key);
            });
        }
        else {
            out = this._add(newItem, index, parent);
        }
        this._reapplyFilters();
        return out;
    };
    TreeCollection.prototype.getRoot = function () {
        return this._root;
    };
    TreeCollection.prototype.getParent = function (id, asObj) {
        if (asObj === void 0) { asObj = false; }
        if (!this._pull[id]) {
            return null;
        }
        var parent = this._pull[id].parent;
        return asObj ? this._pull[parent] : parent;
    };
    TreeCollection.prototype.getItems = function (id) {
        if (this._childs && this._childs[id]) {
            return this._childs[id];
        }
        return [];
    };
    TreeCollection.prototype.getLength = function (id) {
        if (id === void 0) { id = this._root; }
        if (!this._childs[id]) {
            return null;
        }
        return this._childs[id].length;
    };
    TreeCollection.prototype.removeAll = function (id) {
        var _a;
        if (!(0, core_1.isId)(id)) {
            _super.prototype.removeAll.call(this);
            var root = this._root;
            this._initChilds = null;
            this._childs = (_a = {}, _a[root] = [], _a);
        }
        else if (this._childs[id]) {
            var childs = __spreadArray([], this._childs[id], true);
            for (var _i = 0, childs_1 = childs; _i < childs_1.length; _i++) {
                var child = childs_1[_i];
                this.remove(child.id);
            }
        }
    };
    TreeCollection.prototype.update = function (id, newItem, silent) {
        var parent = newItem.parent;
        if ((0, core_1.isDefined)(parent) && !this.exists(parent) && parent !== this._root) {
            (0, helpers_1.dhxWarning)("Item parent doesn't exist");
            return;
        }
        _super.prototype.update.call(this, id, newItem, silent);
    };
    TreeCollection.prototype.getIndex = function (id) {
        var parent = this.getParent(id);
        if (!parent || !this._childs[parent]) {
            return -1;
        }
        return this._childs[parent].findIndex(function (i) { return (i === null || i === void 0 ? void 0 : i.id) == id; });
    };
    TreeCollection.prototype.sort = function (rule, config) {
        var _this = this;
        if (config && config.smartSorting) {
            this._sorter = rule;
        }
        if (!rule) {
            this._childs = {};
            // [dirty]
            this._parse_data(Object.keys(this._pull).map(function (key) { return _this._pull[key]; }));
        }
        else {
            this._applySorters(rule);
        }
        this._reapplyFilters();
        this.events.fire(types_1.DataEvents.change, [undefined, "sort", rule]);
    };
    TreeCollection.prototype.filter = function (rule, config, silent) {
        if (config === null || config === void 0 ? void 0 : config.$restore) {
            rule = this._normalizeFilters(rule || this._filters);
        }
        if (!rule || !(config === null || config === void 0 ? void 0 : config.add)) {
            this.restoreOrder();
            if (!(config === null || config === void 0 ? void 0 : config.$restore)) {
                for (var key in this._filters) {
                    var _a = this._filters[key], rule_1 = _a.rule, conf = _a.config;
                    if (conf === null || conf === void 0 ? void 0 : conf.permanent) {
                        this._applyFilter(rule_1, conf);
                    }
                    else {
                        delete this._filters[key];
                    }
                }
            }
        }
        var id;
        if (rule && !(config === null || config === void 0 ? void 0 : config.$restore)) {
            id = (config === null || config === void 0 ? void 0 : config.id) || (0, core_1.uid)();
            if (!config)
                config = {};
            config.type = config.type || types_1.TreeFilterType.all;
            this._filters[id] = { rule: rule, config: config };
            this._applyFilter(rule, config);
        }
        else {
            for (var key in rule) {
                this._applyFilter(rule[key], this._filters[key].config);
            }
        }
        if (!silent) {
            var filters = this._getPureFilters(this._filters);
            this.events.fire(types_1.DataEvents.filter, [(0, core_1.isEmptyObj)(filters) ? null : filters]);
        }
        return id;
    };
    TreeCollection.prototype.restoreOrder = function () {
        if (this._initChilds) {
            this._childs = this._initChilds;
            this._initChilds = null;
        }
    };
    TreeCollection.prototype.copy = function (id, index, target, targetId) {
        var _this = this;
        if (target === void 0) { target = this; }
        if (targetId === void 0) { targetId = this._root; }
        if (id instanceof Array) {
            return id.map(function (elementId, key) {
                return _this._copy(elementId, index, target, targetId, key);
            });
        }
        else {
            return this._copy(id, index, target, targetId);
        }
    };
    TreeCollection.prototype.move = function (id, index, target, targetId) {
        var _this = this;
        if (targetId === void 0) { targetId = this._root; }
        target = target || this;
        if (id instanceof Array) {
            return id.map(function (elementId, key) {
                return _this._move(elementId, index, target, targetId, key);
            });
        }
        else {
            return this._move(id, index, target, targetId);
        }
    };
    TreeCollection.prototype.forEach = function (callback, parent, level) {
        if (parent === void 0) { parent = this._root; }
        if (level === void 0) { level = Infinity; }
        if (!this.haveItems(parent) || level < 1) {
            return;
        }
        var array = this._childs[parent];
        for (var i = 0; i < array.length; i++) {
            callback.call(this, array[i], i, array);
            if (this.haveItems(array[i].id)) {
                this.forEach(callback, array[i].id, --level);
            }
        }
    };
    TreeCollection.prototype.eachChild = function (id, callback, direct, checkItem) {
        if (direct === void 0) { direct = true; }
        if (checkItem === void 0) { checkItem = function () { return true; }; }
        if (!this.haveItems(id)) {
            return;
        }
        for (var i = 0; i < this._childs[id].length; i++) {
            callback.call(this, this._childs[id][i], i);
            if (direct && checkItem(this._childs[id][i])) {
                this.eachChild(this._childs[id][i].id, callback, direct, checkItem);
            }
        }
    };
    TreeCollection.prototype.getNearId = function (id) {
        return id; // for selection
    };
    TreeCollection.prototype.loadItems = function (id, driver) {
        var _this = this;
        if (driver === void 0) { driver = types_1.DataDriver.json; }
        if (!this.events.fire(types_1.DataEvents.beforeItemLoad, [id])) {
            return;
        }
        var urlPart = this.config.autoload.toString();
        var url = urlPart + (urlPart.includes("?") ? "&id=".concat(id) : "?id=".concat(id));
        var proxy = new dataproxy_1.DataProxy(url);
        proxy
            .load()
            .then(function (data) {
            driver = (0, helpers_1.toDataDriver)(driver);
            data = driver.toJsonArray(data);
            _this._parse_data(data, id);
            _this.events.fire(types_1.DataEvents.change);
            _this.events.fire(types_1.DataEvents.afterItemLoad, [id]);
        })
            .catch(function (error) {
            _this.events.fire(types_1.DataEvents.loadError, [error]);
        });
    };
    TreeCollection.prototype.refreshItems = function (id, driver) {
        if (driver === void 0) { driver = types_1.DataDriver.json; }
        this.removeAll(id);
        this.loadItems(id, driver);
    };
    TreeCollection.prototype.eachParent = function (id, callback, self) {
        if (self === void 0) { self = false; }
        var item = this.getItem(id);
        if (!item) {
            return;
        }
        if (self) {
            callback.call(this, item);
        }
        if (item.parent === this._root) {
            return;
        }
        var parent = this.getItem(item.parent);
        callback.call(this, parent);
        this.eachParent(item.parent, callback);
    };
    TreeCollection.prototype.haveItems = function (id) {
        return id in this._childs;
    };
    TreeCollection.prototype.canCopy = function (id, target) {
        if (id === target) {
            return false;
        }
        var canCopy = true;
        this.eachParent(target, function (item) { return (item.id === id ? (canCopy = false) : null); }); // locate return string
        return canCopy;
    };
    TreeCollection.prototype.serialize = function (driver, checkItem) {
        if (driver === void 0) { driver = types_1.DataDriver.json; }
        var data = this._serialize(this._root, checkItem);
        var dataDriver = (0, helpers_1.toDataDriver)(driver);
        if (dataDriver) {
            return dataDriver.serialize(data);
        }
    };
    TreeCollection.prototype.getId = function (index, parent) {
        if (parent === void 0) { parent = this._root; }
        if (!this._childs[parent] || !this._childs[parent][index]) {
            return;
        }
        return this._childs[parent][index].id;
    };
    // Non public API from suite_6.4
    TreeCollection.prototype.map = function (callback, parent, direct) {
        if (parent === void 0) { parent = this._root; }
        if (direct === void 0) { direct = true; }
        var result = [];
        if (!this.haveItems(parent)) {
            return result;
        }
        for (var i = 0; i < this._childs[parent].length; i++) {
            result.push(callback.call(this, this._childs[parent][i], i, this._childs));
            if (direct) {
                var childResult = this.map(callback, this._childs[parent][i].id, direct);
                result = result.concat(childResult);
            }
        }
        return result;
    };
    TreeCollection.prototype.getRawData = function (from, to, order, mode, parent) {
        parent = parent !== null && parent !== void 0 ? parent : this._root;
        var out;
        if (!this._childs[parent])
            return [];
        if (parent === this._root)
            out = _super.prototype.getRawData.call(this, from, to, this._childs[parent]);
        else
            out = this._childs[parent];
        if (mode === 2) {
            return this.flatten(out);
        }
        return out;
    };
    TreeCollection.prototype.flatten = function (input) {
        var _this = this;
        var out = [];
        input.forEach(function (a) {
            out.push(a);
            var kids = _this._childs[a.id];
            if (kids && a.$opened) {
                out = out.concat(_this.flatten(kids));
            }
        });
        return out;
    };
    TreeCollection.prototype._add = function (newItem, index, parent, key) {
        if (index === void 0) { index = -1; }
        if (parent === void 0) { parent = this._root; }
        this._setParent(newItem, parent);
        if (key > 0 && index !== -1) {
            index = index + 1;
        }
        var id = _super.prototype._add.call(this, newItem, index);
        if (Array.isArray(newItem.items)) {
            for (var _i = 0, _a = newItem.items; _i < _a.length; _i++) {
                var item = _a[_i];
                this.add(item, -1, newItem.id);
            }
        }
        return id;
    };
    TreeCollection.prototype._setParent = function (item, parent) {
        item.parent = item.parent ? item.parent.toString() : parent;
        var parentItem = this._pull[item.parent];
        if (parentItem && !parentItem.items) {
            parentItem.items = [];
        }
    };
    TreeCollection.prototype._copy = function (id, index, target, targetId, key) {
        if (target === void 0) { target = this; }
        if (targetId === void 0) { targetId = this._root; }
        if (!this.exists(id)) {
            return null;
        }
        var currentChilds = this._childs[id];
        if (key) {
            index = index === -1 ? -1 : index + key;
        }
        if (target === this && !this.canCopy(id, targetId)) {
            return null;
        }
        var itemCopy = (0, helpers_1.copyWithoutInner)(this.getItem(id), { items: true });
        if (target.exists(id)) {
            itemCopy.id = (0, core_1.uid)();
        }
        if (!(0, helpers_1.isTreeCollection)(target)) {
            target.add(itemCopy, index);
            return;
        }
        if (this.exists(id)) {
            itemCopy.parent = targetId;
            if (target !== this && targetId === this._root) {
                itemCopy.parent = target.getRoot();
            }
            target.add(itemCopy, index);
            id = itemCopy.id;
        }
        if (currentChilds) {
            for (var _i = 0, currentChilds_1 = currentChilds; _i < currentChilds_1.length; _i++) {
                var child = currentChilds_1[_i];
                var childId = child.id;
                var childIndex = this.getIndex(childId);
                if (typeof id === "string") {
                    this.copy(childId, childIndex, target, id);
                }
            }
        }
        return id;
    };
    TreeCollection.prototype._move = function (id, index, target, targetId, key) {
        if (target === void 0) { target = this; }
        if (targetId === void 0) { targetId = this._root; }
        if (!this.exists(id)) {
            return null;
        }
        if (key && index < this.getIndex(id)) {
            index = index === -1 ? -1 : index + key;
        }
        if (target !== this) {
            if (!(0, helpers_1.isTreeCollection)(target)) {
                // move to datacollection
                target.add((0, helpers_1.copyWithoutInner)(this.getItem(id)), index);
                this.remove(id);
                return;
            }
            var returnId = this.copy(id, index, target, targetId);
            this.remove(id);
            return returnId;
        }
        // move inside
        if (!this.canCopy(id, targetId)) {
            return null;
        }
        var parent = this.getParent(id);
        var parentIndex = this.getIndex(id);
        // get item from parent array and move to target array
        var spliced = this._childs[parent].splice(parentIndex, 1)[0];
        spliced.parent = targetId; // need for next moving, ... not best solution, may be full method for get item
        if (!this._childs[parent].length) {
            delete this._childs[parent];
        }
        this._addToOrder(this._order, spliced, index);
        this.events.fire(types_1.DataEvents.change, [id, "update", this.getItem(id)]);
        return id;
    };
    TreeCollection.prototype._reset = function (config) {
        var _a;
        if ((0, core_1.isId)(config === null || config === void 0 ? void 0 : config.id)) {
            var childs = __spreadArray([], this._childs[config === null || config === void 0 ? void 0 : config.id], true);
            for (var _i = 0, childs_2 = childs; _i < childs_2.length; _i++) {
                var child = childs_2[_i];
                this.remove(child.id);
            }
        }
        else {
            _super.prototype._reset.call(this, config);
            var root = this._root;
            this._initChilds = null;
            this._childs = (_a = {}, _a[root] = [], _a);
        }
    };
    TreeCollection.prototype._removeCore = function (id) {
        if (this._pull[id]) {
            var parent_1 = this.getParent(id);
            this._childs[parent_1] = this._childs[parent_1].filter(function (item) { return item.id !== id; });
            if (parent_1 !== this._root && !this._childs[parent_1].length) {
                delete this._childs[parent_1];
            }
            if (this._initChilds && this._initChilds[parent_1]) {
                this._initChilds[parent_1] = this._initChilds[parent_1].filter(function (item) { return item.id !== id; });
                if (parent_1 !== this._root && !this._initChilds[parent_1].length) {
                    delete this._initChilds[parent_1];
                }
            }
            if (this._initOrder && this._initOrder.length) {
                this._initOrder = this._initOrder.filter(function (el) { return el.id !== id; });
            }
            this._order = this._order.filter(function (el) { return el.id !== id; });
            this._fastDeleteChilds(this._childs, id);
            if (this._initChilds) {
                this._fastDeleteChilds(this._initChilds, id);
            }
        }
    };
    TreeCollection.prototype._addToOrder = function (_order, obj, index) {
        var childs = this._childs;
        var initChilds = this._initChilds;
        var parent = obj.parent;
        this._pull[obj.id] = obj;
        if (obj.parent &&
            this._pull[obj.parent] &&
            this._pull[obj.parent].items &&
            !this._pull[obj.parent].items.find(function (item) { return item.id === obj.id; })) {
            this._pull[obj.parent].items.push(obj);
        }
        _super.prototype._addToOrder.call(this, _order, obj, index);
        addToOrder(childs, obj, parent, index);
        if (initChilds) {
            addToOrder(initChilds, obj, parent, index);
        }
    };
    TreeCollection.prototype._parse_data = function (data, parent) {
        var _a;
        if (parent === void 0) { parent = this._root; }
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var obj = data_1[_i];
            if (this.config.init) {
                obj = this.config.init(obj);
            }
            if (obj && typeof obj !== "object") {
                obj = {
                    value: obj,
                };
            }
            obj.id = (_a = obj.id) !== null && _a !== void 0 ? _a : (0, core_1.uid)();
            obj.parent =
                typeof obj.parent === "undefined" || obj.parent === null || (obj.parent && obj.$items)
                    ? parent
                    : obj.parent;
            if (this._pull[obj.id]) {
                (0, helpers_1.dhxError)("Item ".concat(obj.id, " already exist"));
            }
            this._pull[obj.id] = obj;
            this._order[this._order.length] = obj;
            if (!this._childs[obj.parent]) {
                this._childs[obj.parent] = [];
            }
            this._childs[obj.parent].push(obj);
            if (obj.items && obj.items instanceof Object) {
                this._parse_data(obj.items, obj.id);
            }
        }
    };
    TreeCollection.prototype._fastDeleteChilds = function (target, id) {
        if (this._pull[id]) {
            delete this._pull[id];
        }
        if (!target[id]) {
            return;
        }
        for (var i = 0; i < target[id].length; i++) {
            this._fastDeleteChilds(target, target[id][i].id);
        }
        delete target[id];
    };
    TreeCollection.prototype._recursiveFilter = function (rule, config, current, level, newChilds) {
        var _this = this;
        var childs = this._childs[current];
        if (!childs) {
            return;
        }
        var condition = function (item) {
            switch (config.type) {
                case types_1.TreeFilterType.all: {
                    return true;
                }
                case types_1.TreeFilterType.level: {
                    return level === config.level;
                }
                case types_1.TreeFilterType.leafs: {
                    return !_this.haveItems(item.id);
                }
            }
        };
        if (typeof rule === "function") {
            var customRule = function (item) { return condition(item) && rule(item); };
            var filtered = childs.filter(customRule);
            if (filtered.length) {
                newChilds[current] = filtered;
            }
            else if (current === this._root) {
                newChilds[current] = [];
            }
        }
        else {
            var customRule = function (item) {
                var _a;
                var responseOfRule = true;
                for (var compare in rule) {
                    if (rule[compare].by && rule[compare].match !== "") {
                        responseOfRule = rule[compare].compare
                            ? rule[compare].compare(item[rule[compare].by], rule[compare].match, item)
                            : ((_a = item[rule[compare].by]) === null || _a === void 0 ? void 0 : _a.toString().toLocaleLowerCase().indexOf(rule[compare].match.toString().toLowerCase())) !== -1;
                    }
                    if (!responseOfRule)
                        break;
                }
                return condition(item) && responseOfRule;
            };
            var filtered = childs.filter(customRule);
            if (filtered.length) {
                newChilds[current] = filtered;
            }
            else if (current === this._root) {
                newChilds[current] = [];
            }
        }
        for (var _i = 0, childs_3 = childs; _i < childs_3.length; _i++) {
            var child = childs_3[_i];
            this._recursiveFilter(rule, config, child.id, level + 1, newChilds);
        }
    };
    TreeCollection.prototype._serialize = function (parent, fn) {
        var _this = this;
        if (parent === void 0) { parent = this._root; }
        return this.map(function (item) {
            var itemCopy = {};
            for (var key in item) {
                if (key === "parent" || key === "items" || key.startsWith("$")) {
                    continue;
                }
                itemCopy[key] = item[key];
            }
            if (fn) {
                itemCopy = fn(itemCopy);
            }
            if (_this.haveItems(item.id)) {
                itemCopy.items = _this._serialize(item.id, fn);
            }
            return itemCopy;
        }, parent, false);
    };
    TreeCollection.prototype._applyFilter = function (rule, config) {
        var _this = this;
        if (!rule || (typeof rule !== "function" && (0, core_1.isEmptyObj)(rule)))
            return;
        if (!this._checkFilterRule(rule)) {
            throw new Error("Invalid filter rule");
        }
        if (!this._initOrder) {
            this._initOrder = this._order;
        }
        if (!this._initChilds) {
            this._initChilds = this._childs;
        }
        var filter;
        var newChilds = {};
        if (typeof rule !== "function") {
            filter = {};
            if ((0, core_1.isDefined)(rule.by)) {
                filter[rule.by] = rule;
            }
            else {
                for (var key in rule) {
                    filter[key] = rule[key];
                }
            }
        }
        else {
            filter = rule;
        }
        this._recursiveFilter(filter, config, this._root, 0, newChilds);
        Object.keys(newChilds).forEach(function (key) {
            var parentId = _this.getParent(key);
            var current = _this.getItem(key);
            while (parentId) {
                if (!newChilds[parentId]) {
                    newChilds[parentId] = [];
                }
                if (current && !newChilds[parentId].find(function (x) { return x.id === current.id; })) {
                    newChilds[parentId].push(current);
                }
                current = _this.getItem(parentId);
                parentId = _this.getParent(parentId);
            }
        });
        this._childs = newChilds;
    };
    TreeCollection.prototype._normalizeFilters = function (filters) {
        var rules = {};
        for (var key in filters) {
            rules[key] = filters[key].rule;
        }
        return rules;
    };
    TreeCollection.prototype._checkFilterRule = function (rule) {
        var _this = this;
        return (_super.prototype._checkFilterRule.call(this, rule) ||
            Object.values(rule).every(function (value) { return typeof value !== "function" && _super.prototype._checkFilterRule.call(_this, value); }));
    };
    TreeCollection.prototype._applySorters = function (by) {
        for (var key in this._childs) {
            this._sort.sort(this._childs[key], by, this._sorter);
        }
        if (this._initChilds && Object.keys(this._initChilds).length) {
            for (var key in this._initChilds) {
                this._sort.sort(this._initChilds[key], by, this._sorter);
            }
        }
    };
    return TreeCollection;
}(datacollection_1.DataCollection));
exports.TreeCollection = TreeCollection;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dragManager = void 0;
var html_1 = __webpack_require__(2);
var CollectionStore_1 = __webpack_require__(73);
var types_1 = __webpack_require__(9);
var helpers_1 = __webpack_require__(10);
var core_1 = __webpack_require__(0);
function getVerticalPosition(e) {
    var y = e.targetTouches
        ? e.targetTouches[0].clientY
        : e.clientY;
    var element = (0, html_1.locateNode)((0, html_1.getElementFromPoint)(e));
    if (!element) {
        return null;
    }
    var treeLine = element.childNodes[0];
    if (treeLine) {
        var _a = treeLine.getBoundingClientRect(), top_1 = _a.top, height = _a.height;
        return (y - top_1) / height;
    }
}
function dragEventContent(element, elements, exhaustiveList) {
    if (exhaustiveList === void 0) { exhaustiveList = false; }
    var rect = element.getBoundingClientRect();
    var ghost = document.createElement("div");
    var clone = element.cloneNode(true);
    var fontSize = window.getComputedStyle(element.parentElement).fontSize;
    clone.style.width = rect.width + "px";
    clone.style.height = rect.height + "px";
    clone.style.maxHeight = rect.height + "px";
    clone.style.opacity = "0.8";
    clone.style.fontSize = fontSize;
    if (!exhaustiveList || !elements || !elements.length) {
        ghost.appendChild(clone);
    }
    if (elements && elements.length) {
        elements.forEach(function (node, key) {
            var nodeClone = node.cloneNode(true);
            nodeClone.style.width = rect.width + "px";
            nodeClone.style.height = rect.height + "px";
            nodeClone.style.maxHeight = rect.height + "px";
            nodeClone.style.top = (key + 1) * 12 - rect.height - rect.height * key + "px";
            nodeClone.style.left = (key + 1) * 12 + "px";
            nodeClone.style.opacity = "0.6";
            nodeClone.style.zIndex = "".concat(-key - 1);
            if (!exhaustiveList) {
                nodeClone.style.fontSize = fontSize;
                nodeClone.style.overflow = "hidden";
            }
            ghost.appendChild(nodeClone);
        });
    }
    ghost.className = "dhx_drag-ghost";
    return ghost;
}
var isGrid = function (component) { var _a; return (_a = component.name) === null || _a === void 0 ? void 0 : _a.includes("grid"); };
var isProGrid = function (component) {
    return isGrid(component) && component.hasOwnProperty("scrollView");
};
var DragManager = /** @class */ (function () {
    function DragManager() {
        var _this = this;
        this._transferData = {};
        this._canMove = true;
        this._isDrag = false;
        this._lastOverItemId = null;
        this._onMouseMove = function (e) {
            if (!_this._transferData.start) {
                return;
            }
            var element = (0, html_1.getElementFromPoint)(e);
            var overAreaType = (0, html_1.locate)(element, "data-dhx-drop-area");
            var isCommonDropArea = overAreaType === "common";
            var pageX = e.targetTouches ? e.targetTouches[0].pageX : e.pageX;
            var pageY = e.targetTouches ? e.targetTouches[0].pageY : e.pageY;
            if (_this._transferData.type === "column" && overAreaType === "group") {
                _this._transferData.type = "group";
                _this._transferData.isWasColumn = true;
            }
            if (_this._transferData.type === "group" &&
                overAreaType === "column" &&
                _this._transferData.isWasColumn &&
                !_this._transferData.groupOnly) {
                _this._transferData.type = "column";
            }
            var targetId = (0, html_1.locate)(element);
            if (overAreaType === _this._transferData.type || isCommonDropArea) {
                var _a = _this._transferData, x = _a.x, y = _a.y, start = _a.start, componentId = _a.componentId;
                if (!_this._transferData.ghost) {
                    if (Math.abs(x - pageX) < 3 && Math.abs(y - pageY) < 3) {
                        return;
                    }
                    else {
                        var ghost = _this._onDragStart(start, componentId, e);
                        if (!ghost) {
                            _this._endDrop(e);
                            return;
                        }
                        else {
                            _this._transferData.ghost = ghost;
                            document.body.appendChild(_this._transferData.ghost);
                        }
                    }
                }
                var targetComponentId = (0, html_1.locate)(element, "data-dhx-widget-id");
                if ((overAreaType === "column" || overAreaType === "group") &&
                    targetComponentId === componentId) {
                    if (targetId !== _this._lastOverItemId) {
                        _this._lastOverItemId = targetId;
                        _this._onDrag(e);
                    }
                }
                else {
                    _this._onDrag(e);
                }
            }
            else if (_this._canMove) {
                _this.cancelCanDrop(e);
            }
            _this._notAllowedDropArea((overAreaType !== _this._transferData.type && !isCommonDropArea) ||
                (!_this._transferData.groupable && overAreaType === "group") ||
                (_this._transferData.groupOnly &&
                    overAreaType !== "group" &&
                    !isCommonDropArea &&
                    _this._transferData.start != targetId));
            _this._moveGhost(pageX, pageY);
        };
        this._onMouseUp = function (e) {
            if (!_this._transferData.x) {
                return;
            }
            if (_this._transferData.ghost) {
                _this._removeGhost();
                _this._onDrop(e);
            }
            else {
                _this._endDrop(e);
            }
            if (!e.targetTouches) {
                document.removeEventListener("mousemove", _this._onMouseMove);
                document.removeEventListener("mouseup", _this._onMouseUp);
            }
            else {
                document.removeEventListener("touchmove", _this._onMouseMove);
                document.removeEventListener("touchend", _this._onMouseUp);
            }
        };
    }
    DragManager.prototype.setItem = function (id, item) {
        CollectionStore_1.collectionStore.setItem(id, item);
    };
    DragManager.prototype.onMouseDown = function (_a) {
        var event = _a.event, itemsForGhost = _a.itemsForGhost, ghost = _a.ghost, source = _a.source, type = _a.type, groupable = _a.groupable, groupOnly = _a.groupOnly;
        // onmousedown only for target objects
        if (event.which !== 1 && !event.targetTouches) {
            return;
        }
        if (!event.targetTouches) {
            document.addEventListener("mousemove", this._onMouseMove);
            document.addEventListener("mouseup", this._onMouseUp);
        }
        else {
            document.addEventListener("touchmove", this._onMouseMove, false);
            document.addEventListener("touchend", this._onMouseUp, false);
        }
        var element = (0, html_1.getElementFromPoint)(event);
        var item = (0, html_1.locateNode)(element, "data-dhx-id");
        var id = item && item.getAttribute("data-dhx-id");
        var componentId = (0, html_1.locate)(element, "data-dhx-widget-id");
        if (ghost)
            this._ghost = ghost;
        if (Array.isArray(source) && source.includes(id)) {
            this._transferData.source = __spreadArray([], source, true);
            this._itemsForGhost = itemsForGhost;
        }
        else {
            this._transferData.source = [id];
            this._itemsForGhost = null;
        }
        if (id && componentId) {
            var _b = (0, html_1.getBox)(item), left = _b.left, top_2 = _b.top;
            var pageX = event.targetTouches
                ? event.targetTouches[0].pageX
                : event.pageX;
            var pageY = event.targetTouches
                ? event.targetTouches[0].pageY
                : event.pageY;
            this._transferData.initXOffset = type === "row" ? pageX - left : 0;
            this._transferData.initYOffset = type === "row" ? pageY - top_2 : 0;
            this._transferData.x = pageX;
            this._transferData.y = pageY;
            this._transferData.componentId = componentId;
            this._transferData.start = id;
            this._transferData.item = item;
            this._transferData.type = type;
            this._transferData.groupable = groupable;
            this._transferData.groupOnly = groupOnly;
        }
    };
    DragManager.prototype.isDrag = function () {
        return this._isDrag;
    };
    DragManager.prototype.cancelCanDrop = function (event) {
        this._canMove = false;
        var _a = this._transferData, start = _a.start, source = _a.source, target = _a.target, dropComponentId = _a.dropComponentId, type = _a.type;
        var data = {
            start: start,
            source: source,
            target: target,
            dragItem: type,
        };
        var collection = CollectionStore_1.collectionStore.getItem(dropComponentId);
        if (collection && target) {
            collection.events.fire(types_1.DragEvents.cancelDrop, [data, event, this._transferData.type]);
        }
        this._transferData.dropComponentId = null;
        this._transferData.target = null;
    };
    DragManager.prototype._moveGhost = function (x, y) {
        if (this._transferData.ghost) {
            this._transferData.ghost.style.left = x - this._transferData.initXOffset + "px";
            this._transferData.ghost.style.top = y - this._transferData.initYOffset + "px";
        }
    };
    DragManager.prototype._removeGhost = function () {
        this._ghost = null;
        document.body.removeChild(this._transferData.ghost);
    };
    DragManager.prototype._onDrop = function (e) {
        if (!this._canMove) {
            this._endDrop(e);
            return;
        }
        var _a = this._transferData, start = _a.start, source = _a.source, target = _a.target, dropComponentId = _a.dropComponentId, dropPosition = _a.dropPosition;
        var data = { start: start, source: source, target: target, dropPosition: dropPosition };
        var component = CollectionStore_1.collectionStore.getItem(dropComponentId);
        var config = component && component.config;
        if (!component || config.dragMode === "source") {
            this._endDrop(e);
            return;
        }
        if (component.events.fire(types_1.DragEvents.beforeDrop, [data, e, this._transferData.type])) {
            var to = {
                id: target,
                component: component,
            };
            var from = {
                id: start,
                component: this._transferData.component,
                newId: null,
            };
            this._move(from, to);
            if (from.newId && from.component !== to.component)
                data.start = from.newId;
            to.component.events.fire(types_1.DragEvents.afterDrop, [data, e, this._transferData.type]);
        }
        this._endDrop(e);
    };
    DragManager.prototype._onDragStart = function (id, componentId, e) {
        var component = CollectionStore_1.collectionStore.getItem(componentId);
        var config = component.config;
        var _a = this._transferData, start = _a.start, source = _a.source, target = _a.target;
        var data = {
            start: start,
            source: source,
            target: target,
        };
        if (config.dragMode === "target" || component._pregroupData) {
            return null;
        }
        var ghost = this._transferData.type === "row"
            ? dragEventContent(this._transferData.item, this._itemsForGhost, isGrid(component))
            : this._ghost;
        var ans = component.events.fire(types_1.DragEvents.beforeDrag, [data, e, ghost, this._transferData.type]);
        if (!ans || !(0, core_1.isId)(id)) {
            return null;
        }
        component.events.fire(types_1.DragEvents.dragStart, [data, e, this._transferData.type]);
        this._isDrag = true;
        this._toggleTextSelection(true);
        this._transferData.component = component;
        this._transferData.dragConfig = config;
        return ghost;
    };
    DragManager.prototype._onDrag = function (e) {
        var element = (0, html_1.getElementFromPoint)(e);
        var collectionId = (0, html_1.locate)(element, "data-dhx-widget-id");
        var component = CollectionStore_1.collectionStore.getItem(collectionId);
        if (!component) {
            if (this._canMove) {
                this.cancelCanDrop(e);
            }
            return;
        }
        var isTreeHeaderOrFooter = !!(0, html_1.locateNodeByClassName)(element, "dhx_grid-header") ||
            !!(0, html_1.locateNodeByClassName)(element, "dhx_grid-footer");
        var gridConfig = component.config.columns
            ? component.config
            : undefined;
        var isColumnDrag = gridConfig && (gridConfig.dragItem === "both" || gridConfig.dragItem === "column");
        if (isTreeHeaderOrFooter && !isColumnDrag) {
            if (this._canMove) {
                this.cancelCanDrop(e);
            }
            return;
        }
        var id = (0, html_1.locate)(element, "data-dhx-id");
        var rootId = (0, html_1.locate)(element, "data-dhx-root-id");
        if (!id && !rootId) {
            this.cancelCanDrop(e);
            this._transferData.dropComponentId = collectionId;
            this._transferData.target = null;
            this._canDrop(e);
            return;
        }
        var _a = this._transferData, dropComponentId = _a.dropComponentId, start = _a.start, source = _a.source, target = _a.target, componentId = _a.componentId, dropPosition = _a.dropPosition;
        if (component.config.dropBehaviour === "complex") {
            var pos = getVerticalPosition(e);
            if (component.config.group) {
                if (pos <= 0.5) {
                    this._transferData.dropPosition = "top";
                }
                else {
                    this._transferData.dropPosition = "bottom";
                }
            }
            else {
                if (pos <= 0.25) {
                    this._transferData.dropPosition = "top";
                }
                else if (pos >= 0.75) {
                    this._transferData.dropPosition = "bottom";
                }
                else {
                    this._transferData.dropPosition = "in";
                }
            }
        }
        else if ((target === id || (!id && target === rootId)) && dropComponentId === collectionId) {
            return;
        }
        var from = {
            id: start,
            component: this._transferData.component,
        };
        if (component.config.dragMode === "source") {
            return;
        }
        from.component.events.fire(types_1.DragEvents.dragOut, [
            {
                start: start,
                source: source,
                target: target,
            },
            e,
            this._transferData.type,
        ]);
        if (collectionId !== componentId ||
            !(0, helpers_1.isTreeCollection)(from.component.data) ||
            ((0, helpers_1.isTreeCollection)(from.component.data) && from.component.data.canCopy(from.id, id))) {
            this.cancelCanDrop(e); // clear last
            var target_1 = (this._transferData.target = id || rootId);
            this._transferData.dropComponentId = collectionId;
            var canMove = from.component.events.fire(types_1.DragEvents.dragIn, [
                {
                    start: start,
                    source: source,
                    target: target_1,
                    dropPosition: dropPosition,
                },
                e,
                this._transferData.type,
            ]);
            if (canMove) {
                this._canDrop(e);
            }
        }
        else {
            this.cancelCanDrop(e);
        }
    };
    DragManager.prototype._move = function (from, to) {
        var grid = from.component;
        var nextGrid = to.component;
        var fromData = from.component.data;
        var toData = to.component.data;
        var index = 0;
        var componentId = to.id;
        var behaviour = (0, helpers_1.isTreeCollection)(toData) ? to.component.config.dropBehaviour : undefined;
        var gridConfig = from.component.config.columns
            ? from.component.config
            : undefined;
        var isColumnDrag = gridConfig &&
            (gridConfig.dragItem === "both" || gridConfig.dragItem === "column") &&
            gridConfig.columns.map(function (c) { return c.id; }).filter(function (id) { return id === from.id || id === to.id; }).length;
        if (isColumnDrag && from.component === to.component) {
            if (from.id === to.id)
                return;
            var currentCols = grid.config.columns.map(function (c) { return (__assign({}, c)); });
            var sourceIndex = currentCols.findIndex(function (c) { return c.id === from.id; });
            var componentIndex = currentCols.findIndex(function (c) { return c.id === to.id; });
            if (componentIndex === -1)
                return;
            currentCols.splice(componentIndex, 0, currentCols.splice(sourceIndex, 1)[0]);
            grid.setColumns(currentCols);
            grid.paint();
            return;
        }
        else if (isColumnDrag &&
            from.component &&
            isProGrid(from.component) &&
            to.component &&
            isProGrid(to.component)) {
            var currentCols = grid.config.columns.map(function (c) { return (__assign({}, c)); });
            var sourceIndex = currentCols.findIndex(function (c) { return c.id === from.id; });
            var nextGridCols = nextGrid.config.columns.map(function (c) { return (__assign({}, c)); });
            var nextGridLength = nextGrid.data.getLength();
            var componentIndex = nextGridCols.findIndex(function (c) { return c.id === to.id; });
            var currentColumnData_1 = [];
            var currentColumnId_1 = from.id;
            grid.data.forEach(function (item) {
                var _a;
                currentColumnData_1.push((_a = { id: item.id }, _a[currentColumnId_1] = item[from.id], _a));
            });
            if (nextGridLength) {
                grid.data.forEach(function (item, index) {
                    var nextGridItem = nextGrid.data.getItem(item.id);
                    if (nextGridItem) {
                        nextGrid.data.update(nextGridItem.id, __assign(__assign({}, nextGridItem), currentColumnData_1[index]));
                    }
                    else {
                        nextGrid.data.add(currentColumnData_1[index]);
                    }
                });
            }
            else {
                nextGrid.data.parse(currentColumnData_1);
            }
            var col = currentCols.splice(sourceIndex, 1)[0];
            nextGridCols.find(function (c) { return c.id === currentColumnId_1; }) || nextGridCols.splice(componentIndex, 0, col);
            nextGrid.setColumns(nextGridCols);
            nextGrid.paint();
            grid.setColumns(currentCols);
            grid.paint();
            return;
        }
        var isRootParent = to.id === nextGrid.config.rootParent;
        switch (behaviour) {
            case "child":
                break;
            case "sibling":
                componentId = toData.getParent(componentId);
                index = toData.getIndex(to.id) + 1;
                break;
            case "complex": {
                var dropPosition = this._transferData.dropPosition;
                if (isRootParent) {
                    componentId = to.id;
                    index = toData.getLength();
                }
                else {
                    var fromIndex = toData.getIndex(from.id);
                    if (dropPosition === "top") {
                        componentId = toData.getParent(componentId);
                        index =
                            toData.getIndex(to.id) -
                                (fromIndex === -1 || fromIndex > toData.getIndex(to.id) ? 0 : 1);
                    }
                    else if (dropPosition === "bottom") {
                        componentId = toData.getParent(componentId);
                        index =
                            toData.getIndex(to.id) +
                                (fromIndex === -1 || fromIndex > toData.getIndex(to.id) ? 1 : 0);
                    }
                }
                break;
            }
            default:
                // list move
                if (!(0, core_1.isId)(to.id)) {
                    index = -1;
                }
                else {
                    if (toData.getIndex(from.id) > -1)
                        from.newId = (0, core_1.uid)();
                    index = toData.getIndex(to.id);
                }
        }
        if (this._transferData.dragConfig.dragCopy) {
            if (this._transferData.source instanceof Array && this._transferData.source.length > 1) {
                this._transferData.source.map(function (selctedId) {
                    fromData.copy(selctedId, index, toData, componentId);
                    if (index > -1) {
                        index++;
                    }
                });
            }
            else {
                fromData.copy(from.id, index, toData, componentId);
            }
        }
        else {
            if (this._transferData.source instanceof Array && this._transferData.source.length > 1) {
                fromData.move(this._transferData.source, index, toData, componentId);
            }
            else {
                if (isGrid(nextGrid) && !nextGrid.config.columns.length) {
                    var gridItem = grid.data.getItem(from.id);
                    nextGrid.data.parse([__assign({}, gridItem)]);
                    nextGrid.setColumns(__spreadArray([], grid.config.columns, true));
                    nextGrid.paint();
                    grid.data.remove(from.id);
                    grid.paint();
                }
                else {
                    fromData.move(from.id, index, toData, componentId, from.newId);
                }
            }
        }
    };
    DragManager.prototype._endDrop = function (e) {
        this._toggleTextSelection(false);
        this._notAllowedDropArea(false);
        if (this._transferData.component) {
            var _a = this._transferData, start = _a.start, source = _a.source, target = _a.target;
            var data = { start: start, source: source, target: target };
            this._transferData.component.events.fire(types_1.DragEvents.afterDrag, [
                data,
                e,
                this._transferData.type,
            ]);
        }
        this.cancelCanDrop(e);
        this._canMove = true;
        this._isDrag = false;
        this._lastOverItemId = null;
        this._transferData = {};
        this._transferData.target = null;
        this._transferData.dropComponentId = null;
    };
    DragManager.prototype._canDrop = function (e) {
        this._canMove = true;
        var _a = this._transferData, start = _a.start, source = _a.source, target = _a.target, dropPosition = _a.dropPosition;
        var data = {
            start: start,
            source: source,
            target: target,
            dropPosition: dropPosition,
        };
        var component = CollectionStore_1.collectionStore.getItem(this._transferData.dropComponentId);
        if (component && this._transferData.target) {
            component.events.fire(types_1.DragEvents.canDrop, [data, e, this._transferData.type]);
        }
    };
    DragManager.prototype._toggleTextSelection = function (add) {
        if (add) {
            document.body.classList.add("dhx_no-select");
        }
        else {
            document.body.classList.remove("dhx_no-select");
        }
    };
    DragManager.prototype._notAllowedDropArea = function (notAllowed) {
        if (notAllowed) {
            if (!document.body.classList.contains("dhx_drop-area--not-allowed")) {
                document.body.classList.add("dhx_drop-area--not-allowed");
            }
        }
        else {
            document.body.classList.remove("dhx_drop-area--not-allowed");
        }
    };
    return DragManager;
}());
var dhx = (window.dhxHelpers = window.dhxHelpers || {});
dhx.dragManager = dhx.dragManager || new DragManager();
exports.dragManager = dhx.dragManager;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionStore = exports.CollectionStore = void 0;
var core_1 = __webpack_require__(0);
var CollectionStore = /** @class */ (function () {
    function CollectionStore() {
        this._store = {};
    }
    CollectionStore.prototype.setItem = function (id, target) {
        this._store[id] = target;
    };
    CollectionStore.prototype.getItem = function (id) {
        if (!(0, core_1.isId)(id) || !this._store[id]) {
            return null;
        }
        return this._store[id];
    };
    return CollectionStore;
}());
exports.CollectionStore = CollectionStore;
var dhx = (window.dhxHelpers = window.dhxHelpers || {});
dhx.collectionStore = dhx.collectionStore || new CollectionStore();
exports.collectionStore = dhx.collectionStore;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LazyDataProxy = void 0;
var dataproxy_1 = __webpack_require__(14);
var core_1 = __webpack_require__(0);
var ajax_1 = __webpack_require__(20);
var LazyDataProxy = /** @class */ (function (_super) {
    __extends(LazyDataProxy, _super);
    function LazyDataProxy(url, config) {
        var _this = _super.call(this, url) || this;
        _this.config = (0, core_1.extend)({
            from: 0,
            limit: 50,
            delay: 50,
            prepare: 0,
        }, config);
        _this.updateUrl(url, { from: _this.config.from, limit: _this.config.limit });
        return _this;
    }
    LazyDataProxy.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this._timeout) {
                ajax_1.ajax.get(_this.url, { responseType: "text" })
                    .then(resolve)
                    .catch(reject);
                _this._cooling = true;
                _this._timeout = setTimeout(function () {
                    return;
                });
            }
            else {
                clearTimeout(_this._timeout);
                _this._timeout = setTimeout(function () {
                    ajax_1.ajax.get(_this.url, { responseType: "text" })
                        .then(resolve)
                        .catch(reject);
                    _this._cooling = true;
                }, _this.config.delay);
                if (_this._cooling) {
                    resolve(null);
                    _this._cooling = false;
                }
            }
        });
    };
    return LazyDataProxy;
}(dataproxy_1.DataProxy));
exports.LazyDataProxy = LazyDataProxy;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)))

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Selection = void 0;
var events_1 = __webpack_require__(4);
var types_1 = __webpack_require__(16);
var types_2 = __webpack_require__(9);
var core_1 = __webpack_require__(0);
var Selection = /** @class */ (function () {
    function Selection(config, data, events) {
        var _this = this;
        this.events = events || new events_1.EventSystem(this);
        this.config = config;
        this._data = data;
        this._selected = null;
        this._data.events.on(types_2.DataEvents.removeAll, function () {
            _this._selected = null;
        });
        this._data.events.on(types_2.DataEvents.change, function () {
            if ((0, core_1.isId)(_this._selected)) {
                var near = _this._data.getNearId(_this._selected);
                if (near !== _this._selected) {
                    _this._selected = null;
                    if (near) {
                        _this.add(near);
                    }
                }
            }
        });
    }
    Selection.prototype.getId = function () {
        return this._selected;
    };
    Selection.prototype.getItem = function () {
        if ((0, core_1.isId)(this._selected)) {
            return this._data.getItem(this._selected);
        }
        return null;
    };
    Selection.prototype.remove = function (id) {
        id = id !== null && id !== void 0 ? id : this._selected;
        if (!(0, core_1.isDefined)(id)) {
            return true;
        }
        if (this.events.fire(types_1.SelectionEvents.beforeUnSelect, [id])) {
            this._data.update(id, { $selected: false }, true);
            this._selected = null;
            this.events.fire(types_1.SelectionEvents.afterUnSelect, [id]);
            return true;
        }
        return false;
    };
    Selection.prototype.add = function (id) {
        if (this._selected === id || !!this.config.disabled || !this._data.exists(id)) {
            return;
        }
        this.remove();
        this._addSingle(id);
    };
    Selection.prototype.enable = function () {
        this.config.disabled = false;
    };
    Selection.prototype.disable = function () {
        this.remove();
        this.config.disabled = true;
    };
    Selection.prototype._addSingle = function (id) {
        if (this.events.fire(types_1.SelectionEvents.beforeSelect, [id])) {
            this._selected = id;
            this._data.update(id, { $selected: true }, true);
            this.events.fire(types_1.SelectionEvents.afterSelect, [id]);
        }
    };
    return Selection;
}());
exports.Selection = Selection;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
var dom_1 = __webpack_require__(1);
var events_1 = __webpack_require__(4);
var html_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var KeyManager_1 = __webpack_require__(21);
var view_1 = __webpack_require__(6);
var ts_data_1 = __webpack_require__(5);
var Exporter_1 = __webpack_require__(77);
var data_1 = __webpack_require__(8);
var cells_1 = __webpack_require__(15);
var main_1 = __webpack_require__(7);
var Selection_1 = __webpack_require__(83);
var types_1 = __webpack_require__(3);
var render_1 = __webpack_require__(84);
var common_1 = __webpack_require__(11);
var date_1 = __webpack_require__(13);
var content_1 = __webpack_require__(113);
var columnsResizer_1 = __webpack_require__(117);
var keys_1 = __webpack_require__(118);
var FocusManager_1 = __webpack_require__(17);
var Cells_1 = __webpack_require__(18);
var Grid = /** @class */ (function (_super) {
    __extends(Grid, _super);
    function Grid(container, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, container, config) || this;
        _this._touch = {
            duration: 350,
            dblDuration: 300,
            timer: null,
            start: false,
        };
        _this._destructed = false;
        _this._sortState = { by: undefined, dir: undefined };
        _this._commonSummary = {};
        _this._colSummary = {};
        _this.version = "9.0.3";
        _this.name = "grid";
        _this.config = (0, core_1.extend)({
            rowHeight: 40,
            headerRowHeight: 40,
            footerRowHeight: 40,
            keyNavigation: true,
            sortable: true,
            columns: [],
            data: [],
            tooltip: true,
            rootParent: (typeof container === "string" && container) || _this._uid,
        }, _this._normalizeConfig(config));
        _this.content = (0, content_1.getContent)();
        _this._scroll = {
            top: 0,
            left: 0,
        };
        _this.config.autoWidth = _this.config.autoWidth || _this.config.fitToContainer;
        _this.config.adjust = _this.config.adjust || _this.config.columnsAutoWidth;
        _this.config.editable = _this.config.editable || _this.config.editing;
        _this.config.leftSplit = _this.config.leftSplit || _this.config.splitAt;
        _this.config.columns.forEach(function (col) {
            if (col.type === "date" && col.format)
                col.dateFormat = col.format;
        });
        var showCellTooltip = function (row, column, node) {
            var _a;
            if (row && column && (0, main_1.isTooltip)(_this.config, column)) {
                var editorOption = void 0;
                if (column.editorType === "combobox" || column.editorType === "select") {
                    var option = (0, data_1.getEditorOptions)(column, row).find(function (item) {
                        var _a;
                        var value = item instanceof Object ? item.id.toString() : item;
                        return value === ((_a = row[column.id]) === null || _a === void 0 ? void 0 : _a.toString());
                    });
                    editorOption = option instanceof Object ? option.value : option;
                }
                else if (column.editorType === "multiselect") {
                    var values_1 = (_a = row[column.id]) === null || _a === void 0 ? void 0 : _a.toString().split(", ");
                    if (values_1 === null || values_1 === void 0 ? void 0 : values_1.length) {
                        var options = (0, data_1.getEditorOptions)(column, row).filter(function (item) {
                            return values_1.includes(item instanceof Object ? item.id.toString() : item);
                        });
                        editorOption = options
                            .map(function (item) {
                            return item instanceof Object ? item.value : item;
                        })
                            .join(", ");
                    }
                }
                var value_1 = (0, data_1.applyPattern)(editorOption || row[column.id], column);
                var checkIsExistValue = function () { return !!value_1 || typeof value_1 === "boolean"; };
                if (column.tooltipTemplate) {
                    value_1 = column.tooltipTemplate(value_1, row, column) || null;
                }
                else if (checkIsExistValue() && column.template) {
                    value_1 = column.template(value_1, row, column);
                }
                if (checkIsExistValue()) {
                    (0, main_1.showTooltip)(value_1, __assign({ node: node, htmlEnable: (0, main_1.isHtmlEnable)(_this.config, column) }, (0, main_1.getTooltipConfig)(_this.config, column)));
                }
            }
        };
        var showContentTooltip = function (event, type) {
            var _a;
            if (type === void 0) { type = "header"; }
            var node = event.target;
            var id = node.getAttribute("data-dhx-text-id");
            var column = _this.getColumn(node.getAttribute("data-dhx-id"));
            if (!id || !column) {
                return;
            }
            var cell = (_a = column[type]) === null || _a === void 0 ? void 0 : _a.find(function (c) { return c.id === id; });
            if (!(0, main_1.isContentTooltip)(_this.config, column, cell, type)) {
                return;
            }
            var value = cell === null || cell === void 0 ? void 0 : cell.text;
            var summary = _this.getSummary(column.id);
            if (typeof value === "function") {
                value = value(summary);
            }
            if (typeof (cell === null || cell === void 0 ? void 0 : cell.tooltipTemplate) === "function") {
                value = cell.tooltipTemplate(__assign({ value: value }, summary), cell, column) || null;
            }
            if (value === null || value === void 0 ? void 0 : value.toString().length) {
                (0, main_1.showTooltip)(value, __assign({ node: node, htmlEnable: (0, main_1.isHtmlEnable)(_this.config, column, cell) }, (0, main_1.getTooltipConfig)(_this.config, column, cell, type)));
            }
        };
        _this._htmlEvents = {
            onclick: (0, html_1.eventHandler)(function (e) { return (0, html_1.locate)(e); }, {
                "dhx_grid-header-cell--sortable": function (e, id) {
                    var isResizable = e.target.getAttribute("dhx_resized");
                    var column = _this.getColumn(id);
                    if (column && (0, main_1.isSortable)(_this.config, column) && !isResizable) {
                        var textId_1 = (0, html_1.locate)(e, "data-dhx-text-id");
                        var cell = column.header.find(function (item) { return item.id === textId_1; });
                        _this._sort(id, cell.sortAs);
                    }
                },
                "dhx_grid-expand-cell": function (e, rowId) {
                    if (e.target.classList.contains("dhx_grid-expand-cell-icon")) {
                        _this.events.fire(types_1.GridEvents.expand, [rowId]);
                    }
                },
                "dhx_span-expand-cell": function (e, rowId) {
                    if (e.target.classList.contains("dhx_span-expand-cell-icon")) {
                        _this.events.fire(types_1.GridEvents.expand, [rowId]);
                    }
                },
            }),
            onscroll: function (e) {
                _this.events.fire(types_1.GridEvents.scroll, [
                    {
                        y: e.target.scrollTop,
                        x: e.target.scrollLeft,
                    },
                ]);
            },
            onmouseover: {
                ".dhx_grid-cell.dhx_boolean-cell .dhx_checkbox.dhx_cell-editor__checkbox": function (e) {
                    var path = e.composedPath();
                    var row = _this.data.getItem(path[2].getAttribute("data-dhx-id"));
                    var column = _this.getColumn(path[1].getAttribute("data-dhx-col-id"));
                    showCellTooltip(row, column, e.target);
                },
                ".dhx_grid-cell:not(.dhx_boolean-cell)": function (e) {
                    var row = _this.data.getItem(e.composedPath()[1].getAttribute("data-dhx-id"));
                    var column = _this.getColumn(e.target.getAttribute("data-dhx-col-id"));
                    showCellTooltip(row, column, e.target);
                },
                ".dhx_grid-cell:not(.dhx_tree-cell) .dhx_grid-cell__content, .dhx_tree-cell :not(.dhx_grid-cell__content)": function (e) {
                    var path = e.composedPath();
                    var row = _this.data.getItem(path[2].getAttribute("data-dhx-id"));
                    var column = _this.getColumn(path[1].getAttribute("data-dhx-col-id"));
                    showCellTooltip(row, column, e.target);
                },
                ".dhx_grid-cell.dhx_tree-cell .dhx_grid-cell__content": function (e) {
                    var path = e.composedPath();
                    var row = _this.data.getItem(path[3].getAttribute("data-dhx-id"));
                    var column = _this.getColumn(path[2].getAttribute("data-dhx-col-id"));
                    showCellTooltip(row, column, path[2]);
                },
                ".dhx_span-cell:not(.dhx_grid-header-cell):not(.dhx_grid-footer-cell)": function (e) {
                    var node = e.target;
                    var row = _this.data.getItem(node.getAttribute("data-dhx-id"));
                    var column = _this.getColumn(node.getAttribute("data-dhx-col-id"));
                    var span = _this.getSpan(row.id, column.id);
                    if (row && span && (0, main_1.isTooltip)(_this.config, span)) {
                        var summary = _this.getSummary(column.id);
                        var text = typeof span.text === "function" ? span.text(summary) : span.text;
                        var value = (text || (0, data_1.applyPattern)(row[column.id], column)).toString();
                        if (span.tooltipTemplate) {
                            value = span.tooltipTemplate(__assign({ value: value }, summary), span) || null;
                        }
                        else if (column.template) {
                            value = column.template(value, row, column);
                        }
                        if (value) {
                            (0, main_1.showTooltip)(value, __assign({ node: node, htmlEnable: (0, main_1.isHtmlEnable)(_this.config, column) }, (0, main_1.getTooltipConfig)(_this.config, null, span)));
                        }
                    }
                },
                ".dhx_grid-header-cell": function (event) { return showContentTooltip(event, "header"); },
                ".dhx_grid-footer-cell": function (event) { return showContentTooltip(event, "footer"); },
            },
        };
        if (_this.config.eventHandlers) {
            for (var _i = 0, _a = Object.entries(_this.config.eventHandlers); _i < _a.length; _i++) {
                var _b = _a[_i], name_1 = _b[0], events = _b[1];
                _this._htmlEvents[name_1] = (0, html_1.eventHandler)(function (e) {
                    return {
                        col: _this.getColumn((0, html_1.locate)(e, "data-dhx-col-id") || (0, html_1.locate)(e, "data-dhx-id")) ||
                            {},
                        row: _this.data.getItem((0, html_1.locate)(e, "data-dhx-id")) || {},
                    };
                }, events, _this._htmlEvents[name_1]);
            }
        }
        if (_this.config.dragMode || _this.config.dragItem) {
            ts_data_1.dragManager.setItem(_this._uid, _this);
            if (!_this.config.dragItem) {
                _this.config.dragItem = "row";
            }
            if (!_this.config.dragMode) {
                _this.config.dragMode = "both";
            }
        }
        _this._init();
        if (_this.config.columns) {
            _this._parseColumns(true);
        }
        if (_this._canDataParse()) {
            _this.data.parse(_this.config.data);
        }
        _this.selection = new Selection_1.Selection(_this, {
            disabled: !_this.config.selection,
        }, _this.events, _this._uid);
        _this.mount(container, _this._createView());
        (0, dom_1.awaitRedraw)().then(function () {
            if (_this.config.keyNavigation) {
                _this.keyManager = new KeyManager_1.KeyManager(function (e, focusId) {
                    if (focusId === _this._uid && _this.events.fire(types_1.GridEvents.beforeKeyDown, [e])) {
                        _this.events.fire(types_1.GridEvents.afterKeyDown, [e]);
                        return true;
                    }
                    return false;
                });
                _this._initHotKey();
                FocusManager_1.focusManager.setFocusId(_this._uid);
            }
        });
        if (config.autoEmptyRow && _this.data.getLength() === 0) {
            _this._addEmptyRow();
            _this.paint();
        }
        return _this;
    }
    Grid.prototype.destructor = function () {
        this._destructed = true;
        this._destroyContent();
        this.keyManager && this.keyManager.destructor();
        this.events && this.events.clear();
        this._events && this._events.clear();
        this.export = this.content = this.selection = null;
        this._activeFilters = this._filterData = this._scroll = this._touch = this._htmlEvents = this._hiddenFilters = null;
        this.unmount();
    };
    Grid.prototype.setColumns = function (columns) {
        var _this = this;
        this._destroyContent();
        this.config.columns = columns;
        this._parseColumns(true);
        if ((0, main_1.isAutoWidth)(this.config)) {
            this._applyAutoWidth();
        }
        this._setSummary();
        this._adjustColumns();
        this._checkFilters();
        this._checkMarks();
        this._normalizeSpans();
        this.paint();
        if (this.config.keyNavigation) {
            (0, dom_1.awaitRedraw)().then(function () {
                _this._initHotKey(true);
                _this.paint();
            });
        }
    };
    Grid.prototype.addRowCss = function (rowId, css) {
        var item = this.data.getItem(rowId);
        var styles = item.$css || "";
        if (!styles.match(new RegExp(css, "g"))) {
            item.$css = styles + " ".concat(css);
            this.paint();
        }
    };
    Grid.prototype.removeRowCss = function (rowId, css) {
        var item = this.data.getItem(rowId);
        var styles = item.$css ? item.$css.replace(css, "") : "";
        item.$css = styles;
        this.paint();
    };
    Grid.prototype.addCellCss = function (rowId, colId, css) {
        var column = this.getColumn(colId);
        if (column) {
            column.$cellCss = column.$cellCss || {};
            var cellStyle = column.$cellCss[rowId];
            if (cellStyle) {
                // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
                var newClass = cellStyle.match(new RegExp(css, "g")) ? "" : " ".concat(css);
                column.$cellCss[rowId] += newClass;
            }
            else if (this.data.getItem(rowId)) {
                column.$cellCss[rowId] = "".concat(css, " ");
            }
            this.paint();
        }
    };
    Grid.prototype.removeCellCss = function (rowId, colId, css) {
        var column = this.getColumn(colId);
        if (column) {
            if (column.$cellCss[rowId]) {
                column.$cellCss[rowId] = column.$cellCss[rowId].replace(css, "");
                this.paint();
            }
            else if (this.data.getItem(rowId)) {
                column.$cellCss[rowId] = "";
            }
        }
    };
    Grid.prototype.showColumn = function (colId) {
        var column = this.getColumn(colId);
        if (!column || !column.hidden) {
            return;
        }
        if (!this.events.fire(types_1.GridEvents.beforeColumnShow, [column]))
            return;
        this._showColumn(column);
        this.events.fire(types_1.GridEvents.afterColumnShow, [column]);
    };
    Grid.prototype.hideColumn = function (colId) {
        var column = this.getColumn(colId);
        if (!column || column.hidden) {
            return;
        }
        if (!this.events.fire(types_1.GridEvents.beforeColumnHide, [column]))
            return;
        this._hideColumn(column);
        this.events.fire(types_1.GridEvents.afterColumnHide, [column]);
    };
    Grid.prototype.isColumnHidden = function (colId) {
        var column = this.getColumn(colId);
        if (column) {
            return !!column.hidden;
        }
    };
    Grid.prototype.showRow = function (rowId) {
        if (!(0, core_1.isDefined)(rowId)) {
            return;
        }
        var id = rowId.toString();
        var row = this.data.getItem(id);
        if (!row || !row.hidden) {
            return;
        }
        if (!this.events.fire(types_1.GridEvents.beforeRowShow, [row]))
            return;
        this.data.update(id, { hidden: false });
        this._checkFilters(true);
        this.paint();
        this.events.fire(types_1.GridEvents.afterRowShow, [row]);
    };
    Grid.prototype.hideRow = function (rowId) {
        if (!(0, core_1.isDefined)(rowId)) {
            return;
        }
        var id = rowId.toString();
        var row = this.data.getItem(id);
        if (!row) {
            return;
        }
        if (!this.events.fire(types_1.GridEvents.beforeRowHide, [row]))
            return;
        this.data.update(id, { hidden: true });
        this._checkFilters(true);
        this._checkSelectFilterValue();
        this.paint();
        this.events.fire(types_1.GridEvents.afterRowHide, [row]);
    };
    Grid.prototype.isRowHidden = function (rowId) {
        if (!(0, core_1.isDefined)(rowId)) {
            return;
        }
        var row = this.data.getItem(rowId.toString());
        if (row) {
            return !!row.hidden;
        }
    };
    Grid.prototype.getScrollState = function () {
        return {
            x: this._scroll.left,
            y: this._scroll.top,
        };
    };
    Grid.prototype.scroll = function (x, y) {
        var gridBody = this.getRootView().refs.grid_body.el.querySelector(".scroll-view") ||
            this.getRootView().refs.grid_body.el;
        gridBody.scrollLeft = (x || x === 0) && typeof x === "number" ? x : gridBody.scrollLeft;
        gridBody.scrollTop = (y || y === 0) && typeof y === "number" ? y : gridBody.scrollTop;
        this.paint();
    };
    Grid.prototype.scrollTo = function (rowId, colId) {
        var _a = this.config, topSplit = _a.topSplit, bottomSplit = _a.bottomSplit, columns = _a.columns, $width = _a.$width, $height = _a.$height, $headerHeight = _a.$headerHeight;
        var filteredColumns = columns.filter(function (col) { return !col.hidden; });
        var rows = this.data.getRawData(0, -1, null, 2);
        var colInd = filteredColumns.findIndex(function (col) { return col.id == colId; });
        var rowInd = rows.findIndex(function (row) { return row.id == rowId; });
        if (!(0, core_1.isDefined)(colInd) || !(0, core_1.isDefined)(rowInd))
            return;
        var scrollState = this.getScrollState();
        var selectedCell = this.selection.getCell();
        var prevColInd = selectedCell && columns.findIndex(function (col) { return col.id == selectedCell.column.id; });
        var prevRowInd = selectedCell && rows.findIndex(function (row) { return row.id == selectedCell.row.id; });
        var leftSplit = (0, common_1.getCurrFixedCols)(this.config, types_1.Split.left).length;
        var rightSplit = (0, common_1.getCurrFixedCols)(this.config, types_1.Split.right).length;
        var isFixedLeft = leftSplit && prevColInd < leftSplit;
        var isFixedRight = rightSplit && prevColInd >= columns.length - rightSplit;
        var isFixedTop = topSplit && prevRowInd < topSplit;
        var isFixedBottom = bottomSplit && prevRowInd >= rows.length - bottomSplit;
        var x = (0, main_1.getTotalWidth)(filteredColumns.slice(0, colInd));
        var y = (0, main_1.getTotalHeight)(rows.slice(0, rowInd));
        if (leftSplit) {
            var leftFixedColsWidth = (0, main_1.getTotalWidth)((0, common_1.getCurrFixedCols)(this.config, types_1.Split.left));
            if ((!isFixedLeft && !isFixedRight && colInd < prevColInd) ||
                x - scrollState.x - leftFixedColsWidth < 0) {
                x -= leftFixedColsWidth;
            }
        }
        if (rightSplit) {
            var rightFixedColsWidth = (0, main_1.getTotalWidth)((0, common_1.getCurrFixedCols)(this.config, types_1.Split.right));
            if ((!isFixedLeft && !isFixedRight && colInd > prevColInd) ||
                $width + scrollState.x - x - filteredColumns[colInd].$width - rightFixedColsWidth < 0) {
                x += rightFixedColsWidth;
            }
        }
        if (topSplit) {
            var topFixedRowsHeight = (0, main_1.getTotalHeight)(rows.slice(0, topSplit));
            if ((!isFixedTop && !isFixedBottom && rowInd < prevRowInd) ||
                y - scrollState.y - topFixedRowsHeight < 0) {
                y -= topFixedRowsHeight;
            }
        }
        if (bottomSplit) {
            var bottomFixedRowsHeight = (0, main_1.getTotalHeight)(rows.slice(-bottomSplit));
            if ((!isFixedTop && !isFixedBottom && rowInd > prevRowInd) ||
                $height + scrollState.y - $headerHeight - y - rows[rowInd].$height - bottomFixedRowsHeight < 0) {
                y += bottomFixedRowsHeight;
            }
        }
        var gridRight = $width + scrollState.x;
        var gridBottom = $height + scrollState.y - $headerHeight;
        var cellTop = y - scrollState.y - rows[rowInd].$height;
        var cellLeft = x - scrollState.x - columns[colInd].$width;
        var cellBottom = y + rows[rowInd].$height * 2 + 18 - gridBottom;
        var cellRight = x + columns[colInd].$width * 2 + 18 - gridRight;
        var scrollTop = cellTop > 0 && cellBottom < 0 ? 0 : cellTop < 0 ? cellTop : cellBottom;
        var scrollLeft = cellLeft > 0 && cellRight < 0 ? 0 : cellLeft < 0 ? cellLeft : cellRight;
        this.scroll(scrollLeft + scrollState.x, scrollTop + scrollState.y);
    };
    Grid.prototype.adjustColumnWidth = function (colId, adjust) {
        if (adjust === void 0) { adjust = true; }
        var columns = this.config.columns.filter(function (col) { return !col.hidden; });
        var col = columns.filter(function (col) { return col.id === colId; });
        var totalCols = this._adjustColumnsWidth({
            rows: this.config.data,
            cols: col,
            totalCols: columns,
            adjust: adjust,
        });
        this.config.$totalWidth = columns.reduce(function (totalWidth, column) {
            if (totalCols[column.id]) {
                column.$fixedWidth = true;
                var max = column.maxWidth;
                var min = column.minWidth;
                var width = totalCols[column.id];
                column.$width = width;
                if (max && width > max) {
                    column.$width = max;
                }
                if (min && column.$width < min) {
                    column.$width = min;
                }
            }
            return (totalWidth += column.$width);
        }, 0);
        this.paint();
    };
    Grid.prototype.getCellRect = function (rowId, colId) {
        var _a, _b;
        var columns = this.config.columns.filter(function (col) { return !col.hidden; });
        var rows = this.data.getRawData(0, -1);
        var span = this.getSpan(rowId, colId);
        var colInd = columns.findIndex(function (obj) { return obj.id == (span ? span.column : colId); });
        var rowInd = rows.findIndex(function (obj) { return obj.id == (span ? span.row : rowId); });
        var x = (0, main_1.getTotalWidth)(columns.slice(0, colInd));
        var y = (0, main_1.getTotalHeight)(rows.slice(0, rowInd));
        return {
            x: x,
            y: y,
            height: (span === null || span === void 0 ? void 0 : span.rowspan) > 1 ? (0, cells_1.getHeight)(rows, span) : ((_a = rows[rowInd]) === null || _a === void 0 ? void 0 : _a.$height) || 0,
            width: (span === null || span === void 0 ? void 0 : span.colspan) > 1
                ? (0, cells_1.getWidth)(this.config.columns, span.colspan, this.config.columns.findIndex(function (item) { return item.id === span.column; }))
                : ((_b = columns[colInd]) === null || _b === void 0 ? void 0 : _b.$width) || 0,
        };
    };
    Grid.prototype.getColumn = function (colId) {
        var _a;
        for (var _i = 0, _b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.columns; _i < _b.length; _i++) {
            var col = _b[_i];
            if (col.id == colId) {
                return col;
            }
        }
    };
    Grid.prototype.addSpan = function (spanObj) {
        this.config.spans = this.config.spans || [];
        var index = (0, core_1.findIndex)(this.config.spans, function (span) { return "".concat(span.row) === "".concat(spanObj.row) && "".concat(span.column) === "".concat(spanObj.column); });
        if (index >= 0) {
            this.config.spans[index] = spanObj;
            return;
        }
        this.config.spans.push((0, Cells_1.normalizeSpan)(spanObj, this.config, this.data));
        this._checkMarks();
        this.paint();
    };
    Grid.prototype.getSpan = function (rowId, colId) {
        var _this = this;
        var _a;
        if (this.config.spans) {
            var rowIndex_1 = this.data.getIndex(rowId.toString());
            var colIndex_1 = this.config.columns.findIndex(function (col) { return col.id === colId; });
            var index = (0, core_1.findIndex)(this.config.spans, function (span) {
                var startRowInd = _this.data.getIndex(span.row.toString());
                var startColInd = _this.config.columns.findIndex(function (col) { return col.id === span.column; });
                var rows = {
                    start: startRowInd,
                    end: span.rowspan ? startRowInd + span.rowspan : startRowInd + 1,
                };
                var cols = {
                    start: startColInd,
                    end: span.colspan ? startColInd + span.colspan : startColInd + 1,
                };
                return (rowIndex_1 >= rows.start &&
                    rowIndex_1 < rows.end &&
                    colIndex_1 >= cols.start &&
                    colIndex_1 < cols.end);
            });
            return (_a = this.config) === null || _a === void 0 ? void 0 : _a.spans[index];
        }
    };
    Grid.prototype.removeSpan = function (rowId, colId) {
        if (this.config.spans) {
            var index = (0, core_1.findIndex)(this.config.spans, function (span) { return "".concat(span.row) == "".concat(rowId) && "".concat(span.column) == "".concat(colId); });
            this.config.spans.splice(index, 1);
            this.paint();
        }
    };
    Grid.prototype.editCell = function (rowId, colId, editorType) {
        var _a;
        var row = this.data.getItem(rowId);
        var col = this.getColumn(colId);
        if (!row || !col) {
            (0, ts_data_1.dhxWarning)("item not found");
            return;
        }
        var colEditorType = col.editorType;
        var span = this.getSpan(row.id, col.id);
        if (span && typeof span.text === "function") {
            return;
        }
        if (!editorType) {
            editorType =
                this.config.autoHeight && col.type !== "number" ? "textarea" : "input";
            if (col.type === "date") {
                editorType = "datePicker";
            }
            if (col.type === "boolean") {
                editorType = "checkbox";
            }
            if (colEditorType) {
                editorType = colEditorType;
            }
            if ((0, core_1.isDefined)(span === null || span === void 0 ? void 0 : span.text)) {
                editorType = this.config.autoHeight ? "textarea" : "input";
            }
        }
        if (col.type === "number") {
            var isTextSpanEditor = (0, core_1.isDefined)(span === null || span === void 0 ? void 0 : span.text) && ["input", "textarea"].includes(editorType);
            if (!isTextSpanEditor && !["input", "select", "combobox"].includes(editorType)) {
                return;
            }
        }
        if (!this.events.fire(types_1.GridEvents.beforeEditStart, [row, col, editorType])) {
            return;
        }
        if (((_a = this.config.$editable) === null || _a === void 0 ? void 0 : _a.editor) ||
            (this.config.$editable &&
                this.config.$editable.row === rowId &&
                this.config.$editable.col === colId &&
                this.config.$editable.editorType === editorType)) {
            return;
        }
        this.config.$editable = {
            row: row.id,
            col: col.id,
            isSpan: !!span,
            editorType: editorType,
        };
        if (!this.selection.config.disabled) {
            this.selection.setCell(rowId.toString(), colId.toString());
        }
        this.paint();
        this.events.fire(types_1.GridEvents.afterEditStart, [row, col, editorType]);
    };
    Grid.prototype.editEnd = function (withoutSave) {
        if (this.config.$editable && this.config.$editable.editor) {
            this.config.$editable.editor.endEdit(withoutSave);
        }
    };
    Grid.prototype.getSortingState = function () {
        return this._sortState;
    };
    Grid.prototype.getHeaderFilter = function (colId) {
        var _this = this;
        var col = this.getColumn(colId);
        if (!col) {
            return;
        }
        var filter = null;
        col.header.forEach(function (cell) {
            if (cell.content) {
                filter = _this.content[cell.content].element[colId];
            }
        });
        return filter;
    };
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    Grid.prototype.edit = function (rowId, colId, editorType) {
        this.editCell(rowId, colId, editorType);
    };
    Grid.prototype.paint = function () {
        var customHotkeysLength = this.config.hotkeys ? Object.keys(this.config.hotkeys).length : 0;
        if (this.keyManager && !(this.keyManager.getKeyStorageLength() - customHotkeysLength)) {
            this._initHotKey(true);
        }
        _super.prototype.paint.call(this);
    };
    Grid.prototype.getSummary = function (colId) {
        return __assign(__assign({}, this._commonSummary), (colId ? this._colSummary[colId] : {}));
    };
    Grid.prototype._createView = function () {
        var _this = this;
        return (0, dom_1.create)({
            render: function (vm, obj) {
                return _this._destructed
                    ? (0, dom_1.el)("div")
                    : (0, render_1.render)(vm, obj, _this._htmlEvents, _this.selection, _this._uid);
            },
            hooks: this._initHooks(),
        }, this);
    };
    Grid.prototype._parseColumns = function (configChanged) {
        if (configChanged === void 0) { configChanged = false; }
        var columns = this.config.columns.filter(function (col) { return !col.hidden; });
        this.normalizeColumns({ config: this.config, columns: columns, configChanged: configChanged });
        (0, data_1.countColumns)(this.config, columns);
    };
    Grid.prototype.normalizeColumns = function (_a) {
        var _this = this;
        var _b, _c, _d;
        var config = _a.config, columns = _a.columns, configChanged = _a.configChanged;
        config.$headerHeightMap = [];
        config.$footerHeightMap = [];
        config.$headerHeight = config.$footerHeight = 0;
        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
            var col = columns_1[_i];
            col.htmlEnable = (_b = col.htmlEnable) !== null && _b !== void 0 ? _b : config.htmlEnable;
            col.$cellCss = col.$cellCss || {};
            (0, data_1.normalizeArray)(col, "header");
            (0, data_1.normalizeArray)(col, "footer");
            if (col.minWidth && col.minWidth < 20)
                col.minWidth = 20;
            if (col.maxWidth && col.maxWidth < 20)
                col.maxWidth = 20;
            var width = col.minWidth || 100;
            if (col.width) {
                if (col.maxWidth && col.minWidth) {
                    width =
                        col.width >= col.minWidth && col.width <= col.maxWidth
                            ? col.width
                            : col.width >= col.maxWidth
                                ? col.maxWidth
                                : col.minWidth;
                }
                else if (col.maxWidth) {
                    width = col.width <= col.maxWidth ? col.width : col.maxWidth > 100 ? col.maxWidth : 100;
                }
                else if (col.minWidth) {
                    width = col.width >= col.minWidth ? col.width : col.minWidth;
                }
                else {
                    width = col.width;
                }
                width = width < 20 ? 20 : width;
            }
            col.$width = col.$width && !configChanged ? col.$width : width;
            if (col.$width > col.maxWidth) {
                col.$width = col.maxWidth;
            }
            if (col.$width < col.minWidth) {
                col.$width = col.minWidth;
            }
        }
        var _loop_1 = function (col) {
            if ((_c = col.header) === null || _c === void 0 ? void 0 : _c.length) {
                var currentHeight_1 = 0;
                col.header.forEach(function (header, index) {
                    if (config.headerAutoHeight) {
                        currentHeight_1 = _this.getNormalizeContentHeight(header, col, config);
                    }
                    else {
                        currentHeight_1 = config.headerRowHeight;
                    }
                    if (currentHeight_1 > (config.$headerHeightMap[index] || 0)) {
                        config.$headerHeightMap[index] = Math.max(currentHeight_1, config.headerRowHeight);
                    }
                });
            }
            if ((_d = col.footer) === null || _d === void 0 ? void 0 : _d.length) {
                var currentHeight_2 = 0;
                col.footer.forEach(function (footer, index) {
                    if (config.footerAutoHeight) {
                        currentHeight_2 = _this.getNormalizeContentHeight(footer, col, config);
                    }
                    else {
                        currentHeight_2 = config.footerRowHeight;
                    }
                    if (currentHeight_2 > (config.$footerHeightMap[index] || 0)) {
                        config.$footerHeightMap[index] = Math.max(currentHeight_2, config.footerRowHeight);
                    }
                });
            }
        };
        for (var _e = 0, columns_2 = columns; _e < columns_2.length; _e++) {
            var col = columns_2[_e];
            _loop_1(col);
        }
        config.$headerHeight = config.$headerHeightMap.reduce(function (acc, cur) { return (acc += cur); }, 0);
        config.$footerHeight = config.$footerHeightMap.reduce(function (acc, cur) { return (acc += cur); }, 0);
    };
    Grid.prototype.getNormalizeContentHeight = function (row, col, config) {
        return this.config.footerRowHeight;
    };
    Grid.prototype._parseData = function () {
        this._detectColsTypes();
        this.config.data = this.data.map(function (row) { return row; });
        this.config.data = this._prepareData(this.data);
        this._checkMarks();
        this._applyLocalFilter();
        this._checkFilters();
    };
    Grid.prototype._createCollection = function () {
        this.data = new ts_data_1.DataCollection(null, this.events);
    };
    Grid.prototype._getRowIndex = function (rowId) {
        return this.data.getIndex(rowId);
    };
    Grid.prototype._setEventHandlers = function () {
        var _this = this;
        var updater = function (_a) {
            var source = _a.source, target = _a.target, updateObj = __rest(_a, ["source", "target"]);
            if (source === null || source === void 0 ? void 0 : source.length) {
                source.map(function (selectedId) { return _this.data.exists(selectedId) && _this.data.update(selectedId, updateObj); });
            }
            if (_this.data.exists(target)) {
                _this.data.update(target, updateObj);
            }
        };
        this.data.events.on(ts_data_1.DataEvents.load, function () {
            _this._applyLocalFilter(true);
            _this._parseData();
            _this._parseColumns();
            if (_this.config.autoEmptyRow) {
                var emptyRow = _this.data.find({ by: "$emptyRow", match: true });
                if (emptyRow) {
                    _this.data.move(emptyRow.id, _this.data.getLength() - 1);
                }
                else {
                    _this._addEmptyRow();
                }
            }
            if (_this.config.data instanceof ts_data_1.DataCollection) {
                (0, dom_1.awaitRedraw)().then(function () { return _this._normalizeSpans(); });
            }
            else {
                _this._normalizeSpans();
            }
            _this.paint();
        });
        this.data.events.on(ts_data_1.DataEvents.change, function (id, status, obj) {
            if (status === "load") {
                return;
            }
            if (status === "setPage") {
                (0, dom_1.awaitRedraw)().then(function () {
                    var colVisible = _this.config.columns.find(function (col) { return col.hidden !== true; });
                    _this.scrollTo(_this.data.getId(obj[0]).toString(), colVisible.id.toString());
                    _this._render();
                });
                return;
            }
            if (status === "sort") {
                if (!obj.dir) {
                    if (_this._sortState.by === obj.by) {
                        _this._sortState.dir = _this._sortState.dir === "asc" ? "desc" : "asc";
                    }
                    else {
                        _this._sortState.dir = "asc";
                    }
                }
                else {
                    _this._sortState.dir = obj.dir;
                }
                _this._sortState.by = obj.by;
            }
            else if (status === "add" || status === "update" || status === "remove") {
                if ((0, core_1.isId)(id) && status === "remove") {
                    var removed = _this.selection.getCells().find(function (cell) { return cell.row.id === id; });
                    removed && _this.selection.removeCell(removed.row.id, removed.column.id);
                }
                _this.config.data = _this._prepareData(_this.data);
            }
            else {
                if ((0, ts_data_1.isTreeCollection)(_this.data)) {
                    _this.config.data = _this._prepareData(_this.data);
                }
                else {
                    _this._setSummary();
                }
                _this._adjustColumns();
            }
            if ((0, core_1.isId)(id)) {
                _this._checkFilters();
                _this._checkSelectFilterValue();
            }
            _this._detectColsTypes();
            _this._removeMarks();
            _this._checkMarks();
            if (_this.config.autoEmptyRow && (!_this._activeFilters || (0, core_1.isEmptyObj)(_this._activeFilters))) {
                var emptyRow = _this.data.find({ by: "$emptyRow", match: true });
                if (emptyRow) {
                    if (emptyRow.id === id)
                        return;
                    _this.data.move(emptyRow.id, _this.data.getLength() - 1);
                }
                else {
                    _this._addEmptyRow();
                }
            }
            switch (status) {
                case "add":
                case "remove":
                case "sort":
                    _this._normalizeSpans();
            }
            _this._render();
        });
        this.data.events.on(ts_data_1.DataEvents.filter, function (filters) {
            if (!filters && !_this.data.getRawFilters({ permanent: true })) {
                _this._applyLocalFilter();
            }
            if (!filters || (0, ts_data_1.isOnlyPermanentFilters)(filters)) {
                _this._filterData = _this.data.map(function (el) { return el; }) || [];
                _this._setUniqueData();
                _this._clearFilterValue();
            }
            else {
                _this._checkFilters();
            }
            _this._setSummary();
            _this._removeMarks();
            _this._checkMarks();
            _this._normalizeSpans();
            _this.paint();
        });
        this.data.events.on(ts_data_1.DataEvents.removeAll, function () {
            _this._hiddenFilters = {};
            _this.config.columns.map(function (col) {
                col.header.map(function (cell) {
                    if (cell.content && (cell.content === "selectFilter" || cell.content === "comboFilter")) {
                        col.$uniqueData = [];
                    }
                });
            });
            if (!(0, core_1.isEmptyObj)(_this._activeFilters)) {
                _this.data.resetFilter();
            }
            _this._clearFilterValue(true);
        });
        this.events.on(ts_data_1.DragEvents.beforeDrag, function (data, events, _ghost, type) {
            switch (type) {
                case "row":
                    if (_this.data.isGrouped()) {
                        return false;
                    }
                    return _this.events.fire(types_1.GridEvents.beforeRowDrag, [data, events]);
            }
        });
        this.events.on(ts_data_1.DragEvents.dragStart, function (data, events, type) {
            switch (type) {
                case "row":
                    updater(__assign(__assign({}, data), { $dragtarget: true }));
                    _this.events.fire(types_1.GridEvents.dragRowStart, [data, events]);
                    _this._autoScroll("vertical");
                    break;
            }
        });
        this.events.on(ts_data_1.DragEvents.dragIn, function (data, events, type) {
            switch (type) {
                case "row":
                    _this.events.fire(types_1.GridEvents.dragRowIn, [data, events]);
                    break;
            }
        });
        this.events.on(ts_data_1.DragEvents.dragOut, function (data, events, type) {
            switch (type) {
                case "row":
                    _this.events.fire(types_1.GridEvents.dragRowOut, [data, events]);
                    break;
            }
        });
        this.events.on(ts_data_1.DragEvents.canDrop, function (data, events, type) {
            switch (type) {
                case "row":
                    updater(__assign(__assign({}, data), { $drophere: true }));
                    _this.events.fire(types_1.GridEvents.canRowDrop, [data, events]);
                    break;
            }
        });
        this.events.on(ts_data_1.DragEvents.cancelDrop, function (data, events, type) {
            switch (type) {
                case "row":
                    updater(__assign(__assign({}, data), { $drophere: undefined, $dragtarget: undefined }));
                    _this.events.fire(types_1.GridEvents.cancelRowDrop, [data, events]);
                    break;
            }
        });
        this.events.on(ts_data_1.DragEvents.beforeDrop, function (data, events, type) {
            switch (type) {
                case "row":
                    return _this.events.fire(types_1.GridEvents.beforeRowDrop, [data, events]);
            }
        });
        this.events.on(ts_data_1.DragEvents.afterDrop, function (data, events, type) {
            var _a;
            var source = data.source, target = data.target, start = data.start;
            switch (type) {
                case "row":
                    {
                        var item = _this.data.getItem(data.start);
                        if (!item || source.some(function (id) { return id == target; }))
                            return;
                        for (var _i = 0, _b = _this.config.columns; _i < _b.length; _i++) {
                            var col = _b[_i];
                            if (typeof item[col.id] === "undefined") {
                                _this.data.update(item.id, (_a = {}, _a[col.id] = null, _a), true);
                            }
                        }
                        var initData = _this.data.getInitialData();
                        var startIndex = initData === null || initData === void 0 ? void 0 : initData.findIndex(function (item) { return item.id == start; });
                        var targetIndex = initData === null || initData === void 0 ? void 0 : initData.findIndex(function (item) { return item.id == target; });
                        if (startIndex > -1 && targetIndex > -1) {
                            if ((source === null || source === void 0 ? void 0 : source.length) > 1) {
                                var moveData = [];
                                var _loop_2 = function (id) {
                                    var itemIndex = initData === null || initData === void 0 ? void 0 : initData.findIndex(function (item) { return item.id == id; });
                                    var moveItem = initData === null || initData === void 0 ? void 0 : initData.splice(itemIndex, 1)[0];
                                    moveData.push(moveItem);
                                };
                                for (var _c = 0, source_1 = source; _c < source_1.length; _c++) {
                                    var id = source_1[_c];
                                    _loop_2(id);
                                }
                                targetIndex = initData === null || initData === void 0 ? void 0 : initData.findIndex(function (item) { return item.id == target; });
                                if (targetIndex > 0)
                                    ++targetIndex;
                                initData === null || initData === void 0 ? void 0 : initData.splice.apply(initData, __spreadArray([targetIndex, 0], moveData, false));
                            }
                            else {
                                initData === null || initData === void 0 ? void 0 : initData.splice(targetIndex, 0, initData === null || initData === void 0 ? void 0 : initData.splice(startIndex, 1)[0]);
                            }
                        }
                        _this._adjustColumns();
                        _this._checkFilters();
                        _this.paint();
                        _this.events.fire(types_1.GridEvents.afterRowDrop, [data, events]);
                    }
                    break;
            }
        });
        this.events.on(ts_data_1.DragEvents.afterDrag, function (data, events, type) {
            switch (type) {
                case "row":
                    updater(__assign(__assign({}, data), { $dragtarget: undefined }));
                    _this.events.fire(types_1.GridEvents.afterRowDrag, [data, events]);
                    _this._normalizeSpans();
                    break;
            }
        });
        // TODO: When introducing touch events, remove system events
        this.events.on(types_1.GridEvents.cellMouseDown, function (row, col, e) {
            if (!e.targetTouches) {
                _this._dragStart(e);
            }
            else {
                _this._touch.timer = setTimeout(function () {
                    _this._dragStart(e);
                }, _this._touch.duration);
                if (!_this._touch.timeStamp) {
                    _this._touch.timeStamp = +e.timeStamp.toFixed();
                }
                else {
                    var doubleTap = _this._touch.dblDuration >= _this._touch.timeStamp - +e.timeStamp.toFixed();
                    if (doubleTap) {
                        if ((col.editable !== false && _this.config.editable) || col.editable) {
                            _this.editCell(row.id, col.id, col.editorType);
                        }
                        e.preventDefault();
                        // to simulate on touch devices
                        _this.events.fire(types_1.GridEvents.cellDblClick, [row, col, e]);
                    }
                    _this._touch.timeStamp = null;
                }
                setTimeout(function () {
                    _this._touch.timeStamp = null;
                }, _this._touch.dblDuration);
            }
        });
        this._events.on(types_1.GridSystemEvents.cellTouchMove, function (_row, _col, e) {
            _this._touch.start && e.preventDefault();
            _this._clearTouchTimer();
        });
        this._events.on(types_1.GridSystemEvents.cellTouchEnd, function () {
            _this._touch.start = false;
            _this._clearTouchTimer();
        });
        this.events.on(types_1.GridEvents.filterChange, function (val, colId, filter, silent) {
            var _a, _b, _c;
            if (!_this.events.fire(types_1.GridEvents.beforeFilter, [val, colId])) {
                return;
            }
            if (_this.config.autoEmptyRow) {
                var emptyRow = _this.data.find({ by: "$emptyRow", match: true });
                if (emptyRow) {
                    _this.data.remove(emptyRow.id);
                }
            }
            if (!_this._activeFilters) {
                _this._activeFilters = {};
            }
            var columnConfig = _this.getColumn(colId);
            var conf = columnConfig.header.filter(function (item) { return item.content === filter && item.customFilter !== undefined; })[0];
            if ((filter === "comboFilter" && val !== undefined) || (filter !== "comboFilter" && val !== "")) {
                var options_1 = (0, data_1.getEditorOptions)(columnConfig);
                if ((columnConfig.editorType === "combobox" ||
                    columnConfig.editorType === "select" ||
                    columnConfig.editorType === "multiselect") &&
                    options_1) {
                    if (Array.isArray(val)) {
                        val = val.map(function (item) {
                            var _a;
                            return (((_a = options_1.find(function (option) {
                                return typeof option === "string" ? option === item : option.value === item;
                            })) === null || _a === void 0 ? void 0 : _a.id) || item);
                        });
                    }
                    else {
                        val =
                            (_b = (_a = options_1.find(function (option) {
                                return typeof option === "string" ? option === val : option.value === val;
                            })) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : val;
                    }
                }
                var match = function (colId) {
                    var col = _this.getColumn(colId);
                    return function (val, match, obj, multi) {
                        return _this.content[filter].match({ val: val, match: match, obj: obj, multi: multi, col: col });
                    };
                };
                _this._activeFilters[colId] = {
                    by: colId,
                    match: val,
                    compare: (_c = conf === null || conf === void 0 ? void 0 : conf.customFilter) !== null && _c !== void 0 ? _c : match(colId),
                    multi: (columnConfig === null || columnConfig === void 0 ? void 0 : columnConfig.editorType) === "multiselect",
                };
            }
            else {
                delete _this._activeFilters[colId];
            }
            if (!silent) {
                _this.data.filter(_this._activeFilters);
            }
        });
        this.events.on(types_1.GridEvents.scroll, function (scrollState) {
            _this._scroll = { top: scrollState.y, left: scrollState.x };
            _this.editEnd();
            _this.paint();
        });
        this.events.on(types_1.GridEvents.cellDblClick, function (row, col, e) {
            var targetCheckbox = (0, html_1.locateNodeByClassName)(e, "dhx_boolean-cell");
            if (targetCheckbox || row.hasOwnProperty("$group"))
                return;
            if ((col.editable !== false && _this.config.editable) || col.editable) {
                _this.editCell(row.id, col.id, col.editorType);
            }
        });
        this.events.on(types_1.GridEvents.afterEditEnd, function (value, eRow, eCol) {
            var _a;
            var _b;
            if (((_b = _this.config.$editable) === null || _b === void 0 ? void 0 : _b.editor) &&
                (_this.config.$editable.col !== eCol.id || _this.config.$editable.row !== eRow.id))
                return;
            var row;
            var col;
            if (!_this.config.$editable) {
                row = eRow.id;
                col = eCol.id;
            }
            else {
                row = _this.config.$editable.row;
                col = _this.config.$editable.col;
            }
            var span = _this.getSpan(row, col);
            if ((0, core_1.isDefined)(span === null || span === void 0 ? void 0 : span.text) && value !== undefined) {
                span.text = value.toString();
            }
            else {
                var item = _this.data.getItem(row);
                delete item.$emptyRow;
                if (value !== undefined) {
                    _this.data.update(row, __assign(__assign({}, item), (_a = {}, _a[col] = value, _a)));
                }
            }
            _this.config.$editable = null;
            _this.paint();
        });
        this.events.on(types_1.GridEvents.headerCellMouseDown, function (cell, col, event) {
            var target = event.target;
            var resizedColumn = target.getAttribute("dhx_resized");
            if (resizedColumn && _this.events.fire(types_1.GridEvents.beforeResizeStart, [col, event])) {
                (0, columnsResizer_1.startResize)(_this, resizedColumn.toString(), event, function () {
                    _this.paint();
                    _this.config.$resizing = null;
                    _this.events.fire(types_1.GridEvents.afterResizeEnd, [col, event]);
                });
            }
            if (event.targetTouches) {
                if (!_this._touch.timeStamp) {
                    _this._touch.timeStamp = +event.timeStamp.toFixed();
                }
                else {
                    var doubleTap = _this._touch.dblDuration >= _this._touch.timeStamp - +event.timeStamp.toFixed();
                    if (doubleTap) {
                        event.preventDefault();
                        // to simulate on touch devices
                        _this.events.fire(types_1.GridEvents.headerCellDblClick, [cell, col, event]);
                    }
                    _this._touch.timeStamp = null;
                }
                setTimeout(function () {
                    _this._touch.timeStamp = null;
                }, _this._touch.dblDuration);
            }
        });
        this.events.on(types_1.GridEvents.footerCellDblClick, function (cell, col, event) {
            if (event.targetTouches) {
                if (!_this._touch.timeStamp) {
                    _this._touch.timeStamp = +event.timeStamp.toFixed();
                }
                else {
                    var doubleTap = _this._touch.dblDuration >= _this._touch.timeStamp - +event.timeStamp.toFixed();
                    if (doubleTap) {
                        event.preventDefault();
                        // to simulate on touch devices
                        _this.events.fire(types_1.GridEvents.footerCellDblClick, [cell, col, event]);
                    }
                    _this._touch.timeStamp = null;
                }
                setTimeout(function () {
                    _this._touch.timeStamp = null;
                }, _this._touch.dblDuration);
            }
        });
        this.events.on(types_1.GridEvents.resize, function () { return _this._parseColumns(); });
        this.events.on(types_1.GridEvents.afterResizeEnd, function (col) {
            var _a;
            _this.config.columns = (_a = _this.config.columns) === null || _a === void 0 ? void 0 : _a.map(function (c) {
                if (c.id == col.id)
                    c.width = col.$width;
                return c;
            });
            _this._parseColumns();
        });
    };
    Grid.prototype._addEmptyRow = function () {
        var id = this.data.getId(this.data.getLength() - 1);
        var lastRow = this.data.getItem(id);
        var columns = this.config.columns.filter(function (col) { return !col.hidden; });
        var isEmpty = (0, main_1.isRowEmpty)(lastRow);
        if (!isEmpty) {
            this.data.add(columns.reduce(function (total, col) {
                total[col.id] = "";
                return total;
            }, { $emptyRow: true }));
        }
    };
    Grid.prototype._sort = function (by, sortAs) {
        var column = this.getColumn(by);
        if (!this.events.fire(types_1.GridEvents.beforeSort, [column, this._sortState.dir === "asc" ? "desc" : "asc"])) {
            return;
        }
        var dir = "asc";
        if (this._sortState.by === by) {
            dir = this._sortState.dir === "asc" ? "desc" : "asc";
        }
        var defaultAs = function (item) {
            if (item && column.type === "date") {
                return typeof item === "string"
                    ? (0, date_1.stringToDate)(item, column.dateFormat).getTime()
                    : item.getTime();
            }
            return item ? "".concat(item) : "";
        };
        this.data.sort({
            by: by,
            dir: dir,
            as: sortAs !== null && sortAs !== void 0 ? sortAs : defaultAs,
        });
        this.events.fire(types_1.GridEvents.afterSort, [column, dir]);
    };
    Grid.prototype._clearTouchTimer = function () {
        if (this._touch.timer) {
            clearTimeout(this._touch.timer);
            this._touch.timer = null;
        }
    };
    Grid.prototype._checkFilters = function (reset) {
        if (reset === void 0) { reset = false; }
        if ((0, core_1.isEmptyObj)(this._activeFilters)) {
            if (reset) {
                this.data.resetFilter();
            }
            this._filterData = this.data.map(function (el) { return el; }) || [];
            this._setUniqueData();
        }
        else {
            var permFilters = this.data.getRawFilters({ permanent: true });
            this.data.filter(permFilters, { $restore: true }, true);
            this._filterData = this.data.map(function (el) { return el; }) || [];
            this._setUniqueData();
            this.data.filter(null, { $restore: true }, true);
            this._filterData = this.data.map(function (el) { return el; }) || [];
            this._setUniqueData(true);
        }
    };
    Grid.prototype._setUniqueData = function (sync) {
        var _this = this;
        if (sync === void 0) { sync = false; }
        if (!this._filterData)
            return;
        this.config.columns.forEach(function (col) {
            col.header.forEach(function (cell) {
                if (cell.content && (cell.content === "selectFilter" || cell.content === "comboFilter")) {
                    var multi = col.header.some(function (i) { var _a; return (_a = i.filterConfig) === null || _a === void 0 ? void 0 : _a.multiselection; });
                    var customFilter = col.header.some(function (i) { var _a; return (_a = i.filterConfig) === null || _a === void 0 ? void 0 : _a.filter; });
                    if (!sync || (sync && !multi && !customFilter)) {
                        var unique = (0, data_1.getUnique)(_this._filterData, col.id, multi);
                        var options_2 = (0, data_1.getEditorOptions)(col);
                        if ((col.editorType === "combobox" ||
                            col.editorType === "select" ||
                            col.editorType === "multiselect") &&
                            options_2) {
                            unique = unique.map(function (item) {
                                var foundItem = options_2.find(function (option) {
                                    return typeof option === "string" ? item === option : item === option.id;
                                });
                                return foundItem && typeof foundItem !== "string" ? foundItem.value : item;
                            });
                        }
                        unique =
                            col.type !== "string"
                                ? Array.from(new Set(unique.map(function (val) { return (0, data_1.applyPattern)(val, col); })))
                                : unique;
                        if (!sync) {
                            col.$uniqueData = unique;
                            if (col.$activeFilterData)
                                delete col.$activeFilterData;
                        }
                        else {
                            col.$activeFilterData = unique;
                        }
                    }
                }
            });
        });
    };
    Grid.prototype._checkSelectFilterValue = function () {
        var _a;
        var filter = (_a = this.content) === null || _a === void 0 ? void 0 : _a.selectFilter;
        if (!filter)
            return;
        for (var key in filter.value) {
            var col = this.getColumn(key);
            var val = filter.value[key];
            if (!col.hidden && val && !col.$uniqueData.includes(val)) {
                filter.element[key].clear();
            }
        }
    };
    Grid.prototype._clearFilterValue = function (allCols) {
        var _this = this;
        if (allCols === void 0) { allCols = false; }
        var filters = ["selectFilter", "inputFilter"].map(function (i) { var _a; return (_a = _this.content) === null || _a === void 0 ? void 0 : _a[i]; }).filter(function (i) { return i; });
        filters.forEach(function (filter) {
            for (var key in filter.value) {
                if (filter.value[key] && (allCols || !_this.getColumn(key).hidden)) {
                    filter.element[key].clear(true);
                }
            }
        });
    };
    Grid.prototype._adjustColumns = function () {
        var _this = this;
        var columns = this.config.columns.filter(function (col) { return !col.hidden; });
        var adjustableCol = [];
        var allAdjustableCol = [];
        var totalColumns = {};
        columns.forEach(function (column) {
            column.adjust ? adjustableCol.push(column) : allAdjustableCol.push(column);
        });
        if (adjustableCol.length || allAdjustableCol.length) {
            var data_2 = !this.config.data || !this.config.data.length ? this.data.map(function (row) { return row; }) : this.config.data;
            adjustableCol.forEach(function (column) {
                totalColumns = __assign(__assign({}, totalColumns), _this._adjustColumnsWidth({
                    rows: data_2,
                    cols: [column],
                    totalCols: columns,
                    adjust: column.adjust,
                }));
            });
            if (allAdjustableCol.length) {
                totalColumns = __assign(__assign({}, totalColumns), this._adjustColumnsWidth({
                    rows: data_2,
                    cols: allAdjustableCol,
                    totalCols: columns,
                }));
            }
        }
        this.config.$totalWidth = columns.reduce(function (totalWidth, column) {
            if (totalColumns[column.id]) {
                column.$fixedWidth = true;
                var max = column.maxWidth;
                var min = column.minWidth;
                var width = totalColumns[column.id];
                column.$width = width;
                if (max && width > max) {
                    column.$width = max;
                }
                if (min && column.$width < min) {
                    column.$width = min;
                }
            }
            return (totalWidth += column.$width);
        }, 0);
    };
    Grid.prototype._prepareData = function (data) {
        var _this = this;
        if (this.config.autoHeight ||
            this.config.headerAutoHeight ||
            this.config.footerAutoHeight) {
            this.config.autoHeight = this
                .config.headerAutoHeight = this
                .config.footerAutoHeight = false;
        }
        this._normalizeDataType();
        this._setSummary();
        this._adjustColumns();
        return data.map(function (row) {
            row.$height = Number(row.height) || _this.config.rowHeight;
            return row;
        });
    };
    Grid.prototype._adjustColumnsWidth = function (_a) {
        var _b, _c, _d;
        var _this = this;
        var rows = _a.rows, cols = _a.cols, _e = _a.adjust, adjust = _e === void 0 ? this.config.adjust : _e;
        var HORIZONTAL_OFFSET = 24;
        var iconOffset = function (col) { return ((0, main_1.isSortable)(_this.config, col) ? 16 : 0); };
        var columnsWidth = {};
        if (adjust === "header" || adjust === true) {
            var currentCols = cols.filter(function (col) { return col.header; });
            var data = (0, data_1.getMaxColsWidth)(this._prepareColumnData(currentCols, "header"), currentCols, {
                font: "normal 14.4px Arial",
            }, "header");
            if (data) {
                for (var _i = 0, _f = Object.entries(data); _i < _f.length; _i++) {
                    var _g = _f[_i], key = _g[0], value = _g[1];
                    columnsWidth = Object.assign(columnsWidth, (_b = {},
                        _b[key] = +value + HORIZONTAL_OFFSET + iconOffset(this.getColumn(key)),
                        _b));
                }
            }
        }
        if (adjust === "footer" || adjust === true) {
            var currentCols = cols.filter(function (col) { return col.footer; });
            var data = (0, data_1.getMaxColsWidth)(this._prepareColumnData(currentCols, "footer"), currentCols, {
                font: "normal 14.4px Arial",
            }, "footer");
            if (data) {
                for (var _h = 0, _j = Object.entries(data); _h < _j.length; _h++) {
                    var _k = _j[_h], key = _k[0], value = _k[1];
                    if ((columnsWidth[key] && columnsWidth[key] < +value + HORIZONTAL_OFFSET) ||
                        !columnsWidth[key]) {
                        columnsWidth = Object.assign(columnsWidth, (_c = {},
                            _c[key] = +value + HORIZONTAL_OFFSET,
                            _c));
                    }
                }
            }
        }
        if (adjust === "data" || adjust === true) {
            var data = (0, data_1.getMaxColsWidth)(rows, cols, {
                font: "normal 14.4px Arial",
            }, "data");
            if (data) {
                for (var _l = 0, _m = Object.entries(data); _l < _m.length; _l++) {
                    var _o = _m[_l], key = _o[0], value = _o[1];
                    if ((columnsWidth[key] && columnsWidth[key] < +value + HORIZONTAL_OFFSET) ||
                        !columnsWidth[key]) {
                        columnsWidth = Object.assign(columnsWidth, (_d = {},
                            _d[key] = +value + HORIZONTAL_OFFSET,
                            _d));
                    }
                }
            }
        }
        return columnsWidth;
    };
    Grid.prototype._prepareColumnData = function (data, type) {
        var _a;
        var _b, _c;
        var totalRow = [];
        for (var i = 0; i < data.length; i++) {
            var row = [];
            var column = data[i];
            for (var k = 0; k < (column === null || column === void 0 ? void 0 : column[type].length); k++) {
                var rowData = {};
                var text = (_b = column === null || column === void 0 ? void 0 : column[type][k]) === null || _b === void 0 ? void 0 : _b.text;
                if (text) {
                    if (typeof text === "function") {
                        text = text(this.getSummary(column.id));
                    }
                    var isHTML = (_c = column === null || column === void 0 ? void 0 : column[type][k]) === null || _c === void 0 ? void 0 : _c.htmlEnable;
                    rowData[column.id] = text || "";
                    if (isHTML) {
                        rowData[column.id] = (0, main_1.removeHTMLTags)(rowData[column.id]);
                    }
                }
                else {
                    rowData[column.id] = "";
                }
                row.push(rowData);
            }
            for (var j = 0; j < row.length; j++) {
                for (var _i = 0, _d = Object.entries(row[j]); _i < _d.length; _i++) {
                    var _e = _d[_i], key = _e[0], value = _e[1];
                    totalRow[j] = __assign({}, totalRow[j]) || {};
                    totalRow[j] = Object.assign(totalRow[j], (_a = {}, _a[key] = value, _a));
                }
            }
        }
        return totalRow;
    };
    Grid.prototype._dragStart = function (event) {
        if (this.config.dragMode &&
            (this.config.dragItem === "row" || this.config.dragItem === "both") &&
            !this.config.$editable) {
            var column = this.getColumn(event.target.getAttribute("data-dhx-col-id"));
            if ((column === null || column === void 0 ? void 0 : column.draggable) === false)
                return;
            var item = (0, html_1.locateNode)(event, "data-dhx-id");
            var itemId = item && item.getAttribute("data-dhx-id");
            if (event.targetTouches) {
                this._touch.start = true;
            }
            ts_data_1.dragManager.onMouseDown({
                event: event,
                source: [itemId],
                itemsForGhost: [this._getRowGhost([itemId])],
                type: "row",
            });
        }
    };
    Grid.prototype._getRowGhost = function (ids) {
        var container = this._container || (0, html_1.toNode)(this._uid);
        var rows = ids.map(function (id) { return container.querySelector(".dhx_grid-row[data-dhx-id=\"".concat(id, "\"]")); });
        var ghostContainer = document.createElement("div");
        rows.forEach(function (node) { return node && ghostContainer.appendChild(node.cloneNode(true)); });
        return ghostContainer;
    };
    Grid.prototype._initHooks = function () {
        var _this = this;
        return {
            didMount: function () {
                if (_this._canDataParse(true)) {
                    if (!_this._container) {
                        _this._applyAutoWidth();
                    }
                    _this.data.parse(_this.config.data);
                }
                if (_this.config.autoWidth) {
                    _this._parseColumns();
                }
            },
        };
    };
    Grid.prototype._normalizeDataType = function () {
        var _this = this;
        var numberColumns = this.config.columns.reduce(function (arr, col) {
            if (col.type === "number")
                arr.push(col);
            return arr;
        }, []);
        if (!numberColumns.length)
            return;
        this.data.forEach(function (item) {
            var _a;
            for (var _i = 0, numberColumns_1 = numberColumns; _i < numberColumns_1.length; _i++) {
                var col = numberColumns_1[_i];
                var value = (0, data_1.getValueForNumberColumn)(col, item[col.id]);
                if (Number.isNaN(value)) {
                    throw new Error("Incorrect data in column with type 'number', see docs: https://docs.dhtmlx.com/suite/grid/api/api_gridcolumn_properties/");
                }
                else if (item[col.id] !== value) {
                    _this.data.update(item.id, (_a = {}, _a[col.id] = value, _a), true);
                }
            }
        });
    };
    Grid.prototype._applyLocalFilter = function (beforePrepareData) {
        if (beforePrepareData === void 0) { beforePrepareData = false; }
        var filterConfig = { add: true, permanent: true, $local: true };
        var filters = this.data.getRawFilters();
        var localFilter = Object.keys(filters || {}).find(function (key) { return filters[key].config.$local; });
        if (localFilter) {
            filterConfig.id = localFilter;
        }
        if (beforePrepareData) {
            this.data.filter(function (i) { return i; }, filterConfig, true);
        }
        else {
            this.data.filter(function (i) { return i && !i.hidden; }, filterConfig, true);
        }
    };
    Grid.prototype._normalizeSpans = function () {
        var _this = this;
        var _a;
        this.config.spans = (_a = this.config.spans) === null || _a === void 0 ? void 0 : _a.map(function (span) { return (0, Cells_1.normalizeSpan)(span, _this.config, _this.data); });
    };
    Grid.prototype._hideColumn = function (column) {
        column.hidden = true;
        this.config.$totalWidth -= column.$width;
        this._parseColumns();
        this.config.data = this._prepareData(this.data);
        var filter = this._activeFilters && this._activeFilters[column.id];
        if (filter) {
            if (!this._hiddenFilters) {
                this._hiddenFilters = {};
            }
            this._hiddenFilters[column.id] = filter;
            delete this._activeFilters[column.id];
            this._checkFilters();
        }
        this._normalizeSpans();
        this.paint();
    };
    Grid.prototype._showColumn = function (column) {
        column.hidden = false;
        this.config.$totalWidth += column.$width;
        this._parseColumns();
        this.config.data = this._prepareData(this.data);
        var filter = this._hiddenFilters && this._hiddenFilters[column.id];
        if (filter) {
            this._activeFilters[column.id] = filter;
            delete this._hiddenFilters[column.id];
            this._checkFilters();
            this._checkSelectFilterValue();
        }
        this._normalizeSpans();
        this.paint();
    };
    Grid.prototype._setSummary = function () {
        var _this = this;
        var rows = this.data.getRawData(0, -1, null, 2).filter(function (i) { return i != i.$group && i != i.$groupSummary; });
        if (this.config.type === "tree") {
            rows = rows.filter(function (i) { return !_this.data.haveItems(i.id); });
        }
        if (this.config.summary) {
            Object.entries(this.config.summary).forEach(function (_a) {
                var key = _a[0], method = _a[1];
                _this._commonSummary[key] = _this._applyMethod(method, rows);
            });
        }
        this.config.columns.forEach(function (col) {
            var _a;
            if (col.summary) {
                var id_1 = col.id, summary = col.summary;
                if (!_this._colSummary[id_1])
                    _this._colSummary[id_1] = {};
                if (typeof summary === "string") {
                    _this._colSummary[id_1][summary] = (_a = ts_data_1.methods[summary]) === null || _a === void 0 ? void 0 : _a.call(ts_data_1.methods, rows, id_1);
                }
                else {
                    Object.entries(summary).forEach(function (_a) {
                        var key = _a[0], method = _a[1];
                        _this._colSummary[id_1][key] = _this._applyMethod(method, rows, id_1);
                    });
                }
            }
        });
    };
    Grid.prototype._applyMethod = function (method, rows, colId) {
        var _a;
        if (typeof method === "function") {
            return method(rows);
        }
        else if (typeof method === "string" && (ts_data_1.methods === null || ts_data_1.methods === void 0 ? void 0 : ts_data_1.methods[method])) {
            return ts_data_1.methods === null || ts_data_1.methods === void 0 ? void 0 : ts_data_1.methods[method](rows, colId);
        }
        else if (Array.isArray(method) && (ts_data_1.methods === null || ts_data_1.methods === void 0 ? void 0 : ts_data_1.methods[method === null || method === void 0 ? void 0 : method[1]])) {
            return (_a = ts_data_1.methods[method[1]]) === null || _a === void 0 ? void 0 : _a.call(ts_data_1.methods, rows, method[0]);
        }
        return null;
    };
    Grid.prototype._canDataParse = function (afterMount) {
        var _a;
        if (afterMount === void 0) { afterMount = false; }
        if (((_a = this.config.data) === null || _a === void 0 ? void 0 : _a.length) && this.config.data instanceof Array && this.config.columns) {
            return this.config.autoWidth && this.config.autoHeight
                ? afterMount
                : !afterMount;
        }
        return false;
    };
    Grid.prototype._init = function () {
        this.events = new events_1.EventSystem(this);
        this._events = new events_1.EventSystem(this);
        this._attachDataCollection();
        this.export = new Exporter_1.Exporter("grid", this.version, this);
        this._setEventHandlers();
    };
    Grid.prototype._attachDataCollection = function () {
        if (this.config.data instanceof ts_data_1.DataCollection) {
            this.data = this.config.data;
            this.data.config.collapsed = this.config.collapsed;
            this.config.data = this.data.serialize();
            return;
        }
        this._createCollection();
    };
    Grid.prototype._setMarks = function (col, func) {
        var colCellsData = [];
        var colCells = this.data.map(function (row) {
            colCellsData.push(row[col.id]);
            return {
                id: row.id,
                data: row[col.id],
                row: row,
            };
        });
        for (var _i = 0, colCells_1 = colCells; _i < colCells_1.length; _i++) {
            var cell = colCells_1[_i];
            var css = func(cell.data, colCellsData, cell.row, col);
            if (css) {
                col.$cellCss = col.$cellCss || {};
                col.$cellCss[cell.id] += " " + css;
            }
        }
    };
    Grid.prototype._checkMarks = function () {
        var _this = this;
        this.config.columns.map(function (col) {
            var mark = col.mark;
            if (mark) {
                if (typeof mark === "function") {
                    _this._setMarks(col, mark);
                }
                else {
                    _this._setMarks(col, function (el, c) {
                        var data = [];
                        c.forEach(function (item) {
                            if (item !== null && item !== undefined && item !== "") {
                                data.push(parseFloat(item));
                            }
                        });
                        var min = (0, core_1.getMinArrayNumber)(data);
                        var max = (0, core_1.getMaxArrayNumber)(data);
                        if (mark.max && max === parseFloat(el)) {
                            return mark.max;
                        }
                        if (mark.min && min === parseFloat(el)) {
                            return mark.min;
                        }
                        return false;
                    });
                }
            }
        });
    };
    Grid.prototype._removeMarks = function () {
        this.config.columns.forEach(function (col) {
            if (col.mark) {
                col.$cellCss = {};
            }
        });
    };
    // [todo] make more smart type detection
    Grid.prototype._detectColsTypes = function () {
        this.config.columns.forEach(function (col) {
            if (col.type) {
                return col;
            }
            if (col.numberMask) {
                col.type = "number";
                return col;
            }
            if (!col.type) {
                col.type = "string";
            }
        });
    };
    Grid.prototype._destroyContent = function () {
        for (var contentName in this.content) {
            if (contentName === "comboFilter") {
                this.content[contentName].destroy();
            }
        }
    };
    Grid.prototype._render = function () {
        this.paint();
    };
    Grid.prototype._initHotKey = function (secondInit) {
        if (secondInit === void 0) { secondInit = false; }
        var handlers = (0, keys_1.getKeysHandlers)(this);
        for (var key in handlers) {
            if (!this.keyManager.exist(key))
                this.keyManager.addHotKey(key, handlers[key]);
        }
        if (!secondInit) {
            for (var key in this.config.hotkeys) {
                this.keyManager.addHotKey(key, this.config.hotkeys[key]);
            }
        }
    };
    Grid.prototype._normalizeConfig = function (config) {
        Object.keys(config).forEach(function (key) {
            if (key.startsWith("$"))
                delete config[key];
        });
        return config;
    };
    Grid.prototype._autoScroll = function (mode) {
        var _a, _b, _c;
        var elem = ((_a = this.scrollView) === null || _a === void 0 ? void 0 : _a.config.enable)
            ? (_b = this.getRootNode()) === null || _b === void 0 ? void 0 : _b.querySelector(".scroll-view")
            : (_c = this.getRootNode()) === null || _c === void 0 ? void 0 : _c.querySelector(".dhx_grid-body");
        if (!elem)
            return;
        var timer = null;
        var _d = elem.getBoundingClientRect(), elemTop = _d.top, elemBottom = _d.bottom, elemLeft = _d.left, elemRight = _d.right, elemHeight = _d.height, elemWidth = _d.width;
        var STEP = 40;
        var DELAY = 100;
        var FIELD_WIDTH = 30;
        var scroll = function (direction) {
            if (direction === "up" || direction === "down") {
                elem.scrollBy(0, direction === "up" ? -STEP : STEP);
            }
            else {
                elem.scrollBy(direction === "left" ? -STEP : STEP, 0);
            }
            timer = setTimeout(function () {
                scroll(direction);
            }, DELAY);
        };
        var handler = function (e) {
            var xPos = e.clientX;
            var yPos = e.clientY;
            switch (mode) {
                case "horizontal":
                    if (xPos > elemRight - FIELD_WIDTH &&
                        xPos < elemRight &&
                        yPos > elemTop &&
                        yPos < elemBottom) {
                        timer || scroll("right");
                    }
                    else if (xPos > elemLeft &&
                        xPos < elemLeft + FIELD_WIDTH &&
                        yPos > elemTop &&
                        yPos < elemBottom) {
                        timer || scroll("left");
                    }
                    else if (timer) {
                        clearTimeout(timer);
                        timer = null;
                    }
                    break;
                case "vertical":
                    if (yPos > elemBottom - FIELD_WIDTH &&
                        yPos < elemBottom &&
                        xPos > elemLeft &&
                        xPos < elemRight) {
                        timer || scroll("down");
                    }
                    else if (yPos > elemTop &&
                        yPos < elemTop + FIELD_WIDTH &&
                        xPos > elemLeft &&
                        xPos < elemRight) {
                        timer || scroll("up");
                    }
                    else if (timer) {
                        clearTimeout(timer);
                        timer = null;
                    }
                    break;
            }
        };
        if (elemWidth < elem.scrollWidth || elemHeight < elem.scrollHeight) {
            document.addEventListener("pointermove", handler);
            document.addEventListener("pointerup", function () {
                document.removeEventListener("pointermove", handler);
                if (timer)
                    clearTimeout(timer);
            }, { once: true });
        }
    };
    Grid.prototype._applyAutoWidth = function () {
        var _a, _b;
        var parentNode = this._container || ((_a = this.getRootView().node.parent) === null || _a === void 0 ? void 0 : _a.el);
        if (!parentNode)
            return;
        var parentSizes = (0, render_1.getElementSizes)(parentNode);
        var scrollView = (_b = this.scrollView) === null || _b === void 0 ? void 0 : _b.config.enable;
        (0, render_1.applyAutoWidth)(this.config, parentSizes, scrollView);
    };
    return Grid;
}(view_1.View));
exports.Grid = Grid;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exporter = void 0;
var main_1 = __webpack_require__(7);
var ts_data_1 = __webpack_require__(5);
var core_1 = __webpack_require__(0);
var date_1 = __webpack_require__(13);
var html_1 = __webpack_require__(2);
var dom_1 = __webpack_require__(1);
function fillArray(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = value;
    }
    return arr;
}
var Exporter = /** @class */ (function () {
    function Exporter(_name, _version, _view) {
        this._name = _name;
        this._version = _version;
        this._view = _view;
    }
    Exporter.prototype.pdf = function (config) {
        this._rawExport(config, "pdf", this._view);
    };
    Exporter.prototype.png = function (config) {
        this._rawExport(config, "png", this._view);
    };
    Exporter.prototype.xlsx = function (config) {
        return this._export(config);
    };
    Exporter.prototype.csv = function (config) {
        if (config === void 0) { config = {}; }
        config = __assign({
            asFile: true,
            rowDelimiter: "\n",
            columnDelimiter: ",",
            skipHeader: 0,
        }, config);
        var csv;
        if ("getRoot" in this._view.data && config.flat) {
            csv = this.getFlatCSV(config);
        }
        else {
            csv = this._getCSV(config);
        }
        var name = config.name || "grid_export";
        if (config.asFile) {
            (0, core_1.downloadFile)(csv, "".concat(name, ".csv"), "text/csv");
        }
        return csv;
    };
    Exporter.prototype._export = function (config) {
        var _this = this;
        if (config === void 0) { config = {}; }
        var configCols = this._view.config.columns.filter(function (i) { return !i.hidden; });
        var rowsIndexMap = {};
        var headers = (0, main_1.transpose)(configCols.map(function (col) { return col.header.map(function (level) { return level.text || " "; }); }));
        var columns = [];
        var uniqStyles = {
            default: {
                color: "#000000",
                background: "#FFFFFF",
                fontSize: 14,
                bold: false,
            },
        };
        var cells = [];
        var columnsIndexMap = {};
        var rowCss = {};
        var data = this._view.data.serialize().map(function (row, i) {
            var item = _this._view.data.getItem(row.id);
            if (item.$css) {
                rowCss[item.id] = item.$css;
            }
            rowsIndexMap[row.id] = i;
            var rowData = configCols.map(function (col, k) {
                columnsIndexMap[col.id] = k;
                if (row[col.id] instanceof Date) {
                    var format = col.dateFormat || "%M %d %Y";
                    if (typeof row[col.id] === "string") {
                        row[col.id] = (0, date_1.getFormattedDate)(format, (0, date_1.stringToDate)(row[col.id], format));
                    }
                    else if (typeof row[col.id] === "object") {
                        row[col.id] = (0, date_1.getFormattedDate)(format, row[col.id]);
                    }
                }
                return (0, main_1.removeHTMLTags)(row[col.id]);
            });
            return rowData;
        });
        var footer = [];
        for (var _i = 0, configCols_1 = configCols; _i < configCols_1.length; _i++) {
            var col = configCols_1[_i];
            if (col.footer) {
                var cell = col.footer[0];
                var text = cell.text;
                if (typeof text === "function") {
                    text = text(this._view.getSummary(col.id));
                    if ((0, main_1.isHtmlEnable)(this._view.config, col, cell))
                        text = (0, main_1.removeHTMLTags)(text);
                }
                footer.push(cell.css || text || " ");
            }
            var align = col.type === "number" ? "right" : col.align;
            columns.push({ width: col.$width, align: align });
            for (var key in col.$cellCss) {
                var colStyle = "dhx_grid-cell ".concat(col.$cellCss[key].trim());
                var colStyleHash = this._getHash(colStyle);
                var rowStyles = "dhx_grid-row";
                if (rowCss[key]) {
                    rowStyles += " ".concat(rowCss[key].trim());
                }
                if (!uniqStyles[colStyleHash]) {
                    var css = (0, main_1.getStyleByClass)(colStyle, rowStyles, uniqStyles.default);
                    if (css) {
                        uniqStyles[colStyleHash] = css;
                    }
                }
                if (uniqStyles[colStyleHash]) {
                    cells.push([rowsIndexMap[key], configCols.indexOf(col), colStyleHash]);
                }
            }
            for (var key in rowCss) {
                if (col.$cellCss[key])
                    continue;
                var rowStyleHash = this._getHash(rowCss[key]);
                var rowStyles = "dhx_grid-row ".concat(rowCss[key].trim());
                if (!uniqStyles[rowStyleHash]) {
                    var css = (0, main_1.getStyleByClass)("dhx_grid-cell", rowStyles, uniqStyles.default);
                    if (css) {
                        uniqStyles[rowStyleHash] = css;
                    }
                }
                if (uniqStyles[rowStyleHash]) {
                    cells.push([rowsIndexMap[key], configCols.indexOf(col), rowStyleHash]);
                }
            }
        }
        if (footer.length) {
            data.push(footer);
        }
        var exportData = {
            name: config.name || "data",
            columns: columns,
            header: headers,
            data: data,
            styles: {
                cells: cells,
                css: uniqStyles,
            },
        };
        if (config.url) {
            var form_1 = document.createElement("form");
            form_1.setAttribute("target", "_blank");
            form_1.setAttribute("action", config.url);
            form_1.setAttribute("method", "POST");
            form_1.style.visibility = "hidden";
            var input = document.createElement("textarea");
            input.setAttribute("name", "data");
            input.value = JSON.stringify(exportData);
            form_1.appendChild(input);
            document.body.appendChild(form_1);
            form_1.submit();
            setTimeout(function () {
                form_1.parentNode.removeChild(form_1);
            }, 100);
        }
        return exportData;
    };
    Exporter.prototype.getFlatCSV = function (config) {
        var treeData = this._view.data;
        var root = treeData.getRoot();
        var firstCol = this._view.config.columns[0];
        var maxLevel = treeData.getMaxLevel();
        var getParentsChain = function (item, data) {
            var parents = [];
            for (var i = 0; i <= maxLevel; i++) {
                if (item && item[firstCol.id]) {
                    parents[item.$level] = item[firstCol.id];
                    var parent_1 = data.getParent(item.id, true);
                    if (parent_1 && parent_1.id) {
                        item = parent_1;
                    }
                    else {
                        item = null;
                    }
                }
                else {
                    parents[i] = "";
                }
            }
            return parents;
        };
        var total = "";
        treeData.eachChild(root, function (item) {
            var parents = getParentsChain(item, treeData).join(config.columnDelimiter);
            total +=
                parents +
                    Object.keys(item).reduce(function (values, key, i) {
                        if (key !== "id" && key !== "parent" && !key.startsWith("$") && i !== 0) {
                            return values + config.columnDelimiter + (item[key] === null ? "" : item[key]);
                        }
                        return values;
                    }, "");
            total += config.rowDelimiter;
        });
        var exportData = this._export(config);
        // [dirty]
        var emptyHeaders = fillArray(new Array(maxLevel + 1), "");
        var headers = exportData.header.map(function (header) {
            header.splice.apply(header, __spreadArray([0, 1], emptyHeaders, false));
            return header;
        });
        var head = new ts_data_1.CsvDriver(config).serialize(headers, true) + config.rowDelimiter;
        return head + total;
    };
    Exporter.prototype._getCSV = function (config) {
        var exportData = this._export(config);
        var headers = exportData.header;
        var driver = new ts_data_1.CsvDriver(config);
        var head = driver.serialize(headers, true);
        var readyData = driver.serialize(exportData.data, true);
        return head + "\n" + readyData;
    };
    Exporter.prototype._rawExport = function (config, mode, view) {
        var _a;
        if (config === void 0) { config = {}; }
        var viewContainer = document.createElement("div");
        viewContainer.setAttribute("style", "display: none;");
        var _b = view.config, _c = _b.$headerHeight, $headerHeight = _c === void 0 ? 0 : _c, _d = _b.$footerHeight, $footerHeight = _d === void 0 ? 0 : _d, _e = _b.$totalHeight, $totalHeight = _e === void 0 ? 0 : _e, $footer = _b.$footer, columns = _b.columns;
        var styles = "";
        var exportStyles = view.config.exportStyles;
        if (typeof config.exportStyles === "boolean" || Array.isArray(config.exportStyles)) {
            exportStyles = config.exportStyles;
        }
        config.url =
            config.url || "https://export.dhtmlx.com/" + this._name + "/" + mode + "/" + this._version;
        if (mode === "pdf") {
            var pdf = config.pdf;
            config.pdf = __assign(__assign({}, pdf), { printBackground: false, format: (_a = pdf === null || pdf === void 0 ? void 0 : pdf.format) !== null && _a !== void 0 ? _a : "A4" });
        }
        var width = view.config.$totalWidth;
        var height = $totalHeight + $headerHeight;
        if ($footer)
            height += $footerHeight;
        var viewColumns = [];
        for (var index = 0; index < columns.length; index++) {
            var col = columns[index];
            viewColumns.push(__assign(__assign({}, col), { width: col.$width }));
        }
        var viewConfig = __assign(__assign({}, view.config), { width: width, height: height, columns: viewColumns, data: view.data.getRawData(0, -1, null, 2), keyNavigation: false, selection: false, resizable: false });
        var $view = new view.constructor(viewContainer, (0, core_1.getCloneObject)(viewConfig));
        (0, dom_1.awaitRedraw)()
            .then(function () {
            if (exportStyles === true) {
                styles = "".concat((0, html_1.getPageLinksCss)(), "<style>").concat((0, html_1.getPageInlineCss)(), "</style>");
            }
            else if (Array.isArray(exportStyles) && exportStyles.length) {
                styles = "".concat((0, html_1.getPageLinksCss)(exportStyles));
            }
            var child = viewContainer.children[0];
            child === null || child === void 0 ? void 0 : child.setAttribute("data-dhx-theme", config.theme || "light");
            if (mode === "png") {
                child === null || child === void 0 ? void 0 : child.setAttribute("style", "width: ".concat(width, "px;"));
            }
            var html = "\n\t\t\t\t\t".concat(styles, "\n\t\t\t\t\t").concat(viewContainer.innerHTML, "\n\t\t\t\t");
            var form = document.createElement("form");
            form.setAttribute("method", "POST");
            form.setAttribute("action", config.url);
            form.innerHTML = "<input type=\"hidden\" name=\"raw\"><input type=\"hidden\" name=\"config\">";
            form.childNodes[0].value = html;
            form.childNodes[1].value = JSON.stringify(config);
            document.body.appendChild(form);
            form.submit();
            setTimeout(function () {
                var _a, _b;
                $view.destructor();
                (_a = viewContainer.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(viewContainer);
                (_b = form.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(form);
            }, 100);
        })
            .catch(function () {
            var _a;
            $view.destructor();
            (_a = viewContainer.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(viewContainer);
        });
    };
    Exporter.prototype._getHash = function (str) {
        return str
            .split("")
            .reduce(function (h, letter) {
            var hh = (h << 5) - h + letter.charCodeAt(0);
            return Math.abs(hh & hh);
        }, 0)
            .toString();
    };
    return Exporter;
}());
exports.Exporter = Exporter;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(79), exports);
__exportStar(__webpack_require__(80), exports);
__exportStar(__webpack_require__(81), exports);
__exportStar(__webpack_require__(82), exports);
__exportStar(__webpack_require__(22), exports);


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.message = void 0;
var core_1 = __webpack_require__(0);
var html_1 = __webpack_require__(2);
var types_1 = __webpack_require__(22);
var nodeTimeout = new WeakMap();
var containers = new Map();
function createMessageContainer(parent, position) {
    var messageContainer = document.createElement("div");
    messageContainer.setAttribute("data-position", position);
    messageContainer.className =
        "dhx_message-container " +
            "dhx_message-container--" +
            position +
            (parent === document.body ? " dhx_message-container--in-body" : "");
    return messageContainer;
}
function onExpire(node, fromClick) {
    if (fromClick) {
        clearTimeout(nodeTimeout.get(node));
    }
    var container = node.parentNode;
    var position = container.getAttribute("data-position");
    var parent = container.parentNode;
    var messageContainerInfo = containers.get(parent);
    if (!messageContainerInfo) {
        return;
    }
    var positionInfo = messageContainerInfo[position];
    if (!positionInfo) {
        return;
    }
    var stack = positionInfo.stack;
    var index = stack.indexOf(node);
    if (index !== -1) {
        container.removeChild(node);
        stack.splice(index, 1);
        if (stack.length === 0) {
            parent.removeChild(container);
        }
        return;
    }
}
function message(props) {
    var _a;
    if (typeof props === "string") {
        props = { text: props };
    }
    props.position = props.position || types_1.MessageContainerPosition.topRight;
    var messageBox = document.createElement("div");
    messageBox.className = "dhx_widget dhx_message " + (props.css || "");
    messageBox.setAttribute("role", "alert");
    var textId = props.text && (0, core_1.uid)();
    textId && messageBox.setAttribute("aria-describedby", textId);
    if (props.html) {
        messageBox.innerHTML = props.html;
    }
    else {
        messageBox.innerHTML = "<span class=\"dhx_message__text\" id=".concat(textId, "></span>\n\t\t").concat(props.icon ? "<span class=\"dhx_message__icon dxi ".concat(props.icon, "\"></span>") : "");
        messageBox.querySelector("#".concat(textId)).textContent = props.text;
    }
    var parent = props.node ? (0, html_1.toNode)(props.node) : document.body;
    var position = getComputedStyle(parent).position;
    if (position === "static") {
        parent.style.position = "relative";
    }
    var messageContainerInfo = containers.get(parent);
    if (!messageContainerInfo) {
        containers.set(parent, (_a = {},
            _a[props.position] = {
                stack: [],
                container: createMessageContainer(parent, props.position),
            },
            _a));
    }
    else if (!messageContainerInfo[props.position]) {
        messageContainerInfo[props.position] = {
            stack: [],
            container: createMessageContainer(parent, props.position),
        };
    }
    var _b = containers.get(parent)[props.position], stack = _b.stack, container = _b.container;
    if (stack.length === 0) {
        parent.appendChild(container);
    }
    stack.push(messageBox);
    container.appendChild(messageBox);
    function closeMessage(fromClick) {
        if (fromClick === void 0) { fromClick = true; }
        if (!messageBox)
            return;
        onExpire(messageBox, fromClick);
        messageBox = null;
    }
    if (props.expire) {
        var timeout = setTimeout(function () { return closeMessage(false); }, props.expire);
        nodeTimeout.set(messageBox, timeout);
    }
    messageBox.onclick = function () { return closeMessage(); };
    return {
        close: function () { return closeMessage(); },
    };
}
exports.message = message;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.alert = void 0;
var en_1 = __webpack_require__(35);
var common_1 = __webpack_require__(36);
var core_1 = __webpack_require__(0);
function alert(props) {
    var apply = props.buttons && props.buttons[0] ? props.buttons[0] : en_1.default.apply;
    var unblock = (0, common_1.blockScreen)(props.blockerCss);
    return new Promise(function (res) {
        var contentId = "dhx_alert__".concat((0, core_1.uid)(), "_content");
        var headerId = "dhx_alert__".concat((0, core_1.uid)(), "_header");
        var alertBox = document.createElement("div");
        alertBox.setAttribute("role", "alert");
        alertBox.setAttribute("aria-modal", "true");
        props.text && alertBox.setAttribute("aria-describedby", contentId);
        props.header && alertBox.setAttribute("aria-labelledby", headerId);
        alertBox.className = "dhx_widget dhx_alert " + (props.css || "");
        var closeAlert = function (e) {
            if (e.key === "Escape" || e.key === "Esc") {
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                close(e);
                res(false);
            }
        };
        function close(e) {
            e.preventDefault();
            unblock();
            document.body.removeChild(alertBox);
            document.removeEventListener("keydown", closeAlert);
        }
        alertBox.innerHTML = "\n\t\t\t".concat(props.header
            ? "<div id=".concat(headerId, " class=\"dhx_alert__header\"> ").concat(props.htmlEnable !== false ? props.header : "", " </div>")
            : "", "\n\t\t\t").concat(props.text
            ? "<div id=".concat(contentId, " class=\"dhx_alert__content\">").concat(props.htmlEnable !== false ? props.text : "", "</div>")
            : "", "\n\t\t\t<div class=\"dhx_alert__footer ").concat(props.buttonsAlignment ? "dhx_alert__footer--" + props.buttonsAlignment : "", "\">\n\t\t\t\t<button type=\"button\" aria-label=\"confirm\" class=\"dhx_alert__apply-button dhx_button dhx_button--view_flat dhx_button--color_primary dhx_button--size_medium\">").concat(apply, "</button>\n\t\t\t</div>");
        if (props.htmlEnable === false) {
            props.header && (alertBox.querySelector("#".concat(headerId)).textContent = props.header);
            props.text && (alertBox.querySelector("#".concat(contentId)).textContent = props.text);
        }
        document.body.appendChild(alertBox);
        alertBox.querySelector(".dhx_alert__apply-button").focus();
        alertBox.querySelector("button").addEventListener("click", function (e) {
            close(e);
            res(true);
        });
        document.addEventListener("keydown", closeAlert);
    });
}
exports.alert = alert;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)))

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirm = void 0;
var en_1 = __webpack_require__(35);
var common_1 = __webpack_require__(36);
var core_1 = __webpack_require__(0);
function confirm(props) {
    props.buttonsAlignment = props.buttonsAlignment || "right";
    var apply = props.buttons && props.buttons[1] ? props.buttons[1] : en_1.default.apply;
    var reject = props.buttons && props.buttons[0] ? props.buttons[0] : en_1.default.reject;
    var unblock = (0, common_1.blockScreen)("dhx_alert__overlay-confirm " + (props.blockerCss || ""));
    return new Promise(function (res) {
        var confirmBox = document.createElement("div");
        confirmBox.setAttribute("role", "alertdialog");
        confirmBox.setAttribute("aria-modal", "true");
        var headerId = props.header && (0, core_1.uid)();
        var textId = props.header && (0, core_1.uid)();
        textId && confirmBox.setAttribute("aria-describedby", textId);
        headerId && confirmBox.setAttribute("aria-labelledby", headerId);
        var focusItem;
        var answer = function (val) {
            unblock();
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            confirmBox.removeEventListener("click", clickHandler);
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            document.removeEventListener("keydown", closeConfirm);
            document.body.removeChild(confirmBox);
            res(val);
        };
        var clickHandler = function (e) {
            if (e.target.tagName === "BUTTON") {
                answer(e.target.classList.contains("dhx_alert__confirm-aply"));
            }
        };
        var closeConfirm = function (e) {
            if (e.key === "Escape" || e.key === "Esc") {
                confirmBox.querySelector(".dhx_alert__confirm-aply").focus();
                answer(e.target.classList.contains("dhx_alert__confirm-reject"));
            }
            else if (e.key === "Tab") {
                if (focusItem === "aply") {
                    focusItem = "reject";
                    confirmBox.querySelector(".dhx_alert__confirm-reject").focus();
                }
                else {
                    focusItem = "aply";
                    confirmBox.querySelector(".dhx_alert__confirm-aply").focus();
                }
                e.preventDefault();
            }
        };
        confirmBox.className = "dhx_widget dhx_alert dhx_alert--confirm" + (props.css ? " " + props.css : "");
        confirmBox.innerHTML = "\n\t\t".concat(props.header
            ? "<div class=\"dhx_alert__header\" id=".concat(headerId, "> ").concat(props.htmlEnable !== false ? props.header : "", " </div>")
            : "", "\n\t\t").concat(props.text
            ? "<div class=\"dhx_alert__content\" id=".concat(textId, ">").concat(props.htmlEnable !== false ? props.text : "", "</div>")
            : "", "\n\t\t\t<div class=\"dhx_alert__footer ").concat(props.buttonsAlignment ? "dhx_alert__footer--" + props.buttonsAlignment : "", "\">\n\t\t\t\t<button type=\"button\" aria-label=\"reject\" class=\"dhx_alert__confirm-reject dhx_button dhx_button--view_link dhx_button--color_primary dhx_button--size_medium\">").concat(reject, "</button>\n\t\t\t\t<button type=\"button\"  aria-label=\"aply\"class=\"dhx_alert__confirm-aply dhx_button dhx_button--view_flat dhx_button--color_primary dhx_button--size_medium\">").concat(apply, "</button>\n\t\t\t</div>");
        if (props.htmlEnable === false) {
            props.header && (confirmBox.querySelector("#".concat(headerId)).textContent = props.header);
            props.text && (confirmBox.querySelector("#".concat(textId)).textContent = props.text);
        }
        document.body.appendChild(confirmBox);
        focusItem = "aply";
        confirmBox.querySelector(".dhx_alert__confirm-aply").focus();
        confirmBox.addEventListener("click", clickHandler);
        document.addEventListener("keydown", closeConfirm);
    });
}
exports.confirm = confirm;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)))

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disableTooltip = exports.enableTooltip = exports.tooltip = exports.getZIndex = exports.findPosition = void 0;
var html_1 = __webpack_require__(2);
var types_1 = __webpack_require__(22);
var DEFAULT_SHOW_DELAY = 750;
var DEFAULT_HIDE_DELAY = 200;
function findPosition(targetRect, position, width, height, margin, recursion) {
    if (margin === void 0) { margin = 8; }
    if (recursion === void 0) { recursion = 0; }
    var pos;
    var left;
    var top;
    if (recursion > 1) {
        position = types_1.Position.center;
    }
    if (position !== "top" && position !== "bottom") {
        var topOffset = targetRect.top + (targetRect.height - height) / 2;
        var isShift = topOffset < 0 && window.pageYOffset + topOffset + height < scrollY + window.innerHeight;
        top = window.pageYOffset + (isShift ? 0 : topOffset);
    }
    switch (position) {
        case types_1.Position.center:
            left = targetRect.left + window.pageXOffset + (targetRect.width - width) / 2;
            if (left + margin < window.pageXOffset) {
                left = targetRect.left + window.pageXOffset;
            }
            pos = types_1.RealPosition.center;
            return { left: left, top: top, pos: pos };
        case types_1.Position.right:
            pos = types_1.RealPosition.right;
            left = targetRect.right + window.pageXOffset + margin;
            if (left + width > window.innerWidth + window.pageXOffset) {
                // // set left
                return findPosition(targetRect, types_1.Position.left, width, height, margin, ++recursion);
            }
            return { left: left, top: top, pos: pos };
        case types_1.Position.left:
            pos = types_1.RealPosition.left;
            left = window.pageXOffset + targetRect.left - width - margin;
            if (left < 0) {
                // // set right
                return findPosition(targetRect, types_1.Position.right, width, height, margin, ++recursion);
            }
            return { left: left, top: top, pos: pos };
        case types_1.Position.top:
            pos = types_1.RealPosition.top;
            left = window.pageXOffset + targetRect.left + (targetRect.width - width) / 2;
            if (left + width > window.innerWidth + window.pageXOffset) {
                left = window.innerWidth + window.pageXOffset - width;
            }
            else if (left < 0) {
                left = 0;
            }
            if (targetRect.top < height) {
                // // set bottom
                return findPosition(targetRect, types_1.Position.bottom, width, height, margin, ++recursion);
            }
            top = window.pageYOffset + targetRect.top - height - margin;
            return { left: left, top: top, pos: pos };
        case types_1.Position.bottom:
        default:
            left = window.pageXOffset + targetRect.left + (targetRect.width - width) / 2;
            if (left + width > window.innerWidth + window.pageXOffset) {
                left = window.innerWidth + window.pageXOffset - width;
            }
            else if (left < 0) {
                left = 0;
            }
            pos = types_1.RealPosition.bottom;
            top = window.pageYOffset + targetRect.bottom + margin;
            if (top + height > window.innerHeight + window.pageYOffset) {
                // // set top
                return findPosition(targetRect, types_1.Position.top, width, height, margin, ++recursion);
            }
            return { left: left, top: top, pos: pos };
    }
}
exports.findPosition = findPosition;
// tooltip init
var tooltipBox = document.createElement("div");
var tooltipText = document.createElement("span");
tooltipText.className = "dhx_tooltip__text";
tooltipBox.appendChild(tooltipText);
tooltipBox.setAttribute("role", "tooltip");
tooltipBox.style.position = "absolute";
var lastNode = null;
var isActive = false;
var hideTimeout = null;
var showTimeout = null;
var activeListenersDestructor;
function getZIndex(node) {
    if (node &&
        ((node.classList.contains("dhx_popup--window") &&
            node.classList.contains("dhx_popup--window_active")) ||
            node.classList.contains("dhx_popup--window_modal") ||
            node.classList.contains("dhx_popup"))) {
        return 10000000;
    }
    if (node === null || node === void 0 ? void 0 : node.classList.contains("dhx_popup--window")) {
        return 9999999;
    }
    if (node && node.offsetParent) {
        return getZIndex(node.offsetParent);
    }
    return null;
}
exports.getZIndex = getZIndex;
function showTooltip(node, text, position, css, force, margin, htmlEnable) {
    if (css === void 0) { css = ""; }
    if (force === void 0) { force = false; }
    if (margin === void 0) { margin = 8; }
    var rects = node.getBoundingClientRect();
    if (htmlEnable) {
        tooltipText.innerHTML = text;
    }
    else {
        tooltipText.textContent = text;
    }
    tooltipBox.style.left = null;
    tooltipBox.style.top = null;
    document.body.appendChild(tooltipBox);
    tooltipBox.className = "dhx_widget dhx_tooltip ".concat(force ? " dhx_tooltip--forced" : "", " ").concat(css);
    var _a = tooltipBox.getBoundingClientRect(), width = _a.width, height = _a.height;
    var _b = findPosition(rects, position, width, height, margin), left = _b.left, top = _b.top, pos = _b.pos;
    var zIndex = getZIndex(node);
    if (zIndex) {
        tooltipBox.style.zIndex = zIndex.toString();
    }
    switch (pos) {
        case types_1.RealPosition.bottom:
            tooltipBox.style.left = left + "px";
            tooltipBox.style.top = top + "px";
            break;
        case types_1.RealPosition.top:
            tooltipBox.style.left = left + "px";
            tooltipBox.style.top = top + "px";
            break;
        case types_1.RealPosition.left:
            tooltipBox.style.left = left + "px";
            tooltipBox.style.top = top + "px";
            break;
        case types_1.RealPosition.right:
            tooltipBox.style.left = left + "px";
            tooltipBox.style.top = top + "px";
            break;
        case types_1.RealPosition.center:
            tooltipBox.style.left = left + "px";
            tooltipBox.style.top = top + "px";
            break;
    }
    tooltipBox.className += " dhx_tooltip--".concat(pos);
    isActive = true;
    if (!force) {
        setTimeout(function () {
            tooltipBox.className += " dhx_tooltip--animate";
        });
    }
}
function hideTooltip(delay) {
    if (lastNode) {
        hideTimeout = setTimeout(function () {
            document.body.removeChild(tooltipBox);
            isActive = false;
            hideTimeout = null;
        }, delay || DEFAULT_HIDE_DELAY);
    }
}
function addListeners(node, text, config) {
    var force = config.force, showDelay = config.showDelay, hideDelay = config.hideDelay, position = config.position, css = config.css, htmlEnable = config.htmlEnable, margin = config.margin;
    if (!force) {
        showTimeout = setTimeout(function () {
            showTooltip(node, text, position || types_1.Position.bottom, css, false, margin, htmlEnable);
        }, showDelay || DEFAULT_SHOW_DELAY);
    }
    var hide = function () {
        if (isActive) {
            hideTooltip(hideDelay);
        }
        clearTimeout(showTimeout);
        node.removeEventListener("mouseleave", hide);
        node.removeEventListener("blur", hide);
        document.removeEventListener("mousedown", hide);
        lastNode = null;
        activeListenersDestructor = null;
    };
    if (force) {
        showTooltip(node, text, position, css, force, margin, htmlEnable);
    }
    node.addEventListener("mouseleave", hide);
    node.addEventListener("blur", hide);
    document.addEventListener("mousedown", hide);
    activeListenersDestructor = hide;
}
// default
function tooltip(text, config) {
    var node = (0, html_1.toNode)(config.node);
    if (node === lastNode) {
        return;
    }
    if (activeListenersDestructor) {
        activeListenersDestructor();
        activeListenersDestructor = null;
    }
    lastNode = node;
    if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
        addListeners(node, text, __assign(__assign({}, config), { force: true }));
    }
    else {
        addListeners(node, text, config);
    }
}
exports.tooltip = tooltip;
function _mousemove(e) {
    var node = (0, html_1.locateNode)(e, "dhx_tooltip_text");
    if (!node) {
        return;
    }
    tooltip(node.getAttribute("dhx_tooltip_text"), {
        position: node.getAttribute("dhx_tooltip_position") || types_1.Position.bottom,
        node: node,
    });
}
function enableTooltip() {
    document.addEventListener("mousemove", _mousemove);
}
exports.enableTooltip = enableTooltip;
function disableTooltip() {
    document.removeEventListener("mousemove", _mousemove);
}
exports.disableTooltip = disableTooltip;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Selection = exports.GridSelectionEvents = void 0;
var dom_1 = __webpack_require__(1);
var ts_data_1 = __webpack_require__(5);
var core_1 = __webpack_require__(0);
var events_1 = __webpack_require__(4);
var types_1 = __webpack_require__(3);
var FocusManager_1 = __webpack_require__(17);
var common_1 = __webpack_require__(11);
var main_1 = __webpack_require__(7);
var cells_1 = __webpack_require__(15);
var GridSelectionEvents;
(function (GridSelectionEvents) {
    GridSelectionEvents["beforeUnSelect"] = "beforeUnSelect";
    GridSelectionEvents["afterUnSelect"] = "afterUnSelect";
    GridSelectionEvents["beforeSelect"] = "beforeSelect";
    GridSelectionEvents["afterSelect"] = "afterSelect";
})(GridSelectionEvents || (exports.GridSelectionEvents = GridSelectionEvents = {}));
var Selection = /** @class */ (function () {
    function Selection(grid, config, events, gridId) {
        var types = ["cell", "row", "complex"];
        this._grid = grid;
        this.config = config || {};
        this._gridId = gridId;
        this._selectedCell = null;
        this._selectedCells = [];
        this._type =
            (types.includes(this._grid.config.selection) && this._grid.config.selection) ||
                "complex";
        this._multiselection = !!grid.config.multiselection;
        this.events = events || new events_1.EventSystem(this);
        this._init();
    }
    Selection.prototype.setCell = function (row, col, ctrlUp, shiftUp) {
        var _a, _b;
        var _this = this;
        var _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        if (ctrlUp === void 0) { ctrlUp = false; }
        if (shiftUp === void 0) { shiftUp = false; }
        var isTree = this._grid.config.type === "tree";
        if (this._gridId && FocusManager_1.focusManager.getFocusId() !== this._gridId) {
            FocusManager_1.focusManager.setFocusId(this._gridId);
        }
        if ((this._type === "row" && ((_c = this._selectedCells[0]) === null || _c === void 0 ? void 0 : _c.row.id) === ((row === null || row === void 0 ? void 0 : row.id) || row)) ||
            (this._type !== "row" &&
                ((_d = this._selectedCells[0]) === null || _d === void 0 ? void 0 : _d.row.id) === ((row === null || row === void 0 ? void 0 : row.id) || row) &&
                ((_e = this._selectedCells[0]) === null || _e === void 0 ? void 0 : _e.column.id) === ((col === null || col === void 0 ? void 0 : col.id) || col))) {
            if (ctrlUp) {
                this._removeCell((_f = this._selectedCells[0]) === null || _f === void 0 ? void 0 : _f.row, (_g = this._selectedCells[0]) === null || _g === void 0 ? void 0 : _g.column);
                (0, dom_1.awaitRedraw)().then(function () {
                    _this._grid.paint();
                    _this._setBrowserFocus();
                });
                return;
            }
            if (!this._multiselection || (this._multiselection && this._selectedCells.length === 1))
                return;
        }
        if (this.config.disabled ||
            this._grid.config.$editable ||
            (!this._multiselection &&
                this._selectedCells.length &&
                !this._removeCell((_h = this._selectedCell) === null || _h === void 0 ? void 0 : _h.row, (_j = this._selectedCell) === null || _j === void 0 ? void 0 : _j.column))) {
            return;
        }
        if (this._multiselection) {
            if (!ctrlUp && !shiftUp)
                this._removeCells();
            if (this._selectedCells.find(function (item) {
                if (_this._type === "row") {
                    return item.row.id === ((row === null || row === void 0 ? void 0 : row.id) || row);
                }
                return (item.row.id === ((row === null || row === void 0 ? void 0 : row.id) || row) &&
                    item.column.id === ((col === null || col === void 0 ? void 0 : col.id) || col));
            })) {
                this.removeCell((row === null || row === void 0 ? void 0 : row.id) || row, (col === null || col === void 0 ? void 0 : col.id) || col);
                return;
            }
            if (shiftUp && this._selectedCells.length > 1 && !isTree) {
                __spreadArray([], this._selectedCells, true).forEach(function (_a, index) {
                    var row = _a.row, column = _a.column;
                    if (index > 0)
                        _this.removeCell(row.id, column.id);
                });
            }
        }
        row = this._grid.data.getItem((row && row.id) || row);
        var columns = (_l = (_k = this._grid.config) === null || _k === void 0 ? void 0 : _k.columns) === null || _l === void 0 ? void 0 : _l.filter(function (col) { return !col.hidden; });
        if (!col)
            col = columns === null || columns === void 0 ? void 0 : columns[0];
        col = this._grid.getColumn(col.id || col);
        if (!col || !row) {
            return;
        }
        if (this._multiselection && shiftUp && this._selectedCells.length && !isTree) {
            var startCell = (_m = this._selectedCells) === null || _m === void 0 ? void 0 : _m[0];
            var startRowIndex = this._grid.data.getIndex(startCell.row.id);
            var endRowIndex = this._grid.data.getIndex(row.id);
            if (startRowIndex > endRowIndex) {
                _a = [endRowIndex, startRowIndex], startRowIndex = _a[0], endRowIndex = _a[1];
            }
            if (this._type === "cell" || this._type === "complex") {
                var columnsIds = columns.map(function (e) { return e.id; });
                var startColIndex = columnsIds.indexOf(startCell.column.id);
                var endColIndex = columnsIds.indexOf(col.id);
                if (startColIndex !== -1 && endColIndex !== -1) {
                    if (startColIndex > endColIndex) {
                        _b = [endColIndex, startColIndex], startColIndex = _b[0], endColIndex = _b[1];
                    }
                    var cols_1 = columns.slice(startColIndex, endColIndex + 1);
                    this._grid.data.mapRange(startRowIndex, endRowIndex, function (row) {
                        cols_1.forEach(function (column) {
                            if (_this._findIndex({ row: row, column: column }) === -1) {
                                _this._setCell(row, column);
                            }
                        });
                    });
                }
            }
            else {
                this._grid.data.mapRange(startRowIndex, endRowIndex, function (row) {
                    if (_this._findIndex({ row: row, column: col }) === -1) {
                        _this._setCell(row, col);
                    }
                });
            }
        }
        else {
            this._setCell(row, col);
        }
        (0, dom_1.awaitRedraw)().then(function () {
            _this._grid.paint();
            _this._setBrowserFocus();
        });
    };
    Selection.prototype.removeCell = function (rowId, colId) {
        var _this = this;
        if (rowId && colId && (this._type === "cell" || this._type === "complex")) {
            var cell = this._selectedCells.find(function (_a) {
                var row = _a.row, column = _a.column;
                return row.id == rowId && column.id == colId;
            });
            cell && this._removeCell(cell.row, cell.column);
        }
        else if (rowId) {
            var cells = this._selectedCells.filter(function (_a) {
                var row = _a.row;
                return row.id == rowId;
            });
            cells.forEach(function (_a) {
                var row = _a.row, column = _a.column;
                _this._removeCell(row, column);
            });
        }
        else {
            this._removeCells();
        }
        (0, dom_1.awaitRedraw)().then(function () {
            _this._grid.paint();
        });
    };
    Selection.prototype.getCell = function () {
        return this._selectedCell;
    };
    Selection.prototype.getCells = function () {
        return this._selectedCells;
    };
    Selection.prototype.disable = function () {
        this.removeCell();
        this.config.disabled = true;
        this._grid.paint();
    };
    Selection.prototype.enable = function () {
        this.config.disabled = false;
        this._grid.paint();
    };
    Selection.prototype.toHTML = function () {
        var _this = this;
        if (this._isUnselected()) {
            return;
        }
        if (this._multiselection) {
            var selection_1 = [];
            var selectedRows_1 = {};
            this._selectedCells.forEach(function (cell, index, array) {
                var nCell = (0, cells_1.normalizeCell)(cell, _this._grid);
                selection_1.push(_this._toHTML(nCell.row, nCell.column, index === array.length - 1 || _this._type === "cell" || _this._type === "complex", selectedRows_1[cell.row.id]));
                selectedRows_1[cell.row.id] = true;
            });
            return selection_1;
        }
        else {
            var nCell = (0, cells_1.normalizeCell)(this._selectedCell, this._grid);
            return this._toHTML(nCell.row, nCell.column, true);
        }
    };
    Selection.prototype._setCell = function (row, column) {
        if (!row || !column || !(0, core_1.isDefined)(row.id) || !(0, core_1.isDefined)(column.id))
            return;
        if (!this.events.fire(GridSelectionEvents.beforeSelect, [row, column])) {
            return;
        }
        this._selectedCell = { row: row, column: column };
        if (this._multiselection) {
            this._selectedCells.push(this._selectedCell);
        }
        else {
            this._selectedCells = [this._selectedCell];
        }
        this.events.fire(GridSelectionEvents.afterSelect, [row, column]);
    };
    Selection.prototype._removeCell = function (row, col, silent) {
        var _a, _b;
        if (silent === void 0) { silent = false; }
        if (!row || !col || !(0, core_1.isDefined)(row.id) || !(0, core_1.isDefined)(col.id))
            return false;
        if (!silent && !this.events.fire(GridSelectionEvents.beforeUnSelect, [row, col])) {
            return false;
        }
        var index = this._selectedCells.findIndex(function (item) { return item.row.id === row.id && item.column.id === col.id; });
        this._selectedCells.splice(index, 1);
        if (this._selectedCell &&
            col.id === this._selectedCell.column.id &&
            row.id === this._selectedCell.row.id) {
            this._selectedCell = ((_a = this._selectedCells) === null || _a === void 0 ? void 0 : _a[((_b = this._selectedCells) === null || _b === void 0 ? void 0 : _b.length) - 1]) || null;
        }
        !silent && this.events.fire(GridSelectionEvents.afterUnSelect, [row, col]);
        return true;
    };
    Selection.prototype._removeCells = function (silent) {
        var _this = this;
        if (silent === void 0) { silent = false; }
        __spreadArray([], this._selectedCells, true).forEach(function (item) {
            _this._removeCell(item === null || item === void 0 ? void 0 : item.row, item === null || item === void 0 ? void 0 : item.column, silent);
        });
    };
    Selection.prototype._init = function () {
        var _this = this;
        this._grid.events.on(types_1.GridEvents.cellClick, function (row, col, e) {
            _this.setCell(row, col, e.ctrlKey || e.metaKey, e.shiftKey);
        });
        this._grid.data.events.on(ts_data_1.DataEvents.beforeRemove, function (item) {
            var _a, _b;
            if (item &&
                _this._selectedCell &&
                _this._selectedCell.row &&
                _this._selectedCell.row.id === item.id) {
                var id = void 0;
                var index = _this._grid.data.getIndex(item.id);
                if (_this._grid.data instanceof ts_data_1.TreeCollection) {
                    var child = _this._grid.data.getItems(item.parent);
                    id = ((_a = child[index + 1]) === null || _a === void 0 ? void 0 : _a.id) || ((_b = child[index - 1]) === null || _b === void 0 ? void 0 : _b.id) || item.parent;
                }
                else {
                    id = _this._grid.data.getId(index + 1) || _this._grid.data.getId(index - 1);
                }
                if ((0, core_1.isId)(id)) {
                    _this.setCell(id);
                    _this._grid.paint();
                }
            }
        });
        this._grid.data.events.on(ts_data_1.DataEvents.removeAll, function () {
            _this._removeCells();
        });
        this._grid.data.events.on(ts_data_1.DataEvents.load, function () {
            _this._removeCells(true);
        });
    };
    Selection.prototype._toHTML = function (row, column, last, skipRow) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        if (last === void 0) { last = false; }
        if (skipRow === void 0) { skipRow = false; }
        var rows = this._grid.data.getRawData(0, -1, null, 2);
        var rowInd = (0, core_1.findIndex)(rows, function (obj) { return obj.id == row.id; });
        if (rowInd === -1)
            return null;
        var _p = this._grid.config, topSplit = _p.topSplit, bottomSplit = _p.bottomSplit, $totalWidth = _p.$totalWidth, $totalHeight = _p.$totalHeight, configColumns = _p.columns;
        var columns = configColumns === null || configColumns === void 0 ? void 0 : configColumns.filter(function (col) { return !col.hidden; });
        var fixedCols = {
            left: (0, common_1.getCurrFixedCols)(this._grid.config, types_1.Split.left),
            right: (0, common_1.getCurrFixedCols)(this._grid.config, types_1.Split.right),
        };
        var dataLength = this._grid.data.getLength();
        var fixedRows = {
            top: topSplit ? this._grid.data.getRawData(0, topSplit) : [],
            bottom: bottomSplit ? this._grid.data.getRawData(dataLength - bottomSplit, dataLength) : [],
        };
        var fixedColsIds = {
            left: (_a = fixedCols === null || fixedCols === void 0 ? void 0 : fixedCols.left) === null || _a === void 0 ? void 0 : _a.map(function (col) { return col.id; }),
            right: (_b = fixedCols === null || fixedCols === void 0 ? void 0 : fixedCols.right) === null || _b === void 0 ? void 0 : _b.map(function (col) { return col.id; }),
        };
        var fixedRowsIds = {
            top: fixedRows.top.map(function (row) { return row.id; }),
            bottom: fixedRows.bottom.map(function (row) { return row.id; }),
        };
        var fixedColsWidth = {
            left: (_c = fixedCols === null || fixedCols === void 0 ? void 0 : fixedCols.left) === null || _c === void 0 ? void 0 : _c.reduce(function (total, coll) { return (total += coll.$width || 0); }, 0),
            right: (_d = fixedCols === null || fixedCols === void 0 ? void 0 : fixedCols.right) === null || _d === void 0 ? void 0 : _d.reduce(function (total, coll) { return (total += coll.$width || 0); }, 0),
        };
        var fixedRowsHeight = {
            top: fixedRows.top.reduce(function (total, row) { return (total += row.$height); }, 0),
            bottom: fixedRows.bottom.reduce(function (total, row) { return (total += row.$height); }, 0),
        };
        var cellRect = this._grid.getCellRect(row.id, column.id);
        var scrollState = this._grid.getScrollState();
        var top = cellRect.y;
        var isTopFixedRow = (_e = fixedRowsIds.top) === null || _e === void 0 ? void 0 : _e.includes(row.id);
        var isLeftFixedCol = (_f = fixedColsIds.left) === null || _f === void 0 ? void 0 : _f.includes(column.id);
        var isBehindLeftFixedCols = fixedCols.left.length && fixedColsWidth.left > cellRect.x - scrollState.x;
        var isBehindTopFixedRows = fixedRows.top.length && fixedRowsHeight.top > cellRect.y - scrollState.y;
        var width = cellRect.width;
        var height = cellRect.height - 1;
        var minHeight = null;
        var minWidth = null;
        var left = isBehindLeftFixedCols ? fixedColsWidth.left + scrollState.x : cellRect.x;
        if (isBehindLeftFixedCols) {
            width -=
                (isLeftFixedCol
                    ? (0, main_1.getTotalWidth)(fixedCols.left.slice(0, columns.indexOf(column)))
                    : fixedColsWidth.left) -
                    (cellRect.x - scrollState.x);
        }
        if (isBehindTopFixedRows) {
            height -=
                (isTopFixedRow
                    ? (0, main_1.getTotalHeight)(fixedRows.top.slice(0, rows.indexOf(row)))
                    : fixedRowsHeight.top) -
                    (cellRect.y - scrollState.y) -
                    1;
            top += cellRect.height - height;
        }
        if (isTopFixedRow) {
            top = cellRect.y + scrollState.y;
            var span = this._grid.getSpan(row.id, column.id);
            if (span && span.rowspan > 1) {
                var i = rows.indexOf(row);
                minHeight = (0, main_1.getTotalHeight)(fixedRows.top.slice(i, i + span.rowspan));
            }
            else {
                height =
                    topSplit === fixedRowsIds.top.indexOf(row.id) + 1 ? cellRect.height - 1 : cellRect.height;
            }
        }
        if (isLeftFixedCol) {
            left = cellRect.x + scrollState.x;
            var span = this._grid.getSpan(row.id, column.id);
            if (span && span.colspan > 1) {
                var i = columns === null || columns === void 0 ? void 0 : columns.indexOf(column);
                minWidth = (0, main_1.getTotalWidth)(fixedCols.left.slice(i, i + span.colspan));
            }
            else {
                width =
                    fixedCols.left.length === fixedColsIds.left.indexOf(column.id) + 1
                        ? cellRect.width - 1
                        : cellRect.width;
            }
        }
        var isRightFixedCol, isBehindRightFixedCols, isBottomFixedRow, isBehindBottomFixedRows;
        if (((_g = fixedCols.right) === null || _g === void 0 ? void 0 : _g.length) || bottomSplit) {
            var span = this._grid.getSpan(row.id, column.id);
            var reverseScrollState = this._getReverseScrollState(scrollState);
            if ((_h = fixedCols.right) === null || _h === void 0 ? void 0 : _h.length) {
                isRightFixedCol =
                    ((_j = fixedColsIds.right) === null || _j === void 0 ? void 0 : _j.includes(column.id)) ||
                        (span &&
                            columns.indexOf(column) + (span.colspan || 1) >
                                columns.length - fixedCols.right.length);
                isBehindRightFixedCols =
                    $totalWidth - fixedColsWidth.right < reverseScrollState.x + cellRect.x + cellRect.width;
                if (isBehindRightFixedCols && !isRightFixedCol) {
                    width -=
                        reverseScrollState.x +
                            cellRect.x +
                            cellRect.width -
                            $totalWidth +
                            fixedColsWidth.right;
                }
                if (isRightFixedCol) {
                    if (span && !((_k = fixedColsIds.right) === null || _k === void 0 ? void 0 : _k.includes(span.column))) {
                        var i = columns.length - columns.indexOf(column) - (span.colspan || 1);
                        var xSplit = $totalWidth - fixedColsWidth.right;
                        left =
                            cellRect.x + reverseScrollState.x < xSplit + 1
                                ? cellRect.x
                                : xSplit - reverseScrollState.x + 1;
                        minWidth = (0, main_1.getTotalWidth)(i ? fixedCols.right.slice(0, -i) : fixedCols.right) - 1;
                        width = cellRect.width - reverseScrollState.x;
                    }
                    else {
                        var gap = ((_l = fixedColsIds.right) === null || _l === void 0 ? void 0 : _l.indexOf(column.id)) ? 0 : 1;
                        left = cellRect.x - reverseScrollState.x + gap;
                        width = cellRect.width - gap;
                    }
                }
            }
            if (bottomSplit) {
                isBottomFixedRow =
                    fixedRowsIds.bottom.includes(row.id) ||
                        (span && rows.indexOf(row) + (span.rowspan || 1) > rows.length - bottomSplit);
                isBehindBottomFixedRows =
                    $totalHeight - fixedRowsHeight.bottom <
                        reverseScrollState.y + cellRect.y + cellRect.height;
                if (isBehindBottomFixedRows && !isBottomFixedRow) {
                    height -=
                        reverseScrollState.y +
                            cellRect.y +
                            cellRect.height -
                            $totalHeight +
                            fixedRowsHeight.bottom;
                }
                if (isBottomFixedRow) {
                    if (span && !fixedRowsIds.bottom.includes(span.row)) {
                        var i = rows.length - rows.indexOf(row) - (span.rowspan || 1);
                        var ySplit = $totalHeight - fixedRowsHeight.bottom;
                        var gap = i ? 0 : 1;
                        top =
                            cellRect.y + reverseScrollState.y < ySplit
                                ? cellRect.y
                                : ySplit - reverseScrollState.y;
                        minHeight =
                            (0, main_1.getTotalHeight)(i ? fixedRows.bottom.slice(0, -i) : fixedRows.bottom) - gap;
                        height = cellRect.height - reverseScrollState.y - gap;
                    }
                    else {
                        top = cellRect.y - reverseScrollState.y;
                        height =
                            cellRect.height -
                                (bottomSplit === fixedRowsIds.bottom.indexOf(row.id) + 1 ? 1 : 0);
                    }
                }
            }
        }
        var selectedRowElement = null;
        if ((this._type === "row" || this._type === "complex") && !skipRow) {
            selectedRowElement = (0, dom_1.el)(".dhx_grid-selected-row", {
                style: {
                    width: ((_m = fixedCols.left) === null || _m === void 0 ? void 0 : _m.length) ? $totalWidth - scrollState.x : $totalWidth,
                    height: height,
                    minHeight: minHeight,
                    minWidth: minWidth,
                    display: height < 0 && !minHeight ? "none" : "flex",
                    top: top,
                    left: ((_o = fixedCols.left) === null || _o === void 0 ? void 0 : _o.length) ? scrollState.x : 0,
                    position: "absolute",
                },
            });
        }
        var selectedCellElement = null;
        if ((this._type === "cell" || this._type === "complex") && last) {
            selectedCellElement = (0, dom_1.el)(".dhx_grid-selected-cell", {
                style: {
                    width: width,
                    height: height,
                    top: top,
                    minHeight: minHeight,
                    minWidth: minWidth,
                    left: left,
                    position: "absolute",
                    display: (width < 0 && !minWidth) || (height < 0 && !minHeight) ? "none" : "flex",
                    borderLeft: isBehindLeftFixedCols && !isLeftFixedCol ? "none" : null,
                    borderRight: isBehindRightFixedCols && !isRightFixedCol ? "none" : null,
                    borderTop: isBehindTopFixedRows && !isTopFixedRow ? "none" : null,
                    borderBottom: isBehindBottomFixedRows && !isBottomFixedRow ? "none" : null,
                },
            });
        }
        return (0, dom_1.el)(".dhx_grid-selection", {
            style: {
                zIndex: 20,
            },
        }, [selectedRowElement, selectedCellElement]);
    };
    Selection.prototype._isUnselected = function () {
        return (!this._selectedCell ||
            !this._selectedCell.row ||
            !this._selectedCell.column ||
            this._selectedCells.length === 0);
    };
    Selection.prototype._findIndex = function (cell) {
        var _this = this;
        if (cell === void 0) { cell = this._selectedCell; }
        var cellIndex = -1;
        this._selectedCells.some(function (element, index) {
            if (_this._type === "cell" || _this._type === "complex") {
                if ((0, core_1.compare)(element.row, cell.row) && (0, core_1.compare)(element.column, cell.column)) {
                    cellIndex = index;
                    return true;
                }
            }
            else if (_this._type === "row") {
                if ((0, core_1.compare)(element.row, cell.row)) {
                    cellIndex = index;
                    return true;
                }
            }
        });
        return cellIndex;
    };
    Selection.prototype._setBrowserFocus = function () {
        var gridContainer = this._grid.getRootView().data.getRootNode();
        if (gridContainer) {
            var gridDataContainer = gridContainer.querySelector(".dhx_grid_data");
            if (gridDataContainer &&
                this._selectedCell &&
                this._selectedCell.row &&
                this._selectedCell.column) {
                var $row = gridDataContainer.querySelector("[data-dhx-id=\"".concat(this._selectedCell.row.id, "\"]"));
                var span = this._grid.getSpan(this._selectedCell.row.id, this._selectedCell.column.id);
                if ($row) {
                    var gridSpansContainer = span ? gridContainer.querySelector(".dhx_span-spans") : null;
                    var $focusedCell = gridSpansContainer
                        ? gridSpansContainer.querySelector("[data-dhx-col-id=\"".concat(span.column, "\"][data-dhx-id=\"").concat(span.row, "\"]"))
                        : $row.querySelector("[data-dhx-col-id=\"".concat(this._selectedCell.column.id, "\"]"));
                    if ($focusedCell) {
                        $focusedCell.tabIndex = 0;
                        $focusedCell.focus({ preventScroll: true });
                    }
                }
            }
        }
    };
    Selection.prototype._getReverseScrollState = function (scrollState) {
        var _a;
        var scrollBarWidth = (0, common_1.calcScrollBarWidth)(this._grid.config, !!((_a = this._grid.scrollView) === null || _a === void 0 ? void 0 : _a.config.enable));
        var totalScrollX = this._grid.config.$totalWidth - this._grid.config.$width + common_1.BORDERS + scrollBarWidth.y;
        var totalScrollY = this._grid.config.$totalHeight -
            this._grid.config.$height +
            this._grid.config.$headerHeight +
            this._grid.config.$footerHeight +
            common_1.BORDERS +
            scrollBarWidth.x;
        return {
            x: totalScrollX > 0 ? totalScrollX - scrollState.x : 0,
            y: totalScrollY > 0 ? totalScrollY - scrollState.y : 0,
        };
    };
    return Selection;
}());
exports.Selection = Selection;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.proRender = exports.render = exports.applyAutoWidth = exports.getElementSizes = exports.getRenderConfig = void 0;
var dom_1 = __webpack_require__(1);
var html_1 = __webpack_require__(2);
var data_1 = __webpack_require__(8);
var main_1 = __webpack_require__(7);
var types_1 = __webpack_require__(3);
var Cells_1 = __webpack_require__(18);
var FixedCols_1 = __webpack_require__(50);
var FixedRows_1 = __webpack_require__(51);
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(11);
var panel_1 = __webpack_require__(111);
function getWrapperAutoHeight(grid, config, wrapperSizes) {
    var _a, _b;
    var container = grid._container;
    var height = config.$headerHeight +
        (config.$footerHeight && config.$footerHeight + 1) +
        config.$totalHeight +
        common_1.BORDERS;
    if (container) {
        var _c = window.getComputedStyle(container), minHeight = _c.minHeight, maxHeight = _c.maxHeight;
        if (height <= parseFloat(minHeight)) {
            return parseFloat(minHeight);
        }
        else if (height >= parseFloat(maxHeight)) {
            return parseFloat(maxHeight);
        }
        else {
            return height + (0, common_1.calcScrollBarWidth)(config, !!((_a = grid.scrollView) === null || _a === void 0 ? void 0 : _a.config.enable), wrapperSizes).x;
        }
    }
    else {
        return (height +
            (wrapperSizes ? (0, common_1.calcScrollBarWidth)(config, !!((_b = grid.scrollView) === null || _b === void 0 ? void 0 : _b.config.enable), wrapperSizes).x : 0));
    }
}
function isSpanVisible(span, visibility, _a, dataLength) {
    var _b = _a === void 0 ? [0, 0] : _a, fixedStart = _b[0], fixedEnd = _b[1];
    var spanStart = span[0], spanEnd = span[1];
    var visStart = visibility[0], visEnd = visibility[1];
    var isRangeVisible = (visStart <= spanStart && spanStart <= visEnd) ||
        (visStart <= spanEnd && spanEnd <= visEnd) ||
        (spanStart <= visStart && visEnd <= spanEnd);
    return isRangeVisible || spanStart < fixedStart || (fixedEnd && spanEnd >= dataLength - fixedEnd);
}
function getRenderConfig(obj, data, wrapperSizes) {
    var config = obj.config;
    var _a = config.spans, spans = _a === void 0 ? [] : _a, columns = config.columns, _b = config.leftSplit, leftSplit = _b === void 0 ? 0 : _b, _c = config.topSplit, topSplit = _c === void 0 ? 0 : _c, _d = config.rightSplit, rightSplit = _d === void 0 ? 0 : _d, _e = config.bottomSplit, bottomSplit = _e === void 0 ? 0 : _e;
    var filteredColumns = columns.filter(function (col) { return !col.hidden; });
    var positions = (0, data_1.calculatePositions)(wrapperSizes.width, wrapperSizes.height, obj._scroll, config, data);
    var currentColumns = filteredColumns.slice(positions.xStart, positions.xEnd);
    var currentRows = data.slice(positions.yStart, positions.yEnd);
    var currentSpans = spans.filter(function (span) {
        var _a;
        if (!((_a = span.$renderFrom) === null || _a === void 0 ? void 0 : _a.length))
            return false;
        var rowInRange = isSpanVisible(span.$rowsVisibility, [positions.yStart, positions.yEnd], [topSplit, bottomSplit], data.length);
        var colInRange = isSpanVisible(span.$colsVisibility, [positions.xStart, positions.xEnd], [leftSplit, rightSplit], columns.length);
        return rowInRange && colInRange;
    });
    // const currentSpans = spans;
    var fixedColumns = {
        left: (0, common_1.getCurrFixedCols)(config, types_1.Split.left),
        right: (0, common_1.getCurrFixedCols)(config, types_1.Split.right),
    };
    var fixedRows = {
        top: data.slice(0, config.topSplit || 0),
        bottom: config.bottomSplit ? data.slice(-config.bottomSplit) : [],
    };
    return __assign(__assign({}, config), { data: data, columns: config.columns, scroll: obj._scroll, $positions: positions, headerHeight: config.$headerHeight, footerHeight: config.$footerHeight, firstColId: filteredColumns[0] && filteredColumns[0].id, events: obj.events, _events: obj._events, filteredColumns: filteredColumns, currentColumns: currentColumns, currentRows: currentRows, currentSpans: currentSpans, fixedColumns: fixedColumns, fixedRows: fixedRows, sortBy: obj._sortState.by, sortDir: obj._sortState.dir, content: obj.content, gridId: obj._uid, commonSummary: obj._commonSummary, colSummary: obj._colSummary, $renderFrom: "render" });
}
exports.getRenderConfig = getRenderConfig;
function getElementSizes(element) {
    if (!element)
        return;
    if (!element.tagName)
        element = element._parent._container;
    if (!element)
        return;
    var styles = element.currentStyle || window.getComputedStyle(element);
    var paddingsByWidth = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight) || 0;
    var paddingsByHeight = parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom) || 0;
    return {
        width: element.clientWidth - paddingsByWidth,
        height: element.clientHeight - paddingsByHeight,
    };
}
exports.getElementSizes = getElementSizes;
function getGridData(renderConfig, shifts) {
    var content = (0, Cells_1.getCells)(renderConfig);
    var filteredColumns = renderConfig.filteredColumns, $resizing = renderConfig.$resizing, $totalHeight = renderConfig.$totalHeight, $totalWidth = renderConfig.$totalWidth, leftSplit = renderConfig.leftSplit, data = renderConfig.data, $positions = renderConfig.$positions;
    var contentSpans = (0, Cells_1.getSpans)(renderConfig);
    var getRowAriaAttrs = function (count) { return ({
        role: "rowgroup",
        "aria-rowcount": count,
    }); };
    var resizedLine;
    if ($resizing) {
        var colIndex = (0, core_1.findIndex)(filteredColumns, function (col) { return col.id === $resizing; });
        var firstCellLeft = (0, main_1.getTotalWidth)(filteredColumns.slice(0, colIndex)) + filteredColumns[colIndex].$width;
        resizedLine = (0, dom_1.el)(".dhx_grid-resize-line", {
            style: {
                top: 0,
                left: firstCellLeft,
                height: $totalHeight,
            },
        });
    }
    var selection = renderConfig.selection ? renderConfig.selection.toHTML() : null;
    selection =
        typeof selection === "string" ? (0, dom_1.el)("div.dhx_selection", { ".innerHTML": selection }) : selection;
    var pos = $positions;
    return (0, dom_1.el)(".dhx_data-wrap", {
        style: {
            height: $totalHeight,
            width: $totalWidth,
            "padding-left": shifts.x,
            "padding-top": shifts.y,
        },
        role: "presentation",
        "data-dhx-drop-area": "row",
    }, [
        (0, dom_1.el)(".dhx_grid_data".concat(leftSplit ? ".dhx_grid_fixed_left" : ""), __assign(__assign({ _flags: dom_1.KEYED_LIST }, (0, Cells_1.getHandlers)(pos.yStart, pos.xStart, renderConfig)), getRowAriaAttrs(data.length)), content),
        (0, dom_1.el)(".dhx_span-spans", __assign({ role: "presentation" }, (0, Cells_1.getHandlers)(pos.yStart, pos.xStart, renderConfig)), contentSpans),
        (0, dom_1.el)(".dhx_grid_selection", { _ref: "selection", "aria-hidden": "true" }, [].concat(selection, resizedLine)),
    ]);
}
function getContentHeight(renderConfig, isSticky, wrapperSizes) {
    var contentHeight = wrapperSizes.height - common_1.BORDERS;
    contentHeight = isSticky ? contentHeight : contentHeight - renderConfig.headerHeight;
    var isFooter = renderConfig.$footer;
    return (contentHeight = isFooter
        ? isSticky
            ? contentHeight
            : contentHeight - renderConfig.footerHeight
        : contentHeight);
}
function applyAutoWidth(config, wrapperSizes, scrollViewConfig) {
    if (scrollViewConfig === void 0) { scrollViewConfig = false; }
    var scrollbarY = !scrollViewConfig &&
        config.$totalHeight >= wrapperSizes.height - (config.$headerHeight || 0)
        ? (0, html_1.getScrollbarWidth)()
        : 0;
    var totalWidth = wrapperSizes.width - common_1.BORDERS - scrollbarY;
    if (totalWidth < 0) {
        return;
    }
    var columns = (config.columns || []).filter(function (col) { return !col.hidden; });
    var fixedColumns = [];
    var flexibleColumns = [];
    columns.forEach(function (col) {
        if (!col.width && !col.$fixedWidth && (0, main_1.isAutoWidth)(config, col)) {
            flexibleColumns.push(col);
        }
        else {
            fixedColumns.push(col);
        }
    });
    var fullGravity = flexibleColumns.reduce(function (gravity, col) { return gravity + (col.gravity || 1); }, 0);
    var fixedWidth = (0, main_1.getTotalWidth)(fixedColumns);
    flexibleColumns.forEach(function (col) {
        var width = totalWidth > fixedWidth ? (totalWidth - fixedWidth) * ((col.gravity || 1) / fullGravity) : 0;
        var minLimit = col.minWidth && width < (col.minWidth || 0);
        var maxLimit = col.maxWidth && width > (col.maxWidth || 0);
        if (minLimit) {
            col.$width = col.minWidth;
            fixedWidth += (col.$width || 0) - width;
            flexibleColumns = flexibleColumns.filter(function (c) { return c.id != col.id; });
            fixedColumns.push(col);
        }
        else if (maxLimit) {
            col.$width = col.maxWidth;
            fixedWidth += (col.$width || 0) - width;
            flexibleColumns = flexibleColumns.filter(function (c) { return c.id != col.id; });
            fixedColumns.push(col);
        }
    });
    fullGravity = flexibleColumns.reduce(function (gravity, col) { return gravity + (col.gravity || 1); }, 0);
    fixedWidth = (0, main_1.getTotalWidth)(fixedColumns);
    flexibleColumns.forEach(function (col) {
        var width = totalWidth > fixedWidth ? (totalWidth - fixedWidth) * ((col.gravity || 1) / fullGravity) : 0;
        col.$width = width;
    });
}
exports.applyAutoWidth = applyAutoWidth;
function render(vm, obj, htmlEvents, selection, uid) {
    var parentSizes = getElementSizes(obj._container);
    // if grid placed inside another component, it will fit to its container
    if (vm && vm.node && vm.node.parent && vm.node.parent.el) {
        var parentNode = vm.node.parent.el;
        parentSizes = getElementSizes(parentNode);
    }
    var config = obj.config;
    // when grid is destructing and user try to repaint it
    if (!config) {
        return (0, dom_1.el)("div");
    }
    if (!config.columns.length) {
        return (0, dom_1.el)(".dhx_grid", {
            "data-dhx-widget-id": uid,
            "data-dhx-root-id": config.rootParent,
            "data-dhx-drop-area": "common",
            role: "empty-grid",
        });
    }
    var data = obj.data.getRawData(0, -1, null, 2);
    if (config.columns.reduce(function (check, col) { return (check = !col.hidden ? col.hidden : check); }, true)) {
        config.$totalHeight = 0;
    }
    else {
        config.$totalHeight = data.reduce(function (total, _a) {
            var $height = _a.$height;
            return (total += $height || 0);
        }, 0);
    }
    var width = config.width && typeof config.width === "number" ? config.width : parentSizes === null || parentSizes === void 0 ? void 0 : parentSizes.width;
    var height = config.height && typeof config.height === "number" ? config.height : parentSizes === null || parentSizes === void 0 ? void 0 : parentSizes.height;
    var wrapperSizes = { width: width || 0, height: height || 0 };
    // TODO: Remove scroll
    if ((0, main_1.isAutoWidth)(config)) {
        applyAutoWidth(config, wrapperSizes);
        config.$totalWidth = (0, main_1.getTotalWidth)(config.columns.filter(function (col) { return !col.hidden; }));
    }
    config.$width = wrapperSizes.width;
    config.$height = wrapperSizes.height;
    var renderConfig = getRenderConfig(obj, data, wrapperSizes);
    renderConfig.selection = selection;
    renderConfig.datacollection = obj.data;
    var shifts = (0, Cells_1.getShifts)(renderConfig);
    renderConfig.$scrollBarWidth = (0, common_1.calcScrollBarWidth)(renderConfig);
    var isSticky = (0, main_1.isCssSupport)("position", "sticky");
    var gridBodyHeight = getContentHeight(renderConfig, isSticky, wrapperSizes);
    var layoutState = {
        wrapper: wrapperSizes,
        sticky: isSticky,
        shifts: shifts,
        gridBodyHeight: gridBodyHeight,
    };
    var header = (0, FixedRows_1.getFixedRows)(renderConfig, __assign(__assign({}, layoutState), { name: "header", position: "top" }));
    var footer = renderConfig.$footer
        ? (0, FixedRows_1.getFixedRows)(renderConfig, __assign(__assign({}, layoutState), { name: "footer", position: "bottom" }))
        : null;
    var lessByWidth = renderConfig.$totalWidth + common_1.BORDERS < wrapperSizes.width ? "dhx_grid-less-width" : "";
    var lessByHeight = renderConfig.$totalHeight + common_1.BORDERS < wrapperSizes.height ? "dhx_grid-less-height" : "";
    var fixedRight = renderConfig.fixedColumns.right.length ? "dhx_grid__contains_cols_right--fixed" : "";
    var fixedBottom = config.bottomSplit ? "dhx_grid__contains_rows_bottom--fixed" : "";
    var getGridAriaAttrs = function (rows, cols, isEditable, isMultiselectable) { return ({
        role: "grid",
        "aria-rowcount": rows.length,
        "aria-colcount": cols.filter(function (col) { return !col.hidden; }).length,
        "aria-readonly": isEditable ? "false" : "true",
        "aria-multiselectable": isMultiselectable ? "true" : "false",
    }); };
    // dirty: but work. Change checking of rendering Grid
    if (!vm.node) {
        var _a = obj.getScrollState(), x_1 = _a.x, y_1 = _a.y;
        (0, dom_1.awaitRedraw)().then(function () {
            obj.scroll(x_1, y_1);
        });
    }
    return (0, dom_1.el)(".dhx_grid.dhx_widget", __assign({ class: (renderConfig.css || "") +
            (!isSticky ? " dhx_grid_border" : "") +
            (config.multiselection ? " dhx_no-select--pointer" : ""), "data-dhx-widget-id": uid, "data-dhx-root-id": config.rootParent, "data-dhx-drop-area": "common" }, getGridAriaAttrs(renderConfig.data, config.columns, renderConfig.editable, renderConfig.multiselection)), [
        (0, dom_1.resizer)(function () { return obj.paint(); }),
        (0, dom_1.el)(".dhx_grid-content", __assign(__assign({ style: __assign({}, wrapperSizes) }, htmlEvents), { class: "".concat(lessByWidth, " ").concat(lessByHeight, " ").concat(fixedRight, " ").concat(fixedBottom).trim(), role: "presentation" }), [
            isSticky ? null : header,
            (0, dom_1.el)(".dhx_grid-body", {
                style: {
                    height: gridBodyHeight,
                    width: wrapperSizes.width - common_1.BORDERS,
                },
                onscroll: htmlEvents.onscroll,
                _ref: "grid_body",
                role: "presentation",
            }, [
                (0, dom_1.el)("div", {}, [
                    isSticky ? header : null,
                    getGridData(renderConfig, shifts),
                    isSticky ? footer : null,
                ]),
            ]),
            (0, FixedCols_1.getFixedColsHeader)(renderConfig, layoutState, types_1.Split.left),
            (0, FixedCols_1.getFixedColsHeader)(renderConfig, layoutState, types_1.Split.right),
            (0, FixedCols_1.getFixedCols)(renderConfig, layoutState, types_1.Split.left),
            (0, FixedCols_1.getFixedCols)(renderConfig, layoutState, types_1.Split.right),
            (0, FixedRows_1.getFixedDataRows)(renderConfig, layoutState, types_1.Split.top),
            (0, FixedRows_1.getFixedDataRows)(renderConfig, layoutState, types_1.Split.bottom),
            isSticky ? null : footer,
        ]),
    ]);
}
exports.render = render;
function proRender(vm, obj, htmlEvents, selection, uid) {
    var _a;
    var parentSizes = getElementSizes(obj._container);
    // if grid placed inside another component, it will fit to its container
    if (vm && vm.node && vm.node.parent && vm.node.parent.el) {
        var parentNode = vm.node.parent.el;
        parentSizes = getElementSizes(parentNode);
    }
    var config = obj.config;
    // when grid is destructing and user try to repaint it
    if (!config) {
        return (0, dom_1.el)("div");
    }
    if (!config.columns.length) {
        return (0, dom_1.el)(".dhx_grid", {
            "data-dhx-widget-id": uid,
            "data-dhx-root-id": config.rootParent,
            "data-dhx-drop-area": "common",
            role: "empty-grid",
        });
    }
    var data = obj.data.getRawData(0, -1, null, 2);
    if (config.columns.reduce(function (check, col) { return (check = !col.hidden ? col.hidden : check); }, true)) {
        config.$totalHeight = 0;
    }
    else {
        config.$totalHeight = data.reduce(function (total, _a) {
            var $height = _a.$height;
            return (total += $height || 0);
        }, 0);
    }
    var wrapperAutoHeight;
    if (obj.config.height === "auto") {
        wrapperAutoHeight = getWrapperAutoHeight(obj, config, parentSizes);
    }
    var width = config.width && typeof config.width === "number" ? config.width : parentSizes === null || parentSizes === void 0 ? void 0 : parentSizes.width;
    var height = config.height && typeof config.height === "number" ? config.height : parentSizes === null || parentSizes === void 0 ? void 0 : parentSizes.height;
    var wrapperSizes = {
        width: width || 0,
        height: (obj.config.height === "auto" ? wrapperAutoHeight : height) || 0,
    };
    var group = config.group;
    if (group === null || group === void 0 ? void 0 : group.panel) {
        wrapperSizes.height -= group.panelHeight || 40;
    }
    // TODO: Remove scroll
    if ((0, main_1.isAutoWidth)(config)) {
        applyAutoWidth(config, wrapperSizes, obj.scrollView && obj.scrollView.config.enable);
        config.$totalWidth = (0, main_1.getTotalWidth)(config.columns.filter(function (col) { return !col.hidden; }));
    }
    config.$width = wrapperSizes.width;
    config.$height = wrapperSizes.height;
    var renderConfig = getRenderConfig(obj, data, wrapperSizes);
    renderConfig.selection = selection;
    renderConfig.datacollection = obj.data;
    var shifts = (0, Cells_1.getShifts)(renderConfig);
    renderConfig.$scrollBarWidth = (0, common_1.calcScrollBarWidth)(renderConfig, !!((_a = obj.scrollView) === null || _a === void 0 ? void 0 : _a.config.enable));
    var isSticky = (0, main_1.isCssSupport)("position", "sticky");
    var isGroupPanelVisible = group === null || group === void 0 ? void 0 : group.panel;
    var gridBodyHeight = getContentHeight(renderConfig, isSticky, wrapperSizes);
    var layoutState = {
        wrapper: wrapperSizes,
        sticky: isSticky,
        shifts: shifts,
        gridBodyHeight: gridBodyHeight,
    };
    var header = (0, FixedRows_1.getFixedRows)(renderConfig, __assign(__assign({}, layoutState), { name: "header", position: "top" }));
    var footer = renderConfig.$footer
        ? (0, FixedRows_1.getFixedRows)(renderConfig, __assign(__assign({}, layoutState), { name: "footer", position: "bottom" }))
        : null;
    var lessByWidth = renderConfig.$totalWidth + common_1.BORDERS < wrapperSizes.width ? "dhx_grid-less-width" : "";
    var lessByHeight = renderConfig.$totalHeight + common_1.BORDERS < wrapperSizes.height ? "dhx_grid-less-height" : "";
    var fixedRight = renderConfig.fixedColumns.right.length ? "dhx_grid__contains_cols_right--fixed" : "";
    var fixedBottom = config.bottomSplit ? "dhx_grid__contains_rows_bottom--fixed" : "";
    // dirty: but work. Change checking of rendering Grid
    if (!vm.node) {
        var _b = obj.getScrollState(), x_2 = _b.x, y_2 = _b.y;
        (0, dom_1.awaitRedraw)().then(function () {
            obj.scroll(x_2, y_2);
        });
    }
    var gridContent = (0, dom_1.el)("div", {}, [
        isSticky ? header : null,
        getGridData(renderConfig, shifts),
        isSticky ? footer : null,
    ]);
    return (0, dom_1.el)(".dhx_grid.dhx_widget", {
        class: (renderConfig.css || "") +
            (!isSticky ? " dhx_grid_border" : "") +
            (config.multiselection ? " dhx_no-select--pointer" : ""),
        style: {
            height: wrapperAutoHeight !== null && wrapperAutoHeight !== void 0 ? wrapperAutoHeight : null,
        },
        "data-dhx-widget-id": uid,
        "data-dhx-root-id": config.rootParent,
        role: "grid",
        "aria-rowcount": renderConfig.data.length,
        "aria-colcount": config.columns.filter(function (col) { return !col.hidden; }).length,
        "data-dhx-drop-area": "common",
    }, [
        (isGroupPanelVisible && (0, panel_1.getGroupPanel)(config.$grouped, obj)) || null,
        (0, dom_1.resizer)(function () { return obj.paint(); }),
        (0, dom_1.el)(".dhx_grid-content", __assign(__assign({ style: __assign({}, wrapperSizes) }, htmlEvents), { class: "".concat(lessByWidth, " ").concat(lessByHeight, " ").concat(fixedRight, " ").concat(fixedBottom).trim(), role: "presentation" }), [
            isSticky ? null : header,
            (0, dom_1.el)(".dhx_grid-body", {
                style: {
                    height: gridBodyHeight,
                    width: wrapperSizes.width - common_1.BORDERS,
                },
                onscroll: htmlEvents.onscroll,
                _ref: "grid_body",
                role: "presentation",
            }, [
                obj.scrollView && obj.scrollView.config.enable
                    ? obj.scrollView.render([gridContent])
                    : gridContent,
            ]),
            (0, FixedCols_1.getFixedColsHeader)(renderConfig, layoutState, types_1.Split.left),
            (0, FixedCols_1.getFixedColsHeader)(renderConfig, layoutState, types_1.Split.right),
            (0, FixedCols_1.getFixedCols)(renderConfig, layoutState, types_1.Split.left),
            (0, FixedCols_1.getFixedCols)(renderConfig, layoutState, types_1.Split.right),
            (0, FixedRows_1.getFixedDataRows)(renderConfig, layoutState, types_1.Split.top),
            (0, FixedRows_1.getFixedDataRows)(renderConfig, layoutState, types_1.Split.bottom),
            isSticky ? null : footer,
        ]),
    ]);
}
exports.proRender = proRender;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getEditor = void 0;
var types_1 = __webpack_require__(3);
var InputEditor_1 = __webpack_require__(86);
var SelectEditor_1 = __webpack_require__(87);
var DateEditor_1 = __webpack_require__(88);
var CheckboxEditor_1 = __webpack_require__(102);
var ComboboxEditor_1 = __webpack_require__(103);
var TextAreaEditor_1 = __webpack_require__(110);
var lastEditor = {
    cell: {
        row: null,
        col: null,
    },
    editor: null,
    gridId: null,
};
var editHandler;
function getEditor(row, col, conf, span) {
    var type = col.type === "boolean" ? "checkbox" : conf.$editable.editorType;
    if (typeof type === "undefined")
        type = conf.autoHeight ? "textarea" : "input";
    if (lastEditor.cell.row === row.id &&
        lastEditor.cell.col === col.id &&
        lastEditor.gridId === conf.gridId &&
        conf.$editable.editor) {
        return lastEditor.editor;
    }
    if (type !== "checkbox") {
        lastEditor = {
            cell: {
                row: row.id,
                col: col.id,
            },
            editor: lastEditor.editor,
            gridId: conf.gridId,
        };
    }
    if (!editHandler) {
        editHandler = function () {
            lastEditor = {
                cell: {
                    row: null,
                    col: null,
                },
                editor: null,
                gridId: null,
            };
        };
        conf.events.on(types_1.GridEvents.afterEditEnd, editHandler);
    }
    switch (type) {
        case "input":
            return (lastEditor.editor = new InputEditor_1.InputEditor(row, col, conf));
        case "textarea":
            return (lastEditor.editor = new TextAreaEditor_1.TextAreaEditor(row, col, conf, span));
        case "select":
            return (lastEditor.editor = new SelectEditor_1.SelectEditor(row, col, conf));
        case "datePicker":
            return (lastEditor.editor = new DateEditor_1.DateEditor(row, col, conf));
        case "checkbox":
            return new CheckboxEditor_1.CheckboxEditor(row, col, conf);
        case "multiselect":
        case "combobox":
            return (lastEditor.editor = new ComboboxEditor_1.ComboboxEditor(row, col, conf));
        default:
            return (lastEditor.editor = new InputEditor_1.InputEditor(row, col, conf));
    }
}
exports.getEditor = getEditor;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputEditor = void 0;
var dom_1 = __webpack_require__(1);
var types_1 = __webpack_require__(3);
var core_1 = __webpack_require__(0);
var input_1 = __webpack_require__(23);
var InputEditor = /** @class */ (function () {
    function InputEditor(row, col, config) {
        this.prevValue = "";
        this._config = config;
        this._cell = { row: row, col: col };
        this.type = col.type;
        this._initHandlers();
    }
    InputEditor.prototype.endEdit = function (withoutSave) {
        if (!this._config.$editable)
            return;
        var value;
        if (!withoutSave) {
            value = this._removeValuePattern(this._input.value, true);
            if (this.type === "number" || this._cell.col.numberMask) {
                value = parseFloat(value);
                if (Number.isNaN(value)) {
                    value = "";
                }
                else {
                    var config = this._cell.col.editorConfig;
                    var min = parseFloat(config === null || config === void 0 ? void 0 : config.min);
                    var max = parseFloat(config === null || config === void 0 ? void 0 : config.max);
                    if ((0, core_1.isDefined)(config === null || config === void 0 ? void 0 : config.min) && value < min)
                        value = min;
                    if ((0, core_1.isDefined)(config === null || config === void 0 ? void 0 : config.max) && value > max)
                        value = max;
                }
            }
        }
        if (this._config.events.fire(types_1.GridEvents.beforeEditEnd, [value, this._cell.row, this._cell.col])) {
            this._cell.row = this._config.datacollection.getItem(this._cell.row.id);
            this._config.$editable = null;
            this._config.events.fire(types_1.GridEvents.afterEditEnd, [value, this._cell.row, this._cell.col]);
        }
        else {
            this._input.focus();
        }
    };
    InputEditor.prototype.toHTML = function (value) {
        var _a;
        if ((0, core_1.isDefined)(value)) {
            this.type = "string";
        }
        value =
            (_a = (this._input
                ? this._input.value
                : (value !== null && value !== void 0 ? value : this._cell.row[this._cell.col.id]))) !== null && _a !== void 0 ? _a : "";
        var numberMaskConfig = this._cell.col.numberMask;
        if ((0, core_1.isDefined)(numberMaskConfig === null || numberMaskConfig === void 0 ? void 0 : numberMaskConfig.maxDecLength)) {
            numberMaskConfig = __assign(__assign({}, numberMaskConfig), { maxDecLength: undefined });
        }
        value = this._applyValuePattern(value, this._input, true, numberMaskConfig);
        this._config.$editable.editor = this;
        return (0, dom_1.el)("input.dhx_cell-editor.dhx_cell-editor__input", {
            _hooks: {
                didInsert: this._handlers.didInsert,
            },
            _key: "cell_editor",
            "data-dhx-id": "cell_editor",
            onblur: this._handlers.onBlur,
            oninput: this._handlers.onInput,
            value: value,
        });
    };
    InputEditor.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onBlur: function () {
                _this.endEdit();
            },
            onInput: function () {
                var value = _this._removeValuePattern(_this._input.value);
                if (_this.type === "number") {
                    if (_this._isValidWord(value)) {
                        _this.prevValue = value;
                    }
                    else {
                        value = _this.prevValue;
                    }
                    if (!_this.prevValue.length ||
                        _this.prevValue === "-" ||
                        _this._isCorrectRange(parseFloat(_this.prevValue))) {
                        _this._input.classList.remove("dhx_cell-editor__input--not-valid");
                    }
                    else {
                        _this._input.classList.add("dhx_cell-editor__input--not-valid");
                    }
                }
                _this._input.value = _this._applyValuePattern(value, _this._input);
            },
            didInsert: function (node) {
                _this._input = node.el;
                _this._input.focus();
            },
        };
    };
    InputEditor.prototype._isValidWord = function (word) {
        var _a;
        var lastWord = (_a = word[word.length - 1]) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase();
        var countChar = function (string, char) {
            return string.toLocaleLowerCase().split(char.toLocaleLowerCase()).length - 1;
        };
        return (!word.length ||
            word === "-" ||
            word === "." ||
            (word === "-." && this._cell.col.numberMask) ||
            (!isNaN(Number(word)) && word.trim().length === word.length) ||
            (word.replace("-", "").length > 1 && lastWord === "e" && !countChar(this.prevValue, "e")) ||
            (word.replace("-", "").length > 1 && lastWord === "e" && countChar(word, "e") === 1));
    };
    InputEditor.prototype._isCorrectRange = function (num) {
        var check = true;
        var config = this._cell.col.editorConfig;
        var min = parseFloat(config === null || config === void 0 ? void 0 : config.min);
        var max = parseFloat(config === null || config === void 0 ? void 0 : config.max);
        if ((0, core_1.isDefined)(config === null || config === void 0 ? void 0 : config.min) && (0, core_1.isDefined)(config === null || config === void 0 ? void 0 : config.max)) {
            check = num >= min && num <= max;
        }
        else if ((0, core_1.isDefined)(config === null || config === void 0 ? void 0 : config.min)) {
            check = num > min;
        }
        else if ((0, core_1.isDefined)(config === null || config === void 0 ? void 0 : config.max)) {
            check = num < max;
        }
        return check;
    };
    InputEditor.prototype._applyValuePattern = function (value, input, onlyView, numberMaskConfig) {
        if (onlyView === void 0) { onlyView = false; }
        if (this._cell.col.numberMask) {
            return (0, input_1.numberMask)(value.toString(), __assign(__assign({}, (numberMaskConfig || this._cell.col.numberMask)), { onlyView: onlyView }), input);
        }
        if (this._cell.col.patternMask) {
            return (0, input_1.patternMask)(value.toString(), this._cell.col.patternMask, input);
        }
        return value;
    };
    InputEditor.prototype._removeValuePattern = function (value, lastCall) {
        if (lastCall === void 0) { lastCall = false; }
        if (this._cell.col.numberMask) {
            return (0, input_1.removeNumberMask)(value, __assign(__assign({}, this._cell.col.numberMask), { lastCall: lastCall }));
        }
        if (this._cell.col.patternMask) {
            return (0, input_1.removePatternMask)(value, this._cell.col.patternMask);
        }
        return value;
    };
    return InputEditor;
}());
exports.InputEditor = InputEditor;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectEditor = void 0;
var dom_1 = __webpack_require__(1);
var types_1 = __webpack_require__(3);
var data_1 = __webpack_require__(8);
var SelectEditor = /** @class */ (function () {
    function SelectEditor(row, col, config) {
        this._config = config;
        this._cell = { row: row, col: col };
        this._initHandlers();
    }
    SelectEditor.prototype.endEdit = function (withoutSave) {
        if (!this._config.$editable)
            return;
        var value;
        if (!withoutSave) {
            value = this._input.value;
        }
        if (this._config.events.fire(types_1.GridEvents.beforeEditEnd, [value, this._cell.row, this._cell.col])) {
            this._input.removeEventListener("blur", this._handlers.onBlur);
            this._input.removeEventListener("keydown", this._handlers.onkeydown);
            this._cell.row = this._config.datacollection.getItem(this._cell.row.id);
            this._config.$editable = null;
            this._config.events.fire(types_1.GridEvents.afterEditEnd, [value, this._cell.row, this._cell.col]);
        }
        else {
            this._input.focus();
        }
    };
    SelectEditor.prototype.toHTML = function () {
        var rawOptions = (0, data_1.getEditorOptions)(this._cell.col, this._cell.row);
        var content = rawOptions.map(function (item) {
            return typeof item === "string" ? { id: "".concat(item), value: item } : item;
        }) || [];
        var selected = this._cell.row[this._cell.col.id];
        if (this._input) {
            selected = this._input.options[this._input.selectedIndex].value;
        }
        var options = content.map(function (item) {
            return (0, dom_1.el)("option", {
                selected: item.id.toString() === (selected === null || selected === void 0 ? void 0 : selected.toString()),
                value: item.id,
            }, item.value);
        });
        this._config.$editable.editor = this;
        return (0, dom_1.el)("select.dhx_cell-editor.dhx_cell-editor__select", {
            _hooks: {
                didInsert: this._handlers.didInsert,
            },
            _key: "cell_editor",
            "data-dhx-id": "cell_editor",
        }, options);
    };
    SelectEditor.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onBlur: function () {
                _this.endEdit();
            },
            onkeydown: function (e) {
                if (e.key === "Escape") {
                    _this.endEdit();
                }
            },
            didInsert: function (node) {
                var input = node.el;
                _this._input = input;
                input.focus();
                input.addEventListener("blur", _this._handlers.onBlur);
                input.addEventListener("keydown", _this._handlers.onkeydown);
            },
        };
    };
    return SelectEditor;
}());
exports.SelectEditor = SelectEditor;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateEditor = void 0;
var dom_1 = __webpack_require__(1);
var types_1 = __webpack_require__(3);
var ts_calendar_1 = __webpack_require__(89);
var date_1 = __webpack_require__(13);
var ts_popup_1 = __webpack_require__(27);
var DateEditor = /** @class */ (function () {
    function DateEditor(row, col, config) {
        var _this = this;
        this._config = config;
        this._cell = { row: row, col: col };
        this._editorConfig = this._cleanConfig(col);
        this._calendar = new ts_calendar_1.Calendar(null, this._editorConfig);
        this._calendar.setValue(this._getValue(this._cell.row[this._cell.col.id]));
        this._value = this._calendar.getValue();
        this._cell.row[this._cell.col.id] = this._value;
        this._popup = new ts_popup_1.Popup();
        this._popup.attach(this._calendar);
        this._calendar.events.on(ts_calendar_1.CalendarEvents.change, function () {
            _this.endEdit(false, true);
        });
        this._popup.events.on(ts_popup_1.PopupEvents.afterHide, function () {
            _this.endEdit();
        });
        this._initHandlers();
    }
    DateEditor.prototype.endEdit = function (withoutSave, calendarChange) {
        var _this = this;
        if (!this._handlers || !this._config.$editable) {
            return;
        }
        var format = this._calendar.config.dateFormat;
        var value = this._cell.row[this._cell.col.id];
        var inputVal = this._input.value;
        if (!withoutSave) {
            if (value instanceof Date || calendarChange) {
                this._value = this._calendar.getValue();
                this._input.value = this._value;
                this._popup.hide();
                return;
            }
            else if (((0, date_1.stringToDate)(inputVal, format, true) || !inputVal) &&
                ((value && inputVal.length === value.length) || !value || !inputVal)) {
                this._value = inputVal;
            }
        }
        var outputValue = this._calendar.getValue(this._editorConfig.asDateObject);
        if (this._config.events.fire(types_1.GridEvents.beforeEditEnd, [outputValue, this._cell.row, this._cell.col])) {
            this._input.removeEventListener("focus", this._handlers.onFocus);
            this._input.removeEventListener("change", this._handlers.onChange);
            document.removeEventListener("mousedown", this._handlers.onOuterClick);
            (0, dom_1.awaitRedraw)().then(function () {
                _this._popup.destructor();
                _this._calendar.destructor();
            });
            this._cell.row = this._config.datacollection.getItem(this._cell.row.id);
            this._config.$editable = null;
            this._config.events.fire(types_1.GridEvents.afterEditEnd, [outputValue, this._cell.row, this._cell.col]);
        }
        else {
            this._input.focus();
        }
    };
    DateEditor.prototype.toHTML = function () {
        var value = this._getValue(this._cell.row[this._cell.col.id]);
        this._config.$editable.editor = this;
        document.addEventListener("mousedown", this._handlers.onOuterClick);
        return (0, dom_1.el)("input.dhx_cell-editor.dhx_cell-editor__input.dhx_cell-editor__datepicker", {
            _hooks: {
                didInsert: this._handlers.didInsert,
            },
            _key: "cell_editor",
            "data-dhx-id": "cell_editor",
            value: value,
        });
    };
    DateEditor.prototype._cleanConfig = function (col) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var _a = col.editorConfig || {}, value = _a.value, range = _a.range, dateFormat = _a.dateFormat, calendarConfig = __rest(_a, ["value", "range", "dateFormat"]);
        calendarConfig.dateFormat = col.dateFormat;
        return calendarConfig;
    };
    DateEditor.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onFocus: function () {
                (0, dom_1.awaitRedraw)().then(function () {
                    _this._popup.show(_this._input, {
                        centering: true,
                        mode: "bottom",
                        theme: _this._input,
                    });
                });
            },
            onChange: function () {
                _this.endEdit();
            },
            onOuterClick: function (e) {
                if (e.target instanceof Node) {
                    var isInput = _this._input && _this._input.contains(e.target);
                    var isPopup = _this._popup &&
                        _this._popup.getRootNode() &&
                        _this._popup.getRootNode().contains(e.target);
                    if (!(isInput || isPopup)) {
                        _this._popup.hide();
                    }
                }
            },
            didInsert: function (node) {
                var input = node.el;
                _this._input = input;
                _this._input.addEventListener("focus", _this._handlers.onFocus);
                _this._input.addEventListener("change", _this._handlers.onChange);
                input.focus();
                input.setSelectionRange(input.value.length, input.value.length);
            },
        };
    };
    DateEditor.prototype._getValue = function (value) {
        var dateFormat = this._calendar.config.dateFormat || "%M %d %Y";
        if (typeof value === "string") {
            if (!(0, date_1.stringToDate)(value, dateFormat, true)) {
                var dateString = new Date(value);
                if (dateString === null || dateString === void 0 ? void 0 : dateString.valueOf()) {
                    value = dateString;
                }
                else {
                    return "";
                }
            }
        }
        return value;
    };
    return DateEditor;
}());
exports.DateEditor = DateEditor;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(90), exports);
__exportStar(__webpack_require__(42), exports);


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar = void 0;
var core_1 = __webpack_require__(0);
var dom_1 = __webpack_require__(1);
var events_1 = __webpack_require__(4);
var view_1 = __webpack_require__(6);
var ts_timepicker_1 = __webpack_require__(91);
var helper_1 = __webpack_require__(101);
var date_1 = __webpack_require__(13);
var types_1 = __webpack_require__(42);
var html_1 = __webpack_require__(2);
var Calendar = /** @class */ (function (_super) {
    __extends(Calendar, _super);
    function Calendar(container, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, container, (0, core_1.extend)({
            weekStart: "sunday",
            thisMonthOnly: false,
            dateFormat: window && window.dhx && window.dhx.dateFormat,
            width: "250px",
        }, config)) || this;
        _this._selected = [];
        _this.events = new events_1.EventSystem();
        _this.config.disabledDates = _this.config.disabledDates || _this.config.block; // TODO: remove suite_7.0
        _this.config.mode = _this.config.mode || _this.config.view; // TODO: remove suite_7.0
        if (!_this.config.dateFormat) {
            if (_this.config.timePicker) {
                if (_this.config.timeFormat === 12) {
                    _this.config.dateFormat = "%d/%m/%y %h:%i %A";
                }
                else {
                    _this.config.dateFormat = "%d/%m/%y %H:%i";
                }
            }
            else {
                _this.config.dateFormat = "%d/%m/%y";
            }
        }
        if (_this.config.value) {
            _this._setSelected(_this.config.value);
        }
        if (_this.config.date) {
            _this._currentDate = date_1.DateHelper.toDateObject(_this.config.date, _this.config.dateFormat);
        }
        else if (_this._getSelected()) {
            _this._currentDate = date_1.DateHelper.copy(_this._getSelected());
        }
        else {
            _this._currentDate = new Date();
        }
        switch (_this.config.mode) {
            case "month":
                _this._currentViewMode = "month";
                break;
            case "year":
                _this._currentViewMode = "year";
                break;
            case "timepicker":
                _this._currentViewMode = _this.config.timePicker ? "timepicker" : "calendar";
                break;
            default:
                _this._currentViewMode = "calendar";
        }
        _this._initHandlers();
        if (_this.config.timePicker) {
            _this._timepicker = new ts_timepicker_1.Timepicker(null, {
                timeFormat: _this.config.timeFormat,
                controls: true,
            });
            var initTime = _this._getSelected() || new Date();
            _this._timepicker.setValue(initTime);
            _this._time = _this._timepicker.getValue();
            _this._timepicker.events.on(ts_timepicker_1.TimepickerEvents.afterClose, function () {
                _this._timepicker.setValue(_this._time);
                _this.showDate(null, "calendar");
            });
            _this._timepicker.events.on(ts_timepicker_1.TimepickerEvents.afterApply, function () {
                var _a = _this._timepicker.getValue(true), hour = _a.hour, minute = _a.minute, AM = _a.AM;
                var oldDate = _this._getSelected();
                var newDate = date_1.DateHelper.withHoursAndMinutes(_this._getSelected() || new Date(), hour, minute, AM);
                if (_this.events.fire(types_1.CalendarEvents.beforeChange, [newDate, oldDate, true])) {
                    _this._selected[_this._selected.length - 1] = newDate;
                    _this.events.fire(types_1.CalendarEvents.change, [newDate, oldDate, true]);
                }
                _this._time = _this._timepicker.getValue();
                _this.showDate(null, "calendar");
            });
        }
        var render = function () { return _this._draw(); };
        _this.mount(container, (0, dom_1.create)({ render: render }));
        return _this;
    }
    Calendar.prototype.setValue = function (value) {
        if (!value || (value instanceof Array && value.length === 0)) {
            return false;
        }
        var currentDate = value instanceof Array ? value[0] : value;
        var date = date_1.DateHelper.toDateObject(currentDate, this.config.dateFormat);
        var oldDate = date_1.DateHelper.copy(this._getSelected());
        if (!this.events.fire(types_1.CalendarEvents.beforeChange, [date, oldDate, false])) {
            return false;
        }
        this._selected = [];
        this._setSelected(value);
        if (this._timepicker) {
            this._timepicker.setValue(date);
            this._time = this._timepicker.getValue();
        }
        this.showDate(this._getSelected());
        this.events.fire(types_1.CalendarEvents.change, [date, oldDate, false]);
        this.paint();
        return true;
    };
    Calendar.prototype.getValue = function (asDateObject) {
        var _this = this;
        if (asDateObject === void 0) { asDateObject = false; }
        if (!this._selected[0]) {
            return "";
        }
        if (this.config.range) {
            return asDateObject
                ? this._selected.map(function (date) { return date_1.DateHelper.copy(date); })
                : this._selected.map(function (date) { return (0, date_1.getFormattedDate)(_this.config.dateFormat, date); });
        }
        return asDateObject
            ? date_1.DateHelper.copy(this._selected[0])
            : (0, date_1.getFormattedDate)(this.config.dateFormat, this._selected[0]);
    };
    Calendar.prototype.getCurrentMode = function () {
        return this._currentViewMode;
    };
    Calendar.prototype.showDate = function (date, mode) {
        if (date) {
            this._currentDate = date_1.DateHelper.copy(date);
        }
        if (mode) {
            this._currentViewMode = mode;
        }
        this.paint();
    };
    Calendar.prototype.destructor = function () {
        this._linkedCalendar && this._unlink();
        this._timepicker && this._timepicker.destructor();
        this.events && this.events.clear();
        this.config = this.events = null;
        this._uid = this._selected = this._currentDate = this._currentViewMode = this._handlers = this._timepicker = this._time = null;
        this.unmount();
    };
    Calendar.prototype.clear = function () {
        var oldDate = this.getValue(true);
        if (!this.events.fire(types_1.CalendarEvents.beforeChange, ["", oldDate, false]))
            return;
        if (this.config.timePicker) {
            this._timepicker.clear();
            this._time = this._timepicker.getValue();
        }
        this._selected = [];
        this.showDate(null, this.config.mode);
        this.events.fire(types_1.CalendarEvents.change, [this.getValue(true), oldDate, false, "clear"]);
    };
    Calendar.prototype.link = function (targetCalendar) {
        var _this = this;
        if (this._linkedCalendar) {
            this._unlink();
        }
        this._linkedCalendar = targetCalendar;
        var rawLowerDate = this.getValue(true);
        var rawUpperDate = targetCalendar.getValue(true);
        var lowerDate = rawLowerDate && date_1.DateHelper.dayStart(rawLowerDate);
        var upperDate = rawUpperDate && date_1.DateHelper.dayStart(rawUpperDate);
        var getRangeClass = function (date) {
            if (date_1.DateHelper.isSameDay(upperDate, lowerDate)) {
                return null;
            }
            var positionInRange = "dhx_calendar-day--in-range";
            if (date_1.DateHelper.isSameDay(date, lowerDate)) {
                positionInRange += " dhx_calendar-day--first-date";
            }
            if (date_1.DateHelper.isSameDay(date, upperDate)) {
                positionInRange += " dhx_calendar-day--last-date";
            }
            return positionInRange;
        };
        var rangeMark = function (date) {
            if (lowerDate && upperDate) {
                return date >= lowerDate && date <= upperDate && getRangeClass(date);
            }
        };
        if (!this.config.$rangeMark || !this._linkedCalendar.config.$rangeMark) {
            this.config.$rangeMark = this._linkedCalendar.config.$rangeMark = rangeMark;
        }
        if (!this.config.disabledDates || !this._linkedCalendar.config.disabledDates) {
            this.config.disabledDates = function (date) {
                if (upperDate) {
                    return date > upperDate;
                }
            };
            this._linkedCalendar.config.disabledDates = function (date) {
                if (lowerDate) {
                    return date < lowerDate;
                }
            };
        }
        this.config.thisMonthOnly = true;
        targetCalendar.config.thisMonthOnly = true;
        this.events.on(types_1.CalendarEvents.change, function (date) {
            lowerDate = date ? date_1.DateHelper.dayStart(date) : null;
            _this._linkedCalendar.paint();
        }, "link");
        this._linkedCalendar.events.on(types_1.CalendarEvents.change, function (date) {
            upperDate = date ? date_1.DateHelper.dayStart(date) : null;
            _this.paint();
        }, "link");
        this._linkedCalendar.paint();
        this.paint();
    };
    Calendar.prototype._unlink = function () {
        if (this._linkedCalendar) {
            this.config.$rangeMark = this._linkedCalendar.config.$rangeMark = null;
            this.config.disabledDates = this._linkedCalendar.config.disabledDates = null;
            this.events.detach(types_1.CalendarEvents.change, "link");
            this._linkedCalendar.events.detach(types_1.CalendarEvents.change, "link");
            this._linkedCalendar.paint();
            this._linkedCalendar = null;
        }
    };
    Calendar.prototype._setSelected = function (value) {
        var _this = this;
        var currentDate = value instanceof Array ? value[0] : value;
        var date = date_1.DateHelper.toDateObject(currentDate, this.config.dateFormat);
        if (value instanceof Array && this.config.range) {
            var filterDate_1 = [];
            value.forEach(function (element, index) {
                if (index < 2) {
                    filterDate_1.push(date_1.DateHelper.toDateObject(element, _this.config.dateFormat));
                }
            });
            if (filterDate_1.length === 2 && filterDate_1[0] < filterDate_1[1]) {
                filterDate_1.forEach(function (element) { return _this._selected.push(element); });
            }
            else {
                this._selected[0] = filterDate_1[0];
            }
        }
        else {
            this._selected[0] = date;
        }
    };
    Calendar.prototype._getSelected = function () {
        return this._selected[this._selected.length - 1];
    };
    Calendar.prototype._draw = function () {
        switch (this._currentViewMode) {
            case "calendar":
                this.events.fire(types_1.CalendarEvents.modeChange, ["calendar"]);
                return this._drawCalendar();
            case "month":
                this.events.fire(types_1.CalendarEvents.modeChange, ["month"]);
                return this._drawMonthSelector();
            case "year":
                this.events.fire(types_1.CalendarEvents.modeChange, ["year"]);
                return this._drawYearSelector();
            case "timepicker":
                this.events.fire(types_1.CalendarEvents.modeChange, ["timepicker"]);
                return this._drawTimepicker();
        }
    };
    Calendar.prototype._initHandlers = function () {
        var _this = this;
        var ie_key_map = {
            Up: "ArrowUp",
            Down: "ArrowDown",
            Right: "ArrowRight",
            Left: "ArrowLeft",
            Esc: "Escape",
            Spacebar: "Space",
        };
        var getKey = function (e) {
            var key;
            if ((e.which >= 48 && e.which <= 57) || (e.which >= 65 && e.which <= 90)) {
                key = String.fromCharCode(e.which);
            }
            else {
                var keyName = e.which === 32 ? e.code : e.key;
                key = (0, html_1.isIE)() ? ie_key_map[keyName] || keyName : keyName;
            }
            return key;
        };
        var getVerticalRange = function (decrease) {
            if (decrease === void 0) { decrease = false; }
            var range = 0;
            switch (_this._currentViewMode) {
                case "calendar":
                    range = decrease ? -7 : 7;
                    break;
                case "month":
                    range = decrease ? -4 : 4;
                    break;
                case "year":
                    range = decrease ? -4 : 4;
            }
            return range;
        };
        this._handlers = {
            onkeydown: {
                ".dhx_calendar-year, .dhx_calendar-month, .dhx_calendar-day": function (_e, vn) {
                    switch (getKey(_e)) {
                        case "Enter":
                            _this._selectDate(_e, vn);
                            break;
                        case "ArrowLeft":
                            _this._moveBrowseFocus(_e, vn, -1);
                            break;
                        case "ArrowRight":
                            _this._moveBrowseFocus(_e, vn, 1);
                            break;
                        case "ArrowUp":
                            _this._moveBrowseFocus(_e, vn, getVerticalRange(true));
                            break;
                        case "ArrowDown":
                            _this._moveBrowseFocus(_e, vn, getVerticalRange());
                            break;
                    }
                },
            },
            onclick: {
                ".dhx_calendar-year, .dhx_calendar-month, .dhx_calendar-day": function (_e, vn) {
                    _this._selectDate(_e, vn);
                },
                ".dhx_calendar-action__cancel": function () {
                    _this.showDate(_this._getSelected(), "calendar");
                    _this.events.fire(types_1.CalendarEvents.cancelClick, []);
                },
                ".dhx_calendar-action__show-month": function () { return _this.showDate(null, "month"); },
                ".dhx_calendar-action__show-year": function () { return _this.showDate(null, "year"); },
                ".dhx_calendar-action__next": function () {
                    var newDate;
                    switch (_this._currentViewMode) {
                        case "calendar":
                            newDate = date_1.DateHelper.addMonth(_this._currentDate, 1);
                            break;
                        case "month":
                            newDate = date_1.DateHelper.addYear(_this._currentDate, 1);
                            break;
                        case "year":
                            newDate = date_1.DateHelper.addYear(_this._currentDate, 12);
                    }
                    _this.showDate(newDate);
                },
                ".dhx_calendar-action__prev": function () {
                    var newDate;
                    switch (_this._currentViewMode) {
                        case "calendar":
                            newDate = date_1.DateHelper.addMonth(_this._currentDate, -1);
                            break;
                        case "month":
                            newDate = date_1.DateHelper.addYear(_this._currentDate, -1);
                            break;
                        case "year":
                            newDate = date_1.DateHelper.addYear(_this._currentDate, -12);
                    }
                    _this.showDate(newDate);
                },
                ".dhx_calendar-action__show-timepicker": function () {
                    _this._currentViewMode = "timepicker";
                    _this.paint();
                },
            },
            onmouseover: {
                ".dhx_calendar-day": function (event, node) {
                    _this.events.fire(types_1.CalendarEvents.dateMouseOver, [new Date(node.attrs._date), event]);
                    _this.events.fire(types_1.CalendarEvents.dateHover, [new Date(node.attrs._date), event]); // TODO: remove suite_7.0
                },
            },
        };
    };
    Calendar.prototype._getData = function (date) {
        var _this = this;
        this._isSelectedInCurrentRange = false;
        var firstDay;
        switch (this.config.weekStart) {
            case "saturday":
                firstDay = -1;
                break;
            case "monday":
                firstDay = 1;
                break;
            default:
                firstDay = 0;
        }
        var first = date_1.DateHelper.weekStart(date_1.DateHelper.monthStart(date), firstDay);
        var data = [];
        var weeksCount = 6;
        var currentDate = first;
        while (weeksCount--) {
            var currentWeek = date_1.DateHelper.getWeekNumber(currentDate);
            var disabledDays = 0;
            var daysCount = 7;
            var days = [];
            var _loop_1 = function () {
                var isDateWeekEnd = date_1.DateHelper.isWeekEnd(currentDate);
                var isCurrentMonth = date.getMonth() === currentDate.getMonth();
                var isBlocked = this_1.config.disabledDates && this_1.config.disabledDates(currentDate);
                var css = [];
                if (this_1.config.range && this_1._selected[0] && this_1._selected[1]) {
                    var getRangeClass_1 = function () {
                        if (date_1.DateHelper.isSameDay(_this._selected[0], _this._selected[1])) {
                            return null;
                        }
                        return "dhx_calendar-day--in-range";
                    };
                    var rangeMark = function () {
                        if (_this._selected[0] && _this._selected[1]) {
                            var firstDate = date_1.DateHelper.dayStart(_this._selected[0]);
                            var lastDate = date_1.DateHelper.dayStart(_this._selected[1]);
                            return currentDate >= firstDate && currentDate <= lastDate && getRangeClass_1();
                        }
                    };
                    this_1.config.$rangeMark = rangeMark;
                }
                if (isDateWeekEnd) {
                    css.push("dhx_calendar-day--weekend");
                }
                if (!isCurrentMonth) {
                    if (this_1.config.thisMonthOnly) {
                        disabledDays++;
                        css.push("dhx_calendar-day--hidden");
                    }
                    else {
                        css.push("dhx_calendar-day--muffled");
                    }
                }
                if (this_1.config.mark) {
                    var markedCss = this_1.config.mark(currentDate);
                    if (markedCss) {
                        css.push(markedCss);
                    }
                }
                if (this_1.config.$rangeMark) {
                    var rangeMark = this_1.config.$rangeMark(currentDate);
                    if (rangeMark) {
                        css.push(rangeMark);
                    }
                }
                if (isBlocked) {
                    if (isDateWeekEnd) {
                        css.push("dhx_calendar-day--weekend-disabled");
                    }
                    else {
                        css.push("dhx_calendar-day--disabled");
                    }
                }
                this_1._selected.forEach(function (selected, index) {
                    if (selected && date_1.DateHelper.isSameDay(selected, currentDate)) {
                        _this._isSelectedInCurrentRange = true;
                        var dayCss = "dhx_calendar-day--selected";
                        if (_this.config.range) {
                            dayCss += " dhx_calendar-day--selected-".concat(index === 0 ? "first " : "last");
                        }
                        css.push(dayCss);
                    }
                });
                days.push({
                    date: currentDate,
                    day: currentDate.getDate(),
                    css: css.join(" "),
                });
                currentDate = date_1.DateHelper.addDay(currentDate);
            };
            var this_1 = this;
            while (daysCount--) {
                _loop_1();
            }
            data.push({
                weekNumber: currentWeek,
                days: days,
                disabledWeekNumber: disabledDays === 7,
            });
        }
        return data;
    };
    Calendar.prototype._drawCalendar = function () {
        var _this = this;
        var date = this._currentDate;
        var _a = this.config, weekStart = _a.weekStart, thisMonthOnly = _a.thisMonthOnly, css = _a.css, timePicker = _a.timePicker, width = _a.width;
        var weekDays;
        switch (weekStart) {
            case "saturday":
                weekDays = __spreadArray([date_1.locale.daysShort[6]], date_1.locale.daysShort.slice(0, -1), true);
                break;
            case "monday":
                weekDays = __spreadArray(__spreadArray([], date_1.locale.daysShort.slice(1), true), [date_1.locale.daysShort[0]], false);
                break;
            default:
                weekDays = date_1.locale.daysShort;
        }
        var weekDaysHeader = weekDays.map(function (day) { return (0, dom_1.el)(".dhx_calendar-weekday", day); });
        var data = this._getData(date);
        var isFirstItem = true;
        var selectedDate = this._getSelected();
        var isDateSelected = function (date) {
            return date && selectedDate && date.getTime() === selectedDate.getTime();
        };
        var getCellAriaAttrs = function (item) {
            var attrs = {
                role: "button",
                tabindex: -1,
                "aria-pressed": "false",
            };
            if (item) {
                if (_this._isSelectedInCurrentRange) {
                    // it is correct that conditions are separated
                    if (isDateSelected(item.date)) {
                        attrs["tabindex"] = 0;
                        attrs["aria-pressed"] = "true";
                    }
                }
                else if (isFirstItem) {
                    attrs["tabindex"] = 0;
                }
                isFirstItem = false;
            }
            return attrs;
        };
        var content = [];
        var weekNumbers = [];
        var weekNumbersWrapper;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var week = data_1[_i];
            var weekRow = week.days.map(function (item) {
                return (0, dom_1.el)("div.dhx_calendar-day", __assign({ class: item.css, _date: item.date }, getCellAriaAttrs(item)), item.day);
            });
            if (this.config.weekNumbers && !(week.disabledWeekNumber && thisMonthOnly)) {
                weekNumbers.push((0, dom_1.el)("div", {
                    class: "dhx_calendar-week-number",
                }, week.weekNumber));
            }
            content = content.concat(weekRow);
        }
        if (this.config.weekNumbers) {
            weekNumbersWrapper = (0, dom_1.el)(".dhx_calendar__week-numbers", weekNumbers);
        }
        var widgetClass = "dhx_calendar dhx_widget" +
            (css ? " " + css : "") +
            (timePicker ? " dhx_calendar--with_timepicker" : "") +
            (this.config.weekNumbers ? " dhx_calendar--with_week-numbers" : "");
        return (0, dom_1.el)("div", __assign({ class: widgetClass, style: {
                width: this.config.weekNumbers ? parseInt(width.toString()) + 48 + "px" : width,
            } }, this._handlers), [
            (0, dom_1.el)(".dhx_calendar__wrapper", [
                this._drawHeader((0, dom_1.el)("button.dhx_calendar-action__show-month.dhx_button.dhx_button--view_link.dhx_button--size_small.dhx_button--color_secondary.dhx_button--circle", {
                    "aria-live": "polite",
                    type: "button",
                }, date_1.locale.months[date.getMonth()] + " " + date.getFullYear())),
                this.config.weekNumbers &&
                    (0, dom_1.el)(".dhx_calendar__dates-wrapper", [
                        (0, dom_1.el)(".dhx_calendar__weekdays", weekDaysHeader),
                        (0, dom_1.el)(".dhx_calendar__days", content),
                        weekNumbersWrapper,
                    ]),
                !this.config.weekNumbers && (0, dom_1.el)(".dhx_calendar__weekdays", weekDaysHeader),
                !this.config.weekNumbers && (0, dom_1.el)(".dhx_calendar__days", content),
                timePicker
                    ? (0, dom_1.el)(".dhx_timepicker__actions", [
                        (0, dom_1.el)("button.dhx_calendar__timepicker-button." +
                            "dhx_button.dhx_button--view_link.dhx_button--size_small.dhx_button--color_secondary.dhx_button--width_full.dhx_button--circle.dhx_calendar-action__show-timepicker", { type: "button" }, [
                            (0, dom_1.el)("span.dhx_button__icon.dxi.dxi-clock-outline"),
                            (0, dom_1.el)("span.dhx_button__text", this._time),
                        ]),
                    ])
                    : null,
            ]),
        ]);
    };
    Calendar.prototype._drawMonthSelector = function () {
        var date = this._currentDate;
        var currentMonth = date.getMonth();
        var currentYear = this._getSelected() ? this._getSelected().getFullYear() : null;
        var _a = this.config, css = _a.css, timePicker = _a.timePicker, weekNumbers = _a.weekNumbers, width = _a.width, mode = _a.mode;
        var widgetClass = "dhx_calendar dhx_widget" +
            (css ? " " + css : "") +
            (timePicker ? " dhx_calendar--with_timepicker" : "") +
            (weekNumbers ? " dhx_calendar--with_week-numbers" : "");
        var isFirstItem = true;
        var isCurrentYear = currentYear === date.getFullYear();
        var isMonthSelected = function (i) { return isCurrentYear && currentMonth === i; };
        var getCellAriaAttrs = function (item, i) {
            var attrs = {
                role: "button",
                tabindex: -1,
                "aria-pressed": "false",
            };
            if (item) {
                if (isCurrentYear) {
                    // it is correct that conditions are separated
                    if (isMonthSelected(i)) {
                        attrs["tabindex"] = 0;
                        attrs["aria-pressed"] = "true";
                    }
                }
                else if (isFirstItem) {
                    attrs["tabindex"] = 0;
                }
                isFirstItem = false;
            }
            return attrs;
        };
        return (0, dom_1.el)("div", __assign({ class: widgetClass, style: {
                width: weekNumbers ? parseInt(width.toString()) + 48 + "px" : width,
            } }, this._handlers), [
            (0, dom_1.el)(".dhx_calendar__wrapper", [
                this._drawHeader((0, dom_1.el)("button.dhx_calendar-action__show-year.dhx_button.dhx_button--view_link.dhx_button--size_small.dhx_button--color_secondary.dhx_button--circle", {
                    "aria-live": "polite",
                    type: "button",
                }, date.getFullYear())),
                (0, dom_1.el)(".dhx_calendar__months", date_1.locale.monthsShort.map(function (item, i) {
                    return (0, dom_1.el)("div", __assign(__assign({ class: "dhx_calendar-month" +
                            (isMonthSelected(i) ? " dhx_calendar-month--selected" : "") }, getCellAriaAttrs(item, i)), { _date: i }), item);
                })),
                mode !== "month"
                    ? (0, dom_1.el)(".dhx_calendar__actions", [
                        (0, dom_1.el)("button.dhx_button.dhx_button--color_primary.dhx_button--view_link.dhx_button--size_small.dhx_button--width_full.dhx_button--circle.dhx_calendar-action__cancel", { type: "button" }, date_1.locale.cancel),
                    ])
                    : null,
            ]),
        ]);
    };
    Calendar.prototype._drawYearSelector = function () {
        var _this = this;
        var date = this._currentDate;
        var yearsDiapason = date_1.DateHelper.getTwelweYears(date);
        var _a = this.config, css = _a.css, timePicker = _a.timePicker, weekNumbers = _a.weekNumbers, width = _a.width, mode = _a.mode;
        var widgetClass = "dhx_calendar dhx_widget" +
            (css ? " " + css : "") +
            (timePicker ? " dhx_calendar--with_timepicker" : "") +
            (weekNumbers ? " dhx_calendar--with_week-numbers" : "");
        var isFirstItem = true;
        var isSelectedYearInRange = this._getSelected() && yearsDiapason.includes(this._getSelected().getFullYear());
        var isYearSelected = function (item) { return _this._getSelected() && item === _this._getSelected().getFullYear(); };
        var getCellAriaAttrs = function (item) {
            var attrs = {
                role: "button",
                tabindex: -1,
                "aria-pressed": "false",
            };
            if (item) {
                if (isSelectedYearInRange) {
                    // it is correct that conditions are separated
                    if (isYearSelected(item)) {
                        attrs["tabindex"] = 0;
                        attrs["aria-pressed"] = "true";
                    }
                }
                else if (isFirstItem) {
                    attrs["tabindex"] = 0;
                }
                isFirstItem = false;
            }
            return attrs;
        };
        return (0, dom_1.el)("div", __assign({ class: widgetClass, style: {
                width: weekNumbers ? parseInt(width.toString()) + 48 + "px" : width,
            } }, this._handlers), [
            (0, dom_1.el)(".dhx_calendar__wrapper", [
                this._drawHeader((0, dom_1.el)("button.dhx_button.dhx_button--view_link.dhx_button--size_small.dhx_button--color_secondary.dhx_button--circle", {
                    "aria-live": "polite",
                    type: "button",
                }, yearsDiapason[0] + "-" + yearsDiapason[yearsDiapason.length - 1])),
                (0, dom_1.el)(".dhx_calendar__years", yearsDiapason.map(function (item) {
                    return (0, dom_1.el)("div", __assign({ class: "dhx_calendar-year" +
                            (isYearSelected(item) ? " dhx_calendar-year--selected" : ""), _date: item }, getCellAriaAttrs(item)), item);
                })),
                mode !== "year" && mode !== "month"
                    ? (0, dom_1.el)(".dhx_calendar__actions", [
                        (0, dom_1.el)("button.dhx_button.dhx_button--color_primary.dhx_button--view_link.dhx_button--size_small.dhx_button--width_full.dhx_button--circle.dhx_calendar-action__cancel", { type: "button" }, date_1.locale.cancel),
                    ])
                    : null,
            ]),
        ]);
    };
    Calendar.prototype._drawHeader = function (actionContent) {
        return (0, dom_1.el)(".dhx_calendar__navigation", [
            (0, dom_1.el)("button.dhx_calendar-navigation__button.dhx_calendar-action__prev" +
                helper_1.linkButtonClasses +
                ".dhx_button--icon.dhx_button--circle", {
                "aria-label": "prev",
                type: "button",
            }, [(0, dom_1.el)(".dhx_button__icon.dxi.dxi-chevron-left")]),
            actionContent,
            (0, dom_1.el)("button.dhx_calendar-navigation__button.dhx_calendar-action__next" +
                helper_1.linkButtonClasses +
                ".dhx_button--icon.dhx_button--circle", {
                "aria-label": "next",
                type: "button",
            }, [(0, dom_1.el)(".dhx_button__icon.dxi.dxi-chevron-right")]),
        ]);
    };
    Calendar.prototype._drawTimepicker = function () {
        var _a = this.config, css = _a.css, weekNumbers = _a.weekNumbers, width = _a.width;
        return (0, dom_1.el)(".dhx_widget.dhx-calendar", {
            class: css ? " " + css : "",
            style: {
                width: weekNumbers ? parseInt(width.toString()) + 48 + "px" : width,
            },
        }, [(0, dom_1.inject)(this._timepicker.getRootView())]);
    };
    Calendar.prototype._selectDate = function (_e, vn) {
        var date = vn.attrs._date;
        var oldDate = date_1.DateHelper.copy(this._getSelected());
        switch (this._currentViewMode) {
            case "calendar": {
                var mergedDate = this.config.timePicker
                    ? date_1.DateHelper.mergeHoursAndMinutes(date, this._getSelected() || this._currentDate)
                    : date;
                if (!this.events.fire(types_1.CalendarEvents.beforeChange, [mergedDate, oldDate, true])) {
                    return;
                }
                if (this.config.range && this._selected.length === 1 && this._selected[0] < mergedDate) {
                    this._selected.push(mergedDate);
                }
                else {
                    this._selected = [];
                    this._selected[0] = mergedDate;
                }
                vn.el.blur();
                this.showDate(this._getSelected());
                this.events.fire(types_1.CalendarEvents.change, [date, oldDate, true]);
                break;
            }
            case "month":
                if (this.config.mode !== "month") {
                    date_1.DateHelper.setMonth(this._currentDate, date);
                    this.showDate(null, "calendar");
                    this.events.fire(types_1.CalendarEvents.monthSelected, [date]);
                }
                else {
                    var newDate = date_1.DateHelper.fromYearAndMonth(this._currentDate.getFullYear() || this._getSelected().getFullYear(), date);
                    if (!this.events.fire(types_1.CalendarEvents.beforeChange, [newDate, oldDate, true])) {
                        return;
                    }
                    this._currentDate = newDate;
                    this._selected[0] = newDate;
                    this.events.fire(types_1.CalendarEvents.change, [this._getSelected(), oldDate, true]);
                    this.events.fire(types_1.CalendarEvents.monthSelected, [date]);
                    this.paint();
                }
                break;
            case "year":
                if (this.config.mode !== "year") {
                    date_1.DateHelper.setYear(this._currentDate, date);
                    this.showDate(null, "month");
                    this.events.fire(types_1.CalendarEvents.yearSelected, [date]);
                }
                else {
                    var newDate = date_1.DateHelper.fromYear(date);
                    if (!this.events.fire(types_1.CalendarEvents.beforeChange, [newDate, oldDate, true])) {
                        return;
                    }
                    this._currentDate = newDate;
                    this._selected[0] = newDate;
                    this.events.fire(types_1.CalendarEvents.change, [this._getSelected(), oldDate, true]);
                    this.events.fire(types_1.CalendarEvents.yearSelected, [date]);
                    this.paint();
                }
        }
    };
    Calendar.prototype._moveBrowseFocus = function (e, node, range) {
        if (node) {
            var nextNode = node.parent.body[node.idx + range];
            if (nextNode) {
                var $nextNode = nextNode.el;
                if ($nextNode) {
                    e.target.tabIndex = -1;
                    $nextNode.tabIndex = 0;
                    $nextNode.focus({ preventScroll: true });
                }
            }
        }
    };
    return Calendar;
}(view_1.View));
exports.Calendar = Calendar;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(92), exports);
__exportStar(__webpack_require__(41), exports);


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timepicker = void 0;
var core_1 = __webpack_require__(0);
var dom_1 = __webpack_require__(1);
var events_1 = __webpack_require__(4);
var view_1 = __webpack_require__(6);
var ts_layout_1 = __webpack_require__(24);
var ts_slider_1 = __webpack_require__(96);
var en_1 = __webpack_require__(99);
var helper_1 = __webpack_require__(100);
var types_1 = __webpack_require__(41);
var html_1 = __webpack_require__(2);
function validate(value, max) {
    if (isNaN(value)) {
        return 0;
    }
    return Math.min(max, Math.max(0, value));
}
var Timepicker = /** @class */ (function (_super) {
    __extends(Timepicker, _super);
    function Timepicker(container, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, container, (0, core_1.extend)({
            timeFormat: 24,
            controls: false,
            valueFormat: "string",
            actions: false, // TODO: remove suite_7.0
        }, config)) || this;
        _this.events = new events_1.EventSystem(_this);
        _this._time = {
            hour: 0,
            minute: 0,
            AM: true,
        };
        if (_this.config.timeFormat === 12) {
            _this._time.hour = 12;
        }
        _this.config.controls = _this.config.controls || _this.config.actions; // TODO: remove suite_7.0
        _this.config.value && _this._setValue(_this.config.value);
        _this._initUI(container);
        _this._initHandlers();
        _this._initEvents();
        return _this;
    }
    Timepicker.prototype.getValue = function (asObject) {
        if (this.config.timeFormat === 12)
            this._time.hour = this._time.hour % 12 || 12;
        return this._getValue(this._time, asObject);
    };
    Timepicker.prototype.setValue = function (value) {
        this._setValue(value);
        this._hoursSlider.setValue(this._time.hour);
        this._minutesSlider.setValue(this._time.minute);
        this._inputsView.paint();
    };
    Timepicker.prototype.clear = function () {
        if (this.config.timeFormat === 24) {
            this.setValue("00:00");
        }
        else {
            this.setValue("12:00AM");
        }
    };
    Timepicker.prototype.destructor = function () {
        this._minutesSlider && this._minutesSlider.destructor();
        this._hoursSlider && this._hoursSlider.destructor();
        this.events && this.events.clear();
        this.layout && this.layout.destructor();
        this.config = this.events = null;
        this._handlers = this._time = this._inputsView = this._minutesSlider = this._hoursSlider = null;
        this.unmount();
    };
    Timepicker.prototype.getRootView = function () {
        return this.layout.getRootView();
    };
    Timepicker.prototype._getValue = function (timeObj, asObj) {
        var hour = timeObj.hour, minute = timeObj.minute, AM = timeObj.AM;
        if (asObj) {
            var obj = { hour: hour, minute: minute };
            if (this.config.timeFormat === 12)
                obj.AM = AM;
            return obj;
        }
        return ((hour < 10 ? "0" + hour : hour) +
            ":" +
            (minute < 10 ? "0" + minute : minute) +
            (this.config.timeFormat === 12 ? (AM ? "AM" : "PM") : ""));
    };
    Timepicker.prototype._setValue = function (value) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var m = 0;
        var h = 0;
        var isPM;
        if (typeof value === "number") {
            value = new Date(value);
        }
        if (value instanceof Date) {
            m = value.getMinutes();
            h = value.getHours();
        }
        else if (Array.isArray(value)) {
            h = validate(value[0], 23);
            m = validate(value[1], 59);
            if (value[2] && value[2].toLowerCase() === "pm") {
                isPM = true;
            }
        }
        else if (typeof value === "string") {
            var matches = value.match(/\d+/g);
            h = validate(+matches[0], 23);
            m = validate(+matches[1], 59);
            if (value.toLowerCase().includes("pm")) {
                isPM = true;
            }
        }
        else if (typeof value === "object" &&
            value.hasOwnProperty("hour") &&
            value.hasOwnProperty("minute")) {
            h = value.hour;
            m = value.minute;
            isPM = !value.AM;
        }
        if (isPM && h < 12) {
            h += 12;
        }
        if (this.config.timeFormat === 12 && !(0, helper_1.isTimeCheck)(value) && h >= 12)
            isPM = true;
        return (this._time = {
            hour: h,
            minute: m,
            AM: !isPM,
        });
    };
    Timepicker.prototype._initUI = function (container) {
        var _this = this;
        var layoutConfig = {
            gravity: false,
            css: "dhx_widget dhx_timepicker " +
                (this.config.css ? this.config.css : "") +
                (this.config.controls ? " dhx_timepicker--with-controls" : ""),
            rows: [
                {
                    id: "timepicker",
                    css: "dhx_timepicker__inputs",
                },
                {
                    id: "hour-slider",
                    css: "dhx_timepicker__hour",
                },
                {
                    id: "minute-slider",
                    css: "dhx_timepicker__minute",
                },
            ],
        };
        if (this.config.controls) {
            layoutConfig.rows.unshift({
                id: "close-action",
                css: "dhx_timepicker__close",
            });
            layoutConfig.rows.push({
                id: "save-action",
                css: "dhx_timepicker__save",
            });
        }
        var layout = (this.layout = new ts_layout_1.Layout(container, layoutConfig));
        var timepicker = (0, dom_1.create)({
            render: function () { return _this._draw(); },
        });
        var inputsView = (this._inputsView = (0, view_1.toViewLike)(timepicker));
        var mSlider = (this._minutesSlider = new ts_slider_1.Slider(null, {
            min: 0,
            max: 59,
            step: 1,
            tooltip: false,
            labelPosition: "top",
            label: en_1.default.minutes,
            value: this.config.value ? this._time.minute : 0,
        }));
        var hSlider = (this._hoursSlider = new ts_slider_1.Slider(null, {
            min: 0,
            max: 23,
            step: 1,
            tooltip: false,
            labelPosition: "top",
            label: en_1.default.hours,
            value: this.config.value ? (this._time.hour === 12 && this._time.AM ? 0 : this._time.hour) : 0,
        }));
        layout.getCell("timepicker").attach(inputsView);
        layout.getCell("hour-slider").attach(hSlider);
        layout.getCell("minute-slider").attach(mSlider);
        if (this.config.controls) {
            var save = function () {
                return (0, dom_1.el)("button.dhx_timepicker__button-save.dhx_button.dhx_button--view_flat.dhx_button--color_primary.dhx_button--size_small.dhx_button--circle.dhx_button--width_full", {
                    onclick: _this._outerHandlers.save,
                    type: "button",
                }, en_1.default.save);
            };
            var close_1 = function () {
                return (0, dom_1.el)("button.dhx_timepicker__button-close.dhx_button.dhx_button--view_link.dhx_button--size_medium.dhx_button--view_link.dhx_button--color_secondary.dhx_button--icon.dhx_button--circle", {
                    _ref: "close",
                    onclick: _this._outerHandlers.close,
                    type: "button",
                    "aria-label": "close timepicker",
                }, [(0, dom_1.el)("span.dhx_button__icon.dxi.dxi-close")]);
            };
            layout.getCell("save-action").attach(save);
            layout.getCell("close-action").attach(close_1);
        }
    };
    Timepicker.prototype._initHandlers = function () {
        var _this = this;
        var setMinutes = function (element) {
            var min = validate(parseInt(element.value, 10), 59);
            element.value = min.toString();
            _this._minutesSlider.setValue(min);
        };
        var setHours = function (element) {
            var hour = validate(parseInt(element.value, 10), 23);
            element.value = hour.toString();
            _this._hoursSlider.setValue(hour);
        };
        this._handlers = {
            onchange: {
                ".dhx_timepicker-input--hour": function (e) { return setHours(e.target); },
                ".dhx_timepicker-input--minutes": function (e) { return setMinutes(e.target); },
            },
            oninput: {
                ".dhx_timepicker-input--hour": function (e) {
                    if (!(0, html_1.isSafari)() && !(0, html_1.isFirefox)())
                        return;
                    setHours(e.target);
                },
                ".dhx_timepicker-input--minutes": function (e) {
                    if (!(0, html_1.isSafari)() && !(0, html_1.isFirefox)())
                        return;
                    setMinutes(e.target);
                },
            },
        };
        this._outerHandlers = {
            close: function () {
                if (!_this.events.fire(types_1.TimepickerEvents.beforeClose, [_this.getValue(_this._isTimeObj())])) {
                    return;
                }
                _this.events.fire(types_1.TimepickerEvents.afterClose, [_this.getValue(_this._isTimeObj())]);
                _this.events.fire(types_1.TimepickerEvents.close, []); // TODO: remove suite_7.0
            },
            save: function () {
                if (!_this.events.fire(types_1.TimepickerEvents.beforeApply, [_this.getValue(_this._isTimeObj())]))
                    return;
                _this.events.fire(types_1.TimepickerEvents.afterApply, [_this.getValue(_this._isTimeObj())]);
                _this.events.fire(types_1.TimepickerEvents.apply, [_this.getValue()]); // TODO: remove suite_7.0
                _this.events.fire(types_1.TimepickerEvents.save, [_this._time]); // TODO: remove suite_7.0
            },
        };
    };
    Timepicker.prototype._initEvents = function () {
        var _this = this;
        this._hoursSlider.events.on(ts_slider_1.SliderEvents.beforeChange, function (value) {
            if (value < _this._hoursSlider.config.min || value > _this._hoursSlider.config.max) {
                return;
            }
            var timeObj = __assign({}, _this._time);
            if (_this.config.timeFormat === 12) {
                timeObj.AM = value < 12;
                timeObj.hour = value % 12 || 12;
            }
            else {
                timeObj.hour = value;
            }
            var asObject = _this._isTimeObj();
            return _this.events.fire(types_1.TimepickerEvents.beforeChange, [_this._getValue(timeObj, asObject)]);
        });
        this._hoursSlider.events.on(ts_slider_1.SliderEvents.change, function (value) {
            if (value < _this._hoursSlider.config.min || value > _this._hoursSlider.config.max) {
                return;
            }
            if (_this.config.timeFormat === 12) {
                _this._time.AM = value < 12;
                _this._time.hour = value % 12 || 12;
            }
            else {
                _this._time.hour = value;
            }
            var asObject = _this._isTimeObj();
            _this.events.fire(types_1.TimepickerEvents.change, [_this.getValue(asObject)]);
            _this._inputsView.paint();
        });
        this._minutesSlider.events.on(ts_slider_1.SliderEvents.beforeChange, function (value) {
            if (value < _this._minutesSlider.config.min || value > _this._minutesSlider.config.max) {
                return;
            }
            var timeObj = __assign(__assign({}, _this._time), { minute: value });
            var asObject = _this._isTimeObj();
            return _this.events.fire(types_1.TimepickerEvents.beforeChange, [_this._getValue(timeObj, asObject)]);
        });
        this._minutesSlider.events.on(ts_slider_1.SliderEvents.change, function (value) {
            if (value < _this._minutesSlider.config.min || value > _this._minutesSlider.config.max) {
                return;
            }
            _this._time.minute = value;
            var asObject = _this._isTimeObj();
            _this.events.fire(types_1.TimepickerEvents.change, [_this.getValue(asObject)]);
            _this._inputsView.paint();
        });
    };
    Timepicker.prototype._draw = function () {
        this._minutesSlider.config.label = en_1.default.minutes;
        this._hoursSlider.config.label = en_1.default.hours;
        return (0, dom_1.el)(".dhx_timepicker-inputs", __assign({}, this._handlers), [
            (0, dom_1.el)("input.dhx_timepicker-input.dhx_timepicker-input--hour", {
                _key: "hour",
                _ref: "hour",
                value: this.getValue(true).hour.toString().length > 1
                    ? this.getValue(true).hour
                    : "0" + this.getValue(true).hour,
                "aria-label": "hours",
            }),
            (0, dom_1.el)("span.dhx_timepicker-delimer", ":"),
            (0, dom_1.el)("input.dhx_timepicker-input.dhx_timepicker-input--minutes", {
                _key: "minute",
                value: this.getValue(true).minute.toString().length > 1
                    ? this.getValue(true).minute
                    : "0" + this.getValue(true).minute,
                "aria-label": "minutes",
            }),
            this.config.timeFormat === 12
                ? (0, dom_1.el)(".dhx_timepicker-ampm", this._time.AM ? "AM" : "PM")
                : null,
        ]);
    };
    Timepicker.prototype._isTimeObj = function () {
        var _a;
        return ((_a = this.config.valueFormat) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === "timeobject";
    };
    return Timepicker;
}(view_1.View));
exports.Timepicker = Timepicker;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getMarginSize = exports.getBlockRange = void 0;
function getBlockRange(block1, block2, isXLayout) {
    if (isXLayout === void 0) { isXLayout = true; }
    if (isXLayout) {
        return {
            min: block1.left + window.pageXOffset,
            max: block2.right + window.pageXOffset,
        };
    }
    return {
        min: block1.top + window.pageYOffset,
        max: block2.bottom + window.pageYOffset,
    };
}
exports.getBlockRange = getBlockRange;
function getMarginSize(config) {
    if (!config) {
        return 0;
    }
    if (config.type === "space" || config.type === "wide") {
        return 12;
    }
    return 0;
}
exports.getMarginSize = getMarginSize;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProLayout = void 0;
var Layout_1 = __webpack_require__(25);
var ProCell_1 = __webpack_require__(95);
var ProLayout = /** @class */ (function (_super) {
    __extends(ProLayout, _super);
    function ProLayout(parent, config) {
        return _super.call(this, parent, config) || this;
    }
    ProLayout.prototype._createCell = function (cell) {
        var view;
        if (cell.rows || cell.cols || cell.views) {
            cell.parent = this._root;
            view = new ProLayout(this, cell);
        }
        else {
            view = new ProCell_1.ProCell(this, cell);
        }
        // FIxME
        this._root._all[view.id] = view;
        if (cell.init) {
            cell.init(view, cell);
        }
        return view;
    };
    return ProLayout;
}(Layout_1.Layout));
exports.ProLayout = ProLayout;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProCell = void 0;
var core_1 = __webpack_require__(0);
var dom_1 = __webpack_require__(1);
var ScrollView_1 = __webpack_require__(38);
var Cell_1 = __webpack_require__(37);
var ProCell = /** @class */ (function (_super) {
    __extends(ProCell, _super);
    function ProCell(parent, config) {
        var _this = _super.call(this, parent, config) || this;
        _this.scrollView = new ScrollView_1.ScrollView(function () {
            return _this._getFirstRootView();
        });
        return _this;
    }
    ProCell.prototype._getFirstRootView = function (self) {
        if (self === void 0) { self = this; }
        return self.getParent() && self.getParent().getRootView()
            ? self.getParent().getRootView()
            : this._getFirstRootView(self.getParent());
    };
    ProCell.prototype.toVDOM = function (nodes) {
        var _a;
        var _b, _c;
        this._saveTheme();
        if (this.config === null) {
            this.config = {};
        }
        if (this.config.hidden) {
            return;
        }
        var isFieldset = this.config.$fieldset;
        var style = this._calculateStyle();
        var stylePadding = (0, core_1.isDefined)(this.config.padding)
            ? !isNaN(Number(this.config.padding))
                ? { padding: "".concat(this.config.padding, "px") }
                : { padding: this.config.padding }
            : "";
        var fullStyle = this.config.full || this.config.html ? style : __assign(__assign({}, style), stylePadding);
        var progressBar = this._checkProgress() ? this._getProgressBar() : null;
        var kids;
        if (!this.config.html) {
            if (this._ui) {
                var view = this._ui.getRootView();
                if (view.render) {
                    view = (0, dom_1.inject)(view);
                }
                // kids = [view];
                kids = view ? [this.scrollView.render(view)] : view || null;
            }
            else {
                // kids = nodes || null;
                kids = nodes ? this.scrollView.render([nodes]) : nodes || null;
            }
        }
        var resizer = this.config.resizable && !this._isLastCell() && this._getNextCell() && !this.config.collapsed
            ? (0, dom_1.el)(".dhx_layout-resizer." +
                (this._isXDirection() ? "dhx_layout-resizer--x" : "dhx_layout-resizer--y"), __assign(__assign({}, this._resizerHandlers), { _ref: "resizer_" + this._uid }), [
                (0, dom_1.el)("span.dhx_layout-resizer__icon", {
                    class: "dxi " +
                        (this._isXDirection() ? "dxi-dots-vertical" : "dxi-dots-horizontal"),
                }),
            ])
            : null;
        var handlers = {};
        if (this.config.on) {
            for (var key in this.config.on) {
                handlers["on" + key] = this.config.on[key];
            }
        }
        var typeClass = "";
        var isParent = this.config.cols || this.config.rows;
        if (this.config.type && isParent) {
            switch (this.config.type) {
                case "line":
                    typeClass = " dhx_layout-line";
                    break;
                case "wide":
                    typeClass = " dhx_layout-wide";
                    break;
                case "space":
                    typeClass = " dhx_layout-space";
                    break;
                default:
                    break;
            }
        }
        var htmlContent = (0, dom_1.el)(".dhx_layout-cell-content", {
            _key: "".concat(this._uid, "_html"),
            style: stylePadding,
        }, [
            (0, dom_1.el)(".dhx_layout-cell-inner_html", {
                ".innerHTML": this.config.html,
            }),
        ]);
        var cellContent = isFieldset
            ? (0, dom_1.el)("fieldset.dhx_form-fieldset", {
                class: (this.config.$disabled && " dhx_form-fieldset--disabled") || "",
                style: stylePadding,
                disabled: this.config.$disabled,
            }, [
                (0, dom_1.el)("legend.dhx_form-fieldset-legend", {
                    class: "dhx_form-fieldset-legend--".concat(this.config.labelAlignment || "left"),
                }, this.config.label),
                (0, dom_1.el)(".dhx_layout-cell-content", {
                    class: this._getCss(false),
                }, [].concat(kids)),
            ])
            : this.config.full
                ? [
                    (0, dom_1.el)("div", {
                        tabindex: this.config.collapsable ? "0" : "-1",
                        class: "dhx_layout-cell-header" +
                            (this._isXDirection()
                                ? " dhx_layout-cell-header--col"
                                : " dhx_layout-cell-header--row") +
                            (this.config.collapsable ? " dhx_layout-cell-header--collapseble" : "") +
                            (this.config.collapsed ? " dhx_layout-cell-header--collapsed" : "") +
                            (((this.getParent() || {}).config || {}).isAccordion
                                ? " dhx_layout-cell-header--accordion"
                                : ""),
                        style: {
                            height: this.config.headerHeight,
                        },
                        onclick: this._handlers.toggle,
                        onkeydown: this._handlers.enterCollapse,
                    }, [
                        this.config.headerIcon &&
                            (0, dom_1.el)("span.dhx_layout-cell-header__icon", {
                                class: this.config.headerIcon,
                            }),
                        this.config.headerImage &&
                            (0, dom_1.el)(".dhx_layout-cell-header__image-wrapper", [
                                (0, dom_1.el)("img", {
                                    src: this.config.headerImage,
                                    class: "dhx_layout-cell-header__image",
                                }),
                            ]),
                        this.config.header && (0, dom_1.el)("h3.dhx_layout-cell-header__title", this.config.header),
                        this.config.collapsable
                            ? (0, dom_1.el)("div.dhx_layout-cell-header__collapse-icon", {
                                class: this._getCollapseIcon(),
                            })
                            : (0, dom_1.el)("div.dhx_layout-cell-header__collapse-icon", {
                                class: "dxi dxi-empty",
                            }),
                    ]),
                    !this.config.collapsed
                        ? (0, dom_1.el)("div", {
                            style: __assign(__assign({}, stylePadding), { height: "calc(100% - ".concat(this.config.headerHeight || 37, "px)") }),
                            class: this._getCss(true) +
                                " dhx_layout-cell-content" +
                                (this.config.type ? typeClass : ""),
                        }, this.config.html
                            ? [
                                (0, dom_1.el)("div", {
                                    ".innerHTML": this.config.html,
                                    class: "dhx_layout-cell dhx_layout-cell-inner_html",
                                }),
                            ]
                            : kids)
                        : null,
                ]
                : this.config.html &&
                    !(this.config.rows &&
                        this.config.cols &&
                        this.config.views)
                    ? [
                        !this.config.collapsed
                            ? this.scrollView && this.scrollView.config.enable
                                ? this.scrollView.render([htmlContent], this._uid)
                                : htmlContent
                            : null,
                    ]
                    : kids;
        var cell = (0, dom_1.el)("div", __assign(__assign((_a = { _key: this._uid, _ref: this._uid }, _a["aria-label"] = this.config.id ? "tab-content-" + this.config.id : null, _a["data-cell-id"] = (_b = this.config.id) !== null && _b !== void 0 ? _b : null, _a["data-dhx-theme"] = (_c = this._theme) !== null && _c !== void 0 ? _c : null, _a), handlers), { class: this._getCss(false) +
                (this.config.css ? " " + this.config.css : "") +
                (this.config.collapsed ? " dhx_layout-cell--collapsed" : "") +
                (this.config.resizable ? " dhx_layout-cell--resizable" : "") +
                (this.config.type && !this.config.full ? typeClass : ""), style: isFieldset ? style : fullStyle }), cellContent || progressBar ? [].concat(cellContent, progressBar) : null);
        return resizer ? [].concat(cell, resizer) : cell;
    };
    return ProCell;
}(Cell_1.Cell));
exports.ProCell = ProCell;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(97), exports);
__exportStar(__webpack_require__(40), exports);


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slider = void 0;
var core_1 = __webpack_require__(0);
var dom_1 = __webpack_require__(1);
var events_1 = __webpack_require__(4);
var KeyManager_1 = __webpack_require__(21);
var view_1 = __webpack_require__(6);
var ts_popup_1 = __webpack_require__(27);
var types_1 = __webpack_require__(40);
var html_1 = __webpack_require__(2);
function normalizeValue(value, min, max) {
    if (value < min) {
        return min;
    }
    if (value > max) {
        return max;
    }
    return value;
}
function parseValue(value, min, max) {
    var values;
    if (value === undefined) {
        values = [];
    }
    else if (Array.isArray(value)) {
        values = value;
    }
    else if (typeof value === "string") {
        values = value.split(",").map(function (v) { return parseInt(v, 10); });
    }
    else {
        values = [value];
    }
    values[0] = values[0] === undefined ? min : normalizeValue(values[0], min, max);
    values[1] = values[1] === undefined ? max : normalizeValue(values[1], min, max);
    return values;
}
var Slider = /** @class */ (function (_super) {
    __extends(Slider, _super);
    function Slider(container, config) {
        var _this = _super.call(this, container, (0, core_1.extend)({
            mode: "horizontal",
            min: 0,
            max: 100,
            step: 1,
            tooltip: true,
        }, config)) || this;
        _this._disabled = false;
        _this.config.helpMessage = _this.config.helpMessage || _this.config.help; // TODO: remove suite_7.0
        if (_this.config.thumbLabel !== undefined) {
            _this.config.tooltip = _this.config.thumbLabel; // TODO: remove suite_7.0
        }
        if (_this.config.labelInline) {
            _this.config.labelPosition = "left"; // TODO: remove suite_7.0
        }
        _this.events = new events_1.EventSystem(_this);
        _this._axis = _this.config.mode === "horizontal" ? "clientX" : "clientY";
        _this._initStartPosition();
        _this._keyManager = new KeyManager_1.KeyManager(function () {
            var _a, _b;
            var activeEl = document.activeElement;
            var element = (_b = (_a = _this.getRootView().refs) === null || _a === void 0 ? void 0 : _a[_this._isExtraActive ? "extraRunner" : "runner"]) === null || _b === void 0 ? void 0 : _b.el;
            return activeEl === element;
        });
        _this._initHotkeys();
        var vNode = (0, dom_1.create)({
            render: function () { return _this._draw(); },
            hooks: {
                didMount: function () { return _this._calcSliderPosition(); },
                didRedraw: function () { return _this._calcSliderPosition(); },
            },
        });
        _this._initHandlers();
        _this.mount(container, vNode);
        return _this;
    }
    Slider.prototype.disable = function () {
        this._disabled = true;
        this.paint();
    };
    Slider.prototype.enable = function () {
        this._disabled = false;
        this.paint();
    };
    Slider.prototype.isDisabled = function () {
        return this._disabled;
    };
    Slider.prototype.focus = function (extra) {
        this.getRootView().refs[extra ? "extraRunner" : "runner"].el.focus();
    };
    Slider.prototype.blur = function () {
        this.getRootView().refs[this._isExtraActive ? "extraRunner" : "runner"].el.blur();
    };
    Slider.prototype.getValue = function () {
        var res;
        if (this.config.range) {
            var a = this._getValue(this._currentPosition);
            var b = this._getValue(this._extraCurrentPosition);
            res = a < b ? [a, b] : [b, a];
        }
        else {
            res = [this._getValue(this._currentPosition)];
        }
        return res;
    };
    Slider.prototype.setValue = function (value) {
        var old = this._getValue(this._currentPosition);
        if (Array.isArray(value) && value.length > 1) {
            var oldExtra = this._getValue(this._extraCurrentPosition);
            if (this.events.fire(types_1.SliderEvents.beforeChange, [value[0], old, false])) {
                this._setValue(value[0], false);
                this.events.fire(types_1.SliderEvents.change, [value[0], old, false]);
            }
            if (this.events.fire(types_1.SliderEvents.beforeChange, [value[1], oldExtra, true])) {
                this._setValue(value[1], true);
                this.events.fire(types_1.SliderEvents.change, [value[1], oldExtra, true]);
            }
        }
        else {
            value = parseFloat(value);
            if (!isNaN(value)) {
                if (this.events.fire(types_1.SliderEvents.beforeChange, [value, old, false])) {
                    this._setValue(value);
                    this.events.fire(types_1.SliderEvents.change, [value, old, false]);
                }
            }
            else {
                throw new Error("Wrong value type, for more info check documentation https://docs.dhtmlx.com/suite/slider__api__slider_setvalue_method.html");
            }
        }
        this.paint();
    };
    Slider.prototype.destructor = function () {
        this._keyManager && this._keyManager.destructor();
        document.body.contains(this._tooltip) && document.body.removeChild(this._tooltip);
        this._tooltip = null;
        this.unmount();
    };
    Slider.prototype._calcSliderPosition = function () {
        var root = this.getRootView();
        if (!root) {
            return;
        }
        var tracker = root.refs.track.el;
        var rect = tracker.getBoundingClientRect();
        this._offsets = {
            left: rect.left + window.pageXOffset,
            top: rect.top + window.pageYOffset,
        };
        this._length = this.config.mode === "horizontal" ? rect.width : rect.height;
    };
    Slider.prototype._initHotkeys = function () {
        var _this = this;
        var handlers = {
            arrowLeft: function (e) {
                e.preventDefault();
                _this._move(-_this.config.step, e.target.classList.contains("dhx_slider__thumb--extra"));
            },
            arrowRight: function (e) {
                e.preventDefault();
                _this._move(_this.config.step, e.target.classList.contains("dhx_slider__thumb--extra"));
            },
            arrowUp: function (e) {
                e.preventDefault();
                _this._move(_this.config.step, e.target.classList.contains("dhx_slider__thumb--extra"));
            },
            arrowDown: function (e) {
                e.preventDefault();
                _this._move(-_this.config.step, e.target.classList.contains("dhx_slider__thumb--extra"));
            },
        };
        for (var key in handlers) {
            this._keyManager.addHotKey(key, handlers[key]);
        }
    };
    Slider.prototype._move = function (value, forExtra) {
        if (forExtra === void 0) { forExtra = false; }
        if (this.config.inverse) {
            value = -value;
        }
        var _a = this.config, max = _a.max, min = _a.min;
        var oldValue = forExtra
            ? this._getValue(this._extraCurrentPosition)
            : this._getValue(this._currentPosition);
        var newValue = oldValue + value;
        if (newValue > max || newValue < min) {
            newValue = oldValue;
        }
        if (!this.events.fire(types_1.SliderEvents.beforeChange, [newValue, oldValue, forExtra]))
            return;
        this._setValue(oldValue + value, forExtra);
        this.events.fire(types_1.SliderEvents.change, [newValue, oldValue, forExtra]);
        this.paint();
    };
    Slider.prototype._initStartPosition = function () {
        var _a = this.config, max = _a.max, min = _a.min, range = _a.range;
        var _b = parseValue(this.config.value, this.config.min, this.config.max), value = _b[0], extraValue = _b[1];
        this._currentPosition = ((value - min) / (max - min)) * 100;
        if (range) {
            this._extraCurrentPosition = ((max - extraValue) / (max - min)) * 100;
        }
        this._currentPosition = ((value - min) / (max - min)) * 100;
        if (range) {
            this._extraCurrentPosition = ((extraValue - min) / (max - min)) * 100;
        }
        if (this._isInverse()) {
            this._currentPosition = 100 - this._currentPosition;
            if (range) {
                this._extraCurrentPosition = 100 - this._extraCurrentPosition;
            }
        }
    };
    Slider.prototype._getValue = function (value) {
        if (this._isInverse()) {
            value = 100 - value;
        }
        var _a = this.config, min = _a.min, max = _a.max, step = _a.step;
        if (value === 100) {
            return max;
        }
        if (value === 0) {
            return min;
        }
        var val = (value * (max - min)) / 100;
        var remain = val % step;
        var rounder = remain >= step / 2 ? step : 0;
        var result = Number(min) + Number(val) - remain + rounder;
        return +result.toFixed(5);
    };
    Slider.prototype._setValue = function (val, forExtra) {
        if (forExtra === void 0) { forExtra = false; }
        var _a = this.config, max = _a.max, min = _a.min;
        if (val > max || val < min) {
            return false;
        }
        var rawValue = ((val - min) / (max - min)) * 100;
        var newValue = this._isInverse() ? 100 - rawValue : rawValue;
        if (forExtra) {
            this._extraCurrentPosition = newValue;
        }
        else {
            this._currentPosition = newValue;
        }
    };
    Slider.prototype._initHandlers = function () {
        var _this = this;
        var sliderMove = function (e) {
            e.cancelable && e.preventDefault();
            var currentPosition = e.targetTouches ? e.targetTouches[0][_this._axis] : e[_this._axis];
            var x = ((currentPosition - _this._getBegining()) / _this._length) * 100;
            if (_this._findNewDirection) {
                if (Math.abs(_this._currentPosition - x) < 1) {
                    return;
                }
                if (x > _this._currentPosition) {
                    _this._possibleRange = [_this._currentPosition, 100];
                }
                else {
                    _this._possibleRange = [0, _this._currentPosition];
                }
                _this._findNewDirection = null;
            }
            if (_this._inSide(x)) {
                _this._updatePosition(x, _this._isExtraActive);
            }
            _this.paint();
        };
        var sliderEnd = function (e) {
            _this.events.fire(types_1.SliderEvents.mouseup, [e]);
            setTimeout(function () {
                _this._isMouseMoving = false;
                _this.paint();
            }, 4);
            if (!e.targetTouches) {
                document.removeEventListener("mouseup", sliderEnd);
                document.removeEventListener("mousemove", sliderMove);
            }
            else {
                document.removeEventListener("touchend", sliderEnd);
                document.removeEventListener("touchmove", sliderMove);
            }
        };
        var sliderStart = function (e) {
            if (_this._disabled || e.which === 3) {
                return;
            }
            _this.events.fire(types_1.SliderEvents.mousedown, [e]);
            _this._isMouseMoving = true;
            var active;
            if (e.target.classList.contains("dhx_slider__thumb--extra")) {
                _this._isExtraActive = true;
                active = _this._extraCurrentPosition;
            }
            else {
                _this._isExtraActive = false;
                active = _this._currentPosition;
            }
            _this._findNewDirection = null;
            // define possible range
            if (_this.config.range) {
                var _a = _this._currentPosition > _this._extraCurrentPosition
                    ? [_this._currentPosition, _this._extraCurrentPosition]
                    : [_this._extraCurrentPosition, _this._currentPosition], more = _a[0], less = _a[1];
                if (_this._currentPosition === _this._extraCurrentPosition) {
                    _this._findNewDirection = active;
                    _this._possibleRange = [0, 100];
                }
                else if (active < more) {
                    _this._possibleRange = [0, more];
                }
                else {
                    _this._possibleRange = [less, 100];
                }
            }
            else {
                _this._possibleRange = [0, 100];
            }
        };
        if (this.config.helpMessage) {
            this._helper = new ts_popup_1.Popup({
                css: "dhx_tooltip dhx_tooltip--forced dhx_tooltip--light",
            });
            this._helper.attachHTML(this.config.helpMessage);
        }
        this._handlers = {
            showHelper: function (e) {
                e.preventDefault();
                e.stopPropagation();
                _this._helper.show(e.target, {
                    theme: e.target,
                });
            },
            onmousedown: function (e) {
                sliderStart(e);
                document.addEventListener("mousemove", sliderMove);
                document.addEventListener("mouseup", sliderEnd);
            },
            ontouchstart: function (e) {
                _this._setTooltip(e);
                _this._mouseIn = false;
                sliderStart(e);
                document.addEventListener("touchmove", sliderMove, { passive: false });
                document.addEventListener("touchend", sliderEnd);
                _this.paint();
            },
            ontouchend: function (e) {
                _this._setTooltip(e);
                _this._mouseIn = false;
                _this.paint();
            },
            onlabelClick: function () {
                var refs = _this.getRootView().refs;
                refs.runner.el.focus();
            },
            onclick: function (e) {
                if (_this._disabled || _this._isMouseMoving || e.which === 3) {
                    return;
                }
                var x = ((e[_this._axis] - _this._getBegining()) / _this._length) * 100;
                var refs = _this.getRootView().refs;
                if (_this.config.range) {
                    var dist = Math.abs(_this._currentPosition - x);
                    var extraDist = Math.abs(_this._extraCurrentPosition - x);
                    if (dist < extraDist) {
                        _this._updatePosition(x, false);
                        refs.runner.el.focus();
                    }
                    else {
                        _this._updatePosition(x, true);
                        refs.extraRunner.el.focus();
                    }
                }
                else {
                    _this._updatePosition(x, false);
                    refs.runner.el.focus();
                }
                _this.paint();
            },
            onmouseover: function (e) {
                _this._setTooltip(e);
                _this._mouseIn = true;
                _this.paint();
            },
            onmouseout: function (e) {
                _this._setTooltip(e);
                _this._mouseIn = false;
                _this.paint();
            },
            onfocus: function (e) {
                _this._setTooltip(e);
                _this._focusIn = true;
                _this.events.fire(types_1.SliderEvents.focus, []);
                _this.paint();
            },
            onblur: function (e) {
                _this._setTooltip(e);
                _this._focusIn = false;
                _this.events.fire(types_1.SliderEvents.blur, []);
                _this.paint();
            },
            onkeydown: function (e) {
                _this.events.fire(types_1.SliderEvents.keydown, [e]);
            },
        };
    };
    Slider.prototype._getBegining = function () {
        return this.config.mode === "horizontal"
            ? this._offsets.left - window.pageXOffset
            : this._offsets.top - window.pageYOffset;
    };
    Slider.prototype._inSide = function (x) {
        var range = this._possibleRange;
        if (x < range[0]) {
            this._updatePosition(range[0], this._isExtraActive);
            return false;
        }
        if (x > range[1]) {
            this._updatePosition(range[1], this._isExtraActive);
            return false;
        }
        return true;
    };
    Slider.prototype._updatePosition = function (x, extra) {
        if (extra === void 0) { extra = false; }
        if (x > 100) {
            x = 100;
        }
        if (x < 0) {
            x = 0;
        }
        var _a = this.config, max = _a.max, min = _a.min;
        var position = extra ? this._extraCurrentPosition : this._currentPosition;
        var oldValue = this._getValue(position);
        var newValue = this._getValue(x);
        if (oldValue === newValue ||
            !this.events.fire(types_1.SliderEvents.beforeChange, [newValue, oldValue, extra])) {
            return;
        }
        var rawValue = ((newValue - min) / (max - min)) * 100;
        var value = this._isInverse() ? 100 - rawValue : rawValue;
        if (extra) {
            this._extraCurrentPosition = value;
        }
        else {
            this._currentPosition = value;
        }
        this.events.fire(types_1.SliderEvents.change, [newValue, oldValue, extra]);
    };
    Slider.prototype._getRunnerStyle = function (forExtra) {
        var _a;
        if (forExtra === void 0) { forExtra = false; }
        var direction = this.config.mode === "horizontal" ? "left" : "top";
        var pos = forExtra ? this._extraCurrentPosition : this._currentPosition;
        return _a = {},
            _a[direction] = pos + "%",
            _a;
    };
    Slider.prototype._isInverse = function () {
        return ((this.config.inverse && this.config.mode === "horizontal") ||
            (!this.config.inverse && this.config.mode === "vertical"));
    };
    Slider.prototype._getRunnerCss = function (forExtra) {
        if (forExtra === void 0) { forExtra = false; }
        return ("dhx_slider__thumb" +
            (forExtra ? " dhx_slider__thumb--extra" : "") +
            (this._isMouseMoving && ((forExtra && this._isExtraActive) || (!forExtra && !this._isExtraActive))
                ? " dhx_slider__thumb--active"
                : "") +
            (this._disabled ? " dhx_slider__thumb--disabled" : "") +
            (this._isNullable(forExtra ? this._extraCurrentPosition : this._currentPosition) &&
                !this.config.range
                ? " dhx_slider__thumb--nullable"
                : ""));
    };
    Slider.prototype._draw = function () {
        var _a = this.config, labelPosition = _a.labelPosition, mode = _a.mode, hiddenLabel = _a.hiddenLabel, tick = _a.tick, majorTick = _a.majorTick, css = _a.css, helpMessage = _a.helpMessage;
        var labelStyle = (0, html_1.getLabelStyle)(__assign(__assign({}, this.config), { required: false }));
        if (this._tooltip && (!this._mouseIn || !this._focusIn || !this._isMouseMoving)) {
            document.body.contains(this._tooltip) && document.body.removeChild(this._tooltip);
        }
        return (0, dom_1.el)("div", {
            class: "dhx_slider" +
                " dhx_slider--mode_" +
                mode +
                (labelPosition === "left" ? " dhx_slider--label-inline" : "") +
                (hiddenLabel ? " dhx_slider--label_sr" : "") +
                (tick ? " dhx_slider--ticks" : "") +
                (majorTick ? " dhx_slider--major-ticks" : "") +
                (css ? " " + css : "") +
                (this._disabled ? " dhx_slider--disabled" : ""),
            style: {
                paddingBottom: this.config.tick ? "16px" : null,
            },
        }, [
            labelStyle
                ? (0, dom_1.el)("label.dhx_label.dhx_slider__label", {
                    style: labelStyle.style,
                    class: helpMessage ? "dhx_label--with-help" : "",
                    onclick: this._handlers.onlabelClick,
                }, helpMessage
                    ? [
                        labelStyle.label && (0, dom_1.el)("span.dhx_label__holder", labelStyle.label),
                        (0, dom_1.el)("span.dhx_label-help.dxi.dxi-help-circle-outline", {
                            tabindex: "0",
                            role: "button",
                            onclick: this._handlers.showHelper,
                        }),
                    ]
                    : labelStyle.label)
                : null,
            this._drawSlider(),
        ]);
    };
    Slider.prototype._drawSlider = function () {
        return (0, dom_1.el)(".dhx_widget.dhx_slider__track-holder", {
            "data-dhx-widget-id": this._uid,
        }, [
            (0, dom_1.el)(".dhx_slider__track", {
                _ref: "track",
                onmouseover: this._handlers.onmouseover,
                onmouseout: this._handlers.onmouseout,
                onclick: this._handlers.onclick,
            }, [
                this._getDetector(),
                (0, dom_1.el)("div", {
                    _ref: "runner",
                    class: this._getRunnerCss(),
                    ontouchstart: this._handlers.ontouchstart,
                    ontouchend: this._handlers.ontouchend,
                    onmousedown: this._handlers.onmousedown,
                    onfocus: this._handlers.onfocus,
                    onblur: this._handlers.onblur,
                    onkeydown: this._handlers.onkeydown,
                    style: this._getRunnerStyle(),
                    tabindex: 0,
                }),
                this.config.tooltip && (this._mouseIn || this._focusIn || this._isMouseMoving)
                    ? this._drawTooltip()
                    : null,
                this.config.tooltip &&
                    this.config.range &&
                    (this._mouseIn || this._focusIn || this._isMouseMoving)
                    ? this._drawTooltip(true)
                    : null,
                this.config.range
                    ? (0, dom_1.el)("div", {
                        _ref: "extraRunner",
                        class: this._getRunnerCss(true),
                        ontouchstart: this._handlers.ontouchstart,
                        ontouchend: this._handlers.ontouchend,
                        onmousedown: this._handlers.onmousedown,
                        onfocus: this._handlers.onfocus,
                        onblur: this._handlers.onblur,
                        onkeydown: this._handlers.onkeydown,
                        style: this._getRunnerStyle(true),
                        tabindex: 0,
                    })
                    : null,
            ]),
            this.config.tick ? this._drawTicks() : null,
        ]);
    };
    Slider.prototype._getDetector = function () {
        var _a, _b, _c;
        if (this._disabled) {
            return (0, dom_1.el)(".dhx_slider__range");
        }
        var direction = this.config.mode === "horizontal" ? "left" : "top";
        var size = this.config.mode === "horizontal" ? "width" : "height";
        if (this.config.range) {
            var _d = this._currentPosition > this._extraCurrentPosition
                ? [this._currentPosition, this._extraCurrentPosition]
                : [this._extraCurrentPosition, this._currentPosition], more = _d[0], less = _d[1];
            return (0, dom_1.el)(".dhx_slider__range", {
                style: (_a = {},
                    _a[direction] = less + "%",
                    _a[size] = more - less + "%",
                    _a),
            });
        }
        if (this._isInverse()) {
            return (0, dom_1.el)(".dhx_slider__range", {
                style: (_b = {},
                    _b[direction] = this._currentPosition + "%",
                    _b[size] = 100 - this._currentPosition + "%",
                    _b),
            });
        }
        return (0, dom_1.el)(".dhx_slider__range", {
            style: (_c = {},
                _c[direction] = 0,
                _c[size] = this._currentPosition + "%",
                _c),
        });
    };
    Slider.prototype._drawTooltip = function (forExtra) {
        if (forExtra === void 0) { forExtra = false; }
        if (this._activeTooltip === "none" || !this.getRootView())
            return;
        var pos = this._activeTooltip === "extraTooltip" ? this._extraCurrentPosition : this._currentPosition;
        var direction = this.config.mode === "horizontal" ? "left" : "top";
        var classNameModifiers = "";
        if ((forExtra && this._isExtraActive) || (!forExtra && !this._isExtraActive)) {
            classNameModifiers += " dhx_slider__thumb-label--active";
        }
        if (!this._tooltip) {
            this._tooltip = document.createElement("div");
        }
        var coords = this._activeTooltip === "tooltip"
            ? this.getRootView().refs.runner.el.getBoundingClientRect()
            : this.getRootView().refs.extraRunner.el.getBoundingClientRect();
        this._tooltip.className = "dhx_slider__thumb-label" + classNameModifiers;
        this._tooltip.style.left = coords.x + (direction === "left" ? 6 : -30) + window.pageXOffset + "px";
        this._tooltip.style.top = coords.y + (direction === "left" ? -30 : 6) + window.pageYOffset + "px";
        this._tooltip.innerText = this._getValue(pos).toString();
        document.body.appendChild(this._tooltip);
    };
    Slider.prototype._getTicks = function () {
        var _a = this.config, max = _a.max, min = _a.min, step = _a.step, tick = _a.tick, majorTick = _a.majorTick;
        var len = max - min;
        var tickLength = (step * tick) / len;
        var positions = [];
        var length = 0;
        var index = 0;
        while (length < 1) {
            var tickValue = +(Number(min) + length * len).toFixed(5);
            var isMultiple = index % majorTick === 0;
            positions.push({
                position: (this._isInverse() ? (1 - length) * 100 : length * 100) + "%",
                isMultiple: isMultiple,
                label: isMultiple && typeof this.config.tickTemplate === "function"
                    ? this.config.tickTemplate(tickValue)
                    : null,
            });
            length += tickLength;
            index++;
        }
        positions.push({
            position: (this._isInverse() ? 0 : 100) + "%",
            isMultiple: true,
            label: typeof this.config.tickTemplate === "function" ? this.config.tickTemplate(max) : null,
        });
        return positions;
    };
    Slider.prototype._drawTicks = function () {
        var direction = this.config.mode === "horizontal" ? "left" : "top";
        return (0, dom_1.el)(".dhx_slider__ticks-holder", this._getTicks().map(function (tick) {
            var _a;
            return (0, dom_1.el)("div", {
                class: "dhx_slider__tick" + (tick.isMultiple ? " dhx_slider__tick--major" : ""),
                style: (_a = {},
                    _a[direction] = tick.position,
                    _a),
            }, tick.label !== undefined ? [(0, dom_1.el)(".dhx_slider__tick-label", tick.label)] : null);
        }));
    };
    Slider.prototype._isNullable = function (value) {
        if (this._isInverse()) {
            return value === 100;
        }
        else {
            return value === 0;
        }
    };
    Slider.prototype._setTooltip = function (e) {
        if (e.target.classList.contains("dhx_slider__thumb--extra")) {
            this._activeTooltip = "extraTooltip";
        }
        else if (e.target.classList.contains("dhx_slider__thumb")) {
            this._activeTooltip = "tooltip";
        }
        else {
            this._activeTooltip = "none";
        }
    };
    return Slider;
}(view_1.View));
exports.Slider = Slider;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Popup = void 0;
var core_1 = __webpack_require__(0);
var dom_1 = __webpack_require__(1);
var events_1 = __webpack_require__(4);
var html_1 = __webpack_require__(2);
var view_1 = __webpack_require__(6);
var types_1 = __webpack_require__(39);
var Popup = /** @class */ (function (_super) {
    __extends(Popup, _super);
    function Popup(config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, null, (0, core_1.extend)({}, config)) || this;
        var popup = (_this._popup = document.createElement("div"));
        popup.className = "dhx_widget dhx_popup" + (_this.config.css ? " " + _this.config.css : "");
        popup.style.position = "absolute";
        popup.setAttribute("role", "dialog");
        popup.setAttribute("aria-modal", "true");
        popup.setAttribute("aria-live", "polite");
        _this.config.theme && _this._setTheme(_this.config.theme);
        _this.mount(popup, (0, dom_1.create)({
            render: function () { return _this.toVDOM(); },
        }));
        _this._clickEvent = function (e) { return _this.events.fire(types_1.PopupEvents.click, [e]); };
        _this.events = config.events || new events_1.EventSystem(_this);
        _this._isActive = false;
        return _this;
    }
    Popup.prototype.show = function (node, config, attached) {
        var _this = this;
        if (config === void 0) { config = {}; }
        if (!this.events.fire(types_1.PopupEvents.beforeShow, [node])) {
            return;
        }
        node = (0, html_1.toNode)(node);
        if (this._isActive) {
            this._setPopupSize(node, config);
            return;
        }
        if (attached) {
            this.attach(attached);
        }
        config.theme && this._setTheme(config.theme);
        this._popup.style.left = "0";
        this._popup.style.top = "0";
        (0, dom_1.awaitRedraw)()
            .then(function () {
            _this._setPopupSize(node, config);
            _this._popup.style.position = "fixed";
            document.body.appendChild(_this._popup);
            _this._isActive = true;
        })
            .then(function () {
            _this._popup.style.position = "absolute";
            _this.events.fire(types_1.PopupEvents.afterShow, [node]);
            _this._outerClickDestructor = _this._detectOuterClick(node);
        });
    };
    Popup.prototype.hide = function () {
        this._hide(false, null);
    };
    Popup.prototype.isVisible = function () {
        return this._isActive;
    };
    Popup.prototype.attach = function (name, config) {
        this._html = null;
        if (typeof name === "object") {
            this._ui = name;
        }
        else if (typeof name === "string") {
            this._ui = new window.dhx[name](null, config);
        }
        else if (typeof name === "function") {
            if (name.prototype instanceof view_1.View) {
                this._ui = new name(null, config);
            }
            else {
                this._ui = {
                    getRootView: function () {
                        return name(config);
                    },
                };
            }
        }
        this.paint();
        return this._ui;
    };
    Popup.prototype.attachHTML = function (html) {
        this._html = html;
        this.paint();
    };
    Popup.prototype.getWidget = function () {
        return this._ui;
    };
    Popup.prototype.getContainer = function () {
        return this.getRootView().refs.content.el;
    };
    Popup.prototype.toVDOM = function () {
        var view;
        if (this._html) {
            view = (0, dom_1.el)(".dhx_popup__inner-html-content", {
                ".innerHTML": this._html,
            });
        }
        else {
            view = this._ui ? this._ui.getRootView() : null;
            if (view && view.render) {
                view = (0, dom_1.inject)(view);
            }
        }
        return (0, dom_1.el)("div", {
            class: "dhx_popup-content",
            tabindex: 0,
            onclick: this._clickEvent,
            _key: this._uid,
            _ref: "content",
        }, [view]);
    };
    Popup.prototype.destructor = function () {
        this.events && this.events.clear();
        this.hide();
        if (this._outerClickDestructor) {
            this._outerClickDestructor();
        }
        this._popup = null;
    };
    Popup.prototype._setTheme = function (node) {
        var _a;
        if (typeof node === "string") {
            this._popup.setAttribute("data-dhx-theme", node);
        }
        else {
            var theme = (_a = node === null || node === void 0 ? void 0 : node.closest("[data-dhx-theme]")) === null || _a === void 0 ? void 0 : _a.getAttribute("data-dhx-theme");
            theme && this._popup.setAttribute("data-dhx-theme", theme);
        }
    };
    Popup.prototype._setPopupSize = function (node, config, calls) {
        var _this = this;
        if (calls === void 0) { calls = 3; }
        var _a = this._popup.getBoundingClientRect(), width = _a.width, height = _a.height;
        // TODO: IE popup height = 0
        if (this._timeout) {
            clearTimeout(this._timeout);
            this._timeout = null;
        }
        if (calls && (width === 0 || height === 0)) {
            this._timeout = setTimeout(function () {
                if (!_this._isActive) {
                    return;
                }
                _this._setPopupSize(node, config, calls - 1);
                _this._timeout = null;
            });
            return;
        }
        var _b = (0, html_1.fitPosition)(node, __assign(__assign({ centering: true, mode: "bottom" }, config), { width: width, height: height })), left = _b.left, top = _b.top;
        this._popup.style.left = left;
        this._popup.style.top = top;
        if (config.indent && config.indent !== 0) {
            switch (config.mode) {
                case "top":
                    this._popup.style.top =
                        parseInt(this._popup.style.top.slice(0, -2), null) -
                            parseInt(config.indent.toString(), null) +
                            "px";
                    break;
                case "bottom":
                    this._popup.style.top =
                        parseInt(this._popup.style.top.slice(0, -2), null) +
                            parseInt(config.indent.toString(), null) +
                            "px";
                    break;
                case "left":
                    this._popup.style.left =
                        parseInt(this._popup.style.left.slice(0, -2), null) -
                            parseInt(config.indent.toString(), null) +
                            "px";
                    break;
                case "right":
                    this._popup.style.left =
                        parseInt(this._popup.style.left.slice(0, -2), null) +
                            parseInt(config.indent.toString(), null) +
                            "px";
                    break;
                default:
                    this._popup.style.top =
                        parseInt(this._popup.style.top.slice(0, -2), null) +
                            parseInt(config.indent.toString(), null) +
                            "px";
                    break;
            }
        }
    };
    Popup.prototype._detectOuterClick = function (node) {
        var _this = this;
        var isDetect = false;
        var storage = new WeakMap();
        var outerClick = function (event) {
            var target = event.target;
            var popups = document.querySelectorAll(".dhx_popup");
            if (isDetect) {
                popups.forEach(function (popup) { return storage.has(popup) || storage.set(popup, _this._popup); });
            }
            else {
                isDetect = Boolean(popups.length);
                isDetect && popups.forEach(function (popup) { return storage.set(popup, true); });
            }
            while (target) {
                if (target === node || target === _this._popup || storage.get(target) === _this._popup) {
                    return;
                }
                target = target.parentNode;
            }
            if (_this._hide(true, event)) {
                document.removeEventListener("mousedown", outerClick);
            }
        };
        document.addEventListener("mousedown", outerClick);
        return function () { return document.removeEventListener("mousedown", outerClick); };
    };
    Popup.prototype._hide = function (fromOuterClick, e) {
        if (this._isActive) {
            if (!this.events.fire(types_1.PopupEvents.beforeHide, [fromOuterClick, e])) {
                return false;
            }
            document.body.removeChild(this._popup);
            this._isActive = false;
            if (this._outerClickDestructor) {
                this._outerClickDestructor();
                this._outerClickDestructor = null;
            }
            this.events.fire(types_1.PopupEvents.afterHide, [e]);
            return true;
        }
    };
    return Popup;
}(view_1.View));
exports.Popup = Popup;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var locale = {
    hours: "Hours",
    minutes: "Minutes",
    save: "Save",
};
exports.default = locale;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isTimeCheck = void 0;
/**
 * This function is designed to resolve conflicts with the time setting for the 12 hour format.
 */
function isTimeCheck(value) {
    return /(^12:[0-5][0-9]?AM$)/i.test(value);
}
exports.isTimeCheck = isTimeCheck;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.linkButtonClasses = void 0;
exports.linkButtonClasses = ".dhx_button.dhx_button--view_link.dhx_button--icon.dhx_button--size_medium.dhx_button--color_secondary";


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxEditor = void 0;
var core_1 = __webpack_require__(0);
var dom_1 = __webpack_require__(1);
var types_1 = __webpack_require__(3);
var CheckboxEditor = /** @class */ (function () {
    function CheckboxEditor(row, col, config) {
        this._config = config;
        this._cell = { row: row, col: col };
        this._initHandlers();
    }
    CheckboxEditor.prototype.endEdit = function () {
        var value = this._checked;
        if (this._config.events.fire(types_1.GridEvents.beforeEditEnd, [value, this._cell.row, this._cell.col])) {
            this._cell.row = this._config.datacollection.getItem(this._cell.row.id);
            this._config.events.fire(types_1.GridEvents.afterEditEnd, [value, this._cell.row, this._cell.col]);
        }
        else {
            this._input.checked = !value;
        }
    };
    CheckboxEditor.prototype.toHTML = function () {
        if (this._checked === undefined) {
            this._checked = this._cell.row[this._cell.col.id];
        }
        var id = (0, core_1.uid)();
        return (0, dom_1.el)("div.dhx_checkbox.dhx_cell-editor__checkbox", [
            (0, dom_1.el)("label", {
                style: {
                    display: "none",
                },
                for: id,
            }, this._checked || "false"),
            (0, dom_1.el)("input.dhx_checkbox__input", {
                type: "checkbox",
                _hooks: {
                    didInsert: this._handlers.didInsert,
                },
                _key: "cell_editor",
                "data-dhx-id": "cell_editor",
                "data-dhx-checked": (!!this._checked).toString(),
                checked: this._checked,
                id: id,
                style: {
                    userSelect: "none",
                },
            }),
            (0, dom_1.el)("span.dhx_checkbox__visual-input"),
        ]);
    };
    CheckboxEditor.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onClick: function () {
                var value = !_this._input.checked;
                if (_this._config.events.fire(types_1.GridEvents.beforeEditStart, [
                    _this._cell.row,
                    _this._cell.col,
                    "checkbox",
                ])) {
                    _this._checked = value;
                    _this._config.events.fire(types_1.GridEvents.afterEditStart, [
                        _this._cell.row,
                        _this._cell.col,
                        "checkbox",
                    ]);
                    _this.endEdit();
                }
                else {
                    _this._input.checked = !value;
                }
            },
            didInsert: function (node) {
                _this._checkbox = node.el.parentNode.lastChild;
                _this._input = node.el.parentNode.querySelector("input");
                node.el.parentNode.addEventListener("click", _this._handlers.onClick);
            },
        };
    };
    return CheckboxEditor;
}());
exports.CheckboxEditor = CheckboxEditor;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComboboxEditor = void 0;
var dom_1 = __webpack_require__(1);
var types_1 = __webpack_require__(3);
var ts_combobox_1 = __webpack_require__(43);
var FocusManager_1 = __webpack_require__(17);
var data_1 = __webpack_require__(8);
var ComboboxEditor = /** @class */ (function () {
    function ComboboxEditor(row, col, config) {
        this._config = config;
        this._cell = { row: row, col: col };
        this._initHandlers();
    }
    ComboboxEditor.prototype.endEdit = function (withoutSave) {
        var _this = this;
        if (!this._config.$editable)
            return;
        var value;
        if (!withoutSave) {
            var val = this._input.getValue();
            value = this._cell.col.editorType === "multiselect" ? val.split(",").join(", ") : val;
        }
        if (this._config.events.fire(types_1.GridEvents.beforeEditEnd, [value, this._cell.row, this._cell.col])) {
            var options_1 = (0, data_1.getEditorOptions)(this._cell.col, this._cell.row);
            this._input.popup.hide();
            document.removeEventListener("mousedown", this._handlers.onOuterClick);
            this._cell.row = this._config.datacollection.getItem(this._cell.row.id);
            FocusManager_1.focusManager.setFocusId(this._config.gridId);
            value === null || value === void 0 ? void 0 : value.toString().split(", ").forEach(function (val) {
                var item = options_1.find(function (option) {
                    return typeof option === "string" ? option === val : option.id.toString() === val;
                });
                if (val && !item) {
                    if (!_this._cell.col.$customOptions)
                        _this._cell.col.$customOptions = [];
                    _this._cell.col.$customOptions.push(_this._input.data.getItem(val));
                }
            });
            this._config.$editable = null;
            this._config.events.fire(types_1.GridEvents.afterEditEnd, [value, this._cell.row, this._cell.col]);
        }
        else {
            this._input.focus();
        }
    };
    ComboboxEditor.prototype.toHTML = function () {
        var _this = this;
        var options = (0, data_1.getEditorOptions)(this._cell.col, this._cell.row);
        var content = options.map(function (item) {
            return typeof item === "string" ? { id: "".concat(item), value: item } : item;
        }) || [];
        if (!this._input) {
            this._input = new ts_combobox_1.ProCombobox(null, __assign({ itemHeight: 37, css: "dhx_cell-editor__combobox", multiselection: this._cell.col.editorType === "multiselect", htmlEnable: this._cell.col.htmlEnable }, this._cell.col.editorConfig));
            this._input.data.parse(content);
            var comboValue = this._cell.row[this._cell.col.id];
            var value = this._cell.col.editorType === "multiselect"
                ? ((comboValue === null || comboValue === void 0 ? void 0 : comboValue.toString()) || "").split(", ")
                : comboValue;
            this._input.setValue(value);
            this._input.events.on("keydown", this._handlers.onkeydown);
            this._input.data.events.on("beforeAdd", function (item) {
                if (item.id !== item.value) {
                    _this._input.addOption({
                        id: item.value,
                        value: item.value,
                    }, true);
                    return false;
                }
            });
        }
        document.addEventListener("mousedown", this._handlers.onOuterClick);
        this._config.$editable.editor = this;
        (0, dom_1.awaitRedraw)().then(function () {
            var holderNode = _this._input.getRootView().refs.holder.el;
            _this._input.popup.getContainer().style.width = holderNode.offsetWidth + "px";
            _this._input._filter();
            _this._input.popup.show(holderNode);
        });
        FocusManager_1.focusManager.setFocusId(this._input._uid);
        return (0, dom_1.inject)(this._input.getRootView());
    };
    ComboboxEditor.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onOuterClick: function (e) {
                if (e.target instanceof Node) {
                    var isInput = _this._input &&
                        _this._input.getRootNode() &&
                        _this._input.getRootNode().contains(e.target);
                    var isPopup = _this._input.popup &&
                        _this._input.popup.getRootNode() &&
                        _this._input.popup.getRootNode().contains(e.target);
                    if (!(isInput || isPopup)) {
                        _this.endEdit();
                    }
                }
            },
            onkeydown: function (e) {
                if (e.key === "Escape" || e.key === "Tab") {
                    _this.endEdit();
                }
            },
        };
    };
    return ComboboxEditor;
}());
exports.ComboboxEditor = ComboboxEditor;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.KEY_CODES = void 0;
exports.KEY_CODES = {
    BACKSPACE: 8,
    ENTER: 13,
    ESC: 27,
    DOWN_ARROW: 40,
    UP_ARROW: 38,
    LEFT_ARROW: 37,
    RIGHT_ARROW: 39,
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getEditor = void 0;
var InputEditor_1 = __webpack_require__(106);
function getEditor(item, list) {
    return new InputEditor_1.InputEditor(item, list);
}
exports.getEditor = getEditor;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InputEditor = void 0;
var dom_1 = __webpack_require__(1);
var types_1 = __webpack_require__(28);
var InputEditor = /** @class */ (function () {
    function InputEditor(item, list) {
        var _this = this;
        this._list = list;
        this._config = list.config;
        this._item = item;
        this._list.events.on(types_1.ListEvents.focusChange, function (index, id) {
            if (_this._mode && id !== _this._item.id) {
                _this.endEdit();
            }
        });
        this._initHandlers();
    }
    InputEditor.prototype.endEdit = function () {
        if (this._input) {
            var value = this._input.value;
            if (this._list.events.fire(types_1.ListEvents.beforeEditEnd, [value, this._item.id])) {
                this._input.removeEventListener("blur", this._handlers.onBlur);
                this._input.removeEventListener("change", this._handlers.onChange);
                this._input.removeEventListener("keydown", this._handlers.onKeyDown);
                this._handlers = {};
                this._mode = false;
                this._list.events.fire(types_1.ListEvents.afterEditEnd, [value, this._item.id]);
            }
            else {
                this._input.focus();
            }
        }
    };
    InputEditor.prototype.toHTML = function () {
        this._mode = true;
        var itemHeight = this._config.itemHeight;
        return (0, dom_1.el)(".dhx_input__wrapper", { role: "presentation" }, [
            (0, dom_1.el)("div.dhx_input__container", { role: "presentation" }, [
                (0, dom_1.el)("input.dhx_input", {
                    class: this._item.css ? " " + this._item.css : "",
                    style: {
                        height: itemHeight,
                        width: "100%",
                        padding: "8px 12px",
                    },
                    _hooks: {
                        didInsert: this._handlers.didInsert,
                    },
                    _key: this._item.id,
                    "data-dhx-id": this._item.id,
                }),
            ]),
        ]);
    };
    InputEditor.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onBlur: function () {
                _this.endEdit();
            },
            onChange: function () {
                _this.endEdit();
            },
            onKeyDown: function (e) {
                if (e.key === "Enter" && _this._item.value === _this._input.value)
                    _this.endEdit();
                if (e.key === "Escape") {
                    _this._input.value = _this._item.value;
                    _this.endEdit();
                }
            },
            didInsert: function (node) {
                var input = node.el;
                _this._input = input;
                input.focus();
                input.value = _this._item.value;
                input.setSelectionRange(0, input.value.length);
                input.addEventListener("change", _this._handlers.onChange);
                input.addEventListener("blur", _this._handlers.onBlur);
                input.addEventListener("keydown", _this._handlers.onKeyDown);
            },
        };
    };
    return InputEditor;
}());
exports.InputEditor = InputEditor;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProList = void 0;
var dom_1 = __webpack_require__(1);
var ScrollView_1 = __webpack_require__(38);
var List_1 = __webpack_require__(46);
var ProList = /** @class */ (function (_super) {
    __extends(ProList, _super);
    function ProList(container, config) {
        var _this = _super.call(this, container, config) || this;
        _this.scrollView = new ScrollView_1.ScrollView(function () { return _this.getRootView(); });
        _this.paint();
        return _this;
    }
    ProList.prototype.destructor = function () {
        _super.prototype.destructor.call(this);
        this.scrollView = null;
    };
    ProList.prototype.scrollTo = function (id) {
        var _a, _b;
        var rootView = this.getRootView();
        if (!rootView || !rootView.node || !rootView.node.el || typeof id === "undefined") {
            return;
        }
        var listEl = ((_a = this.scrollView) === null || _a === void 0 ? void 0 : _a.config.enable)
            ? (_b = this.getRootNode()) === null || _b === void 0 ? void 0 : _b.querySelector(".scroll-view")
            : this.getRootNode();
        this._scrollTo(id, listEl);
    };
    ProList.prototype._renderList = function () {
        var _this = this;
        var range = this._getRange();
        // mapRange
        var data = this.data.getRawData(range[0], range[1]);
        var kids = data.map(function (obj, index) { return _this._renderItem(obj, index); });
        if (this.config.virtual) {
            kids = __spreadArray(__spreadArray([
                (0, dom_1.el)(".div", { style: { height: range[2] + "px" } })
            ], kids, true), [
                (0, dom_1.el)(".div", { style: { height: range[3] + "px" } }),
            ], false);
        }
        var scrollViewEnable = this.scrollView && this.scrollView.config.enable;
        var currentClass = (this.config.css ? this.config.css : "") +
            (this.config.multiselection && this.selection.getItem() ? " dhx_no-select--pointer" : "") +
            (scrollViewEnable ? " dhx_list--scroll-view" : "");
        return (0, dom_1.el)("ul.dhx_widget.dhx_list", __assign(__assign({ style: {
                "max-height": this.config.height,
                position: "relative",
            }, id: this._uid, class: currentClass, "data-dhx-widget-id": this._uid, "data-dhx-drop-area": "row" }, this._handlers), this._getListAriaAttrs(this.config, this.data.getLength())), scrollViewEnable ? [].concat(this.scrollView.render(kids)) : kids);
    };
    return ProList;
}(List_1.List));
exports.ProList = ProList;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyListener = void 0;
var CLEAR_TIMEOUT = 2000;
var KeyListener = /** @class */ (function () {
    function KeyListener() {
        var _this = this;
        this._handler = function (event) {
            if (!_this._isActive) {
                return;
            }
            var key = event.key;
            if (key === "Backspace" && _this._sequence.length > 0) {
                _this._sequence = _this._sequence.slice(0, _this._sequence.length - 1);
                _this._change();
            }
            if (key.length < 2) {
                // handle only single key value
                _this._sequence += key;
                _this._change();
            }
        };
        this._sequence = "";
        document.addEventListener("keydown", this._handler);
    }
    KeyListener.prototype.startNewListen = function (action) {
        this._isActive = true;
        this._sequence = "";
        this._currentAction = action;
    };
    KeyListener.prototype.endListen = function () {
        this._currentAction = null;
        this.reset();
        this._isActive = false;
    };
    KeyListener.prototype.reset = function () {
        this._sequence = "";
    };
    KeyListener.prototype.destructor = function () {
        document.removeEventListener("keydown", this._handler);
    };
    KeyListener.prototype._change = function () {
        this._currentAction(this._sequence);
        this._addClearTimeout();
    };
    KeyListener.prototype._addClearTimeout = function () {
        var _this = this;
        if (this._clearTimeout) {
            clearTimeout(this._clearTimeout);
        }
        this._clearTimeout = setTimeout(function () {
            _this.reset();
            _this._clearTimeout = null;
        }, CLEAR_TIMEOUT);
    };
    return KeyListener;
}());
exports.KeyListener = KeyListener;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProCombobox = void 0;
var Combobox_1 = __webpack_require__(44);
var ts_list_1 = __webpack_require__(45);
var ts_layout_1 = __webpack_require__(24);
var helper_1 = __webpack_require__(48);
var ProCombobox = /** @class */ (function (_super) {
    __extends(ProCombobox, _super);
    function ProCombobox(element, config) {
        return _super.call(this, element, config) || this;
    }
    ProCombobox.prototype._createLayout = function () {
        var list = (this.list = new ts_list_1.ProList(null, {
            $template: Combobox_1.$template,
            template: this.config.template,
            htmlEnable: this.config.htmlEnable,
            virtual: this.config.virtual,
            keyNavigation: true,
            multiselection: this.config.multiselection,
            itemHeight: this.config.itemHeight,
            height: this.config.listHeight,
            data: this.data,
            eventHandlers: this.config.eventHandlers,
        }));
        var layout = (this._layout = new ts_layout_1.ProLayout(this.popup.getContainer(), {
            css: "dhx_combobox-options dhx_combobox__options",
            rows: [
                {
                    id: "select-unselect-all",
                    hidden: !this.config.multiselection || !this.config.selectAllButton,
                },
                { id: "list", height: "content" },
                {
                    id: "not-found",
                    hidden: true,
                },
            ],
            on: {
                click: {
                    ".dhx_combobox__action-select-all": this._handlers.selectAll,
                    ".dhx_combobox-options__action-create-option": this._handlers.addOption,
                },
            },
        }));
        layout.getCell("list").attach(list);
        if (this.config.multiselection && this.config.selectAllButton) {
            layout.getCell("select-unselect-all").attach(helper_1.selectAllView);
        }
    };
    return ProCombobox;
}(Combobox_1.Combobox));
exports.ProCombobox = ProCombobox;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextAreaEditor = void 0;
var dom_1 = __webpack_require__(1);
var types_1 = __webpack_require__(3);
var core_1 = __webpack_require__(0);
var data_1 = __webpack_require__(8);
var input_1 = __webpack_require__(23);
var TextAreaEditor = /** @class */ (function () {
    function TextAreaEditor(row, col, config, span) {
        this._config = config;
        this._cell = { row: row, col: col };
        this.type = this._cell.col.type;
        this._width = this._getCellWidth(span);
        if (this._config.firstColId === this._cell.col.id && this._cell.row.hasOwnProperty("$level")) {
            this._width -= (0, data_1.getTreeCellWidthOffset)(this._cell.row) - 12;
        }
        this._initHandlers();
    }
    TextAreaEditor.prototype.endEdit = function (withoutSave) {
        if (!this._config.$editable)
            return;
        var value;
        if (!withoutSave) {
            value = this._removeValuePattern(this._input.value, true);
            if (this.type === "number" || this._cell.col.numberMask) {
                value = parseFloat(value);
                if (Number.isNaN(value))
                    value = "";
            }
        }
        if (this._config.events.fire(types_1.GridEvents.beforeEditEnd, [value, this._cell.row, this._cell.col])) {
            this._cell.row = this._config.datacollection.getItem(this._cell.row.id);
            this._config.$editable = null;
            this._config.events.fire(types_1.GridEvents.afterEditEnd, [value, this._cell.row, this._cell.col]);
        }
        else {
            this._input.focus();
        }
    };
    TextAreaEditor.prototype.toHTML = function (value) {
        var _a;
        if ((0, core_1.isDefined)(value)) {
            this.type = "string";
        }
        value =
            (_a = (this._input ? this._input.value : (value !== null && value !== void 0 ? value : this._cell.row[this._cell.col.id]))) !== null && _a !== void 0 ? _a : "";
        var numberMaskConfig = this._cell.col.numberMask;
        if ((0, core_1.isDefined)(numberMaskConfig === null || numberMaskConfig === void 0 ? void 0 : numberMaskConfig.maxDecLength)) {
            numberMaskConfig = __assign(__assign({}, numberMaskConfig), { maxDecLength: undefined });
        }
        value = this._applyValuePattern(value, this._input, true, numberMaskConfig);
        this._config.$editable.editor = this;
        var css = typeof this._cell.row.height === "undefined" && !this._cell.col.htmlEnable
            ? "dhx_cell-editor dhx_cell-editor__textarea"
            : "dhx_cell-editor dhx_cell-editor__textarea_constant-height";
        return (0, dom_1.el)("textarea", {
            _hooks: {
                didInsert: this._handlers.didInsert,
            },
            _ref: "textarea",
            _key: "cell_editor",
            "data-dhx-id": "cell_editor",
            value: value,
            onblur: this._handlers.onBlur,
            oninput: this._handlers.onInput,
            onkeydown: this._handlers.onKeydown,
            class: css,
            style: {
                width: this._width,
            },
        });
    };
    TextAreaEditor.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onBlur: function () {
                _this.endEdit();
            },
            onInput: function (event) {
                var _a, _b;
                if (typeof _this._cell.row.height !== "undefined" || _this._cell.col.htmlEnable) {
                    return;
                }
                var value = _this._removeValuePattern(_this._input.value);
                _this._cell.row[_this._cell.col.id] = value;
                _this._input.value = _this._applyValuePattern(value, _this._input);
                var currentHeight = _this._getCurrentHeight(_this._input.value, {
                    width: _this._cell.col.$width - 2,
                    maxHeight: _this._config.rowHeight,
                });
                var row = __assign(__assign({}, _this._cell.row), (_a = {}, _a[_this._cell.col.id] = _this._input.value, _a));
                var totalHeight = (0, data_1.getCalculatedRowHeight)((0, data_1.getMaxRowHeight)(row, _this._config.columns));
                var currentRowHeight = (0, data_1.getCalculatedRowHeight)((0, data_1.getMaxRowHeight)((_b = {}, _b[_this._cell.col.id] = row[_this._cell.col.id], _b), _this._config.columns));
                _this._minHeight = totalHeight === currentRowHeight ? _this._config.rowHeight : totalHeight;
                if (currentHeight >= _this._minHeight && currentHeight !== _this._prevHeight) {
                    if (!_this._config.events.fire(types_1.GridEvents.beforeRowResize, [
                        _this._cell.row,
                        event,
                        currentHeight,
                    ])) {
                        return;
                    }
                    _this._config.events.fire(types_1.GridEvents.afterRowResize, [
                        _this._cell.row,
                        event,
                        currentHeight,
                    ]);
                }
                _this._updateHeight(event, _this._input.value);
            },
            onKeydown: function (event) {
                if (event.key === "Escape") {
                    _this._updateHeight(event, _this._initialValue);
                }
                if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                }
            },
            didInsert: function (node) {
                _this._input = node.el;
                _this._initialValue = node.el.value;
                _this._input.focus();
            },
        };
    };
    TextAreaEditor.prototype._getCurrentHeight = function (value, config) {
        config = __assign({ width: 100, maxHeight: 40, lineHeight: 20 }, config);
        var element = document.createElement("textarea");
        element.className = "dhx_cell-editor dhx_cell-editor__textarea";
        element.value = value;
        element.style.width = "".concat(config.width, "px");
        element.style.lineHeight = "".concat(config.lineHeight, "px");
        element.style.maxHeight = "".concat(config.maxHeight, "px");
        element.style.boxSizing = "border-box";
        document.body.appendChild(element);
        var height = this._getElementHeight(element);
        var currentRows = element.value.split("\n").length;
        var calculateRows = Math.round(height / config.lineHeight);
        var calculateHeight = height < config.maxHeight ? config.maxHeight : height;
        document.body.removeChild(element);
        return currentRows === 1 && currentRows === calculateRows ? config.maxHeight : calculateHeight;
    };
    TextAreaEditor.prototype._getElementHeight = function (element) {
        return element.scrollHeight;
    };
    TextAreaEditor.prototype._applyValuePattern = function (value, input, onlyView, numberMaskConfig) {
        if (onlyView === void 0) { onlyView = false; }
        if (this._cell.col.numberMask) {
            return (0, input_1.numberMask)(value.toString(), __assign(__assign({}, (numberMaskConfig || this._cell.col.numberMask)), { onlyView: onlyView }), input);
        }
        if (this._cell.col.patternMask) {
            return (0, input_1.patternMask)(value.toString(), this._cell.col.patternMask, input);
        }
        return value;
    };
    TextAreaEditor.prototype._removeValuePattern = function (value, lastCall) {
        if (lastCall === void 0) { lastCall = false; }
        if (this._cell.col.numberMask) {
            return (0, input_1.removeNumberMask)(value, __assign(__assign({}, this._cell.col.numberMask), { lastCall: lastCall }));
        }
        if (this._cell.col.patternMask) {
            return (0, input_1.removePatternMask)(value, this._cell.col.patternMask);
        }
        return value;
    };
    TextAreaEditor.prototype._getCellWidth = function (span) {
        if (!span) {
            return this._cell.col.$width;
        }
        return this._config.columns
            .slice(span.$colsVisibility[0], span.$colsVisibility[1] + 1)
            .reduce(function (width, col) { return width + col.$width; }, 0);
    };
    TextAreaEditor.prototype._updateHeight = function (event, value) {
        var _a, _b;
        if (typeof this._cell.row.height !== "undefined" || this._cell.col.htmlEnable)
            return;
        var currentHeight = this._getCurrentHeight(value, {
            width: this._width - 2,
            maxHeight: this._config.rowHeight,
        });
        var row = __assign(__assign({}, this._cell.row), (_a = {}, _a[this._cell.col.id] = value, _a));
        var totalHeight = (0, data_1.getCalculatedRowHeight)((0, data_1.getMaxRowHeight)(row, this._config.columns));
        var currentRowHeight = (0, data_1.getCalculatedRowHeight)((0, data_1.getMaxRowHeight)((_b = {}, _b[this._cell.col.id] = row[this._cell.col.id], _b), this._config.columns));
        this._minHeight = totalHeight === currentRowHeight ? this._config.rowHeight : totalHeight;
        if (currentHeight >= this._minHeight && currentHeight !== this._prevHeight) {
            if (!this._config.events.fire(types_1.GridEvents.beforeRowResize, [this._cell.row, event, currentHeight])) {
                return;
            }
            this._config.events.fire(types_1.GridEvents.afterRowResize, [this._cell.row, event, currentHeight]);
        }
        this._prevHeight = currentHeight;
    };
    return TextAreaEditor;
}());
exports.TextAreaEditor = TextAreaEditor;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGroupPanel = exports.getGroupItem = void 0;
var dom_1 = __webpack_require__(1);
var types_1 = __webpack_require__(3);
var html_1 = __webpack_require__(2);
var en_1 = __webpack_require__(112);
function getGroupChain(_a) {
    var id = _a.id;
    return (0, dom_1.el)("div.dhx_grid-group_chain", {
        "aria-hidden": "true",
        "data-dhx-id": id,
        _key: "chain_".concat(id),
    }, [(0, dom_1.el)("i.dxi.dxi-chevron-right")]);
}
var groupHandlers = {
    onclick: function (grid, event) {
        var id = (0, html_1.locate)(event, "data-dhx-group-item-id");
        id && grid.events.fire(types_1.GridEvents.groupPanelItemClick, [id, event]);
    },
    onmousedown: function (grid, event) {
        var id = (0, html_1.locate)(event, "data-dhx-group-item-id");
        id && grid.events.fire(types_1.GridEvents.groupPanelItemMouseDown, [id, event]);
    },
    ontouchstart: function (grid, event) {
        var id = (0, html_1.locate)(event, "data-dhx-group-item-id");
        id && grid.events.fire(types_1.GridEvents.groupPanelItemMouseDown, [id, event]);
    },
    ontouchmove: function (grid, event) {
        var id = (0, html_1.locate)(event, "data-dhx-group-item-id");
        id && grid._events.fire(types_1.GridSystemEvents.groupPanelItemTouchMove, [id, event]);
    },
    ontouchend: function (grid, event) {
        var id = (0, html_1.locate)(event, "data-dhx-group-item-id");
        id && grid._events.fire(types_1.GridSystemEvents.groupPanelItemItemTouchEnd, [id, event]);
    },
};
function getGroupItem(_a) {
    var id = _a.id, label = _a.label, sort = _a.sort, _b = _a.mode, mode = _b === void 0 ? "basic" : _b, _c = _a.sortable, sortable = _c === void 0 ? true : _c, _d = _a.closable, closable = _d === void 0 ? true : _d;
    return (0, dom_1.el)("div", {
        role: "option",
        class: "dhx_grid-group_item dhx_grid-group_item--".concat(mode),
        "data-dhx-group-item-id": id,
        "data-dhx-id": id,
        _key: id,
    }, [
        (sortable &&
            ((sort &&
                (0, dom_1.el)("i.dxi.dxi-arrow-up.dhx_grid-group_item-sort.dhx_grid-group_item-sort--".concat(sort))) ||
                (0, dom_1.el)("i.dxi.dxi-sort.dhx_grid-group_item-sort.dhx_grid-group_item-unsorted"))) ||
            null,
        (0, dom_1.el)("span.dhx_grid-group_item-label", label),
        (closable &&
            (0, dom_1.el)("i.dxi.dxi-close-circle.dhx_grid-group_item-remove", {
                "data-dhx-group-item-remove": "true",
            })) ||
            null,
    ]);
}
exports.getGroupItem = getGroupItem;
function getGroupPanel(grouped, grid) {
    var _a, _b;
    if (grouped === void 0) { grouped = []; }
    var items = [];
    grouped.forEach(function (item, index) {
        items.push(getGroupItem(item));
        if (index !== grouped.length - 1) {
            items.push(getGroupChain(item));
        }
    });
    var handlers = Object.entries(groupHandlers).reduce(function (res, _a) {
        var _b;
        var key = _a[0], handler = _a[1];
        return (__assign(__assign({}, res), (_b = {}, _b[key] = [handler, grid], _b)));
    }, {});
    return (0, dom_1.el)("div", __assign({ class: "dhx_grid-group_panel", "data-dhx-drop-area": "group", role: "presentation", style: {
            height: ((_b = (_a = grid.config) === null || _a === void 0 ? void 0 : _a.group) === null || _b === void 0 ? void 0 : _b.panelHeight) || 40,
        } }, handlers), [
        (0, dom_1.el)("div", {
            class: "dhx_grid-group_title",
        }, en_1.default.dropAreaTitle),
        (0, dom_1.el)("div", {
            class: "dhx_grid-group_drop-area",
            role: "listbox",
        }, __spreadArray([], (items.length
            ? items
            : [
                (0, dom_1.el)("span", { class: "dhx_grid-group_drop-area-placeholder" }, en_1.default.dropAreaPlaceholder),
            ]), true)),
    ]);
}
exports.getGroupPanel = getGroupPanel;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var locale = {
    total: "Total",
    groupText: "Group",
    dropAreaTitle: "Group by:",
    dropAreaPlaceholder: "Drag the column header here",
};
exports.default = locale;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getContent = void 0;
var dom_1 = __webpack_require__(1);
var data_1 = __webpack_require__(8);
var core_1 = __webpack_require__(0);
var ComboFilter_1 = __webpack_require__(114);
var SelectFilter_1 = __webpack_require__(115);
var InputFilter_1 = __webpack_require__(116);
function getContent() {
    return {
        inputFilter: {
            element: {},
            toHtml: function (column, config) {
                var _this = this;
                var id = (0, core_1.uid)();
                var colId = column.id.toString();
                var filter = this.element[colId];
                if (!filter) {
                    filter = new InputFilter_1.InputFilter(column, config, id, this.value[colId]);
                    filter.events.on("change", function (value) {
                        _this.value[colId] = value;
                    });
                    this.element[colId] = filter;
                }
                else {
                    filter.value = this.value[colId];
                }
                return filter.toHTML();
            },
            match: function (_a) {
                var val = _a.val, match = _a.match, col = _a.col;
                if (!(0, core_1.isDefined)(val))
                    return false;
                var values = [(0, data_1.applyPattern)(val, col), val.toString()];
                var res = "";
                for (var i = 0; i < match.length; i++) {
                    var char = match.charCodeAt(i);
                    if ((char > 32 && char < 48) || char === 63 || (char > 90 && char < 95) || char === 124) {
                        res += "\\" + match[i];
                    }
                    else {
                        res += match[i];
                    }
                }
                return values.some(function (value) { return new RegExp("".concat(res), "i").test(value); });
            },
            value: {},
        },
        selectFilter: {
            element: {},
            toHtml: function (column, config) {
                var _this = this;
                var colId = column.id.toString();
                var filter = this.element[colId];
                if (!filter) {
                    filter = new SelectFilter_1.SelectFilter(column, config, column.$uniqueData, this.value[colId]);
                    filter.events.on("change", function (value) {
                        _this.value[colId] = value;
                    });
                    this.element[colId] = filter;
                }
                else {
                    filter.value = this.value[colId];
                    filter.data = column.$activeFilterData || column.$uniqueData;
                }
                return filter.toHTML();
            },
            match: function (_a) {
                var val = _a.val, match = _a.match, col = _a.col;
                var value = (0, data_1.applyPattern)(val, col);
                return match ? (value || typeof value === "boolean") && value.toString() == match : true;
            },
            value: {},
        },
        comboFilter: {
            element: {},
            toHtml: function (column, config) {
                var _this = this;
                var colId = column.id.toString();
                var filter = this.element[colId];
                if (!filter) {
                    var conf = column.header.filter(function (item) { return item.filterConfig !== undefined; })[0];
                    filter = new ComboFilter_1.ComboFilter(column, config, column.$uniqueData, this.value[colId], conf);
                    filter.events.on("change", function (value) {
                        _this.value[colId] = value;
                    });
                    this.element[colId] = filter;
                }
                else {
                    filter.data = column.$uniqueData;
                }
                return (0, dom_1.inject)(filter.getFilter().getRootView());
            },
            match: function (_a) {
                var val = _a.val, _b = _a.match, match = _b === void 0 ? "" : _b, _c = _a.multi, multi = _c === void 0 ? false : _c, col = _a.col;
                var value = (0, data_1.applyPattern)(val, col);
                if (Array.isArray(match)) {
                    var result = void 0;
                    var _loop_1 = function (i) {
                        result =
                            multi && typeof value === "string"
                                ? value.split(", ").some(function (item) { return item === match[i]; })
                                : match[i] === value;
                        if (result)
                            return "break";
                    };
                    for (var i = 0; i < match.length; i++) {
                        var state_1 = _loop_1(i);
                        if (state_1 === "break")
                            break;
                    }
                    return match && match.length ? result : true;
                }
                else {
                    return match !== undefined ? value === match : true;
                }
            },
            destroy: function () {
                this.value = {};
                var comboFilters = this.element;
                for (var colId in comboFilters) {
                    comboFilters[colId].destructor();
                    delete comboFilters[colId];
                }
            },
            value: {},
        },
    };
}
exports.getContent = getContent;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ComboFilter = void 0;
var ts_combobox_1 = __webpack_require__(43);
var events_1 = __webpack_require__(4);
var ts_data_1 = __webpack_require__(5);
var core_1 = __webpack_require__(0);
var types_1 = __webpack_require__(3);
var ComboFilter = /** @class */ (function () {
    function ComboFilter(column, config, data, value, conf) {
        var _a;
        this.events = new events_1.EventSystem();
        this._silentMode = false; // for silent filter cleaning
        this.column = column;
        this.config = config;
        this.data = data;
        this.value = value;
        this.filterConfig = (conf === null || conf === void 0 ? void 0 : conf.filterConfig) || {};
        if (this.column.htmlEnable || (((_a = this.config) === null || _a === void 0 ? void 0 : _a.htmlEnable) && this.column.htmlEnable !== false)) {
            if (!this.column.template && this.filterConfig.readonly !== false) {
                this.filterConfig.readonly = true;
            }
            if (!this.filterConfig.template) {
                this.filterConfig.template = function (item) { return item.value; };
            }
        }
        if (!this.filterConfig.filter) {
            this.filterConfig.filter = function (item, val) { return (0, core_1.isExistValue)(item.value, val); };
        }
        this.initFilter();
        this.config && this.initHandlers();
    }
    ComboFilter.prototype.initFilter = function () {
        this._filter = new ts_combobox_1.ProCombobox(null, Object.assign({}, this.filterConfig));
        this.data && this._filter.data && this._setData();
    };
    ComboFilter.prototype.initHandlers = function () {
        var _this = this;
        var _a, _b, _c;
        var colId = this.column.id.toString();
        this.config.events.on(ts_data_1.DataEvents.load, function () { return _this._setData(); }, this);
        this._filter.events.on("change", function (id) {
            var _a;
            var value;
            if (id) {
                var haveIds = Array.isArray(id)
                    ? id.find(function (item) { return _this._filter.data.getItem(item); })
                    : _this._filter.data.getItem(id);
                if (haveIds) {
                    value = _this._filter.config.multiselection
                        ? _this._filter.list.selection.getItem().map(function (item) {
                            if (item && _this._filter.data.getItem(item.id)) {
                                return item.value;
                            }
                        })
                        : _this._filter.list.selection.getItem().value;
                }
            }
            _this.value = value;
            (_a = _this.config.events) === null || _a === void 0 ? void 0 : _a.fire(types_1.GridEvents.filterChange, [
                _this.value,
                colId,
                "comboFilter",
                _this._silentMode,
            ]);
            if (_this._silentMode && _this.value === undefined) {
                _this._silentMode = false;
            }
        });
        this.config.events.on(types_1.GridEvents.filterChange, function (value) { return _this.events.fire(types_1.HeaderFilterEvent.change, [value]); }, this);
        this._filter.popup.events.on("afterHide", function () {
            if (!_this.filterConfig.multiselection && !_this._filter.list.selection.getItem()) {
                _this.clear();
            }
        });
        this._filter.popup.events.on("afterShow", function () {
            if (!_this.filterConfig.multiselection &&
                (_this.value === "" || (_this.filterConfig.readonly && _this.value !== undefined))) {
                _this.clear();
            }
        });
        (_a = this.config.events) === null || _a === void 0 ? void 0 : _a.on(types_1.GridEvents.scroll, function () {
            var _a;
            if (_this._isFocused && ((_a = _this._filter.getRootView().refs) === null || _a === void 0 ? void 0 : _a.input)) {
                _this._filter.focus();
            }
        }, this);
        (_b = this.config.events) === null || _b === void 0 ? void 0 : _b.on(types_1.GridEvents.headerCellMouseDown, function (cell, col) {
            if (col.id !== _this.column.id)
                _this.blur();
        }, this);
        (_c = this.config.events) === null || _c === void 0 ? void 0 : _c.on(types_1.GridEvents.cellMouseDown, function () { return _this.blur(); }, this);
        this.config.events.on(ts_data_1.DataEvents.change, function (id, status) {
            if (_this.column.hidden)
                return;
            if (status === "add" || status === "update" || status === "remove") {
                if (status !== "add")
                    _this._checkValue();
                _this._setData(true);
            }
        }, this);
        this.config.events.on(ts_data_1.DataEvents.removeAll, function () {
            _this.clear(true);
            _this._setData();
        }, this);
        this.config.events.on(types_1.GridEvents.afterRowShow, function () { return _this._setData(true); }, this);
        this.config.events.on(types_1.GridEvents.afterRowHide, function () {
            if (_this.column.hidden)
                return;
            _this._checkValue();
            _this._setData(true);
        }, this);
        this.config.events.on(ts_data_1.DataEvents.filter, function (filters) {
            if (_this.column.hidden)
                return;
            if (!filters || (0, ts_data_1.isOnlyPermanentFilters)(filters)) {
                _this.clear(true);
            }
            else {
                _this._checkValue();
            }
            if (!_this.filterConfig.multiselection || !_this._filter.popup.isVisible()) {
                _this._setData(true);
            }
        }, this);
        this.config.events.on(types_1.GridEvents.afterColumnShow, function () {
            if (!_this.filterConfig.multiselection) {
                _this._checkValue();
                _this._setData();
            }
        }, this);
        this.config.events.on(types_1.GridEvents.afterColumnHide, function () {
            if (!_this.filterConfig.multiselection) {
                _this._setData();
            }
        }, this);
    };
    ComboFilter.prototype.getFilter = function () {
        return this._filter;
    };
    ComboFilter.prototype.setValue = function (value, silent) {
        var _this = this;
        var _a, _b;
        if (!this.filterConfig.multiselection && Array.isArray(value))
            return;
        if (!(0, core_1.isDefined)(value)) {
            if (silent)
                this._silentMode = true;
            this._filter.clear();
            if (!this.filterConfig.multiselection && this.value !== undefined) {
                this.value = undefined;
                (_a = this.config.events) === null || _a === void 0 ? void 0 : _a.fire(types_1.GridEvents.filterChange, [
                    this.value,
                    this.column.id,
                    "comboFilter",
                ]);
            }
        }
        else if ((value === null || value === void 0 ? void 0 : value.length) || value === "") {
            var item = this.filterConfig.multiselection && Array.isArray(value)
                ? value.map(function (v) { var _a; return (_a = _this._filter.data.find(function (item) { return item.value === v; })) === null || _a === void 0 ? void 0 : _a.id; })
                : (_b = this._filter.data.find(function (item) { return item.value === value; })) === null || _b === void 0 ? void 0 : _b.id;
            this._filter.setValue(item, silent);
        }
    };
    ComboFilter.prototype.clear = function (silent) {
        if (this.value !== undefined) {
            this.setValue(null, silent);
        }
    };
    ComboFilter.prototype.focus = function () {
        var _a;
        this._isFocused = true;
        ((_a = this._filter.getRootView().refs) === null || _a === void 0 ? void 0 : _a.input) && this._filter.focus();
    };
    ComboFilter.prototype.blur = function () {
        var _a;
        this._isFocused = false;
        ((_a = this._filter.getRootView().refs) === null || _a === void 0 ? void 0 : _a.input) && this._filter.blur();
    };
    ComboFilter.prototype.destructor = function () {
        var gridEvents = this.config.events;
        if (gridEvents) {
            for (var name_1 in gridEvents.events) {
                this.config.events.detach(name_1, this);
            }
        }
        this.events.clear();
        this._filter && this._filter.destructor();
        this.config = this.filterConfig = this.data = this.column = this.value = this.events = null;
    };
    ComboFilter.prototype._setData = function (active) {
        var _this = this;
        if (active === void 0) { active = false; }
        var parseData = function () {
            var uniqueData = _this.column.$activeFilterData || _this.column.$uniqueData;
            if (_this.column.header.some(function (col) { var _a; return (_a = col.filterConfig) === null || _a === void 0 ? void 0 : _a.filter; })) {
                var data_1 = _this._filter.data.reduce(function (obj, item) {
                    obj[item.value] = item.id;
                    return obj;
                }, {});
                var newData = uniqueData.map(function (value) {
                    return data_1[value] ? { id: data_1[value], value: value } : { value: value };
                });
                _this._filter.data.parse(newData);
            }
            else {
                _this._filter.data.parse(uniqueData.map(function (value) { return ({ value: value }); }));
            }
        };
        if (this.value === undefined) {
            parseData();
        }
        else if (active && this.filterConfig.multiselection) {
            parseData();
            this.setValue(this.value, true);
        }
    };
    ComboFilter.prototype._checkValue = function () {
        if (this.value === undefined)
            return;
        var values = Array.isArray(this.value) ? this.value : [this.value];
        var _loop_1 = function (value) {
            if (this_1.column.$uniqueData.includes(value))
                return "continue";
            if (values.length > 1) {
                var item = this_1._filter.data.find(function (item) { return item.value === value; });
                this_1._filter.list.selection.remove(item.id);
            }
            else {
                this_1.clear();
            }
            return "break";
        };
        var this_1 = this;
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var value = values_1[_i];
            var state_1 = _loop_1(value);
            if (state_1 === "break")
                break;
        }
    };
    return ComboFilter;
}());
exports.ComboFilter = ComboFilter;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectFilter = void 0;
var dom_1 = __webpack_require__(1);
var events_1 = __webpack_require__(4);
var types_1 = __webpack_require__(3);
var SelectFilter = /** @class */ (function () {
    function SelectFilter(column, config, uniqueData, value) {
        this.events = new events_1.EventSystem();
        this.column = column;
        this.config = config;
        this.data = uniqueData;
        this.value = value || "";
        this.initHandlers();
        this.toHTML();
    }
    SelectFilter.prototype.toHTML = function () {
        var _this = this;
        var _a;
        return (0, dom_1.el)("label.dhx_grid-filter__label.dxi.dxi-menu-down", { _ref: "".concat(this.column.id, "_filter") }, [
            (0, dom_1.el)("select.dxi.dxi-menu-down", {
                type: "text",
                class: "dhx_input dhx_grid-filter dhx_grid-filter--select",
                onchange: this._handlers.onchange,
                onfocus: this._handlers.onfocus,
                onblur: this._handlers.onblur,
                _key: this.column.id,
            }, __spreadArray([
                (0, dom_1.el)("option", { value: "", _key: 0 }, "")
            ], (_a = ((this.value ? [this.value] : this.data) || [])) === null || _a === void 0 ? void 0 : _a.map(function (val) {
                val = val !== null && val !== void 0 ? val : "";
                return (val !== "" &&
                    (0, dom_1.el)("option", {
                        _key: val,
                        value: val,
                        selected: _this.value === val.toString(),
                    }, val));
            }), true)),
        ]);
    };
    SelectFilter.prototype.getFilter = function () {
        return this.toHTML();
    };
    SelectFilter.prototype.setValue = function (value, silent) {
        var _a;
        this.value = value || "";
        this.events.fire(types_1.HeaderFilterEvent.change, [value]);
        (_a = this.config.events) === null || _a === void 0 ? void 0 : _a.fire(types_1.GridEvents.filterChange, [
            this.value,
            this.column.id,
            "selectFilter",
            silent,
        ]);
    };
    SelectFilter.prototype.clear = function (silent) {
        this.setValue("", silent);
    };
    SelectFilter.prototype.focus = function () {
        var _a, _b, _c, _d;
        this._isFocused = true;
        var filterEl = (_d = (_c = (_b = (_a = this.config.events) === null || _a === void 0 ? void 0 : _a.context) === null || _b === void 0 ? void 0 : _b.getRootView()) === null || _c === void 0 ? void 0 : _c.refs["".concat(this.column.id, "_filter")]) === null || _d === void 0 ? void 0 : _d.el;
        if (filterEl) {
            filterEl.focus();
        }
    };
    SelectFilter.prototype.blur = function () {
        var _a, _b, _c, _d;
        this._isFocused = false;
        var filterEl = (_d = (_c = (_b = (_a = this.config.events) === null || _a === void 0 ? void 0 : _a.context) === null || _b === void 0 ? void 0 : _b.getRootView()) === null || _c === void 0 ? void 0 : _c.refs["".concat(this.column.id, "_filter")]) === null || _d === void 0 ? void 0 : _d.el;
        if (filterEl) {
            filterEl.blur();
        }
    };
    SelectFilter.prototype.initHandlers = function () {
        var _this = this;
        var _a, _b, _c;
        this._handlers = {
            onchange: function (e) {
                var _a, _b, _c, _d;
                var value = ((_a = e.target) === null || _a === void 0 ? void 0 : _a.value) || ((_c = (_b = e.composedPath()) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.value) || ((_d = e.explicitOriginalTarget) === null || _d === void 0 ? void 0 : _d.value);
                _this.setValue(value);
            },
            onfocus: function () {
                _this._isFocused = true;
            },
            onblur: function () {
                _this._isFocused = false;
            },
        };
        (_a = this.config.events) === null || _a === void 0 ? void 0 : _a.on(types_1.GridEvents.scroll, function () {
            var _a, _b, _c, _d;
            var filterEl = (_d = (_c = (_b = (_a = _this.config.events) === null || _a === void 0 ? void 0 : _a.context) === null || _b === void 0 ? void 0 : _b.getRootView()) === null || _c === void 0 ? void 0 : _c.refs["".concat(_this.column.id, "_filter")]) === null || _d === void 0 ? void 0 : _d.el;
            if (_this._isFocused && filterEl) {
                (0, dom_1.awaitRedraw)().then(function () {
                    filterEl.focus();
                });
            }
        });
        (_b = this.config.events) === null || _b === void 0 ? void 0 : _b.on(types_1.GridEvents.headerCellMouseDown, function (cell, col) {
            if (col.id !== _this.column.id)
                _this.blur();
        });
        (_c = this.config.events) === null || _c === void 0 ? void 0 : _c.on(types_1.GridEvents.cellMouseDown, function () { return _this.blur(); });
    };
    return SelectFilter;
}());
exports.SelectFilter = SelectFilter;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InputFilter = void 0;
var dom_1 = __webpack_require__(1);
var events_1 = __webpack_require__(4);
var types_1 = __webpack_require__(3);
var InputFilter = /** @class */ (function () {
    function InputFilter(column, config, id, value) {
        this.events = new events_1.EventSystem();
        this.column = column;
        this.config = config;
        this.id = id;
        this.value = value || "";
        this.initHandlers();
        this.toHTML();
    }
    InputFilter.prototype.toHTML = function () {
        return (0, dom_1.el)("div.dhx_grid-filter__label.dxi.dxi-magnify", { "aria-label": "Type to search", _ref: "".concat(this.column.id, "_filter") }, [
            (0, dom_1.el)("label", {
                style: {
                    display: "none",
                },
                "aria-label": "Type to search",
                for: this.id,
            }, "Type to search"),
            (0, dom_1.el)("input", {
                type: "text",
                class: "dhx_input dhx_grid-filter",
                oninput: this._handlers.onchange,
                onfocus: this._handlers.onfocus,
                onblur: this._handlers.onblur,
                _key: this.column.id,
                id: this.id,
                value: this.value,
            }),
        ]);
    };
    InputFilter.prototype.getFilter = function () {
        return this.toHTML();
    };
    InputFilter.prototype.setValue = function (value, silent) {
        var _a;
        this.value = value || "";
        this.events.fire(types_1.HeaderFilterEvent.change, [this.value]);
        (_a = this.config.events) === null || _a === void 0 ? void 0 : _a.fire(types_1.GridEvents.filterChange, [
            this.value,
            this.column.id,
            "inputFilter",
            silent,
        ]);
    };
    InputFilter.prototype.clear = function (silent) {
        this.setValue("", silent);
    };
    InputFilter.prototype.focus = function () {
        var _a, _b, _c, _d, _e;
        this._isFocused = true;
        var filterEl = (_d = (_c = (_b = (_a = this.config.events) === null || _a === void 0 ? void 0 : _a.context) === null || _b === void 0 ? void 0 : _b.getRootView()) === null || _c === void 0 ? void 0 : _c.refs["".concat(this.column.id, "_filter")]) === null || _d === void 0 ? void 0 : _d.el;
        if (filterEl) {
            (_e = filterEl.querySelector("input")) === null || _e === void 0 ? void 0 : _e.focus();
        }
    };
    InputFilter.prototype.blur = function () {
        var _a, _b, _c, _d, _e;
        this._isFocused = false;
        var filterEl = (_d = (_c = (_b = (_a = this.config.events) === null || _a === void 0 ? void 0 : _a.context) === null || _b === void 0 ? void 0 : _b.getRootView()) === null || _c === void 0 ? void 0 : _c.refs["".concat(this.column.id, "_filter")]) === null || _d === void 0 ? void 0 : _d.el;
        if (filterEl) {
            (_e = filterEl.querySelector("input")) === null || _e === void 0 ? void 0 : _e.blur();
        }
    };
    InputFilter.prototype.initHandlers = function () {
        var _this = this;
        var _a, _b, _c;
        this._handlers = {
            onchange: function (e) {
                var _a, _b, _c, _d;
                var value = ((_a = e.target) === null || _a === void 0 ? void 0 : _a.value) || ((_c = (_b = e.composedPath()) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.value) || ((_d = e.explicitOriginalTarget) === null || _d === void 0 ? void 0 : _d.value);
                if (_this._inputDelay) {
                    clearTimeout(_this._inputDelay);
                }
                _this._inputDelay = setTimeout(function () { return _this.setValue(value); }, 500);
            },
            onfocus: function () {
                _this._isFocused = true;
            },
            onblur: function () {
                _this._isFocused = false;
            },
        };
        (_a = this.config.events) === null || _a === void 0 ? void 0 : _a.on(types_1.GridEvents.scroll, function () {
            var _a, _b, _c, _d;
            var filterEl = (_d = (_c = (_b = (_a = _this.config.events) === null || _a === void 0 ? void 0 : _a.context) === null || _b === void 0 ? void 0 : _b.getRootView()) === null || _c === void 0 ? void 0 : _c.refs["".concat(_this.column.id, "_filter")]) === null || _d === void 0 ? void 0 : _d.el;
            if (_this._isFocused && filterEl) {
                (0, dom_1.awaitRedraw)().then(function () {
                    var _a;
                    (_a = filterEl.querySelector("input")) === null || _a === void 0 ? void 0 : _a.focus();
                });
            }
        });
        (_b = this.config.events) === null || _b === void 0 ? void 0 : _b.on(types_1.GridEvents.headerCellMouseDown, function (cell, col) {
            if (col.id !== _this.column.id)
                _this.blur();
        });
        (_c = this.config.events) === null || _c === void 0 ? void 0 : _c.on(types_1.GridEvents.cellMouseDown, function () { return _this.blur(); });
    };
    return InputFilter;
}());
exports.InputFilter = InputFilter;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startResize = void 0;
var core_1 = __webpack_require__(0);
var types_1 = __webpack_require__(3);
var common_1 = __webpack_require__(11);
function startResize(grid, column, ev, cb) {
    var _a;
    var rightSplit = grid.config.rightSplit;
    ev.targetTouches && ev.preventDefault();
    var initX = ev.targetTouches ? ev.targetTouches[0].clientX : ev.clientX;
    var columns = grid.config.columns.filter(function (col) { return !col.hidden; });
    var rightFixedColsIds = rightSplit ? columns.slice(-rightSplit).map(function (c) { return c.id; }) : [];
    var customScroll = !!((_a = grid.scrollView) === null || _a === void 0 ? void 0 : _a.config.enable);
    var xInitScrollBarState = rightSplit ? (0, common_1.calcScrollBarWidth)(grid.config, customScroll).xState : null;
    var initWidth = 0;
    grid.config.$resizing = column;
    var moveHandler = function (e) {
        var _a;
        var i = (0, core_1.findIndex)(columns, function (obj) {
            return obj.id === column;
        });
        var currentX = e.targetTouches ? e.targetTouches[0].clientX : e.clientX;
        var containerLeft = currentX - grid.getRootNode().getBoundingClientRect().left;
        var scrollBarWidth = (0, common_1.calcScrollBarWidth)(grid.config, customScroll);
        if ((grid.config.leftSplit === i + 1 && containerLeft >= grid.config.$width - scrollBarWidth.y - 2) ||
            (rightSplit &&
                rightFixedColsIds.includes(column) &&
                scrollBarWidth.xState !== xInitScrollBarState)) {
            return;
        }
        initWidth = initWidth || columns[i].$width;
        var minColumnWidth = 40;
        if (typeof grid.data.getMaxLevel === "function" && i === 0) {
            minColumnWidth *= grid.data.getMaxLevel();
        }
        var minWidth = columns[i].minWidth || minColumnWidth;
        var maxWidth = columns[i].maxWidth;
        var move = currentX - initX;
        var cols = __spreadArray([], columns, true);
        var size = initWidth + (xInitScrollBarState && rightFixedColsIds.includes(column) ? -move : move);
        var final;
        if ((maxWidth && size >= maxWidth) || size <= minWidth) {
            if (size <= minWidth) {
                final = minWidth;
            }
            if (size >= maxWidth) {
                final = maxWidth;
            }
        }
        else {
            final = size;
        }
        cols[i].$width = final;
        for (var index = 0; index < cols.length; index++) {
            var adjust = (_a = cols[index].adjust) !== null && _a !== void 0 ? _a : grid.config.adjust;
            if (!adjust) {
                cols[index].$fixedWidth = index <= i;
            }
        }
        grid.events.fire(types_1.GridEvents.resize, [columns[i], e]);
        grid.paint();
    };
    var upHandler = function () {
        if (!ev.targetTouches) {
            document.removeEventListener("mousemove", moveHandler);
            document.removeEventListener("mouseup", upHandler);
        }
        else {
            document.removeEventListener("touchmove", moveHandler);
            document.removeEventListener("touchend", upHandler);
        }
        cb();
    };
    if (!ev.targetTouches) {
        document.addEventListener("mousemove", moveHandler);
        document.addEventListener("mouseup", upHandler);
    }
    else {
        document.addEventListener("touchmove", moveHandler);
        document.addEventListener("touchend", upHandler);
    }
    grid.paint();
}
exports.startResize = startResize;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKeysHandlers = exports.selectionMove = void 0;
var types_1 = __webpack_require__(3);
var html_1 = __webpack_require__(2);
var cells_1 = __webpack_require__(15);
var getClosestTop = function (id, data) {
    var index = data.getIndex(id);
    var parent = data.getParent(id);
    if (index > 0) {
        var children = data.getItems(parent);
        var current = children[index - 1];
        if (!data.haveItems(current.id) || !current.$opened) {
            return current.id;
        }
        while (data.haveItems(current.id) && current.$opened) {
            var allChildren = data.getItems(current.id);
            current = allChildren[allChildren.length - 1];
        }
        return current.id;
    }
    else {
        if (parent === data.getRoot()) {
            return null;
        }
        return parent;
    }
};
var getClosestBottom = function (id, data, ignore) {
    if (ignore === void 0) { ignore = false; }
    var item = data.getItem(id);
    var haveItems = data.haveItems(id);
    if (haveItems && item.$opened && !ignore) {
        return data.getItems(id)[0].id;
    }
    else {
        var parent_1 = data.getParent(id);
        var children = data.getItems(parent_1);
        var index = children.findIndex(function (child) { return child.id === id; });
        var len = children.length;
        if (index + 1 < len) {
            return children[index + 1].id;
        }
        else {
            if (parent_1 === data.getRoot()) {
                return null;
            }
            return getClosestBottom(parent_1, data, true);
        }
    }
};
var getLastChild = function (id, data, deep) {
    if (deep === void 0) { deep = true; }
    var item = data.getItem(id);
    while (item && item.$opened && data.haveItems(id)) {
        var items = data.getItems(id);
        id = items[items.length - 1].id;
        if (!deep)
            break;
        item = data.getItem(id);
    }
    return item ? id : null;
};
function selectionMove(e, grid, dir, range, toEnd, ctrlUp, shiftUp) {
    if (toEnd === void 0) { toEnd = false; }
    if (ctrlUp === void 0) { ctrlUp = false; }
    if (shiftUp === void 0) { shiftUp = false; }
    if (grid.config.$editable || !grid.config.selection || (0, html_1.locateNodeByClassName)(e, "dhx_grid-header-cell")) {
        return;
    }
    if (e) {
        e.preventDefault();
    }
    var selected = grid.selection.getCell();
    var columns = grid.config.columns.filter(function (col) { return !col.hidden; });
    if (selected) {
        if (dir === "vertical") {
            if (toEnd) {
                var newItem = grid.data.getItem(grid.data.getId(0));
                if (range === 1) {
                    var itemId = grid.data.getId(grid.data.getLength() - 1);
                    if (grid.config.type === "tree") {
                        itemId = getLastChild(itemId, grid.data);
                    }
                    newItem = grid.data.getItem(itemId);
                }
                grid.scrollTo(newItem.id.toString(), selected.column.id.toString());
                grid.selection.setCell(newItem.id, selected.column.id, ctrlUp, shiftUp);
            }
            else {
                var newItem = null;
                if (grid.config.type === "tree") {
                    newItem = grid.data.getItem(range < 0
                        ? getClosestTop(selected.row.id, grid.data)
                        : getClosestBottom(selected.row.id, grid.data));
                }
                else {
                    var index = grid.data.getIndex(selected.row.id.toString());
                    if (index + range >= 0 && index + range < grid.data.getLength()) {
                        newItem = grid.data.getItem(grid.data.getId(index + range));
                    }
                }
                if (newItem) {
                    grid.scrollTo(newItem.id.toString(), selected.column.id.toString());
                    grid.selection.setCell(newItem.id, selected.column.id, ctrlUp, shiftUp);
                }
            }
        }
        else {
            if (toEnd) {
                var newItem = range === 1 ? columns[columns.length - 1] : columns[0];
                grid.scrollTo(selected.row.id.toString(), newItem.id.toString());
                grid.selection.setCell(selected.row.id, newItem.id, ctrlUp, shiftUp);
            }
            else {
                var index = columns.indexOf(selected.column);
                if (index + range >= 0 && index + range < columns.length) {
                    grid.scrollTo(selected.row.id.toString(), columns[index + range].id.toString());
                    grid.selection.setCell(selected.row.id, columns[index + range].id, ctrlUp, shiftUp);
                }
            }
        }
    }
}
exports.selectionMove = selectionMove;
function getRange(grid, direction) {
    var _a, _b;
    var selectedCell = grid.selection.getCell();
    var span = selectedCell && grid.getSpan(selectedCell.row.id, selectedCell.column.id);
    if (span) {
        if (direction === "up" || direction === "down") {
            var spanIndex = (_a = grid.config.data) === null || _a === void 0 ? void 0 : _a.findIndex(function (item) { return item.id === span.row; });
            var cellIndex = (_b = grid.config.data) === null || _b === void 0 ? void 0 : _b.findIndex(function (item) { return item.id === selectedCell.row.id; });
            if (direction === "up")
                return spanIndex - cellIndex - 1;
            else
                return spanIndex + (span.rowspan || 1) - cellIndex;
        }
        else {
            var columns = grid.config.columns.filter(function (col) { return !col.hidden; });
            var spanIndex = columns.findIndex(function (item) { return item.id === span.column; });
            var cellIndex = columns.findIndex(function (item) { return item.id === selectedCell.column.id; });
            if (direction === "left")
                return spanIndex - cellIndex - 1;
            else
                return spanIndex + (span.colspan || 1) - cellIndex;
        }
    }
    else {
        if (direction === "down" || direction === "right")
            return 1;
        else
            return -1;
    }
}
function getKeysHandlers(grid) {
    var _a, _b, _c;
    var cellSelection = grid.config.selection === "cell" ||
        grid.config.selection === "complex" ||
        grid.config.selection === true;
    var gridBodyHandlers = {};
    if (grid.getRootView()) {
        var gridBody_1 = (_c = (_b = (_a = grid.getRootView()) === null || _a === void 0 ? void 0 : _a.refs) === null || _b === void 0 ? void 0 : _b.grid_body) === null || _c === void 0 ? void 0 : _c.el;
        if (!gridBody_1) {
            return;
        }
        gridBodyHandlers = {
            pageUp: function (e) {
                e.preventDefault();
                gridBody_1.scrollTop -= gridBody_1.clientHeight;
            },
            pageDown: function (e) {
                e.preventDefault();
                gridBody_1.scrollTop += gridBody_1.clientHeight;
            },
            home: function (e) {
                e.preventDefault();
                gridBody_1.scrollTop = 0;
            },
            end: function (e) {
                e.preventDefault();
                gridBody_1.scrollTop += gridBody_1.scrollHeight;
            },
        };
    }
    return __assign({ enter: function () {
            if (cellSelection) {
                var selected = (0, cells_1.normalizeCell)(grid.selection.getCell(), grid);
                if (selected &&
                    ((selected.column.editable !== false && grid.config.editable) || selected.column.editable)) {
                    if (!grid.config.$editable) {
                        if (selected.column.type === "boolean") {
                            if (!grid.events.fire(types_1.GridEvents.beforeEditStart, [
                                selected.row,
                                selected.column,
                                "checkbox",
                            ]))
                                return;
                            grid.events.fire(types_1.GridEvents.afterEditStart, [
                                selected.row,
                                selected.column,
                                "checkbox",
                            ]);
                            if (!grid.events.fire(types_1.GridEvents.beforeEditEnd, [
                                !selected.row[selected.column.id],
                                selected.row,
                                selected.column,
                            ]))
                                return;
                            grid.events.fire(types_1.GridEvents.afterEditEnd, [
                                !selected.row[selected.column.id],
                                selected.row,
                                selected.column,
                            ]);
                        }
                        else {
                            grid.editCell(selected.row.id, selected.column.id, selected.column.editorType);
                        }
                    }
                    else {
                        grid.editEnd();
                    }
                }
            }
            else {
                if (grid.config.$editable) {
                    grid.editEnd();
                }
            }
        }, space: function (e) {
            var _a;
            var selected = (0, cells_1.normalizeCell)(grid.selection.getCell(), grid);
            if (cellSelection &&
                ((_a = selected === null || selected === void 0 ? void 0 : selected.column.editable) !== null && _a !== void 0 ? _a : grid.config.editable) &&
                !grid.config.$editable) {
                if (selected && selected.column.type === "boolean") {
                    e.preventDefault();
                    if (!grid.events.fire(types_1.GridEvents.beforeEditStart, [
                        selected.row,
                        selected.column,
                        "checkbox",
                    ]))
                        return;
                    grid.events.fire(types_1.GridEvents.afterEditStart, [selected.row, selected.column, "checkbox"]);
                    if (!grid.events.fire(types_1.GridEvents.beforeEditEnd, [
                        !selected.row[selected.column.id],
                        selected.row,
                        selected.column,
                    ]))
                        return;
                    grid.events.fire(types_1.GridEvents.afterEditEnd, [
                        !selected.row[selected.column.id],
                        selected.row,
                        selected.column,
                    ]);
                }
            }
        }, escape: function () {
            if (grid.config.$editable) {
                grid.editEnd(true);
            }
        }, tab: function (e) {
            if (!grid.config.selection || (0, html_1.locateNodeByClassName)(e, "dhx_grid-header-cell")) {
                return;
            }
            if (grid.config.$editable) {
                grid.editEnd();
            }
            var selected = grid.selection.getCell();
            var columns = grid.config.columns.filter(function (col) { return !col.hidden; });
            if (selected) {
                var index = columns.indexOf(selected.column) + getRange(grid, "right");
                if (index >= 0 && index < columns.length) {
                    e && e.preventDefault();
                    grid.scrollTo(selected.row.id.toString(), columns[index].id.toString());
                    grid.selection.setCell(selected.row.id, columns[index].id);
                }
                else if (index >= 0) {
                    var newLineIndex = grid.data.getIndex(selected.row.id.toString()) + 1;
                    if (newLineIndex < grid.data.getLength()) {
                        e && e.preventDefault();
                        grid.scrollTo(grid.data.getId(newLineIndex).toString(), columns[0].id.toString());
                        grid.selection.setCell(grid.data.getId(newLineIndex), columns[0].id);
                    }
                }
            }
        }, "shift+tab": function (e) {
            if (!grid.config.selection || (0, html_1.locateNodeByClassName)(e, "dhx_grid-header-cell")) {
                return;
            }
            if (grid.config.$editable) {
                grid.editEnd();
            }
            var selected = grid.selection.getCell();
            var columns = grid.config.columns.filter(function (col) { return !col.hidden; });
            if (selected) {
                var index = columns.indexOf(selected.column) + getRange(grid, "left");
                if (index >= 0 && index < columns.length) {
                    e && e.preventDefault();
                    grid.scrollTo(selected.row.id.toString(), columns[index].id.toString());
                    grid.selection.setCell(selected.row.id, columns[index].id);
                }
                else if (index < grid.data.getLength()) {
                    var newLineIndex = grid.data.getIndex(selected.row.id.toString()) - 1;
                    if (newLineIndex >= 0) {
                        e && e.preventDefault();
                        grid.scrollTo(grid.data.getId(newLineIndex).toString(), columns[columns.length - 1].id.toString());
                        grid.selection.setCell(grid.data.getId(newLineIndex), columns[columns.length - 1].id);
                    }
                }
            }
        }, arrowUp: function (e) {
            selectionMove(e, grid, "vertical", getRange(grid, "up"));
        }, "ctrl+enter": function () {
            if (grid.config.type !== "tree") {
                return;
            }
            var selected = (0, cells_1.normalizeCell)(grid.selection.getCell(), grid);
            if (selected.row.$opened) {
                grid.collapse(selected.row.id);
            }
            else {
                grid.expand(selected.row.id);
            }
        }, "ctrl+arrowUp": function (e) {
            selectionMove(e, grid, "vertical", -1, true);
        }, "shift+arrowUp": function (e) {
            if (grid.config.multiselection) {
                selectionMove(e, grid, "vertical", -1, false, false, true);
            }
        }, "ctrl+shift+arrowUp": function (e) {
            if (grid.config.multiselection) {
                selectionMove(e, grid, "vertical", -1, true, false, true);
            }
        }, arrowDown: function (e) {
            selectionMove(e, grid, "vertical", getRange(grid, "down"));
        }, "ctrl+arrowDown": function (e) {
            selectionMove(e, grid, "vertical", 1, true);
        }, "shift+arrowDown": function (e) {
            if (grid.config.multiselection) {
                selectionMove(e, grid, "vertical", 1, false, false, true);
            }
        }, "ctrl+shift+arrowDown": function (e) {
            if (grid.config.multiselection) {
                selectionMove(e, grid, "vertical", 1, true, false, true);
            }
        }, arrowRight: function (e) {
            selectionMove(e, grid, "horizontal", getRange(grid, "right"));
        }, "ctrl+arrowRight": function (e) {
            selectionMove(e, grid, "horizontal", 1, true);
        }, "shift+arrowRight": function (e) {
            if (grid.config.multiselection) {
                selectionMove(e, grid, "horizontal", 1, false, false, true);
            }
        }, "ctrl+shift+arrowRight": function (e) {
            if (grid.config.multiselection) {
                selectionMove(e, grid, "horizontal", 1, true, false, true);
            }
        }, arrowLeft: function (e) {
            selectionMove(e, grid, "horizontal", getRange(grid, "left"));
        }, "ctrl+arrowLeft": function (e) {
            selectionMove(e, grid, "horizontal", -1, true);
        }, "shift+arrowLeft": function (e) {
            if (grid.config.multiselection) {
                selectionMove(e, grid, "horizontal", -1, false, false, true);
            }
        }, "ctrl+shift+arrowLeft": function (e) {
            if (grid.config.multiselection) {
                selectionMove(e, grid, "horizontal", -1, true, false, true);
            }
        } }, gridBodyHandlers);
}
exports.getKeysHandlers = getKeysHandlers;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setLocale = void 0;
function setLocale(component, value) {
    var target = this[component];
    if (!target)
        return;
    for (var key in value) {
        target[key] = value[key];
    }
}
exports.setLocale = setLocale;
;


/***/ })
/******/ ]);
});if (window.dhx_legacy) { 
					if (window.dhx){
						for (var key in dhx)
							if (key === 'i18n') {
								for (var lang in dhx[key])
									window.dhx_legacy[key][lang] = dhx[key][lang];
							} else {
								dhx_legacy[key] = dhx[key];
							}
					}
					window.dhx = dhx_legacy; delete window.dhx_legacy;
				}
//# sourceMappingURL=grid.js.map













function updatinggrid(rowID, forecastingtotal){
    

        var id = grid.data.getId(rowID*1)
        grid.data.update(id, {"Total": forecastingtotal});
        grid.events.fire("afterEditEnd", [rowID, forecastingtotal, "Total"]);
        


}








function firebaseadapter (){

    const firebaseConfig = {
        apiKey: "AIzaSyByY_StlwAyml1ZzhTjT9hxAZJIEUpYOYI",
        authDomain: "fir-slickgrid-app.firebaseapp.com",
        databaseURL: "https://fir-slickgrid-app-default-rtdb.firebaseio.com",
        projectId: "fir-slickgrid-app",
        storageBucket: "fir-slickgrid-app.firebasestorage.app",
        messagingSenderId: "632345189503",
        appId: "1:632345189503:web:5ea427e9d8ce2ea5cc734a"
      };
    
    
    const app = firebase.initializeApp(firebaseConfig);
    const database = firebase.database();
    
    
    const dbRef = database.ref("tasks");
    
    
    
     
      // FirebaseDataAdapter class
      class FirebaseDataAdapter {
        constructor(grid, dbRef) {
          this.grid = grid;
          this.dbRef = dbRef;
          this.database = database;
          this.data = [];
        }
      
        loadData() {
          const self = this;
         
          
    
          this.dbRef.on('value',(snapshot) => {
              if (snapshot.exists()) {
                  self.data = [];
            snapshot.forEach((childSnapshot) => {

              const item = childSnapshot.val();
              console.log("The item", item);
              item.id = childSnapshot.key;

              console.log("The item.id", item.id);
    

              self.data.push(item);
            });
    
            self.updateGrid();
            
          } } );
    
          };
    
      
        updateGrid() {

            const editieddata = this.data;
            function fillMissingFCValues(editieddata) {
                const monthKeys = [
                  "Jan_FC", "Feb_FC", "Mar_FC", "Apr_FC", "May_FC", "Jun_FC",
                  "Jul_FC", "Aug_FC", "Sep_FC", "Oct_FC", "Nov_FC", "Dec_FC", "Allocated_budget","Spent"
                ];


              
                for (const item of editieddata) {
                  for (const key of monthKeys) {
                    // Check if the key exists.  If it doesn't exist, *add* it and set it to 0.
                    if (!item.hasOwnProperty(key)) {
                      item[key] = 0;
                    } else {
                      // If the key *does* exist, check for undefined/null/empty and convert to Number.
                      if (item[key] === undefined || item[key] === null || item[key] === "" || item[key] === " ") {
                        item[key] = 0;
                      }
                      if (typeof item[key] === 'string') {
                        item[key] = Number(item[key]);
                      }
                    }
                  }
                }
                for (const item of editieddata){
                    item[Total]=   Jan_FC + Feb_FC + Mar_FC + Apr_FC + May_FC + Jun_FC + Jul_FC + Aug_FC + Sep_FC + Oct_FC + Nov_FC + Dec_FC;

                }


                return editieddata;
              }
              fillMissingFCValues(editieddata);

         
         
          //grid.data.parse(this.data);
          grid.data.parse(editieddata);
        };
      
      
      
      
      
      // Problem
        addData(item) {
          const newItemRef = dbRef.forEach(item);
          set(dpRef, item);
        }
      // Problem
        updateData(keyName,rowData,theChange) {
          var item = serializeData(rowData);
          var keyNameValue = keyName.id;
          var theChangeObject = {};
          theChangeObject[keyNameValue] = theChange;
          console.log(theChangeObject);
          this.database.ref("tasks/"+item.id).update(theChangeObject);
          //update(ref(this.database,"tasks/"+item.id),theChangeObject);
      
                    }
      // Problem
        deleteData(itemId) {
          const itemRef = this.dbRef(this.dbRef, itemId);
          remove(itemRef);
        }
      }
      
      // Create adapter instance
      const adapter = new FirebaseDataAdapter(grid, dbRef);
      
      // Load data from Firebase
      adapter.loadData();
      
      // Bind grid events
      grid.events.on("aftereditend", function (value, rowId, columnId) {
        const rowData = rowId;
        const keyName = columnId;
        const theChange = value;
        adapter.updateData(keyName,rowData,theChange);
      });

      
      grid.events.on("onafterrowdeleted", function (rowId) {
        adapter.deleteData(rowId);
        return true;
      });	
      
      
      
      function serializeData(item, unserilize) {
          var parsedData = {};
          for(var property in item) {
              if(property.charAt(0) == "$")
                  continue;
      
              parsedData[property] = item[property].valueOf();
      
              if(property == "id")
                  parsedData[property] = parsedData[property].toString();
      
              if(unserilize && (property == "start_date" || property == "end_date"))
                  parsedData[property] = new Date(parsedData[property]);
          }
      
          return parsedData;
      }
      


};  
     
























var colmundeclaration = {
            id : id = { width: 150, id: "id", header: [{ text: "id" }], hidden: true },


            taskid : taskid = { width: 150, id: "task_id", header: [{ text: "task_id" }], hidden: true },


            type : type = { width: 150, id: "type", header: [{ text: "type" }], hidden: true },
            
            
            parent : parent = { width: 150, id: "parent", header: [{ text: "Parent" }],hidden: true },


            wbscode : wbscode = { width: 150, id: "WBS_Code", header: [{ text: "WBS" }, { content: "inputFilter"}] , adjust: "data" },
            
            
            task : task = { width: 380, id: "text", header: [{ text: "Tasks" }, { content: "inputFilter" }] },


            priority : priority = { width: 150, id: "priority", header: [{ text: "Priority" }, { content: "comboFilter" }], adjust: "data", editorType: "combobox", options: ["High", "Mid", "Low"] },
            
            
            progress : progress = { width: 50, id: "progress", header: [{ text: "Pro" }],editable: false,template: (value) => {
                return Math.round(value * 100) +"%" ;
            } },
            
            
            status : statusdec = { width: 120, id: "status", header: [{ text: "Status" }, { content: "comboFilter", filterConfig: { multiselection: true } }],editorType: "combobox", editorConfig: {
                newOptions: true,
                template: ({ value }) => getPriorityTemplate(value),
            }, options: ["Not Started", "In Progress", "Done", "Canceled" ] , template: value => getPriorityTemplate(value),
            htmlEnable: true,
            },


            startdate : startdate = { width: 150, id: "start_date", header: [{ text: "Start Date" }, { content: "inputFilter" }], editable: false, type: "date",dateFormat: "%Y-%m-%d %H:%i", editorConfig: {
                weekStart: "sunday", // "saturday" | "sunday" | "monday"
                weekNumbers: true,
                mode: "calendar", // "calendar" | "year" | "month" | "timepicker"
                timePicker: true,
                timeFormat: 24, // 24 | 12
                thisMonthOnly: false,
                // marked dates
                mark: (date) => {
                    if (date.getDay() === 5)  return "highlight-date";
                },
                 },
                 template: (value) => {
                    intdate = new Date(value);
                    var year = intdate.getFullYear();
                    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                    var month = months[intdate.getMonth()];
                    var date = intdate.getDate();
                    var time = date + ' ' + month + ' ' + year;
                    return time;
                } 

                },


            enddate : enddate = { width: 150, id: "end_date", header: [{ text: "End Date" }, { content: "inputFilter" }], editable: false, type: "date",dateFormat: "%Y-%m-%d %H:%i", editorConfig: {
          weekStart: "sunday", // "saturday" | "sunday" | "monday"
          weekNumbers: true,
          mode: "calendar", // "calendar" | "year" | "month" | "timepicker"
          timePicker: true,
          timeFormat: 24, // 24 | 12
          thisMonthOnly: false,
          // marked dates
          mark: (date) => {
              if (date.getDay() === 5)  return "highlight-date";
          },
           },
           template: (value) => {
            intdate = new Date(value);
            var year = intdate.getFullYear();
            var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            var month = months[intdate.getMonth()];
            var date = intdate.getDate();
            var time = date + ' ' + month + ' ' + year;
            return time;
        } 

          },

          duration : duration = { width: 150, id: "duration", header: [{ text: "Duration" }, { content: "inputFilter" }],editable: false, adjust: "data" },
            
          
          public_comments : public_comments = { width: 150, id: "public_comments", header: [{ text: "Public Comments" }, { content: "inputFilter" }], },
          
          
          private_comments : private_comments = { width: 150, id: "private_comments", header: [{ text: "Private Comments" }, { content: "inputFilter" }], },
          
          
          notes : notes = { width: 150, id: "notes", header: [{ text: "Notes" }, { content: "inputFilter" }]},










// Performance Start

          implemented_start: implemented_start = { width: 150, id: "implemented_start", header: [{ text: "Implementation Start Date" }, { content: "inputFilter" }], editable: false, type: "date",dateFormat: "%Y-%m-%d %H:%i", editorConfig: {
            weekStart: "sunday", // "saturday" | "sunday" | "monday"
            weekNumbers: true,
            mode: "calendar", // "calendar" | "year" | "month" | "timepicker"
            timePicker: true,
            timeFormat: 24, // 24 | 12
            thisMonthOnly: false,
            // marked dates
            mark: (date) => {
                if (date.getDay() === 5)  return "highlight-date";
            },
        },
        template: (value) => {
           if (value === undefined){

            return value = ""; 
           }else {

           intdate = new Date(value);
           var year = intdate.getFullYear();
           var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
           var month = months[intdate.getMonth()];
           var date = intdate.getDate();
           var time = date + ' ' + month + ' ' + year;
           return time;}
       } 

            },

            implemented_end: implemented_end = { width: 150, id: "implemented_end", header: [{ text: "Implementation End Date" }, { content: "inputFilter" }], editable: false, type: "date",dateFormat: "%Y-%m-%d %H:%i", editorConfig: {
                weekStart: "sunday", // "saturday" | "sunday" | "monday"
                weekNumbers: true,
                mode: "calendar", // "calendar" | "year" | "month" | "timepicker"
                timePicker: true,
                timeFormat: 24, // 24 | 12
                thisMonthOnly: false,
                // marked dates
                mark: (date) => {
                    if (date.getDay() === 5)  return "highlight-date";
                },
                 },
                 template: (value) => {
                    if (value === undefined){

                     return value = ""; 
                    }else {

                    intdate = new Date(value);
                    var year = intdate.getFullYear();
                    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                    var month = months[intdate.getMonth()];
                    var date = intdate.getDate();
                    var time = date + ' ' + month + ' ' + year;
                    return time;}
                } 
    
                },

            implmentaion_status: implmentaion_status = { width: 120, id: "implmentaion_status", header: [{ text: "Implmentaion Status" }, { content: "comboFilter", filterConfig: { multiselection: true } }],editorType: "combobox", editorConfig: {
                newOptions: true,
                template: ({ value }) => getPriorityTemplate(value),
            }, options: ["Not Started", "In Progress", "Done", "Canceled" ] , template: value => getPriorityTemplate(value),
            htmlEnable: true,
            },

            implmentation_notes: implmentation_notes = { width: 150, id: "implmentation_notes", header: [{ text: "Implmentation notes" }, { content: "inputFilter" }], },


            workers: workers = { width: 150, id: "workers", header: [{ text: "Workers" }, { content: "inputFilter" }], },


            challenges: challenges = { width: 150, id: "challenges", header: [{ text: "Challenges" }, { content: "inputFilter" }], },


            remarkable: remarkable = { width: 150, id: "remarkable", header: [{ text: "Remarkable" }, { content: "inputFilter" }], },


            label: label = { width: 150, id: "label", header: [{ text: "Label" }, { content: "inputFilter" }], },

// Performance End



//Documentation Start

required_files : required_files = { width: 150, id: "required_files", header: [{ text: "RequiredFiles" }, { content: "inputFilter" }], },


gathering_status : gathering_status = { width: 120, id: "gathering_status", header: [{ text: "Gathering Status" }, { content: "comboFilter", filterConfig: { multiselection: true } }],editorType: "combobox", editorConfig: {
    newOptions: true,
    template: ({ value }) => getPriorityTemplate(value),
}, options: ["Not Started", "In Progress", "Done"] , template: value => getPriorityTemplate(value),
htmlEnable: true,
},


ungathered_documents : ungathered_documents = { width: 150, id: "ungathered_documents", header: [{ text: "Ungathered Documents" }, { content: "inputFilter" }], },


archeived_status : archeived_status = { width: 120, id: "archeived_status", header: [{ text: "Archeived Status" }, { content: "comboFilter", filterConfig: { multiselection: true } }],editorType: "combobox", editorConfig: {
    newOptions: true,
    template: ({ value }) => getPriorityTemplate(value),
}, options: ["Not Started", "In Progress", "Done"] , template: value => getPriorityTemplate(value),
htmlEnable: true,
},


documents_paths : documents_paths = { width: 150, id: "documents_paths", header: [{ text: "Documents Paths" }, { content: "inputFilter" }], },


documentation_notes : documentation_notes = { width: 150, id: "documentation_notes", header: [{ text: "Documentation Notes" }, { content: "inputFilter" }], },


//Documentation End





//Finance Start

Budget_Item_Status : Budget_Item_Status = { width: 150, id: "Budget_Item_Status", header: [{ text: "Is Budget Item" }, { content: "comboFilter", filterConfig: { multiselection: true } }],editorType: "combobox", 
options: ["Yes", "No But Included"] ,
htmlEnable: true,
},

Total_Allocated_Budget_Item : Total_Allocated_Budget_Item = { width: 150, id: "Total_Allocated_Budget_Item", type : "number", numberMask: { prefix: "$", maxDecLength: 0 }, header: [{ text: "Total Allocated Budget Item" }, { content: "inputFilter" }],summary: "sum", footer: [{ text: ({ sum }) => "Total " + sum }], },

Fin_Code : Fin_Code = { width: 150, id: "Fin_Code", header: [{ text: "Finance Code" }, { content: "inputFilter" }], },

Item_Name : Item_Name = { width: 150, id: "Item_Name", header: [{ text: "Item Name" }, { content: "inputFilter" }]},

Budget_Item_Name : Budget_Item_Name = { width: 150, id: "Budget_Item_Name", header: [{ text: "Budget Item Name" }, { content: "inputFilter" }]},

Cost_Dollar : Cost_Dollar = { width: 150, id: "Cost_Dollar",type : "number", numberMask: { prefix: "$", maxDecLength: 0 }, header: [{ text: "Cost in Dollar" }, { content: "inputFilter" }],summary: "sum", footer: [{ text: ({ sum }) => "Total " + sum }], },

Cost_Yemeni : Cost_Yemeni = { width: 150, id: "Cost_Yemeni",type : "number", numberMask: { prefix: "YR", maxDecLength: 0 }, header: [{ text: "Cost in Yemeni" }, { content: "inputFilter" }], summary: "sum", footer: [{ text: ({ sum }) => "Total " + sum }], },

Fin_Log_Description : Fin_Log_Description = { width: 150, id: "Fin_Log_Description", header: [{ text: "Fin/Log Description" }, { content: "inputFilter" }], },

PR_Status : PR_Status = { width: 120, id: "PR_Status", header: [{ text: "PR Status" }, { content: "comboFilter", filterConfig: { multiselection: true } }],editorType: "combobox", 
options: ["Not Started", "Prepared", "Submited", "Canceled"] ,
htmlEnable: true,
},

PR_Date : PR_Date = { width: 150, id: "PR_Date", header: [{ text: "PR Submission Date" }, { content: "inputFilter" }], editable: false,
     template: (value) => {
        if (value === undefined){

         return value = " "; 
        }else {

        intdate = new Date(value);
        var year = intdate.getFullYear();
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var month = months[intdate.getMonth()];
        var date = intdate.getDate();
        var time = date + ' ' + month + ' ' + year;
        return time;}
    } 

    },

PO_Status : PO_Status = { width: 120, id: "PO_Status", header: [{ text: "PO Status" }, { content: "comboFilter", filterConfig: { multiselection: true } }],editorType: "combobox", 
options: ["Not Started", "Paid/Deleivered", "Archeived/Done", "Canceled"] ,
htmlEnable: true,
},

PO_Date : PO_Date =  { width: 150, id: "PO_Date", header: [{ text: "PO Date" }, { content: "inputFilter" }], editable: false,
template: (value) => {
   if (value === undefined){

    return value = " "; 
   }else {

   intdate = new Date(value);
   var year = intdate.getFullYear();
   var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
   var month = months[intdate.getMonth()];
   var date = intdate.getDate();
   var time = date + ' ' + month + ' ' + year;
   return time;}
} 

},

Parent_Item : Parent_Item = { width: 150, id: "Parent_Item", header: [{ text: "Parent Item Name" }, { content: "inputFilter" }], },

Allocated_budget : Allocated_budget = { width: 150, id: "Allocated_budget", type : "number", numberMask: { prefix: "$", maxDecLength: 0 },  header: [{ text: "Allocated_budget" }, { content: "inputFilter" }], summary: "sum", footer: [{ text: ({ sum }) => "Total " + sum }], template: (value) => {
    
    if (value === undefined){

        return  "$" + 0;
    }else return   value;
   
    
}},


Spent : Spent = { width: 150, id: "Spent", type : "number", numberMask: { prefix: "$", maxDecLength: 0 },  header: [{ text: "Spent" }, { content: "inputFilter" }], summary: "sum", footer: [{ text: ({ sum }) => "Total " + sum }], template: (value) => {
    

    if (value === undefined){

        return  "$" + 0;
    }else return  value;
}},

The_Balance : The_Balance = { width: 150, id: "The_Balance", type : "number", editable: false,  header: [{ text: "The Balance" }, { content: "inputFilter" }], htmlEnable: true,summary: "sum",  template: (value, {Allocated_budget,Spent}) => {
    
    value = Allocated_budget - Spent;

    if (value === undefined){

        return  0 ;
    }else return getBalanceTemplate(value);

},
footer: [
    { text: '<div class="custom_footer">Total</div>' },
],
  htmlEnable: true   
},

Precentage : Precentage = { width: 150, id: "Precentage",  type : "number", editable: false, header: [{ text: "Precentage" }, { content: "inputFilter" }],htmlEnable: true,  template: (value, {Allocated_budget,Spent}) => {
    
    value = (Spent/Allocated_budget) * 100;
   return value + "%"
}
   
},

Changes_in_Budget : Changes_in_Budget = { width: 150, id: "Changes_in_Budget", header: [{ text: "Changes in Budget" }, { content: "inputFilter" }], },

Jan_FC : Jan_FC = { width: 150, id: "Jan_FC",type : "number", numberMask: { prefix: "$", maxDecLength: 0 }, header: [{ text: "Jan FC" }, { content: "inputFilter" }], footer: [{ text: ({ sum }) => "Total " + sum }], summary: "sum", template: (value) => {
    
    switch(value) {
        case  undefined:
            return  value = 0;
          break;
        case value:
            return value;
          break;

      }
}},

Feb_FC : Feb_FC = { width: 150, id: "Feb_FC",type : "number", numberMask: { prefix: "$", maxDecLength: 0 }, header: [{ text: "Feb FC" }, { content: "inputFilter" }], footer: [{ text: ({ sum }) => "Total " + sum }], summary: "sum", template: (value) => {
    switch(value) {
        case  undefined:
            return  value = 0;
          break;
        case value:
            return value;
          break;

      } 
    
}},

Mar_FC : Mar_FC = { width: 150, id: "Mar_FC",type : "number", numberMask: { prefix: "$", maxDecLength: 0 }, header: [{ text: "Mar FC" }, { content: "inputFilter" }], footer: [{ text: ({ sum }) => "Total " + sum }], summary: "sum", template: (value) => {
    
    switch(value) {
        case  undefined:
            return  value = 0;
          break;
        case value:
            return value;
          break;

      }
    
}},

Apr_FC : Apr_FC = { width: 150, id: "Apr_FC",type : "number", numberMask: { prefix: "$", maxDecLength: 0 }, header: [{ text: "Apr FC" }, { content: "inputFilter" }], footer: [{ text: ({ sum }) => "Total " + sum }], summary: "sum", template: (value) => {
    
    switch(value) {
        case  undefined:
            return  value = 0;
          break;
        case value:
            return value;
          break;

      }
    
}},

May_FC : May_FC = { width: 150, id: "May_FC",type : "number", numberMask: { prefix: "$", maxDecLength: 0 }, header: [{ text: "May FC" }, { content: "inputFilter" }],  footer: [{ text: ({ sum }) => "Total " + sum }], summary: "sum",template: (value) => {
    
    switch(value) {
        case  undefined:
            return  value = 0;
          break;
        case value:
            return value;
          break;

      }
    
}},

Jun_FC : Jun_FC = { width: 150, id: "Jun_FC",type : "number", numberMask: { prefix: "$", maxDecLength: 0 }, header: [{ text: "Jun FC" }, { content: "inputFilter" }], footer: [{ text: ({ sum }) => "Total " + sum }], summary: "sum", template: (value) => {
    
    switch(value) {
        case  undefined:
            return  value = 0;
          break;
        case value:
            return value;
          break;

      }
}},

Jul_FC : Jul_FC = { width: 150, id: "Jul_FC",type : "number", numberMask: { prefix: "$", maxDecLength: 0 }, header: [{ text: "Jul FC" }, { content: "inputFilter" }], footer: [{ text: ({ sum }) => "Total " +  sum }], summary: "sum", template: (value) => {
    
    switch(value) {
        case  undefined:
            return  value = 0;
          break;
        case value:
            return value;
          break;

      }
    
}},

Aug_FC : Aug_FC = { width: 150, id: "Aug_FC",type : "number", numberMask: { prefix: "$", maxDecLength: 0 }, header: [{ text: "Aug FC" }, { content: "inputFilter" }], footer: [{ text: ({ sum }) => "Total " + sum }], summary: "sum", template: (value) => {
    
    switch(value) {
        case  undefined:
            return  value = 0;
          break;
        case value:
            return value;
          break;

      }
}},

Sep_FC : Sep_FC = { width: 150, id: "Sep_FC",type : "number", numberMask: { prefix: "$", maxDecLength: 0 }, header: [{ text: "Sep FC" }, { content: "inputFilter" }], footer: [{ text: ({ sum }) => "Total " + sum }], summary: "sum", template: (value) => {
    
    switch(value) {
        case  undefined:
            return  value = 0;
          break;
        case value:
            return value;
          break;

      }
    
}},

Oct_FC : Oct_FC = { width: 150, id: "Oct_FC",type : "number", numberMask: { prefix: "$", maxDecLength: 0 }, header: [{ text: "Oct FC" }, { content: "inputFilter" }], footer: [{ text: ({ sum }) => "Total " + sum }], summary: "sum", template: (value) => {
    
    switch(value) {
        case  undefined:
            return  value = 0;
          break;
        case value:
            return value;
          break;

      }
    
}},

Nov_FC : Nov_FC = { width: 150, id: "Nov_FC",type : "number", numberMask: { prefix: "$", maxDecLength: 0 }, header: [{ text: "Nov FC" }, { content: "inputFilter" }], footer: [{ text: ({ sum }) => "Total " + sum }], summary: "sum", template: (value) => {
    
    switch(value) {
        case  undefined:
            return  value = 0;
          break;
        case value:
            return value;
          break;

      }
    
}},

Dec_FC : Dec_FC = { width: 150, id: "Dec_FC",type : "number", numberMask: { prefix: "$", maxDecLength: 0 }, header: [{ text: "Dec FC" }, { content: "inputFilter" }], footer: [{ text: ({ sum }) => "Total " + sum }], summary: "sum", template: (value) => {
    

    switch(value) {
        case  undefined:
            return  value = 0;
          break;
        case value:
            return value;
          break;

      }
    
}},

Total : Total = { width: 150, id: "Total", header: [{ text: "Total FC" }, { content: "inputFilter" }], editable: false, type : "number", htmlEnable: true,  template: (value,row) => {
    
    forecastingtotal = row.Jan_FC + row.Feb_FC + row.Mar_FC + row.Apr_FC + row.May_FC + row.Jun_FC + row.Jul_FC + row.Aug_FC + row.Sep_FC + row.Oct_FC + row.Nov_FC + row.Dec_FC;  


          
    if (value === forecastingtotal){
        
        return "$" + value;
    }else { 
    updatinggrid(row.id, forecastingtotal);
    return "Not Equall" + value;

    }
}},

final_remaining : final_remaining = { width: 150, id: "final_remaining", type : "number", editable: false, header: [{ text: "Final Remaining" }, { content: "inputFilter" }],  htmlEnable: true,  template: (value, {Allocated_budget,Jan_FC,Feb_FC,Mar_FC,Apr_FC,May_FC,Jun_FC,Jul_FC,Aug_FC,Sep_FC,Oct_FC,Nov_FC,Dec_FC}) => {
    
    value = Allocated_budget - (Jan_FC + Feb_FC + Mar_FC + Apr_FC + May_FC + Jun_FC + Jul_FC + Aug_FC + Sep_FC + Oct_FC + Nov_FC + Dec_FC);
   return value + "$"
}},

Fin_Notes : Fin_Notes = { width: 150, id: "Fin_Notes", header: [{ text: "Fin/Log Notes" }, { content: "inputFilter" }], },


//Finance End



//MEAL Start


MEAL_Code : MEAL_Code = { width: 150, id: "MEAL_Code", header: [{ text: "MEAL Code" }, { content: "inputFilter" }], },
Indicator : Indicator = { width: 150, id: "Indicator", header: [{ text: "Indicator" }, { content: "inputFilter" }], },
Indictor_Status : Indictor_Status = { width: 120, id: "Indictor_Status", header: [{ text: "Indictor Status" }, { content: "comboFilter", filterConfig: { multiselection: true } }],editorType: "combobox",
    options: ["Not Started", "In Progress", "Achieved"] ,
    htmlEnable: true,
},
Indicator_Definition : Indicator_Definition = { width: 150, id: "Indicator_Definition", header: [{ text: "Indicator Definition" }, { content: "inputFilter" }], },
Unit_of_measurement : Unit_of_measurement = { width: 150, id: "Unit_of_measurement", header: [{ text: "Unit Of Measurement" }, { content: "inputFilter" }], },
Disaggregaation : Disaggregaation = { width: 150, id: "Disaggregaation", header: [{ text: "Disaggregaation" }, { content: "inputFilter" }], },
Achieved : Achieved = { width: 150, id: "Achieved", header: [{ text: "Achieved" }, { content: "inputFilter" }], },
Reporting_Date_Start : Reporting_Date_Start = { width: 150, id: "Reporting_Date_Start", header: [{ text: "Reporting Date Start" }, { content: "inputFilter" }], editable: false,
     template: (value) => {
        if (value === undefined){

         return value = " ";
        }else {

        intdate = new Date(value);
        var year = intdate.getFullYear();
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var month = months[intdate.getMonth()];
        var date = intdate.getDate();
        var time = date + ' ' + month + ' ' + year;
        return time;}
    }

    },
Reporting_Date_End : Reporting_Date_End = { width: 150, id: "Reporting_Date_End", header: [{ text: "Reporting Date End" }, { content: "inputFilter" }], editable: false,
     template: (value) => {
        if (value === undefined){

         return value = " ";
        }else {

        intdate = new Date(value);
        var year = intdate.getFullYear();
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var month = months[intdate.getMonth()];
        var date = intdate.getDate();
        var time = date + ' ' + month + ' ' + year;
        return time;}
    }

    },
Period_Target : Period_Target = { width: 100, id: "Period_Target", header: [{ text: "Period Target" }], css: "dhx-align_right", },
Period_Actual : Period_Actual = { width: 100, id: "Period_Actual", header: [{ text: "Period Actual" }], css: "dhx-align_right", },
Period_Percentage_of_Target : Period_Percentage_of_Target = { width: 120, id: "Period_Precentage_of_Target", header: [{ text: "Period % Of Target" }], css: "dhx-align_right", },
data_collection_methods : data_collection_methods = { width: 200, id: "data_collection_methods", header: [{ text: "Data Collection Methods" }, { content: "inputFilter" }], },
Responsible_of_data_collection : Responsible_of_data_collection = { width: 200, id: "Responsible_of_data_collection", header: [{ text: "Responsible Of Data Collection" }, { content: "inputFilter" }], },
Name_of_data_collection_tool : Name_of_data_collection_tool = { width: 200, id: "Name_of_data_collection_tool", header: [{ text: "Name Of Data Collection Tool" }, { content: "inputFilter" }], },
Responsible_of_data_entry : Responsible_of_data_entry = { width: 200, id: "Responsible_of_data_entry", header: [{ text: "Responsible Of Data Entry" }, { content: "inputFilter" }], },
Responsible_of__Analysis : Responsible_of__Analysis = { width: 200, id: "Responsible_of_ Analysis", header: [{ text: "Responsible Of Analysis" }, { content: "inputFilter" }], },
Frequency_of_reporting : Frequency_of_reporting = { width: 150, id: "Frequency_of_reporting", header: [{ text: "Frequency Of Reporting" }, { content: "inputFilter" }], },
Means_of_Verification : Means_of_Verification = { width: 200, id: "Means_of_Verification", header: [{ text: "Means Of Verification" }, { content: "inputFilter" }], },



//MEAL End








};






function getPriorityTemplate(value) {
    if (!value) return;
    let status = "dhx-demo_grid-status--nothing";
    if (value === "Not Started") status = "dhx-demo_grid-status--not-started";
    if (value === "Done") status = "dhx-demo_grid-status--done";
    if (value === "Canceled") status = "dhx-demo_grid-status--canceled";
    if (value === "In Progress") status = "dhx-demo_grid-status--in-progress";
    return `
    <div class='dhx-demo_grid-template'>
      <div class='dhx-demo_grid-status ${status}'></div>
      <span>${value}</span>
    </div>
    `
    }
    
    
      function filter(val) {
    if (!val) {
      grid.data.filter();
    } else {
      const column = document.getElementById("columns").value;
      grid.data.filter({
          by: column,
          match: val,
          compare: function (val, match) { return new RegExp(match, "i").test(val) }
      });
    }
    };
    
    function selectChange() {
    document.querySelector("#filterInput").value = "";
    grid.data.filter();
    };		
    






    function getBalanceTemplate(value) {
        if (!value) return;
        let status = "dhx-demo_grid-status--nothing";
        if (value === "0") status = "dhx-demo_grid-status--not-started";
        if (value > 0 ) status = "dhx-demo_grid-status--done";
        if (value < 0 ) status = "dhx-demo_grid-status--canceled";

        return `
        <div class='dhx-demo_grid-template'>
          <div class='dhx-demo_grid-status ${status}'></div>
          <span> $ ${value}</span>
        </div>
        `
        }
        
    

//Enable the selection
//grid.selection.enable();




