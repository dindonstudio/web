import {cn} from 'utils/classnames'
import styles from './dateComp.module.scss'

const DateComp = ({children, className = null}) => {
	return (
		<time dateTime={children} className={cn(styles.dateComp, className)}>
			{new Date(children).toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}
		</time>
	)
}

export default DateComp
