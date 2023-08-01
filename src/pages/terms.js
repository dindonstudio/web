import cn from 'classnames'
import styles from './terms.module.scss'
import {getPageById} from 'lib/api'
import {pageRevalidate} from 'utils/cache'

import SmoothScroll from 'components/smoothScroll/SmoothScroll'
import DealflowLogo from '../svgs/dealflow.svg'
import useSlice from 'hooks/useSlice'
import {useRef} from 'react'
import CustomBlockContent from 'components/customBlockContent/CustomBlockContent'

const Terms = (props) => {
	const {content} = props	
	const ref = useRef(null)
	useSlice(ref)
	
	return (
		<div className={styles.term}>
			<SmoothScroll ref={ref} as='section' childClassName={styles.term}>
				<div className={cn('container', styles.container)}>
					<header className={styles.header}>
						<h1 className={cn('hm-2 hd-2', styles.headerTitle)}>{content.intro.title}</h1>
					</header>
				</div>
			</SmoothScroll>

			{content.body.text && (
				<div className={cn('pm-18', styles.headerDescr)}>
					<div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
						<DealflowLogo className={cn('desktop-only', styles.dealflowLogo)} aria-hidden />
						<CustomBlockContent className={cn('hm-2 hd-2', styles.headerDate)} blocks={content.intro.lastUpdated} />
					</div>
					<CustomBlockContent blocks={content.body.text} />
				</div>
			)}

			{content.body.table1 && (
				<div className={cn('pm-18', styles.headerDescr)}>
					<div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
						<CustomBlockContent className={cn('hm-2 hd-2', styles.headerDate)} blocks={content.intro.lastUpdated} />
					</div>
					<CustomBlockContent blocks={content.body.textBefore} />
				</div>
			)}

			{content.body.table2 && (
				<div className={cn('pm-18', styles.headerDescr)}>
					<div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
						<CustomBlockContent className={cn('hm-2 hd-2', styles.headerDate)} blocks={content.intro.lastUpdated} />
					</div>
					<CustomBlockContent blocks={content.body.textBefore} />
				</div>
			)}
			
			{content.body.textAfter && (
				<div className={cn('pm-18', styles.headerDescr)}>
					<div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
						<CustomBlockContent className={cn('hm-2 hd-2', styles.headerDate)} blocks={content.intro.lastUpdated} />
					</div>
					<CustomBlockContent blocks={content.body.textAfter} />
				</div>
			)}
		</div>
	)
}

export async function getStaticProps ({params, locale, preview = false}) {
	const props = await getPageById('page.terms', locale, preview)

	return {
		props: {...props, preview},
		revalidate: pageRevalidate,
	}
}

export default Terms
