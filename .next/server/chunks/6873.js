exports.id = 6873;
exports.ids = [6873];
exports.modules = {

/***/ 5941:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "button_btn__EuPxb",
	"btnReset": "button_btnReset__46o4P",
	"spinner": "button_spinner__BybWR",
	"children": "button_children__CAXMx",
	"isLoading": "button_isLoading__IK7NC",
	"underlined": "button_underlined__5j51U",
	"isActive": "button_isActive__tn6U_",
	"circle": "button_circle__0x73m",
	"rounded": "button_rounded__Aad7d",
	"inverted": "button_inverted__V4YPC",
	"transparent": "button_transparent__FM9QF",
	"hoverTransparent": "button_hoverTransparent__aHoYi"
};


/***/ }),

/***/ 2049:
/***/ ((module) => {

// Exports
module.exports = {
	"spinner": "spinner_spinner__NwsMu",
	"load8": "spinner_load8__R3w8S"
};


/***/ }),

/***/ 6873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": () => (/* binding */ ButtonVariant),
  "Z": () => (/* binding */ button_Button)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/spinner/spinner.module.scss
var spinner_module = __webpack_require__(2049);
var spinner_module_default = /*#__PURE__*/__webpack_require__.n(spinner_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/spinner/spinner.js



const Spinner = ({ className  })=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: external_classnames_default()((spinner_module_default()).spinner, className)
    })
;
/* harmony default export */ const spinner = (Spinner);

// EXTERNAL MODULE: ./src/utils/classnames.js
var classnames = __webpack_require__(6610);
// EXTERNAL MODULE: ./src/components/button/button.module.scss
var button_module = __webpack_require__(5941);
var button_module_default = /*#__PURE__*/__webpack_require__.n(button_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/utils/resolveLink.js
const resolveInternalLink = (link)=>{
    const { _type , slug ="" , label , reference  } = link;
    let href = "";
    switch(_type){
        case "homePage":
            href = `/`;
            break;
        default:
            href = `/${slug}`;
            break;
    }
    // Fix for internal links not working in Footer
    if (!slug && reference._ref.includes("page.")) {
        href = `/${reference._ref.split(".").pop()}`;
    }
    return {
        href,
        label
    };
};
const resolveExternalLink = (link)=>{
    return {
        href: link.url,
        label: link.label
    };
};
const getLinkLabel = (link)=>{
    var ref;
    if (!link) return undefined;
    if ((ref = link._type) === null || ref === void 0 ? void 0 : ref.startsWith("link")) {
        var ref1, ref2, ref3;
        if (((ref1 = link.type) === null || ref1 === void 0 ? void 0 : ref1.startsWith("external")) && link.external) return link.external.label;
        if ((((ref2 = link.type) === null || ref2 === void 0 ? void 0 : ref2.startsWith("internal")) || ((ref3 = link.internal) === null || ref3 === void 0 ? void 0 : ref3.slug)) && link.internal) return link.internal.label;
    }
    return link === null || link === void 0 ? void 0 : link.label;
};
const resolveLink = (link)=>{
    var ref, ref4, ref5;
    if (!link) return undefined;
    if ((ref = link._type) === null || ref === void 0 ? void 0 : ref.startsWith("link")) {
        if (link.url) return resolveExternalLink(link);
        if (link.slug || !link.url) return resolveInternalLink(link);
    }
    if ((ref4 = link._type) === null || ref4 === void 0 ? void 0 : ref4.startsWith("external")) return resolveExternalLink(link);
    if (((ref5 = link._type) === null || ref5 === void 0 ? void 0 : ref5.startsWith("internal")) || link.slug) return resolveInternalLink(link);
    return link;
};
const resolveUrlOrFile = (link, defaultLabel = null)=>{
    if (!(link === null || link === void 0 ? void 0 : link.type)) return;
    if (link.type === "file" && link.fileURL) {
        return {
            href: link.fileURL,
            label: link.label || defaultLabel
        };
    }
    if (link.type === "url" && link.url) {
        return {
            href: link.url,
            label: link.label || defaultLabel
        };
    }
    return undefined;
};

;// CONCATENATED MODULE: ./src/utils/rewritify.js
/* === AUTO GENERATED FILE === */ /* eslint-disable */ const rewrites = [];
function rewritify(route = "") {
    const page = rewrites.find((rewrite)=>route.startsWith(rewrite.destination)
    );
    return page ? route.replace(page.destination, page.source) : route;
};

;// CONCATENATED MODULE: ./src/components/button/Button.js









const ButtonVariant = {
    rounded: "rounded",
    circle: "circle",
    underlined: "underlined"
};
const Button = ({ children , label , variant , className , style , noStyle =false , noReset =false , noHover =false , id , onClick , onMouseOver =null , onMouseOut =null , link , as , href , rel , prefetch =false , scroll =true , target =null , inverted =false , transparent =false , hoverTransparent =false , disabled =null , type ="button" , enableLoader , loading , active =undefined , canActivate =false , activateClassName =null , onActivated =null , preventNextLink =false , ...rest }, ref)=>{
    const router = (0,router_.useRouter)();
    const _link = resolveLink(link);
    const _href = _link ? _link.href : href;
    const _label = _link ? _link.label : label;
    const variants = Array.isArray(variant) ? variant : [
        variant
    ];
    const wasActive = (0,external_react_.useRef)(false);
    const isActive = active === true || active === undefined && canActivate && router.asPath.split("#")[0] === _href;
    const classNames = [
        (button_module_default()).btn,
        ...variants.map((v)=>(button_module_default())[v]
        ),
        isActive && (button_module_default()).isActive,
        isActive && activateClassName,
        transparent && (button_module_default()).transparent,
        inverted && (button_module_default()).inverted,
        hoverTransparent && (button_module_default()).hoverTransparent,
        loading && (button_module_default()).isLoading,
        !noHover && (button_module_default()).hover,
        className, 
    ];
    (0,external_react_.useEffect)(()=>{
        if (isActive !== wasActive.current) {
            if (isActive) onActivated === null || onActivated === void 0 ? void 0 : onActivated();
            wasActive.current = isActive;
        }
    }, [
        isActive,
        onActivated
    ]);
    let _children = children || _label;
    _children = enableLoader ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (button_module_default()).children,
                children: _children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(spinner, {
                className: (button_module_default()).spinner
            })
        ]
    }) : _children;
    if (!_href || preventNextLink) {
        // => <button>
        const Tag = as || (preventNextLink ? "a" : "button");
        return /*#__PURE__*/ jsx_runtime_.jsx(Tag, {
            id: id,
            ref: ref,
            className: noStyle ? noReset ? (0,classnames.cn)(className) : (0,classnames.cn)((button_module_default()).btnReset, className) : noReset ? (0,classnames.cn)(classNames) : (0,classnames.cn)((button_module_default()).btnReset, classNames),
            style: style,
            onClick: onClick,
            onMouseOver: onMouseOver,
            onMouseOut: onMouseOut,
            disabled: disabled,
            "aria-label": _label,
            type: type,
            href: preventNextLink ? _href : null,
            ...rest,
            children: _children
        });
    }
    const _rel = rel || (_href && _href.indexOf("http") !== -1 ? "noopener noreferrer" : null);
    const _target = target || (_href && (_href.indexOf("mailto:") === 0 || _href.indexOf("http") === 0) ? "_blank" : undefined);
    // => <Link>
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: rewritify(_href),
        scroll: scroll,
        prefetch: prefetch,
        ...rest,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            id: id,
            ref: ref,
            className: (0,classnames.cn)(noStyle ? className : classNames),
            style: style,
            onClick: onClick,
            onMouseOver: onMouseOver,
            onMouseOut: onMouseOut,
            rel: _rel,
            target: _target,
            children: _children
        })
    });
};
/* harmony default export */ const button_Button = (/*#__PURE__*/(0,external_react_.forwardRef)(Button));


/***/ })

};
;