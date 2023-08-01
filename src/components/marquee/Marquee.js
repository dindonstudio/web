import cn from 'classnames'
import {imageBuilder} from 'lib/sanityImage'
import {forwardRef, memo} from 'react'
import styles from './marquee.module.scss'

const Instance = memo(({className = null, items, imageWidth = 200}) => (
	items.map(item => {
		const [width, height] = item.asset._ref.split('-')[2]?.split('x')
		return (
			<div className={className} key={item._key}>
				<img loading='lazy' src={imageBuilder.image(item).auto('format').width(imageWidth).url()} width={width} height={height} alt={item.alt} />
				{/* <SanityImage image={item} alt={item.alt} mobileWidth={150} desktopWidth={200} layout='responsive' className={styles.image}/> */}
			</div>
		)
	})
))

const Marquee = ({items, className = null, renderCount = 4, perItemDuration = 4, itemClassName = null, renderItems = null, leftToRight = false, withGradients = true, imageWidth}, ref) => {
	if (!items) {
		console.warn('items must be defined')
		return null
	}
	return (
		<div className={cn(styles.marquee, withGradients && styles.withGradients, className)} ref={ref}>
			<div
				className={cn(styles.wrapper, leftToRight && styles.inverted)}
				style={{animationDuration: items.length * perItemDuration + 's'}}>
				{Array.from(Array(renderCount)).map((item, i) => (
					renderItems ?
						renderItems(items, i) :
						<Instance key={i} className={itemClassName} items={items} imageWidth={imageWidth} />
				))}
			</div>
		</div>
	)
}

export default forwardRef(Marquee)
