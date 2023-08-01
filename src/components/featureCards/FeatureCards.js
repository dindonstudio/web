import cn from 'classnames'
import CircleBackground from 'components/circleBackground/CircleBackground'
import CustomBlockContent from 'components/customBlockContent/CustomBlockContent'
import gsap from 'gsap'
import {imageBuilder} from 'lib/sanityImage'
import {useEffect, useRef} from 'react'
import {useInView} from 'react-intersection-observer'
import styles from './featureCards.module.scss'

const FeatureCards = ({title, features, backgroundColor, timelineCallback = null, className = null, circleClassName = null}) => {
	const cardsRef = useRef([])
	const timeline = useRef(null)

	const [inViewRef, inView] = useInView({triggerOnce: true})

	useEffect(() => {
		if (inView) {
			if (timeline.current) timeline.current.kill()
			timeline.current = gsap.timeline()
				.to({}, {duration: 1}, 0)
				.fromTo(cardsRef.current, {rotate: -15, x: '90vw', y: '150%'}, {duration: 1, x: '0vw', y: '0%', rotate: 0, ease: 'expo.out', stagger: 0.05}, 0)
			timeline.current.duration(1)
		}
	}, [inView])

	return (
		<section className={cn('container', className, styles.featureCards)} ref={inViewRef}>
			<h2 className={cn('hm-2 hd-2', styles.title)}>
				<CustomBlockContent blocks={title} noDom />
			</h2>
			<ul className={styles.cards}>
				{features.map((feature, i) => (
					<li key={feature._key} className={cn('pm-18', styles.card)} ref={e => { cardsRef.current[i] = e }}>
						{feature.icon && <img src={imageBuilder.image(feature.icon).url()} />}
						{feature.title}
					</li>
				))}
			</ul>
			<CircleBackground
				className={styles.background}
				childClassName={cn(styles.circle, circleClassName)}
				colors={backgroundColor}
				overflowVisible
				fixed={false} />
		</section>
	)
}

export default FeatureCards
