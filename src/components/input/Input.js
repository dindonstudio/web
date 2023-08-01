import {cn} from 'utils/classnames'
import styles from './input.module.scss'

export const InputVariant = {
	regular: 'regular',
	float: 'float',
}

const Input = ({type, name, className = null, children = null, inputClassName = null, placeholder = null, label = null, required = false, variant = InputVariant.regular, inputRef = null, ...rest}) => {
	return (
		<div className={cn(styles.wrapper, className, styles[variant], label && styles.hasLabel)}>
			<input
				className={cn('pm-13', styles.input, inputClassName)}
				type={type}
				name={name}
				id={name}
				placeholder={placeholder}
				required={required}
				ref={inputRef}
				{...rest} />
			{label && <label htmlFor={name} className={cn('pm-13', styles.label)}>{label}</label>}
			{required && <span className={cn('pm-10', styles.required)}>Required field*</span>}
			{children}
		</div>
	)
}

export default Input
