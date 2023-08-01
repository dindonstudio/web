import cn from 'classnames'
import Button, {ButtonVariant} from 'components/button/Button'
import CustomBlockContent from 'components/customBlockContent/CustomBlockContent'
import styles from './ctaList.module.scss'
import Arrow from 'svgs/arrowCta.svg'
import CircleBackground from 'components/circleBackground/CircleBackground'

const CtaList = ({title, features, backgroundColor}) => {
	return (
		<section className={cn(styles.ctaList)}>
			<h2 className={cn('hm-2 hd-2', styles.title)}>
				<CustomBlockContent blocks={title} noDom />
			</h2>
			{features?.length > 0 && (
				<ul className={styles.features}>
					{features.map(feature => (
						<li key={feature._key} className={cn('pd-16 pm-16', styles.feature)}>
							<Button link={feature} variant={ButtonVariant.rounded} hoverTransparent>
								<Arrow className='desktop-only' aria-hidden />{feature.label}
							</Button>
						</li>
					))}
				</ul>
			)}
			{backgroundColor && (
				<CircleBackground
					className={styles.background}
					childClassName={styles.circle}
					colors={backgroundColor}
					overflowVisible
					fixed={false}
					parallax={-3} />
			)}
		</section>
	)
}

export default CtaList
