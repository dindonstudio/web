exports.id = 9214;
exports.ids = [9214];
exports.modules = {

/***/ 4059:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "j": () => (/* binding */ ORIGIN)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_useWindowResize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8216);
/* harmony import */ var hooks_useRaf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4403);
/* harmony import */ var utils_mediaQueries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1455);
/* harmony import */ var hooks_useWindowScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1209);
/* harmony import */ var utils_offsetTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1579);
/* harmony import */ var components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8414);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_4__]);
components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const ORIGIN = {
    top: "top",
    center: "center",
    bottom: "bottom"
};
const Parallax = ({ children , z , className =null , childClassName =null , rotateInit =0 , rotate =0 , ease =null , additionalTransform ="" , overflow =null , origin =ORIGIN.center , mediaQueries =[
    utils_mediaQueries__WEBPACK_IMPORTED_MODULE_2__/* .MOBILE */ .Jq,
    utils_mediaQueries__WEBPACK_IMPORTED_MODULE_2__/* .TABLET */ .EV,
    utils_mediaQueries__WEBPACK_IMPORTED_MODULE_2__/* .DESKTOP */ .q5
] , as ="div" ,  }, ref1)=>{
    const localRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const targetRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const intersectionObserver = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const Tag = as;
    const scrollY = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const areFontsLoaded = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const { 0: enabled , 1: setEnabled  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const setRefs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        localRef.current = e;
        if (ref1) ref1.current = e;
    }, []);
    if (!z) console.error("z prop needs to be set");
    const viewportHeight = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const scrollParent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(rotateInit);
    const y = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const oy = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const scale = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(1);
    const top = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const height = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const maxDist = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const needsUpdate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const needsClean = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const handleResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        if (e) viewportHeight.current = e.documentHeight;
        targetRef.current.style.transform = "";
        if (targetRef.current) intersectionObserver.current.observe(targetRef.current);
    }, []);
    const handleIntersection = (entries, observer)=>{
        const entry = entries[0];
        intersectionObserver.current.unobserve(entry.target);
        const device = (0,utils_mediaQueries__WEBPACK_IMPORTED_MODULE_2__/* .getCurrentDevice */ .Q4)();
        const _enabled = mediaQueries.indexOf(device) !== -1;
        setEnabled(_enabled);
        // parallax
        if (_enabled && z) {
            top.current = (0,utils_offsetTop__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(entry.target);
            // smoothscroll container is fixed and will return an offsetTop of 0
            if (scrollParent.current && (0,components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_4__/* .isActive */ .zh)()) top.current += scrollParent.current.__top || (0,utils_offsetTop__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(scrollParent.current.parentNode);
            height.current = entry.boundingClientRect.height;
            maxDist.current = device === utils_mediaQueries__WEBPACK_IMPORTED_MODULE_2__/* .DESKTOP */ .q5 ? 120 : 60;
            if (overflow === "hidden") scale.current = (height.current + Math.abs(2 * maxDist.current * z)) / height.current;
            needsUpdate.current = true;
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (enabled) tick(true);
    }, [
        enabled
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        scrollParent.current = localRef.current.closest(".smoothscroll");
        intersectionObserver.current = new IntersectionObserver(handleIntersection);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.fonts.ready.then(()=>{
            areFontsLoaded.current = true;
            handleResize();
        });
    }, [
        handleResize
    ]);
    (0,hooks_useWindowScroll__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)((e)=>{
        scrollY.current = e.pageYOffset;
    });
    (0,hooks_useWindowResize__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(handleResize, true);
    const tick = (now = false)=>{
        if (enabled && z) {
            var ref;
            const dy = origin === ORIGIN.center ? (height.current - viewportHeight.current) / 2 : origin === ORIGIN.bottom ? height.current - viewportHeight.current : 0;
            const p = (top.current + dy - scrollY.current) / viewportHeight.current;
            const initY = top.current - scrollY.current;
            const destY = p * maxDist.current * -z;
            const easing = ease || ((ref = scrollParent.current) === null || ref === void 0 ? void 0 : ref.__easing) || 1;
            y.current += (destY - y.current) * (now ? 1 : easing);
            if (rotate || rotateInit) {
                const destRotation = -rotate * initY / viewportHeight.current + rotateInit;
                a.current += (destRotation - a.current) * easing;
            }
            const roundedY = (y.current * 1000 | 0) / 1000;
            const newY = initY + roundedY;
            const isIn = newY + height.current + viewportHeight.current * 0.5 >= 0 && newY <= viewportHeight.current * 1.5 || initY + height.current + viewportHeight.current * 0.5 >= 0 && initY <= viewportHeight.current * 1.5;
            const scaleTransformation = scale.current !== 1 ? ` scale(${scale.current})` : "";
            const rotateTransformation = a.current ? ` rotate(${a.current}deg)` : "";
            if (targetRef.current && isIn && (roundedY !== oy.current || needsUpdate.current)) {
                targetRef.current.style.transform = `translate3d(0,${roundedY}px,0)${rotateTransformation}${scaleTransformation}${additionalTransform}`;
                // targetRef.current.style.willChange = 'transform'
                needsUpdate.current = false;
                needsClean.current = true;
            } else if (!isIn && needsClean.current) {
                targetRef.current.style.transform = `translate(0,${roundedY}px)${rotateTransformation}${scaleTransformation}${additionalTransform}`;
                // targetRef.current.style.willChange = ''
                needsClean.current = false;
            }
            oy.current = roundedY;
        }
    };
    (0,hooks_useRaf__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(()=>{
        tick();
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tag, {
        ref: setRefs,
        className: className,
        style: enabled ? {
            overflow
        } : null,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: childClassName,
            ref: targetRef,
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(Parallax));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7441:
/***/ ((__unused_webpack_module, exports) => {

const colors = {
    black: "#101217",
    white: "#fff",
    purple: "#5750f1",
    lightBlue: "#C9D6CB",
    purpleLight: "#d0ceff",
    purpleDark: "#CEC4CE",
    green: "#83DBA0",
    greenDark: "#17403E",
    greenLight: "#d3ded4",
    yellow: "#f4e97f",
    pinkDark: "#E1C7B3",
    pink: "#FACDBE",
    pinkPurple: "#D8C1ED",
    pinkLight: "#FFE3DA"
};
const hexToRgba = (hex, a = 1)=>{
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b)=>r + r + g + g + b + b
    );
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    // return result ? {
    //   r: parseInt(result[1], 16),
    //   g: parseInt(result[2], 16),
    //   b: parseInt(result[3], 16)
    // } : null
    return result ? `rgba(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)},${a})` : null;
};
// exports.colors = colors
// exports.colorsRGB = Object.fromEntries(Object.entries(colors).map(([k, v]) => [k, v * v]))
exports.O = Object.fromEntries(Object.entries(colors).map(([k, v])=>[
        k,
        {
            name: k,
            hex: v,
            rgb: hexToRgba(v),
            rgba: (a)=>hexToRgba(v, a)
        }
    ]
));


/***/ }),

/***/ 1455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EV": () => (/* binding */ TABLET),
/* harmony export */   "Jq": () => (/* binding */ MOBILE),
/* harmony export */   "Q4": () => (/* binding */ getCurrentDevice),
/* harmony export */   "q5": () => (/* binding */ DESKTOP)
/* harmony export */ });
/* unused harmony exports minDevicesWidth, isMobile, isTablet, isDesktop */
const desktopWidth = 844;
const tabletWidth = 744;
const MOBILE = "mobile";
const TABLET = "tablet";
const DESKTOP = "desktop";
const minDevicesWidth = {
    mobile: 0,
    tablet: tabletWidth,
    desktop: desktopWidth
};
const isMobile = ()=>window.matchMedia(`(max-width: ${tabletWidth - 1}px)`).matches
;
const isTablet = ()=>window.matchMedia(`(min-width: ${tabletWidth}px) and (max-width: ${desktopWidth - 1}px)`).matches
;
const isDesktop = ()=>window.matchMedia(`(min-width: ${desktopWidth}px)`).matches
;
const getCurrentDevice = (width = null)=>{
    if (width !== null) {
        for(const key in minDevicesWidth){
            if (minDevicesWidth[key] <= width) return key;
        }
    } else {
        if (isDesktop()) return DESKTOP;
        else if (isTablet()) return TABLET;
        else if (isMobile()) return MOBILE;
    }
};


/***/ }),

/***/ 1579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const offsetTop = (node)=>{
    let top = 0;
    while(node){
        top += node.offsetTop;
        node = node.offsetParent;
    }
    return top;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (offsetTop);


/***/ })

};
;