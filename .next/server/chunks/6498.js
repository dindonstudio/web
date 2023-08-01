exports.id = 6498;
exports.ids = [6498];
exports.modules = {

/***/ 7330:
/***/ ((module) => {

// Exports
module.exports = {
	"featureFooter": "featureFooter_featureFooter__7JkHK",
	"text": "featureFooter_text__Bctnr",
	"cta": "featureFooter_cta__iBiMM",
	"features": "featureFooter_features__IxvrM",
	"feature": "featureFooter_feature__rlAx6",
	"featureIcon": "featureFooter_featureIcon__xTeBv",
	"featureDescription": "featureFooter_featureDescription__o376O",
	"featureCta": "featureFooter_featureCta__gzIUz",
	"background": "featureFooter_background__JrH0a",
	"circle": "featureFooter_circle__Sds_e",
	"title": "featureFooter_title__dVySP"
};


/***/ }),

/***/ 6498:
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
/* harmony import */ var _featureFooter_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7330);
/* harmony import */ var _featureFooter_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_featureFooter_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _config_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7441);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9785);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8414);
/* harmony import */ var components_customBlockContent_CustomBlockContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6096);
/* harmony import */ var components_image_Image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7283);
/* harmony import */ var components_button_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6873);
/* harmony import */ var svgs_arrowCta_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9097);
/* harmony import */ var components_circleBackground_CircleBackground__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2215);
/* harmony import */ var utils_color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2905);
/* harmony import */ var hooks_useSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7506);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useSlice__WEBPACK_IMPORTED_MODULE_7__, components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_8__, components_circleBackground_CircleBackground__WEBPACK_IMPORTED_MODULE_14__]);
([hooks_useSlice__WEBPACK_IMPORTED_MODULE_7__, components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_8__, components_circleBackground_CircleBackground__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const FeatureFooter = (props)=>{
    var ref, ref1;
    const { title , features =null , cta =null , backgroundColors ={
        bg: (ref = _config_variables__WEBPACK_IMPORTED_MODULE_5__/* .colors.pinkDark */ .O.pinkDark) === null || ref === void 0 ? void 0 : ref.hex,
        circle: (ref1 = _config_variables__WEBPACK_IMPORTED_MODULE_5__/* .colors.pink */ .O.pink) === null || ref1 === void 0 ? void 0 : ref1.hex
    } , className =null  } = props;
    const boxRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const isLight = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)((0,utils_color__WEBPACK_IMPORTED_MODULE_6__/* .isLightColor */ .eO)(backgroundColors.bg));
    const ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    (0,hooks_useSlice__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(ref2);
    const [inViewRef, inView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView)({
        threshold: 0.5,
        triggerOnce: true
    });
    const setRefs = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((node)=>{
        inViewRef(node);
        if (ref2) ref2.current = node;
    }, [
        inViewRef
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (inView) {
            gsap__WEBPACK_IMPORTED_MODULE_4___default().timeline().fromTo(boxRef.current, {
                y: "5rem",
                scale: 0.85,
                opacity: 0
            }, {
                duration: 1,
                y: 0,
                scale: 1,
                opacity: 1,
                ease: "expo.out"
            }, 0);
        }
    }, [
        inView
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
        ref: setRefs,
        as: "section",
        childClassName: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_featureFooter_module_scss__WEBPACK_IMPORTED_MODULE_9___default().featureFooter), className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("container", (_featureFooter_module_scss__WEBPACK_IMPORTED_MODULE_9___default().container)),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_featureFooter_module_scss__WEBPACK_IMPORTED_MODULE_9___default().text),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("hm-2 hd-2", (_featureFooter_module_scss__WEBPACK_IMPORTED_MODULE_9___default().title)),
                                style: {
                                    color: !isLight.current && "white"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_customBlockContent_CustomBlockContent__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, {
                                    blocks: title,
                                    noDom: true
                                })
                            }),
                            cta && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_button_Button__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                variant: components_button_Button__WEBPACK_IMPORTED_MODULE_11__/* .ButtonVariant.rounded */ .W.rounded,
                                className: (_featureFooter_module_scss__WEBPACK_IMPORTED_MODULE_9___default().cta),
                                link: cta,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(svgs_arrowCta_svg__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        "aria-hidden": true
                                    }),
                                    cta.label
                                ]
                            })
                        ]
                    }),
                    (features === null || features === void 0 ? void 0 : features.length) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        ref: boxRef,
                        className: (_featureFooter_module_scss__WEBPACK_IMPORTED_MODULE_9___default().features),
                        children: features.map((feature)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: (_featureFooter_module_scss__WEBPACK_IMPORTED_MODULE_9___default().feature),
                                children: [
                                    feature.icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_image_Image__WEBPACK_IMPORTED_MODULE_13__/* .SanityImage */ .d, {
                                        image: feature.icon,
                                        desktopWidth: 64,
                                        mobileWidth: 64,
                                        className: (_featureFooter_module_scss__WEBPACK_IMPORTED_MODULE_9___default().featureIcon)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("hm-3 hd-4", (_featureFooter_module_scss__WEBPACK_IMPORTED_MODULE_9___default().featureTitle)),
                                        children: feature.title
                                    }),
                                    feature.description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("pm-16", (_featureFooter_module_scss__WEBPACK_IMPORTED_MODULE_9___default().featureDescription)),
                                        children: feature.description
                                    }),
                                    feature.cta && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_button_Button__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        variant: components_button_Button__WEBPACK_IMPORTED_MODULE_11__/* .ButtonVariant.rounded */ .W.rounded,
                                        className: (_featureFooter_module_scss__WEBPACK_IMPORTED_MODULE_9___default().featureCta),
                                        link: feature.cta,
                                        inverted: true,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(svgs_arrowCta_svg__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                "aria-hidden": true
                                            }),
                                            feature.cta.label
                                        ]
                                    })
                                ]
                            }, feature._key)
                        )
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_circleBackground_CircleBackground__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                className: (_featureFooter_module_scss__WEBPACK_IMPORTED_MODULE_9___default().background),
                childClassName: (_featureFooter_module_scss__WEBPACK_IMPORTED_MODULE_9___default().circle),
                colors: backgroundColors
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeatureFooter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;