import cn from 'classnames'
import styles from './circleBackground.module.scss'
import {forwardRef} from 'react'
import Parallax, {ORIGIN} from 'components/parallax/Parallax'
import {getEasing} from 'components/smoothScroll/SmoothScroll'

const Circle = ({circleRef, className = null, colors}) => (
	<div ref={circleRef} className={cn(className, styles.circle)} style={colors?.circle ? {background: `radial-gradient(${colors?.circle} 30%, ${colors?.circle}00 70%)`} : null} />
)

const CircleBackground = ({
	circleRef = null,
	className = null,
	childClassName = null,
	style = {},
	colors = {bg: '#000', circle: '#fff'},
	fixed = true,
	noCircle = false,
	overflowVisible = false,
	parallax = 0,
}, ref) => {
	return (
		<div
			ref={ref}
			className={cn(className, styles.background, fixed && styles.fixed, overflowVisible && styles.overflowVisible, className)}
			style={{...style, background: colors?.bg}} aria-hidden>
			{!noCircle && (
				(parallax ? (
					<Parallax z={parallax} ease={getEasing()} origin={ORIGIN.center} className={cn(styles.circleWrapper, childClassName)}>
						<Circle circleRef={circleRef} colors={colors} />
					</Parallax>
				) : (
					<Circle circleRef={circleRef} colors={colors} className={cn(styles.circleWrapper, childClassName)} />
				))
			)}
		</div>
	)
}

export default forwardRef(CircleBackground)
