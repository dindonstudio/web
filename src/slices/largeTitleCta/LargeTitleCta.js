import cn from 'classnames'
import styles from './largeTitleCta.module.scss'
import {colors} from '@config/variables'
import {useRef, useEffect, useCallback} from 'react'
import {useInView} from 'react-intersection-observer'
import {isLightColor, themeToCSS} from 'utils/color'
import {primaryInput} from 'detect-it'
import Button, {ButtonVariant} from 'components/button/Button'
import {SanityImage} from 'components/image/Image'
import Arrow from '../../svgs/arrowCta.svg'
import {splitChars} from 'utils/text'
import gsap from 'gsap'
import SmoothScroll from 'components/smoothScroll/SmoothScroll'
import Parallax from 'components/parallax/Parallax'
import useSlice from 'hooks/useSlice'

const LargeTitleCta = (props) => {
	const {
		theme = null,
		className = null,
		imageClassName = null,
		title,
		subtitle = null,
		cta = null,
		image = null,
		imageParams = {desktopWidth: 1100, mobileWidth: 350},
	} = props

	const fixedTheme = useRef(theme)
	if (theme?.title === 'Green Dark') {
		fixedTheme.current.text = colors.white.hex ?? fixedTheme.current.text
	}

	const themeStyle = useRef(themeToCSS(fixedTheme.current))
	const isTouch = useRef(primaryInput === 'touch')
	const timeline = useRef(null)
	const titleRef = useRef(null)
	const imageRef = useRef(null)
	const subtitleRef = useRef(null)
	const ctaRef = useRef(null)

	const isLight = isLightColor(theme.bg)
	const ref = useRef(null)
	if (isLight) useSlice(ref)

	const [inViewRef, inView] = useInView({
		rootMargin: '-10% 0%',
		triggerOnce: true,
	})

	useEffect(() => {
		if (!isTouch.current) {
			timeline.current = gsap.timeline({paused: true})
				.fromTo(titleRef.current.querySelectorAll('span'), {yPercent: 100}, {duration: 0.9, yPercent: 0, ease: 'power2.out', stagger: 0.05}, 0)
				.fromTo(imageRef.current, {opacity: 0, y: '10rem'}, {duration: 0.8, opacity: 1, y: 0, ease: 'power2.out'}, 0.4)

			if (subtitleRef.current) {
				timeline.current.fromTo(subtitleRef.current, {opacity: 0, y: '8rem'}, {duration: 0.6, opacity: 1, y: 0, ease: 'power2.out'}, 0.6)
			}

			if (ctaRef.current) {
				timeline.current.fromTo(ctaRef.current, {opacity: 0, y: '8rem'}, {duration: 0.6, opacity: 1, y: 0, ease: 'power2.out'}, 0.65)
			}
		}
	}, [])

	useEffect(() => {
		if (inView && !isTouch.current) {
			timeline.current.play()
		}
	}, [inView])

	const setRefs = useCallback(
		(node) => {
			ref.current = node
			inViewRef(node)
		},
		[inViewRef],
	)

	return (
		<SmoothScroll ref={setRefs} as='section' childClassName={cn(className, styles.largeTitleCta)} style={{...themeStyle.current}}>
			<div className={cn('container', styles.container)}>
				<div className={styles.titleWrapper}>
					{title && <h2 ref={titleRef} className={cn('hm-0 hd-0', styles.title)} dangerouslySetInnerHTML={{__html: splitChars(title)}} />}
					{image && (
						<Parallax childClassName={styles.imageWrap} z={0.7}>
							<SanityImage image={image} className={cn(imageClassName, styles.image)} objectFit='contain' {...imageParams} ref={imageRef} />
						</Parallax>
					)}
				</div>
				<div className={styles.text}>
					{subtitle && (
						<p ref={subtitleRef} className={cn('hm-3 hd-3', styles.subtitle)}>{subtitle}</p>
					)}
					{cta && <Button ref={ctaRef} variant={ButtonVariant.rounded} className={styles.cta} link={cta}><Arrow />{cta.label}</Button>}
				</div>
			</div>
		</SmoothScroll>
	)
}

export default LargeTitleCta
