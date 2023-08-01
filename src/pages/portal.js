import styles from './portal.module.scss'
import {getPageById} from 'lib/api'
import {pageRevalidate} from 'utils/cache'
import {useEffect, useRef} from 'react'
import TimelineSection from 'components/timelineSection/TimelineSection'
import gsap from 'gsap'
import {colors} from '@config/variables'
import LargeTitleCta from 'slices/largeTitleCta/LargeTitleCta'
import FeatureFooter from 'components/featureFooter/FeatureFooter'
import FeatureDiptych from 'components/featureDiptych/FeatureDiptych'
import FeatureIntro from 'components/featureIntro/FeatureIntro'
import DealflowLogo from 'svgs/dealflow.svg'
import SharePicto1 from 'svgs/share-picto1.svg'
import SharePicto2 from 'svgs/share-picto2.svg'
import {cn} from 'utils/classnames'
import PortalRaise from 'components/portalRaise/PortalRaise'
import {SanityImage} from 'components/image/Image'
import Parallax from 'components/parallax/Parallax'
import {DESKTOP} from 'utils/mediaQueries'
import useSlice from 'hooks/useSlice'

const Portal = ({content}) => {
	const timeline = useRef(null)
	const dealflowLogoRef = useRef(null)
	const ref = useRef(null)

	useSlice(ref)

	useEffect(() => {
		timeline.current = gsap.timeline({paused: true})
			.to({}, {duration: 1})
			.fromTo(dealflowLogoRef.current, {opacity: 0, y: '20%'}, {duration: 1, opacity: 1, y: '-30%'}, 0)
		timeline.current.duration(1)
	}, [])

	return (
		<div className={styles.dealflow}>
			<TimelineSection as='div' timeline={timeline} className={styles.main} isTop ref={ref}>
				<div className='container'>
					<FeatureIntro colors={{text: colors.greenDark.hex, circle: colors.pinkPurple.hex}} title={content.title} excerpt={content.headerExcerpt} image={content.headerIllustration} />
					<FeatureDiptych {...content.perfs} halign='center' backgroundColor={null}>
						{content.perfs.image1 && (
							<Parallax z={-2} childClassName={styles.perfImage1} mediaQueries={[DESKTOP]}>
								<SanityImage image={content.perfs.image1} desktopWidth={580} mobileWidth={320} className={styles.perfImage} />
							</Parallax>
						)}
						{content.perfs.image2 && (
							<Parallax z={-2} childClassName={styles.perfImage2} mediaQueries={[DESKTOP]}>
								<SanityImage desktopOnly image={content.perfs.image2} desktopWidth={580} mobileWidth={320} className={styles.perfImage} />
							</Parallax>
						)}
					</FeatureDiptych>
					<FeatureDiptych {...content.share} backgroundColor={null} valign='center'>
						<div className={styles.shareLogos}>
							<div className={styles.shareLogo} aria-hidden>
								<DealflowLogo className={styles.logo} />
							</div>
							<Parallax z={0.6} childClassName={cn(styles.sharePicto, styles.sharePicto1)}>
								<SharePicto1 />
							</Parallax>
							<Parallax z={0.5} childClassName={cn(styles.sharePicto, styles.sharePicto2)}>
								<SharePicto2 />
							</Parallax>
							<Parallax z={0.2} childClassName={cn(styles.sharePicto, styles.sharePicto3)}>
								<SharePicto1 />
							</Parallax>
							<Parallax z={0.2} childClassName={cn(styles.sharePicto, styles.sharePicto4)}>
								<SharePicto1 />
							</Parallax>
						</div>
					</FeatureDiptych>
					<PortalRaise {...content.raise} />
				</div>
			</TimelineSection>

			{content.largeTitleCta && (
				<LargeTitleCta {...content.largeTitleCta} imageParams={{desktopWidth: 1100, mobileWidth: 325}} className={styles.largeTitleCta} imageClassName={styles.largeTitleCtaImage} />
			)}

			{content.footer && (
				<FeatureFooter {...content.footer} backgroundColors={{bg: colors.purpleDark?.hex, circle: colors.pinkPurple?.hex}} className={styles.footer} />
			)}

			<div ref={dealflowLogoRef} className={cn('desktop-only no-touch-only', styles.dealflowLogo)} aria-hidden>
				<DealflowLogo />
			</div>
		</div>
	)
}

export async function getStaticProps ({params, locale, preview = false}) {
	const props = await getPageById('page.portal', locale, preview)

	return {
		props: {...props, preview},
		revalidate: pageRevalidate,
	}
}

export default Portal
