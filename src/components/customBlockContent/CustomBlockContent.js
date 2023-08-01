import React, {forwardRef} from 'react'
import BlockContent from '@sanity/block-content-to-react'
import styles from './customBlockContent.module.scss'
import CustomLink from 'components/customLink/customLink'
import {SanityImage} from 'components/image/Image'
import cn from 'classnames'
import {slugify} from 'utils/string'

export const normalStyle = 'pd-16 pm-16'
export const hnToStyle = {
	h2: 'hd-5-bold upper',
	h3: 'hd-7',
}

export const findAnchors = (blockContent, styles = ['h3', 'h4']) =>
	blockContent?.reduce((acc, block) => {
		if (styles.includes(block.style) && block.children[0].text.trim() !== '') {
			return [...acc, {
				_key: block._key,
				level: block.style,
				label: block.children[0].text,
				slug: slugify(block.children[0].text),
			}]
		}
		return acc
	}, [])

const BlockRenderer = options => props => {
	const {style = 'normal'} = props.node
	if (options.noDom) {
		return props.children
	} else if (/^h\d/.test(style)) {
		// headings
		// const level = style.replace(/[^\d]/g, '')
		return React.createElement(style, {id: slugify(props.children), className: cn(hnToStyle[style], styles[style])}, props.children)
	} else if (style === 'blockquote') {
		// blockquotes
		return <blockquote className={cn(styles.blockquote)}>{props.children}</blockquote>
	} else if (style === 'normal') {
		// paragraphs
		const cns = options.normalStyle === undefined
			? cn(normalStyle, styles.p)
			: cn(options.normalStyle, styles.p)
		return <p className={cns}>{props.children}</p>
	} else {
		return <p className={cn(style, styles.p)}>{props.children}</p>
	}
	// return BlockContent.defaultSerializers.types.block(props)
}

const ImageAltRenderer = ({node}) => {
	return <SanityImage className={styles.image} image={node} alt={node.alt} />
}

const List = ({children, type, level}) => {
	return (
		<ul className={cn(normalStyle, styles.list, styles[`list-${type}`])}>
			{children}
		</ul>
	)
}

const serializers = (options = {}) => ({
	types: {
		block: BlockRenderer(options),
		imageAlt: ImageAltRenderer,
	},
	list: List,
	marks: {
		sup: ({mark, children}) => {
			return <sup className={styles.sup}>{children}</sup>
		},
		u: ({mark, children}) => {
			return <u>{children}</u>
		},
		link: ({mark, children}) => {
			if (mark?.href) {
				return <CustomLink className={cn(options?.linkStyle)} link={mark?.href}>{children}</CustomLink>
			} else {
				return <span>{children}</span>
			}
		},
	},
})

const CustomBlockContent = ({blocks, className = null, style = null, options = null, as = null, noDom = false}, ref) => {
	if (!blocks) return null
	const Tag = as || (Array.isArray(blocks) ? 'div' : 'p')
	return (
		<>
			{Array.isArray(blocks) ? (
				<Tag ref={ref} className={className} style={style}>
					<BlockContent blocks={blocks} serializers={serializers({...options, noDom})} />
				</Tag>
			) : (
				<Tag ref={ref} style={style} className={cn(className, options?.normalStyle === false ? undefined : (options?.normalStyle || normalStyle))}>
					{blocks}
				</Tag>
			)}
		</>
	)
}

export default forwardRef(CustomBlockContent)
