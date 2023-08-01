import cn from 'classnames'
import styles from './aboutPerks.module.scss'
import SmoothScroll from 'components/smoothScroll/SmoothScroll'
import {SanityImage} from 'components/image/Image'
import Button, {ButtonVariant} from 'components/button/Button'
import Arrow from 'svgs/arrowCta.svg'
import Parallax from 'components/parallax/Parallax'
import {useRef} from 'react'
import useSlice from 'hooks/useSlice'
import {DESKTOP} from 'utils/mediaQueries'

const AboutPerks = ({items = null}) => {
	const ref = useRef(null)
	useSlice(ref)

	return (
		<SmoothScroll ref={ref} as='section' childClassName={styles.aboutPerks}>
			<div className={cn('container', styles.container)}>
				{items.map((perk) => (
					<div key={perk._key} className={styles.perk}>
						{perk.image && (
							<div className={styles.perkImageWrap}>
								<Parallax z={0.8} mediaQueries={[DESKTOP]} className={styles.perkImage}>
									<SanityImage
										image={perk.image}
										ratio={432 / 624}
										desktopWidth={435}
										desktopOnly />
									<SanityImage
										image={perk.image}
										ratio={432 / 517}
										mobileWidth={325}
										mobileOnly />
								</Parallax>
							</div>
						)}
						<div className={styles.perkText}>
							{perk.title && (
								<h3 className={cn('hm-2 hd-2', styles.perkTitle)}>
									{perk.title}
								</h3>
							)}
							{perk.link && (
								<Button
									link={perk.link}
									variant={ButtonVariant.rounded}
									className={styles.perkLink}
									inverted>
									<Arrow />
									{perk.link.label}
								</Button>
							)}
						</div>
					</div>
				))}
			</div>
		</SmoothScroll>
	)
}

export default AboutPerks
