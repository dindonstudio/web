exports.id = 5649;
exports.ids = [5649];
exports.modules = {

/***/ 8314:
/***/ ((module) => {

// Exports
module.exports = {
	"cardTitle": "card_cardTitle__gxzOh",
	"cardCta": "card_cardCta__JtqEE",
	"card": "card_card__yniO4",
	"iconWrapper": "card_iconWrapper__APPn3"
};


/***/ }),

/***/ 7706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6873);
/* harmony import */ var components_locale_Locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(922);
/* harmony import */ var _card_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8314);
/* harmony import */ var _card_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_card_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var svgs_arrowCta_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9097);
/* harmony import */ var lib_sanityImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6999);







const Card = ({ title , icon , excerpt , cta =null , className =null , slug =null  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default().card), className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default().iconWrapper),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: lib_sanityImage__WEBPACK_IMPORTED_MODULE_3__/* .imageBuilder.image */ .t.image(icon).url()
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("hm-2 hd-4", (_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default().cardTitle)),
                children: title
            }),
            excerpt && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("pm-13 pd-16", (_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default().cardDescription)),
                children: excerpt
            }),
            (cta || slug) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_button_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                variant: components_button_Button__WEBPACK_IMPORTED_MODULE_4__/* .ButtonVariant.rounded */ .W.rounded,
                className: (_card_module_scss__WEBPACK_IMPORTED_MODULE_2___default().cardCta),
                link: slug ? null : cta,
                href: slug && "/integrations/" + slug.current,
                inverted: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(svgs_arrowCta_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    slug ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_locale_Locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        children: "Learn more"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_locale_Locale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        children: "Request a demo"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ })

};
;