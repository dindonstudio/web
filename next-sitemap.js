module.exports = {
	siteUrl: `https://${process.env.NEXT_PUBLIC_DOMAIN}` || 'http://localhost:3000',
	generateRobotsTxt: true,
	exclude: ['/server-sitemap.xml'],
	robotsTxtOptions: {
		additionalSitemaps: [
			`https://${process.env.NEXT_PUBLIC_DOMAIN}/server-sitemap.xml`,
		],
	},
}
