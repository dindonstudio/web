import cn from 'classnames'
import styles from './lp-due-diligence.module.scss'
import {getPageById} from 'lib/api'
import {pageRevalidate} from 'utils/cache'

import SmoothScroll from 'components/smoothScroll/SmoothScroll'
import useSlice from 'hooks/useSlice'
import {useRef} from 'react'
import headerImage from '../../public/assets/images/header_img.png'
import Image from 'next/image'


const LpDueDiligence = (props) => {
	const {content} = props

	const ref = useRef(null)
	useSlice(ref)

	return (
		<div className={styles.LpDueDiligence}>
			<SmoothScroll ref={ref} as='section' childClassName={styles.content}>
				<div className={cn('container', styles.container)}>
					<header className={styles.header}>
						<div className={styles.headerText}>
							<h1 className={cn('hm-2 hd-2', styles.headerTitle)}>The institutional limited partnersdue diligence questionnaire</h1>
							<p className={cn('hm-4', 'hd-5', styles.p)}>
							With a recent trend of increasing VC funds, not only emerging and existing managers are planning to raise new funds but also many institutions are now planning to become limited partners of VC funds. We have created this unique resource containing due diligence questions across 14 sections including questions related to ESG.
							</p>
						</div>
					</header>
				</div>
			<div className={cn('hm-2 hd-2', styles.textUnder)}>
				<div className={styles.textUnderLeft}>
					<h3 className={styles.textUnderLeftH3}>What is this for?</h3>
					<p>
						This resource contains 180+ questions divided into 14 sub-sections such as General fund information, Legal terms, Fund Terms, Team’s alignment of interest, Investment strategy, ESG and many more. 
					</p>
				</div>
				<div className={styles.textUnderRight}>
					<h3 className={styles.textUnderRightH3}>Why is it useful?</h3>
					<p>We build this resource to empower VC professionals to:</p>
					<ul className={cn('hm-5 hd-5', styles.textUnderRightList)}>
						<li>Help LPs get a comprehensive overview of the important angles to consider while evaluating a fund for investment.</li>
						<li>Prepare emerging fund managers for the LP due diligence.</li>
						<li>Provide existing fund managers with latest due diligence.</li>
					</ul>
				</div>
			</div>

			<div className={styles.bottomImage}>
				<h2 className={'hd-4'}>Here's a preview of the book:</h2>
				<a href="./assets/pdf/The_institutional_limited_partners_due_dilligence_questionnaire.pdf" target='_blank'>
					<img src={'./assets/images/preview.png'} alt="" />
				</a>
			</div>
			</SmoothScroll>
		</div>
	)
}

export async function getStaticProps ({params, locale, preview = false}) {
	const props = await getPageById('page.lpDueDiligence', locale, preview)

	return {
		props: {...props, preview},
		revalidate: pageRevalidate,
	}
}

export default LpDueDiligence
