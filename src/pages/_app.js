import App from 'next/app'
import LocaleContextProvider from 'contexts/LocaleContextProvider'
import Layout from 'layouts/Layout'
import Script from 'next/script'

import 'styles/general/reset.scss'
import 'styles/general/grid.scss'
import 'styles/general/fonts.scss'
import 'styles/general/base.scss'
import 'styles/general/media.scss'
import 'styles/general/text.scss'
import 'styles/general/links.scss'
import 'styles/general/recaptcha.scss'
import 'styles/general/keen.scss'

function MyApp ({Component, pageProps, appProps, router}) {
	return (
		<>
			<Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-HC1R29HG2Z"/>
			<Script id='google-analytics' strategy="afterInteractive">
			{`
				__html: 
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', 'G-HC1R29HG2Z');
			`}
			</Script>
			<LocaleContextProvider strings={appProps.locales}>
				<Layout appProps={appProps} pageProps={pageProps}>
					<Component {...pageProps} path={router.asPath} />
				</Layout>
			</LocaleContextProvider>

			<Script type="text/javascript">
				{`
					_linkedin_partner_id = "4796834";
					window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
					window._linkedin_data_partner_ids.push(_linkedin_partner_id);
				`}
			</Script>
			<Script type="text/javascript">
				{`
					(function(l) { if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
					window.lintrk.q=[]} var s = document.getElementsByTagName("script")[0]; var b = document.createElement("script");
					b.type = "text/javascript";b.async = true;
					b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
					s.parentNode.insertBefore(b, s);})(window.lintrk);
				`}
			</Script>
			<noscript><img height="1" width="1" style={{display:'none'}} alt="" src="https://px.ads.linkedin.com/collect/?pid=4796834&fmt=gif" /></noscript>
		</>
	)
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
MyApp.getInitialProps = async (appContext) => {
	if (typeof window === 'undefined') {
		const initialProps = await App.getInitialProps(appContext)
		const appProps = {}

		await import('lib/api').then(async ({getSettings}) => {
			const {router, ctx} = appContext
			appProps.statusCode = ctx.res.statusCode
			try {
				const {settings, locales, indexedFields} = await getSettings(router.locale, router.isPreview)
				appProps.locales = locales
				appProps.indexedFields = indexedFields
				appProps.settings = {}
				settings?.forEach(element => { appProps.settings[element._type] = element })
			} catch (error) {
				console.error(error)
			}
		})
		return {...initialProps, appProps}
	}
}

export default MyApp
