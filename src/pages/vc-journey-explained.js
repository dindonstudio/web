import cn from 'classnames'
import styles from './vc-journey-explained.module.scss'
import {getPageById} from 'lib/api'
import {pageRevalidate} from 'utils/cache'

import SmoothScroll from 'components/smoothScroll/SmoothScroll'
import useSlice from 'hooks/useSlice'
import {useRef} from 'react'
import headerImage from '../../public/assets/images/header_img.png'
import Image from 'next/image'


const VcJourneyExplained = (props) => {
	const {content} = props

	const ref = useRef(null)
	useSlice(ref)

	return (
		<div className={styles.VcJourneyExplained}>
			<SmoothScroll ref={ref} as='section' childClassName={styles.content}>
				<div className={cn('container', styles.container)}>
					<header className={styles.header}>
						<div className={styles.headerText}>
							<h1 className={cn('hm-2 hd-2', styles.headerTitle)}>VC journey explained: plan your steps ahead</h1>
							<p className={cn('hm-4', 'hd-5', styles.p)}>
								There is no better time to start a Venture Capital firm. New technology and innovation is at a fast pace fostering economic growth. LPs are pouring more money in alternative assets. This book is a big picture of the VC industry. It explores the main challenges of building a solid VC from fundraising to exit. For more information on how Kushim can help you, don't forget to book a demo!
							</p>
						</div>
						<img src={'./assets/images/rocket-header.svg'} className={styles.headerImg}  />
					</header>
				</div>
			<div className={cn('hm-2 hd-2', styles.textUnder)}>
				<div className={styles.textUnderLeft}>
					<h3 className={styles.textUnderLeftH3}>What is this for?</h3>
					<p>
						Regardless if you are a small or a big fund in the USA, Europe or Asia, this book is for you. It streamlines the pillars of the managerial process in VC firms: fundraising, dealflow, portfolio management until exit. 
					</p>
				</div>
				<div className={styles.textUnderRight}>
					<h3 className={styles.textUnderRightH3}>Why is it useful?</h3>
					<p>We build this resource to empower VC professionals to:</p>
					<ul className={cn('hm-5 hd-5', styles.textUnderRightList)}>
						<li>The types of LPs and their mindset before investing</li>
						<li>Defining your thesis and sell your idea</li>
						<li>The standard steps during the investment process</li>
						<li>How to monitor companies KPIs and prepare reporting</li>
						<li>The paths to exit</li>
					</ul>
				</div>
			</div>

			<div className={styles.bottomImage}>
				<h2 className={'hd-4'}>Here's a preview of the book:</h2>
				<a href="./assets/pdf/VC-journey-explained.pdf" target='_blank'>
					<img src={'./assets/images/preview.png'} alt="" />
				</a>
			</div>
			</SmoothScroll>
		</div>
	)
}

export async function getStaticProps ({params, locale, preview = false}) {
	const props = await getPageById('page.vcJourneyExplained', locale, preview)

	return {
		props: {...props, preview},
		revalidate: pageRevalidate,
	}
}

export default VcJourneyExplained
