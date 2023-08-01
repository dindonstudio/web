import cn from 'classnames'
import styles from './aboutClients.module.scss'
import SmoothScroll from 'components/smoothScroll/SmoothScroll'
import Marquee from 'components/marquee/Marquee'
import {useRef} from 'react'
import useSlice from 'hooks/useSlice'

const AboutClients = ({
	title = null,
	description = null,
	logos = null,
}) => {
	const ref = useRef(null)
	useSlice(ref)

	return (
		<SmoothScroll ref={ref} as='section' childClassName={styles.aboutClients}>
			<div className={cn('container', styles.container)}>
				{title && (
					<div className={styles.header}>
						<h2 className={cn('hm-2 hd-4', styles.title)}>{title}</h2>
						{description && (
							<p className={cn('pm-18 pd-18', styles.description)}>{description}</p>
						)}
					</div>
				)}
				<Marquee
					className={styles.logos}
					itemClassName={styles.logo}
					items={logos}
					perItemDuration={10} />
			</div>
		</SmoothScroll>
	)
}

export default AboutClients
