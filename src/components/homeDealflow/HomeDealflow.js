import cn from 'classnames'
import Button, {ButtonVariant} from 'components/button/Button'
import Locale from 'components/locale/Locale'
import Testament from 'components/testament/Testament'
import TimelineSection from 'components/timelineSection/TimelineSection'
import {useEffect, useRef} from 'react'
import styles from './homeDealflow.module.scss'
import Arrow from 'svgs/arrowCta.svg'
import gsap from 'gsap'
import CustomBlockContent from 'components/customBlockContent/CustomBlockContent'
import useMediaQuery from 'hooks/useMediaQuery'
import {DESKTOP} from 'utils/mediaQueries'

const HomeDealflow = ({title, testament, logoRef, logoCards, demoLink, learnMoreLink}) => {
	const timeline = useRef(null)
	const backgroundRef = useRef(null)
	const device = useMediaQuery()

	useEffect(() => {
		if (device) {
			timeline.current = gsap.timeline({paused: true})
				.to({}, {duration: 1})
				.fromTo(backgroundRef.current, {opacity: 0}, {duration: 0.5, x: 0, opacity: 1}, 0)
			if (device === DESKTOP) {
				timeline.current.fromTo(logoRef.current, {x: '0vw'}, {duration: 0.30, x: '20vw', ease: 'quad.inOut'}, 0.2)
			} else {
				timeline.current.fromTo(logoRef.current, {y: '15vh'}, {duration: 0.7, y: '-130vh', ease: 'sine.in'}, 0.1)
			}
			logoCards.current.forEach((card, i) => {
				const a = 2 * Math.PI * i / logoCards.current.length + Math.PI * 0.8
				const r = device === DESKTOP ? 11 : 28
				const scale = card.dataset.scale
				const x = Math.cos(a) * r * 1.5
				timeline.current.fromTo(card,
					{x: 0, y: 0, scale: 0.4},
					{duration: 0.25, x: `${x}vw`, y: `${Math.sin(a) * r}vw`, scale, ease: 'quad.inOut'}, i / 150)

				if (device === DESKTOP) {
					timeline.current.to(card, {duration: 0.15, x: `-=${(x + r * 1.5) / 6}vw`, ease: 'quad.in'}, 0.25)
						.to(card, {duration: 0.15, x: `${x}vw`, ease: 'quad.out'}, 0.45)
				}
			})
			timeline.current.duration(1)
		}
	}, [device])

	return (
		<>
			<TimelineSection timeline={timeline} childClassName={styles.homeDealFlow}>
				<div className={cn('container')}>
					<div className={styles.container}>
						<div className={styles.content}>
							<CustomBlockContent as='h2' className={cn('hm-2 hd-2', styles.title)} blocks={title} noDom />
							<Button variant={ButtonVariant.rounded} className={styles.button} link={demoLink}><Arrow /><Locale>Request a demo</Locale></Button>
							<Button variant={ButtonVariant.rounded} className={styles.button} link={learnMoreLink} transparent><Locale>Learn more</Locale></Button>
							<Testament {...testament} className={styles.testament} />
						</div>
					</div>
				</div>
			</TimelineSection>
			<div ref={backgroundRef} className={styles.background} aria-hidden>
				<div className={styles.circle} />
			</div>
		</>
	)
}

export default HomeDealflow
