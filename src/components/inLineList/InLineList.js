import cn from 'classnames'
import styles from './inLineList.module.scss'

const InLineList = ({
	children,
	className = null,
	narrow = false,
	mobileFullWidth = false,
	mobileCentered = false,
	desktopCentered = false,
}) => {
	return (
		<div className={cn(styles.inLineList, className)}>
			<div className={cn(
				styles.inLineListWrapper,
				narrow && styles.narrow,
				mobileFullWidth && styles.mobileFullWidth,
				mobileCentered && styles.mobileCentered,
				desktopCentered && styles.desktopCentered,
			)}>
				{children}
			</div>
		</div>
	)
}

export default InLineList
