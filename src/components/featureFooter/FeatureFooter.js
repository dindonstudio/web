import cn from 'classnames'
import styles from './featureFooter.module.scss'
import {colors} from '@config/variables'
import {useCallback, useEffect, useRef} from 'react'
import {useInView} from 'react-intersection-observer'
import gsap from 'gsap'
import SmoothScroll from 'components/smoothScroll/SmoothScroll'
import CustomBlockContent from 'components/customBlockContent/CustomBlockContent'
import {SanityImage} from 'components/image/Image'
import Button, {ButtonVariant} from 'components/button/Button'
import Arrow from 'svgs/arrowCta.svg'
import CircleBackground from 'components/circleBackground/CircleBackground'
import {isLightColor} from 'utils/color'
import useSlice from 'hooks/useSlice'

const FeatureFooter = (props) => {
	const {title, features = null, cta = null, backgroundColors = {bg: colors.pinkDark?.hex, circle: colors.pink?.hex}, className = null} = props

	const boxRef = useRef(null)
	const isLight = useRef(isLightColor(backgroundColors.bg))
	const ref = useRef(null)

	useSlice(ref)

	const [inViewRef, inView] = useInView({
		threshold: 0.5,
		triggerOnce: true,
	})

	const setRefs = useCallback((node) => {
		inViewRef(node)
		if (ref) ref.current = node
	}, [inViewRef])

	useEffect(() => {
		if (inView) {
			gsap.timeline()
				.fromTo(boxRef.current, {y: '5rem', scale: 0.85, opacity: 0}, {duration: 1, y: 0, scale: 1, opacity: 1, ease: 'expo.out'}, 0)
		}
	}, [inView])

	return (
		<SmoothScroll ref={setRefs} as='section' childClassName={cn(styles.featureFooter, className)}>
			<div className={cn('container', styles.container)}>
				<div className={styles.text}>
					<h2 className={cn('hm-2 hd-2', styles.title)} style={{color: !isLight.current && 'white'}}>
						<CustomBlockContent blocks={title} noDom />
					</h2>

					{cta && <Button variant={ButtonVariant.rounded} className={styles.cta} link={cta}><Arrow aria-hidden />{cta.label}</Button>}
				</div>

				{features?.length > 0 && (
					<ul ref={boxRef} className={styles.features}>
						{features.map(feature => (
							<li key={feature._key} className={styles.feature}>
								{feature.icon && (
									<SanityImage image={feature.icon} desktopWidth={64} mobileWidth={64} className={styles.featureIcon} />
								)}
								<h3 className={cn('hm-3 hd-4', styles.featureTitle)}>{feature.title}</h3>
								{feature.description && <p className={cn('pm-16', styles.featureDescription)}>{feature.description}</p>}
								{feature.cta && <Button variant={ButtonVariant.rounded} className={styles.featureCta} link={feature.cta} inverted><Arrow aria-hidden />{feature.cta.label}</Button>}
							</li>
						))}
					</ul>
				)}
			</div>

			<CircleBackground
				className={styles.background}
				childClassName={styles.circle}
				colors={backgroundColors} />
		</SmoothScroll>
	)
}

export default FeatureFooter
