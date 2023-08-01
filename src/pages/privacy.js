import cn from 'classnames'
import styles from './privacy.module.scss'
import {getPageById, } from 'lib/api'
import {pageRevalidate} from 'utils/cache'

import SmoothScroll from 'components/smoothScroll/SmoothScroll'
import DealflowLogo from '../svgs/dealflow.svg'
import useSlice from 'hooks/useSlice'
import {useRef} from 'react'
import CustomBlockContent from 'components/customBlockContent/CustomBlockContent'

const Privacy = (props) => {
	const {content} = props	
	const ref = useRef(null)
	useSlice(ref)
	
	return (
		<div className={styles.privacy}>
			<SmoothScroll ref={ref} as='section' childClassName={styles.privacy}>
				<div className={cn('container', styles.container)}>
					<header className={styles.header}>
						<h1 className={cn('hm-2 hd-2', styles.headerTitle)}>{content.intro.title}</h1>
					</header>
				</div>
			</SmoothScroll>

			{content.body.textBefore && (
				<div className={cn('pm-18', styles.headerDescr)}>
					<div className={styles.lastUpdated}>
						<DealflowLogo className={cn('desktop-only', styles.dealflowLogo)} aria-hidden />
						<CustomBlockContent className={cn('hm-2 hd-2', styles.headerDate)} blocks={content.intro.lastUpdated} />
					</div>
					<CustomBlockContent blocks={content.body.textBefore}/>
				</div>
			)}

			{/* The tables should be here */}
			<div className={cn('pm-18', styles.headerDescr)} >
				<table className={styles.tables}>
					<caption>{content.body.tableTitle1}</caption>
					<tbody>
						{content.body.table1.rows.map((row, key) => {
							return (
							<tr key={key} className={styles.tableRow}>
								{row.cells.map((cell, key) => {
									return (
										<td key={key}>{cell}</td>
									)
								})}
							</tr>
							)
						})}
					</tbody>
				</table>
			</div>

			<div className={cn('pm-18', styles.headerDescr)} >
				<table className={styles.tables}>
					<caption>{content.body.tableTitle2}</caption>
					<tbody>
						{content.body.table2.rows.map((row, key) => {
							return (
							<tr key={key} className={styles.tableRow}>
								{row.cells.map((cell, key) => {
									return (
										<td key={key}>{cell}</td>
									)
								})}
							</tr>
							)
						})}
					</tbody>
				</table>
			</div>
			
			{content.body.textAfter && (
				<div className={cn('pm-18', styles.headerDescr)}>
					{/* <div className={styles.lastUpdated}>
						<CustomBlockContent className={cn('hm-2 hd-2', styles.headerDate)} blocks={content.intro.lastUpdated} />
					</div> */}
					<CustomBlockContent blocks={content.body.textAfter} />
				</div>
			)}

		</div>
	)
}

export async function getStaticProps ({params, locale, preview = false}) {
	const props = await getPageById('page.privacy', locale, preview)

	return {
		props: {...props, preview},
		revalidate: pageRevalidate,
	}
}

export default Privacy
