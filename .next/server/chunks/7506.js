"use strict";
exports.id = 7506;
exports.ids = [7506];
exports.modules = {

/***/ 7506:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zustand_shallow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1561);
/* harmony import */ var stores_useSlicesStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2416);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand_shallow__WEBPACK_IMPORTED_MODULE_1__, stores_useSlicesStore__WEBPACK_IMPORTED_MODULE_2__]);
([zustand_shallow__WEBPACK_IMPORTED_MODULE_1__, stores_useSlicesStore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const useSlice = (ref)=>{
    const [addSlice, removeSlice] = (0,stores_useSlicesStore__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((state)=>[
            state.addSlice,
            state.removeSlice
        ]
    , zustand_shallow__WEBPACK_IMPORTED_MODULE_1__["default"]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const localRef = ref === null || ref === void 0 ? void 0 : ref.current;
        if (localRef) {
            addSlice(localRef);
            return ()=>{
                removeSlice(localRef);
            };
        }
    }, [
        ref,
        addSlice,
        removeSlice
    ]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSlice);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2416:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useSlicesStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__["default"])((set)=>({
        slices: [],
        addSlice: (ref)=>set((state)=>({
                    slices: state.slices.concat(ref)
                })
            )
        ,
        removeSlice: (ref)=>set((state)=>{
                const indexToRemove = state.slices.indexOf(ref);
                if (indexToRemove !== -1) {
                    const slices = state.slices.filter((slice, index)=>index !== indexToRemove
                    );
                    return {
                        slices
                    };
                }
                return {
                    slices: state.slices
                };
            })
    })
);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSlicesStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;