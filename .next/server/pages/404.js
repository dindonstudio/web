(() => {
var exports = {};
exports.id = 2197;
exports.ids = [2197];
exports.modules = {

/***/ 981:
/***/ ((module) => {

// Exports
module.exports = {
	"inLineListWrapper": "inLineList_inLineListWrapper__jPs1l",
	"narrow": "inLineList_narrow__6vfIN",
	"desktopCentered": "inLineList_desktopCentered__cJ4E_",
	"mobileFullWidth": "inLineList_mobileFullWidth__8AIzp",
	"mobileCentered": "inLineList_mobileCentered__aeSG0"
};


/***/ }),

/***/ 7089:
/***/ ((module) => {

// Exports
module.exports = {
	"notFound": "__404_notFound__kNVWz",
	"text": "__404_text__wx9FH",
	"surtitle": "__404_surtitle__QDIHt",
	"text1": "__404_text1__Bwoye",
	"text2": "__404_text2__C9rrF",
	"links": "__404_links__STDey",
	"image": "__404_image__AUNDu",
	"isVisible": "__404_isVisible__twze7",
	"content": "__404_content__uLAgt"
};


/***/ }),

/***/ 3370:
/***/ ((module) => {

// Exports
module.exports = {
	"withFullWidth": "slice_withFullWidth__1xe31",
	"withBackground": "slice_withBackground__iSEVc",
	"withLightBackground": "slice_withLightBackground__f3m4M",
	"withDarkBackground": "slice_withDarkBackground__ntiRd",
	"slice": "slice_slice__sdE0w",
	"withPadding": "slice_withPadding__JBLXK",
	"withMargin": "slice_withMargin__APsvz",
	"withNav": "slice_withNav__FzJly"
};


/***/ }),

/***/ 2448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _404),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/lib/api.js
var api = __webpack_require__(1145);
// EXTERNAL MODULE: ./src/pages/404.module.scss
var _404_module = __webpack_require__(7089);
var _404_module_default = /*#__PURE__*/__webpack_require__.n(_404_module);
// EXTERNAL MODULE: ./src/components/inLineList/inLineList.module.scss
var inLineList_module = __webpack_require__(981);
var inLineList_module_default = /*#__PURE__*/__webpack_require__.n(inLineList_module);
;// CONCATENATED MODULE: ./src/components/inLineList/InLineList.js



const InLineList = ({ children , className =null , narrow =false , mobileFullWidth =false , mobileCentered =false , desktopCentered =false ,  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()((inLineList_module_default()).inLineList, className),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: external_classnames_default()((inLineList_module_default()).inLineListWrapper, narrow && (inLineList_module_default()).narrow, mobileFullWidth && (inLineList_module_default()).mobileFullWidth, mobileCentered && (inLineList_module_default()).mobileCentered, desktopCentered && (inLineList_module_default()).desktopCentered),
            children: children
        })
    });
};
/* harmony default export */ const inLineList_InLineList = (InLineList);

// EXTERNAL MODULE: ./src/components/button/Button.js + 3 modules
var Button = __webpack_require__(6873);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/slices/slice.module.scss
var slice_module = __webpack_require__(3370);
var slice_module_default = /*#__PURE__*/__webpack_require__.n(slice_module);
;// CONCATENATED MODULE: ./src/slices/Slice.js




const Slice = ({ children =null , className =null , style ={} , bgColor =null , Tag ="section" , withPadding =false , withMargin =false , withFullWidth =false ,  }, ref)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Tag, {
        ref: ref,
        className: external_classnames_default()((slice_module_default()).slice, withPadding && !withFullWidth && (slice_module_default()).withPadding, withMargin && (slice_module_default()).withMargin, withFullWidth && (slice_module_default()).withFullWidth, className),
        style: bgColor ? {
            ...style,
            backgroundColor: bgColor
        } : style,
        children: withFullWidth ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: external_classnames_default()("container", withPadding && (slice_module_default()).withPadding),
            children: children
        }) : children
    });
};
/* harmony default export */ const slices_Slice = (/*#__PURE__*/(0,external_react_.forwardRef)(Slice));

;// CONCATENATED MODULE: ./src/pages/404.js








/**
 * 404 page
 */ const Custom404 = ({ pageTitle ="404" , links  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(slices_Slice, {
        className: (_404_module_default()).notFound,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: pageTitle
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (_404_module_default()).content,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (_404_module_default()).text,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: external_classnames_default()("hd-1 hm-1", (_404_module_default()).surtitle),
                            children: pageTitle
                        })
                    }),
                    (links === null || links === void 0 ? void 0 : links.length) ? /*#__PURE__*/ jsx_runtime_.jsx(inLineList_InLineList, {
                        className: (_404_module_default()).links,
                        mobileFullWidth: true,
                        desktopCentered: true,
                        children: links.map((link, i)=>/*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                link: link,
                                variant: Button/* ButtonVariant.rounded */.W.rounded
                            }, link._key)
                        )
                    }) : null
                ]
            })
        ]
    });
};
async function getStaticProps({ params , locale , preview =false , previewData  }) {
    const props = await (0,api.get404)(locale, preview);
    return {
        props: {
            ...props,
            preview
        }
    };
}
/* harmony default export */ const _404 = (Custom404);


/***/ }),

/***/ 6610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cn": () => (/* binding */ cn)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);

const cn = (...args)=>{
    return classnames__WEBPACK_IMPORTED_MODULE_0___default()(args);
};


/***/ }),

/***/ 1097:
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/client");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

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

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4686,1397,9505,1664,1145,6873], () => (__webpack_exec__(2448)));
module.exports = __webpack_exports__;

})();