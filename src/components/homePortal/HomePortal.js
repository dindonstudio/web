import cn from 'classnames'
import Button, {ButtonVariant} from 'components/button/Button'
import CustomBlockContent from 'components/customBlockContent/CustomBlockContent'
import Locale from 'components/locale/Locale'
import Testament, {testamentTheme} from 'components/testament/Testament'
import TimelineSection from 'components/timelineSection/TimelineSection'
import {useEffect, useRef} from 'react'
import styles from './homePortal.module.scss'
import Arrow from 'svgs/arrowCta.svg'
import gsap from 'gsap'
import CircleBackground from 'components/circleBackground/CircleBackground'
import {colors} from '@config/variables'
import {LocalImage, SanityImage} from 'components/image/Image'
import portal from 'images/portal.png'
import Parallax, {ORIGIN} from 'components/parallax/Parallax'
import useMediaQuery from 'hooks/useMediaQuery'
import {DESKTOP} from 'utils/mediaQueries'

const HomePortal = ({title, excerpt, testament, image, demoLink, learnMoreLink}) => {
	const timeline = useRef(null)
	const portalRef = useRef(null)
	const backgroundRef = useRef(null)
	const device = useMediaQuery()

	useEffect(() => {
		if (device) {
			timeline.current = gsap.timeline({paused: true})
				.to({}, {duration: 1})
			if (device === DESKTOP) {
				timeline.current.fromTo(portalRef.current, {rotate: '16deg', y: '-200%'}, {duration: 0.8, rotate: '-7deg', y: '100%'}, 0)
			} else {
				timeline.current.fromTo(portalRef.current, {rotate: '8deg', y: '-130%'}, {duration: 0.8, rotate: '-8deg', y: '150%'}, 0)
			}
			timeline.current.fromTo(backgroundRef.current, {opacity: 0}, {duration: 0.5, x: 0, opacity: 1}, 0)
			timeline.current.duration(1)
		}
	}, [device])

	return (
		<>
			<TimelineSection timeline={timeline} childClassName={styles.homePortal}>
				<div className={styles.textWrapper}>
					<div ref={portalRef}>
						<LocalImage image={portal} className={styles.text} alt='The portal to build trust'></LocalImage>
					</div>
				</div>
				<div className={cn('container', styles.container)}>
					{image && (
						<Parallax z={1}>
							<SanityImage className={styles.image} image={image} desktopWidth={720} mobileWidth={320} />
						</Parallax>
					)}

					<div className={styles.content}>
						<CustomBlockContent as='h2' className={cn('hm-2 hd-3', styles.title)} blocks={title} noDom />
						<Parallax z={-0.25} origin={ORIGIN.top}>
							<p className={cn('pm-16', styles.excerpt)}>{excerpt}</p>
						</Parallax>
						<Parallax z={-0.75} origin={ORIGIN.top}>
							<Button variant={ButtonVariant.rounded} className={styles.button} link={demoLink}><Arrow /><Locale>Request a demo</Locale></Button>
							<Button variant={ButtonVariant.rounded} className={styles.button} link={learnMoreLink} transparent style={{'--background-color': colors.greenDark.hex, '--color': colors.white.hex}}><Locale>Learn more</Locale></Button>
						</Parallax>
						<Parallax z={-1.25} origin={ORIGIN.top}>
							<Testament {...testament} className={styles.testament} theme={testamentTheme.dark} />
						</Parallax>
					</div>
				</div>
			</TimelineSection>
			<CircleBackground ref={backgroundRef} className={styles.background} colors={{bg: '#CEC4CE', circle: '#D7C0EC'}} />
		</>
	)
}

export default HomePortal
