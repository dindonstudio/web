import cn from 'classnames'
import styles from './contact.module.scss'
import {getPageById} from 'lib/api'
import {pageRevalidate} from 'utils/cache'

import SmoothScroll from 'components/smoothScroll/SmoothScroll'
import DealflowLogo from '../svgs/dealflow.svg'
import ContactForm from 'components/contactForm/ContactForm'
import LargeTitleCta from 'slices/largeTitleCta/LargeTitleCta'
import useSlice from 'hooks/useSlice'
import {useRef} from 'react'

const Contact = (props) => {
	const {content} = props

	const ref = useRef(null)
	useSlice(ref)

	return (
		<div className={styles.contact}>
			<SmoothScroll ref={ref} as='section' childClassName={styles.content}>
				<div className={cn('container', styles.container)}>
					<header className={styles.header}>
						<h1 className={cn('hm-2 hd-2', styles.headerTitle)}>{content.title}</h1>

						{content.description && (
							<p className={cn('pm-18', styles.headerDescr)}>
								<DealflowLogo className={cn('desktop-only', styles.dealflowLogo)} aria-hidden />
								{content.description}
							</p>
						)}
					</header>

					<div className={styles.formWrap}>
						<ContactForm topics={content.topics} />
					</div>

				</div>
			</SmoothScroll>

			{content.largeTitleCta && (
				<LargeTitleCta {...content.largeTitleCta} imageParams={{desktopWidth: 1100, mobileWidth: 325}} className={styles.largeTitleCta} imageClassName={styles.largeTitleCtaImage} />
			)}
		</div>
	)
}

export async function getStaticProps ({params, locale, preview = false}) {
	const props = await getPageById('page.contact', locale, preview)

	return {
		props: {...props, preview},
		revalidate: pageRevalidate,
	}
}

export default Contact
