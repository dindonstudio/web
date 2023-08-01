'use strict'

module.exports = [
	{
		urlPattern: './',
		handler: 'StaleWhileRevalidate',
		options: {
			cacheName: 'start-url',
			expiration: {
				maxEntries: 64,
				maxAgeSeconds: 24 * 60 * 60, // 24 hours
			},
		},
	},
	{
		urlPattern: /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
		handler: 'StaleWhileRevalidate',
		options: {
			cacheName: 'static-font-assets',
			expiration: {
				maxEntries: 4,
				maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
			},
		},
	},
	{
		urlPattern: /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
		handler: 'StaleWhileRevalidate',
		options: {
			cacheName: 'static-image-assets',
			expiration: {
				maxEntries: 64,
				maxAgeSeconds: 24 * 60 * 60, // 24 hours
			},
		},
	},
	{
		urlPattern: /^https:\/\/cdn\.sanity\.io\/.*/i,
		handler: 'StaleWhileRevalidate',
		options: {
			cacheName: 'static-image-sanity-assets',
			expiration: {
				maxEntries: 64,
				maxAgeSeconds: 24 * 60 * 60, // 24 hours
			},
		},
	},
	{
		urlPattern: /\.(?:js)$/i,
		handler: 'StaleWhileRevalidate',
		options: {
			cacheName: 'static-js-assets',
			expiration: {
				maxEntries: 16,
				maxAgeSeconds: 24 * 60 * 60, // 24 hours
			},
		},
	},
	{
		urlPattern: /\.(?:css)$/i,
		handler: 'StaleWhileRevalidate',
		options: {
			cacheName: 'static-style-assets',
			expiration: {
				maxEntries: 16,
				maxAgeSeconds: 24 * 60 * 60, // 24 hours
			},
		},
	},
	{
		urlPattern: /\.(?:json|xml|csv)$/i,
		handler: 'StaleWhileRevalidate',
		options: {
			cacheName: 'static-data-assets',
			expiration: {
				maxEntries: 16,
				maxAgeSeconds: 24 * 60 * 60, // 24 hours
			},
		},
	},
	{
		urlPattern: /^.*(?<!mp4|webm)$/i,
		handler: 'NetworkOnly',
		// options: {
		// 	cacheName: 'others',
		// 	expiration: {
		// 		maxEntries: 16,
		// 		maxAgeSeconds: 24 * 60 * 60 // 24 hours
		// 	}
		// }
	},
]
