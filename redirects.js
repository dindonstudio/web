const {getRewriteRules} = require('./rewrites')

const redirects = async () => {
	const rewriteRules = await getRewriteRules()
	const redirects = rewriteRules.map(({destination, source}) =>
		destination !== source
			? ({source: destination, destination: source, permanent: true})
			: null,
	).filter(Boolean)
	return redirects
}

module.exports = redirects
