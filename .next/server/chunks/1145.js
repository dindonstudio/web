exports.id = 1145;
exports.ids = [1145];
exports.modules = {

/***/ 739:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;
const languages = [
    {
        id: "en",
        title: "English",
        isDefault: true
    }, 
];
const defaultLanguage = languages.find((l)=>l.isDefault
);
const otherLanguages = languages.find((l)=>!l.isDefault
);
__webpack_unused_export__ = languages;
__webpack_unused_export__ = languages.map((l)=>l.id
);
exports.al = defaultLanguage.id;
__webpack_unused_export__ = defaultLanguage;
__webpack_unused_export__ = otherLanguages;


/***/ }),

/***/ 1145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "excludeDraft": () => (/* binding */ excludeDraft),
/* harmony export */   "get404": () => (/* binding */ get404),
/* harmony export */   "getBySlug": () => (/* binding */ getBySlug),
/* harmony export */   "getClient": () => (/* binding */ getClient),
/* harmony export */   "getDocumentById": () => (/* binding */ getDocumentById),
/* harmony export */   "getDocumentPaths": () => (/* binding */ getDocumentPaths),
/* harmony export */   "getPageById": () => (/* binding */ getPageById),
/* harmony export */   "getPageBySlug": () => (/* binding */ getPageBySlug),
/* harmony export */   "getPostsByType": () => (/* binding */ getPostsByType),
/* harmony export */   "getSettings": () => (/* binding */ getSettings),
/* harmony export */   "getSharedSlice": () => (/* binding */ getSharedSlice),
/* harmony export */   "largeTitleCta": () => (/* binding */ largeTitleCta),
/* harmony export */   "linkResolver": () => (/* binding */ linkResolver),
/* harmony export */   "orderDraft": () => (/* binding */ orderDraft),
/* harmony export */   "slugField": () => (/* binding */ slugField)
/* harmony export */ });
/* harmony import */ var _config_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(739);
/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(982);


const getClient = (preview = true)=>_sanity__WEBPACK_IMPORTED_MODULE_0__/* .client */ .Lp
;
// excluding draft is required if using an api key on non preview client
const excludeDraft = (preview = false)=>!preview ? "&& !(_id in path('drafts.**'))" : ""
;
const orderDraft = (preview = false)=>preview ? "|order(_updatedAt desc)" : ""
;
// -----------------------------------------------------o utils
// content = patchTree(content, (node, uid) => { // every objects passed as a node
//		return false // -> will be set to null
//		return null // (or undefined or no return) -> keeps going, unchanged
//		return {foo: 'bar'} // -> node will be replaced
// })
const patchTree = (node, contentReplacor, nodeKey)=>{
    if (Array.isArray(node)) {
        return node.map((n, i)=>patchTree(n, contentReplacor, `${nodeKey}[${i}]`)
        ).filter((item)=>!!item
        );
    } else if (node && typeof node === "object") {
        const patched = contentReplacor(node, contentReplacor, nodeKey);
        if (patched === false) return undefined;
        return patched || Object.keys(node).reduce((result, key)=>{
            result[key] = patchTree(node[key], contentReplacor, key);
            return result;
        }, {});
    }
    return node;
};
// -----------------------------------------------------o locales
// const locale = {current: 'en'}
// const locales = {current: ['en']}
// const defaultLocale = {current: 'en'}
// export const setLocale = (value, defaultValue, list) => {
// 	if (value) locale.current = value
// 	if (defaultValue) defaultLocale.current = defaultValue
// 	if (list) locales.current = list
// }
/**
 * Localize content
 * Fallbacks on default locale if content isn't translated
 * @param {*} value
 */ const localize = (value1, into)=>{
    const result = patchTree(value1, (value, cr, nodeKey)=>{
        if (nodeKey === "allSlugs") return value;
        if (/^locale[A-Z]/.test(value._type)) {
            return value[into] || value[_config_languages__WEBPACK_IMPORTED_MODULE_1__/* .defaultLocale */ .al] || false;
        }
    });
    return result;
};
// -----------------------------------------------------o fields
const slugField = (locale, path = "")=>/* groq */ `'slug': coalesce(${path}slug.${locale}.current, ${path}slug.${_config_languages__WEBPACK_IMPORTED_MODULE_1__/* .defaultLocale */ .al}.current)`
;
// const assetWithAltField = /* groq */`
// asset{
// 	_ref,
// 	_type,
// 	'altText': @->altText,
// }`
// const fileURLField = (field = 'urlOrFileWithLabel') => /* groq */`
// ${field} {
// 	...,
// 	'fileURL': file.asset->url
// }`
const internalLinkRefFields = (locale)=>/* groq */ `
${slugField(locale, "@.reference->")},
'label': coalesce(label.${locale}, label),
'docType': @.reference->_type
`
;
const linkResolver = (locale, field = "cta")=>/* groq */ `${field} {
	...,
	_type == 'internalLink' || _type == 'internalLinkWithLabel' || selectedTab == 'internalLink' => {
		${internalLinkRefFields(locale)},
	},
}`
;
// -----------------------------------------------------o settings
async function getSettings(locale, preview) {
    const results = await getClient(true).fetch(/* groq */ `{
		'settings': *[_id in path("settings.*") ${excludeDraft(preview)}] {
			...,
			_type == 'header' => {
				${linkResolver(locale, "links[]")},
				${linkResolver(locale, "secondayLinks[]")},
			},
			_type == 'footer' => {
				${linkResolver(locale, "links[]")},
				${linkResolver(locale, "secondayLinks[]")},
			},
		},
		'locales': *[_type == 'locale' ${excludeDraft(preview)}]{key, value},
	}`);
    return localize(results, locale);
}
// -----------------------------------------------------o documents
async function getDocumentById(id, preview) {
    const results = await getClient(preview).fetch(/* groq */ `*[_id == '${id}'${preview ? ` || _id == 'drafts.${id}'` : ""}]${orderDraft(preview)}[0]{
			_type,
			${slugField}
		}`);
    return results;
}
// export async function getDocumentDraft (id) {
// 	const results = await getClient(true)
// 		.fetch(`*[_id == '${id}' || _id == 'drafts.${id}']${orderDraft(true)}{_type, ${slugField}}`)
// 	return results
// }
async function getDocumentPaths(locales, types) {
    const _types = Array.isArray(types) ? types : [
        types
    ];
    const results = await getClient().fetch(/* groq */ `*[_type in [${_types.map((t)=>`'${t}'`
    ).join(",")}] && defined(slug) ${excludeDraft()}]{
			slug
		}`);
    return results;
}
// -----------------------------------------------------o pages
// const accordionSelectors = (locale) => /* groq */`
// items[] {
// 	...,
// 	${blockContentSelectors(locale, 'blocks')},
// }`
const blockContentSelectors = (locale, field = "blockContent")=>/* groq */ `
'${field}': ${field}.${locale}[] {
	...,
	_type == 'block' => {
		...,
		markDefs[] {
			...,
			_type == 'link' => {
				${linkResolver(locale, "href")}
			}
		}
	}
}`
;
const largeTitleCta = (locale, field = "largeTitleCta")=>/* groq */ `
${field} {
	...,
	${linkResolver(locale, "cta")}
}`
;
const pageFields = (locale)=>/* groq */ `
...,
${slugField(locale)},
${linkResolver(locale, "demoLink")},
${linkResolver(locale, "learnMoreLink")},
`
;
async function getPageById(id, locale, preview, fields = null) {
    const result = await getClient(preview).fetch(/* groq */ `*[_id == '${id}'${preview ? ` || _id == 'drafts.${id}'` : ""}]${orderDraft(preview)}[0]{
			${fields || pageFields(locale)}
		}`);
    return localize(result, locale);
}
async function getPostsByType(type, locale, preview, fields = "") {
    console.log("api.js", fields);
    const result = await getClient(preview).fetch(/* groq */ `*[_type == '${type}' ${excludeDraft()}]|order(title asc){
			...,
			${fields}
		}`);
    return localize(result, locale);
}
async function getBySlug(slug, locale, types = undefined, fields = "...", preview = false) {
    const _types = types && (Array.isArray(types) ? types : [
        types
    ]);
    const results = await getClient(preview).fetch(/* groq */ `*[${(_types === null || _types === void 0 ? void 0 : _types.length) ? `_type in [${_types.map((t)=>`'${t}'`
    ).join(",")}]` + " &&" : ""}(slug.current == '${slug}') ${excludeDraft(preview)}][0]{
			${fields}
		}`);
    return localize(results);
}
async function getPageBySlug(slug, locale, preview) {
    return getBySlug(slug, locale, [
        "legalPage"
    ], /* groq */ `
_type == 'legalPage' => {
	...,
	content {
		...,
		${blockContentSelectors(locale, "text")},
	},
	'menu': *[_id == 'legalsMenu' ${excludeDraft()}][0] {
		...,
		${linkResolver(locale, "links[]")},
	},
},
	`, preview);
}
async function get404(locale, preview) {
    const results = await getClient(preview).fetch(/* groq */ `*[_id == 'error-page-404' ${excludeDraft()}][0]{
			...,
		}`);
    return localize(results, locale);
}
// -----------------------------------------------------o slices
async function getSharedSlice(id, locale, preview) {
    const result = await getClient(true).fetch(/* groq */ `{
		'${id}': *[_id == "shared.${id}" ${excludeDraft(preview)}][0] {
			...,
			${linkResolver(locale, "link")},
		},
	}`);
    return localize(result, locale);
}


/***/ }),

/***/ 982:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

const sanityClient = __webpack_require__(1097);
const options = {
    projectId: "dlo3ry0w" || 0,
    dataset: "production" || 0,
    useCdn: false,
    apiVersion: "2021-10-04",
    token: process.env.SANITY_API_TOKEN
};
module.exports.Lp = sanityClient(options);
__webpack_unused_export__ = sanityClient({
    ...options,
    token: null,
    useCdn: true
});
__webpack_unused_export__ = `https://${"dlo3ry0w"}.apicdn.sanity.io/v2021-06-07/data/query/${"production"}?query=`;


/***/ })

};
;