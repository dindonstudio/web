import {colors} from '@config/variables'
import Button, {ButtonVariant} from 'components/button/Button'
import Card from 'components/card/Card'
import CircleBackground from 'components/circleBackground/CircleBackground'
import CustomBlockContent from 'components/customBlockContent/CustomBlockContent'
import Locale from 'components/locale/Locale'
import SmoothScroll from 'components/smoothScroll/SmoothScroll'
import useSlice from 'hooks/useSlice'
import {getBySlug, getDocumentPaths} from 'lib/api'
import {useRef} from 'react'
import DealflowLogo from 'svgs/dealflow.svg'
import {postRevalidate} from 'utils/cache'
import {cn} from 'utils/classnames'
import styles from './[slug].module.scss'
import Arrow from 'svgs/arrowCta.svg'

const SlugPage = (props) => {
	const {title, excerpt, largeDescription, smallDescription, icon, cta} = props
	const ref = useRef(null)
	useSlice(ref)

	return (
		<SmoothScroll childClassName={cn('container', styles.integration)} ref={ref}>
			<Button variant={ButtonVariant.rounded} className={styles.backCta} href='/integration' inverted>
				<Arrow /><Locale>Back</Locale>
			</Button>
			<div className={styles.content}>
				<div>
					<h1 className={cn('hd-2 hm-54', styles.title)}>{title}</h1>
					<CustomBlockContent as='p' blocks={largeDescription} className={cn('hm-2', styles.largeDescription)} noDom />
					<p className={cn('pm-16', styles.smallDescription)}>{smallDescription}</p>
				</div>
			</div>
			<Card className={styles.card} title={title} excerpt={excerpt} icon={icon} cta={cta} />
			<CircleBackground
				className={styles.background}
				childClassName={styles.circle}
				colors={{bg: null, circle: colors.yellow.hex}}
				parallax={4} />
			<div className={cn('desktop-only', styles.dealflow)} aria-hidden>
				<DealflowLogo className={styles.dealflowLogo} />
			</div>
		</SmoothScroll>
	)
}

export async function getStaticProps ({params, locale, preview = false}) {
	const props = await getBySlug(params.slug, locale, 'integrationPost', '...', preview)

	if (!props) {
		return {
			notFound: true,
		}
	}

	return {
		props: {...props, preview},
		revalidate: postRevalidate,
	}
}

export async function getStaticPaths ({locales}) {
	const slugs = await getDocumentPaths(locales, 'integrationPost')

	return {
		paths: slugs.map(s => '/integrations/' + s.current), // byLocales.flatMap(pages => Object.values(pages)),
		fallback: 'blocking',
	}
}

export default SlugPage
