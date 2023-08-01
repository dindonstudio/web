import cn from 'classnames'
import styles from './portfolio.module.scss'
import {getPageById} from 'lib/api'
import {pageRevalidate} from 'utils/cache'
import {useEffect, useRef} from 'react'
import TimelineSection from 'components/timelineSection/TimelineSection'
import gsap from 'gsap'
import {colors} from '@config/variables'
import CircleBackground from 'components/circleBackground/CircleBackground'
import DealflowLogo from 'svgs/dealflow.svg'
import useMediaQuery from 'hooks/useMediaQuery'
import {DESKTOP, TABLET} from 'utils/mediaQueries'

import PortfolioIntro from 'components/portfolioIntro/PortfolioIntro'
import PortfolioGraphs from 'components/portfolioGraphs/PortfolioGraphs'
import LargeTitleCta from 'slices/largeTitleCta/LargeTitleCta'
import FeatureFooter from 'components/featureFooter/FeatureFooter'

const Portfolio = (props) => {
	const {content} = props

	const timeline = useRef(null)
	const introBackgroundRef = useRef(null)
	const graphsBackgroundRef = useRef(null)
	const graphsCircleRef = useRef(null)
	const dealflowLogoRef = useRef(null)
	const phoneRef = useRef(null)
	const device = useMediaQuery()

	useEffect(() => {
		if (device) {
			timeline.current = gsap.timeline({paused: true})
				.to({}, {duration: 1})

			if (device !== DESKTOP) {
				timeline.current
					.fromTo(phoneRef.current, {scale: 1.65, y: device === TABLET ? '22rem' : '15rem'}, {duration: 0.2, scale: 1, y: 0, ease: 'quad.inOut'}, 0.02)
			}

			timeline.current
				.fromTo(introBackgroundRef.current, {opacity: 1}, {duration: 0.25, opacity: 0}, 0.35)
				.fromTo(graphsBackgroundRef.current, {opacity: 0}, {duration: 0.25, opacity: 1}, 0.3)
				.fromTo(dealflowLogoRef.current, {opacity: 0}, {duration: 0.2, opacity: 1}, 0.4)
				.fromTo(graphsCircleRef.current, {opacity: 1}, {duration: 0.2, opacity: 0}, 0.55)

			timeline.current.duration(1)
		}
	}, [device])

	return (
		<div className={styles.portfolio}>
			<TimelineSection as='div' timeline={timeline} isTop>
				<div className='container'>
					<PortfolioIntro header={{title: content.title, excerpt: content.headerExcerpt, image: content.headerIllustration}} valuations={content.valuations} phoneRef={phoneRef} />

					{(content.perfs || content.updates) && (
						<PortfolioGraphs perfs={content.perfs} updates={content.updates} circleRef={graphsCircleRef} />
					)}
				</div>
			</TimelineSection>

			<CircleBackground
				ref={introBackgroundRef}
				className={styles.background}
				childClassName={cn('desktop-only', styles.circle)}
				colors={{bg: colors.pinkDark?.hex, circle: colors.pink?.hex}} />

			<CircleBackground
				ref={graphsBackgroundRef}
				className={styles.background}
				childClassName={styles.circle}
				colors={{bg: colors.pink?.hex}}
				noCircle />

			<div ref={dealflowLogoRef} className={cn('desktop-only', styles.dealflow)} aria-hidden>
				<DealflowLogo className={styles.dealflowLogo} />
			</div>

			{content.largeTitleCta && (
				<LargeTitleCta {...content.largeTitleCta} imageParams={{desktopWidth: 1100, mobileWidth: 325}} className={styles.largeTitleCta} imageClassName={styles.largeTitleCtaImage} />
			)}

			{content.footer && (
				<FeatureFooter {...content.footer} />
			)}
		</div>
	)
}

export async function getStaticProps ({params, locale, preview = false}) {
	const props = await getPageById('page.portfolio', locale, preview)

	return {
		props: {...props, preview},
		revalidate: pageRevalidate,
	}
}

export default Portfolio
