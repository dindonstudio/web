import cn from 'classnames'
import styles from './footerBanner.module.scss'
import CustomBlockContent from 'components/customBlockContent/CustomBlockContent'
import Button, {ButtonVariant} from 'components/button/Button'
import {SanityImage} from 'components/image/Image'
import Locale from 'components/locale/Locale'
import Arrow from '../../svgs/arrowCta.svg'
import {colors} from '@config/variables'
import CircleBackground from 'components/circleBackground/CircleBackground'
import SmoothScroll from 'components/smoothScroll/SmoothScroll'

const FooterBanner = (props) => {
	const {title, link = null, image = null} = props

	return (
		<SmoothScroll as='section' childClassName={styles.footerBanner}>
			<div className={cn('container', styles.container)}>
				{title && (
					<CustomBlockContent
						className={styles.title}
						options={{normalStyle: 'hm-2 hd-2'}}
						blocks={title} />
				)}
				{link && <Button variant={ButtonVariant.rounded} className={styles.cta} link={link}><Arrow /><Locale>Request a demo</Locale></Button>}
				{image && <SanityImage image={image} desktopWidth={850} mobileWidth={450} className={styles.illu} />}
			</div>
			<CircleBackground className={styles.background} childClassName={styles.circle} colors={{circle: colors.green?.hex}} />

		</SmoothScroll>
	)
}

export default FooterBanner
