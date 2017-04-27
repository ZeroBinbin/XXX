(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.domReady = domReady;
/**
 * Created by Administrator on 2017/4/23 0023.
 */
var readyList = [],
    readyState,
    W3C = window.dispatchEvent,
    readyEvent = W3C ? "DOMContentLoaded" : "readystatechange";
if (!document.readyState) {
    readyState = document.readyState = document.body ? "complete" : "loading";
}

function fireReady() {
    for (var i = 0, fn; fn = readyList[i++];) {
        fn();
    }
    readyList = null;
    fireReady = function fireReady() {};
}

function doScrollCheck() {
    try {
        document.documentElement.doScroll("left");
        fireReady();
    } catch (e) {
        setTimeout(doScrollCheck);
    }
}

if (document.readyState === "complete") {
    fireReady();
} else {
    document.addEventListener && document.addEventListener(readyEvent, function () {
        if (W3C || document.readyState === "complete") fireReady();
        document.readyState = "complete";
    });

    if (document.documentElement.doScroll) {
        try {
            if (self.eval === parent.eval) {
                doScrollCheck();
            }
        } catch (e) {
            doScrollCheck();
        }
    }
}

function domReady(fn) {
    if (readyList) {
        readyList.push(fn);
    } else {
        fn();
    }
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.XXX = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Administrator on 2017/4/20 0020.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


__webpack_require__(3);

var _extend = __webpack_require__(2);

var _domReady = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _XXX = window.XXX;

var XXX = function () {
    function XXX(args) {
        _classCallCheck(this, XXX);
    }
    //静态方法
    /**
     * 无冲突处理方法
     * @returns {XXX}
     */


    _createClass(XXX, null, [{
        key: 'noConflict',
        value: function noConflict() {
            window.XXX = _XXX;
            return XXX;
        }
        /**
         * 数组化
         */

    }, {
        key: 'slice',
        value: function slice() {
            window.dispatchEvent ? function (nodes, start, end) {
                return [].slice.call(nodes, start, end);
            } : function (nodes, start, end) {
                var ret = [],
                    n = nodes.length;
                if (end.typeis("Undefined|Number") && isFinite(end)) {
                    start = parseInt(start, 0) || 0;
                    if (start < 0) {
                        start += n;
                    }
                    if (end > n) {
                        end = n;
                    }
                    if (end < 0) {
                        end += n;
                    }
                    for (var i = start; i < end; ++i) {
                        ret[i - start] = nodes[i];
                    }
                }
            };
        }
    }]);

    return XXX;
}();

XXX.extend = _extend.extend;
XXX.domReady = _domReady.domReady;
exports.XXX = XXX;

//语言扩展

var sp = String.prototype;
sp.contains = function (target, str, separator) {
    return separator ? (separator + target + separator).indexOf(separator + str + separator) > -1 : target.indexOf(str) > -1;
};
sp.sartWidth = function (target, str, ignorecase) {
    var start_str = target.substr(0, str.length);
    return ignorecase ? start_str.toLowerCase() === str.toLowerCase() : start_str === str;
};
sp.endWidth = function (target, str, ignorecase) {
    var end_str = target.substring(target.length - str.length);
    return ignorecase ? end_str.toLowerCase() === str.toLowerCase() : end_str === str;
};
sp.repeat = function () {
    var s = target,
        total = "";
    while (n > 0) {
        if (n % 2 == 1) total += s;
        if (n == 1) break;
        s += s;
        n = n >> 1;
    }
    return total;
};
sp.byteLen = function (target, fix) {
    fix = fix ? fix : 2;
    var str = new Array(fix + 1).join("-");
    return target.replace(/[^\x00-\xff]/g, str).length;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Administrator on 2017/4/22 0022.
 */


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.extend = extend;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
    }

    return Object(val);
}

function assignKey(to, from, key, filter) {
    var val = from[key];

    if (val === undefined || val === null) {
        return;
    }

    if (hasOwnProperty.call(to, key)) {
        if (to[key] === undefined || to[key] === null) {
            throw new TypeError('Cannot convert undefined or null to object (' + key + ')');
        }
    }

    if (!hasOwnProperty.call(to, key) || !filter(val)) {
        to[key] = val;
    } else {
        to[key] = assign(Object(to[key]), from[key]);
    }
}

function assign(to, from, filter) {
    if (to === from) {
        return to;
    }

    from = Object(from);

    for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
            assignKey(to, from, key, filter);
        }
    }

    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(from);

        for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
                assignKey(to, from, symbols[i], filter);
            }
        }
    }

    return to;
}

function extend(target) {
    var hasFilter = Filter.typeis("Function|Regex"),
        Filter = hasFilter ? arguments[arguments.length - 1] : null;
    if (Filter.typeis("Regex")) {
        var regex = Filter;
        Filter = function Filter(attr) {
            return regex.test(attr);
        };
    }

    target = toObject(target);

    for (var s = 1; s < (hasFilter ? arguments.length - 1 : arguments.length); s++) {
        assign(target, arguments[s], Filter || function (value) {
            return value.typeis("Object");
        });
    }

    return target;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * https://typeis.github.io/
 * https://github.com/typeis/typeisjs
 * typeis.js
 * Typeis. it's the smart and simple javascript type check and validation library
 *
 * @author Salih Sağdilek
 * @version 1.1.1
 */

;(function () {
    var OP = Object.prototype;
    if (Object.defineProperty && !OP.typeis) {
        var whatTheType = function whatTheType(something) {
            return something != something ? "NaN" : something == null ? "Null" : something == void 0 ? "Undefined" : toString.call(something).replace(Regex, '');
        };

        var typeis = function typeis(something, is) {
            var type = whatTheType(something, is);
            if (whatTheType(is) == 'Array') {
                is = is.join('|');
            }
            if (type === 'Object') {
                is = is.split("|");
                for (var i = 0; i < is.length; i++) {
                    if (something.constructor.name === is[i] || is[i] === 'Object') {
                        return true;
                    }
                }
            }
            return is ? new RegExp('^(' + is + ')$', 'i').test(type) : type;
        };

        var toString, Regex;
        toString = OP.toString;
        Regex = /^\[object |]$/gi;
        Object.defineProperty(OP, 'typeis', { value: function value(is) {
                return typeis(this, is);
            } });
    }
})();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XXX = undefined;

var _core = __webpack_require__(1);

exports.XXX = _core.XXX; /**
                          * Created by Administrator on 2017/4/21 0021.
                          */

/***/ })
/******/ ]);
});