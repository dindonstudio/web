import create from 'zustand'
import {useStore as useScrollStore} from './useScrollStore'

const useMenuStore = create(set => ({
	isMenuOpen: false,
	setIsMenuOpen: value => set(state => {
		useScrollStore.setState({isLocked: value || state.isSearchOpen})
		return ({isMenuOpen: value})
	}),

	isSearchOpen: false,
	setIsSearchOpen: value => set(state => {
		useScrollStore.setState({isLocked: value || state.isMenuOpen})
		return ({isSearchOpen: value})
	}),
}))

export default useMenuStore
