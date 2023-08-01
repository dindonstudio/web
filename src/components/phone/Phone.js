import cn from 'classnames'
import styles from './phone.module.scss'
import {useInView} from 'react-intersection-observer'
import {forwardRef, useCallback, useEffect, useRef} from 'react'
import {SanityImage, LocalImage} from 'components/image/Image'
import phoneImage from 'images/phone-green.png'
import phoneBar from 'images/phone-bar-white.png'
import gsap from 'gsap'

const Phone = ({
	className,
	screenClassName = false,
	screen = null,
	animateInView = false,
	...rest
}, ref) => {
	const screenRef = useRef(null)
	const barRef = useRef(null)

	const [inViewRef, inView] = useInView({
		rootMargin: '-10% 0%',
		threshold: 0.25,
		triggerOnce: true,
	})

	const setRefs = useCallback((node) => {
		inViewRef(node)
		if (ref) ref.current = node
	}, [inViewRef])

	useEffect(() => {
		gsap.set(screenRef.current, {yPercent: 50, scale: 0, opacity: 0})
	}, [])

	useEffect(() => {
		if (inView && animateInView) {
			gsap.timeline()
				.fromTo(barRef.current, {opacity: 1}, {duration: 0.5, opacity: 0, ease: 'power2.out'}, 0)
				.fromTo(screenRef.current, {scale: 0}, {duration: 0.6, scale: 1, ease: 'quart.out'}, 0)
				.fromTo(screenRef.current, {yPercent: 50, opacity: 0}, {duration: 0.7, yPercent: 0, opacity: 1, ease: 'quart.out'}, 0)
		}
	}, [inView])

	return (
		<div ref={setRefs} className={cn(className, styles.phone, animateInView && styles.animated)}>
			{screen && (
				<div ref={screenRef} className={styles.screen}>
					<SanityImage
						image={screen}
						className={screenClassName}
						{...rest} />
				</div>
			)}
			<div ref={barRef} className={styles.whiteBar}>
				<LocalImage image={phoneBar} />
			</div>
			<LocalImage image={phoneImage} className={styles.device} {...rest} />
		</div>
	)
}

export default forwardRef(Phone)
