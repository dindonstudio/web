import cn from 'classnames'
import CustomBlockContent from 'components/customBlockContent/CustomBlockContent'
import styles from './bulletPoints.module.scss'
import Arrow from 'svgs/arrowCta.svg'
import Button, {ButtonVariant} from 'components/button/Button'

const BulletPoints = ({title, features = null, className = null, cta = null, orientation = 'vertical'}) => {
	return (
		<div className={cn(styles.bulletPoints, className, styles[orientation])}>
			<h2 className={cn('hm-2 hd-2', styles.title)}>
				<CustomBlockContent blocks={title} noDom />
			</h2>
			{features?.length > 0 && (
				<ul className={styles.features}>
					{features.map((feature, i) => (
						<li key={i} className={cn('pd-16 pm-16', styles.feature)}>
							<Arrow className='desktop-only' aria-hidden />
							{feature}
						</li>
					))}
				</ul>
			)}
			{cta && <Button link={cta} variant={ButtonVariant.rounded} hoverTransparent className={styles.cta}><Arrow /> {cta.label}</Button>}
		</div>
	)
}

export default BulletPoints
