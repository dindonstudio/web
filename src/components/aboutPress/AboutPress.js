import cn from 'classnames'
import styles from './aboutPress.module.scss'
import SmoothScroll from 'components/smoothScroll/SmoothScroll'
import {SanityImage} from 'components/image/Image'
import Button, {ButtonVariant} from 'components/button/Button'
import Locale from 'components/locale/Locale'
import Arrow from '../../svgs/arrowCta.svg'

const AboutPress = ({
	title = null,
	articles = null,
}) => {
	return (
		<SmoothScroll as='section' childClassName={styles.aboutPress}>
			<div className={cn('container', styles.container)}>
				{title && (
					<h2 className={cn('hm-2 hd-4', styles.title)}>{title}</h2>
				)}
				<ul className={styles.articles}>
					{articles.map(article => {
						const refSplit = article.logo.asset._ref.split('-') || null
						const dimensions = refSplit[refSplit.length - 2].split('x') || null

						return (
							<li key={article._key} className={styles.article}>
								{article.logo && (
									<SanityImage
										image={article.logo}
										objectFit='contain'
										className={styles.articleLogo}
										style={{width: `${dimensions[0] / 10}rem`}} />
								)}
								{article.link && (
									<Button href={article.link.url} target='_blank' rel='noopener noreferrer' variant={ButtonVariant.rounded} className={styles.articleLink}><Arrow /><Locale>Read the article</Locale></Button>
								)}
							</li>
						)
					})}
				</ul>
			</div>
		</SmoothScroll>
	)
}

export default AboutPress
