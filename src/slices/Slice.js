import cn from 'classnames'
import {forwardRef} from 'react'
import styles from './slice.module.scss'

const Slice = ({
	children = null,
	className = null,
	style = {},
	bgColor = null,
	Tag = 'section',
	withPadding = false,
	withMargin = false,
	withFullWidth = false,
}, ref) => {
	return (
		<Tag
			ref={ref}
			className={cn(
				styles.slice,
				withPadding && !withFullWidth && styles.withPadding,
				withMargin && styles.withMargin,
				withFullWidth && styles.withFullWidth,
				className,
			)}
			style={bgColor ? {...style, backgroundColor: bgColor} : style}>
			{withFullWidth ? (
				<div className={cn('container', withPadding && styles.withPadding)}>
					{children}
				</div>
			) : children}
		</Tag>
	)
}

export default forwardRef(Slice)
