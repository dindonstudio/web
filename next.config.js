const fs = require('fs')
// const path = require('path')
const {locales, defaultLocale} = require('../config/languages')
const {rewrites} = require('./rewrites')
const redirects = require('./redirects')
const withMinifyClassNames = require('@numbered/next-minify-classnames')

const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})
// const withPWA = require('next-pwa')

module.exports = withPlugins(
	[
		[withBundleAnalyzer],
		[withMinifyClassNames],
		// [withPWA],
	],
	{
		minifyClassNames: {
			enable: false,
			dictionary: 'bcdefgijklmnoqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
		},
		reactStrictMode: true,
		swcMinify: true,
		pwa: {
			disable: process.env.NODE_ENV !== 'production' || process.env.ANALYZE === 'true',
			dest: 'public',
			runtimeCaching: require('./pwa.config'),
		},
		experimental: {
			concurrentFeatures: true,
			optimizeCss: {
				// minimumExternalSize: 45000,
				reduceInlineStyles: true,
				pruneSource: true,
				fonts: true,
				logLevel: 'warn',
			},
		},
		i18n: {
			locales,
			defaultLocale,
			localeDetection: false,
		},
		sassOptions: {
			prependData: `
				@use "sass:math";
				$debug: ${process.env.NODE_ENV !== 'production'};
				@import 'styles/global.scss';
			`,
		},
		images: {
			deviceSizes: [640, 960, 1200, 1920],
			imageSizes: [48, 96, 160, 320],
			domains: ['cdn.sanity.io'],
			loader: 'default',
		},
		eslint: {
			// Warning: Dangerously allow production builds to successfully complete even if
			// your project has ESLint errors.
			ignoreDuringBuilds: true,
		},
		webpack: (config, {webpack}) => {
			config.module.rules.push({
				test: /\.svg$/,
				use: [
					{
						loader: '@svgr/webpack',
						options: {
							svgoConfig: {
								plugins: [
									{
										name: 'preset-default',
										params: {
											overrides: {removeViewBox: false},
										},
									},
								],
							},
						},
					},
				],
			})

			if (process.env.NODE_ENV !== 'production') {
			// conditional compilation
				config.plugins.push(new webpack.NormalModuleReplacementPlugin(/^((?!node_modules).)*.js$/, (resource) => {
					const createData = resource.createData
					if (createData.resourceResolveData && createData.resourceResolveData.context) {
						const replaceExtension = (s, t, r) => {
							const p = s.lastIndexOf('.' + t)
							if (p === -1) { return s + '.' + r } else { return s.substr(0, p) + '.' + r }
						}

						// check for dev file
						const altPath = replaceExtension(createData.resourceResolveData.path, 'js', 'dev.js')

						if (fs.existsSync(altPath) && altPath !== createData.resourceResolveData.context.issuer) {
							resource.createData.resource = replaceExtension(createData.resource, 'js', 'dev.js')
							resource.createData.request = replaceExtension(createData.request, 'js', 'dev.js')
						}
					}
				}))
			} else {
				// replace react by preact
				// config.resolve.alias = {
				// 	...config.resolve.alias,
				// 	react: 'preact/compat',
				// 	'react-dom': 'preact/compat',
				// 	'react-render-to-string': 'preact-render-to-string',
				// 	'react-ssr-prepass': 'preact-ssr-prepass',
				// }

				// classname minification
				// const index = config.module.rules.findIndex(rule => rule.oneOf)
				// config.module.rules[index].oneOf.forEach(moduleLoader => {
				// 	if (Array.isArray(moduleLoader.use)) {
				// 		moduleLoader.use.forEach(loader => {
				// 			if (loader.loader?.includes('css-loader') && !loader.loader?.includes('postcss-loader')) {
				// 				loader.options.modules.getLocalIdent = getLocalIdent
				// 			}
				// 		})
				// 	}
				// })
			}

			return config
		},
		async headers () {
			return [
				{
					source: '/(.*).jpg',
					headers: [
						{
							key: 'Cache-Control',
							value: 'public, max-age=31556952, s-maxage=31556952, stale-while-revalidate=31556952',
						},
					],
				},
				{
					source: '/(.*).png',
					headers: [
						{
							key: 'Cache-Control',
							value: 'public, max-age=31556952, s-maxage=31556952, stale-while-revalidate=31556952',
						},
					],
				},
			]
		},
		rewrites,
		redirects,
	})

// const names = {}
// let index = 0

// const getKey = ({rootContext, resourcePath}, name) => `${path.relative(rootContext, resourcePath).replace(/\\+/g, '/')}#${name}`

// const getName = key =>
// 	Object.prototype.hasOwnProperty.call(names, key)
// 		? names[key]
// 		: (names[key] = generateName(index++))

// const getLocalIdent = (path, _, name) => {
// 	const key = getKey(path, name)
// 	const result = getName(key)
// 	// console.log('Log: -> getLocalIdent ->', {key, result})
// 	return result
// }
