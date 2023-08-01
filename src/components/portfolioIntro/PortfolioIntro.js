import cn from 'classnames'
import styles from './portfolioIntro.module.scss'
import Parallax from 'components/parallax/Parallax'
import CustomBlockContent from 'components/customBlockContent/CustomBlockContent'
import DealflowLogo from 'svgs/dealflow.svg'
import {SanityImage} from 'components/image/Image'
import {colors} from '@config/variables'
import CircleBackground from 'components/circleBackground/CircleBackground'
import FeatureDiptych from 'components/featureDiptych/FeatureDiptych'
import {MOBILE, TABLET, DESKTOP} from 'utils/mediaQueries'

const PortfolioIntro = ({
	header,
	valuations = null,
	phoneRef = null,
}) => {
	return (
		<div className={styles.portfolioIntro}>
			<header className={cn('container', styles.container, styles.header)}>
				<div className={styles.text}>
					<Parallax z={1.8} mediaQueries={[DESKTOP]}>
						<div className={styles.dealflow} aria-hidden>
							<DealflowLogo className={styles.logo} />
						</div>
						<h1 className={cn('hm-2 hd-3', styles.title)}>{header.title}</h1>
						{header.excerpt && (
							<CustomBlockContent
								className={styles.excerpt}
								blocks={header.excerpt} />
						)}
					</Parallax>
				</div>

				{header.image && (
					<Parallax z={1} mediaQueries={[MOBILE, TABLET]}>
						<SanityImage
							image={header.image}
							desktopWidth={1030}
							mobileWidth={410}
							priority
							className={styles.headerImage} />
					</Parallax>
				)}

				<CircleBackground
					overflowVisible
					className={styles.background}
					childClassName={cn('mobile-only', styles.circle)}
					colors={{circle: colors.pink?.hex}} />
			</header>
			{valuations && (
				<FeatureDiptych {...valuations} className={styles.diptych} withPhone phoneRef={phoneRef} backgroundColor={{bg: null, circle: colors.pink?.hex}} />
			)}
		</div>
	)
}

export default PortfolioIntro
