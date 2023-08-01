import {useEffect} from 'react'

const useResizeObserver = (ref, callback, effectProps = []) => {
	useEffect(() => {
		const resizeObserver = new ResizeObserver((entries) => {
			callback(entries[0])
		})

		resizeObserver.observe(ref.current)

		return () => {
			resizeObserver.disconnect()
		}
	}, [ref, callback, ...effectProps])
}

export default useResizeObserver
