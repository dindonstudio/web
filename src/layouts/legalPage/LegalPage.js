import cn from 'classnames'
import CustomBlockContent from 'components/customBlockContent/CustomBlockContent'
import PageIntro from 'slices/pageIntro/PageIntro'
import Slice from 'slices/Slice'
import styles from './legalPage.module.scss'
import TabsMenu from 'components/tabsMenu/TabsMenu'

const LegalPage = (props) => {
	const {className, children, content, menu} = props
	const {title, lastUpdated, text} = content || {}

	return (
		<div className={cn('container', styles.legalPage, className)}>
			<PageIntro
				className={cn(styles.intro)} title={title} text={lastUpdated} childrenAbove={menu?.links && (
					<TabsMenu className={cn(styles.menu)} links={menu?.links} />
				)} />
			{text && (
				<Slice className={cn(styles.content)}>
					<CustomBlockContent blocks={text} options={{linkStyle: styles.link}} />
				</Slice>
			)}
			{children}
		</div>
	)
}

export default LegalPage
