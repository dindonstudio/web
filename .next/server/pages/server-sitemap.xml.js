"use strict";
(() => {
var exports = {};
exports.id = 7773;
exports.ids = [7773];
exports.modules = {

/***/ 7141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ server_sitemap_xml),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

;// CONCATENATED MODULE: external "next-sitemap"
const external_next_sitemap_namespaceObject = require("next-sitemap");
;// CONCATENATED MODULE: ./src/pages/server-sitemap.xml/index.js

// import {getPaths as getArticlePaths} from 'pages/article/[...slug]'
// import {getPaths as getNewsPaths} from 'pages/news/[...slug]'

// https://github.com/iamvishnusankar/next-sitemap#generating-dynamicserver-side-sitemaps
const getServerSideProps = async (ctx)=>{
// const [...slugs] = await Promise.all([getNewsPaths(), getArticlePaths()/*, getDocumentPaths('page') */])
// return getServerSideSitemap(ctx, slugs.flat(Infinity).map(({params}) => {
// 	const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug
// 	return {
// 		loc: `https://${process.env.NEXT_PUBLIC_DOMAIN}${rewritify('/' + slug)}`,
// 		lastmod: params.updatedAt,
// 	}
// }))
};
// Default export to prevent next.js errors
/* harmony default export */ const server_sitemap_xml = (()=>{});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7141));
module.exports = __webpack_exports__;

})();