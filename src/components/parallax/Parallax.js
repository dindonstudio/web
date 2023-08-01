import {useRef, useCallback, useEffect, useState, forwardRef} from 'react'
import useWindowResize from 'hooks/useWindowResize'
import useRaf from 'hooks/useRaf'
import {getCurrentDevice, MOBILE, TABLET, DESKTOP} from 'utils/mediaQueries'
import useWindowScroll from 'hooks/useWindowScroll'
import offsetTop from 'utils/offsetTop'
import {isActive} from 'components/smoothScroll/SmoothScroll'

export const ORIGIN = {
	top: 'top',
	center: 'center',
	bottom: 'bottom',
}

const Parallax = ({
	children,
	z,
	className = null,
	childClassName = null,
	rotateInit = 0,
	rotate = 0,
	ease = null,
	additionalTransform = '',
	overflow = null,
	origin = ORIGIN.center,
	mediaQueries = [MOBILE, TABLET, DESKTOP],
	as = 'div',
}, ref) => {
	const localRef = useRef(null)
	const targetRef = useRef(null)
	const intersectionObserver = useRef(null)
	const Tag = as
	const scrollY = useRef(0)
	const areFontsLoaded = useRef(false)
	const [enabled, setEnabled] = useState(false)

	const setRefs = useCallback(e => {
		localRef.current = e
		if (ref) ref.current = e
	}, [])

	if (!z) console.error('z prop needs to be set')

	const viewportHeight = useRef(0)
	const scrollParent = useRef(null)
	const a = useRef(rotateInit)
	const y = useRef(0)
	const oy = useRef(null)
	const scale = useRef(1)
	const top = useRef(0)
	const height = useRef(0)
	const maxDist = useRef(0)
	const needsUpdate = useRef(false)
	const needsClean = useRef(false)

	const handleResize = useCallback((e) => {
		if (e) viewportHeight.current = e.documentHeight
		targetRef.current.style.transform = ''
		if (targetRef.current) intersectionObserver.current.observe(targetRef.current)
	}, [])

	const handleIntersection = (entries, observer) => {
		const entry = entries[0]
		intersectionObserver.current.unobserve(entry.target)

		const device = getCurrentDevice()
		const _enabled = mediaQueries.indexOf(device) !== -1
		setEnabled(_enabled)

		// parallax
		if (_enabled && z) {
			top.current = offsetTop(entry.target)

			// smoothscroll container is fixed and will return an offsetTop of 0
			if (scrollParent.current && isActive()) top.current += scrollParent.current.__top || offsetTop(scrollParent.current.parentNode)

			height.current = entry.boundingClientRect.height
			maxDist.current = device === DESKTOP ? 120 : 60
			if (overflow === 'hidden') scale.current = (height.current + Math.abs(2 * maxDist.current * z)) / height.current
			needsUpdate.current = true
		}
	}

	useEffect(() => {
		if (enabled) tick(true)
	}, [enabled])

	useEffect(() => {
		scrollParent.current = localRef.current.closest('.smoothscroll')
		intersectionObserver.current = new IntersectionObserver(handleIntersection)
	}, [])

	useEffect(() => {
		document.fonts.ready.then(() => {
			areFontsLoaded.current = true
			handleResize()
		})
	}, [handleResize])

	useWindowScroll((e) => {
		scrollY.current = e.pageYOffset
	})

	useWindowResize(handleResize, true)

	const tick = (now = false) => {
		if (enabled && z) {
			const dy = origin === ORIGIN.center ? (height.current - viewportHeight.current) / 2
				: (origin === ORIGIN.bottom ? height.current - viewportHeight.current : 0)
			const p = (top.current + dy - scrollY.current) / viewportHeight.current
			const initY = top.current - scrollY.current
			const destY = p * maxDist.current * -z
			const easing = ease || scrollParent.current?.__easing || 1

			y.current += (destY - y.current) * (now ? 1 : easing)

			if (rotate || rotateInit) {
				const destRotation = -rotate * initY / viewportHeight.current + rotateInit
				a.current += (destRotation - a.current) * easing
			}

			const roundedY = (y.current * 1000 | 0) / 1000
			const newY = initY + roundedY
			const isIn =
				(newY + height.current + viewportHeight.current * 0.5 >= 0 && newY <= viewportHeight.current * 1.5) ||
				(initY + height.current + viewportHeight.current * 0.5 >= 0 && initY <= viewportHeight.current * 1.5)

			const scaleTransformation = scale.current !== 1 ? ` scale(${scale.current})` : ''
			const rotateTransformation = a.current ? ` rotate(${a.current}deg)` : ''
			if (targetRef.current && isIn && (roundedY !== oy.current || needsUpdate.current)) {
				targetRef.current.style.transform = `translate3d(0,${roundedY}px,0)${rotateTransformation}${scaleTransformation}${additionalTransform}`
				// targetRef.current.style.willChange = 'transform'
				needsUpdate.current = false
				needsClean.current = true
			} else if (!isIn && needsClean.current) {
				targetRef.current.style.transform = `translate(0,${roundedY}px)${rotateTransformation}${scaleTransformation}${additionalTransform}`
				// targetRef.current.style.willChange = ''
				needsClean.current = false
			}

			oy.current = roundedY
		}
	}

	useRaf(() => {
		tick()
	})

	return (
		<Tag ref={setRefs} className={className} style={enabled ? {overflow} : null}>
			<div className={childClassName} ref={targetRef}>
				{children}
			</div>
		</Tag>
	)
}

export default forwardRef(Parallax)
