import cn from 'classnames'
import styles from './featureIntro.module.scss'
import Parallax from 'components/parallax/Parallax'
import CustomBlockContent from 'components/customBlockContent/CustomBlockContent'
import DealflowLogo from 'svgs/dealflow.svg'
import {SanityImage} from 'components/image/Image'
import CircleBackground from 'components/circleBackground/CircleBackground'
import {DESKTOP, MOBILE, TABLET} from 'utils/mediaQueries'

const FeatureIntro = ({title, excerpt, image, colors = null, className = null, imageClassName = null, backgroundOverflowVisible = false}) => {
	return (
		<header className={cn('container', styles.featureIntro, className)}>
			<div className={styles.text}>
				<Parallax z={1.8} mediaQueries={[DESKTOP]}>
					<div className={styles.dealflow} style={{background: colors?.text}} aria-hidden>
						<DealflowLogo className={styles.logo} style={{color: colors?.circle}} />
					</div>
					<h1 className={cn('hm-2 hd-3', styles.title)}>{title}</h1>
					{excerpt && (
						<CustomBlockContent
							className={styles.excerpt}
							blocks={excerpt} />
					)}
				</Parallax>
			</div>

			{image && (
				<Parallax z={1} mediaQueries={[MOBILE, TABLET]}>
					<SanityImage
						image={image}
						desktopWidth={800}
						mobileWidth={410}
						priority
						className={cn(styles.image, imageClassName)} />
				</Parallax>
			)}

			<CircleBackground
				className={styles.background}
				childClassName={styles.circle}
				colors={{bg: null, circle: colors?.circle}}
				parallax={4}
				overflowVisible={backgroundOverflowVisible} />
		</header>
	)
}

export default FeatureIntro
