import {getServerSideSitemap} from 'next-sitemap'
// import {getPaths as getArticlePaths} from 'pages/article/[...slug]'
// import {getPaths as getNewsPaths} from 'pages/news/[...slug]'
import rewritify from 'utils/rewritify'

// https://github.com/iamvishnusankar/next-sitemap#generating-dynamicserver-side-sitemaps
export const getServerSideProps = async (ctx) => {
	// const [...slugs] = await Promise.all([getNewsPaths(), getArticlePaths()/*, getDocumentPaths('page') */])

	// return getServerSideSitemap(ctx, slugs.flat(Infinity).map(({params}) => {
	// 	const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug
	// 	return {
	// 		loc: `https://${process.env.NEXT_PUBLIC_DOMAIN}${rewritify('/' + slug)}`,
	// 		lastmod: params.updatedAt,
	// 	}
	// }))
}

// Default export to prevent next.js errors
export default () => {}
