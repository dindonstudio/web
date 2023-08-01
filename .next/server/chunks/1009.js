exports.id = 1009;
exports.ids = [1009];
exports.modules = {

/***/ 3873:
/***/ ((module) => {

// Exports
module.exports = {
	"stats": "stats_stats__7sf2i",
	"container": "stats_container__Mjppy",
	"intro": "stats_intro__QYN8x",
	"item": "stats_item__5kzJZ",
	"itemTitle": "stats_itemTitle__hAYU3",
	"background": "stats_background__sBCbc",
	"circle": "stats_circle__PagtD",
	"title": "stats_title__BU_Oo",
	"excerpt": "stats_excerpt__WvrYk",
	"items": "stats_items__k8skU",
	"itemWrap": "stats_itemWrap__B_qgj"
};


/***/ }),

/***/ 1009:
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
/* harmony import */ var _stats_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3873);
/* harmony import */ var _stats_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stats_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7441);
/* harmony import */ var components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8414);
/* harmony import */ var components_customBlockContent_CustomBlockContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6096);
/* harmony import */ var components_circleBackground_CircleBackground__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2215);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_2__, components_circleBackground_CircleBackground__WEBPACK_IMPORTED_MODULE_5__]);
([components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_2__, components_circleBackground_CircleBackground__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Stats = (props)=>{
    var ref, ref1;
    const { title =null , excerpt =null , items =null  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
        as: "section",
        childClassName: (_stats_module_scss__WEBPACK_IMPORTED_MODULE_3___default().stats),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("container", (_stats_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container)),
                children: [
                    (title || excerpt) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_stats_module_scss__WEBPACK_IMPORTED_MODULE_3___default().intro),
                        children: [
                            title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_customBlockContent_CustomBlockContent__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
                                as: "h2",
                                noDom: true,
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("hm-2 hd-2", (_stats_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title)),
                                blocks: title
                            }),
                            excerpt && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_customBlockContent_CustomBlockContent__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
                                as: "p",
                                noDom: true,
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("pm-16 pd-16", (_stats_module_scss__WEBPACK_IMPORTED_MODULE_3___default().excerpt)),
                                blocks: excerpt
                            })
                        ]
                    }),
                    (items === null || items === void 0 ? void 0 : items.length) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: (_stats_module_scss__WEBPACK_IMPORTED_MODULE_3___default().items),
                        children: items.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: (_stats_module_scss__WEBPACK_IMPORTED_MODULE_3___default().item),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_stats_module_scss__WEBPACK_IMPORTED_MODULE_3___default().itemWrap),
                                    children: [
                                        item.title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("hm-3 hd-4", (_stats_module_scss__WEBPACK_IMPORTED_MODULE_3___default().itemTitle)),
                                            children: item.title
                                        }),
                                        item.description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("pm-16 pd-16", (_stats_module_scss__WEBPACK_IMPORTED_MODULE_3___default().itemDescription)),
                                            children: item.description
                                        })
                                    ]
                                })
                            }, i)
                        )
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_circleBackground_CircleBackground__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                className: (_stats_module_scss__WEBPACK_IMPORTED_MODULE_3___default().background),
                childClassName: (_stats_module_scss__WEBPACK_IMPORTED_MODULE_3___default().circle),
                colors: {
                    bg: (ref = _config_variables__WEBPACK_IMPORTED_MODULE_6__/* .colors.greenDark */ .O.greenDark) === null || ref === void 0 ? void 0 : ref.hex,
                    circle: (ref1 = _config_variables__WEBPACK_IMPORTED_MODULE_6__/* .colors.green */ .O.green) === null || ref1 === void 0 ? void 0 : ref1.hex
                },
                fixed: false
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stats);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;