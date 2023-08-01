(() => {
var exports = {};
exports.id = 6658;
exports.ids = [6658];
exports.modules = {

/***/ 6628:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "trust-center_header__UIYQY",
	"headerContainer": "trust-center_headerContainer__57bnm",
	"title": "trust-center_title__W2JKE",
	"headerText": "trust-center_headerText__9HtW3",
	"subtitle": "trust-center_subtitle__dWTHt",
	"description": "trust-center_description__7d45t",
	"illu": "trust-center_illu__K6qm9",
	"trustFeatures": "trust-center_trustFeatures__VF3AZ",
	"features": "trust-center_features__lNI8G",
	"feature": "trust-center_feature__CMj6l",
	"featureIcon": "trust-center_featureIcon__QbpJL",
	"featureTitle": "trust-center_featureTitle__EnjXl",
	"headerBackground": "trust-center_headerBackground__thmPq",
	"circle": "trust-center_circle__IAAV7",
	"largeTitleCta": "trust-center_largeTitleCta__IRe2G",
	"featureTitleWrap": "trust-center_featureTitleWrap__FEDdl",
	"featureDescr": "trust-center_featureDescr__DlRxu",
	"trustCenter": "trust-center_trustCenter__DLNX_",
	"largeTitleCtaImage": "trust-center_largeTitleCtaImage__jzFwo"
};


/***/ }),

/***/ 2706:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _trust_center_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6628);
/* harmony import */ var _trust_center_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_trust_center_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lib_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1145);
/* harmony import */ var utils_cache__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4223);
/* harmony import */ var _config_variables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7441);
/* harmony import */ var components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8414);
/* harmony import */ var components_customBlockContent_CustomBlockContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6096);
/* harmony import */ var components_image_Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7283);
/* harmony import */ var components_circleBackground_CircleBackground__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2215);
/* harmony import */ var components_parallax_Parallax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4059);
/* harmony import */ var slices_largeTitleCta_LargeTitleCta__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks_useSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7506);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useSlice__WEBPACK_IMPORTED_MODULE_3__, components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_5__, components_parallax_Parallax__WEBPACK_IMPORTED_MODULE_7__, components_circleBackground_CircleBackground__WEBPACK_IMPORTED_MODULE_9__, slices_largeTitleCta_LargeTitleCta__WEBPACK_IMPORTED_MODULE_11__]);
([hooks_useSlice__WEBPACK_IMPORTED_MODULE_3__, components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_5__, components_parallax_Parallax__WEBPACK_IMPORTED_MODULE_7__, components_circleBackground_CircleBackground__WEBPACK_IMPORTED_MODULE_9__, slices_largeTitleCta_LargeTitleCta__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const TrustCenter = (props)=>{
    var ref, ref1, ref2;
    const { content  } = props;
    const ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    (0,hooks_useSlice__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(ref3);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_trust_center_module_scss__WEBPACK_IMPORTED_MODULE_4___default().trustCenter),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
                as: "section",
                childClassName: (_trust_center_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("container", (_trust_center_module_scss__WEBPACK_IMPORTED_MODULE_4___default().headerContainer)),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("hm-0 hd-0", (_trust_center_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title)),
                                children: content.title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_trust_center_module_scss__WEBPACK_IMPORTED_MODULE_4___default().headerText),
                                children: [
                                    content.subtitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_customBlockContent_CustomBlockContent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
                                        className: (_trust_center_module_scss__WEBPACK_IMPORTED_MODULE_4___default().subtitle),
                                        options: {
                                            normalStyle: "hm-2 hd-4"
                                        },
                                        blocks: content.subtitle
                                    }),
                                    content.description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("pm-18", (_trust_center_module_scss__WEBPACK_IMPORTED_MODULE_4___default().description)),
                                        children: content.description
                                    })
                                ]
                            }),
                            content.image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_parallax_Parallax__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                z: -1.6,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_image_Image__WEBPACK_IMPORTED_MODULE_8__/* .SanityImage */ .d, {
                                    image: content.image,
                                    mobileWidth: 300,
                                    className: (_trust_center_module_scss__WEBPACK_IMPORTED_MODULE_4___default().illu)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_circleBackground_CircleBackground__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        className: (_trust_center_module_scss__WEBPACK_IMPORTED_MODULE_4___default().headerBackground),
                        childClassName: (_trust_center_module_scss__WEBPACK_IMPORTED_MODULE_4___default().circle),
                        colors: {
                            bg: (ref = _config_variables__WEBPACK_IMPORTED_MODULE_10__/* .colors.greenDark */ .O.greenDark) === null || ref === void 0 ? void 0 : ref.hex,
                            circle: (ref1 = _config_variables__WEBPACK_IMPORTED_MODULE_10__/* .colors.green */ .O.green) === null || ref1 === void 0 ? void 0 : ref1.hex
                        }
                    })
                ]
            }),
            ((ref2 = content.features) === null || ref2 === void 0 ? void 0 : ref2.length) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
                ref: ref3,
                as: "section",
                childClassName: (_trust_center_module_scss__WEBPACK_IMPORTED_MODULE_4___default().trustFeatures),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("container", (_trust_center_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container)),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: (_trust_center_module_scss__WEBPACK_IMPORTED_MODULE_4___default().features),
                        children: content.features.map((feature)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: (_trust_center_module_scss__WEBPACK_IMPORTED_MODULE_4___default().feature),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_trust_center_module_scss__WEBPACK_IMPORTED_MODULE_4___default().featureTitleWrap),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_image_Image__WEBPACK_IMPORTED_MODULE_8__/* .SanityImage */ .d, {
                                                image: feature.icon,
                                                desktopWidth: 45,
                                                mobileWidth: 45,
                                                className: (_trust_center_module_scss__WEBPACK_IMPORTED_MODULE_4___default().featureIcon)
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("hm-2 hd-2", (_trust_center_module_scss__WEBPACK_IMPORTED_MODULE_4___default().featureTitle)),
                                                children: feature.title
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("pm-18", (_trust_center_module_scss__WEBPACK_IMPORTED_MODULE_4___default().featureDescr)),
                                        children: feature.description
                                    })
                                ]
                            }, feature._key)
                        )
                    })
                })
            }),
            content.largeTitleCta && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(slices_largeTitleCta_LargeTitleCta__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                ...content.largeTitleCta,
                imageParams: {
                    desktopWidth: 1100,
                    mobileWidth: 350
                },
                className: (_trust_center_module_scss__WEBPACK_IMPORTED_MODULE_4___default().largeTitleCta),
                imageClassName: (_trust_center_module_scss__WEBPACK_IMPORTED_MODULE_4___default().largeTitleCtaImage)
            })
        ]
    });
};
async function getStaticProps({ params , locale , preview =false  }) {
    const props = await (0,lib_api__WEBPACK_IMPORTED_MODULE_12__.getPageById)("page.trustCenter", locale, preview);
    return {
        props: {
            ...props,
            preview
        },
        revalidate: utils_cache__WEBPACK_IMPORTED_MODULE_13__/* .pageRevalidate */ .T
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrustCenter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4836:
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/block-content-to-react");

/***/ }),

/***/ 1097:
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/client");

/***/ }),

/***/ 1791:
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/image-url");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 3377:
/***/ ((module) => {

"use strict";
module.exports = require("detect-it");

/***/ }),

/***/ 4287:
/***/ ((module) => {

"use strict";
module.exports = require("gsap");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9785:
/***/ ((module) => {

"use strict";
module.exports = require("react-intersection-observer");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6912:
/***/ ((module) => {

"use strict";
module.exports = import("zustand");;

/***/ }),

/***/ 1561:
/***/ ((module) => {

"use strict";
module.exports = import("zustand/shallow");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4686,1397,9505,1664,5675,1145,8414,6873,7506,5542,6935,6096,189,9214,2215,1648], () => (__webpack_exec__(2706)));
module.exports = __webpack_exports__;

})();