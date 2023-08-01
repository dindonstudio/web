import create from 'zustand'

const useSlicesStore = create(set => ({
	slices: [],
	addSlice: ref => set(state => ({
		slices: state.slices.concat(ref),
	})),
	removeSlice: ref => set(state => {
		const indexToRemove = state.slices.indexOf(ref)

		if (indexToRemove !== -1) {
			const slices = state.slices.filter((slice, index) => index !== indexToRemove)
			return {slices}
		}

		return {slices: state.slices}
	}),
}))

export default useSlicesStore
