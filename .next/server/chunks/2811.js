exports.id = 2811;
exports.ids = [2811];
exports.modules = {

/***/ 2740:
/***/ ((module) => {

// Exports
module.exports = {
	"slideshow": "slideshow_slideshow__Ec532",
	"wrapper": "slideshow_wrapper__TGK9O",
	"overflowHidden": "slideshow_overflowHidden__fYyJ6",
	"list": "slideshow_list__wWMPN",
	"btn": "slideshow_btn__utMcL",
	"btnNext": "slideshow_btnNext__0T9LN",
	"btnPrev": "slideshow_btnPrev__t_EQx",
	"dots": "slideshow_dots__SV8v_",
	"dot": "slideshow_dot___Wi5T",
	"dotWrapper": "slideshow_dotWrapper__iP77c",
	"dotSelected": "slideshow_dotSelected__LbqcW"
};


/***/ }),

/***/ 4477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slideshow_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2740);
/* harmony import */ var _slideshow_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_slideshow_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var svgs_arrowCta_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9097);
/* harmony import */ var utils_classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6610);
/* harmony import */ var components_button_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6873);
/* harmony import */ var hooks_useRaf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4403);
/* harmony import */ var hooks_useResizeObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9257);
/* harmony import */ var detect_it__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3377);
/* harmony import */ var detect_it__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(detect_it__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_maths__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9298);










const Slideshow = ({ children , pageDots =false , withButtons =false , snapping =false , className =null , wrapperClassName =null , prevButtonClassName =null , nextButtonClassName =null , style =null , overflowHidden =true , groupBy =1 ,  })=>{
    const { 0: refreshIndex , 1: setRefreshIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const elementsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(children.map((e)=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null)
    ));
    const enabled = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);
    const dragging = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const pressingButton = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const scrolling = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const controlling = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const needsUpdate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const index1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const containerBoundingClientRect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({
        left: 0,
        width: 0,
        height: 0
    });
    const width = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const x = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const y = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const vx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const ox = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const initx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const initmx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const omx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const mx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const mvx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const destx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const direction = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const constrainsEdges = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);
    const stopped = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);
    const dragFrictions = 0.52;
    const frictions = 0.9;
    const borderFrictions = 0.55;
    const dragEase = detect_it__WEBPACK_IMPORTED_MODULE_2__.primaryInput === "touch" ? 1 : 0.3;
    const resizeObserver = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const handleResize = (entries)=>{
        entries.forEach((entry, i)=>{
            const target = entry.target;
            if (!target.__scale) target.__scale = 1;
            if (!target.__x) target.__x = 0;
            target.__width = entry.target.offsetWidth;
            // target.__width = entry.boundingClientRect.width / target.__scale
            // target.__xInit = entry.boundingClientRect.left - target.__x + (entry.boundingClientRect.width - target.__width) / 2// - d
            target.__xInit = entry.target.offsetLeft;
            // target.__offsetLeft = entry.target.offsetLeft
            if (!i) containerBoundingClientRect.current.left = target.__xInit;
            resizeObserver.current.unobserve(target);
        });
        needsUpdate.current = true;
        tick(true);
    };
    const renderChildren = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const clonedChildren = [];
        children.forEach((element, i)=>{
            if (element.ref) {
                clonedChildren[i] = element;
                elementsRef.current[i] = element.ref;
            } else {
                clonedChildren[i] = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(element, {
                    ref: elementsRef.current[i]
                });
            }
        });
        return clonedChildren;
    }, [
        children
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const passive = detect_it__WEBPACK_IMPORTED_MODULE_2__.supportsPassiveEvents ? {
            passive: true
        } : false;
        window.addEventListener("mousemove", drag, passive);
        window.addEventListener("touchmove", drag, passive);
        window.addEventListener("mouseup", stopDrag, passive);
        window.addEventListener("touchend", stopDrag, passive);
        resizeObserver.current = new IntersectionObserver(handleResize);
        return ()=>{
            window.removeEventListener("mousemove", drag);
            window.removeEventListener("touchmove", drag);
            window.removeEventListener("mouseup", stopDrag);
            window.removeEventListener("touchend", stopDrag);
            resizeObserver.current.disconnect();
        };
    }, [
        groupBy
    ]);
    const tick = (now = false)=>{
        var ref;
        if (!((ref = elementsRef.current) === null || ref === void 0 ? void 0 : ref.length) || !containerBoundingClientRect.current.width) return;
        if (dragging.current) {
            destx.current = initx.current - mx.current;
            vx.current += (destx.current - x.current) * dragEase;
            vx.current *= dragFrictions;
            controlling.current = false;
        } else if (snapping || controlling.current) {
            vx.current += (destx.current - x.current) * 0.15;
            vx.current *= dragFrictions;
        }
        // constrains (if not looping)
        const contrainSpring = now ? 1 : dragging.current ? 0.8 : 0.1;
        const left = constrainsEdges.current[0];
        const right = constrainsEdges.current[1] // - elementsRef.current[elementsRef.current.length - 1].current.__width
        ;
        if (x.current + vx.current < left) {
            vx.current += (left - x.current) * contrainSpring;
            vx.current *= borderFrictions;
        } else if (x.current + vx.current > right) {
            vx.current += (right - x.current) * contrainSpring;
            vx.current *= borderFrictions;
        } else {
            vx.current *= frictions;
        }
        x.current += vx.current;
        if (dragging.current) {
            vx.current = x.current - ox.current;
        } else if (vx.current > -0.3 && vx.current < 0.3 && !stopped.current) {
            stopped.current = true;
        }
        // rounding values
        x.current = (x.current * 100 | 0) / 100;
        let delta = x.current - destx.current;
        if (delta < 0) delta *= -1;
        if (delta < 0.01) x.current = destx.current;
        if (ox.current !== x.current) needsUpdate.current = true;
        if (needsUpdate.current) updateDom();
        ox.current = x.current;
    };
    (0,hooks_useRaf__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(()=>{
        tick();
    });
    const updateDom = ()=>{
        // let d = 0
        // const w = elementsRef.current[0].current.__width
        for(let i = 0, li = elementsRef.current.length; i < li; i++){
            const element = elementsRef.current[i].current;
            if (!element.__xInit === undefined) continue;
            const inView = true // elementX + element.__width >= 0 && elementX <= windowSize.width
            ;
            if (inView) {
                // element.__x = Math.max(-x.current, -element.__xInit + containerBoundingClientRect.current.left)
                // element.__scale = 1 - (-x.current + element.__xInit - containerBoundingClientRect.current.left) * (device === DESKTOP ? 0.2 : 0.1) / containerBoundingClientRect.current.width
                // d += Math.max(0, w - w * element.__scale)
                element.__x = -x.current // - d
                ;
                // element.__rotate = (1 - element.__scale) * (device === DESKTOP ? 10 : 5)
                element.style.transform = `translate3d(${element.__x}px,${y.current}px,0)`;
                // element.style.transform = `translate3d(${element.__x}px,${y.current}px,0) scale(${element.__scale},${element.__scale}) rotate(${element.__rotate}deg)`
                if (!element.__inView) {
                    element.style.visibility = "";
                // element.style.willChange = 'transform'
                }
            } else if (element.__inView) {
                element.style.transform = "";
                element.style.visibility = "hidden";
            // element.style.willChange = ''
            }
            element.__inView = inView;
        }
        needsUpdate.current = false;
    };
    const resize = ()=>{
        if (containerRef.current && width.current && containerBoundingClientRect.current) {
            constrainsEdges.current = [
                0,
                width.current - containerBoundingClientRect.current.width
            ];
            enabled.current = width.current > containerRef.current.clientWidth;
            elementsRef.current.forEach((element)=>resizeObserver.current.observe(element.current)
            );
        }
    };
    (0,hooks_useResizeObserver__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(containerRef, (e)=>{
        containerBoundingClientRect.current.width = e.contentRect.width;
        containerBoundingClientRect.current.height = e.contentRect.height;
        resize();
    });
    (0,hooks_useResizeObserver__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(ref1, (e)=>{
        width.current = e.contentRect.width;
        resize();
    });
    const handlePrev = ()=>{
        controlling.current = true;
        setIndex(index1.current - groupBy);
    };
    const handleNext = ()=>{
        controlling.current = true;
        setIndex(index1.current + groupBy);
    };
    const handleSetIndex = (i)=>{
        setIndex(i * groupBy);
        setRefreshIndex((index)=>index + 1
        );
    };
    const handleTouchStartButton = (e)=>{
        pressingButton.current = true;
    };
    const handleTouchEndButton = (e)=>{
        requestAnimationFrame(()=>{
            pressingButton.current = false;
        });
    };
    const handleDragStart = (e)=>{
        e.preventDefault();
    };
    const handleMouseDown = (e)=>{
        startDrag(e);
    };
    const handleTouchStart = (e)=>{
        startDrag(e);
    };
    const startDrag = (e)=>{
        if (e.button !== undefined && e.button !== 0 || pressingButton.current) {
            return;
        }
        const event = e.touches && e.touches[0] || e;
        stopped.current = false;
        mx.current = event.pageX;
        omx.current = mx.current;
        initmx.current = mx.current;
        initx.current = mx.current + x.current;
        vx.current = 0;
        mvx.current = 0;
        dragging.current = true;
        scrolling.current = false;
    };
    const drag = (e)=>{
        if (dragging.current && !pressingButton.current) {
            const event = e.touches && e.touches[0] || e;
            mx.current = event.pageX;
            mvx.current = mx.current - omx.current;
            const d = mx.current - initmx.current;
            if (Math.abs(d) > 100) {
                direction.current = Math.sign(d);
                ref1.current.style.pointerEvents = "none";
            } else if (Math.abs(mvx.current) > 1) {
                direction.current = Math.sign(mvx.current);
                ref1.current.style.pointerEvents = "none";
            } else {
                direction.current = 0;
            }
            omx.current = mx.current;
        }
    };
    const stopDrag = ()=>{
        if (dragging.current) {
            ref1.current.style.pointerEvents = "";
            if (snapping && !pressingButton.current) {
                setIndex(index1.current - direction.current * groupBy);
            }
            dragging.current = false;
        }
    };
    const setIndex = (i)=>{
        index1.current = (0,utils_maths__WEBPACK_IMPORTED_MODULE_5__/* .clamp */ .uZ)(i, 0, elementsRef.current.length - 1);
        destx.current = (0,utils_maths__WEBPACK_IMPORTED_MODULE_5__/* .clamp */ .uZ)(elementsRef.current[index1.current].current.__xInit, constrainsEdges.current[0], constrainsEdges.current[1]);
    };
    const numberOfDots = Math.ceil(children.length / groupBy);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,utils_classnames__WEBPACK_IMPORTED_MODULE_6__.cn)((_slideshow_module_scss__WEBPACK_IMPORTED_MODULE_7___default().slideshow), className),
        style: style,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            ref: containerRef,
            className: (0,utils_classnames__WEBPACK_IMPORTED_MODULE_6__.cn)((_slideshow_module_scss__WEBPACK_IMPORTED_MODULE_7___default().wrapper), overflowHidden && (_slideshow_module_scss__WEBPACK_IMPORTED_MODULE_7___default().overflowHidden)),
            onMouseDown: handleMouseDown,
            onTouchStart: handleTouchStart,
            onDragStart: handleDragStart,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    ref: ref1,
                    className: (0,utils_classnames__WEBPACK_IMPORTED_MODULE_6__.cn)((_slideshow_module_scss__WEBPACK_IMPORTED_MODULE_7___default().list), wrapperClassName),
                    children: renderChildren()
                }),
                withButtons && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_Button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            className: (0,utils_classnames__WEBPACK_IMPORTED_MODULE_6__.cn)((_slideshow_module_scss__WEBPACK_IMPORTED_MODULE_7___default().btn), prevButtonClassName, (_slideshow_module_scss__WEBPACK_IMPORTED_MODULE_7___default().btnPrev)),
                            // disabled={!loop && buttonState === -1}
                            onMouseDown: handleTouchStartButton,
                            onMouseUp: handleTouchEndButton,
                            onTouchStart: handleTouchStartButton,
                            onTouchEnd: handleTouchEndButton,
                            onClick: handlePrev,
                            variant: components_button_Button__WEBPACK_IMPORTED_MODULE_8__/* .ButtonVariant.rounded */ .W.rounded,
                            label: "Previous",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(svgs_arrowCta_svg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button_Button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            className: (0,utils_classnames__WEBPACK_IMPORTED_MODULE_6__.cn)((_slideshow_module_scss__WEBPACK_IMPORTED_MODULE_7___default().btn), nextButtonClassName, (_slideshow_module_scss__WEBPACK_IMPORTED_MODULE_7___default().btnNext)),
                            // disabled={!loop && buttonState === 1}
                            onMouseDown: handleTouchStartButton,
                            onMouseUp: handleTouchEndButton,
                            onTouchStart: handleTouchStartButton,
                            onTouchEnd: handleTouchEndButton,
                            onClick: handleNext,
                            variant: components_button_Button__WEBPACK_IMPORTED_MODULE_8__/* .ButtonVariant.rounded */ .W.rounded,
                            label: "Next",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(svgs_arrowCta_svg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                        })
                    ]
                }),
                pageDots && numberOfDots > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_slideshow_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dots),
                    children: Array(numberOfDots).fill(1).map((_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_slideshow_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dotWrapper),
                            onClick: ()=>handleSetIndex(i)
                            ,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (0,utils_classnames__WEBPACK_IMPORTED_MODULE_6__.cn)((_slideshow_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dot), index1.current === i && (_slideshow_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dotSelected))
                            })
                        }, i)
                    )
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slideshow);


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


/***/ })

};
;