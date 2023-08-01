import cn from 'classnames'
import styles from './about.module.scss'
import {getPageById} from 'lib/api'
import {pageRevalidate} from 'utils/cache'

import AboutHeader from 'components/aboutHeader/AboutHeader'
import AboutMission from 'components/aboutMission/AboutMission'
import AboutPerks from 'components/aboutPerks/AboutPerks'
// import KeyDates from 'components/keyDates/KeyDates'
import Stats from 'slices/stats/Stats'
import AboutClients from 'components/aboutClients/AboutClients'
import AboutPress from 'components/aboutPress/AboutPress'

const About = (props) => {
	const {content} = props

	return (
		<div className={cn(styles.about)}>
			{content.header && <AboutHeader {...content.header} />}
			{content.mission && <AboutMission {...content.mission} />}
			{content.perks?.length > 0 && <AboutPerks items={content.perks} />}
			{/* {content.keyDates?.length > 0 && <KeyDates title={content.keyDatesTitle} items={content.keyDates} />} */}
			{content.stats?.items && <Stats items={content.stats.items} />}
			{content.clients?.logos?.length > 0 && (
				<AboutClients {...content.clients} />
			)}
			{content.press?.articles?.length > 0 && <AboutPress {...content.press} />}
		</div>
	)
}

export async function getStaticProps ({params, locale, preview = false}) {
	const props = await getPageById('page.about', locale, preview)

	return {
		props: {...props, preview},
		revalidate: pageRevalidate,
	}
}

export default About
