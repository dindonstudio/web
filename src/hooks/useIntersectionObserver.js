import {useEffect} from 'react'

const useIntersectionObserver = (ref, callback, options = {}, effectProps = []) => {
	useEffect(() => {
		const hasIOSupport = !!window.IntersectionObserver

		if (!hasIOSupport) return

		const observer = new IntersectionObserver(entries => {
			callback(entries[0])
		}, options)

		observer.observe(ref.current)

		return () => {
			observer.disconnect()
		}
	}, [ref, callback, options, ...effectProps])
}

export default useIntersectionObserver
