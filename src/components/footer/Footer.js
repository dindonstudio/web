import {useRef} from 'react'
import useLocale from 'hooks/useLocale'
import Link from 'next/link'
import {cn} from 'utils/classnames'
import styles from './footer.module.scss'
import Logo from '../../svgs/logo.svg'
import Button, {ButtonVariant} from 'components/button/Button'
import SmoothScroll from 'components/smoothScroll/SmoothScroll'
import useSlice from 'hooks/useSlice'
import Usetracker from 'hooks/useTracker';

const Footer = (props) => {
	const {slogan = null, mainLinks, secondaryLinks, socialLinks} = props
	const locale = useLocale()
	const year = useRef(new Date().getFullYear())

	const ref = useRef(null)
	useSlice(ref)

	const logoLink = (
		<Link href='/'>
			<a className={styles.logo} title={locale('Back to home')}>
				<Logo />
			</a>
		</Link>
	)

	return (
		<SmoothScroll ref={ref} as='footer' className={styles.footerWrap} childClassName={styles.footer}>
			<div className={cn(styles.container, 'container')}>
				<div className={styles.top}>
					{logoLink}
					{slogan && (
						<p className={cn('pm-16 pd-16', styles.slogan)}>
							{slogan}<sup>©</sup>
						</p>
					)}
				</div>

				<div className={styles.content}>
					<nav className={styles.nav}>
						{mainLinks && (
							<ul className={styles.mainLinks}>
								{mainLinks.map((link) => (
									<li key={link._key}>
										<Button
											className={styles.link}
											variant={ButtonVariant.underlined}
											link={link}>
											{link.label}
										</Button>
									</li>
								))}
							</ul>
						)}

						{secondaryLinks && (
							<ul className={styles.secondaryLinks}>
								{secondaryLinks.map((link) => (
									<li key={link._key}>
										<Button
											className={styles.link}
											variant={ButtonVariant.underlined}
											link={link}
											active={link.url?.includes('mailto')}>
											{link.label}
										</Button>
									</li>
								))}
							</ul>
						)}

						{socialLinks && (
							<ul className={styles.socialLinks}>
								{socialLinks.map((social) => (
									<li key={social._key}>
										<Button
											className={styles.link}
											variant={ButtonVariant.underlined}
											href={social.url}>
											{social.label}
										</Button>
									</li>
								))}
							</ul>
						)}
					</nav>

					<p className={cn('p', styles.bottom)}>
						<span className={styles.copyright}>Edda - {year.current} - All rights reserved</span>
					</p>
				</div>

			</div>
			<Usetracker />
		</SmoothScroll>
	)
}

export default Footer
