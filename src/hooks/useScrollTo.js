import {useSpring} from '@react-spring/web'
import {useCallback} from 'react'

export default (config = {mass: 1, tension: 150, friction: 20}) => {
	const [, api] = useSpring(() => ({y: 0}))

	let isStopped = false
	const handleWheel = () => {
		isStopped = true
		window.removeEventListener('wheel', handleWheel)
	}

	const scrollTo = (value = null, offset = 0, onRest = null) => {
		let y = 0

		if (typeof value === 'number') {
			y = value
		} else if (typeof value === 'string' || value?.nodeType === 1) {
			if (typeof value === 'string') {
				value = document.querySelector(value)
			}
			if (!value) {
				console.error('Scroll to element not found')
			} else {
				y = window.scrollY + value.getBoundingClientRect().top
			}
		}

		y += offset

		window.removeEventListener('wheel', handleWheel)
		window.addEventListener('wheel', handleWheel)

		api.start({
			y,
			reset: true,
			from: {y: window.scrollY},
			config,
			onRest: () => {
				isStopped = false
				window.removeEventListener('wheel', handleWheel)
				if(onRest) onRest()
			},
			onChange: (_, ctrl) => {
				if (!isStopped) {
					window.scroll(0, ctrl.get().y)
				}
			},
		})
	}

	return scrollTo
}
