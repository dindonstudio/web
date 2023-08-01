import Link from 'next/link'
import {cn} from 'utils/classnames'
import Button, {ButtonVariant} from 'components/button/Button'
import Logo from '../../svgs/logo.svg'
import Close from '../../svgs/close.svg'
import Arrow from '../../svgs/arrowCta.svg'
import styles from './nav.module.scss'
import useLocale from 'hooks/useLocale'
import {forwardRef, useCallback, useEffect, useRef, useState} from 'react'

export const headerTheme = {
	light: 'light',
	dark: 'dark',
}

const Nav = ({className = null, links, login, demo, theme = headerTheme.light, onClickBurger, onClickLink, isOpen = false, isHidden = true, isAbsolute = false, hasBackground = false}, ref) => {
	const locale = useLocale()
	const x = 2;
	const localRef = useRef(null)
	const [isDisplayed, setIsDisplayed] = useState(false)

	const setRefs = useCallback((element) => {
		if (ref)ref.current = element
		localRef.current = element
	}, [])

	useEffect(() => {
		setIsDisplayed(true)
	}, [])

	const delay = 0.03

	return (
		<nav
			ref={setRefs} className={cn(styles.nav,
				className,
				styles[theme],
				isOpen && styles.isOpen,
				isHidden && styles.isHidden,
				isDisplayed && styles.isDisplayed,
				isAbsolute && styles.isAbsolute,
				hasBackground && styles.hasBackground)}>
			<div className={cn('container', styles.wrapper)}>
				<div className={styles.left}>
					<div className={styles.element}>
						<Button
							variant={ButtonVariant.circle}
							className={cn('mobile-only', styles.button, styles.burger, isOpen && styles.isOpen)}
							label={locale('Toggle menu')}
							onClick={onClickBurger}>
							<Close className={styles.close} />
							<span className={styles.line} />
							<span className={styles.line} />
							<span className={styles.line} />
						</Button>
					</div>
					<div className={styles.element} style={{'--delay': `${delay}s`, '--delay-mobile': `${0.1}s`}}>
						<Link href='/'>
							<a className={styles.logo} title={locale('Back to home')} onClick={onClickLink}>
								<Logo />
							</a>
						</Link>
					</div>
				</div>
				<div className={cn('desktop-only', styles.primaryLinks)}>
					{links?.map((link, i) => (
						<Button
							key={link._key}
							link={link}
							variant={ButtonVariant.underlined}
							className={cn('pd-13 hm-4', styles.primaryLink, styles.element)}
							activateClassName={cn(styles.primaryLinkActive)}
							canActivate
							style={{'--delay': `${(i + 2) * delay}s`}}
							onClick={onClickLink} />
					))}
				</div>
				<div className={styles.right}>
					<div className={cn(styles.primaryLink, styles.element)} style={{'--delay': `${(links.length + 2) * delay}s`}}>
						<Button
							link={login}
							variant={ButtonVariant.underlined}
							className={cn('pd-13 hm-4 desktop-only')}
							onClick={onClickLink} />
					</div>
					<div className={cn(styles.element)} style={{'--delay': `${(links.length + 3) * delay}s`, '--delay-mobile': `${0.2}s`}}>
						<Button
							link={demo}
							variant={ButtonVariant.rounded}
							className={cn('pd-13 pm-13', styles.demo, styles.button)}
							onClick={onClickLink}>
							<Arrow className='desktop-only' /> {demo.label}
						</Button>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default forwardRef(Nav)
