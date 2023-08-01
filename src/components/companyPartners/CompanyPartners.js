import cn from 'classnames'
import styles from './companyPartners.module.scss'
import SmoothScroll from 'components/smoothScroll/SmoothScroll'
import Marquee from 'components/marquee/Marquee'
import DealflowLogo from '../../svgs/dealflow.svg'
import {useRef} from 'react'
import useSlice from 'hooks/useSlice'

const CompanyPartners = ({
	title = null,
	references = null,
}) => {
	const ref = useRef(null)
	useSlice(ref)

	return (
		<SmoothScroll ref={ref} as='section' childClassName={styles.companyPartners}>
			<div className={cn('container', styles.container)}>
				{title && (
					<div className={styles.header}>
						<DealflowLogo className={styles.logo} />
						<h2 className={cn('hm-2 hd-2', styles.title)}>{title}</h2>
					</div>
				)}
				<Marquee
					className={styles.references}
					itemClassName={styles.reference}
					items={references}
					perItemDuration={10} />
			</div>
		</SmoothScroll>
	)
}

export default CompanyPartners
