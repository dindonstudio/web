exports.id = 2215;
exports.ids = [2215];
exports.modules = {

/***/ 5796:
/***/ ((module) => {

// Exports
module.exports = {
	"background": "circleBackground_background__Kes5X",
	"fixed": "circleBackground_fixed__XskOO",
	"overflowVisible": "circleBackground_overflowVisible__0hBlx",
	"circleWrapper": "circleBackground_circleWrapper__OsiuL",
	"circle": "circleBackground_circle__2AbBQ"
};


/***/ }),

/***/ 2215:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _circleBackground_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5796);
/* harmony import */ var _circleBackground_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_circleBackground_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_parallax_Parallax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4059);
/* harmony import */ var components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8414);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_parallax_Parallax__WEBPACK_IMPORTED_MODULE_4__, components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_5__]);
([components_parallax_Parallax__WEBPACK_IMPORTED_MODULE_4__, components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Circle = ({ circleRef , className =null , colors  })=>{
    /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: circleRef,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, (_circleBackground_module_scss__WEBPACK_IMPORTED_MODULE_3___default().circle)),
        style: (colors === null || colors === void 0 ? void 0 : colors.circle) ? {
            background: `radial-gradient(${colors === null || colors === void 0 ? void 0 : colors.circle} 30%, ${colors === null || colors === void 0 ? void 0 : colors.circle}00 70%)`
        } : null
    });
};
const CircleBackground = ({ circleRef =null , className =null , childClassName =null , style ={} , colors ={
    bg: "#000",
    circle: "#fff"
} , fixed =true , noCircle =false , overflowVisible =false , parallax =0 ,  }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, (_circleBackground_module_scss__WEBPACK_IMPORTED_MODULE_3___default().background), fixed && (_circleBackground_module_scss__WEBPACK_IMPORTED_MODULE_3___default().fixed), overflowVisible && (_circleBackground_module_scss__WEBPACK_IMPORTED_MODULE_3___default().overflowVisible), className),
        style: {
            ...style,
            background: colors === null || colors === void 0 ? void 0 : colors.bg
        },
        "aria-hidden": true,
        children: !noCircle && (parallax ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_parallax_Parallax__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            z: parallax,
            ease: (0,components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_5__/* .getEasing */ ._X)(),
            origin: components_parallax_Parallax__WEBPACK_IMPORTED_MODULE_4__/* .ORIGIN.center */ .j.center,
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_circleBackground_module_scss__WEBPACK_IMPORTED_MODULE_3___default().circleWrapper), childClassName),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Circle, {
                circleRef: circleRef,
                colors: colors
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Circle, {
            circleRef: circleRef,
            colors: colors,
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_circleBackground_module_scss__WEBPACK_IMPORTED_MODULE_3___default().circleWrapper), childClassName)
        }))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(CircleBackground));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;