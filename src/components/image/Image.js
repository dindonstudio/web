// @ts-nocheck
import {imageBuilder} from 'lib/sanityImage'
import NextImage from 'next/image'
import {
	forwardRef,
	useCallback,
	useRef,
	useState,
} from 'react'
import {
	cn,
} from 'utils/classnames'
import styles from './image.module.scss'

const mobileMockupWidth = 375
const desktopMockupWidth = 1440
const mobileMaxWidth = 844
const emptyImage = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='

const Image = forwardRef(({
	src,
	width,
	height,
	mobileWidth = mobileMockupWidth,
	desktopWidth = desktopMockupWidth,
	alt = '',
	layout = 'responsive',
	className = null,
	as = null,
	style = null,
	objectFit = null,
	loader = undefined,
	mobileOnly = false,
	desktopOnly = false,
	priority = false,
}, ref) => {
	const localRef = useRef()
	const [isLoaded, setIsLoaded] = useState(false)

	const setRefs = useCallback((node) => {
		localRef.current = node
		if (ref) ref.current = node
	}, [])

	const sizes = `${!mobileOnly
		? `(min-width: ${mobileMaxWidth}px) ${Math.round(desktopWidth * 100 / desktopMockupWidth)}vw`
		: `(max-width: ${mobileMaxWidth - 1}px) ${Math.round(mobileWidth * 100 / mobileMockupWidth)}vw`}${!desktopOnly && !mobileOnly
			? `,${Math.round(mobileWidth * 100 / mobileMockupWidth)}vw`
			: ',0vw'}`
	const Tag = as || 'div'

	const onLoad = () => {
		if (localRef.current) setIsLoaded(true)
	}

	return (
		<Tag ref={setRefs} className={cn(mobileOnly && 'mobile-only', desktopOnly && 'desktop-only', styles.image, isLoaded && styles.isLoaded, className)} style={style}>
			<NextImage
				onLoadingComplete={onLoad}
				src={src}
				alt={alt}
				layout={layout}
				objectFit={objectFit}
				sizes={['fill', 'responsive'].includes(layout) ? sizes : undefined}
				width={layout !== 'fill' && width}
				height={layout !== 'fill' && height}
				loader={loader}
				priority={priority}
				lazyBoundary='50%' />
		</Tag>
	)
})

export const LocalImage = ({
	image,
	mobileWidth = mobileMockupWidth,
	desktopWidth = desktopMockupWidth,
	alt = '',
	layout = 'responsive',
	className = null,
	as = null,
	style = null,
	objectFit = null,
	priority = false,
	mobileOnly = false,
	desktopOnly = false,
}) => {
	return (
		<Image
			src={image.src}
			width={image.width}
			height={image.height}
			mobileWidth={mobileWidth}
			desktopWidth={desktopWidth}
			mobileOnly={mobileOnly}
			desktopOnly={desktopOnly}
			as={as}
			layout={layout}
			className={className}
			style={style}
			objectFit={objectFit}
			priority={priority}
			alt={alt} />
	)
}

export const SanityImage = forwardRef(({
	image,
	ratio = null,
	alt = '',
	mobileWidth = mobileMockupWidth,
	desktopWidth = desktopMockupWidth,
	layout = 'responsive',
	className = null,
	as = null,
	style = null,
	objectFit = null,
	priority = false,
	mobileOnly = false,
	desktopOnly = false,
}, ref) => {
	if (!image?.asset) {
		console.warn('undefined image')
		return null
	}
	const refSplit = image.asset._ref.split('-')
	const dimensions = refSplit[refSplit.length - 2].split('x')
	const sanityImage = imageBuilder.image(image)
	const crop = sanityImage.options.source.crop
	const aspectRatio = ratio || (crop && ((1 - crop.left - crop.right) * dimensions[0]) / ((1 - crop.top - crop.bottom) * dimensions[1])) || dimensions[0] / dimensions[1]

	const sanityLoader = ({width, quality}) => {
		if (width === 1) return emptyImage
		else return sanityImage.size(width | 0, width / aspectRatio | 0).fit('crop').quality(quality).auto('format').url()
	}

	return (
		<Image
			src={imageBuilder.image(image).size(desktopMockupWidth, desktopMockupWidth / aspectRatio | 0).fit('crop').auto('format').url()}
			loader={sanityLoader}
			width={dimensions[0]}
			height={dimensions[0] / aspectRatio}
			mobileWidth={mobileWidth}
			desktopWidth={desktopWidth}
			mobileOnly={mobileOnly}
			desktopOnly={desktopOnly}
			as={as}
			layout={layout}
			className={className}
			style={style}
			objectFit={objectFit}
			priority={priority}
			alt={alt}
			ref={ref} />
	)
})
