"use strict";
exports.id = 212;
exports.ids = [212];
exports.modules = {

/***/ 391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgDealflow = function SvgDealflow(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    width: "2.4rem",
    height: "3.9rem",
    viewBox: "0 0 24 39",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M.003 3.32A2.857 2.857 0 0 1 2.86.462h20.395s-.138 9.677-6.558 16.098C9.541 23.714.003 23.714.003 23.714V3.32ZM14.309 26.575a2.857 2.857 0 0 0-2.857-2.857H0s.085 5.954 4.036 9.906c4.402 4.402 10.273 4.402 10.273 4.402V26.575Z",
    fill: "currentColor"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgDealflow);

/***/ }),

/***/ 922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1202);


const Locale = ({ children  })=>{
    const l = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: l(children)
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Locale);


/***/ }),

/***/ 8853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const LocaleContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocaleContext);


/***/ }),

/***/ 1202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8853);


const useLocale = ()=>{
    const strings = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
    return (value)=>{
        var ref, ref1;
        return (strings === null || strings === void 0 ? void 0 : (ref = strings.find) === null || ref === void 0 ? void 0 : (ref1 = ref.call(strings, (entry)=>entry.key === value
        )) === null || ref1 === void 0 ? void 0 : ref1.value) || value;
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLocale);


/***/ })

};
;