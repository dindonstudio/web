import {useRouter} from 'next/router'
import {useEffect} from 'react'
import create from 'zustand'

let intersectionCallbacks = []
let resizeCallbacks = []
let resizeObserver
let path = ''

export const useStore = create(set => ({
	isLocked: false,
	setIsLocked: value => set(() => ({isLocked: value})),
	intersectionObserver: null,
	resizeObserver: null,
	enabled: true,
	setEnabled: value => set(() => ({
		enabled: value,
	})),
	addObserverCallback: cb => {
		intersectionCallbacks.push(cb)
	},
	removeObserverCallback: cb => {
		const indexToRemove = intersectionCallbacks.indexOf(cb)
		if (indexToRemove !== -1) {
			intersectionCallbacks = intersectionCallbacks.filter((slice, index) => index !== indexToRemove)
		}
	},
	addResizeCallback: cb => {
		resizeCallbacks.push(cb)
	},
	removeResizeCallback: cb => {
		const indexToRemove = resizeCallbacks.indexOf(cb)
		if (indexToRemove !== -1) {
			resizeCallbacks = resizeCallbacks.filter((slice, index) => index !== indexToRemove)
		}
	},
}))

const useScrollStore = (createState = null) => {
	const router = useRouter()
	useEffect(() => {
		if (!resizeObserver) {
			resizeObserver = new ResizeObserver((entries, observer) => {
				resizeCallbacks.forEach(cb => {
					cb(entries[0])
				})
			})
			resizeObserver.observe(document.body)
		}

		const currentIntersectionObserver = useStore.getState().intersectionObserver
		if (path !== router.asPath) {
			path = router.asPath
			if (currentIntersectionObserver) currentIntersectionObserver.disconnect()
			const intersectionObserver = new IntersectionObserver((entries, observer) => {
				intersectionCallbacks.forEach(cb => {
					cb(entries, observer)
				})
			})

			useStore.setState({intersectionObserver})
		}
	}, [])

	return createState ? useStore(createState) : useStore
}

export default useScrollStore
