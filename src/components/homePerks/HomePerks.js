import {colors} from '@config/variables'
import Button, {ButtonVariant} from 'components/button/Button'
import LargeText from 'components/largeText/LargeText'
import Locale from 'components/locale/Locale'
import styles from './homePerks.module.scss'
import Arrow from '../../svgs/arrowCta.svg'
import {SanityImage} from 'components/image/Image'
import {cn} from 'utils/classnames'
import {isLightColor} from 'utils/color'
import Slideshow from 'components/slideshow/Slideshow'
import SmoothScroll from 'components/smoothScroll/SmoothScroll'
import {useRef} from 'react'
import useSlice from 'hooks/useSlice'
import {DESKTOP} from 'utils/mediaQueries'
import useMediaQuery from 'hooks/useMediaQuery'

const HomePerks = ({title, perks, demoLink, learnMoreLink}) => {
	const ref = useRef(null)
	const device = useMediaQuery()
	useSlice(ref)

	return (
		<>
			{title && (
				<LargeText text={title}>
					<div className={styles.buttons}>
						<Button variant={ButtonVariant.rounded} className={styles.button} link={demoLink} inverted><Arrow /><Locale>Request a demo</Locale></Button>
						<Button variant={ButtonVariant.rounded} className={styles.button} link={learnMoreLink} transparent style={{'--background-color': colors.greenDark.hex, '--color': colors.white.hex}}><Locale>Learn more</Locale></Button>
					</div>
				</LargeText>
			)}
			<SmoothScroll ref={ref} childClassName={styles.homePerks}>
				<div className='container'>
					<Slideshow className={styles.perks} overflowHidden={false} withButtons snapping groupBy={device === DESKTOP ? 3 : 1}>
						{perks.map((perk, i) => {
							const isLight = isLightColor(perk.backgroundColor.bg)
							return (
								<div key={perk._key} className={styles.perk} style={{backgroundColor: perk.backgroundColor.bg, color: isLight ? perk.backgroundColor.text : 'white', zIndex: perks.length - i}}>
									<SanityImage className={styles.logo} image={perk.logo} desktopWidth={60} mobileWidth={45} />
									<h3 className={cn('hm-2', styles.title)}>{perk.title}</h3>
									<p className={cn('pm-16', styles.description)}>{perk.description}</p>
									{/* <Button variant={ButtonVariant.rounded} className={styles.button} hoverTransparent={!isLight} link={perk.link} style={{'--background-color': isLight ? colors.greenDark.hex : 'white', '--color': perk.backgroundColor.bg, '--hover-background-color': isLight ? 'white' : perk.backgroundColor.bg}}><Arrow /><Locale>Explore</Locale></Button> */}
								</div>
							)
						})}
					</Slideshow>
				</div>
			</SmoothScroll>
		</>
	)
}

export default HomePerks
