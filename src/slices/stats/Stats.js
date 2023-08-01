import cn from 'classnames'
import styles from './stats.module.scss'
import {colors} from '@config/variables'
import SmoothScroll from 'components/smoothScroll/SmoothScroll'
import CustomBlockContent from 'components/customBlockContent/CustomBlockContent'
import CircleBackground from 'components/circleBackground/CircleBackground'

const Stats = (props) => {
	const {title = null, excerpt = null, items = null} = props
	return (
		<SmoothScroll as='section' childClassName={styles.stats}>
			<div className={cn('container', styles.container)}>
				{(title || excerpt) && (
					<div className={styles.intro}>
						{title && (
							<CustomBlockContent
								as='h2'
								noDom
								className={cn('hm-2 hd-2', styles.title)}
								blocks={title} />
						)}

						{excerpt && (
							<CustomBlockContent
								as='p'
								noDom
								className={cn('pm-16 pd-16', styles.excerpt)}
								blocks={excerpt} />
						)}
					</div>
				)}

				{items?.length > 0 && (
					<ul className={styles.items}>
						{items.map((item, i) => (
							<li key={i} className={styles.item}>
								<div className={styles.itemWrap}>
									{item.title && (
										<p className={cn('hm-3 hd-4', styles.itemTitle)}>{item.title}</p>
									)}
									{item.description && (
										<p className={cn('pm-16 pd-16', styles.itemDescription)}>{item.description}</p>
									)}
								</div>
							</li>
						))}
					</ul>
				)}
			</div>
			<CircleBackground className={styles.background} childClassName={styles.circle} colors={{bg: colors.greenDark?.hex, circle: colors.green?.hex}} fixed={false} />
		</SmoothScroll>
	)
}

export default Stats
