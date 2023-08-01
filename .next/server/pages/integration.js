(() => {
var exports = {};
exports.id = 4764;
exports.ids = [4764];
exports.modules = {

/***/ 7984:
/***/ ((module) => {

// Exports
module.exports = {
	"integrationsList": "integrationsList_integrationsList__ffgP_",
	"nav": "integrationsList_nav__elVeN",
	"navTitle": "integrationsList_navTitle__X4RH6",
	"navEntry": "integrationsList_navEntry__At7Hf",
	"content": "integrationsList_content__6bKqH",
	"category": "integrationsList_category__Iwcgp",
	"title": "integrationsList_title__Pr4mN",
	"cards": "integrationsList_cards__g2P47",
	"card": "integrationsList_card__vD1RG",
	"dealflowLogo": "integrationsList_dealflowLogo__Pgopw"
};


/***/ }),

/***/ 122:
/***/ ((module) => {

// Exports
module.exports = {
	"dealflow": "integration_dealflow__X8PYw",
	"main": "integration_main__wKJT0",
	"largeTitleCta": "integration_largeTitleCta__VB6zm",
	"footer": "integration_footer___7MkM",
	"intro": "integration_intro__7FUPC"
};


/***/ }),

/***/ 3006:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_button_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6873);
/* harmony import */ var components_customBlockContent_CustomBlockContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6096);
/* harmony import */ var components_locale_Locale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(922);
/* harmony import */ var _integrationsList_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7984);
/* harmony import */ var _integrationsList_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_integrationsList_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var utils_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3939);
/* harmony import */ var components_card_Card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7706);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_useSticky__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7929);
/* harmony import */ var components_timelineSection_TimelineSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5224);
/* harmony import */ var svgs_dealflow_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(391);
/* harmony import */ var utils_classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6610);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_timelineSection_TimelineSection__WEBPACK_IMPORTED_MODULE_6__]);
components_timelineSection_TimelineSection__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];















const IntegrationsList = ({ entries  })=>{
    const [stickyRef, containerRef] = (0,hooks_useSticky__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const timeline = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const dealflowLogoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    // const routerHash = router.asPath.split('#')[1]
    const { 0: routerHash , 1: setRouterHash  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const scrollTo = (0,hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        timeline.current = gsap__WEBPACK_IMPORTED_MODULE_2___default().timeline({
            paused: true
        }).to({}, {
            duration: 1
        }).fromTo(dealflowLogoRef.current, {
            opacity: 0,
            y: "20%"
        }, {
            duration: 1,
            opacity: 1,
            y: "-30%"
        }, 0);
        timeline.current.duration(1);
        const scroll = (hash)=>{
            setRouterHash(hash);
            const paddingTop = parseFloat(window.getComputedStyle(containerRef.current, null).getPropertyValue("padding-top"));
            if (paddingTop) scrollTo(`[data-anchor='${hash}']`, -paddingTop);
        };
        const hash1 = router.asPath.split("#")[1];
        if (hash1) {
            if (history.scrollRestoration) {
                history.scrollRestoration = "manual";
            }
            scroll(hash1);
        }
        const handleHashChange = (e)=>{
            scroll(e.split("#")[1]);
        };
        router.events.on("hashChangeStart", handleHashChange);
        return ()=>{
            router.events.off("hashChangeStart", handleHashChange);
        };
    }, []);
    const categories = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const categoriesMap = new Map();
        entries.forEach((entry)=>{
            var ref;
            if ((ref = entry.category) === null || ref === void 0 ? void 0 : ref._id) {
                var ref1;
                const category = categoriesMap.get(entry.category._id) || {
                    ...entry.category,
                    entries: []
                };
                category.entries.push(entry);
                categoriesMap.set((ref1 = entry.category) === null || ref1 === void 0 ? void 0 : ref1._id, category);
            }
        });
        return [
            ...categoriesMap
        ];
    }, [
        entries
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_timelineSection_TimelineSection__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                as: "section",
                timeline: timeline,
                childClassName: (0,utils_classnames__WEBPACK_IMPORTED_MODULE_7__.cn)("container", (_integrationsList_module_scss__WEBPACK_IMPORTED_MODULE_8___default().integrationsList)),
                childRef: containerRef,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        className: (_integrationsList_module_scss__WEBPACK_IMPORTED_MODULE_8___default().nav),
                        ref: stickyRef,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: (0,utils_classnames__WEBPACK_IMPORTED_MODULE_7__.cn)("pm-18", (_integrationsList_module_scss__WEBPACK_IMPORTED_MODULE_8___default().navTitle)),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_locale_Locale__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    children: "Category"
                                })
                            }),
                            categories === null || categories === void 0 ? void 0 : categories.map((category)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_Button__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    className: (0,utils_classnames__WEBPACK_IMPORTED_MODULE_7__.cn)("pm-13", (_integrationsList_module_scss__WEBPACK_IMPORTED_MODULE_8___default().navEntry)),
                                    variant: components_button_Button__WEBPACK_IMPORTED_MODULE_10__/* .ButtonVariant.underlined */ .W.underlined,
                                    active: routerHash && (0,utils_string__WEBPACK_IMPORTED_MODULE_11__/* .slugify */ .lV)(category[1].title) === routerHash,
                                    href: `#${(0,utils_string__WEBPACK_IMPORTED_MODULE_11__/* .slugify */ .lV)(category[1].title)}`,
                                    children: category[1].title
                                }, category[0])
                            )
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: (_integrationsList_module_scss__WEBPACK_IMPORTED_MODULE_8___default().content),
                        ref: contentRef,
                        children: categories === null || categories === void 0 ? void 0 : categories.map((category)=>{
                            var ref;
                            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: (_integrationsList_module_scss__WEBPACK_IMPORTED_MODULE_8___default().category),
                                "data-anchor": (0,utils_string__WEBPACK_IMPORTED_MODULE_11__/* .slugify */ .lV)(category[1].title),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_customBlockContent_CustomBlockContent__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP, {
                                        as: "h2",
                                        blocks: category[1].description,
                                        className: (0,utils_classnames__WEBPACK_IMPORTED_MODULE_7__.cn)("hm-2 hd-3", (_integrationsList_module_scss__WEBPACK_IMPORTED_MODULE_8___default().title)),
                                        noDom: true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_integrationsList_module_scss__WEBPACK_IMPORTED_MODULE_8___default().cards),
                                        children: (ref = category[1].entries) === null || ref === void 0 ? void 0 : ref.map((integration)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_card_Card__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                className: (_integrationsList_module_scss__WEBPACK_IMPORTED_MODULE_8___default().card),
                                                ...integration
                                            }, integration._id)
                                        )
                                    })
                                ]
                            }, category[0]);
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: dealflowLogoRef,
                className: (0,utils_classnames__WEBPACK_IMPORTED_MODULE_7__.cn)("desktop-only no-touch-only", (_integrationsList_module_scss__WEBPACK_IMPORTED_MODULE_8___default().dealflowLogo)),
                "aria-hidden": true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(svgs_dealflow_svg__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntegrationsList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_mediaQueries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1455);
/* harmony import */ var _useWindowResize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8216);



const useMediaQuery = ()=>{
    const { 0: device , 1: setDevice  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,_useWindowResize__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(()=>{
        setDevice((0,utils_mediaQueries__WEBPACK_IMPORTED_MODULE_2__/* .getCurrentDevice */ .Q4)());
    }, true);
    return device;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMediaQuery);


/***/ }),

/***/ 1728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8157);
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_spring_web__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((config = {
    mass: 1,
    tension: 150,
    friction: 20
})=>{
    const [, api] = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_0__.useSpring)(()=>({
            y: 0
        })
    );
    let isStopped = false;
    const handleWheel = ()=>{
        isStopped = true;
        window.removeEventListener("wheel", handleWheel);
    };
    const scrollTo = (value = null, offset = 0, onRest = null)=>{
        let y = 0;
        if (typeof value === "number") {
            y = value;
        } else if (typeof value === "string" || (value === null || value === void 0 ? void 0 : value.nodeType) === 1) {
            if (typeof value === "string") {
                value = document.querySelector(value);
            }
            if (!value) {
                console.error("Scroll to element not found");
            } else {
                y = window.scrollY + value.getBoundingClientRect().top;
            }
        }
        y += offset;
        window.removeEventListener("wheel", handleWheel);
        window.addEventListener("wheel", handleWheel);
        api.start({
            y,
            reset: true,
            from: {
                y: window.scrollY
            },
            config,
            onRest: ()=>{
                isStopped = false;
                window.removeEventListener("wheel", handleWheel);
                if (onRest) onRest();
            },
            onChange: (_, ctrl)=>{
                if (!isStopped) {
                    window.scroll(0, ctrl.get().y);
                }
            }
        });
    };
    return scrollTo;
});


/***/ }),

/***/ 7929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var detect_it__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3377);
/* harmony import */ var detect_it__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(detect_it__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useMediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7702);
/* harmony import */ var _useRaf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4403);
/* harmony import */ var utils_maths__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9298);
/* harmony import */ var _useResizeObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9257);
/* harmony import */ var utils_mediaQueries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1455);







const useSticky = (easing = null)=>{
    const ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const height = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    const parentHeight = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    const parentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const isTouch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(detect_it__WEBPACK_IMPORTED_MODULE_1__.primaryInput === "touch");
    const device = (0,_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    (0,_useResizeObserver__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(ref1, (e)=>{
        var ref;
        height.current = ((ref = e.borderBoxSize) === null || ref === void 0 ? void 0 : ref[0]) ? e.borderBoxSize[0].blockSize : ref1.current.offsetHeight;
    });
    (0,_useResizeObserver__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(parentRef, (e)=>{
        parentHeight.current = e.contentRect.height;
        if (device !== utils_mediaQueries__WEBPACK_IMPORTED_MODULE_4__/* .DESKTOP */ .q5 || isTouch.current) {
            ref1.current.style.transform = "";
        }
    });
    (0,_useRaf__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(()=>{
        if (parentRef === null || parentRef === void 0 ? void 0 : parentRef.current) {
            if (device !== utils_mediaQueries__WEBPACK_IMPORTED_MODULE_4__/* .DESKTOP */ .q5 || isTouch.current) return;
            const v = parentHeight.current - height.current;
            let p = (0,utils_maths__WEBPACK_IMPORTED_MODULE_6__/* .clamp */ .uZ)(-parentRef.current.__y / v, 0, 1);
            if (easing) p = easing(p);
            const y = p * v;
            ref1.current.style.transform = `translate3d(0,${y}px,0)`;
        }
    });
    return [
        ref1,
        parentRef
    ];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSticky);


/***/ }),

/***/ 7815:
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
/* harmony import */ var _integration_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(122);
/* harmony import */ var _integration_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_integration_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lib_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1145);
/* harmony import */ var utils_cache__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4223);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7441);
/* harmony import */ var components_featureFooter_FeatureFooter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6498);
/* harmony import */ var components_featureIntro_FeatureIntro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7622);
/* harmony import */ var slices_largeTitleCta_LargeTitleCta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1648);
/* harmony import */ var hooks_useSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7506);
/* harmony import */ var components_integrationsList_IntegrationsList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3006);
/* harmony import */ var components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8414);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useSlice__WEBPACK_IMPORTED_MODULE_2__, components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_4__, components_featureIntro_FeatureIntro__WEBPACK_IMPORTED_MODULE_5__, components_integrationsList_IntegrationsList__WEBPACK_IMPORTED_MODULE_7__, slices_largeTitleCta_LargeTitleCta__WEBPACK_IMPORTED_MODULE_8__, components_featureFooter_FeatureFooter__WEBPACK_IMPORTED_MODULE_9__]);
([hooks_useSlice__WEBPACK_IMPORTED_MODULE_2__, components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_4__, components_featureIntro_FeatureIntro__WEBPACK_IMPORTED_MODULE_5__, components_integrationsList_IntegrationsList__WEBPACK_IMPORTED_MODULE_7__, slices_largeTitleCta_LargeTitleCta__WEBPACK_IMPORTED_MODULE_8__, components_featureFooter_FeatureFooter__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Integration = (props)=>{
    var ref, ref1;
    const { content , integrations  } = props;
    const ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,hooks_useSlice__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(ref2);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_integration_module_scss__WEBPACK_IMPORTED_MODULE_3___default().dealflow),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ref: ref2,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
                        className: "container",
                        preventDisable: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_featureIntro_FeatureIntro__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            colors: {
                                text: _config_variables__WEBPACK_IMPORTED_MODULE_6__/* .colors.greenDark.hex */ .O.greenDark.hex,
                                circle: _config_variables__WEBPACK_IMPORTED_MODULE_6__/* .colors.yellow.hex */ .O.yellow.hex
                            },
                            title: content.title,
                            className: (_integration_module_scss__WEBPACK_IMPORTED_MODULE_3___default().intro),
                            excerpt: content.headerExcerpt,
                            image: content.headerIllustration,
                            backgroundOverflowVisible: true
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_integrationsList_IntegrationsList__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        entries: integrations
                    })
                ]
            }),
            content.largeTitleCta && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(slices_largeTitleCta_LargeTitleCta__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                ...content.largeTitleCta,
                imageParams: {
                    desktopWidth: 1100,
                    mobileWidth: 325
                },
                className: (_integration_module_scss__WEBPACK_IMPORTED_MODULE_3___default().largeTitleCta),
                imageClassName: (_integration_module_scss__WEBPACK_IMPORTED_MODULE_3___default().largeTitleCtaImage)
            }),
            content.footer && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_featureFooter_FeatureFooter__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                ...content.footer,
                backgroundColors: {
                    bg: (ref = _config_variables__WEBPACK_IMPORTED_MODULE_6__/* .colors.purpleDark */ .O.purpleDark) === null || ref === void 0 ? void 0 : ref.hex,
                    circle: (ref1 = _config_variables__WEBPACK_IMPORTED_MODULE_6__/* .colors.pinkPurple */ .O.pinkPurple) === null || ref1 === void 0 ? void 0 : ref1.hex
                },
                className: (_integration_module_scss__WEBPACK_IMPORTED_MODULE_3___default().footer)
            })
        ]
    });
};
async function getStaticProps({ params , locale , preview =false  }) {
    const props = await (0,lib_api__WEBPACK_IMPORTED_MODULE_10__.getPageById)("page.integrations", locale, preview);
    const integrations = await (0,lib_api__WEBPACK_IMPORTED_MODULE_10__.getPostsByType)("integrationPost", locale, preview, `
		'category': category->{
			...
		}
	`);
    return {
        props: {
            ...props,
            integrations,
            preview
        },
        revalidate: utils_cache__WEBPACK_IMPORTED_MODULE_11__/* .pageRevalidate */ .T
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Integration);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uZ": () => (/* binding */ clamp)
/* harmony export */ });
/* unused harmony exports lerp, map */
const lerp = (a, b, t)=>a * (1 - t) + t * b
;
const clamp = (x, min, max)=>min < max ? Math.min(Math.max(x, min), max) : Math.min(Math.max(x, max), min)
;
const map = (n, start1, stop1, start2, stop2)=>clamp((n - start1) / (stop1 - start1) * (stop2 - start2) + start2, start2, stop2)
;


/***/ }),

/***/ 8157:
/***/ ((module) => {

"use strict";
module.exports = require("@react-spring/web");

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
var __webpack_exports__ = __webpack_require__.X(0, [4686,1397,9505,1664,5675,1145,8414,6873,7506,5542,6935,6096,189,9214,2215,1648,5224,212,6498,7622,5649], () => (__webpack_exec__(7815)));
module.exports = __webpack_exports__;

})();