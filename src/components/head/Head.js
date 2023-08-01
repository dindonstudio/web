import {imageBuilder} from 'lib/sanityImage'
import Head from 'next/head'
import {useRouter} from 'next/router'
import Script from 'next/script'

const HeadModule = ({title = '', description = '', url = null, image = null}) => {
	const router = useRouter()

	return (
		<>
			<Head>
				<meta charSet='utf-8' />

				{title && <title>{title}</title>}
				{description && <meta name='description' content={description} />}

				<link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
				<link rel='manifest' href='/icons/site.webmanifest' />
				<link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#5647f8' />
				<link rel='shortcut icon' href='/icons/favicon.ico' />
				<meta name='msapplication-TileColor' content='#ffffff' />
				<meta name='msapplication-config' content='/icons/browserconfig.xml' />
				<meta name='theme-color' content='#ffffff' />

				<meta name='viewport' content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no' />

				{router.locale && <meta property='og:locale' content={router.locale} />}
				<meta property='og:type' content='website' />
				{image && (
					<meta property='og:image' content={imageBuilder.image(image).size(1200, 630).url()} />
				)}
				{title && <meta property='og:title' content={title} />}
				{description && <meta property='og:description' content={description} />}
				{url && <meta property='og:url' content={url} />}

				{image && <meta name='twitter:card' content='summary_large_image' />}
				{title && <meta name='twitter:title' content={title} />}
				{description && <meta name='twitter:description' content={description} />}

				<link rel='preconnect' href='https://cdn.sanity.io' />
			</Head>
			<Script strategy='beforeInteractive' src='https://polyfill.io/v3/polyfill.min.js?features=AbortController%2CIntersectionObserver%2CResizeObserver%2CString.prototype.matchAll' />
		</>
	)
}

export default HeadModule
