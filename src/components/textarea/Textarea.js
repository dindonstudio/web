import styles from './textarea.module.scss'
import cn from 'classnames'
import {forwardRef} from 'react'

export const TextareaVariant = {
	regular: 'regular',
	float: 'float',
}

const Textarea = ({name, placeholder = null, maxLength = null, className = null, textareaClassName = null, onChange = null, label = null, variant = TextareaVariant.regular, required = false}, ref) => {
	return (
		<div className={cn(styles.wrapper, className, styles[variant], label && styles.hasLabel)}>
			<textarea
				ref={ref}
				name={name}
				className={cn('pm-13', styles.textarea, textareaClassName)}
				maxLength={maxLength}
				placeholder={placeholder}
				required={required}
				onChange={onChange} />
			{label && (
				<label htmlFor={name} className={cn('pm-13', styles.label)}>{label}</label>
			)}
			{required && <span className={cn('pm-10', styles.required)}>Required field*</span>}
		</div>
	)
}

export default forwardRef(Textarea)
