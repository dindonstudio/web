import cn from 'classnames'
import styles from './portfolioGraphs.module.scss'
import {colors} from '@config/variables'
import {TABLET, DESKTOP} from 'utils/mediaQueries'
import {getEasing} from 'components/smoothScroll/SmoothScroll'
import Parallax from 'components/parallax/Parallax'
import CustomBlockContent from 'components/customBlockContent/CustomBlockContent'
import {SanityImage} from 'components/image/Image'
import Arrow from 'svgs/arrowCta.svg'
import CircleBackground from 'components/circleBackground/CircleBackground'
import {imageBuilder} from 'lib/sanityImage'

const PortfolioGraphs = ({perfs = null, updates = null, circleRef = null}) => {
	return (
		<div className={styles.portfolioGraphs}>
			{perfs && (
				<section className={cn('container', styles.container, styles.perfs)}>
					<div className={styles.imagesCol}>
						{perfs.image && (
							<Parallax z={-1} ease={getEasing()} className={styles.perfsImageWrap} mediaQueries={[DESKTOP]}>
								<SanityImage image={perfs.image} desktopWidth={620} mobileWidth={425} className={styles.perfsImage} />
							</Parallax>
						)}
						{perfs.cards?.length > 0 && (
							<div className={styles.cards}>
								{perfs.cards.map((card, i) => {
									const icon = imageBuilder.image(card.icon).url()

									let z = -i
									switch (i) {
										case 0:
											z = 2
											break
										case 1:
											z = 1
											break
									}

									return (
										<Parallax z={z} ease={getEasing()} key={card._key} className={styles.card}>
											<div className={styles.cardInner}>
												<div className={styles.cardIcon} aria-hidden>
													<span className={styles.bg} style={{backgroundColor: card.color}} />
													<i style={{WebkitMaskImage: `url(${icon})`, maskImage: `url(${icon})`, backgroundColor: card.color}} />
												</div>

												<p className={cn('pm-16 pd-18', styles.cardTitle)}>{card.title}</p>
												<p className={cn('pm-13 pd-16', styles.cardSubtitle)}>{card.subtitle}</p>
											</div>
										</Parallax>
									)
								})}
							</div>
						)}
					</div>

					<div className={styles.text}>
						<h2>
							<CustomBlockContent className={styles.title} blocks={perfs.title} options={{normalStyle: 'hm-2 hd-3'}} />
						</h2>
						{perfs.features?.length > 0 && (
							<ul className={styles.features}>
								{perfs.features.map((feature, i) => (
									<li key={i} className={cn('pd-16 pm-16', styles.feature)}>
										<Arrow className='desktop-only' aria-hidden />{feature}
									</li>
								))}
							</ul>
						)}
					</div>

					<CircleBackground
						overflowVisible
						circleRef={circleRef}
						className={cn('desktop-only', styles.background)}
						childClassName={styles.circle}
						fixed={false}
						colors={{circle: colors.pinkLight?.hex}} />
					<CircleBackground
						overflowVisible
						className={cn('mobile-only', styles.background)}
						childClassName={styles.circle}
						fixed={false}
						colors={{circle: colors.pink?.hex}} />
				</section>
			)}

			{updates && (
				<section className={cn('container', styles.container, styles.updates)}>
					<div className={styles.imagesCol}>
						{updates.mainImage && (
							<Parallax z={-1} ease={getEasing()} className={cn(styles.updatesImage, styles.updatesImageMainWrap)}>
								<SanityImage image={updates.mainImage} desktopWidth={375} mobileWidth={325} className={cn(styles.image, styles.updatesImageMain)} />
							</Parallax>
						)}
						{updates.backImage && (
							<Parallax z={1} ease={getEasing()} className={cn(styles.updatesImage, styles.updatesImageBackWrap)} mediaQueries={[TABLET, DESKTOP]}>
								<SanityImage image={updates.backImage} desktopWidth={335} mobileWidth={335} className={cn(styles.image, styles.updatesImageBack)} />
							</Parallax>
						)}

						<CircleBackground
							overflowVisible
							className={styles.background}
							childClassName={styles.circle}
							colors={{circle: colors.pinkLight?.hex}} />
					</div>

					<div className={styles.text}>
						<h2>
							<CustomBlockContent className={styles.title} blocks={updates.title} options={{normalStyle: 'hm-2 hd-3'}} />
						</h2>
						{updates.features?.length > 0 && (
							<ul className={styles.features}>
								{updates.features.map((feature, i) => (
									<li key={i} className={cn('pd-16 pm-16', styles.feature)}>
										<Arrow className='desktop-only' aria-hidden />{feature}
									</li>
								))}
							</ul>
						)}
					</div>
				</section>
			)}
		</div>
	)
}

export default PortfolioGraphs
