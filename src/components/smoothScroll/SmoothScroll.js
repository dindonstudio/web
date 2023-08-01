import {useRef, useEffect, useCallback, forwardRef} from 'react'
import {primaryInput} from 'detect-it'
import useRaf from 'hooks/useRaf'
import useWindowScroll from 'hooks/useWindowScroll'
import styles from './SmoothScroll.module.scss'
import useScrollStore from 'stores/useScrollStore'
import useAppStore from 'stores/useAppStore'
import {cn} from 'utils/classnames'
import useResizeObserver from 'hooks/useResizeObserver'

export const EASING = 0.15

export const isActive = () => primaryInput !== 'touch'
export const getEasing = () => isActive() ? EASING : 1

const SmoothScroll = ({
	children = null,
	as = 'div',
	className = null,
	childClassName = null,
	childStyle = null,
	style = null,
	onInView = (inView, topInView, bottomInView) => {},
	onScroll = ({y, height, percent, percentTop}) => {},
	autoDisablePointerEvents = true,
	sticky = null,
	childRef = null,
	preventDisable = false,
}, ref) => {
	const Tag = as
	const mainRef = useRef(null)
	const dummyRef = useRef(null)
	const intersectionObserver = useRef(null)
	const useStore = useScrollStore()
	const [enabled, isLocked] = useScrollStore(state => [state.enabled, state.isLocked])
	const isEnabled = useRef(enabled)
	const isDirty = useRef(true)
	const isInView = useRef(false)
	const height = useRef(0)
	const top = useRef(Infinity)
	const isFirstScroll = useRef(true)
	const isFirstResize = useRef(true)
	const isActiveClassName = useRef('')
	const windowSize = useRef(useAppStore.getState().windowSize)

	// physics
	const _y = useRef(0)
	const y = useRef(0)
	const vy = useRef(0)

	const pointerDisabled = useRef(false)

	const handleIntersection = (entries) => {
		const entry = entries.filter(e => (e.target === (primaryInput === 'touch' ? mainRef.current : dummyRef.current)))[0]
		if (entry) {
			intersectionObserver.current.unobserve(entry.target)
			entries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
			const firstEntry = entries[0]
			// top.current = entry.boundingClientRect.top - (entry !== firstEntry ? entries[0].boundingClientRect.top : 0)
			top.current = entry === firstEntry ? 0 : entry.boundingClientRect.top - entries[0].boundingClientRect.top
			mainRef.current.__top = top.current
			tick(true)
		}
	}

	const tick = (now) => {
		if (mainRef.current && windowSize.current && primaryInput !== 'touch') {
			if (isEnabled.current) {
				if (now || isFirstScroll.current) {
					y.current = _y.current
					vy.current = 0
				} else {
					vy.current = _y.current - y.current
					y.current += vy.current * EASING
				}
			}

			const screenPosition = y.current - top.current
			const topInView = screenPosition - height.current <= 0
			const bottomInView = screenPosition + windowSize.current.height >= 0
			const inView = preventDisable || (topInView && bottomInView)
			if (onInView && isInView.current !== inView) onInView(inView, topInView, bottomInView)
			isInView.current = inView

			let yRound = ((y.current - top.current + 0.01) * 1000 | 0) / 1000 // rounding values
			if (sticky) yRound = Math.min(yRound, 0)
			mainRef.current.__y = -yRound

			if (inView) {
				if (!isDirty.current) {
					// mainRef.current.style.willChange = 'transform'
					isDirty.current = true
				}

				const translate = `translate3d(0,${-yRound}px,0)`
				mainRef.current.style.transform = translate
				if (onScroll) {
					onScroll({
						y: yRound,
						height: height.current,
						percent: (yRound + windowSize.current.height) / (height.current + windowSize.current.height),
						percentTop: yRound / height.current,
					})
				}

				// disable pointer events while scrolling
				if (autoDisablePointerEvents) {
					const vyAbs = Math.abs(vy.current)
					if (!pointerDisabled.current && vyAbs > 10) {
						pointerDisabled.current = true
						mainRef.current.style.pointerEvents = 'none'
					} else if (pointerDisabled && vyAbs <= 10) {
						pointerDisabled.current = false
						mainRef.current.style.pointerEvents = ''
					}
				}
			} else if (isDirty.current) {
				// mainRef.current.style.willChange = ''
				mainRef.current.style.transform = ''
				isDirty.current = false
			}
		}
	}

	const handleResize = () => {
		if (dummyRef.current) {
			intersectionObserver.current.observe(primaryInput === 'touch' ? mainRef.current : dummyRef.current)
		}
	}

	useEffect(() => {
		if (primaryInput !== 'touch') {
			mainRef.current.__easing = EASING
		}

		return useAppStore.subscribe(state => { windowSize.current = state.windowSize })
	}, [])

	useEffect(() => {
		isEnabled.current = enabled
	}, [enabled])

	useResizeObserver(mainRef, (entry) => {
		if (dummyRef.current) {
			const h = entry.borderBoxSize?.length ? entry.borderBoxSize[0].blockSize : entry.target.getBoundingClientRect().height
			if (h !== height.current) {
				height.current = h
				mainRef.current.__height = h

				if (primaryInput !== 'touch') {
					dummyRef.current.style.height = `${height.current}px`
				}
			}

			if (isFirstResize.current) {
				isFirstResize.current = false

				if (primaryInput !== 'touch') {
					mainRef.current.classList.add(styles.isActive)
					dummyRef.current.classList.add(styles.isActive)
					isActiveClassName.current = styles.isActive
				}

				if (primaryInput !== 'touch' || onScroll) {
					const state = useStore.getState()
					intersectionObserver.current = state.intersectionObserver
					state.addObserverCallback(handleIntersection)
					state.addResizeCallback(handleResize)
					requestAnimationFrame(() => {
						handleResize()
					})
				}
			}
		}
	})

	if (isActive()) {
		useRaf(() => tick(), true)
	}

	useWindowScroll((e) => {
		if (isEnabled.current && !isLocked) {
			_y.current = e.pageYOffset
		}

		if (isFirstScroll.current) {
			y.current = _y.current
			isFirstScroll.current = false
		}

		if (primaryInput === 'touch' && onScroll) {
			const y = _y.current - top.current
			const documentHeight =  e.documentHeight || document.documentElement.clientHeight
			onScroll({
				y,
				height: height.current,
				percent: (y + documentHeight) / (height.current + documentHeight),
				percentTop: y / height.current,
			})
		}
	}, false, [isLocked])

	const setRefs = useCallback(node => {
		mainRef.current = node
		if (childRef) childRef.current = node
	}, [])

	return (
		<Tag className={className} style={style} ref={ref}>
			<div ref={setRefs} className={cn('smoothscroll', styles.container, isActiveClassName.current, childClassName)} style={childStyle}>
				{children}
			</div>
			<div
				ref={dummyRef}
				className={cn(styles.size, isActiveClassName.current)}
				aria-hidden />
		</Tag>
	)
}

export default forwardRef(SmoothScroll)
