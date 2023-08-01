import cn from 'classnames'
import styles from './companyTeam.module.scss'
import {colors} from '@config/variables'
import {useRef, useEffect} from 'react'
import {useInView} from 'react-intersection-observer'
import gsap from 'gsap'
import SmoothScroll from 'components/smoothScroll/SmoothScroll'
import Parallax from 'components/parallax/Parallax'
import {SanityImage} from 'components/image/Image'
import EllipseClip from 'components/ellipseClip/EllipseClip'
import CustomBlockContent from 'components/customBlockContent/CustomBlockContent'
import CircleBackground from 'components/circleBackground/CircleBackground'
import DealflowLogo from 'svgs/dealflow.svg'
import {splitChars} from 'utils/text'
import LargeText from 'components/largeText/LargeText'
import {DESKTOP} from 'utils/mediaQueries'
import book from 'images/book.png'
import learn from 'images/learn.png'

const CompanyTeam = ({
	portrait = null,
	title = null,
	text1 = null,
	text2 = null,
	text3 = null,
	diptychImage = null,
	diptychText = null,
}) => {
	const titleRef = useRef(null)

	const [inViewRef, inView] = useInView({
		rootMargin: '-10% 0%',
		threshold: 0.25,
		triggerOnce: true,
	})

	useEffect(() => {
		if (titleRef.current) {
			gsap.set(titleRef.current.querySelectorAll('span'), {yPercent: 100, opacity: 0})
		}
	}, [])

	useEffect(() => {
		if (inView && titleRef.current) {
			gsap.timeline()
				.fromTo(titleRef.current.querySelectorAll('span'), {yPercent: 100, opacity: 0}, {duration: 0.7, yPercent: 0, opacity: 1, ease: 'quart.out', stagger: 0.03}, 0)
		}
	}, [inView])

	return (
		<div className={styles.companyTeam}>
			<SmoothScroll as='section'>
				<div className={cn('container', styles.container)}>
					{diptychText && diptychImage && (
						<div className={styles.diptych}>
							<CustomBlockContent
								className={styles.diptychText}
								options={{normalStyle: 'hm-3 hd-4'}}
								blocks={diptychText} />
							<Parallax z={-1.4} mediaQueries={[DESKTOP]} className={styles.diptychImageWrap}>
								<EllipseClip className={styles.diptychImageClip}>
									<SanityImage
										image={diptychImage}
										desktopWidth={400}
										mobileWidth={400}
										className={styles.diptychImage} />
								</EllipseClip>
								<CircleBackground
									childClassName={styles.circle}
									colors={{circle: colors.purpleLight?.hex}} overflowVisible />
							</Parallax>
						</div>
					)}

					{text1 && (
						<div className={cn(styles.paragraph, styles.text1)}>
							<DealflowLogo className={styles.dealflowLogo} />
							<CustomBlockContent
								options={{normalStyle: 'hm-2 hd-2'}}
								blocks={text1} />
						</div>
					)}

					<div ref={inViewRef} className={styles.portrait}>
						<Parallax z={1.2} mediaQueries={[DESKTOP]} className={styles.titleWrap}>
							{title && <h2 ref={titleRef} className={cn('hm-0 hd-0', styles.title)} dangerouslySetInnerHTML={{__html: splitChars(title)}} />}
						</Parallax>
						{portrait && (
							<>
								<EllipseClip className={styles.portraitClip}>
									<SanityImage
										image={portrait}
										desktopWidth={890}
										mobileWidth={375}
										className={styles.portraitImage} />
								</EllipseClip>
								<CircleBackground
									childClassName={styles.circle}
									colors={{circle: colors.yellow?.hex}} overflowVisible fixed={false} />
							</>
						)}
					</div>

					{text2 && (
						<div className={cn(styles.paragraph, styles.text2)}>
							<DealflowLogo className={styles.dealflowLogo} />
							<CustomBlockContent
								options={{normalStyle: 'hm-2 hd-2'}}
								blocks={text2} />
						</div>
					)}
				</div>
			</SmoothScroll>

			{text3 && <LargeText text={text3} topRightImage={book} bottomLeftImage={learn} />}
		</div>
	)
}

export default CompanyTeam
