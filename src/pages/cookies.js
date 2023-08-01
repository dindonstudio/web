import cn from 'classnames'
import styles from './cookies.module.scss'
import {getPageById} from 'lib/api'
import {pageRevalidate} from 'utils/cache'

import SmoothScroll from 'components/smoothScroll/SmoothScroll'
import DealflowLogo from '../svgs/dealflow.svg'
import useSlice from 'hooks/useSlice'
import {useRef} from 'react'
import CustomBlockContent from 'components/customBlockContent/CustomBlockContent'

const Cookies = (props) => {
	const {content} = props	
	const ref = useRef(null)
	useSlice(ref)
	
	return (
		<div className={styles.cookie}>
			<SmoothScroll ref={ref} as='section' childClassName={styles.cookie}>
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
		</div>
	)
}

export async function getStaticProps ({params, locale, preview = false}) {
	const props = await getPageById('page.cookies', locale, preview)

	return {
		props: {...props, preview},
		revalidate: pageRevalidate,
	}
}

export default Cookies
