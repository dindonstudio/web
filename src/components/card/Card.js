import cn from 'classnames'
import Button, {ButtonVariant} from 'components/button/Button'
import Locale from 'components/locale/Locale'
import styles from './card.module.scss'
import Arrow from 'svgs/arrowCta.svg'
import {imageBuilder} from 'lib/sanityImage'

const Card = ({title, icon, excerpt, cta = null, className = null, slug = null}) => {
	return (
		<article className={cn(styles.card, className)}>
			<div className={styles.iconWrapper}>
				<img src={imageBuilder.image(icon).url()} />
			</div>
			<h2 className={cn('hm-2 hd-4', styles.cardTitle)}>{title}</h2>
			{excerpt && <p className={cn('pm-13 pd-16', styles.cardDescription)}>{excerpt}</p>}
			{(cta || slug) && (
				<Button variant={ButtonVariant.rounded} className={styles.cardCta} link={slug ? null : cta} href={slug && '/integrations/' + slug.current} inverted>
					<Arrow />{slug ? <Locale>Learn more</Locale> : <Locale>Request a demo</Locale>}
				</Button>
			)}
		</article>
	)
}

export default Card
