import {forwardRef} from 'react'
import styles from './checkbox.module.scss'
import cn from 'classnames'
import CheckSVG from '../../svgs/check.svg'

const Checkbox = ({name, value = 'false', children = null, onChange = null, className = null, required = false}, ref) => {
	return (
		<div className={styles.checkbox}>
			<input type='checkbox' id={name} name={name} value={value} ref={ref} onChange={onChange} className={styles.input} required={required} />
			<label htmlFor={name} className={cn('pm-13', styles.label, className)}>
				<span className={styles.box}><CheckSVG /></span>
				<span>{children}</span>
			</label>
		</div>
	)
}

export default forwardRef(Checkbox)
