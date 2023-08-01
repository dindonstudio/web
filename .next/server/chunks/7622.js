exports.id = 7622;
exports.ids = [7622];
exports.modules = {

/***/ 9024:
/***/ ((module) => {

// Exports
module.exports = {
	"featureIntro": "featureIntro_featureIntro__PHDHl",
	"image": "featureIntro_image__X8Ftu",
	"dealflow": "featureIntro_dealflow__V16jA",
	"logo": "featureIntro_logo__40ny1",
	"title": "featureIntro_title__sh9J9",
	"background": "featureIntro_background__UiIV4",
	"circle": "featureIntro_circle__LutHF",
	"text": "featureIntro_text__mGy26",
	"excerpt": "featureIntro_excerpt__O0wTR"
};


/***/ }),

/***/ 7622:
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
/* harmony import */ var _featureIntro_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9024);
/* harmony import */ var _featureIntro_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_featureIntro_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_parallax_Parallax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4059);
/* harmony import */ var components_customBlockContent_CustomBlockContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6096);
/* harmony import */ var svgs_dealflow_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(391);
/* harmony import */ var components_image_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7283);
/* harmony import */ var components_circleBackground_CircleBackground__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2215);
/* harmony import */ var utils_mediaQueries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1455);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_parallax_Parallax__WEBPACK_IMPORTED_MODULE_3__, components_circleBackground_CircleBackground__WEBPACK_IMPORTED_MODULE_8__]);
([components_parallax_Parallax__WEBPACK_IMPORTED_MODULE_3__, components_circleBackground_CircleBackground__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const FeatureIntro = ({ title , excerpt , image , colors =null , className =null , imageClassName =null , backgroundOverflowVisible =false  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("container", (_featureIntro_module_scss__WEBPACK_IMPORTED_MODULE_2___default().featureIntro), className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_featureIntro_module_scss__WEBPACK_IMPORTED_MODULE_2___default().text),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_parallax_Parallax__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    z: 1.8,
                    mediaQueries: [
                        utils_mediaQueries__WEBPACK_IMPORTED_MODULE_4__/* .DESKTOP */ .q5
                    ],
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_featureIntro_module_scss__WEBPACK_IMPORTED_MODULE_2___default().dealflow),
                            style: {
                                background: colors === null || colors === void 0 ? void 0 : colors.text
                            },
                            "aria-hidden": true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(svgs_dealflow_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                className: (_featureIntro_module_scss__WEBPACK_IMPORTED_MODULE_2___default().logo),
                                style: {
                                    color: colors === null || colors === void 0 ? void 0 : colors.circle
                                }
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("hm-2 hd-3", (_featureIntro_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title)),
                            children: title
                        }),
                        excerpt && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_customBlockContent_CustomBlockContent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
                            className: (_featureIntro_module_scss__WEBPACK_IMPORTED_MODULE_2___default().excerpt),
                            blocks: excerpt
                        })
                    ]
                })
            }),
            image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_parallax_Parallax__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                z: 1,
                mediaQueries: [
                    utils_mediaQueries__WEBPACK_IMPORTED_MODULE_4__/* .MOBILE */ .Jq,
                    utils_mediaQueries__WEBPACK_IMPORTED_MODULE_4__/* .TABLET */ .EV
                ],
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_image_Image__WEBPACK_IMPORTED_MODULE_7__/* .SanityImage */ .d, {
                    image: image,
                    desktopWidth: 800,
                    mobileWidth: 410,
                    priority: true,
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_featureIntro_module_scss__WEBPACK_IMPORTED_MODULE_2___default().image), imageClassName)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_circleBackground_CircleBackground__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                className: (_featureIntro_module_scss__WEBPACK_IMPORTED_MODULE_2___default().background),
                childClassName: (_featureIntro_module_scss__WEBPACK_IMPORTED_MODULE_2___default().circle),
                colors: {
                    bg: null,
                    circle: colors === null || colors === void 0 ? void 0 : colors.circle
                },
                parallax: 4,
                overflowVisible: backgroundOverflowVisible
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeatureIntro);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;