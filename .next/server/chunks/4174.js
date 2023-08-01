exports.id = 4174;
exports.ids = [4174];
exports.modules = {

/***/ 4854:
/***/ ((module) => {

// Exports
module.exports = {
	"phone": "phone_phone__YTtce",
	"device": "phone_device__lXRzm",
	"whiteBar": "phone_whiteBar__Ja5A7",
	"screen": "phone_screen__a4JhB"
};


/***/ }),

/***/ 4174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ phone_Phone)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/phone/phone.module.scss
var phone_module = __webpack_require__(4854);
var phone_module_default = /*#__PURE__*/__webpack_require__.n(phone_module);
// EXTERNAL MODULE: external "react-intersection-observer"
var external_react_intersection_observer_ = __webpack_require__(9785);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/image/Image.js
var Image = __webpack_require__(7283);
;// CONCATENATED MODULE: ./src/images/phone-green.png
/* harmony default export */ const phone_green = ({"src":"/_next/static/media/phone-green.2d72d65d.png","height":2460,"width":1220,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAAYUlEQVR42mOIzg8LNLLTLzG2NyyJKQgPYEgoidZkgAKgpCpDSmW8EUwgrTrBgCGuOFIPJhBfHKnDEJEbrIOkRYshKi9UFyYQUxAGVJETrI6kQo0htijCJzjNTwuE44ojvQH3lBou8lhuUQAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./src/images/phone-bar-white.png
/* harmony default export */ const phone_bar_white = ({"src":"/_next/static/media/phone-bar-white.608f249f.png","height":112,"width":1084,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAF0lEQVR4nGP89+8fNwMEfAViZCAKxOwAclAEGIRLIWIAAAAASUVORK5CYII="});
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);
;// CONCATENATED MODULE: ./src/components/phone/Phone.js









const Phone = ({ className , screenClassName =false , screen =null , animateInView =false , ...rest }, ref)=>{
    const screenRef = (0,external_react_.useRef)(null);
    const barRef = (0,external_react_.useRef)(null);
    const [inViewRef, inView] = (0,external_react_intersection_observer_.useInView)({
        rootMargin: "-10% 0%",
        threshold: 0.25,
        triggerOnce: true
    });
    const setRefs = (0,external_react_.useCallback)((node)=>{
        inViewRef(node);
        if (ref) ref.current = node;
    }, [
        inViewRef
    ]);
    (0,external_react_.useEffect)(()=>{
        external_gsap_default().set(screenRef.current, {
            yPercent: 50,
            scale: 0,
            opacity: 0
        });
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (inView && animateInView) {
            external_gsap_default().timeline().fromTo(barRef.current, {
                opacity: 1
            }, {
                duration: 0.5,
                opacity: 0,
                ease: "power2.out"
            }, 0).fromTo(screenRef.current, {
                scale: 0
            }, {
                duration: 0.6,
                scale: 1,
                ease: "quart.out"
            }, 0).fromTo(screenRef.current, {
                yPercent: 50,
                opacity: 0
            }, {
                duration: 0.7,
                yPercent: 0,
                opacity: 1,
                ease: "quart.out"
            }, 0);
        }
    }, [
        inView
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ref: setRefs,
        className: external_classnames_default()(className, (phone_module_default()).phone, animateInView && (phone_module_default()).animated),
        children: [
            screen && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                ref: screenRef,
                className: (phone_module_default()).screen,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Image/* SanityImage */.d, {
                    image: screen,
                    className: screenClassName,
                    ...rest
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                ref: barRef,
                className: (phone_module_default()).whiteBar,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Image/* LocalImage */.u, {
                    image: phone_bar_white
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Image/* LocalImage */.u, {
                image: phone_green,
                className: (phone_module_default()).device,
                ...rest
            })
        ]
    });
};
/* harmony default export */ const phone_Phone = (/*#__PURE__*/(0,external_react_.forwardRef)(Phone));


/***/ })

};
;