import cn from 'classnames'
import {useRef, createRef, useEffect, useMemo, Fragment} from 'react'
import styles from './keyDates.module.scss'
import gsap from 'gsap'
import TimelineSection from 'components/timelineSection/TimelineSection'
import CircleBackground from 'components/circleBackground/CircleBackground'
import useWindowSize from 'hooks/useWindowSize'
import useMediaQuery from 'hooks/useMediaQuery'
import {DESKTOP} from 'utils/mediaQueries'

const KeyDates = ({title = null, items = null}) => {
	const timeline = useRef(null)
	const mainRef = useRef(null)
	const listRef = useRef(null)
	const bgWrapRef = useRef(null)
	const backgroundRefs = useMemo(() => Array(items.length).fill(0).map(i => createRef()), [items])
	const yearRefs = useMemo(() => Array(items.length).fill(0).map(i => createRef()), [items])
	const descrRefs = useMemo(() => Array(items.length).fill(0).map(i => createRef()), [items])

	const windowSize = useWindowSize()
	const device = useMediaQuery()

	const limit = useRef({
		top: 0,
		bottom: 0,
	})

	const calcLimit = () => {
		if (limit.current && listRef.current && mainRef.current && windowSize) {
			limit.current.top = listRef.current.offsetTop / mainRef.current.offsetHeight
			limit.current.bottom = (listRef.current.offsetTop + listRef.current.offsetHeight - windowSize.height / 2) / mainRef.current.offsetHeight
		}
	}

	useEffect(() => {
		if (device && limit.current && windowSize) {
			timeline.current = gsap.timeline({paused: true})
				.to({}, {duration: 1})
				// Backgrounds wrapper is hidden until scroll arrives to section -> to prevent conflict with other sections bg in the page
				.fromTo(bgWrapRef.current, {opacity: 0}, {duration: 0.05, opacity: 1}, 0)

			calcLimit()

			// Each step duration in the timeline (between 0 - 1)
			const step = Math.round(((limit.current.bottom - limit.current.top) / items.length) * 10000) / 10000
			const startOffset = step / 2

			items.map((item, index) => {
				// Calc timeline position of each step
				let position = limit.current.top + (step * index) + startOffset
				// Round it to 4 decimals
				position = Math.round(position * 10000) / 10000
				// const duration = (device === DESKTOP) ? step / 2 : step / 4
				const duration = step / 2
				const descrDelay = 0.01

				// Fade in current date background color (ignore 1st item)
				if (index !== 0) {
					timeline.current
						.fromTo(backgroundRefs[index].current, {opacity: 0}, {duration: duration, opacity: 1}, position)
				}

				if (device === DESKTOP) {
					// Hide previous current date (ignore on 1st item)
					if (index !== 0) {
						timeline.current
							.set(yearRefs[index - 1]?.current, {y: 0}, 0)
							.to(yearRefs[index - 1]?.current, {duration: duration, opacity: 0.3}, position)
							.to(descrRefs[index - 1]?.current, {duration: duration, opacity: 0, y: '-8rem', ease: 'power2.out'}, position)
					}

					timeline.current
						.set(yearRefs[index]?.current, {y: 0}, 0)
						.fromTo(yearRefs[index]?.current, {opacity: 0.3}, {duration: duration, opacity: 1}, position)
						.fromTo(descrRefs[index]?.current, {opacity: 0, y: '8rem'}, {duration: duration, opacity: 1, y: 0, ease: 'power2.out'}, position)

				// Tablet + Mobile
				} else {
					// Hide previous current date (ignore on 1st item)
					if (index !== 0) {
						timeline.current
							.fromTo(yearRefs[index - 1]?.current, {opacity: 1, y: 0}, {duration: duration, opacity: 0, y: '-10rem', ease: 'power2.out'}, position - 0.015)
							.fromTo(descrRefs[index - 1]?.current, {opacity: 1, y: 0}, {duration: duration, opacity: 0, y: '-10rem', ease: 'power2.out'}, position - 0.015 + descrDelay)
					}

					timeline.current
						.set([yearRefs[index]?.current, descrRefs[index]?.current], {opacity: 0}, 0)
						.fromTo(yearRefs[index]?.current, {opacity: 0, y: '10rem'}, {duration: duration, opacity: 1, y: 0, ease: 'power2.out'}, position)
						.fromTo(descrRefs[index]?.current, {opacity: 0, y: '10rem'}, {duration: duration, opacity: 1, y: 0, ease: 'power2.out'}, position + descrDelay)
				}

				return timeline
			})
			timeline.current.duration(1)
		}
	}, [device, limit, windowSize])

	return (
		<div ref={mainRef} className={styles.keyDates}>
			<TimelineSection timeline={timeline}>
				<div className={cn('container', styles.container)}>
					{title && <h2 className={cn('hm-2 hd-4', styles.title)}>{title}</h2>}

					<ul ref={listRef} className={styles.datesList}>
						{items.map((date, index) => (
							<li key={date._key} className={styles.date}>
								<p ref={yearRefs[index]} className={cn('hm-0 hd-0', styles.dateYear)}>{date.year}</p>
								<h3 ref={descrRefs[index]} className={cn('hm-3 hd-3', styles.dateDescr)}>{date.description}</h3>
							</li>
						))}
					</ul>
				</div>
			</TimelineSection>

			<div ref={bgWrapRef} className={cn(styles.backgroundWrap)}>
				{items.map((date, index) => (
					<Fragment key={date._key}>
						<CircleBackground ref={backgroundRefs[index]} className={styles.background} childClassName={styles.circle} colors={{bg: date.theme.bg, circle: date.theme.text}} />
					</Fragment>
				))}
			</div>
		</div>
	)
}

export default KeyDates
