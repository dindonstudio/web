import cn from 'classnames'
import styles from './aboutMission.module.scss'
import {colors} from '@config/variables'
import {useEffect, useRef} from 'react'
import gsap from 'gsap'
import TimelineSection from 'components/timelineSection/TimelineSection'
import Parallax from 'components/parallax/Parallax'
import EllipseClip from 'components/ellipseClip/EllipseClip'
import {SanityImage} from 'components/image/Image'
import CustomBlockContent from 'components/customBlockContent/CustomBlockContent'
import DealflowLogo from 'svgs/dealflow.svg'
import DealflowStroke from 'svgs/dealflow-stroke.svg'
import Marquee from 'components/marquee/Marquee'
import CircleBackground from 'components/circleBackground/CircleBackground'
import useMediaQuery from 'hooks/useMediaQuery'
import {DESKTOP} from 'utils/mediaQueries'

const AboutMission = ({
	diptychImage = null,
	diptychTitle = null,
	diptychText = null,
	largeTitle = null,
	excerpt = null,
	illustration = null,
}) => {
	const timeline = useRef(null)
	const mainBackgroundRef = useRef(null)
	const diptychCircleRef = useRef(null)
	const logoStrokeRef = useRef(null)

	const device = useMediaQuery()

	useEffect(() => {
		if (device) {
			timeline.current = gsap.timeline({paused: true})
				.to({}, {duration: 1})

			if (device === DESKTOP) {
				timeline.current
					// .fromTo(mainBackgroundRef.current, {opacity: 0}, {duration: 0.25, opacity: 1}, 0.15)
					.fromTo(diptychCircleRef.current, {opacity: 0}, {duration: 0.25, opacity: 1}, 0.1)
					.fromTo(logoStrokeRef.current, {opacity: 0}, {duration: 0.25, opacity: 1}, 0.1)
					.to(logoStrokeRef.current, {duration: 0.25, opacity: 0}, 0.75)
					// .to(mainBackgroundRef.current, {duration: 0.05, opacity: 0}, 0.95)
			}

			timeline.current.duration(1)
		}
	}, [device])

	return (
		<div className={styles.aboutMission}>
			<TimelineSection timeline={timeline}>
				<div className={cn('container', styles.container)}>
					<div className={styles.diptych}>
						<div className={styles.diptychText}>
							{diptychTitle && (
								<CustomBlockContent
									className={styles.diptychTitle}
									options={{normalStyle: 'hm-2 hd-4'}}
									blocks={diptychTitle} />
							)}
							{diptychText && (
								<CustomBlockContent
									className={styles.diptychDescr}
									options={{normalStyle: 'pm-18 pd-18'}}
									blocks={diptychText} />
							)}
						</div>

						{diptychImage && (
							<div className={styles.diptychImageWrap}>
								<Parallax z={-1.2} mediaQueries={[DESKTOP]}>
									<EllipseClip className={styles.diptychImageClip}>
										<SanityImage
											image={diptychImage}
											desktopWidth={580}
											mobileWidth={375}
											className={styles.diptychImage} />
									</EllipseClip>
								</Parallax>

								<CircleBackground circleRef={diptychCircleRef} childClassName={styles.circle} colors={{circle: colors.yellow?.hex}} fixed={false} overflowVisible />
							</div>
						)}
					</div>
				</div>

				{largeTitle && (
					[0, 1].map((line, i) => (
						<Marquee
							key={i}
							renderCount={2}
							renderItems={(item, i) => (
								<span key={i}>{item}</span>
							)}
							className={cn('hm-0 hd-0', styles.marqueeTitle)}
							items={[largeTitle]}
							perItemDuration={50}
							leftToRight={i === 1}
							withGradients={false} />
					))
				)}

				<div className={cn('container', styles.container)}>
					{(illustration || excerpt) && (
						<div className={styles.outro}>
							{illustration && (
								<Parallax z={-1} mediaQueries={[DESKTOP]}>
									<SanityImage image={illustration} desktopWidth={664} mobileWidth={375} className={styles.illu} />
								</Parallax>
							)}
							{excerpt && (
								<div className={styles.excerpt}>
									<DealflowLogo className={styles.dealflowLogo} />
									<p className={cn('p underline')}>{excerpt}</p>
								</div>
							)}

							<CircleBackground childClassName={styles.circle} colors={{circle: colors.yellow?.hex}} fixed={false} overflowVisible />
						</div>
					)}
				</div>
			</TimelineSection>

			<CircleBackground ref={mainBackgroundRef} className={styles.background} colors={{bg: colors.greenLight?.hex}} noCircle />

			<div className={styles.dealflowStroke} ref={logoStrokeRef} aria-hidden>
				<DealflowStroke className={styles.logo} />
			</div>
		</div>
	)
}

export default AboutMission
