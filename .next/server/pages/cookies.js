(() => {
var exports = {};
exports.id = 6900;
exports.ids = [6900];
exports.modules = {

/***/ 391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 1264:
/***/ ((module) => {

// Exports
module.exports = {
	"cookie": "cookies_cookie__fZpkF",
	"container": "cookies_container__OrCWP",
	"header": "cookies_header__oYI_E",
	"headerDescr": "cookies_headerDescr__ISmgK",
	"headerDate": "cookies_headerDate__zR_aw",
	"dealflowLogo": "cookies_dealflowLogo__enx7v",
	"headerTitle": "cookies_headerTitle__K_bfB"
};


/***/ }),

/***/ 3336:
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
/* harmony import */ var _cookies_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1264);
/* harmony import */ var _cookies_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_cookies_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lib_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1145);
/* harmony import */ var utils_cache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4223);
/* harmony import */ var components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8414);
/* harmony import */ var _svgs_dealflow_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(391);
/* harmony import */ var hooks_useSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7506);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_customBlockContent_CustomBlockContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6096);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useSlice__WEBPACK_IMPORTED_MODULE_3__, components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_5__]);
([hooks_useSlice__WEBPACK_IMPORTED_MODULE_3__, components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Cookies = (props)=>{
    const { content  } = props;
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    (0,hooks_useSlice__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(ref);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_cookies_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cookie),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
                ref: ref,
                as: "section",
                childClassName: (_cookies_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cookie),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("container", (_cookies_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container)),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                        className: (_cookies_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("hm-2 hd-2", (_cookies_module_scss__WEBPACK_IMPORTED_MODULE_4___default().headerTitle)),
                            children: content.intro.title
                        })
                    })
                })
            }),
            content.body.text && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("pm-18", (_cookies_module_scss__WEBPACK_IMPORTED_MODULE_4___default().headerDescr)),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_dealflow_svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("desktop-only", (_cookies_module_scss__WEBPACK_IMPORTED_MODULE_4___default().dealflowLogo)),
                                "aria-hidden": true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_customBlockContent_CustomBlockContent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("hm-2 hd-2", (_cookies_module_scss__WEBPACK_IMPORTED_MODULE_4___default().headerDate)),
                                blocks: content.intro.lastUpdated
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_customBlockContent_CustomBlockContent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
                        blocks: content.body.text
                    })
                ]
            })
        ]
    });
};
async function getStaticProps({ params , locale , preview =false  }) {
    const props = await (0,lib_api__WEBPACK_IMPORTED_MODULE_8__.getPageById)("page.cookies", locale, preview);
    return {
        props: {
            ...props,
            preview
        },
        revalidate: utils_cache__WEBPACK_IMPORTED_MODULE_9__/* .pageRevalidate */ .T
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cookies);

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
var __webpack_exports__ = __webpack_require__.X(0, [4686,1397,9505,1664,5675,1145,8414,6873,7506,5542,6935,6096], () => (__webpack_exec__(3336)));
module.exports = __webpack_exports__;

})();