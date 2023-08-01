exports.id = 1648;
exports.ids = [1648];
exports.modules = {

/***/ 9727:
/***/ ((module) => {

// Exports
module.exports = {
	"largeTitleCta": "largeTitleCta_largeTitleCta__ELuDI",
	"container": "largeTitleCta_container__vJeW2",
	"titleWrapper": "largeTitleCta_titleWrapper__J764_",
	"title": "largeTitleCta_title__BVbJq",
	"text": "largeTitleCta_text__qbxW1",
	"cta": "largeTitleCta_cta__q4BfM",
	"image": "largeTitleCta_image__rTWio",
	"imageWrap": "largeTitleCta_imageWrap__Yw2gf"
};


/***/ }),

/***/ 1648:
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
/* harmony import */ var _largeTitleCta_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9727);
/* harmony import */ var _largeTitleCta_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_largeTitleCta_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _config_variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7441);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9785);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_color__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2905);
/* harmony import */ var detect_it__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3377);
/* harmony import */ var detect_it__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(detect_it__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_button_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6873);
/* harmony import */ var components_image_Image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7283);
/* harmony import */ var _svgs_arrowCta_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9097);
/* harmony import */ var utils_text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(874);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8414);
/* harmony import */ var components_parallax_Parallax__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4059);
/* harmony import */ var hooks_useSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7506);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useSlice__WEBPACK_IMPORTED_MODULE_8__, components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_9__, components_parallax_Parallax__WEBPACK_IMPORTED_MODULE_12__]);
([hooks_useSlice__WEBPACK_IMPORTED_MODULE_8__, components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_9__, components_parallax_Parallax__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const LargeTitleCta = (props)=>{
    const { theme =null , className =null , imageClassName =null , title , subtitle =null , cta =null , image =null , imageParams ={
        desktopWidth: 1100,
        mobileWidth: 350
    } ,  } = props;
    const fixedTheme = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(theme);
    if ((theme === null || theme === void 0 ? void 0 : theme.title) === "Green Dark") {
        fixedTheme.current.text = _config_variables__WEBPACK_IMPORTED_MODULE_6__/* .colors.white.hex */ .O.white.hex ?? fixedTheme.current.text;
    }
    const themeStyle = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)((0,utils_color__WEBPACK_IMPORTED_MODULE_7__/* .themeToCSS */ .i0)(fixedTheme.current));
    const isTouch = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(detect_it__WEBPACK_IMPORTED_MODULE_4__.primaryInput === "touch");
    const timeline = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const titleRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const subtitleRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const ctaRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const isLight = (0,utils_color__WEBPACK_IMPORTED_MODULE_7__/* .isLightColor */ .eO)(theme.bg);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    if (isLight) (0,hooks_useSlice__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(ref);
    const [inViewRef, inView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView)({
        rootMargin: "-10% 0%",
        triggerOnce: true
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!isTouch.current) {
            timeline.current = gsap__WEBPACK_IMPORTED_MODULE_5___default().timeline({
                paused: true
            }).fromTo(titleRef.current.querySelectorAll("span"), {
                yPercent: 100
            }, {
                duration: 0.9,
                yPercent: 0,
                ease: "power2.out",
                stagger: 0.05
            }, 0).fromTo(imageRef.current, {
                opacity: 0,
                y: "10rem"
            }, {
                duration: 0.8,
                opacity: 1,
                y: 0,
                ease: "power2.out"
            }, 0.4);
            if (subtitleRef.current) {
                timeline.current.fromTo(subtitleRef.current, {
                    opacity: 0,
                    y: "8rem"
                }, {
                    duration: 0.6,
                    opacity: 1,
                    y: 0,
                    ease: "power2.out"
                }, 0.6);
            }
            if (ctaRef.current) {
                timeline.current.fromTo(ctaRef.current, {
                    opacity: 0,
                    y: "8rem"
                }, {
                    duration: 0.6,
                    opacity: 1,
                    y: 0,
                    ease: "power2.out"
                }, 0.65);
            }
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (inView && !isTouch.current) {
            timeline.current.play();
        }
    }, [
        inView
    ]);
    const setRefs = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((node)=>{
        ref.current = node;
        inViewRef(node);
    }, [
        inViewRef
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
        ref: setRefs,
        as: "section",
        childClassName: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, (_largeTitleCta_module_scss__WEBPACK_IMPORTED_MODULE_10___default().largeTitleCta)),
        style: {
            ...themeStyle.current
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("container", (_largeTitleCta_module_scss__WEBPACK_IMPORTED_MODULE_10___default().container)),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_largeTitleCta_module_scss__WEBPACK_IMPORTED_MODULE_10___default().titleWrapper),
                    children: [
                        title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            ref: titleRef,
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("hm-0 hd-0", (_largeTitleCta_module_scss__WEBPACK_IMPORTED_MODULE_10___default().title)),
                            dangerouslySetInnerHTML: {
                                __html: (0,utils_text__WEBPACK_IMPORTED_MODULE_11__/* .splitChars */ .J_)(title)
                            }
                        }),
                        image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_parallax_Parallax__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            childClassName: (_largeTitleCta_module_scss__WEBPACK_IMPORTED_MODULE_10___default().imageWrap),
                            z: 0.7,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_image_Image__WEBPACK_IMPORTED_MODULE_13__/* .SanityImage */ .d, {
                                image: image,
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(imageClassName, (_largeTitleCta_module_scss__WEBPACK_IMPORTED_MODULE_10___default().image)),
                                objectFit: "contain",
                                ...imageParams,
                                ref: imageRef
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_largeTitleCta_module_scss__WEBPACK_IMPORTED_MODULE_10___default().text),
                    children: [
                        subtitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            ref: subtitleRef,
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("hm-3 hd-3", (_largeTitleCta_module_scss__WEBPACK_IMPORTED_MODULE_10___default().subtitle)),
                            children: subtitle
                        }),
                        cta && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_button_Button__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            ref: ctaRef,
                            variant: components_button_Button__WEBPACK_IMPORTED_MODULE_14__/* .ButtonVariant.rounded */ .W.rounded,
                            className: (_largeTitleCta_module_scss__WEBPACK_IMPORTED_MODULE_10___default().cta),
                            link: cta,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_arrowCta_svg__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {}),
                                cta.label
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LargeTitleCta);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eO": () => (/* binding */ isLightColor),
/* harmony export */   "i0": () => (/* binding */ themeToCSS)
/* harmony export */ });
/* unused harmony export invertedTheme */
/**
 * Check if a hexadecimal color is light or dark.
 * @param {String} color
 * @returns Boolean
 */ const isLightColor = (color, luma = 165)=>computeLuma(color) >= luma
;
/**
 * Compute Luma of a hexadecimal color.
 * @param {String} color
 * @returns Number
 */ const computeLuma = (color)=>{
    const rgb = hexToRGB(color);
    return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2] // SMPTE C, Rec. 709 weightings
    ;
};
/**
 * Convert hexadecimal color string to RGB array of numbers.
 * @param {String} color
 * @returns Array<Number>
 */ const hexToRGB = (color)=>{
    const _color = color.replace("#", "");
    const rgb = [];
    for(let i = 0; i <= 2; i++)rgb[i] = parseInt(_color.substr(i * 2, 2), 16);
    return rgb;
};
const themeToCSS = (theme, inverted = false)=>theme ? {
        "--color-bg": inverted ? theme.text : theme.bg,
        "--color-text": inverted ? theme.bg : theme.text
    } : {}
;
const invertedTheme = (theme)=>theme ? {
        bg: theme.text,
        text: theme.bg
    } : undefined
;


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


/***/ })

};
;