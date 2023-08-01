exports.id = 4916;
exports.ids = [4916];
exports.modules = {

/***/ 7257:
/***/ ((module) => {

// Exports
module.exports = {
	"marquee": "marquee_marquee__HebE2",
	"withGradients": "marquee_withGradients__HsUAm",
	"wrapper": "marquee_wrapper__drbcf",
	"loop": "marquee_loop__DFUWk",
	"inverted": "marquee_inverted__CNxvf"
};


/***/ }),

/***/ 4916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_sanityImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _marquee_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7257);
/* harmony import */ var _marquee_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_marquee_module_scss__WEBPACK_IMPORTED_MODULE_4__);





const Instance = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(({ className =null , items , imageWidth =200  })=>{
    return items.map((item)=>{
        var ref;
        const [width, height] = (ref = item.asset._ref.split("-")[2]) === null || ref === void 0 ? void 0 : ref.split("x");
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: className,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                loading: "lazy",
                src: lib_sanityImage__WEBPACK_IMPORTED_MODULE_3__/* .imageBuilder.image */ .t.image(item).auto("format").width(imageWidth).url(),
                width: width,
                height: height,
                alt: item.alt
            })
        }, item._key);
    });
});
const Marquee = ({ items , className =null , renderCount =4 , perItemDuration =4 , itemClassName =null , renderItems =null , leftToRight =false , withGradients =true , imageWidth  }, ref)=>{
    if (!items) {
        console.warn("items must be defined");
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_marquee_module_scss__WEBPACK_IMPORTED_MODULE_4___default().marquee), withGradients && (_marquee_module_scss__WEBPACK_IMPORTED_MODULE_4___default().withGradients), className),
        ref: ref,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_marquee_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrapper), leftToRight && (_marquee_module_scss__WEBPACK_IMPORTED_MODULE_4___default().inverted)),
            style: {
                animationDuration: items.length * perItemDuration + "s"
            },
            children: Array.from(Array(renderCount)).map((item, i)=>renderItems ? renderItems(items, i) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Instance, {
                    className: itemClassName,
                    items: items,
                    imageWidth: imageWidth
                }, i)
            )
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(Marquee));


/***/ })

};
;