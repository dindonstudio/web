import {useRef} from 'react'
import {primaryInput} from 'detect-it'
import useMediaQuery from './useMediaQuery'
import useRaf from './useRaf'
import {clamp} from 'utils/maths'
import useResizeObserver from './useResizeObserver'
import {DESKTOP} from 'utils/mediaQueries'

const useSticky = (easing = null) => {
	const ref = useRef(null)
	const height = useRef(0)
	const parentHeight = useRef(0)

	const parentRef = useRef(null)

	const isTouch = useRef(primaryInput === 'touch')

	const device = useMediaQuery()

	useResizeObserver(ref, e => {
		height.current = e.borderBoxSize?.[0] ? e.borderBoxSize[0].blockSize : ref.current.offsetHeight
	})

	useResizeObserver(parentRef, e => {
		parentHeight.current = e.contentRect.height

		if (device !== DESKTOP || isTouch.current) {
			ref.current.style.transform = ''
		}
	})

	useRaf(() => {
		if (parentRef?.current) {
			if (device !== DESKTOP || isTouch.current) return

			const v = parentHeight.current - height.current

			let p = clamp(-parentRef.current.__y / v, 0, 1)
			if (easing) p = easing(p)
			const y = p * v
			ref.current.style.transform = `translate3d(0,${y}px,0)`
		}
	})

	return [ref, parentRef]
}

export default useSticky
