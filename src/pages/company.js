import cn from 'classnames'
import styles from './company.module.scss'
import {getPageById} from 'lib/api'
import {pageRevalidate} from 'utils/cache'

import CompanyHeader from 'components/companyHeader/CompanyHeader'
import CompanyPartners from 'components/companyPartners/CompanyPartners'
import CompanyTeam from 'components/companyTeam/CompanyTeam'
import LargeTitleCta from 'slices/largeTitleCta/LargeTitleCta'

const Company = (props) => {
	const {content} = props

	return (
		<div className={styles.company}>
			<CompanyHeader title={content.title} image={content.headerImage} />

			{content.partners?.references?.length > 0 && (
				<CompanyPartners {...content.partners} />
			)}

			{content.team && (
				<CompanyTeam {...content.team} />
			)}

			{content.largeTitleCta && (
				<LargeTitleCta {...content.largeTitleCta} imageParams={{desktopWidth: 945, mobileWidth: 250}} className={styles.largeTitleCta} imageClassName={styles.largeTitleCtaImage} />
			)}
		</div>
	)
}

export async function getStaticProps ({params, locale, preview = false}) {
	const props = await getPageById('page.company', locale, preview)

	return {
		props: {...props, preview},
		revalidate: pageRevalidate,
	}
}

export default Company
