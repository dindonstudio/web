import cn from 'classnames'
import styles from './companyHeader.module.scss'
import {useRef, useEffect, Fragment} from 'react'
import {colors} from '@config/variables'
import gsap from 'gsap'
import TimelineSection from 'components/timelineSection/TimelineSection'
import CircleBackground from 'components/circleBackground/CircleBackground'
import {SanityImage} from 'components/image/Image'
import EllipseClip from 'components/ellipseClip/EllipseClip'

const CompanyHeader = ({title = null, image = null}) => {
	const timeline = useRef(null)
	const titleRef = useRef(null)

	useEffect(() => {
		const vd = '20rem'
		timeline.current = gsap.timeline({paused: true})
			.to({}, {duration: 1})
			.fromTo(titleRef.current.querySelectorAll('span'), {y: 0, opacity: 1}, {duration: 0.5, y: '-' + vd, stagger: 0.03, opacity: 0}, 0)
		timeline.current.duration(1)
	}, [])

	return (
		<TimelineSection timeline={timeline} childClassName={styles.companyHeader} isTop>
			<div className={cn('container', styles.container)}>
				<h1 ref={titleRef} className={cn('hm-1 hd-1', styles.title)}>
					{title.split(/\n/g).map((line, i) => (
						<Fragment key={i}>
							<span>{line}</span>
						</Fragment>
					))}
				</h1>

				{image && (
					<EllipseClip className={styles.imageClip}>
						<SanityImage image={image} desktopWidth={800} mobileWidth={375} className={styles.image} priority />
					</EllipseClip>
				)}
			</div>

			<CircleBackground
				className={styles.background}
				childClassName={styles.circle}
				colors={{bg: colors.pinkDark?.hex, circle: colors.green?.hex}} />
		</TimelineSection>
	)
}

export default CompanyHeader
