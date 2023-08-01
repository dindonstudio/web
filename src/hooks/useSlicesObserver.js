import {useState, useEffect, useRef} from 'react'
import useSlicesStore from 'stores/useSlicesStore'
import debounce from 'utils/debounce'
import useDebouncedCallback from './useDebouncedCallback'
import useWindowResize from './useWindowResize'

const useSlicesObserver = ref => {
	const [isLight, setIsLight] = useState(false)
	const intersectionObserver = useRef(null)
	const slices = useRef(useSlicesStore.getState().slices)
	const intersectedSlices = useRef([])
	const innerWidth = useRef(0)
	const refBoundingClientRect = useRef(null)

	useEffect(() => useSlicesStore.subscribe(debounce(
		state => {
			intersectionObserver.current.disconnect()
			slices.current = state.slices
			state.slices.forEach((slice) => {
				intersectionObserver.current.observe(slice)
			})
		}, 0,
	)), [])

	useEffect(() => {
		return () => {
			if (intersectionObserver.current) {
				intersectionObserver.current.disconnect()
			}
		}
	}, [])

	useWindowResize(e => {
		if (intersectionObserver.current) intersectionObserver.current.disconnect()
		if (!ref.current) return

		if(e.innerWidth !== innerWidth.current) {
			refBoundingClientRect.current = ref.current.getBoundingClientRect()
		}

		innerWidth.current = e.innerWidth

		const height = refBoundingClientRect.current.height
		const top = refBoundingClientRect.current.top
		const rootMargin = `${Math.round(-top - height / 2)}px -50% ${Math.round(top + height / 2 - e.innerHeight + 1)}px -50%`
		intersectionObserver.current = new IntersectionObserver(handleIntersect, {rootMargin})
		slices.current.forEach(slice => {
			intersectionObserver.current.observe(slice)
		})
	}, true, [], 30)

	const debouncedIntersect = useDebouncedCallback(() => {
		let isDark = true
		intersectedSlices.current.forEach(slice => {
			isDark = false//slice.__isDark
		})
		setIsLight(!isDark)
	}, 30, [])

	const handleIntersect = (entries, observer) => {
		entries.forEach(entry => {
			const index = intersectedSlices.current.indexOf(entry.target)
			if (entry.isIntersecting && index === -1) {
				intersectedSlices.current.push(entry.target)
			} else if (!entry.isIntersecting && index !== -1) {
				intersectedSlices.current.splice(index, 1)
			}
		})

		debouncedIntersect()
	}

	return [isLight]
}

export default useSlicesObserver
