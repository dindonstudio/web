import cn from 'classnames'
import styles from './page.module.scss'

const Page = (props) => {
	const {content, children} = props
	// const {slices, footerBanner, pageHeader} = content || {}

	return (
		<div className={cn(styles.main)}>
			<div className={cn('container', styles.container)}>
				{children}
			</div>
		</div>
	)
}

export default Page
