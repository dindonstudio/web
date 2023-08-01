import Link from 'next/link'
import {forwardRef, useEffect, useRef} from 'react'
import Spinner from 'components/spinner/spinner'
import {cn} from 'utils/classnames'
import styles from './button.module.scss'
import {useRouter} from 'next/router'
import {resolveLink} from 'utils/resolveLink'
import rewritify from 'utils/rewritify'

export const ButtonVariant = {
	rounded: 'rounded',
	circle: 'circle',
	underlined: 'underlined',
}

const Button = ({
	children,
	label,
	variant,
	className,
	style,
	noStyle = false,
	noReset = false,
	noHover = false,
	id,
	onClick,
	onMouseOver = null,
	onMouseOut = null,
	link,
	as,
	href,
	rel,
	prefetch = false,
	scroll = true,
	target = null,
	inverted = false,
	transparent = false,
	hoverTransparent = false,
	disabled = null,
	type = 'button',
	enableLoader,
	loading,
	active = undefined,
	canActivate = false,
	activateClassName = null,
	onActivated = null,
	preventNextLink = false,
	...rest
}, ref) => {
	const router = useRouter()
	const _link = resolveLink(link)
	const _href = _link ? _link.href : href
	const _label = _link ? _link.label : label
	const variants = Array.isArray(variant) ? variant : [variant]
	const wasActive = useRef(false)
	const isActive = (active === true) || (active === undefined && canActivate && router.asPath.split('#')[0] === _href)

	const classNames = [
		styles.btn,
		...variants.map(v => styles[v]),
		isActive && styles.isActive,
		isActive && activateClassName,
		transparent && styles.transparent,
		inverted && styles.inverted,
		hoverTransparent && styles.hoverTransparent,
		loading && styles.isLoading,
		!noHover && styles.hover,
		className,
	]

	useEffect(() => {
		if (isActive !== wasActive.current) {
			if (isActive) onActivated?.()
			wasActive.current = isActive
		}
	}, [isActive, onActivated])

	let _children = children || _label
	_children = enableLoader ? (
		<>
			<span className={styles.children}>{_children}</span>
			<Spinner className={styles.spinner} />
		</>
	) : _children

	if (!_href || preventNextLink) {
		// => <button>
		const Tag = as || (preventNextLink ? 'a' : 'button')
		return (
			<Tag
				id={id}
				ref={ref}
				className={noStyle ? noReset ? cn(className) : cn(styles.btnReset, className) : noReset ? cn(classNames) : cn(styles.btnReset, classNames)}
				style={style}
				onClick={onClick}
				onMouseOver={onMouseOver}
				onMouseOut={onMouseOut}
				disabled={disabled}
				aria-label={_label}
				type={type}
				href={preventNextLink ? _href : null}
				{...rest}>
				{_children}
			</Tag>
		)
	}

	const _rel = rel || (_href && _href.indexOf('http') !== -1 ? 'noopener noreferrer' : null)
	const _target = target || (_href && (_href.indexOf('mailto:') === 0 || _href.indexOf('http') === 0)
		? '_blank'
		: undefined)

	// => <Link>
	return (
		<Link href={rewritify(_href)} scroll={scroll} prefetch={prefetch} {...rest}>
			<a
				id={id}
				ref={ref}
				className={cn(noStyle ? className : classNames)}
				style={style}
				onClick={onClick}
				onMouseOver={onMouseOver}
				onMouseOut={onMouseOut}
				rel={_rel}
				target={_target}>
				{_children}
			</a>
		</Link>
	)
}

export default forwardRef(Button)
