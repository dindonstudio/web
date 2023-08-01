import cn from 'classnames'
import styles from './DeathFlowBigImage.module.scss'
import Parallax from 'components/parallax/Parallax'
import {SanityImage} from 'components/image/Image'
import {DESKTOP, MOBILE, TABLET} from 'utils/mediaQueries'

const DeathFlowBigImage = ({image, colors = null, className = null, imageClassName = null}) => {
	return (
		<div className={cn('container', styles.featureIntro, className)}>

			{image && (
					<SanityImage
						image={image}
						desktopWidth={900}
						mobileWidth={410}
						priority
						className={cn(styles.image, imageClassName)} />
			)}

		</div>
	)
}

export default DeathFlowBigImage
