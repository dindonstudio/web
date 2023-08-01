exports.id = 8414;
exports.ids = [8414];
exports.modules = {

/***/ 5999:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "SmoothScroll_container__L1r_8",
	"isActive": "SmoothScroll_isActive__YEn7u",
	"size": "SmoothScroll_size__CSf_l"
};


/***/ }),

/***/ 8414:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "_X": () => (/* binding */ getEasing),
/* harmony export */   "zh": () => (/* binding */ isActive)
/* harmony export */ });
/* unused harmony export EASING */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var detect_it__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3377);
/* harmony import */ var detect_it__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(detect_it__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks_useRaf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4403);
/* harmony import */ var hooks_useWindowScroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1209);
/* harmony import */ var _SmoothScroll_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5999);
/* harmony import */ var _SmoothScroll_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SmoothScroll_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var stores_useScrollStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6679);
/* harmony import */ var stores_useAppStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7462);
/* harmony import */ var utils_classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6610);
/* harmony import */ var hooks_useResizeObserver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9257);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([stores_useScrollStore__WEBPACK_IMPORTED_MODULE_3__, stores_useAppStore__WEBPACK_IMPORTED_MODULE_4__]);
([stores_useScrollStore__WEBPACK_IMPORTED_MODULE_3__, stores_useAppStore__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const EASING = 0.15;
const isActive = ()=>detect_it__WEBPACK_IMPORTED_MODULE_2__.primaryInput !== "touch"
;
const getEasing = ()=>isActive() ? EASING : 1
;
const SmoothScroll = ({ children =null , as ="div" , className =null , childClassName =null , childStyle =null , style =null , onInView =(inView, topInView, bottomInView)=>{} , onScroll =({ y , height , percent , percentTop  })=>{} , autoDisablePointerEvents =true , sticky =null , childRef =null , preventDisable =false ,  }, ref1)=>{
    const Tag = as;
    const mainRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const dummyRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const intersectionObserver = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const useStore = (0,stores_useScrollStore__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const [enabled, isLocked] = (0,stores_useScrollStore__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)((state)=>[
            state.enabled,
            state.isLocked
        ]
    );
    const isEnabled = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(enabled);
    const isDirty = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);
    const isInView = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const height = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const top = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(Infinity);
    const isFirstScroll = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);
    const isFirstResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);
    const isActiveClassName = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)("");
    const windowSize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(stores_useAppStore__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getState */ .Z.getState().windowSize);
    // physics
    const _y = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const y1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const vy = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const pointerDisabled = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const handleIntersection = (entries)=>{
        const entry = entries.filter((e)=>e.target === (detect_it__WEBPACK_IMPORTED_MODULE_2__.primaryInput === "touch" ? mainRef.current : dummyRef.current)
        )[0];
        if (entry) {
            intersectionObserver.current.unobserve(entry.target);
            entries.sort((a, b)=>a.boundingClientRect.top - b.boundingClientRect.top
            );
            const firstEntry = entries[0];
            // top.current = entry.boundingClientRect.top - (entry !== firstEntry ? entries[0].boundingClientRect.top : 0)
            top.current = entry === firstEntry ? 0 : entry.boundingClientRect.top - entries[0].boundingClientRect.top;
            mainRef.current.__top = top.current;
            tick(true);
        }
    };
    const tick = (now)=>{
        if (mainRef.current && windowSize.current && detect_it__WEBPACK_IMPORTED_MODULE_2__.primaryInput !== "touch") {
            if (isEnabled.current) {
                if (now || isFirstScroll.current) {
                    y1.current = _y.current;
                    vy.current = 0;
                } else {
                    vy.current = _y.current - y1.current;
                    y1.current += vy.current * EASING;
                }
            }
            const screenPosition = y1.current - top.current;
            const topInView = screenPosition - height.current <= 0;
            const bottomInView = screenPosition + windowSize.current.height >= 0;
            const inView = preventDisable || topInView && bottomInView;
            if (onInView && isInView.current !== inView) onInView(inView, topInView, bottomInView);
            isInView.current = inView;
            let yRound = ((y1.current - top.current + 0.01) * 1000 | 0) / 1000 // rounding values
            ;
            if (sticky) yRound = Math.min(yRound, 0);
            mainRef.current.__y = -yRound;
            if (inView) {
                if (!isDirty.current) {
                    // mainRef.current.style.willChange = 'transform'
                    isDirty.current = true;
                }
                const translate = `translate3d(0,${-yRound}px,0)`;
                mainRef.current.style.transform = translate;
                if (onScroll) {
                    onScroll({
                        y: yRound,
                        height: height.current,
                        percent: (yRound + windowSize.current.height) / (height.current + windowSize.current.height),
                        percentTop: yRound / height.current
                    });
                }
                // disable pointer events while scrolling
                if (autoDisablePointerEvents) {
                    const vyAbs = Math.abs(vy.current);
                    if (!pointerDisabled.current && vyAbs > 10) {
                        pointerDisabled.current = true;
                        mainRef.current.style.pointerEvents = "none";
                    } else if (pointerDisabled && vyAbs <= 10) {
                        pointerDisabled.current = false;
                        mainRef.current.style.pointerEvents = "";
                    }
                }
            } else if (isDirty.current) {
                // mainRef.current.style.willChange = ''
                mainRef.current.style.transform = "";
                isDirty.current = false;
            }
        }
    };
    const handleResize = ()=>{
        if (dummyRef.current) {
            intersectionObserver.current.observe(detect_it__WEBPACK_IMPORTED_MODULE_2__.primaryInput === "touch" ? mainRef.current : dummyRef.current);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (detect_it__WEBPACK_IMPORTED_MODULE_2__.primaryInput !== "touch") {
            mainRef.current.__easing = EASING;
        }
        return stores_useAppStore__WEBPACK_IMPORTED_MODULE_4__/* ["default"].subscribe */ .Z.subscribe((state)=>{
            windowSize.current = state.windowSize;
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        isEnabled.current = enabled;
    }, [
        enabled
    ]);
    (0,hooks_useResizeObserver__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(mainRef, (entry)=>{
        if (dummyRef.current) {
            var ref;
            const h = ((ref = entry.borderBoxSize) === null || ref === void 0 ? void 0 : ref.length) ? entry.borderBoxSize[0].blockSize : entry.target.getBoundingClientRect().height;
            if (h !== height.current) {
                height.current = h;
                mainRef.current.__height = h;
                if (detect_it__WEBPACK_IMPORTED_MODULE_2__.primaryInput !== "touch") {
                    dummyRef.current.style.height = `${height.current}px`;
                }
            }
            if (isFirstResize.current) {
                isFirstResize.current = false;
                if (detect_it__WEBPACK_IMPORTED_MODULE_2__.primaryInput !== "touch") {
                    mainRef.current.classList.add((_SmoothScroll_module_scss__WEBPACK_IMPORTED_MODULE_6___default().isActive));
                    dummyRef.current.classList.add((_SmoothScroll_module_scss__WEBPACK_IMPORTED_MODULE_6___default().isActive));
                    isActiveClassName.current = (_SmoothScroll_module_scss__WEBPACK_IMPORTED_MODULE_6___default().isActive);
                }
                if (detect_it__WEBPACK_IMPORTED_MODULE_2__.primaryInput !== "touch" || onScroll) {
                    const state = useStore.getState();
                    intersectionObserver.current = state.intersectionObserver;
                    state.addObserverCallback(handleIntersection);
                    state.addResizeCallback(handleResize);
                    requestAnimationFrame(()=>{
                        handleResize();
                    });
                }
            }
        }
    });
    if (isActive()) {
        (0,hooks_useRaf__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(()=>tick()
        , true);
    }
    (0,hooks_useWindowScroll__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)((e)=>{
        if (isEnabled.current && !isLocked) {
            _y.current = e.pageYOffset;
        }
        if (isFirstScroll.current) {
            y1.current = _y.current;
            isFirstScroll.current = false;
        }
        if (detect_it__WEBPACK_IMPORTED_MODULE_2__.primaryInput === "touch" && onScroll) {
            const y = _y.current - top.current;
            const documentHeight = e.documentHeight || document.documentElement.clientHeight;
            onScroll({
                y,
                height: height.current,
                percent: (y + documentHeight) / (height.current + documentHeight),
                percentTop: y / height.current
            });
        }
    }, false, [
        isLocked
    ]);
    const setRefs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((node)=>{
        mainRef.current = node;
        if (childRef) childRef.current = node;
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tag, {
        className: className,
        style: style,
        ref: ref1,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: setRefs,
                className: (0,utils_classnames__WEBPACK_IMPORTED_MODULE_9__.cn)("smoothscroll", (_SmoothScroll_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container), isActiveClassName.current, childClassName),
                style: childStyle,
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: dummyRef,
                className: (0,utils_classnames__WEBPACK_IMPORTED_MODULE_9__.cn)((_SmoothScroll_module_scss__WEBPACK_IMPORTED_MODULE_6___default().size), isActiveClassName.current),
                "aria-hidden": true
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(SmoothScroll));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const callbacks = [];
let request = null;
let then = 0;
const tick = (time)=>{
    const elapsed = time - then;
    const fpsInterval = 1000 / 60;
    if (elapsed > fpsInterval) {
        then = time - elapsed % fpsInterval;
        callbacks.forEach((cb)=>{
            cb(elapsed);
        });
    }
    request = window.requestAnimationFrame(tick);
};
const useRaf = (callback, prio)=>{
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (prio) callbacks.unshift(callback);
        else callbacks.push(callback);
        if (!request) {
            then = 0;
            request = window.requestAnimationFrame(tick);
        }
        return ()=>{
            const index = callbacks.indexOf(callback);
            if (index !== -1) callbacks.splice(index, 1);
            if (!callbacks.length) {
                window.cancelAnimationFrame(request);
                request = null;
            }
        };
    }, [
        callback,
        prio
    ]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRaf);


/***/ }),

/***/ 9257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useResizeObserver = (ref, callback, effectProps = [])=>{
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const resizeObserver = new ResizeObserver((entries)=>{
            callback(entries[0]);
        });
        resizeObserver.observe(ref.current);
        return ()=>{
            resizeObserver.disconnect();
        };
    }, [
        ref,
        callback,
        ...effectProps
    ]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useResizeObserver);


/***/ }),

/***/ 944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports events, data */
/* harmony import */ var detect_it__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3377);
/* harmony import */ var detect_it__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(detect_it__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5137);



/**
 * We ensure there's only one event of each type
 */ const events = {};
const data = {
    pageYOffset: 0,
    innerWidth: 0,
    innerHeight: 0,
    documentHeight: 0,
    offsetWidth: 0
};
/**
 * Mapping event
 * Because window events are unik, we can add
 * intensive getters to the returned event.
 */ const map = (e)=>{
    switch(e.type){
        case "scroll":
            if (e.target) data.pageYOffset = window.pageYOffset;
            e.pageYOffset = e.scrollY = data.pageYOffset;
            e.innerWidth = data.innerWidth;
            e.innerHeight = data.innerHeight;
            e.documentHeight = data.documentHeight;
            e.offsetWidth = data.offsetWidth;
            break;
        case "resize":
            if (e.target || !data.innerWidth) {
                data.innerWidth = window.innerWidth;
                data.innerHeight = window.innerHeight;
                data.documentHeight = document.documentElement.clientHeight;
                data.offsetWidth = document.body.offsetWidth;
            }
            e.innerWidth = data.innerWidth;
            e.innerHeight = data.innerHeight;
            e.documentHeight = data.documentHeight;
            e.offsetWidth = data.offsetWidth;
            break;
        case "blur":
        case "focus":
            break;
    }
    return e;
};
const useWindowEvent = (eventName, cb, triggerInit = false, useEffectProps = [], debounceDelay = 50)=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const debounceCb = debounceDelay ? (0,utils_debounce__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(cb, debounceDelay) : cb;
        if (debounceCb && eventName) {
            if (events[eventName]) {
                events[eventName].cbs.push(debounceCb);
                if (triggerInit) {
                    cb(map({
                        type: eventName
                    }));
                }
            } else {
                const event = {
                    cbs: [
                        debounceCb
                    ]
                };
                event.cb = (e)=>{
                    const m = map(e);
                    event.cbs.forEach((ecb)=>{
                        ecb(m, e);
                    });
                };
                const passive = detect_it__WEBPACK_IMPORTED_MODULE_0__.supportsPassiveEvents ? {
                    passive: true
                } : false;
                window.addEventListener(eventName, event.cb, passive);
                events[eventName] = event;
                if (triggerInit) {
                    cb(map({
                        type: eventName
                    }));
                }
            }
        }
        return ()=>{
            // cleanup event
            if (eventName) {
                const event = events[eventName];
                if (event) {
                    const index = event.cbs.indexOf(debounceCb);
                    if (index !== -1) {
                        event.cbs.splice(index, 1);
                        if (event.cbs.length === 0) {
                            window.removeEventListener(eventName, event.cb);
                            events[eventName] = null;
                        }
                    }
                }
            }
        };
    }, [
        eventName,
        ...useEffectProps
    ]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useWindowEvent);


/***/ }),

/***/ 1209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _useWindowEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(944);

/**
 * Returns a function that accepts a callback to be performed when the window scrolls.
 * Please note: the callback is not debounced, to improve performances check `useDebouncedCallback`;
 *
 * ### Usage:
 *
 * ```jsx harmony
 * const MyComponent = () => {
 *   const onWindowScroll = useWindowScroll();
 *
 *   onWindowScroll(() => console.log('Window is scrolling...'));
 *
 *   return (<div />)
 * }
 * ```
 */ const useWindowScroll = (cb, triggerInit = false, useEffectProps = [], debounceDelay = 0)=>(0,_useWindowEvent__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)("scroll", cb, triggerInit, useEffectProps, debounceDelay)
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useWindowScroll);


/***/ }),

/***/ 7462:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-nocheck

const useAppStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__["default"])((set)=>({
        windowSize: {
            width: 0,
            height: 0
        },
        scrollbarWidth: 0,
        scrollbarEnabled: true,
        setScrollbarEnabled: (value)=>set(()=>({
                    scrollbarEnabled: value
                })
            )
    })
);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAppStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6679:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export useStore */
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_2__]);
zustand__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



let intersectionCallbacks = [];
let resizeCallbacks = [];
let resizeObserver;
let path = "";
const useStore = (0,zustand__WEBPACK_IMPORTED_MODULE_2__["default"])((set)=>({
        isLocked: false,
        setIsLocked: (value)=>set(()=>({
                    isLocked: value
                })
            )
        ,
        intersectionObserver: null,
        resizeObserver: null,
        enabled: true,
        setEnabled: (value)=>set(()=>({
                    enabled: value
                })
            )
        ,
        addObserverCallback: (cb)=>{
            intersectionCallbacks.push(cb);
        },
        removeObserverCallback: (cb)=>{
            const indexToRemove = intersectionCallbacks.indexOf(cb);
            if (indexToRemove !== -1) {
                intersectionCallbacks = intersectionCallbacks.filter((slice, index)=>index !== indexToRemove
                );
            }
        },
        addResizeCallback: (cb)=>{
            resizeCallbacks.push(cb);
        },
        removeResizeCallback: (cb)=>{
            const indexToRemove = resizeCallbacks.indexOf(cb);
            if (indexToRemove !== -1) {
                resizeCallbacks = resizeCallbacks.filter((slice, index)=>index !== indexToRemove
                );
            }
        }
    })
);
const useScrollStore = (createState = null)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!resizeObserver) {
            resizeObserver = new ResizeObserver((entries, observer)=>{
                resizeCallbacks.forEach((cb)=>{
                    cb(entries[0]);
                });
            });
            resizeObserver.observe(document.body);
        }
        const currentIntersectionObserver = useStore.getState().intersectionObserver;
        if (path !== router.asPath) {
            path = router.asPath;
            if (currentIntersectionObserver) currentIntersectionObserver.disconnect();
            const intersectionObserver = new IntersectionObserver((entries, observer)=>{
                intersectionCallbacks.forEach((cb)=>{
                    cb(entries, observer);
                });
            });
            useStore.setState({
                intersectionObserver
            });
        }
    }, []);
    return createState ? useStore(createState) : useStore;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useScrollStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 5137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Debounce function
 */ const debounce = (func, duration = 100)=>{
    let timeout;
    return (...args)=>{
        const effect = ()=>{
            timeout = undefined;
            return func.apply(undefined, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(effect, duration);
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (debounce);


/***/ })

};
;