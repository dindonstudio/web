/* eslint-disable react/no-array-index-key */
import {animated, useSprings} from '@react-spring/web'
import {Fragment, useEffect, useRef} from 'react'
import {useInView} from 'react-intersection-observer'
import {cn} from 'utils/classnames'
import styles from './DigitTumbler.module.scss'

const DigitsList = ({style}) => {
	return (
		<div className={styles.digitsList}>
			<animated.div className={styles.digits} style={style}>
				{new Array(10).fill(null).map((e, i) => <span key={`digit${i}`} className={styles.digit}>{i}</span>)}
			</animated.div>
		</div>
	)
}

const DigitTumbler = ({digits, children = null, className = null}) => {
	const [inViewRef, inView] = useInView()
	const fund = useRef(26736)
	const interval = useRef(null)

	const [springs, api] = useSprings(digits, () => ({
		transform: 'translate3d(0,0,0)',
		// from: {
		// 	transform: 'translate3d(0,0,0)',
		// },
		config: {mass: 1, tension: 680, friction: 48},
	}))

	useEffect(() => {
		api.start(index => {
			return {transform: `translate3d(0,0%,0)`}
		})
	}, [])

	useEffect(() => {
		const tick = (now = false) => {
			if (fund.current > Math.pow(10, digits) * 9) fund.current = 0
			fund.current += Math.pow(10, digits / 2) + Math.random() * Math.pow(10, digits / 2 - 1)

			const stringValue = String(fund.current | 0)
			api.start(index => {
				const i = index + stringValue.length - digits
				return {transform: `translate3d(0,${i >= 0 ? -stringValue[i] * 10 : 0}%,0)`, immediate: now}
			})
			// api.start(index => {
			// 	const i = index + stringValue.length - digits
			// 	console.log('DigitTumbler.js', i)
			// 	return {transform: `translate3d(0,${i >= 0 ? -stringValue[i] * 10 : 0}%,0)`}
			// }, config: {immediate: true})
		}

		tick(true)

		if (inView) {
			interval.current = setInterval(tick, 250)
		}

		return () => {
			clearInterval(interval.current)
		}
	}, [inView])

	return (
		<span ref={inViewRef} className={cn(styles.digitTumbler, className)}>
			{children}
			{springs.map((s, i) => (
				<Fragment key={`digits${i}`}>
					<DigitsList style={s} />
				</Fragment>
			))}
		</span>
	)
}

export default DigitTumbler
