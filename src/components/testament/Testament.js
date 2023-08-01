import cn from 'classnames'
import {SanityImage} from 'components/image/Image'
import styles from './testament.module.scss'

export const testamentTheme = {
	dark: 'dark',
	light: 'light',
}

const Testament = ({testament, signature, profilePicture, className = null, theme = testamentTheme.light}) => {
	return (
		<div className={cn(styles.testament, styles[theme], className)}>
			{profilePicture && <SanityImage image={profilePicture} desktopWidth={50} mobileWidth={50} ratio={1} className={styles.profilePicture} />}
			{testament && <p className={cn('pm-13', styles.text)}>{testament}</p>}
			{signature && <span className={cn('pm-11', styles.signature)}>{signature}</span>}
			<div className={styles.background} />
		</div>
	)
}

export default Testament
