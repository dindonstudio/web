import cn from 'classnames'
import {LocalImage} from 'components/image/Image'
import Parallax from 'components/parallax/Parallax'
import SmoothScroll from 'components/smoothScroll/SmoothScroll'
import reactStringReplace from 'react-string-replace'
import styles from './largeText.module.scss'
import HandImage from 'images/right-hand.svg'
import HandPhone from '../../svgs/hand-phone.svg'
import Logo from 'svgs/logo.svg'
import useSlice from 'hooks/useSlice'
import {useRef} from 'react'

const LargeText = ({text, children = null, topRightImage = null, bottomLeftImage = null}) => {
	const ref = useRef(null)
	useSlice(ref)

	return (
		<SmoothScroll ref={ref} as='section' childClassName={styles.largeText}>
			<div className={cn('container', styles.largeTextWrap)}>
				<h2 className={cn('hm-1 hd-1', styles.largeTextTitle)}>
					{reactStringReplace(text, '{logo}', (match, j) => <Logo key={j} className={styles.largeTextLogo} />)}
				</h2>

				<Parallax z={0.6} className={styles.largeTextTopRightImage}>
					{topRightImage ? <LocalImage image={topRightImage} desktopWidth={240} mobileWidth={240} aria-hidden /> : <HandImage />}
				</Parallax>

				<Parallax z={0.6} className={styles.largeTextBottomLeftImage}>
					{bottomLeftImage ? <LocalImage image={bottomLeftImage} desktopWidth={367} mobileWidth={240} aria-hidden /> : <HandPhone /> }
				</Parallax>

				{children}
			</div>
		</SmoothScroll>
	)
}

export default LargeText
