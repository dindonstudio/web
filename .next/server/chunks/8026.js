exports.id = 8026;
exports.ids = [8026];
exports.modules = {

/***/ 391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgDealflow = function SvgDealflow(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    width: "2.4rem",
    height: "3.9rem",
    viewBox: "0 0 24 39",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M.003 3.32A2.857 2.857 0 0 1 2.86.462h20.395s-.138 9.677-6.558 16.098C9.541 23.714.003 23.714.003 23.714V3.32ZM14.309 26.575a2.857 2.857 0 0 0-2.857-2.857H0s.085 5.954 4.036 9.906c4.402 4.402 10.273 4.402 10.273 4.402V26.575Z",
    fill: "currentColor"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgDealflow);

/***/ }),

/***/ 7730:
/***/ ((module) => {

// Exports
module.exports = {
	"bulletPoints": "bulletPoints_bulletPoints__KS3lX",
	"title": "bulletPoints_title__9J2js",
	"feature": "bulletPoints_feature__Rq3Y9",
	"cta": "bulletPoints_cta__A5DBh",
	"horizontal": "bulletPoints_horizontal__VL5Bn"
};


/***/ }),

/***/ 4797:
/***/ ((module) => {

// Exports
module.exports = {
	"featureDiptych": "featureDiptych_featureDiptych__Az5oz",
	"features": "featureDiptych_features__jPYVY",
	"imagesCol": "featureDiptych_imagesCol__ueRUb",
	"image": "featureDiptych_image__gC_lm",
	"imageRounded": "featureDiptych_imageRounded__G3EK5",
	"phone": "featureDiptych_phone__UKYoe",
	"circle": "featureDiptych_circle__D31Fa",
	"hcenter": "featureDiptych_hcenter__vCAQf",
	"hleft": "featureDiptych_hleft__iz63Y",
	"vtop": "featureDiptych_vtop__NpM_x",
	"vcenter": "featureDiptych_vcenter__Db90O",
	"vbottom": "featureDiptych_vbottom__h0_Ie"
};


/***/ }),

/***/ 6332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_customBlockContent_CustomBlockContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6096);
/* harmony import */ var _bulletPoints_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7730);
/* harmony import */ var _bulletPoints_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bulletPoints_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var svgs_arrowCta_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9097);
/* harmony import */ var components_button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6873);






const BulletPoints = ({ title , features =null , className =null , cta =null , orientation ="vertical"  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_bulletPoints_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bulletPoints), className, (_bulletPoints_module_scss__WEBPACK_IMPORTED_MODULE_2___default())[orientation]),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("hm-2 hd-2", (_bulletPoints_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title)),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_customBlockContent_CustomBlockContent__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
                    blocks: title,
                    noDom: true
                })
            }),
            (features === null || features === void 0 ? void 0 : features.length) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: (_bulletPoints_module_scss__WEBPACK_IMPORTED_MODULE_2___default().features),
                children: features.map((feature, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("pd-16 pm-16", (_bulletPoints_module_scss__WEBPACK_IMPORTED_MODULE_2___default().feature)),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(svgs_arrowCta_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                className: "desktop-only",
                                "aria-hidden": true
                            }),
                            feature
                        ]
                    }, i)
                )
            }),
            cta && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_button_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                link: cta,
                variant: components_button_Button__WEBPACK_IMPORTED_MODULE_5__/* .ButtonVariant.rounded */ .W.rounded,
                hoverTransparent: true,
                className: (_bulletPoints_module_scss__WEBPACK_IMPORTED_MODULE_2___default().cta),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(svgs_arrowCta_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    " ",
                    cta.label
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BulletPoints);


/***/ }),

/***/ 6389:
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
/* harmony import */ var _featureDiptych_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4797);
/* harmony import */ var _featureDiptych_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_featureDiptych_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_parallax_Parallax__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4059);
/* harmony import */ var _config_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7441);
/* harmony import */ var components_circleBackground_CircleBackground__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2215);
/* harmony import */ var components_phone_Phone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4174);
/* harmony import */ var components_bulletPoints_BulletPoints__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6332);
/* harmony import */ var components_image_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7283);
/* harmony import */ var utils_mediaQueries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1455);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_parallax_Parallax__WEBPACK_IMPORTED_MODULE_6__, components_circleBackground_CircleBackground__WEBPACK_IMPORTED_MODULE_9__]);
([components_parallax_Parallax__WEBPACK_IMPORTED_MODULE_6__, components_circleBackground_CircleBackground__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
var ref;










const FeatureDiptych = ({ title , features =null , image =null , halign ="left" , valign ="top" , className , imageParams ={
    imageDesktopWidth: 350,
    imageMobileWidth: 235,
    className: null
} , withPhone =false , backgroundColor ={
    bg: null,
    circle: (ref = _config_variables__WEBPACK_IMPORTED_MODULE_2__/* .colors.purpleLight */ .O.purpleLight) === null || ref === void 0 ? void 0 : ref.hex
} , circleClassName =null , cta =null , parallaxRatio =null , children =null , phoneRef =null ,  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("container", className, (_featureDiptych_module_scss__WEBPACK_IMPORTED_MODULE_3___default().featureDiptych), (_featureDiptych_module_scss__WEBPACK_IMPORTED_MODULE_3___default())["v" + valign], (_featureDiptych_module_scss__WEBPACK_IMPORTED_MODULE_3___default())["h" + halign]),
        children: [
            image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_featureDiptych_module_scss__WEBPACK_IMPORTED_MODULE_3___default().imagesCol),
                children: withPhone ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_phone_Phone__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    ref: phoneRef,
                    screen: image,
                    ...imageParams,
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_featureDiptych_module_scss__WEBPACK_IMPORTED_MODULE_3___default().image), (_featureDiptych_module_scss__WEBPACK_IMPORTED_MODULE_3___default().phone)),
                    animateInView: true
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_image_Image__WEBPACK_IMPORTED_MODULE_5__/* .SanityImage */ .d, {
                    image: image,
                    ...imageParams,
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_featureDiptych_module_scss__WEBPACK_IMPORTED_MODULE_3___default().image), !withPhone && (_featureDiptych_module_scss__WEBPACK_IMPORTED_MODULE_3___default().imageRounded), imageParams.className)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_parallax_Parallax__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                z: parallaxRatio || (withPhone ? 2.3 : 1.5),
                className: (_featureDiptych_module_scss__WEBPACK_IMPORTED_MODULE_3___default().imageWrap),
                mediaQueries: [
                    utils_mediaQueries__WEBPACK_IMPORTED_MODULE_7__/* .DESKTOP */ .q5
                ],
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_bulletPoints_BulletPoints__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    title: title,
                    features: features,
                    className: (_featureDiptych_module_scss__WEBPACK_IMPORTED_MODULE_3___default().features),
                    cta: cta
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_circleBackground_CircleBackground__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                className: (_featureDiptych_module_scss__WEBPACK_IMPORTED_MODULE_3___default().background),
                childClassName: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_featureDiptych_module_scss__WEBPACK_IMPORTED_MODULE_3___default().circle), circleClassName),
                colors: backgroundColor,
                overflowVisible: true,
                fixed: false
            }),
            children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeatureDiptych);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;