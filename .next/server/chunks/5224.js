exports.id = 5224;
exports.ids = [5224];
exports.modules = {

/***/ 795:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 5224:
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
/* harmony import */ var components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8414);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _timelineSection_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(795);
/* harmony import */ var _timelineSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_timelineSection_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_3__]);
components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const TimelineSection = ({ children , timeline , as ="section" , className =null , childClassName =null , isTop =false , onScroll =null , childRef =null  }, ref)=>{
    const percentRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(0);
    const handleScroll = ({ percent , percentTop  })=>{
        if (timeline === null || timeline === void 0 ? void 0 : timeline.current) {
            const p = Math.min(1, Math.max(0, isTop ? percentTop : percent));
            if (percentRef.current !== p) timeline.current.progress(p);
            percentRef.current = p;
        }
        if (onScroll) onScroll({
            percent,
            percentTop
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
        ref: ref,
        childRef: childRef,
        as: as,
        className: className,
        childClassName: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_timelineSection_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineSection), childClassName),
        onScroll: handleScroll,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(TimelineSection));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;