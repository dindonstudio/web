import cn from 'classnames'
import styles from './thank-you.module.scss'
import {getPageById} from 'lib/api'
import {pageRevalidate} from 'utils/cache'

import SmoothScroll from 'components/smoothScroll/SmoothScroll'
import DealflowLogo from '../svgs/dealflow.svg'
import useSlice from 'hooks/useSlice'
import {useRef} from 'react'
import CustomBlockContent from 'components/customBlockContent/CustomBlockContent'
import Script from 'next/script'

const ThankYou = (props) => {
	const {content} = props

	const ref = useRef(null)
	useSlice(ref)	
	
	return (
			<div className={styles.thankYou}>
				<SmoothScroll ref={ref} as='section' childClassName={styles.content}>
					<div className={cn('container', styles.container)}>
						<header className={styles.header}>
							{content.content.text && (
								<span className={cn('pm-18', styles.headerDescr)}>
									<DealflowLogo className={styles.dealflowLogo} aria-hidden />
									<CustomBlockContent className={cn('pm-18', styles.headerDescr)} blocks={content.content.text} />
								</span>
							)}
						</header>
					</div>
				</SmoothScroll>

				{/* Google tag (gtag.js) */}
				<Script async src='https://www.googletagmanager.com/gtag/js?id=AW-867236080' />
				<Script>
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'AW-867236080');
						`}
				</Script>
				<Script>
					{`
						gtag('event', 'conversion', {'send_to': 'AW-867236080/8_mmCL-6kckBEPDxw50D'});
					`}
				</Script>
		</div>
	)

}

export async function getStaticProps ({params, locale, preview = false}) {
	const props = await getPageById('page.thankYou', locale, preview)

	return {
		props: {...props, preview},
		revalidate: pageRevalidate,
	}
}

export default ThankYou
