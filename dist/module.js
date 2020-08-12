define(["@grafana/data","@grafana/runtime","@grafana/ui","lodash","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_runtime__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./ConfigEditor.tsx":
/*!**************************!*\
  !*** ./ConfigEditor.tsx ***!
  \**************************/
/*! exports provided: ServiceNowConfigEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceNowConfigEditor", function() { return ServiceNowConfigEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var ServiceNowConfigEditor =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ServiceNowConfigEditor, _super);

  function ServiceNowConfigEditor() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onURLChange = function (event) {
      var _a = _this.props,
          onOptionsChange = _a.onOptionsChange,
          options = _a.options;
      onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        url: event.target.value
      }));
    };

    _this.onUserNameChange = function (event) {
      var _a = _this.props,
          onOptionsChange = _a.onOptionsChange,
          options = _a.options;
      onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        basicAuthUser: event.target.value
      }));
    };

    _this.onPasswordChange = function (event) {
      var _a = _this.props,
          onOptionsChange = _a.onOptionsChange,
          options = _a.options;
      onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        secureJsonData: {
          basicAuthPassword: event.target.value
        }
      }));
    };

    _this.onResetPassword = function () {
      var _a = _this.props,
          onOptionsChange = _a.onOptionsChange,
          options = _a.options;
      onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        secureJsonFields: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.secureJsonFields), {
          basicAuthPassword: false
        }),
        secureJsonData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.secureJsonData), {
          basicAuthPassword: ''
        })
      }));
    };

    return _this;
  }

  ServiceNowConfigEditor.prototype.render = function () {
    var options = this.props.options;
    options.basicAuth = true;
    var secureJsonFields = options.secureJsonFields;
    var secureJsonData = options.secureJsonData || {};
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "page-heading"
    }, "Service Now Settings"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label width-11",
      title: "Service Now URL"
    }, "Service Now URL"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "gf-form-input width-20",
      type: "text",
      onChange: this.onURLChange,
      value: options.url || '',
      placeholder: "https://YOUR_INSTANCE_NAME.service-now.com"
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label width-11",
      title: "User Name"
    }, "User name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "gf-form-input width-20",
      type: "text",
      onChange: this.onUserNameChange,
      value: options.basicAuthUser || '',
      placeholder: "username"
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label width-11",
      title: "Password"
    }, "Password"), secureJsonFields && secureJsonFields.basicAuthPassword ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label width-20"
    }, "Configured"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "gf-form-button btn btn-secondary width-6",
      onClick: this.onResetPassword
    }, "Reset")) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "password",
      value: secureJsonData.basicAuthPassword || '',
      className: "gf-form-input width-20",
      onChange: this.onPasswordChange
    }))));
  };

  return ServiceNowConfigEditor;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./QueryEditor.tsx":
/*!*************************!*\
  !*** ./QueryEditor.tsx ***!
  \*************************/
/*! exports provided: ServiceNowQueryEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceNowQueryEditor", function() { return ServiceNowQueryEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _servicenow_Query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./servicenow/Query */ "./servicenow/Query.tsx");
/* harmony import */ var _ServiceNowQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ServiceNowQuery */ "./ServiceNowQuery.ts");






var ServiceNowQueryEditor =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ServiceNowQueryEditor, _super);

  function ServiceNowQueryEditor() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ServiceNowQueryEditor.prototype.render = function () {
    var groupByCtrl;
    var query = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["defaults"])(this.props.query, {
      servicenow: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["defaults"])(this.props.query.servicenow, _ServiceNowQuery__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_SERVICENOW_QUERY"])
    });

    if (query && query.servicenow && query.servicenow.type === 'stats') {
      groupByCtrl = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_servicenow_Query__WEBPACK_IMPORTED_MODULE_3__["ServiceNowQueryGroupByCtrl"], {
        onChange: this.props.onChange,
        query: query,
        datasource: this.props.datasource
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_servicenow_Query__WEBPACK_IMPORTED_MODULE_3__["ServiceNowQueryTableAndTypeCtrl"], {
      onChange: this.props.onChange,
      query: query,
      datasource: this.props.datasource
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_servicenow_Query__WEBPACK_IMPORTED_MODULE_3__["ServiceNowQueryFieldsCtrl"], {
      onChange: this.props.onChange,
      query: query,
      datasource: this.props.datasource
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_servicenow_Query__WEBPACK_IMPORTED_MODULE_3__["ServiceNowQueryFiltersCtrl"], {
      onChange: this.props.onChange,
      query: query,
      datasource: this.props.datasource
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_servicenow_Query__WEBPACK_IMPORTED_MODULE_3__["ServiceNowQueryQueryCtrl"], {
      onChange: this.props.onChange,
      query: query,
      datasource: this.props.datasource
    }), groupByCtrl, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_servicenow_Query__WEBPACK_IMPORTED_MODULE_3__["ServiceNowQueryOrderByCtrl"], {
      onChange: this.props.onChange,
      query: query,
      datasource: this.props.datasource
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_servicenow_Query__WEBPACK_IMPORTED_MODULE_3__["ServiceNowQueryLimitCtrl"], {
      onChange: this.props.onChange,
      query: query,
      datasource: this.props.datasource
    }));
  };

  return ServiceNowQueryEditor;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]);



/***/ }),

/***/ "./ServiceNowDatasource.ts":
/*!*********************************!*\
  !*** ./ServiceNowDatasource.ts ***!
  \*********************************/
/*! exports provided: ServiceNowDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceNowDataSource", function() { return ServiceNowDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ServiceNowResultsParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServiceNowResultsParser */ "./ServiceNowResultsParser.ts");
/* harmony import */ var _ServiceNowQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ServiceNowQuery */ "./ServiceNowQuery.ts");




var ServiceNowDataSource =
/** @class */
function () {
  function ServiceNowDataSource(instanceSettings) {
    this.instanceSettings = instanceSettings;
    this.url = '';
    this.url = this.instanceSettings.url + '';
  }

  ServiceNowDataSource.prototype.doQueries = function (queries, options) {
    var _this = this;

    return queries.map(function (query) {
      var serviceNowQuery = new _ServiceNowQuery__WEBPACK_IMPORTED_MODULE_2__["ServiceNowQuery"](query.servicenow);
      return Object(_ServiceNowQuery__WEBPACK_IMPORTED_MODULE_2__["doServiceNowRequest"])(_this.url + serviceNowQuery.getUrl(), serviceNowQuery).then(function (result) {
        return {
          result: result,
          query: query,
          options: options
        };
      })["catch"](function (error) {
        throw {
          error: error,
          query: query
        };
      });
    });
  };

  ServiceNowDataSource.prototype.doAnnotationQueries = function (queries) {
    var _this = this;

    return queries.map(function (query) {
      var serviceNowQuery = new _ServiceNowQuery__WEBPACK_IMPORTED_MODULE_2__["ServiceNowQuery"](query);
      return Object(_ServiceNowQuery__WEBPACK_IMPORTED_MODULE_2__["doServiceNowRequest"])(_this.url + serviceNowQuery.getUrl(), serviceNowQuery).then(function (result) {
        return {
          result: result,
          query: query,
          options: {}
        };
      })["catch"](function (error) {
        throw {
          error: error,
          query: query
        };
      });
    });
  };

  ServiceNowDataSource.prototype.query = function (options) {
    var queries = [];

    if (options.targets) {
      queries = options.targets.filter(function (item) {
        return item.hide !== true;
      });
    }

    var promises = this.doQueries(queries, options);
    return Promise.all(promises).then(function (results) {
      var parsedResults = new _ServiceNowResultsParser__WEBPACK_IMPORTED_MODULE_1__["ServiceNowResultsParser"](results);

      if (parsedResults.resultFormat === 'time_series') {
        return parsedResults.getResultsAsTimeSeries(new Date(results[0].options.range.to).getTime());
      }

      return parsedResults.output;
    });
  };

  ServiceNowDataSource.prototype.annotationsQuery = function (options) {
    var queries = [];

    if (options.targets) {
      queries = options.targets.filter(function (item) {
        return item.hide !== true;
      });
    } else if (options.annotation) {
      var annotationQuery = {
        limit: options.annotation.limit || 30,
        startTimeField: options.annotation.startTimeField,
        endTimeField: options.annotation.endTimeField,
        titleField: options.annotation.titleField,
        descriptionField: options.annotation.descriptionField,
        fields: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(options.annotation.fields.split(','), [options.annotation.titleField, options.annotation.descriptionField, options.annotation.startTimeField, options.annotation.endTimeField]).filter(Boolean).join(','),
        query: options.annotation.query || '',
        table: options.annotation.table
      };
      queries.push(annotationQuery);
    }

    var promises = this.doAnnotationQueries(queries);
    return Promise.all(promises).then(function (results) {
      var parsedResults = new _ServiceNowResultsParser__WEBPACK_IMPORTED_MODULE_1__["ServiceNowResultsParser"](results);
      return parsedResults.getResultsAsAnnotations();
    });
  };

  return ServiceNowDataSource;
}();



/***/ }),

/***/ "./ServiceNowQuery.ts":
/*!****************************!*\
  !*** ./ServiceNowQuery.ts ***!
  \****************************/
/*! exports provided: ServiceNowQueryFilter, ServiceNowQuery, DEFAULT_SERVICENOW_QUERY, doServiceNowRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceNowQueryFilter", function() { return ServiceNowQueryFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceNowQuery", function() { return ServiceNowQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SERVICENOW_QUERY", function() { return DEFAULT_SERVICENOW_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doServiceNowRequest", function() { return doServiceNowRequest; });
/* harmony import */ var _grafana__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grafana */ "./grafana.ts");


var ServiceNowQueryURLParam =
/** @class */
function () {
  function ServiceNowQueryURLParam(key, value) {
    this.key = key;
    this.value = value.toString();
  }

  ServiceNowQueryURLParam.prototype.getValue = function () {
    return [this.key, this.value].join('=');
  };

  return ServiceNowQueryURLParam;
}();

var ServiceNowQueryFilter =
/** @class */
function () {
  function ServiceNowQueryFilter(field, operator, value) {
    this.field = field;
    this.operator = operator;
    this.value = value;
  }

  ServiceNowQueryFilter.prototype.toString = function () {
    return ("" + this.field + this.operator + this.value).trim();
  };

  return ServiceNowQueryFilter;
}();



var ServiceNowQuery =
/** @class */
function () {
  function ServiceNowQuery(options) {
    this.table = 'incident';
    this.type = 'table';
    this.resultFormat = 'table';
    this.orderByDirection = 'asc';
    this.table = options.table || 'incident';
    this.type = options.type || 'table';
    this.resultFormat = options.resultFormat || 'table';
    this.fields = options.fields || '';
    this.query = options.query || '';
    this.filters = options.filters || [];
    this.orderByDirection = options.orderByDirection || 'asc';
    this.orderBy = options.orderBy || '';
    this.groupBy = options.groupBy || '';
    this.limit = options.limit || 25;
  }

  ServiceNowQuery.prototype.getUrl = function () {
    var URL_PARAMS = [];
    URL_PARAMS.push(new ServiceNowQueryURLParam("sysparm_display_value", 'all'));
    URL_PARAMS.push(new ServiceNowQueryURLParam("sysparm_limit", this.limit || 10));

    if (this.fields && this.fields !== '*') {
      URL_PARAMS.push(new ServiceNowQueryURLParam("sysparm_fields", this.fields || 'opened_at,number,short_description,sys_created_by,severity,category,state,priority'));
    }

    var query = (this.query + '').trim().replace(/\^OR\n/g, '^OR').replace(/\^\n/g, '^').replace(/\n/g, '^');
    var sysparmQueries = [query].filter(Boolean);

    if (this.orderBy) {
      sysparmQueries.push((this.orderByDirection === 'asc' ? 'ORDERBY' : 'ORDERBYDESC') + this.orderBy.trim());
    }

    this.filters.forEach(function (filter) {
      sysparmQueries.push(encodeURIComponent(("" + filter.field + filter.operator + filter.value).trim()));
    });

    if (sysparmQueries.length > 0) {
      URL_PARAMS.push(new ServiceNowQueryURLParam("sysparm_query", sysparmQueries.join('^')));
    }

    if (this.type === 'stats') {
      URL_PARAMS.push(new ServiceNowQueryURLParam("sysparm_count", 'true'));
    }

    if (this.type === 'stats' && this.groupBy) {
      URL_PARAMS.push(new ServiceNowQueryURLParam("sysparm_group_by", this.groupBy.trim()));
    }

    return "/api/now/" + (this.type || 'table') + "/" + this.table + "?" + URL_PARAMS.map(function (v) {
      return v.getValue();
    }).join('&');
  };

  return ServiceNowQuery;
}();


var DEFAULT_SERVICENOW_QUERY = new ServiceNowQuery({
  table: 'incident',
  type: 'table',
  fields: 'opened_at,number,short_description,sys_created_by,severity,category,state,priority',
  query: '',
  groupBy: '',
  orderBy: 'opened_at',
  orderByDirection: 'desc',
  resultFormat: 'table',
  limit: 10
});
var doServiceNowRequest = function doServiceNowRequest(url, serviceNowQuery, maxRetries) {
  if (maxRetries === void 0) {
    maxRetries = 1;
  }

  return Object(_grafana__WEBPACK_IMPORTED_MODULE_0__["getBackendSrv"])().datasourceRequest({
    method: 'GET',
    url: url
  })["catch"](function (error) {
    console.log(error);

    if (maxRetries > 0) {
      return doServiceNowRequest(url, serviceNowQuery, maxRetries - 1);
    }

    throw error;
  });
};

/***/ }),

/***/ "./ServiceNowResultsParser.ts":
/*!************************************!*\
  !*** ./ServiceNowResultsParser.ts ***!
  \************************************/
/*! exports provided: ServiceNowResultsParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceNowResultsParser", function() { return ServiceNowResultsParser; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



var getServiceNowRowAsAnnotation = function getServiceNowRowAsAnnotation(row, cols, query) {
  var annotation = {
    text: '',
    title: '',
    tags: [],
    time: new Date().getTime()
  };
  var amendText = '';
  Object(lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(cols, function (value, index) {
    if (value.text === query.startTimeField) {
      if (row[index]) {
        annotation.time = new Date(row[index]).getTime();
        amendText += value.text + " : " + row[index] + "\n";
      }
    } else if (value.text === query.endTimeField) {
      if (row[index]) {
        annotation.timeEnd = new Date(row[index]).getTime();
        amendText += value.text + " : " + row[index] + "\n";
      }
    } else if (value.text === query.titleField) {
      if (row[index]) {
        annotation.title = row[index];
      }
    } else if (value.text === query.descriptionField) {
      if (row[index]) {
        annotation.text = row[index];
      }
    } else {
      if (row[index]) {
        annotation.tags.push(value.text + " : " + row[index]);
      }
    }
  });
  annotation.text += "\n    " + amendText + "\n  ";
  return annotation;
};

var ServiceNowResultsParser =
/** @class */
function () {
  function ServiceNowResultsParser(results) {
    var _this = this;

    this.resultFormat = 'table';
    this.output = {
      columns: [],
      rows: [],
      type: 'table'
    };
    results.filter(function (res) {
      return res && res.result && res.result.data && res.result.data.result;
    }).forEach(function (res) {
      _this.query = res.query;

      if (res && res.query && res.query.servicenow && res.query.servicenow.type === 'stats') {
        _this.resultFormat = res.query.servicenow.result_format;
        res.result.data.result.forEach(function (item, index) {
          if (index === 0) {
            _this.output.columns.push({
              text: 'stat',
              type: 'string'
            });

            _this.output.columns.push({
              text: 'value',
              type: 'number'
            });
          }

          if (item && item.stats && item.stats.count) {
            var displayValue = item.groupby_fields[0].display_value || item.groupby_fields[0].value;
            var value = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["toInteger"])(item.stats.count);

            _this.output.rows.push([displayValue, value]);
          }
        });
      } else {
        res.result.data.result.forEach(function (item, index) {
          if (index === 0) {
            Object(lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(item, function (value, key) {
              if (_typeof(value) === 'object' && value && (value.display_value || value.value === '')) {
                _this.output.columns.push({
                  text: key,
                  type: 'string'
                });
              } else {
                _this.output.columns.push({
                  text: key,
                  type: _typeof(value) === 'object' ? 'string' : _typeof(value)
                });
              }
            });
          }

          var row = [];
          Object(lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(item, function (value) {
            if (_typeof(value) === 'object' && value && (value.display_value || value.value === '')) {
              row.push(value.display_value || value.value);
            } else if (_typeof(value) === 'object') {
              row.push(JSON.stringify(value));
            } else {
              row.push(value);
            }
          });

          _this.output.rows.push(row);
        });
      }
    });
  }

  ServiceNowResultsParser.prototype.getResultsAsAnnotations = function () {
    var _this = this;

    var annotations = [];
    Object(lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(this.output.rows, function (row) {
      var annotation = getServiceNowRowAsAnnotation(row, _this.output.columns, _this.query);
      annotations.push(annotation);
    });
    return annotations;
  };

  ServiceNowResultsParser.prototype.getResultsAsTimeSeries = function (timestamp) {
    var out = [];
    this.output.rows.forEach(function (row) {
      out.push({
        target: row[0] || '-',
        datapoints: [[row[1], timestamp]]
      });
    });
    return out;
  };

  return ServiceNowResultsParser;
}();



/***/ }),

/***/ "./annotations/annotation_ctrl.ts":
/*!****************************************!*\
  !*** ./annotations/annotation_ctrl.ts ***!
  \****************************************/
/*! exports provided: AnnotationCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnotationCtrl", function() { return AnnotationCtrl; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./config.ts");


var AnnotationCtrl =
/** @class */
function () {
  function AnnotationCtrl() {
    this.supportedTables = _config__WEBPACK_IMPORTED_MODULE_0__["TABLE_NAMES"].map(function (t) {
      return {
        text: t.label,
        value: t.value
      };
    });
  }

  AnnotationCtrl.templateUrl = _config__WEBPACK_IMPORTED_MODULE_0__["TEMPLATE_URL"].ANNOTATION;
  return AnnotationCtrl;
}();



/***/ }),

/***/ "./config.ts":
/*!*******************!*\
  !*** ./config.ts ***!
  \*******************/
/*! exports provided: TEMPLATE_URL, TABLE_NAME_INCIDENT, TABLE_NAME_CHANGE_REQUEST, TABLE_NAMES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEMPLATE_URL", function() { return TEMPLATE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_NAME_INCIDENT", function() { return TABLE_NAME_INCIDENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_NAME_CHANGE_REQUEST", function() { return TABLE_NAME_CHANGE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_NAMES", function() { return TABLE_NAMES; });
var TEMPLATE_URL = {
  QUERY_EDITOR: 'query_editor/query.editor.html',
  ANNOTATION: 'annotations/annotations.editor.html'
};
var TABLE_NAME_INCIDENT = 'incident';
var TABLE_NAME_CHANGE_REQUEST = 'change_request';
var TABLE_NAMES = [{
  label: 'Incidents (INC)',
  value: TABLE_NAME_INCIDENT
}, {
  label: 'Change Request (CHG)',
  value: TABLE_NAME_CHANGE_REQUEST
}];

/***/ }),

/***/ "./datasource.ts":
/*!***********************!*\
  !*** ./datasource.ts ***!
  \***********************/
/*! exports provided: Datasource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Datasource", function() { return Datasource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grafana */ "./grafana.ts");
/* harmony import */ var _ServiceNowDatasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ServiceNowDatasource */ "./ServiceNowDatasource.ts");





var Datasource =
/** @class */
function (_super) {
  Datasource.$inject = ["instanceSettings", "templateSrv"];

  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Datasource, _super);
  /** @ngInject */


  function Datasource(instanceSettings, templateSrv) {
    var _this = _super.call(this, instanceSettings) || this;

    _this.instanceSettings = instanceSettings;
    _this.templateSrv = templateSrv;
    _this.serviceNowDataSource = new _ServiceNowDatasource__WEBPACK_IMPORTED_MODULE_3__["ServiceNowDataSource"](_this.instanceSettings);
    return _this;
  }

  Datasource.prototype.query = function (options) {
    var promises = [];
    var snOptions = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(options);

    if (snOptions.targets.length > 0) {
      var snIncidentPromise = this.serviceNowDataSource.query(snOptions);

      if (snIncidentPromise) {
        promises.push(snIncidentPromise);
      }
    }

    return Promise.all(promises).then(function (results) {
      return {
        data: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["flatten"])(results)
      };
    });
  };

  Datasource.prototype.annotationQuery = function (options) {
    options.annotation.query = this.templateSrv.replace(options.annotation.query, {}, 'glob');
    var annotationQuery = {
      range: options.range,
      rangeRaw: options.rangeRaw,
      annotation: options.annotation
    };
    return this.serviceNowDataSource.annotationsQuery(annotationQuery).then(function (result) {
      return result;
    })["catch"](function (ex) {
      console.error(ex);
      return [];
    });
  };

  Datasource.prototype.testDatasource = function () {
    var _this = this;

    return new Promise(function (resolve, reject) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          this.serviceNowDataSource.query({
            range: {
              from: '',
              to: ''
            },
            targets: []
          }).then(function (result) {
            resolve({
              message: 'Successfully Connected ServiceNow',
              status: 'success'
            });
          })["catch"](function (ex) {
            reject({
              message: 'Failed to Connect ServiceNow',
              status: 'error'
            });
          });
          return [2
          /*return*/
          ];
        });
      });
    });
  };

  Datasource.prototype.metricFindQuery = function (query) {
    if (!query) {
      return Promise.resolve([]);
    }

    return Promise.resolve([]);
  };

  return Datasource;
}(_grafana__WEBPACK_IMPORTED_MODULE_2__["DataSourceApi"]);



/***/ }),

/***/ "./grafana.ts":
/*!********************!*\
  !*** ./grafana.ts ***!
  \********************/
/*! exports provided: Select, DataSourcePlugin, DataSourceApi, getBackendSrv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _grafana_ui__WEBPACK_IMPORTED_MODULE_0__["Select"]; });

/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSourcePlugin", function() { return _grafana_data__WEBPACK_IMPORTED_MODULE_1__["DataSourcePlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSourceApi", function() { return _grafana_data__WEBPACK_IMPORTED_MODULE_1__["DataSourceApi"]; });

/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBackendSrv", function() { return _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["getBackendSrv"]; });





/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grafana */ "./grafana.ts");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datasource */ "./datasource.ts");
/* harmony import */ var _ConfigEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConfigEditor */ "./ConfigEditor.tsx");
/* harmony import */ var _QueryEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QueryEditor */ "./QueryEditor.tsx");
/* harmony import */ var _annotations_annotation_ctrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./annotations/annotation_ctrl */ "./annotations/annotation_ctrl.ts");





var plugin = new _grafana__WEBPACK_IMPORTED_MODULE_0__["DataSourcePlugin"](_datasource__WEBPACK_IMPORTED_MODULE_1__["Datasource"]).setConfigEditor(_ConfigEditor__WEBPACK_IMPORTED_MODULE_2__["ServiceNowConfigEditor"]).setQueryEditor(_QueryEditor__WEBPACK_IMPORTED_MODULE_3__["ServiceNowQueryEditor"]).setAnnotationQueryCtrl(_annotations_annotation_ctrl__WEBPACK_IMPORTED_MODULE_4__["AnnotationCtrl"]);

/***/ }),

/***/ "./servicenow/Query.tsx":
/*!******************************!*\
  !*** ./servicenow/Query.tsx ***!
  \******************************/
/*! exports provided: ServiceNowQueryFiltersCtrl, ServiceNowQueryTableAndTypeCtrl, ServiceNowQueryFieldsCtrl, ServiceNowQueryQueryCtrl, ServiceNowQueryGroupByCtrl, ServiceNowQueryOrderByCtrl, ServiceNowQueryLimitCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceNowQueryTableAndTypeCtrl", function() { return ServiceNowQueryTableAndTypeCtrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceNowQueryFieldsCtrl", function() { return ServiceNowQueryFieldsCtrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceNowQueryQueryCtrl", function() { return ServiceNowQueryQueryCtrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceNowQueryGroupByCtrl", function() { return ServiceNowQueryGroupByCtrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceNowQueryOrderByCtrl", function() { return ServiceNowQueryOrderByCtrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceNowQueryLimitCtrl", function() { return ServiceNowQueryLimitCtrl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../grafana */ "./grafana.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../config */ "./config.ts");
/* harmony import */ var _ServiceNowQueryFiltersCtrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ServiceNowQueryFiltersCtrl */ "./servicenow/ServiceNowQueryFiltersCtrl.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceNowQueryFiltersCtrl", function() { return _ServiceNowQueryFiltersCtrl__WEBPACK_IMPORTED_MODULE_4__["ServiceNowQueryFiltersCtrl"]; });






var SUPPORTED_TABLES = _config__WEBPACK_IMPORTED_MODULE_3__["TABLE_NAMES"];
var SUPPORTED_TYPES = [{
  label: 'Table',
  value: 'table'
}, {
  label: 'Stats',
  value: 'stats'
}];
var RESULT_FORMATS = [{
  label: 'Table',
  value: 'table'
}, {
  label: 'Time Series',
  value: 'time_series'
}];
var ORDER_DIRECTIONS = [{
  label: 'Ascending',
  value: 'asc'
}, {
  label: 'Descending',
  value: 'desc'
}];

var ServiceNowQueryTableAndTypeCtrl =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ServiceNowQueryTableAndTypeCtrl, _super);

  function ServiceNowQueryTableAndTypeCtrl() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onTableChange = function (table) {
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var servicenow = query.servicenow;
      servicenow.table = table.value;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        servicenow: servicenow
      }));
    };

    _this.onTypeChange = function (typeValue) {
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var servicenow = query.servicenow;
      servicenow.type = typeValue.value;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        servicenow: servicenow
      }));
    };

    return _this;
  }

  ServiceNowQueryTableAndTypeCtrl.prototype.render = function () {
    var query = this.props.query;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label query-keyword width-8"
    }, "Table"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-select-wrapper gf-form-select-wrapper--caret-indent"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana__WEBPACK_IMPORTED_MODULE_2__["Select"], {
      className: "width-12",
      value: SUPPORTED_TABLES.find(function (service) {
        return service.value === query.servicenow.table;
      }),
      options: SUPPORTED_TABLES,
      defaultValue: query.servicenow.table,
      onChange: this.onTableChange
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label query-keyword width-6"
    }, "Type"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-select-wrapper gf-form-select-wrapper--caret-indent"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana__WEBPACK_IMPORTED_MODULE_2__["Select"], {
      className: "width-12",
      value: SUPPORTED_TYPES.find(function (service) {
        return service.value === query.servicenow.type;
      }),
      options: SUPPORTED_TYPES,
      defaultValue: query.servicenow.type,
      onChange: this.onTypeChange
    })))));
  };

  return ServiceNowQueryTableAndTypeCtrl;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



var ServiceNowQueryFieldsCtrl =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ServiceNowQueryFieldsCtrl, _super);

  function ServiceNowQueryFieldsCtrl() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onFieldChange = function (event) {
      var rgQuery = event.target.value;
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var servicenow = query.servicenow;
      servicenow.fields = rgQuery;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        servicenow: servicenow
      }));
    };

    return _this;
  }

  ServiceNowQueryFieldsCtrl.prototype.render = function () {
    var query = this.props.query;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label width-8",
      title: "Fields ( Comma separated )"
    }, "Fields"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "gf-form-input width-30",
      type: "text",
      onChange: this.onFieldChange,
      value: query.servicenow.fields,
      placeholder: "Fields ( Comma Separated)",
      title: "Fields ( Comma Separated )"
    }))));
  };

  return ServiceNowQueryFieldsCtrl;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



var ServiceNowQueryQueryCtrl =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ServiceNowQueryQueryCtrl, _super);

  function ServiceNowQueryQueryCtrl() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onQueryChange = function (event) {
      var serviceNowQuery = event.target.value;
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var servicenow = query.servicenow;
      servicenow.query = serviceNowQuery;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        servicenow: servicenow
      }));
    };

    return _this;
  }

  ServiceNowQueryQueryCtrl.prototype.render = function () {
    var query = this.props.query;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label width-8",
      title: "Query"
    }, "Query"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
      value: query.servicenow.query || '',
      onChange: this.onQueryChange,
      className: "gf-form-input min-width-30 width-30",
      rows: 3
    }))));
  };

  return ServiceNowQueryQueryCtrl;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



var ServiceNowQueryGroupByCtrl =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ServiceNowQueryGroupByCtrl, _super);

  function ServiceNowQueryGroupByCtrl() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onGroupByChange = function (event) {
      var groupBy = event.target.value;
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var servicenow = query.servicenow;
      servicenow.groupBy = groupBy;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        servicenow: servicenow
      }));
    };

    return _this;
  }

  ServiceNowQueryGroupByCtrl.prototype.render = function () {
    var query = this.props.query;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label width-8",
      title: "Group By Field"
    }, "Group By"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "gf-form-input width-30",
      type: "text",
      onChange: this.onGroupByChange,
      value: query.servicenow.groupBy,
      placeholder: "",
      title: "Group By"
    }))));
  };

  return ServiceNowQueryGroupByCtrl;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



var ServiceNowQueryOrderByCtrl =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ServiceNowQueryOrderByCtrl, _super);

  function ServiceNowQueryOrderByCtrl() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onOrderByChange = function (event) {
      var orderBy = event.target.value;
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var servicenow = query.servicenow;
      servicenow.orderBy = orderBy;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        servicenow: servicenow
      }));
    };

    _this.onOrderDirectionChange = function (event) {
      var orderByDirection = event.value;
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var servicenow = query.servicenow;
      servicenow.orderByDirection = orderByDirection;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        servicenow: servicenow
      }));
    };

    return _this;
  }

  ServiceNowQueryOrderByCtrl.prototype.render = function () {
    var query = this.props.query;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label width-8",
      title: "Order By"
    }, "Order By"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "gf-form-input width-10",
      type: "text",
      onChange: this.onOrderByChange,
      value: query.servicenow.orderBy,
      placeholder: "",
      title: "Order By"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label width-8",
      title: "Order Direction"
    }, "Order Direction"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-select-wrapper gf-form-select-wrapper--caret-indent"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana__WEBPACK_IMPORTED_MODULE_2__["Select"], {
      className: "width-12",
      value: ORDER_DIRECTIONS.find(function (service) {
        return service.value === query.servicenow.orderByDirection;
      }),
      options: ORDER_DIRECTIONS,
      defaultValue: query.servicenow.orderByDirection,
      onChange: this.onOrderDirectionChange
    })))));
  };

  return ServiceNowQueryOrderByCtrl;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



var ServiceNowQueryLimitCtrl =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ServiceNowQueryLimitCtrl, _super);

  function ServiceNowQueryLimitCtrl() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onLimitChange = function (event) {
      var limit = event.target.value;
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var servicenow = query.servicenow;
      servicenow.limit = limit;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        servicenow: servicenow
      }));
    };

    _this.onResultFormatChange = function (event) {
      var resultFormat = event.value;
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var servicenow = query.servicenow;
      servicenow.resultFormat = resultFormat;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        servicenow: servicenow
      }));
    };

    return _this;
  }

  ServiceNowQueryLimitCtrl.prototype.render = function () {
    var query = this.props.query;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label width-8",
      title: "Limit"
    }, "Limit"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "gf-form-input width-10",
      type: "text",
      onChange: this.onLimitChange,
      value: query.servicenow.limit,
      placeholder: "Limit",
      title: "Limit"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label width-8",
      title: "Format As"
    }, "Format As"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-select-wrapper gf-form-select-wrapper--caret-indent"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana__WEBPACK_IMPORTED_MODULE_2__["Select"], {
      className: "width-12",
      value: RESULT_FORMATS.find(function (service) {
        return service.value === query.servicenow.resultFormat;
      }),
      options: RESULT_FORMATS,
      defaultValue: query.servicenow.resultFormat,
      onChange: this.onResultFormatChange
    })))));
  };

  return ServiceNowQueryLimitCtrl;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./servicenow/ServiceNowQueryFiltersCtrl.tsx":
/*!***************************************************!*\
  !*** ./servicenow/ServiceNowQueryFiltersCtrl.tsx ***!
  \***************************************************/
/*! exports provided: ServiceNowQueryFiltersCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceNowQueryFiltersCtrl", function() { return ServiceNowQueryFiltersCtrl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ServiceNowQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../ServiceNowQuery */ "./ServiceNowQuery.ts");
/* harmony import */ var _grafana__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../grafana */ "./grafana.ts");




var FilterFields = [{
  value: 'number',
  label: 'Number',
  tables: ['incident', 'change_request']
}, {
  value: 'short_description',
  label: 'Short Description',
  tables: ['incident', 'change_request']
}, {
  value: 'incident_state',
  label: 'Incident State',
  tables: ['incident']
}, {
  value: 'state',
  label: 'State',
  tables: ['incident']
}, {
  value: 'assigned_to',
  label: 'Assigned To',
  tables: ['incident']
}, {
  value: 'assignment_group.name',
  label: 'Assignment Group',
  tables: ['incident', 'change_request']
}, {
  value: 'assignment_group',
  label: 'Assignment Group ID',
  tables: ['incident', 'change_request']
}, {
  value: 'sys_created_by',
  label: 'Created By',
  tables: ['incident']
}, {
  value: 'sys_opened_by',
  label: 'Opened By',
  tables: ['incident']
}, {
  value: 'business_service',
  label: 'Business Service',
  tables: ['incident']
}, {
  value: 'cmdb_ci',
  label: 'CMDB CI',
  tables: ['incident']
}, {
  value: 'active',
  label: 'Active',
  tables: ['incident']
}, {
  value: 'priority',
  label: 'Priority',
  tables: ['incident']
}, {
  value: 'phase_state',
  label: 'Phase State',
  tables: ['change_request']
}, {
  value: 'type',
  label: 'Type',
  tables: ['change_request']
}, {
  value: 'start_date',
  label: 'Start Date',
  tables: ['change_request']
}, {
  value: 'end_date',
  label: 'End Date',
  tables: ['change_request']
}];
var FilterOperators = [{
  value: '=',
  label: 'Equals'
}, {
  value: '!=',
  label: 'Not Equals'
}, {
  value: '<',
  label: 'Less than'
}, {
  value: '<=',
  label: 'Less than or Equals'
}, {
  value: '>',
  label: 'Greater than'
}, {
  value: '>=',
  label: 'Greater than or Equals'
}, {
  value: 'STARTSWITH',
  label: 'Starts With'
}, {
  value: 'ENDSWITH',
  label: 'Ends With'
}, {
  value: 'LIKE',
  label: 'Like'
}, {
  value: 'NOTLIKE',
  label: 'Not Like'
}, {
  value: 'ISEMPTY',
  label: 'Is Empty'
}, {
  value: 'ISNOTEMPTY',
  label: 'Is Not Empty'
}, {
  value: 'IN',
  label: 'In'
}, {
  value: 'NOT IN',
  label: 'Not In'
}, {
  value: 'ANYTHING',
  label: 'Anything'
}, {
  value: 'BETWEEN',
  label: 'Between'
}, {
  value: 'SAMEAS',
  label: 'Is Same'
}, {
  value: 'NSAMEAS',
  label: 'Is Different'
}, {
  value: 'ONToday',
  label: 'On Today'
}, {
  value: 'NOTONToday',
  label: 'NOT ON Today'
}, {
  value: 'DATEPART',
  label: 'Date Part'
}, {
  value: 'RELATIVEGE',
  label: 'Relative (on or after)'
}, {
  value: 'RELATIVELE',
  label: 'Relative (on or before)'
}, {
  value: 'RELATIVEGT',
  label: 'Relative (after)'
}, {
  value: 'RELATIVELT',
  label: 'Relative (before)'
}, {
  value: 'RELATIVEEE',
  label: 'Relative (on)'
}, {
  value: 'MORETHAN',
  label: 'Is More than'
}, {
  value: 'LESSTHAN',
  label: 'Is Less than'
}, {
  value: 'GT_FIELD',
  label: 'Greater than field'
}, {
  value: 'LT_FIELD',
  label: 'Less than field'
}, {
  value: 'GT_OR_EQUALS_FIELD',
  label: 'Greater than or is field'
}, {
  value: 'LT_OR_EQUALS_FIELD',
  label: 'Less than or is field'
}];

var ServiceNowQueryFiltersCtrl =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ServiceNowQueryFiltersCtrl, _super);

  function ServiceNowQueryFiltersCtrl() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onFilterAdd = function () {
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var servicenow = query.servicenow;
      var newFilter = new _ServiceNowQuery__WEBPACK_IMPORTED_MODULE_2__["ServiceNowQueryFilter"]('number', 'STARTSWITH', servicenow.table === 'incident' ? 'INC' : 'CHG');
      servicenow.filters = servicenow.filters || [newFilter];
      servicenow.filters.push(newFilter);
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        servicenow: servicenow
      }));
    };

    _this.onFilterRemove = function (index) {
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var servicenow = query.servicenow;
      var newFilter = new _ServiceNowQuery__WEBPACK_IMPORTED_MODULE_2__["ServiceNowQueryFilter"]('number', 'STARTSWITH', servicenow.table === 'incident' ? 'INC' : 'CHG');
      servicenow.filters = servicenow.filters || [newFilter];
      servicenow.filters.splice(index, 1);
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        servicenow: servicenow
      }));
    };

    _this.onFilterKeyChange = function (event, index) {
      var filterType = event.value;
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var servicenow = query.servicenow;
      var newFilter = new _ServiceNowQuery__WEBPACK_IMPORTED_MODULE_2__["ServiceNowQueryFilter"]('number', 'STARTSWITH', servicenow.table === 'incident' ? 'INC' : 'CHG');
      servicenow.filters = servicenow.filters || [newFilter];
      servicenow.filters[index].field = filterType;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        servicenow: servicenow
      }));
    };

    _this.onFilterOperatorChange = function (event, index) {
      var operator = event.value;
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var servicenow = query.servicenow;
      var newFilter = new _ServiceNowQuery__WEBPACK_IMPORTED_MODULE_2__["ServiceNowQueryFilter"]('number', 'STARTSWITH', servicenow.table === 'incident' ? 'INC' : 'CHG');
      servicenow.filters = servicenow.filters || [newFilter];
      servicenow.filters[index].operator = operator;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        servicenow: servicenow
      }));
    };

    _this.onFilterValueChange = function (event, index) {
      var value = event.target.value;
      var _a = _this.props,
          query = _a.query,
          onChange = _a.onChange;
      var servicenow = query.servicenow;
      var newFilter = new _ServiceNowQuery__WEBPACK_IMPORTED_MODULE_2__["ServiceNowQueryFilter"]('number', 'STARTSWITH', servicenow.table === 'incident' ? 'INC' : 'CHG');
      servicenow.filters = servicenow.filters || [newFilter];
      servicenow.filters[index].value = value;
      onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
        servicenow: servicenow
      }));
    };

    return _this;
  }

  ServiceNowQueryFiltersCtrl.prototype.render = function () {
    var _this = this;

    var query = this.props.query;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, query.servicenow.filters.length === 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form gf-form--grow"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label width-8",
      title: "Filter"
    }, "Filter"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form gf-form--grow"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "btn btn-success btn-small",
      style: {
        margin: '5px'
      },
      onClick: this.onFilterAdd
    }, "Add Filter")))) : null, query.servicenow.filters.map(function (filter, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "gf-form-inline"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "gf-form gf-form--grow"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        className: "gf-form-label width-8",
        title: "Filter"
      }, "Filter ", index + 1))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "gf-form gf-form--grow"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana__WEBPACK_IMPORTED_MODULE_3__["Select"], {
        className: "width-12",
        value: FilterFields.find(function (field) {
          return field.value === filter.field;
        }),
        options: FilterFields.filter(function (field) {
          return field.tables.indexOf(query.servicenow.table) > -1;
        }),
        defaultValue: filter.field,
        onChange: function onChange(e) {
          return _this.onFilterKeyChange(e, index);
        },
        allowCustomValue: true
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana__WEBPACK_IMPORTED_MODULE_3__["Select"], {
        className: "width-12",
        value: FilterOperators.find(function (gran) {
          return gran.value === filter.operator;
        }),
        options: FilterOperators,
        defaultValue: filter.operator,
        onChange: function onChange(e) {
          return _this.onFilterOperatorChange(e, index);
        },
        allowCustomValue: true
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        className: "gf-form-input width-12",
        title: "Value",
        placeholder: "Value",
        value: filter.value,
        onChange: function onChange(e) {
          return _this.onFilterValueChange(e, index);
        }
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "gf-form gf-form--grow"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "btn btn-success btn-small",
        style: {
          margin: '5px'
        },
        onClick: _this.onFilterAdd
      }, "+"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "btn btn-danger btn-small",
        style: {
          margin: '5px'
        },
        onClick: function onClick() {
          return _this.onFilterRemove(index);
        }
      }, "x")))));
    }));
  };

  return ServiceNowQueryFiltersCtrl;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/runtime":
/*!***********************************!*\
  !*** external "@grafana/runtime" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_runtime__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map