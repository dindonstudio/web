import {cn} from 'utils/classnames'
import Button, {ButtonVariant} from 'components/button/Button'
import styles from './navPanel.module.scss'

const NavPanel = ({className = null, links, login, demo, onClickLink, isOpen}) => {
	return (
		<nav className={cn('mobile-only', styles.navPanel, className, isOpen && styles.isOpen)}>
			<div className={styles.wrapper}>
				<ul>
					{links?.map(link => (
						<li key={link._key}>
							<Button
								link={link}
								variant={ButtonVariant.underlined}
								className={cn('hm-3', styles.primaryLink)}
								activateClassName={cn(styles.primaryLinkActive)}
								canActivate
								onClick={onClickLink} />
						</li>
					))}
				</ul>
				<div className={styles.bottom}>
					{login && <Button
						link={login}
						variant={ButtonVariant.rounded}
						transparent
						className={cn('pd-13 hm-4', styles.login)}
						onClick={onClickLink} />}
				</div>
			</div>
		</nav>
	)
}

export default NavPanel
