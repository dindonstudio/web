"use strict";
exports.id = 5542;
exports.ids = [5542];
exports.modules = {

/***/ 6999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ imageBuilder)
/* harmony export */ });
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1791);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_0__);

const imageBuilder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_0___default()({
    projectId: "dlo3ry0w",
    dataset: "production"
});


/***/ }),

/***/ 3939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lV": () => (/* binding */ slugify),
/* harmony export */   "pI": () => (/* binding */ resolvePlaceholders)
/* harmony export */ });
/* unused harmony export urlify */
const slugify = (str, separator = "-")=>{
    str = str.toString().normalize("NFD") // split an accented letter in the base letter and the accent
    .replace(/[\u0300-\u036f]/g, "") // remove all previously split accents
    .toLowerCase().trim().replace(/[^a-z0-9 ]/g, "") // remove all chars not letters, numbers and spaces (to be replaced)
    .replace(/^[0-9]+ ?/, "").replace(/\s+/g, separator);
    return str;
};
const urlify = (string)=>encodeURIComponent(string.replace(/\r\n|\r|\n|\t/gm, ""))
;
const resolvePlaceholders = (str, obj)=>{
    if (!str) return str;
    [
        ...str.matchAll(/{(.*?)}/g)
    ].forEach((match)=>{
        const value = obj[match[1]];
        // if (!value) console.warn('resolvePlaceholders:: ' + match[0] + ' used but object doesn\'t have var. Replacing with \'\'.', obj)
        if (Array.isArray(value)) str = value;
        else str = str.replace(new RegExp(match[0]), value || "");
    });
    return str;
} // export const formatThousands = (value, sep = ',') => value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, sep)
 // const formatMoneyOptionsUSD = {
 // 	currency: '$',
 // 	decimals: 0,
 // 	currencyAhead: true,
 // 	decimalsSep: '.',
 // 	thousandsSep: ',',
 // }
 // const formatMoneyOptionsEUR = {
 // 	currency: '€',
 // 	decimals: 0,
 // 	currencyAhead: false,
 // 	decimalsSep: ',',
 // 	thousandsSep: '.',
 // }
 // const formatMoneyDefaultOptions = formatMoneyOptionsUSD
 // export const formatMoney = (amount, options = {}) => {
 // 	const _options = {...formatMoneyDefaultOptions, ...options}
 // 	let str = formatThousands(amount.toFixed(0), _options.thousandsSep)
 // 	if (_options.decimals) {
 // 		str += _options.decimalsSep + amount.toFixed(_options.decimals).split('.')[1]
 // 	}
 // 	return _options.currencyAhead ? _options.currency + str : str + _options.currency
 // }
 // export const formatMoneyUSD = (amount, options = {}) => formatMoney(amount, {...formatMoneyOptionsUSD, ...options})
 // export const formatMoneyEUR = (amount, options = {}) => formatMoney(amount, {...formatMoneyOptionsEUR, ...options})
;


/***/ })

};
;