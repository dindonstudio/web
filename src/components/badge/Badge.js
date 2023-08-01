import cn from 'classnames'
import {colors} from '@config/variables'
import styles from './badge.module.scss'

const Badge = ({Tag = 'div', className = null, children = null, label = null, color = colors.black}) => {
	return (
		<Tag className={cn('pm-13-bold upper', styles.badge, className)} style={{color: color.hex, backgroundColor: color.rgba(0.15)}}>
			{children || label}
		</Tag>
	)
}

export default Badge
