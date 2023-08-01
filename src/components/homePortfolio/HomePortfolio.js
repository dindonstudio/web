import Button, {ButtonVariant} from 'components/button/Button'
import Locale from 'components/locale/Locale'
import Phone from 'components/phone/Phone'
import Testament, {testamentTheme} from 'components/testament/Testament'
import TimelineSection from 'components/timelineSection/TimelineSection'
import gsap from 'gsap'
import {useEffect, useRef} from 'react'
import {cn} from 'utils/classnames'
import styles from './homePortfolio.module.scss'
import Arrow from '../../svgs/arrowCta.svg'
import CustomBlockContent from 'components/customBlockContent/CustomBlockContent'
import {colors} from '@config/variables'
import useMediaQuery from 'hooks/useMediaQuery'
import {DESKTOP} from 'utils/mediaQueries'

const HomePortfolio = ({phoneImage, title, excerpt, testament, logoRef, logoCards, demoLink, learnMoreLink}) => {
	const timeline = useRef(null)
	const phoneRef = useRef(null)
	const backgroundRef = useRef(null)
	const device = useMediaQuery()

	useEffect(() => {
		if (device) {
			timeline.current = gsap.timeline({paused: true})
				.to({}, {duration: 1})

			if (device === DESKTOP) {
				timeline.current.to(logoRef.current, {duration: 0.30, x: '0vw', ease: 'quad.inOut'}, 0)
				timeline.current.fromTo(logoRef.current, {y: '0vh'}, {duration: 0.35, y: '-60vh', ease: 'quad.in'}, 0.35)
			}
			timeline.current.fromTo(phoneRef.current, {y: '15rem'}, {duration: 0.30, y: '-5rem', ease: 'quad.inOut'}, 0)

			timeline.current
				.fromTo(phoneRef.current, {scale: device === DESKTOP ? 1.4 : 1.65}, {duration: 0.40, scale: 1, ease: 'quad.inOut'}, 0)
				.fromTo(backgroundRef.current, {opacity: 0}, {duration: 0.5, x: 0, opacity: 1}, 0)

			if (device === DESKTOP) {
				logoCards.current.forEach((card, i) => {
					timeline.current.to(card, {duration: 0.25, x: 0, y: 0, scale: 0.4, ease: 'quad.inOut'}, i / 150)
				})
			}

			timeline.current.duration(1)
		}
	}, [device])

	return (
		<>
			<TimelineSection timeline={timeline} className={styles.homePortfolio}>
				{phoneImage && (
					<Phone ref={phoneRef} className={styles.phone} screen={phoneImage} desktopWidth={350} mobileWidth={235} animateInView />
				)}
				<div className={cn('container', styles.container)}>
					<div className={styles.left}>
						<CustomBlockContent as='h2' className={cn('hm-2 hd-3', styles.title)} blocks={title} noDom />
						<Button variant={ButtonVariant.rounded} className={styles.button} link={demoLink}><Arrow /><Locale>Request a demo</Locale></Button>
						<Button variant={ButtonVariant.rounded} className={styles.button} link={learnMoreLink} transparent style={{'--background-color': colors.greenDark.hex, '--color': colors.white.hex}}><Locale>Learn more</Locale></Button>
					</div>

					<div className={styles.right}>
						<p className='pm-16'>{excerpt}</p>
						<Testament {...testament} className={styles.testament} theme={testamentTheme.dark} />
					</div>
				</div>
			</TimelineSection>
			<div ref={backgroundRef} className={styles.background} aria-hidden>
				<div className={styles.circle} />
			</div>
		</>
	)
}

export default HomePortfolio
