(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 4031:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "footer_footer__ZK5Q_",
	"footerWrap": "footer_footerWrap__wTFWs",
	"container": "footer_container__5QxAl",
	"top": "footer_top__Upalj",
	"logo": "footer_logo__bA1ZD",
	"content": "footer_content__EDyQi",
	"link": "footer_link__j_gJ3",
	"nav": "footer_nav__XNGc9",
	"bottom": "footer_bottom__BZmGy",
	"credits": "footer_credits__0Tj7b",
	"slogan": "footer_slogan__h2mgL",
	"socialLinks": "footer_socialLinks__6g32K"
};


/***/ }),

/***/ 699:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "header_header__3o0p0",
	"hasBackground": "header_hasBackground__kBtMU"
};


/***/ }),

/***/ 5452:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "nav_nav__eVb5m",
	"isAbsolute": "nav_isAbsolute__w772k",
	"hasBackground": "nav_hasBackground__sJj4C",
	"isOpen": "nav_isOpen__Ylr9O",
	"logo": "nav_logo__iUEYR",
	"button": "nav_button__heAmO",
	"demo": "nav_demo__jugsC",
	"isHidden": "nav_isHidden__V_n_K",
	"isDisplayed": "nav_isDisplayed__MNIyt",
	"element": "nav_element__qZw4E",
	"wrapper": "nav_wrapper__jKk0j",
	"right": "nav_right__ps6E0",
	"burger": "nav_burger__lNtRg",
	"close": "nav_close__mLKcz",
	"line": "nav_line__ZivxI",
	"light": "nav_light__ty_Ep",
	"primaryLink": "nav_primaryLink__afX9q",
	"left": "nav_left__EDL6H"
};


/***/ }),

/***/ 3898:
/***/ ((module) => {

// Exports
module.exports = {
	"navPanel": "navPanel_navPanel__7WkJj",
	"isOpen": "navPanel_isOpen__1TcIR",
	"primaryLink": "navPanel_primaryLink__zF9rT",
	"login": "navPanel_login__DRsjq",
	"wrapper": "navPanel_wrapper__tIHNH",
	"bottom": "navPanel_bottom__4iOYC"
};


/***/ }),

/***/ 2952:
/***/ ((module) => {

// Exports
module.exports = {
	"newsletter": "layout_newsletter__ISmg1",
	"transition": "layout_transition__K5Kvb",
	"isPopinOpened": "layout_isPopinOpened__PlhwE",
	"exitPreview": "layout_exitPreview__kmYWr"
};


/***/ }),

/***/ 9349:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_useLocale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1202);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6610);
/* harmony import */ var _footer_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4031);
/* harmony import */ var _footer_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_footer_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _svgs_logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3285);
/* harmony import */ var components_button_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6873);
/* harmony import */ var components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8414);
/* harmony import */ var hooks_useSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7506);
/* harmony import */ var hooks_useTracker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3865);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useSlice__WEBPACK_IMPORTED_MODULE_4__, components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_7__]);
([hooks_useSlice__WEBPACK_IMPORTED_MODULE_4__, components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Footer = (props)=>{
    const { slogan =null , mainLinks , secondaryLinks , socialLinks  } = props;
    const locale = (0,hooks_useLocale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const year = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(new Date().getFullYear());
    const ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,hooks_useSlice__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(ref1);
    const logoLink = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().logo),
            title: locale("Back to home"),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_logo_svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
        })
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
        ref: ref1,
        as: "footer",
        className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().footerWrap),
        childClassName: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().footer),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (0,utils_classnames__WEBPACK_IMPORTED_MODULE_8__.cn)((_footer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container), "container"),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().top),
                        children: [
                            logoLink,
                            slogan && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: (0,utils_classnames__WEBPACK_IMPORTED_MODULE_8__.cn)("pm-16 pd-16", (_footer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().slogan)),
                                children: [
                                    slogan,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("sup", {
                                        children: "\xa9"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                                className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav),
                                children: [
                                    mainLinks && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().mainLinks),
                                        children: mainLinks.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_Button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                    className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().link),
                                                    variant: components_button_Button__WEBPACK_IMPORTED_MODULE_9__/* .ButtonVariant.underlined */ .W.underlined,
                                                    link: link,
                                                    children: link.label
                                                })
                                            }, link._key)
                                        )
                                    }),
                                    secondaryLinks && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().secondaryLinks),
                                        children: secondaryLinks.map((link)=>{
                                            var ref;
                                            /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_Button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                    className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().link),
                                                    variant: components_button_Button__WEBPACK_IMPORTED_MODULE_9__/* .ButtonVariant.underlined */ .W.underlined,
                                                    link: link,
                                                    active: (ref = link.url) === null || ref === void 0 ? void 0 : ref.includes("mailto"),
                                                    children: link.label
                                                })
                                            }, link._key);
                                        })
                                    }),
                                    socialLinks && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().socialLinks),
                                        children: socialLinks.map((social)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_Button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                    className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().link),
                                                    variant: components_button_Button__WEBPACK_IMPORTED_MODULE_9__/* .ButtonVariant.underlined */ .W.underlined,
                                                    href: social.url,
                                                    children: social.label
                                                })
                                            }, social._key)
                                        )
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (0,utils_classnames__WEBPACK_IMPORTED_MODULE_8__.cn)("p", (_footer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().bottom)),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_5___default().copyright),
                                    children: [
                                        "Edda - ",
                                        year.current,
                                        " - All rights reserved"
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(hooks_useTracker__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_sanityImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6999);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4780);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_3__);





const HeadModule = ({ title ="" , description ="" , url =null , image =null  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: title
                    }),
                    description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/icons/apple-touch-icon.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/icons/favicon-32x32.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/icons/favicon-16x16.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "manifest",
                        href: "/icons/site.webmanifest"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "mask-icon",
                        href: "/icons/safari-pinned-tab.svg",
                        color: "#5647f8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "shortcut icon",
                        href: "/icons/favicon.ico"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "msapplication-TileColor",
                        content: "#ffffff"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "msapplication-config",
                        content: "/icons/browserconfig.xml"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "theme-color",
                        content: "#ffffff"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
                    }),
                    router.locale && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:locale",
                        content: router.locale
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: lib_sanityImage__WEBPACK_IMPORTED_MODULE_4__/* .imageBuilder.image */ .t.image(image).size(1200, 630).url()
                    }),
                    title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: title
                    }),
                    description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: description
                    }),
                    url && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:url",
                        content: url
                    }),
                    image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:title",
                        content: title
                    }),
                    description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:description",
                        content: description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "preconnect",
                        href: "https://cdn.sanity.io"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {
                strategy: "beforeInteractive",
                src: "https://polyfill.io/v3/polyfill.min.js?features=AbortController%2CIntersectionObserver%2CResizeObserver%2CString.prototype.matchAll"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeadModule);


/***/ }),

/***/ 7149:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(699);
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_header_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_nav_Nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3787);
/* harmony import */ var components_navPanel_NavPanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7101);
/* harmony import */ var stores_useScrollStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6679);
/* harmony import */ var hooks_useSlicesObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9196);
/* harmony import */ var hooks_useWindowScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1209);
/* harmony import */ var utils_classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6610);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([stores_useScrollStore__WEBPACK_IMPORTED_MODULE_2__, hooks_useSlicesObserver__WEBPACK_IMPORTED_MODULE_3__]);
([stores_useScrollStore__WEBPACK_IMPORTED_MODULE_2__, hooks_useSlicesObserver__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Header = ({ links , login , demo  })=>{
    const navRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: isMenuOpen , 1: setIsMenuOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const setIsLocked = (0,stores_useScrollStore__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((state)=>state.setIsLocked
    );
    const [isLight] = (0,hooks_useSlicesObserver__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(navRef);
    const { 0: hasBackground , 1: setHasBackground  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleClickBurger = ()=>{
        setIsMenuOpen(!isMenuOpen);
        setIsLocked(!isMenuOpen);
    };
    const handleClickLink = ()=>{
        setIsMenuOpen(false);
        setIsLocked(false);
    };
    (0,hooks_useWindowScroll__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)((e)=>{
        if (e.scrollY > 200 && !hasBackground) {
            setHasBackground(true);
        } else if (e.scrollY <= 200 && hasBackground) {
            setHasBackground(false);
        }
    }, false, [
        hasBackground
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (0,utils_classnames__WEBPACK_IMPORTED_MODULE_5__.cn)((_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default().header), hasBackground && (_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default().hasBackground)),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_nav_Nav__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                links: links,
                login: login,
                demo: demo,
                theme: components_nav_Nav__WEBPACK_IMPORTED_MODULE_7__/* .headerTheme.light */ .Q.light,
                onClickBurger: handleClickBurger,
                onClickLink: handleClickLink,
                isOpen: isMenuOpen,
                isHidden: isLight,
                ref: navRef,
                hasBackground: hasBackground
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_nav_Nav__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                links: links,
                login: login,
                demo: demo,
                theme: components_nav_Nav__WEBPACK_IMPORTED_MODULE_7__/* .headerTheme.dark */ .Q.dark,
                onClickBurger: handleClickBurger,
                onClickLink: handleClickLink,
                isOpen: isMenuOpen,
                isHidden: !isLight,
                isAbsolute: true,
                hasBackground: hasBackground
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_navPanel_NavPanel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                links: links,
                login: login,
                demo: demo,
                onClickLink: handleClickLink,
                isOpen: isMenuOpen
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ nav_Nav),
  "Q": () => (/* binding */ headerTheme)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/utils/classnames.js
var classnames = __webpack_require__(6610);
// EXTERNAL MODULE: ./src/components/button/Button.js + 3 modules
var Button = __webpack_require__(6873);
// EXTERNAL MODULE: ./src/svgs/logo.svg
var logo = __webpack_require__(3285);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/svgs/close.svg
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgClose = function SvgClose(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: "1.1rem",
    height: "1.1rem",
    viewBox: "0 0 11 11",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.892 0 5.5 4.392 1.108 0 0 1.108 4.392 5.5 0 9.892 1.108 11 5.5 6.608 9.892 11 11 9.892 6.608 5.5 11 1.108 9.892 0Z"
  })));
};

/* harmony default export */ const svgs_close = (SvgClose);
// EXTERNAL MODULE: ./src/svgs/arrowCta.svg
var arrowCta = __webpack_require__(9097);
// EXTERNAL MODULE: ./src/components/nav/nav.module.scss
var nav_module = __webpack_require__(5452);
var nav_module_default = /*#__PURE__*/__webpack_require__.n(nav_module);
// EXTERNAL MODULE: ./src/hooks/useLocale.js
var useLocale = __webpack_require__(1202);
;// CONCATENATED MODULE: ./src/components/nav/Nav.js










const headerTheme = {
    light: "light",
    dark: "dark"
};
const Nav = ({ className =null , links , login , demo , theme =headerTheme.light , onClickBurger , onClickLink , isOpen =false , isHidden =true , isAbsolute =false , hasBackground =false  }, ref)=>{
    const locale = (0,useLocale/* default */.Z)();
    const x = 2;
    const localRef = (0,external_react_.useRef)(null);
    const { 0: isDisplayed , 1: setIsDisplayed  } = (0,external_react_.useState)(false);
    const setRefs = (0,external_react_.useCallback)((element)=>{
        if (ref) ref.current = element;
        localRef.current = element;
    }, []);
    (0,external_react_.useEffect)(()=>{
        setIsDisplayed(true);
    }, []);
    const delay = 0.03;
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        ref: setRefs,
        className: (0,classnames.cn)((nav_module_default()).nav, className, (nav_module_default())[theme], isOpen && (nav_module_default()).isOpen, isHidden && (nav_module_default()).isHidden, isDisplayed && (nav_module_default()).isDisplayed, isAbsolute && (nav_module_default()).isAbsolute, hasBackground && (nav_module_default()).hasBackground),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (0,classnames.cn)("container", (nav_module_default()).wrapper),
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (nav_module_default()).left,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (nav_module_default()).element,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                variant: Button/* ButtonVariant.circle */.W.circle,
                                className: (0,classnames.cn)("mobile-only", (nav_module_default()).button, (nav_module_default()).burger, isOpen && (nav_module_default()).isOpen),
                                label: locale("Toggle menu"),
                                onClick: onClickBurger,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(svgs_close, {
                                        className: (nav_module_default()).close
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (nav_module_default()).line
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (nav_module_default()).line
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (nav_module_default()).line
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (nav_module_default()).element,
                            style: {
                                "--delay": `${delay}s`,
                                "--delay-mobile": `${0.1}s`
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: (nav_module_default()).logo,
                                    title: locale("Back to home"),
                                    onClick: onClickLink,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(logo/* default */.Z, {})
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (0,classnames.cn)("desktop-only", (nav_module_default()).primaryLinks),
                    children: links === null || links === void 0 ? void 0 : links.map((link, i)=>/*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                            link: link,
                            variant: Button/* ButtonVariant.underlined */.W.underlined,
                            className: (0,classnames.cn)("pd-13 hm-4", (nav_module_default()).primaryLink, (nav_module_default()).element),
                            activateClassName: (0,classnames.cn)((nav_module_default()).primaryLinkActive),
                            canActivate: true,
                            style: {
                                "--delay": `${(i + 2) * delay}s`
                            },
                            onClick: onClickLink
                        }, link._key)
                    )
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (nav_module_default()).right,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (0,classnames.cn)((nav_module_default()).primaryLink, (nav_module_default()).element),
                            style: {
                                "--delay": `${(links.length + 2) * delay}s`
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                link: login,
                                variant: Button/* ButtonVariant.underlined */.W.underlined,
                                className: (0,classnames.cn)("pd-13 hm-4 desktop-only"),
                                onClick: onClickLink
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (0,classnames.cn)((nav_module_default()).element),
                            style: {
                                "--delay": `${(links.length + 3) * delay}s`,
                                "--delay-mobile": `${0.2}s`
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                link: demo,
                                variant: Button/* ButtonVariant.rounded */.W.rounded,
                                className: (0,classnames.cn)("pd-13 pm-13", (nav_module_default()).demo, (nav_module_default()).button),
                                onClick: onClickLink,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(arrowCta/* default */.Z, {
                                        className: "desktop-only"
                                    }),
                                    " ",
                                    demo.label
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const nav_Nav = (/*#__PURE__*/(0,external_react_.forwardRef)(Nav));


/***/ }),

/***/ 7101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6610);
/* harmony import */ var components_button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6873);
/* harmony import */ var _navPanel_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3898);
/* harmony import */ var _navPanel_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_navPanel_module_scss__WEBPACK_IMPORTED_MODULE_2__);




const NavPanel = ({ className =null , links , login , demo , onClickLink , isOpen  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: (0,utils_classnames__WEBPACK_IMPORTED_MODULE_1__.cn)("mobile-only", (_navPanel_module_scss__WEBPACK_IMPORTED_MODULE_2___default().navPanel), className, isOpen && (_navPanel_module_scss__WEBPACK_IMPORTED_MODULE_2___default().isOpen)),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_navPanel_module_scss__WEBPACK_IMPORTED_MODULE_2___default().wrapper),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    children: links === null || links === void 0 ? void 0 : links.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                link: link,
                                variant: components_button_Button__WEBPACK_IMPORTED_MODULE_3__/* .ButtonVariant.underlined */ .W.underlined,
                                className: (0,utils_classnames__WEBPACK_IMPORTED_MODULE_1__.cn)("hm-3", (_navPanel_module_scss__WEBPACK_IMPORTED_MODULE_2___default().primaryLink)),
                                activateClassName: (0,utils_classnames__WEBPACK_IMPORTED_MODULE_1__.cn)((_navPanel_module_scss__WEBPACK_IMPORTED_MODULE_2___default().primaryLinkActive)),
                                canActivate: true,
                                onClick: onClickLink
                            })
                        }, link._key)
                    )
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_navPanel_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bottom),
                    children: login && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        link: login,
                        variant: components_button_Button__WEBPACK_IMPORTED_MODULE_3__/* .ButtonVariant.rounded */ .W.rounded,
                        transparent: true,
                        className: (0,utils_classnames__WEBPACK_IMPORTED_MODULE_1__.cn)("pd-13 hm-4", (_navPanel_module_scss__WEBPACK_IMPORTED_MODULE_2___default().login)),
                        onClick: onClickLink
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavPanel);


/***/ }),

/***/ 8853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const LocaleContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocaleContext);


/***/ }),

/***/ 1649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LocaleContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8853);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const LocaleContextProvider = ({ children , strings  })=>{
    const state = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(strings);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LocaleContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Provider */ .Z.Provider, {
        value: state.current,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocaleContextProvider);


/***/ }),

/***/ 4389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5137);


/**
 * Accepts a function and returns a new debounced yet memoized version of that same function that delays
 * its invoking by the defined time.<br />
 * If time is not defined, its default value will be 250ms.
 *
 * ### Usage:
 *
 * ```jsx harmony
 *
 * const TestComponent = () => {
 *   const [width, setWidth] = useState(window.innerWidth);
 *   const [height, setHeight] = useState(window.innerHeight);
 *   const onWindowResize = useWindowResize();
 *
 *   onWindowResize(useDebouncedCallback(() => {
 *     setWidth(window.innerWidth);
 *     setHeight(window.innerHeight);
 *   }, 250));
 *
 *   return (
 *     <div style={compStyle}>
 *       <p>window width: {width}</p>
 *       <p>window height: {height}</p>
 *    </div>
 *   );
 * ```
 *
 * ### Debounce time:
 *
 * It is possible to change the debounce time by defining how many ms to wait:
 *
 * ```jsx harmony
 * const useDebouncedBy250 = (fn) => useDebouncedCallback(fn, 250);
 * ```
 *
 * ### Dependencies:
 *
 * Since `useDebouncedCallback` uses `useCallback` under the hood, it is also possible to define its dependencies:
 *
 * ```jsx harmony
 * const TestComponent = (props) => {
 *   const [width, setWidth] = useState(window.innerWidth);
 *   const [height, setHeight] = useState(window.innerHeight);
 *   const onWindowResize = useWindowResize();
 *
 *   onWindowResize(useDebouncedCallback(() => {
 *     setWidth(window.innerWidth);
 *     setHeight(window.innerHeight);
 *   }, 250, [props.foo, props.bar]));
 *
 *   return (
 *     <div style={compStyle}>
 *       <p>window width: {width}</p>
 *       <p>window height: {height}</p>
 *    </div>
 *   );
 * ```
 */ const useDebouncedCallback = (fn, wait = 200, dependencies)=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((0,_utils_debounce__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(fn, wait), dependencies)
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDebouncedCallback);


/***/ }),

/***/ 1202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8853);


const useLocale = ()=>{
    const strings = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
    return (value)=>{
        var ref, ref1;
        return (strings === null || strings === void 0 ? void 0 : (ref = strings.find) === null || ref === void 0 ? void 0 : (ref1 = ref.call(strings, (entry)=>entry.key === value
        )) === null || ref1 === void 0 ? void 0 : ref1.value) || value;
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLocale);


/***/ }),

/***/ 9196:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_useSlicesStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2416);
/* harmony import */ var utils_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5137);
/* harmony import */ var _useDebouncedCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4389);
/* harmony import */ var _useWindowResize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8216);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([stores_useSlicesStore__WEBPACK_IMPORTED_MODULE_1__]);
stores_useSlicesStore__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const useSlicesObserver = (ref)=>{
    const { 0: isLight , 1: setIsLight  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const intersectionObserver = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const slices = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(stores_useSlicesStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getState */ .Z.getState().slices);
    const intersectedSlices = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
    const innerWidth = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    const refBoundingClientRect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>stores_useSlicesStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].subscribe */ .Z.subscribe((0,utils_debounce__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((state)=>{
            intersectionObserver.current.disconnect();
            slices.current = state.slices;
            state.slices.forEach((slice)=>{
                intersectionObserver.current.observe(slice);
            });
        }, 0))
    , []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return ()=>{
            if (intersectionObserver.current) {
                intersectionObserver.current.disconnect();
            }
        };
    }, []);
    (0,_useWindowResize__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)((e)=>{
        if (intersectionObserver.current) intersectionObserver.current.disconnect();
        if (!ref.current) return;
        if (e.innerWidth !== innerWidth.current) {
            refBoundingClientRect.current = ref.current.getBoundingClientRect();
        }
        innerWidth.current = e.innerWidth;
        const height = refBoundingClientRect.current.height;
        const top = refBoundingClientRect.current.top;
        const rootMargin = `${Math.round(-top - height / 2)}px -50% ${Math.round(top + height / 2 - e.innerHeight + 1)}px -50%`;
        intersectionObserver.current = new IntersectionObserver(handleIntersect, {
            rootMargin
        });
        slices.current.forEach((slice)=>{
            intersectionObserver.current.observe(slice);
        });
    }, true, [], 30);
    const debouncedIntersect = (0,_useDebouncedCallback__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(()=>{
        let isDark = true;
        intersectedSlices.current.forEach((slice)=>{
            isDark = false //slice.__isDark
            ;
        });
        setIsLight(!isDark);
    }, 30, []);
    const handleIntersect = (entries, observer)=>{
        entries.forEach((entry)=>{
            const index = intersectedSlices.current.indexOf(entry.target);
            if (entry.isIntersecting && index === -1) {
                intersectedSlices.current.push(entry.target);
            } else if (!entry.isIntersecting && index !== -1) {
                intersectedSlices.current.splice(index, 1);
            }
        });
        debouncedIntersect();
    };
    return [
        isLight
    ];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSlicesObserver);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Usetracker = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const script = document.createElement("script");
        script.innerHTML = `
      (function(ss, ex){
        window.ldfdr = window.ldfdr || function(){
          (ldfdr._q = ldfdr._q || []).push([].slice.call(arguments));
        };
        (function(d, s){
          var fs = d.getElementsByTagName(s)[0];
          function ce(src){
            var cs = d.createElement(s);
            cs.src = src;
            cs.async = 1;
            fs.parentNode.insertBefore(cs, fs);
          }
          ce('https://sc.lfeeder.com/lftracker_v1_' + ss + (ex ? '_' + ex : '') + '.js');
        })(document, 'script');
      })('3P1w24djmWg8mY5n');
    `;
        document.body.appendChild(script);
        const hsScript = document.createElement("script");
        hsScript.type = "text/javascript";
        hsScript.id = "hs-script-loader";
        hsScript.async = true;
        hsScript.defer = true;
        hsScript.src = "//js-eu1.hs-scripts.com/26231736.js";
        document.body.appendChild(hsScript);
        return ()=>{
            document.body.removeChild(script);
            document.body.removeChild(hsScript);
        };
    }, []);
    return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Usetracker);


/***/ }),

/***/ 990:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4417);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var stores_useAppStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7462);
/* harmony import */ var hooks_useWindowResize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8216);
/* harmony import */ var utils_useTransitionFix__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7361);
/* harmony import */ var components_head_Head__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2689);
/* harmony import */ var components_header_Header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7149);
/* harmony import */ var components_footer_Footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9349);
/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2952);
/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_layout_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var utils_classnames__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6610);
/* harmony import */ var components_button_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6873);
/* harmony import */ var utils_text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(874);
/* harmony import */ var _utils_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3939);
/* harmony import */ var stores_useScrollStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6679);
/* harmony import */ var detect_it__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3377);
/* harmony import */ var detect_it__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(detect_it__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var eases__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(543);
/* harmony import */ var eases__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(eases__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([stores_useScrollStore__WEBPACK_IMPORTED_MODULE_7__, stores_useAppStore__WEBPACK_IMPORTED_MODULE_11__, components_header_Header__WEBPACK_IMPORTED_MODULE_14__, components_footer_Footer__WEBPACK_IMPORTED_MODULE_15__]);
([stores_useScrollStore__WEBPACK_IMPORTED_MODULE_7__, stores_useAppStore__WEBPACK_IMPORTED_MODULE_11__, components_header_Header__WEBPACK_IMPORTED_MODULE_14__, components_footer_Footer__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















const PageTransition = ({ children: children1  })=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const refScrollY = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const isTouch = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(detect_it__WEBPACK_IMPORTED_MODULE_4__.primaryInput === "touch");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const transitionCallback = (0,utils_useTransitionFix__WEBPACK_IMPORTED_MODULE_6__/* .useTransitionFix */ ._)();
    const isScrollLocked = (0,stores_useScrollStore__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)((state)=>state.isLocked
    );
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!ref.current) return;
        if (isScrollLocked) {
            if (isTouch.current) {
                document.body.style.overflowY = "hidden";
            } else {
                refScrollY.current = window.scrollY;
                ref.current.style.position = "fixed";
            }
        } else {
            if (isTouch.current) {
                document.body.style.overflowY = "";
            } else {
                ref.current.style.position = "";
                window.scrollTo(0, refScrollY.current);
            }
        }
    }, [
        isScrollLocked
    ]);
    const transition = (0,react_spring__WEBPACK_IMPORTED_MODULE_3__.useTransition)({
        children: children1
    }, {
        keys: router.asPath.split("#")[0],
        from: {
            opacity: 0
        },
        enter: {
            opacity: 1
        },
        leave: {
            position: "fixed",
            visibility: "hidden",
            immediate: true,
            onRest () {
                requestAnimationFrame(()=>{
                    transitionCallback();
                });
            }
        },
        config: {
            duration: 1000,
            easing: eases__WEBPACK_IMPORTED_MODULE_5__.quartOut
        }
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: transition((style, { children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__.animated.div, {
                className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default().transition),
                style: style,
                ref: ref,
                children: children
            })
        )
    });
};
const Layout = ({ appProps , pageProps , children  })=>{
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7;
    const { header , footer , meta  } = appProps.settings;
    let metaTitle = (pageProps === null || pageProps === void 0 ? void 0 : (ref = pageProps.content) === null || ref === void 0 ? void 0 : ref.metaTitle) || (pageProps === null || pageProps === void 0 ? void 0 : pageProps.title) || (pageProps === null || pageProps === void 0 ? void 0 : (ref1 = pageProps.content) === null || ref1 === void 0 ? void 0 : ref1.surtitle) || (pageProps === null || pageProps === void 0 ? void 0 : (ref2 = pageProps.content) === null || ref2 === void 0 ? void 0 : ref2.title);
    if (metaTitle) {
        if (meta === null || meta === void 0 ? void 0 : meta.title) metaTitle = (0,_utils_string__WEBPACK_IMPORTED_MODULE_9__/* .resolvePlaceholders */ .pI)(meta.title, {
            pageTitle: metaTitle,
            siteTitle: meta.siteTitle
        });
    } else {
        metaTitle = meta === null || meta === void 0 ? void 0 : meta.siteTitle;
    }
    const metaDescription = (pageProps === null || pageProps === void 0 ? void 0 : (ref3 = pageProps.content) === null || ref3 === void 0 ? void 0 : ref3.metaDescription) || (pageProps === null || pageProps === void 0 ? void 0 : (ref4 = pageProps.taxoAndArticles) === null || ref4 === void 0 ? void 0 : ref4.metaDescription) || (0,utils_text__WEBPACK_IMPORTED_MODULE_10__/* .sanityBlockContentToString */ .YK)(pageProps === null || pageProps === void 0 ? void 0 : (ref5 = pageProps.content) === null || ref5 === void 0 ? void 0 : ref5.excerpt, false) || (meta === null || meta === void 0 ? void 0 : meta.description);
    const metaImage = (pageProps === null || pageProps === void 0 ? void 0 : (ref6 = pageProps.content) === null || ref6 === void 0 ? void 0 : ref6.metaImage) || (pageProps === null || pageProps === void 0 ? void 0 : (ref7 = pageProps.content) === null || ref7 === void 0 ? void 0 : ref7.poster) || (meta === null || meta === void 0 ? void 0 : meta.image);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const sbw = window.innerWidth - document.body.offsetWidth;
        stores_useAppStore__WEBPACK_IMPORTED_MODULE_11__/* ["default"].setState */ .Z.setState({
            scrollbarWidth: sbw
        });
        document.documentElement.style.setProperty("--sbw", `${sbw}px`);
    }, []);
    (0,hooks_useWindowResize__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)((e)=>{
        stores_useAppStore__WEBPACK_IMPORTED_MODULE_11__/* ["default"].setState */ .Z.setState({
            windowSize: {
                width: e.innerWidth,
                height: e.innerHeight
            }
        });
    // document.documentElement.style.setProperty('--vh', `${e.innerHeight}px`)
    // fix safari rendering issue with rem
    // if ((isSafari || iOSSafari) && e.innerWidth) {
    // 	document.documentElement.style.display = 'inline-block'
    // 	// eslint-disable-next-line no-unused-expressions
    // 	document.documentElement.offsetHeight
    // 	document.documentElement.style.display = ''
    // }
    }, true);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_head_Head__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                ...meta,
                title: metaTitle,
                description: metaDescription,
                image: metaImage
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_header_Header__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                ...header
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PageTransition, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                        className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default().main),
                        children: children
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_footer_Footer__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        ...footer,
                        mainLinks: header === null || header === void 0 ? void 0 : header.links
                    })
                ]
            }),
            pageProps.preview && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_Button__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                href: "/api/exit-preview",
                className: (0,utils_classnames__WEBPACK_IMPORTED_MODULE_17__.cn)((_layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default().exitPreview)),
                theme: {
                    light: "#fff",
                    dark: "#000"
                },
                variant: components_button_Button__WEBPACK_IMPORTED_MODULE_16__/* .ButtonVariant.small */ .W.small,
                inverted: true,
                preventNextLink: true,
                children: "Exit preview"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2730:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7544);
/* harmony import */ var contexts_LocaleContextProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1649);
/* harmony import */ var layouts_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(990);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4780);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([layouts_Layout__WEBPACK_IMPORTED_MODULE_4__]);
layouts_Layout__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














function MyApp({ Component , pageProps , appProps , router  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {
                strategy: "afterInteractive",
                src: "https://www.googletagmanager.com/gtag/js?id=G-HC1R29HG2Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {
                id: "google-analytics",
                strategy: "afterInteractive",
                children: `
				__html: 
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', 'G-HC1R29HG2Z');
			`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(contexts_LocaleContextProvider__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                strings: appProps.locales,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(layouts_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    appProps: appProps,
                    pageProps: pageProps,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps,
                        path: router.asPath
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {
                type: "text/javascript",
                children: `
					_linkedin_partner_id = "4796834";
					window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
					window._linkedin_data_partner_ids.push(_linkedin_partner_id);
				`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {
                type: "text/javascript",
                children: `
					(function(l) { if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
					window.lintrk.q=[]} var s = document.getElementsByTagName("script")[0]; var b = document.createElement("script");
					b.type = "text/javascript";b.async = true;
					b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
					s.parentNode.insertBefore(b, s);})(window.lintrk);
				`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("noscript", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    height: "1",
                    width: "1",
                    style: {
                        display: "none"
                    },
                    alt: "",
                    src: "https://px.ads.linkedin.com/collect/?pid=4796834&fmt=gif"
                })
            })
        ]
    });
}
// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
MyApp.getInitialProps = async (appContext)=>{
    if (true) {
        const initialProps = await next_app__WEBPACK_IMPORTED_MODULE_1__["default"].getInitialProps(appContext);
        const appProps = {};
        await __webpack_require__.e(/* import() */ 1145).then(__webpack_require__.bind(__webpack_require__, 1145)).then(async ({ getSettings  })=>{
            const { router , ctx  } = appContext;
            appProps.statusCode = ctx.res.statusCode;
            try {
                const { settings , locales , indexedFields  } = await getSettings(router.locale, router.isPreview);
                appProps.locales = locales;
                appProps.indexedFields = indexedFields;
                appProps.settings = {};
                settings === null || settings === void 0 ? void 0 : settings.forEach((element)=>{
                    appProps.settings[element._type] = element;
                });
            } catch (error) {
                console.error(error);
            }
        });
        return {
            ...initialProps,
            appProps
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J_": () => (/* binding */ splitChars),
/* harmony export */   "YK": () => (/* binding */ sanityBlockContentToString),
/* harmony export */   "nf": () => (/* binding */ splitWords)
/* harmony export */ });
const sanityBlockContentToString = (blocks, withLineBreaks = true)=>blocks && Array.isArray(blocks) ? blocks.map((block)=>block.children.map((child)=>child.text
        ).join("")
    ).filter((p)=>p.trim() !== ""
    ).join(withLineBreaks ? "\n" : " ") : undefined
;
const splitWords = (text, wrapWords = false)=>{
    return text.replace(/\n/g, " <br/> ").split(/ /).map((word)=>word === "<br/>" ? "<br/>" : wrapWords ? `<span><span>${word}</span></span>` : `<span>${word}</span>`
    ).join(" ").replace(/ <br\/> /g, "<br/>");
};
const splitChars = (text)=>{
    return text.replace(/\n/g, " <br/> ").split(/ /).map((word)=>{
        const chars = word.split(/(?!$)/u).map((char)=>`<span>${char}</span>`
        ).join("");
        return word === "<br/>" ? "<br/>" : `<div>${chars}</div>`;
    }).join(" ").replace(/ <br\/> /g, "<br/>");
};


/***/ }),

/***/ 7361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ useTransitionFix)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const useTransitionFix = ()=>{
    const cleanupRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(()=>{});
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const onBeforeHistoryChange = ()=>{
            const nodes = document.querySelectorAll('link[rel="stylesheet"][data-n-p]');
            for (const node1 of nodes){
                node1.removeAttribute("data-n-p");
            }
            cleanupRef.current = ()=>{
                for (const node of nodes){
                    // Remove previous page's styles after the transition has finalized.
                    if (node.parentNode) {
                        document.head.removeChild(node);
                    }
                }
            };
        };
        next_router__WEBPACK_IMPORTED_MODULE_0___default().events.on("beforeHistoryChange", onBeforeHistoryChange);
        // media
        const mutationHandler = (mutations)=>{
            mutations.forEach(({ target  })=>{
                if (target.nodeName === "STYLE") {
                    if (target.getAttribute("media") === "x") {
                        target.removeAttribute("media");
                    }
                }
            });
        };
        const observer = new MutationObserver(mutationHandler);
        observer.observe(document.head, {
            subtree: true,
            attributeFilter: [
                "media"
            ]
        });
        return ()=>{
            next_router__WEBPACK_IMPORTED_MODULE_0___default().events.off("beforeHistoryChange", onBeforeHistoryChange);
            cleanupRef.current();
            observer.disconnect();
        };
    }, []);
    // Return a fixed reference function that calls the internal cleanup reference.
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        cleanupRef.current();
    }, []);
};


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

/***/ 543:
/***/ ((module) => {

"use strict";
module.exports = require("eases");

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

/***/ 4780:
/***/ ((module) => {

"use strict";
module.exports = require("next/script");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 4417:
/***/ ((module) => {

"use strict";
module.exports = require("react-spring");

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
var __webpack_exports__ = __webpack_require__.X(0, [4686,1397,9505,1664,7544,8414,6873,7506,5542,189,3285], () => (__webpack_exec__(2730)));
module.exports = __webpack_exports__;

})();