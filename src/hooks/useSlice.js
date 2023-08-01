import {useEffect} from 'react'
import shallow from 'zustand/shallow'
import useSlicesStore from 'stores/useSlicesStore'

const useSlice = (ref) => {
	const [addSlice, removeSlice] = useSlicesStore(state => [state.addSlice, state.removeSlice], shallow)

	useEffect(() => {
		const localRef = ref?.current
		if (localRef) {
			addSlice(localRef)

			return () => {
				removeSlice(localRef)
			}
		}
	}, [ref, addSlice, removeSlice])
}

export default useSlice
