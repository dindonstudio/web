(() => {
var exports = {};
exports.id = 9670;
exports.ids = [9670];
exports.modules = {

/***/ 4077:
/***/ ((module) => {

// Exports
module.exports = {
	"integration": "_slug__integration__LPnnD",
	"backCta": "_slug__backCta__nHdgI",
	"title": "_slug__title__fUvQ8",
	"largeDescription": "_slug__largeDescription__dIxyb",
	"smallDescription": "_slug__smallDescription__OaR5j",
	"card": "_slug__card__MbcwO",
	"background": "_slug__background__yKLM9",
	"circle": "_slug__circle__7wink",
	"dealflow": "_slug__dealflow__lpL0s",
	"dealflowLogo": "_slug__dealflowLogo__jnBVS"
};


/***/ }),

/***/ 8595:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_variables__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7441);
/* harmony import */ var components_button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6873);
/* harmony import */ var components_card_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7706);
/* harmony import */ var components_circleBackground_CircleBackground__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2215);
/* harmony import */ var components_customBlockContent_CustomBlockContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6096);
/* harmony import */ var components_locale_Locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(922);
/* harmony import */ var components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8414);
/* harmony import */ var hooks_useSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7506);
/* harmony import */ var lib_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1145);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var svgs_dealflow_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(391);
/* harmony import */ var utils_cache__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4223);
/* harmony import */ var utils_classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6610);
/* harmony import */ var _slug_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4077);
/* harmony import */ var _slug_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_slug_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var svgs_arrowCta_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9097);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useSlice__WEBPACK_IMPORTED_MODULE_2__, components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_3__, components_circleBackground_CircleBackground__WEBPACK_IMPORTED_MODULE_11__]);
([hooks_useSlice__WEBPACK_IMPORTED_MODULE_2__, components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_3__, components_circleBackground_CircleBackground__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const SlugPage = (props)=>{
    const { title , excerpt , largeDescription , smallDescription , icon , cta  } = props;
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,hooks_useSlice__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(ref);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
        childClassName: (0,utils_classnames__WEBPACK_IMPORTED_MODULE_4__.cn)("container", (_slug_module_scss__WEBPACK_IMPORTED_MODULE_5___default().integration)),
        ref: ref,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_button_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                variant: components_button_Button__WEBPACK_IMPORTED_MODULE_6__/* .ButtonVariant.rounded */ .W.rounded,
                className: (_slug_module_scss__WEBPACK_IMPORTED_MODULE_5___default().backCta),
                href: "/integration",
                inverted: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(svgs_arrowCta_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_locale_Locale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        children: "Back"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_slug_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: (0,utils_classnames__WEBPACK_IMPORTED_MODULE_4__.cn)("hd-2 hm-54", (_slug_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title)),
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_customBlockContent_CustomBlockContent__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
                            as: "p",
                            blocks: largeDescription,
                            className: (0,utils_classnames__WEBPACK_IMPORTED_MODULE_4__.cn)("hm-2", (_slug_module_scss__WEBPACK_IMPORTED_MODULE_5___default().largeDescription)),
                            noDom: true
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (0,utils_classnames__WEBPACK_IMPORTED_MODULE_4__.cn)("pm-16", (_slug_module_scss__WEBPACK_IMPORTED_MODULE_5___default().smallDescription)),
                            children: smallDescription
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_card_Card__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                className: (_slug_module_scss__WEBPACK_IMPORTED_MODULE_5___default().card),
                title: title,
                excerpt: excerpt,
                icon: icon,
                cta: cta
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_circleBackground_CircleBackground__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                className: (_slug_module_scss__WEBPACK_IMPORTED_MODULE_5___default().background),
                childClassName: (_slug_module_scss__WEBPACK_IMPORTED_MODULE_5___default().circle),
                colors: {
                    bg: null,
                    circle: _config_variables__WEBPACK_IMPORTED_MODULE_12__/* .colors.yellow.hex */ .O.yellow.hex
                },
                parallax: 4
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (0,utils_classnames__WEBPACK_IMPORTED_MODULE_4__.cn)("desktop-only", (_slug_module_scss__WEBPACK_IMPORTED_MODULE_5___default().dealflow)),
                "aria-hidden": true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(svgs_dealflow_svg__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    className: (_slug_module_scss__WEBPACK_IMPORTED_MODULE_5___default().dealflowLogo)
                })
            })
        ]
    });
};
async function getStaticProps({ params , locale , preview =false  }) {
    const props = await (0,lib_api__WEBPACK_IMPORTED_MODULE_14__.getBySlug)(params.slug, locale, "integrationPost", "...", preview);
    if (!props) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            ...props,
            preview
        },
        revalidate: utils_cache__WEBPACK_IMPORTED_MODULE_15__/* .postRevalidate */ .Y
    };
}
async function getStaticPaths({ locales  }) {
    const slugs = await (0,lib_api__WEBPACK_IMPORTED_MODULE_14__.getDocumentPaths)(locales, "integrationPost");
    return {
        paths: slugs.map((s)=>"/integrations/" + s.current
        ),
        fallback: "blocking"
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SlugPage);

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4686,1397,9505,1664,5675,1145,8414,6873,7506,5542,6935,6096,189,9214,2215,212,5649], () => (__webpack_exec__(8595)));
module.exports = __webpack_exports__;

})();