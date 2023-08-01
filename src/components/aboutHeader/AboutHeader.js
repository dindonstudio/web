import cn from 'classnames'
import styles from './aboutHeader.module.scss'
import {useEffect, useRef} from 'react'
import {colors} from '@config/variables'
import gsap from 'gsap'
import {SanityImage} from 'components/image/Image'
import TimelineSection from 'components/timelineSection/TimelineSection'
import CustomBlockContent from 'components/customBlockContent/CustomBlockContent'
import EllipseClip from 'components/ellipseClip/EllipseClip'
import DealflowLogo from 'svgs/dealflow.svg'
import DealflowStroke from 'svgs/dealflow-stroke.svg'
import CircleBackground from 'components/circleBackground/CircleBackground'
import useMediaQuery from 'hooks/useMediaQuery'
import {DESKTOP} from 'utils/mediaQueries'
import {imageBuilder} from 'lib/sanityImage'

const AboutHeader = ({
	intro = null,
	titleLine1 = null,
	titleLine2 = null,
	portrait = null,
}) => {
	const timelineIntro = useRef(null)
	const timelineMain = useRef(null)
	const introContentRef = useRef(null)
	const introBackgroundRef = useRef(null)
	const logoStrokeRef = useRef(null)
	const titleLineRef1 = useRef(null)
	const titleLineRef2 = useRef(null)
	const maskTitleLineRef2 = useRef(null)
	const portraitRef = useRef(null)
	// const mainBackgroundRef = useRef(null)
	const mainCircleRef = useRef(null)

	const device = useMediaQuery()
	const portraitUrl = imageBuilder.image(portrait).url()

	useEffect(() => {
		if (device) {
			timelineIntro.current = gsap.timeline({paused: true})
				.to({}, {duration: 1})

			if (device === DESKTOP) {
				timelineIntro.current
					.fromTo(introContentRef.current, {y: 0, opacity: 1}, {duration: 0.3, y: '-30rem', opacity: 0}, 0.5)
					.fromTo(introBackgroundRef.current, {opacity: 1}, {duration: 0.5, opacity: 0}, 0.35)
					.to(logoStrokeRef.current, {duration: 0.5, opacity: 0}, 0.35)
			}
			timelineIntro.current.duration(1)

			timelineMain.current = gsap.timeline({paused: true})
				.to({}, {duration: 1})

			if (device === DESKTOP) {
				timelineMain.current
					.fromTo([mainCircleRef.current], {opacity: 0}, {duration: 0.5, opacity: 1}, 0)
					.fromTo([titleLineRef1.current, titleLineRef2.current], {y: '12vh', opacity: 0}, {duration: 0.3, y: '0vh', opacity: 1, ease: 'quad.out', stagger: 0.1}, 0.13)
					// .fromTo(portraitRef.current, {scale: 0, opacity: 0}, {duration: 0.25, scale: 1, opacity: 1, ease: 'power2.out'}, 0.33)
					.fromTo(maskTitleLineRef2.current, {opacity: 0}, {duration: 0.15, opacity: 1, ease: 'power2.out'}, 0.45)
					// .to([portraitRef.current, maskTitleLineRef2.current], {duration: 0.2, opacity: 0, ease: 'power2.out'}, 0.65)
					// .to([titleLineRef1.current, titleLineRef2.current], {duration: 0.3, opacity: 0, y: '-30rem', ease: 'power2.out', stagger: 0.015}, 0.7)
					.fromTo(mainCircleRef.current, {opacity: 1}, {duration: 0.3, opacity: 0}, 0.7)
					// .to(mainBackgroundRef.current, {duration: 0.1, opacity: 0}, 0.9)
			} else {
				timelineMain.current
					.fromTo([titleLineRef1.current, titleLineRef2.current], {y: '12vh', opacity: 0}, {duration: 0.3, y: '0vh', opacity: 1, ease: 'quad.out', stagger: 0.08}, 0.3)
			}

			timelineMain.current.duration(1)
		}
	}, [device])

	return (
		<div className={styles.aboutHeader}>
			<div className={styles.intro}>
				<TimelineSection timeline={timelineIntro} isTop>
					{intro && (
						<div ref={introContentRef} className={cn('container fullscreen', styles.container)}>
							<DealflowLogo className={styles.dealflowLogo} />
							<CustomBlockContent
								className={styles.introText}
								options={{normalStyle: 'hm-2 hd-2'}}
								blocks={intro} />
						</div>
					)}
				</TimelineSection>

				<CircleBackground ref={introBackgroundRef} className={cn(styles.background, styles.introBackground)} colors={{bg: colors.greenDark?.hex}} noCircle />

				<div className={styles.dealflowStroke} ref={logoStrokeRef} aria-hidden>
					<DealflowStroke className={cn('desktop-only', styles.logo)} />
				</div>
			</div>

			<div className={styles.main}>
				<TimelineSection timeline={timelineMain}>
					<div className={cn('container', styles.container)}>
						{portrait && (
							<EllipseClip ref={portraitRef} className={styles.portrait}>
								<SanityImage
									image={portrait}
									desktopWidth={400}
									mobileWidth={250}
									ratio={790 / 860}
									className={styles.portraitImage} />
							</EllipseClip>
						)}
						<p ref={titleLineRef1} className={cn('hm-2 hd-2', styles.titleLine)}>{titleLine1}</p>
						<p ref={titleLineRef2} className={cn('hm-2 hd-2', styles.titleLine, styles.titleLine1)}>
							<span>{titleLine2}</span>
							<span ref={maskTitleLineRef2} className={cn('desktop-only', styles.whiteText)} style={{WebkitMaskImage: `url(${portraitUrl})`, maskImage: `url(${portraitUrl})`}}>{titleLine2}</span>
						</p>

					</div>

					<CircleBackground ref={mainCircleRef} childClassName={styles.circle} colors={{circle: colors.yellow?.hex}} overflowVisible />

				</TimelineSection>

				{/* <CircleBackground ref={mainBackgroundRef} className={cn(styles.background, styles.mainBackground)} childClassName={styles.circle} colors={{bg: colors.white?.hex}} noCircle /> */}
			</div>
		</div>
	)
}

export default AboutHeader
