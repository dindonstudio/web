import {cn} from 'utils/classnames'
import styles from './customLink.module.scss'
import Button from 'components/button/Button'

const CustomLink = ({
	children = null,
	label = null,
	className = null,
	noStyle = true,
	...rest
}) => {
	return (
		<Button noStyle={noStyle} className={cn(styles.classic, className)} {...rest}>
			{children || label}
		</Button>
	)
}

export default CustomLink
