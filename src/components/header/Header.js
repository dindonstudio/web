import {useRef, useState} from 'react'
import styles from './header.module.scss'
import Nav, {headerTheme} from 'components/nav/Nav'
import NavPanel from 'components/navPanel/NavPanel'
import useScrollStore from 'stores/useScrollStore'
import useSlicesObserver from 'hooks/useSlicesObserver'
import useWindowScroll from 'hooks/useWindowScroll'
import {cn} from 'utils/classnames'

const Header = ({links, login, demo}) => {
	const navRef = useRef(null)
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const setIsLocked = useScrollStore((state) => state.setIsLocked)
	const [isLight] = useSlicesObserver(navRef)
	const [hasBackground, setHasBackground] = useState(false)

	const handleClickBurger = () => {
		setIsMenuOpen(!isMenuOpen)
		setIsLocked(!isMenuOpen)
	}

	const handleClickLink = () => {
		setIsMenuOpen(false)
		setIsLocked(false)
	}

	useWindowScroll((e) => {
		if (e.scrollY > 200 && !hasBackground) {
			setHasBackground(true)
		} else if (e.scrollY <= 200 && hasBackground) {
			setHasBackground(false)
		}
	}, false, [hasBackground])

	return (
		<div className={cn(styles.header, hasBackground && styles.hasBackground)}>
			<Nav links={links} login={login} demo={demo} theme={headerTheme.light} onClickBurger={handleClickBurger} onClickLink={handleClickLink} isOpen={isMenuOpen} isHidden={isLight} ref={navRef} hasBackground={hasBackground} />
			<Nav links={links} login={login} demo={demo} theme={headerTheme.dark} onClickBurger={handleClickBurger} onClickLink={handleClickLink} isOpen={isMenuOpen} isHidden={!isLight} isAbsolute hasBackground={hasBackground} />
			<NavPanel links={links} login={login} demo={demo} onClickLink={handleClickLink} isOpen={isMenuOpen} />
		</div>
	)
}

export default Header
