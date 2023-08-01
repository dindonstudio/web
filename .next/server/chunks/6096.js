exports.id = 6096;
exports.ids = [6096];
exports.modules = {

/***/ 2388:
/***/ ((module) => {

// Exports
module.exports = {
	"h2": "customBlockContent_h2__rRFgO",
	"h3": "customBlockContent_h3__r0D8j",
	"h4": "customBlockContent_h4__uKNgk",
	"h5": "customBlockContent_h5__AEuzM",
	"p": "customBlockContent_p__yV7As",
	"sup": "customBlockContent_sup__JRJ79",
	"blockquote": "customBlockContent_blockquote__SngJE"
};


/***/ }),

/***/ 6113:
/***/ ((module) => {

// Exports
module.exports = {
	"classic": "customLink_classic__d2Cst"
};


/***/ }),

/***/ 6096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ customBlockContent_CustomBlockContent)
});

// UNUSED EXPORTS: findAnchors, hnToStyle, normalStyle

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@sanity/block-content-to-react"
var block_content_to_react_ = __webpack_require__(4836);
var block_content_to_react_default = /*#__PURE__*/__webpack_require__.n(block_content_to_react_);
// EXTERNAL MODULE: ./src/components/customBlockContent/customBlockContent.module.scss
var customBlockContent_module = __webpack_require__(2388);
var customBlockContent_module_default = /*#__PURE__*/__webpack_require__.n(customBlockContent_module);
// EXTERNAL MODULE: ./src/utils/classnames.js
var classnames = __webpack_require__(6610);
// EXTERNAL MODULE: ./src/components/customLink/customLink.module.scss
var customLink_module = __webpack_require__(6113);
var customLink_module_default = /*#__PURE__*/__webpack_require__.n(customLink_module);
// EXTERNAL MODULE: ./src/components/button/Button.js + 3 modules
var Button = __webpack_require__(6873);
;// CONCATENATED MODULE: ./src/components/customLink/customLink.js




const CustomLink = ({ children =null , label =null , className =null , noStyle =true , ...rest })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
        noStyle: noStyle,
        className: (0,classnames.cn)((customLink_module_default()).classic, className),
        ...rest,
        children: children || label
    });
};
/* harmony default export */ const customLink = (CustomLink);

// EXTERNAL MODULE: ./src/components/image/Image.js
var Image = __webpack_require__(7283);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/utils/string.js
var string = __webpack_require__(3939);
;// CONCATENATED MODULE: ./src/components/customBlockContent/CustomBlockContent.js








const normalStyle = "pd-16 pm-16";
const hnToStyle = {
    h2: "hd-5-bold upper",
    h3: "hd-7"
};
const findAnchors = (blockContent, styles1 = [
    "h3",
    "h4"
])=>{
    return blockContent === null || blockContent === void 0 ? void 0 : blockContent.reduce((acc, block)=>{
        if (styles1.includes(block.style) && block.children[0].text.trim() !== "") {
            return [
                ...acc,
                {
                    _key: block._key,
                    level: block.style,
                    label: block.children[0].text,
                    slug: slugify(block.children[0].text)
                }
            ];
        }
        return acc;
    }, []);
};
const BlockRenderer = (options)=>(props)=>{
        const { style ="normal"  } = props.node;
        if (options.noDom) {
            return props.children;
        } else if (/^h\d/.test(style)) {
            // headings
            // const level = style.replace(/[^\d]/g, '')
            return /*#__PURE__*/ external_react_default().createElement(style, {
                id: (0,string/* slugify */.lV)(props.children),
                className: external_classnames_default()(hnToStyle[style], (customBlockContent_module_default())[style])
            }, props.children);
        } else if (style === "blockquote") {
            // blockquotes
            return /*#__PURE__*/ jsx_runtime_.jsx("blockquote", {
                className: external_classnames_default()((customBlockContent_module_default()).blockquote),
                children: props.children
            });
        } else if (style === "normal") {
            // paragraphs
            const cns = options.normalStyle === undefined ? external_classnames_default()(normalStyle, (customBlockContent_module_default()).p) : external_classnames_default()(options.normalStyle, (customBlockContent_module_default()).p);
            return /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: cns,
                children: props.children
            });
        } else {
            return /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: external_classnames_default()(style, (customBlockContent_module_default()).p),
                children: props.children
            });
        }
    // return BlockContent.defaultSerializers.types.block(props)
    }
;
const ImageAltRenderer = ({ node  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Image/* SanityImage */.d, {
        className: (customBlockContent_module_default()).image,
        image: node,
        alt: node.alt
    });
};
const List = ({ children , type , level  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: external_classnames_default()(normalStyle, (customBlockContent_module_default()).list, (customBlockContent_module_default())[`list-${type}`]),
        children: children
    });
};
const serializers = (options = {})=>{
    return {
        types: {
            block: BlockRenderer(options),
            imageAlt: ImageAltRenderer
        },
        list: List,
        marks: {
            sup: ({ mark , children  })=>{
                return /*#__PURE__*/ jsx_runtime_.jsx("sup", {
                    className: (customBlockContent_module_default()).sup,
                    children: children
                });
            },
            u: ({ mark , children  })=>{
                return /*#__PURE__*/ jsx_runtime_.jsx("u", {
                    children: children
                });
            },
            link: ({ mark , children  })=>{
                if (mark === null || mark === void 0 ? void 0 : mark.href) {
                    return /*#__PURE__*/ jsx_runtime_.jsx(customLink, {
                        className: external_classnames_default()(options === null || options === void 0 ? void 0 : options.linkStyle),
                        link: mark === null || mark === void 0 ? void 0 : mark.href,
                        children: children
                    });
                } else {
                    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: children
                    });
                }
            }
        }
    };
};
const CustomBlockContent = ({ blocks , className =null , style =null , options =null , as =null , noDom =false  }, ref)=>{
    if (!blocks) return null;
    const Tag = as || (Array.isArray(blocks) ? "div" : "p");
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: Array.isArray(blocks) ? /*#__PURE__*/ jsx_runtime_.jsx(Tag, {
            ref: ref,
            className: className,
            style: style,
            children: /*#__PURE__*/ jsx_runtime_.jsx((block_content_to_react_default()), {
                blocks: blocks,
                serializers: serializers({
                    ...options,
                    noDom
                })
            })
        }) : /*#__PURE__*/ jsx_runtime_.jsx(Tag, {
            ref: ref,
            style: style,
            className: external_classnames_default()(className, (options === null || options === void 0 ? void 0 : options.normalStyle) === false ? undefined : (options === null || options === void 0 ? void 0 : options.normalStyle) || normalStyle),
            children: blocks
        })
    });
};
/* harmony default export */ const customBlockContent_CustomBlockContent = (/*#__PURE__*/(0,external_react_.forwardRef)(CustomBlockContent));


/***/ })

};
;