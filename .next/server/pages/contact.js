(() => {
var exports = {};
exports.id = 9335;
exports.ids = [9335];
exports.modules = {

/***/ 945:
/***/ ((module) => {

// Exports
module.exports = {
	"line": "contactForm_line__mf8_N",
	"input": "contactForm_input__KUYQY",
	"buttonWrapper": "contactForm_buttonWrapper__EnqGT",
	"buttonSubmit": "contactForm_buttonSubmit__HAltS",
	"message": "contactForm_message__GXkn2",
	"defaultLabel": "contactForm_defaultLabel__mdHSZ",
	"label": "contactForm_label__CybDs",
	"isSuccess": "contactForm_isSuccess__FsR0d",
	"success": "contactForm_success__wuzIv",
	"isError": "contactForm_isError__5HI2i",
	"error": "contactForm_error__IIJwG",
	"disclaimer": "contactForm_disclaimer__KS_9w"
};


/***/ }),

/***/ 2073:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "input_wrapper__NP9x7",
	"input": "input_input__JVjrL",
	"required": "input_required__0NfQx",
	"label": "input_label__qBRrc",
	"regular": "input_regular__JTDF4",
	"float": "input_float__3HPfx",
	"hasLabel": "input_hasLabel__JdRZU"
};


/***/ }),

/***/ 3005:
/***/ ((module) => {

// Exports
module.exports = {
	"label": "select_label__ttNQM",
	"select": "select_select__Itgo0",
	"wrapper": "select_wrapper__cnpM5",
	"value": "select_value__hYXPH"
};


/***/ }),

/***/ 6051:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "textarea_wrapper__9UTfH",
	"label": "textarea_label__sRANc",
	"textarea": "textarea_textarea__73Daw",
	"required": "textarea_required__IbVNm",
	"regular": "textarea_regular__HYCTt",
	"float": "textarea_float__WEEfT",
	"hasLabel": "textarea_hasLabel__wbG8U"
};


/***/ }),

/***/ 5707:
/***/ ((module) => {

// Exports
module.exports = {
	"contact": "contact_contact__PGtah",
	"container": "contact_container__6yBns",
	"header": "contact_header__Ne8LC",
	"headerDescr": "contact_headerDescr__XH1kc",
	"dealflowLogo": "contact_dealflowLogo__vBhE_",
	"formWrap": "contact_formWrap__GBXfS",
	"headerTitle": "contact_headerTitle__0Mw5V"
};


/***/ }),

/***/ 7222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ contactForm_ContactForm)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/contactForm/contactForm.module.scss
var contactForm_module = __webpack_require__(945);
var contactForm_module_default = /*#__PURE__*/__webpack_require__.n(contactForm_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/hooks/useLocale.js
var useLocale = __webpack_require__(1202);
// EXTERNAL MODULE: ./src/components/locale/Locale.js
var Locale = __webpack_require__(922);
// EXTERNAL MODULE: ./src/components/button/Button.js + 3 modules
var Button = __webpack_require__(6873);
// EXTERNAL MODULE: ./src/utils/classnames.js
var classnames = __webpack_require__(6610);
// EXTERNAL MODULE: ./src/components/input/input.module.scss
var input_module = __webpack_require__(2073);
var input_module_default = /*#__PURE__*/__webpack_require__.n(input_module);
;// CONCATENATED MODULE: ./src/components/input/Input.js



const InputVariant = {
    regular: "regular",
    float: "float"
};
const Input = ({ type , name , className =null , children =null , inputClassName =null , placeholder =null , label =null , required =false , variant =InputVariant.regular , inputRef =null , ...rest })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (0,classnames.cn)((input_module_default()).wrapper, className, (input_module_default())[variant], label && (input_module_default()).hasLabel),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                className: (0,classnames.cn)("pm-13", (input_module_default()).input, inputClassName),
                type: type,
                name: name,
                id: name,
                placeholder: placeholder,
                required: required,
                ref: inputRef,
                ...rest
            }),
            label && /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: name,
                className: (0,classnames.cn)("pm-13", (input_module_default()).label),
                children: label
            }),
            required && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (0,classnames.cn)("pm-10", (input_module_default()).required),
                children: "Required field*"
            }),
            children
        ]
    });
};
/* harmony default export */ const input_Input = (Input);

// EXTERNAL MODULE: ./src/components/textarea/textarea.module.scss
var textarea_module = __webpack_require__(6051);
var textarea_module_default = /*#__PURE__*/__webpack_require__.n(textarea_module);
;// CONCATENATED MODULE: ./src/components/textarea/Textarea.js




const TextareaVariant = {
    regular: "regular",
    float: "float"
};
const Textarea = ({ name , placeholder =null , maxLength =null , className =null , textareaClassName =null , onChange =null , label =null , variant =TextareaVariant.regular , required =false  }, ref)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()((textarea_module_default()).wrapper, className, (textarea_module_default())[variant], label && (textarea_module_default()).hasLabel),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                ref: ref,
                name: name,
                className: external_classnames_default()("pm-13", (textarea_module_default()).textarea, textareaClassName),
                maxLength: maxLength,
                placeholder: placeholder,
                required: required,
                onChange: onChange
            }),
            label && /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: name,
                className: external_classnames_default()("pm-13", (textarea_module_default()).label),
                children: label
            }),
            required && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: external_classnames_default()("pm-10", (textarea_module_default()).required),
                children: "Required field*"
            })
        ]
    });
};
/* harmony default export */ const textarea_Textarea = (/*#__PURE__*/(0,external_react_.forwardRef)(Textarea));

;// CONCATENATED MODULE: ./src/svgs/arrow.svg
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgArrow = function SvgArrow(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: "0.8rem",
    height: "1rem",
    viewBox: "0 0 8 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M.945 8.825 4.77 5 .945 1.175 2.13 0l5 5-5 5L.945 8.825Z",
    fill: "currentColor"
  })));
};

/* harmony default export */ const arrow = (SvgArrow);
// EXTERNAL MODULE: ./src/components/select/select.module.scss
var select_module = __webpack_require__(3005);
var select_module_default = /*#__PURE__*/__webpack_require__.n(select_module);
;// CONCATENATED MODULE: ./src/components/select/Select.js





const SelectVariants = {
    small: "small",
    medium: "medium",
    large: "large"
};
const Select = ({ name , options , placeholder =null , required =false , className =null , label =null , onChange =null , defaultValue =null , variant =SelectVariants.medium ,  }, ref)=>{
    const selectRef = (0,external_react_.useRef)(null);
    const valueRef = (0,external_react_.useRef)(null);
    const { 0: selected , 1: setSelected  } = (0,external_react_.useState)(null);
    const { 0: title , 1: setTitle  } = (0,external_react_.useState)(placeholder || options[0].name);
    (0,external_react_.useEffect)(()=>{
        if (selected) {
            setTitle(selectRef.current.options[selectRef.current.options.selectedIndex].textContent);
        }
    }, [
        selected,
        onChange
    ]);
    (0,external_react_.useEffect)(()=>{
        if (selectRef.current.form) selectRef.current.form.addEventListener("reset", handleResetForm);
        return ()=>{
            if (selectRef.current && selectRef.current.form) selectRef.current.form.removeEventListener("reset", handleResetForm);
        };
    }, []);
    const handleResetForm = ()=>{
        valueRef.current.textContent = selectRef.current.options[0].textContent;
        setSelected(null);
    };
    const handleChange = (e)=>{
        setSelected(selectRef.current.value);
        if (onChange) {
            onChange(e);
        // onChange(selectRef.current.options.selectedIndex)
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()("pm-13", (select_module_default()).select, selected && (select_module_default()).isSelected, (select_module_default())[variant], className, label && (select_module_default()).hasLabel),
        ref: ref,
        children: [
            label && /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: name,
                className: external_classnames_default()("pm-13", (select_module_default()).label),
                children: label
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (select_module_default()).wrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                        ref: selectRef,
                        name: name,
                        required: required,
                        onChange: handleChange,
                        "aria-label": label || placeholder,
                        defaultValue: defaultValue,
                        children: [
                            placeholder && /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                disabled: true,
                                value: "none",
                                children: placeholder
                            }),
                            options && options.map((e, i)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: e.value,
                                    disabled: e.disabled,
                                    selected: e.selected,
                                    children: e.name
                                }, i)
                            )
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: (select_module_default()).value,
                        ref: valueRef,
                        children: [
                            title,
                            /*#__PURE__*/ jsx_runtime_.jsx(arrow, {})
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const select_Select = (/*#__PURE__*/(0,external_react_.forwardRef)(Select));

// EXTERNAL MODULE: ./src/utils/string.js
var string = __webpack_require__(3939);
// EXTERNAL MODULE: ./src/svgs/arrowCta.svg
var arrowCta = __webpack_require__(9097);
// EXTERNAL MODULE: external "next/script"
var script_ = __webpack_require__(4780);
var script_default = /*#__PURE__*/__webpack_require__.n(script_);
;// CONCATENATED MODULE: ./src/components/contactForm/ContactForm.js













const ContactForm = ({ topics  })=>{
    const controller = (0,external_react_.useRef)(null);
    const locale = (0,useLocale/* default */.Z)();
    const formRef = (0,external_react_.useRef)();
    const { 0: isProcessing , 1: setIsProcessing  } = (0,external_react_.useState)(false);
    const { 0: isSuccess , 1: setIsSuccess  } = (0,external_react_.useState)(false);
    const { 0: isError , 1: setIsError  } = (0,external_react_.useState)(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (window.grecaptcha) {
            setIsProcessing(true);
            setIsSuccess(false);
            setIsError(false);
            const form = e.currentTarget;
            const formData = new FormData(form);
            window.grecaptcha.ready(()=>{
                window.grecaptcha.execute("6LfvxpYeAAAAADe7haWIID9okkFq5gJ_2zXrgo1S", {
                    action: "send"
                }).then(async (token)=>{
                    if (controller.current) {
                        controller.current.abort();
                    }
                    controller.current = new AbortController();
                    const data = {
                        recaptcha: token
                    };
                    Array.from(formData.entries()).forEach((entry)=>{
                        data[entry[0]] = entry[1];
                    });
                    fetch(form.action, {
                        signal: controller.current.signal,
                        method: form.method,
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    }).then((response)=>{
                        if (response.status === 200) {
                            form.reset();
                            setIsSuccess(true);
                        } else {
                            setIsError(true);
                        }
                        return response.json();
                    }).then((data)=>{
                    // console.log('ContactForm.js --', data)
                    }).finally(()=>{
                        setIsProcessing(false);
                        controller.current = null;
                        setTimeout(()=>{
                            setIsError(false);
                            setIsSuccess(false);
                        }, 2000);
                    });
                });
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (contactForm_module_default()).contactForm,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: `https://www.google.com/recaptcha/api.js?render=${"6LfvxpYeAAAAADe7haWIID9okkFq5gJ_2zXrgo1S"}`,
                strategy: "lazyOnload"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                className: (contactForm_module_default()).form,
                ref: formRef,
                action: "/api/send",
                method: "POST",
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(input_Input, {
                        className: (contactForm_module_default()).input,
                        type: "email",
                        name: "email",
                        variant: InputVariant.float,
                        placeholder: locale("Enter your work email"),
                        label: locale("Enter your work email"),
                        required: true
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (contactForm_module_default()).line,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(input_Input, {
                                className: (contactForm_module_default()).input,
                                type: "text",
                                name: "firstname",
                                variant: InputVariant.float,
                                placeholder: locale("Enter your first name"),
                                label: locale("Enter your first name"),
                                required: true
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(input_Input, {
                                className: (contactForm_module_default()).input,
                                type: "text",
                                name: "lastname",
                                variant: InputVariant.float,
                                placeholder: locale("Enter your last name"),
                                label: locale("Enter your last name"),
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (contactForm_module_default()).line,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(input_Input, {
                                className: (contactForm_module_default()).input,
                                type: "tel",
                                name: "tel",
                                variant: InputVariant.float,
                                placeholder: locale("Enter your phone number"),
                                label: locale("Enter your phone number"),
                                required: true
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(select_Select, {
                                name: "topic",
                                className: (contactForm_module_default()).input,
                                options: topics.map((topic)=>{
                                    return {
                                        name: topic,
                                        value: (0,string/* slugify */.lV)(topic)
                                    };
                                }),
                                placeholder: locale("What can we help you with?"),
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(textarea_Textarea, {
                        className: (contactForm_module_default()).textarea,
                        name: "message",
                        variant: TextareaVariant.float,
                        placeholder: locale("Enter your message"),
                        label: locale("Enter your message"),
                        required: true
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (contactForm_module_default()).buttonWrapper,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                className: external_classnames_default()((contactForm_module_default()).buttonSubmit, isSuccess && (contactForm_module_default()).isSuccess, isError && (contactForm_module_default()).isError),
                                variant: Button/* ButtonVariant.rounded */.W.rounded,
                                type: "submit",
                                inverted: true,
                                disabled: isProcessing,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: (contactForm_module_default()).defaultLabel,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(arrowCta/* default */.Z, {
                                                "aria-hidden": true
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Locale/* default */.Z, {
                                                children: "Submit"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: external_classnames_default()((contactForm_module_default()).message, (contactForm_module_default()).label),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(arrowCta/* default */.Z, {
                                                "aria-hidden": true
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Locale/* default */.Z, {
                                                children: "Submit"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: external_classnames_default()((contactForm_module_default()).message, (contactForm_module_default()).error),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Locale/* default */.Z, {
                                            children: "An error occured"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: external_classnames_default()((contactForm_module_default()).message, (contactForm_module_default()).success),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Locale/* default */.Z, {
                                            children: "Message sent"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: external_classnames_default()("pm-10", (contactForm_module_default()).disclaimer),
                                children: [
                                    "This site is protected by reCAPTCHA and the Google ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://policies.google.com/privacy",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "Privacy Policy"
                                    }),
                                    " and ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://policies.google.com/terms",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "Terms of Service"
                                    }),
                                    " apply."
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const contactForm_ContactForm = (ContactForm);


/***/ }),

/***/ 9192:
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contact_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5707);
/* harmony import */ var _contact_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_contact_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lib_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1145);
/* harmony import */ var utils_cache__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4223);
/* harmony import */ var components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8414);
/* harmony import */ var _svgs_dealflow_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(391);
/* harmony import */ var components_contactForm_ContactForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7222);
/* harmony import */ var slices_largeTitleCta_LargeTitleCta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1648);
/* harmony import */ var hooks_useSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7506);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useSlice__WEBPACK_IMPORTED_MODULE_3__, components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_5__, slices_largeTitleCta_LargeTitleCta__WEBPACK_IMPORTED_MODULE_8__]);
([hooks_useSlice__WEBPACK_IMPORTED_MODULE_3__, components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_5__, slices_largeTitleCta_LargeTitleCta__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Contact = (props)=>{
    const { content  } = props;
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    (0,hooks_useSlice__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(ref);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_contact_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contact),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_smoothScroll_SmoothScroll__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
                ref: ref,
                as: "section",
                childClassName: (_contact_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("container", (_contact_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container)),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                            className: (_contact_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("hm-2 hd-2", (_contact_module_scss__WEBPACK_IMPORTED_MODULE_4___default().headerTitle)),
                                    children: content.title
                                }),
                                content.description && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("pm-18", (_contact_module_scss__WEBPACK_IMPORTED_MODULE_4___default().headerDescr)),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svgs_dealflow_svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("desktop-only", (_contact_module_scss__WEBPACK_IMPORTED_MODULE_4___default().dealflowLogo)),
                                            "aria-hidden": true
                                        }),
                                        content.description
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_contact_module_scss__WEBPACK_IMPORTED_MODULE_4___default().formWrap),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_contactForm_ContactForm__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                topics: content.topics
                            })
                        })
                    ]
                })
            }),
            content.largeTitleCta && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(slices_largeTitleCta_LargeTitleCta__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                ...content.largeTitleCta,
                imageParams: {
                    desktopWidth: 1100,
                    mobileWidth: 325
                },
                className: (_contact_module_scss__WEBPACK_IMPORTED_MODULE_4___default().largeTitleCta),
                imageClassName: (_contact_module_scss__WEBPACK_IMPORTED_MODULE_4___default().largeTitleCtaImage)
            })
        ]
    });
};
async function getStaticProps({ params , locale , preview =false  }) {
    const props = await (0,lib_api__WEBPACK_IMPORTED_MODULE_9__.getPageById)("page.contact", locale, preview);
    return {
        props: {
            ...props,
            preview
        },
        revalidate: utils_cache__WEBPACK_IMPORTED_MODULE_10__/* .pageRevalidate */ .T
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 4780:
/***/ ((module) => {

"use strict";
module.exports = require("next/script");

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
var __webpack_exports__ = __webpack_require__.X(0, [4686,1397,9505,1664,5675,1145,8414,6873,7506,5542,6935,189,9214,1648,212], () => (__webpack_exec__(9192)));
module.exports = __webpack_exports__;

})();