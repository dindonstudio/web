import styles from './integration.module.scss'
import {getPageById, getPostsByType} from 'lib/api'
import {pageRevalidate} from 'utils/cache'
import {useRef} from 'react'
import {colors} from '@config/variables'
import FeatureFooter from 'components/featureFooter/FeatureFooter'
import FeatureIntro from 'components/featureIntro/FeatureIntro'
import LargeTitleCta from 'slices/largeTitleCta/LargeTitleCta'
import useSlice from 'hooks/useSlice'
import IntegrationsList from 'components/integrationsList/IntegrationsList'
import SmoothScroll from 'components/smoothScroll/SmoothScroll'

const Integration = (props) => {
	const {content, integrations} = props
	const ref = useRef(null)
	useSlice(ref)

	return (
		<div className={styles.dealflow}>
			<div ref={ref}>
				<SmoothScroll className='container' preventDisable>
					<FeatureIntro
						colors={{text: colors.greenDark.hex, circle: colors.yellow.hex}}
						title={content.title}
						className={styles.intro}
						excerpt={content.headerExcerpt}
						image={content.headerIllustration}
						backgroundOverflowVisible />
				</SmoothScroll>

				<IntegrationsList entries={integrations} />
			</div>

			{content.largeTitleCta && (
				<LargeTitleCta {...content.largeTitleCta} imageParams={{desktopWidth: 1100, mobileWidth: 325}} className={styles.largeTitleCta} imageClassName={styles.largeTitleCtaImage} />
			)}

			{content.footer && (
				<FeatureFooter {...content.footer} backgroundColors={{bg: colors.purpleDark?.hex, circle: colors.pinkPurple?.hex}} className={styles.footer} />
			)}
		</div>
	)
}

export async function getStaticProps ({params, locale, preview = false}) {
	const props = await getPageById('page.integrations', locale, preview)
	const integrations = await getPostsByType('integrationPost', locale, preview, `
		'category': category->{
			...
		}
	`)

	return {
		props: {...props, integrations, preview},
		revalidate: pageRevalidate,
	}
}

export default Integration
