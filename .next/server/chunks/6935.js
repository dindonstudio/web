exports.id = 6935;
exports.ids = [6935];
exports.modules = {

/***/ 1233:
/***/ ((module) => {

// Exports
module.exports = {
	"image": "image_image__lootM",
	"isLoaded": "image_isLoaded__LEH_h"
};


/***/ }),

/***/ 7283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ SanityImage),
/* harmony export */   "u": () => (/* binding */ LocalImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_sanityImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6999);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6610);
/* harmony import */ var _image_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1233);
/* harmony import */ var _image_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_image_module_scss__WEBPACK_IMPORTED_MODULE_4__);

// @ts-nocheck





const mobileMockupWidth = 375;
const desktopMockupWidth = 1440;
const mobileMaxWidth = 844;
const emptyImage = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
const Image = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(({ src , width , height , mobileWidth =mobileMockupWidth , desktopWidth =desktopMockupWidth , alt ="" , layout ="responsive" , className =null , as =null , style =null , objectFit =null , loader =undefined , mobileOnly =false , desktopOnly =false , priority =false ,  }, ref)=>{
    const localRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    const { 0: isLoaded , 1: setIsLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const setRefs = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((node)=>{
        localRef.current = node;
        if (ref) ref.current = node;
    }, []);
    const sizes = `${!mobileOnly ? `(min-width: ${mobileMaxWidth}px) ${Math.round(desktopWidth * 100 / desktopMockupWidth)}vw` : `(max-width: ${mobileMaxWidth - 1}px) ${Math.round(mobileWidth * 100 / mobileMockupWidth)}vw`}${!desktopOnly && !mobileOnly ? `,${Math.round(mobileWidth * 100 / mobileMockupWidth)}vw` : ",0vw"}`;
    const Tag = as || "div";
    const onLoad = ()=>{
        if (localRef.current) setIsLoaded(true);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tag, {
        ref: setRefs,
        className: (0,utils_classnames__WEBPACK_IMPORTED_MODULE_3__.cn)(mobileOnly && "mobile-only", desktopOnly && "desktop-only", (_image_module_scss__WEBPACK_IMPORTED_MODULE_4___default().image), isLoaded && (_image_module_scss__WEBPACK_IMPORTED_MODULE_4___default().isLoaded), className),
        style: style,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            onLoadingComplete: onLoad,
            src: src,
            alt: alt,
            layout: layout,
            objectFit: objectFit,
            sizes: [
                "fill",
                "responsive"
            ].includes(layout) ? sizes : undefined,
            width: layout !== "fill" && width,
            height: layout !== "fill" && height,
            loader: loader,
            priority: priority,
            lazyBoundary: "50%"
        })
    });
});
const LocalImage = ({ image , mobileWidth =mobileMockupWidth , desktopWidth =desktopMockupWidth , alt ="" , layout ="responsive" , className =null , as =null , style =null , objectFit =null , priority =false , mobileOnly =false , desktopOnly =false ,  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Image, {
        src: image.src,
        width: image.width,
        height: image.height,
        mobileWidth: mobileWidth,
        desktopWidth: desktopWidth,
        mobileOnly: mobileOnly,
        desktopOnly: desktopOnly,
        as: as,
        layout: layout,
        className: className,
        style: style,
        objectFit: objectFit,
        priority: priority,
        alt: alt
    });
};
const SanityImage = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(({ image , ratio =null , alt ="" , mobileWidth =mobileMockupWidth , desktopWidth =desktopMockupWidth , layout ="responsive" , className =null , as =null , style =null , objectFit =null , priority =false , mobileOnly =false , desktopOnly =false ,  }, ref)=>{
    if (!(image === null || image === void 0 ? void 0 : image.asset)) {
        console.warn("undefined image");
        return null;
    }
    const refSplit = image.asset._ref.split("-");
    const dimensions = refSplit[refSplit.length - 2].split("x");
    const sanityImage = lib_sanityImage__WEBPACK_IMPORTED_MODULE_5__/* .imageBuilder.image */ .t.image(image);
    const crop = sanityImage.options.source.crop;
    const aspectRatio = ratio || crop && (1 - crop.left - crop.right) * dimensions[0] / ((1 - crop.top - crop.bottom) * dimensions[1]) || dimensions[0] / dimensions[1];
    const sanityLoader = ({ width , quality  })=>{
        if (width === 1) return emptyImage;
        else return sanityImage.size(width | 0, width / aspectRatio | 0).fit("crop").quality(quality).auto("format").url();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Image, {
        src: lib_sanityImage__WEBPACK_IMPORTED_MODULE_5__/* .imageBuilder.image */ .t.image(image).size(desktopMockupWidth, desktopMockupWidth / aspectRatio | 0).fit("crop").auto("format").url(),
        loader: sanityLoader,
        width: dimensions[0],
        height: dimensions[0] / aspectRatio,
        mobileWidth: mobileWidth,
        desktopWidth: desktopWidth,
        mobileOnly: mobileOnly,
        desktopOnly: desktopOnly,
        as: as,
        layout: layout,
        className: className,
        style: style,
        objectFit: objectFit,
        priority: priority,
        alt: alt,
        ref: ref
    });
});


/***/ }),

/***/ 4223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ pageRevalidate),
/* harmony export */   "Y": () => (/* binding */ postRevalidate)
/* harmony export */ });
const pageRevalidate = 20;
const postRevalidate = 20;


/***/ })

};
;