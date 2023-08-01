"use strict";
(() => {
var exports = {};
exports.id = 2211;
exports.ids = [2211];
exports.modules = {

/***/ 7597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ exit)
/* harmony export */ });
async function exit(_, res) {
    // Exit the current user from "Preview Mode". This function accepts no args.
    res.clearPreviewData();
    // Redirect the user back to the index page.
    res.writeHead(307, {
        Location: "/"
    });
    res.end();
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7597));
module.exports = __webpack_exports__;

})();