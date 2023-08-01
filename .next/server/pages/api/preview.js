(() => {
var exports = {};
exports.id = 4157;
exports.ids = [4157];
exports.modules = {

/***/ 1097:
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/client");

/***/ }),

/***/ 3867:
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

/***/ 2322:
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


/***/ }),

/***/ 1077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ preview)
});

// EXTERNAL MODULE: ./src/config/languages.js
var languages = __webpack_require__(3867);
// EXTERNAL MODULE: ./src/lib/sanity.js
var sanity = __webpack_require__(2322);
;// CONCATENATED MODULE: ./src/lib/api.js


const getClient = (preview = true)=>sanity/* client */.Lp
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
            return value[into] || value[defaultLocale] || false;
        }
    });
    return result;
};
// -----------------------------------------------------o fields
const slugField = (locale, path = "")=>/* groq */ `'slug': coalesce(${path}slug.${locale}.current, ${path}slug.${languages/* defaultLocale */.al}.current)`
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

;// CONCATENATED MODULE: ./src/pages/api/preview.js


async function preview(req, res) {
    // Check the secret and next parameters
    // This secret should only be known to this API route and the CMS
    if (req.query.secret !== process.env.SANITY_PREVIEW_SECRET) return res.status(401).json({
        message: "Invalid token"
    });
    if (!req.query.id) return res.status(401).json({
        message: "ID must be be set"
    });
    // Fetch the headless CMS to check if the provided `id` exists
    const page = await getDocumentById(req.query.id, true);
    // If the slug doesn't exist prevent preview mode from being enabled
    if (!page) {
        return res.status(401).json({
            message: "Invalid slug"
        });
    }
    // Enable Preview Mode by setting the cookies
    res.setPreviewData({});
    // Redirect to the path from the fetched page
    // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
    res.writeHead(307, {
        Location: resolveInternalLink(page).href
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
var __webpack_exports__ = (__webpack_exec__(1077));
module.exports = __webpack_exports__;

})();