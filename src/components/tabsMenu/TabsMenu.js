import cn from 'classnames'
import styles from './tabsMenu.module.scss'
import Button, {ButtonVariant} from 'components/button/Button'
import {useRouter} from 'next/router'
import {animated, useSpring} from 'react-spring'
import {useEffect, useRef, useState} from 'react'
import useResizeObserver from 'hooks/useResizeObserver'
import {resolveLink} from 'utils/resolveLink'

const TabsMenu = ({className = null, links}) => {
	const router = useRouter()
	const ref = useRef(undefined)
	const refs = useRef({})
	const [currentTab, setCurrentTab] = useState(undefined)
	const [currentTabPos, setCurrentTabPos] = useState(undefined)

	const spring = useSpring(currentTabPos)

	useEffect(() => {
		setCurrentTab(links.findIndex(link => resolveLink(link).href === router.asPath))
	}, [links, router.asPath])

	useResizeObserver(ref, () => {
		if (currentTab !== undefined) {
			const el = refs.current[currentTab]
			setCurrentTabPos(curr => (el ? {x: el.offsetLeft, width: el.offsetWidth, immediate: curr === undefined} : undefined))
		}
	}, [currentTab, setCurrentTabPos])

	return (
		<div className={cn(styles.tabsMenu, className)}>
			<nav ref={ref}>
				<animated.div className={styles.navBg} style={spring} />
				{links?.map((link, i) => (
					<Button
						ref={(ref) => { refs.current[i] = ref }}
						variant={ButtonVariant.tab}
						key={link._key}
						link={link}
						scroll={false}
						active={i === currentTab}
						canActivate
						onClick={() => setCurrentTab(i)}>
						{link.label}
					</Button>
				))}
			</nav>
		</div>
	)
}

export default TabsMenu
