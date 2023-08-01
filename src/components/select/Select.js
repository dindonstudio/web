import {useRef, useState, useEffect, forwardRef} from 'react'
import cn from 'classnames'
import Arrow from '../../svgs/arrow.svg'
import styles from './select.module.scss'

export const SelectVariants = {
	small: 'small',
	medium: 'medium',
	large: 'large',
}

const Select = ({
	name,
	options,
	placeholder = null,
	required = false,
	className = null,
	label = null,
	onChange = null,
	defaultValue = null,
	variant = SelectVariants.medium,
}, ref) => {
	const selectRef = useRef(null)
	const valueRef = useRef(null)

	const [selected, setSelected] = useState(null)
	const [title, setTitle] = useState(placeholder || options[0].name)

	useEffect(() => {
		if (selected) {
			setTitle(selectRef.current.options[selectRef.current.options.selectedIndex].textContent)
		}
	}, [selected, onChange])

	useEffect(() => {
		if (selectRef.current.form) selectRef.current.form.addEventListener('reset', handleResetForm)

		return () => {
			if (selectRef.current && selectRef.current.form) selectRef.current.form.removeEventListener('reset', handleResetForm)
		}
	}, [])

	const handleResetForm = () => {
		valueRef.current.textContent = selectRef.current.options[0].textContent
		setSelected(null)
	}

	const handleChange = (e) => {
		setSelected(selectRef.current.value)

		if (onChange) {
			onChange(e)
			// onChange(selectRef.current.options.selectedIndex)
		}
	}

	return (
		<div className={cn('pm-13', styles.select, selected && styles.isSelected, styles[variant], className, label && styles.hasLabel)} ref={ref}>
			{label && <label htmlFor={name} className={cn('pm-13', styles.label)}>{label}</label>}
			<div className={styles.wrapper}>
				<select ref={selectRef} name={name} required={required} onChange={handleChange} aria-label={label || placeholder} defaultValue={defaultValue}>
					{placeholder && <option disabled value='none'>{placeholder}</option>}
					{options && options.map((e, i) => <option key={i} value={e.value} disabled={e.disabled} selected={e.selected}>{e.name}</option>)}
				</select>
				<span className={styles.value} ref={valueRef}>
					{title}
					<Arrow />
				</span>
			</div>
		</div>
	)
}

export default forwardRef(Select)
