import cn from 'classnames'
import styles from './ellipseClip.module.scss'
import {forwardRef} from 'react'

const EllipseClip = ({children, className}, ref) => {
	return (
		<div ref={ref} className={cn(className, styles.ellipseClip)}>
			{children}
		</div>
	)
}

export default forwardRef(EllipseClip)
