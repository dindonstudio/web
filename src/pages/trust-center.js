import cn from 'classnames'
import styles from './trust-center.module.scss'
import {getPageById} from 'lib/api'
import {pageRevalidate} from 'utils/cache'
import {colors} from '@config/variables'

import SmoothScroll from 'components/smoothScroll/SmoothScroll'
import CustomBlockContent from 'components/customBlockContent/CustomBlockContent'
import {SanityImage} from 'components/image/Image'
import CircleBackground from 'components/circleBackground/CircleBackground'
import Parallax from 'components/parallax/Parallax'

import LargeTitleCta from 'slices/largeTitleCta/LargeTitleCta'
import {useRef} from 'react'
import useSlice from 'hooks/useSlice'

const TrustCenter = (props) => {
	const {content} = props

	const ref = useRef(null)
	useSlice(ref)

	return (
		<div className={styles.trustCenter}>
			<SmoothScroll as='section' childClassName={styles.header}>
				<div className={cn('container', styles.headerContainer)}>
					<h1 className={cn('hm-0 hd-0', styles.title)}>{content.title}</h1>
					<div className={styles.headerText}>
						{content.subtitle && (
							<CustomBlockContent
								className={styles.subtitle}
								options={{normalStyle: 'hm-2 hd-4'}}
								blocks={content.subtitle} />
						)}
						{content.description && (
							<p className={cn('pm-18', styles.description)}>
								{content.description}
							</p>
						)}
					</div>

					{content.image && (
						<Parallax z={-1.6}>
							<SanityImage image={content.image} mobileWidth={300} className={styles.illu} />
						</Parallax>
					)}
				</div>

				<CircleBackground className={styles.headerBackground} childClassName={styles.circle} colors={{bg: colors.greenDark?.hex, circle: colors.green?.hex}} />
			</SmoothScroll>

			{content.features?.length > 0 && (
				<SmoothScroll ref={ref} as='section' childClassName={styles.trustFeatures}>
					<div className={cn('container', styles.container)}>
						<ul className={styles.features}>
							{content.features.map(feature => (
								<li key={feature._key} className={styles.feature}>
									<div className={styles.featureTitleWrap}>
										<SanityImage image={feature.icon} desktopWidth={45} mobileWidth={45} className={styles.featureIcon} />
										<p className={cn('hm-2 hd-2', styles.featureTitle)}>{feature.title}</p>
									</div>
									<p className={cn('pm-18', styles.featureDescr)}>{feature.description}</p>
								</li>
							))}
						</ul>
					</div>
				</SmoothScroll>
			)}

			{content.largeTitleCta && (
				<LargeTitleCta {...content.largeTitleCta} imageParams={{desktopWidth: 1100, mobileWidth: 350}} className={styles.largeTitleCta} imageClassName={styles.largeTitleCtaImage} />
			)}
		</div>
	)
}

export async function getStaticProps ({params, locale, preview = false}) {
	const props = await getPageById('page.trustCenter', locale, preview)

	return {
		props: {...props, preview},
		revalidate: pageRevalidate,
	}
}

export default TrustCenter
