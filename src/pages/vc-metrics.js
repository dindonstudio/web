import cn from 'classnames'
import styles from './vc-metrics.module.scss'
import {getPageById} from 'lib/api'
import {pageRevalidate} from 'utils/cache'

import SmoothScroll from 'components/smoothScroll/SmoothScroll'
import useSlice from 'hooks/useSlice'
import {useRef} from 'react'
import Button, {ButtonVariant} from 'components/button/Button'
import headerImage from '../../public/assets/images/header_img.png'


const VcMetrics = (props) => {
	const {content} = props

	const ref = useRef(null)
	useSlice(ref)

	return (
		<div className={styles.vcMetric}>
			<SmoothScroll ref={ref} as='section' childClassName={styles.content}>
				<div className={cn('container', styles.container)}>
					<header className={styles.header}>
						<div className={styles.headerText}>
							<h1 className={cn('hm-2 hd-2', styles.headerTitle)}>Metrics 1.0. Target performance</h1>
							<p className={cn('hm-4', 'hd-5', styles.p)}>
								Metrics play a vital role in revealing the strengths and avenues of improvement for a company. 
								They play a crucial role for VCs to evaluate a company before investment and also help them in post investment stage. 
								Here we have compiled a vast array of metrics pertaining to various industries. 
							</p>
						</div>
						<img src={'./assets/images/header_img.png'} className={styles.headerImg}  />
					</header>
				</div>
			<div className={cn('hm-2 hd-2', styles.textUnder)}>
				<div className={styles.textUnderLeft}>
					<h3 className={styles.textUnderLeftH3}>What is this for?</h3>
					<p>This resource contains 200+ metrics for different industries and sectors: SaaS, Pharma, marketing, financial, operational, market...and many more. 
						You will find definitions and formulas for each metric.
					</p>
				</div>
				<div className={styles.textUnderRight}>
					<h3 className={styles.textUnderRightH3}>Why is it useful?</h3>
					<p>We build this resource to empower VC professionals to:</p>
					<ul className={styles.textUnderRightList}>
						<li>Help entrepreneurs track the right metrics for their business</li>
						<li>Build a data-driven process for investment decisions</li>
					</ul>
				</div>
			</div>

			<div className={styles.bottomImage}>
				<a href="./assets/Metrics_list.xlsx" target='_blank'>
					<img src={'./assets/images/excel_screenshot.png'} alt="" />
				</a>
				<p className={'hd-4'}>“If you don't collect any metrics, you're flying blind. 
					If you collect and focus on too many, they may be obstructing your field of view.” Scott M. Graffius
				</p>
			</div>
			</SmoothScroll>
		</div>
	)
}

export async function getStaticProps ({params, locale, preview = false}) {
	const props = await getPageById('page.vcMetrics', locale, preview)

	return {
		props: {...props, preview},
		revalidate: pageRevalidate,
	}
}

export default VcMetrics
