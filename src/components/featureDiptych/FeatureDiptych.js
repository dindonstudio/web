import cn from 'classnames'
import styles from './featureDiptych.module.scss'
import Parallax from 'components/parallax/Parallax'
import {colors} from '@config/variables'
import CircleBackground from 'components/circleBackground/CircleBackground'
import Phone from 'components/phone/Phone'
import BulletPoints from 'components/bulletPoints/BulletPoints'
import {SanityImage} from 'components/image/Image'
import {DESKTOP} from 'utils/mediaQueries'

const FeatureDiptych = ({
	title,
	features = null,
	image = null,
	halign = 'left',
	valign = 'top',
	className,
	imageParams = {imageDesktopWidth: 350, imageMobileWidth: 235, className: null},
	withPhone = false,
	backgroundColor = {bg: null, circle: colors.purpleLight?.hex},
	circleClassName = null,
	cta = null,
	parallaxRatio = null,
	children = null,
	phoneRef = null,
}) => {
	return (
		<section className={cn('container', className, styles.featureDiptych, styles['v' + valign], styles['h' + halign])}>
			{image && (
				<div className={styles.imagesCol}>
					{withPhone ? (
						<Phone ref={phoneRef} screen={image} {...imageParams} className={cn(styles.image, styles.phone)} animateInView />
					) : (
						<SanityImage image={image} {...imageParams} className={cn(styles.image, !withPhone && styles.imageRounded, imageParams.className)} />
					)}
				</div>
			)}
			<Parallax z={parallaxRatio || (withPhone ? 2.3 : 1.5)} className={styles.imageWrap} mediaQueries={[DESKTOP]}>
				<BulletPoints title={title} features={features} className={styles.features} cta={cta} />
			</Parallax>
			<CircleBackground
				className={styles.background}
				childClassName={cn(styles.circle, circleClassName)}
				colors={backgroundColor}
				overflowVisible
				fixed={false} />
			{children}
		</section>
	)
}

export default FeatureDiptych
