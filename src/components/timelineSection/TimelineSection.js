import cn from 'classnames'
import SmoothScroll from 'components/smoothScroll/SmoothScroll'
import {forwardRef, useRef} from 'react'
import styles from './timelineSection.module.scss'

const TimelineSection = ({children, timeline, as = 'section', className = null, childClassName = null, isTop = false, onScroll = null, childRef = null}, ref) => {
	const percentRef = useRef(0)

	const handleScroll = ({percent, percentTop}) => {
		if (timeline?.current) {
			const p = Math.min(1, Math.max(0, isTop ? percentTop : percent))
			if (percentRef.current !== p) timeline.current.progress(p)
			percentRef.current = p
		}
		if (onScroll) onScroll({percent, percentTop})
	}

	return (
		<SmoothScroll
			ref={ref}
			childRef={childRef}
			as={as}
			className={className}
			childClassName={cn(styles.timelineSection, childClassName)}
			onScroll={handleScroll}>
			{children}
		</SmoothScroll>
	)
}

export default forwardRef(TimelineSection)
