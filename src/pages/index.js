import cn from 'classnames'
import styles from './index.module.scss'
import {getPageById, largeTitleCta, linkResolver, slugField} from 'lib/api'
import {pageRevalidate} from 'utils/cache'
import HomeDealflow from 'components/homeDealflow/HomeDealflow'
import HomeHeader from 'components/homeHeader/HomeHeader'
import HomePortfolio from 'components/homePortfolio/HomePortfolio'
import DealflowLogo from 'svgs/dealflow.svg'
import DealflowText from 'svgs/dealflow-text.svg'
import Gmail from 'svgs/dealflow-gmail.svg'
import Mail from 'svgs/dealflow-mail.svg'
import Dropbox from 'svgs/dealflow-dropbox.svg'
import Pitchbook from 'svgs/dealflow-pitchbook.svg'
import CalendarGoogle from 'svgs/dealflow-calendar-google.svg'
import Calendar from 'svgs/dealflow-calendar.svg'
import CalendarCb from 'svgs/dealflow-cb.svg'
import {useRef} from 'react'
import LargeTitleCta from 'slices/largeTitleCta/LargeTitleCta'
import Stats from 'slices/stats/Stats'
import HomePortal from 'components/homePortal/HomePortal'
import HomePerks from 'components/homePerks/HomePerks'
import useSlice from 'hooks/useSlice'

const HomePage = (props) => {
	const {content, demoLink, learnMoreLink} = props
	const ref = useRef(null)
	useSlice(ref)

	const logoRef = useRef(null)
	const logoCards = useRef([])
	const icons = [
		{icon: Gmail, scale: 1},
		{icon: CalendarCb, scale: 1.1},
		{icon: CalendarGoogle, scale: 0.9},
		{icon: Calendar, scale: 0.8},
		{icon: Pitchbook, scale: 0.95},
		{icon: Mail, scale: 1},
		{icon: Dropbox, scale: 0.7},
	]

	return (
		<div className={styles.home}>
			<div ref={ref}>
				<HomeHeader title={content.title} excerpt={content.excerpt} quote={content.quote} logoRef={logoRef} partners={content.partners} videoMobile={content.videoMobile} video={content.video} cta = {content.cta} />
				<HomeDealflow title={content.dealflowTitle} testament={content.dealflowTestament} logoRef={logoRef} logoCards={logoCards} demoLink={demoLink} learnMoreLink={learnMoreLink} />
				<HomePortfolio phoneImage={content.portfolioPhoneImage} title={content.portfolioTitle} excerpt={content.portfolioExcerpt} testament={content.portfolioTestament} logoCards={logoCards} logoRef={logoRef} demoLink={demoLink} learnMoreLink={learnMoreLink} />
				<HomePortal image={content.portalImage} title={content.portalTitle} excerpt={content.portalExcerpt} testament={content.portalTestament} demoLink={demoLink} learnMoreLink={learnMoreLink} />
			</div>
			<HomePerks title={content.perksTitle} perks={content.perks} demoLink={demoLink} learnMoreLink={learnMoreLink} />
			{content.stats?.items && <Stats items={content.stats.items} title={content.statsTitle} excerpt={content.excerpt} />}
			{content.largeTitleCta && <LargeTitleCta {...content.largeTitleCta} className={styles.largeTitleCta} imageClassName={styles.largeTitleCtaImage} />}

			<div className={styles.dealflow} ref={logoRef} aria-hidden>
				<div className={styles.logoWrapper}>
					<DealflowLogo className={styles.logo} />
					<DealflowText className={styles.logoText} />
				</div>
				<div className={cn(styles.background)}>
					<div className={styles.left} />
					<div className={styles.center} />
					<div className={styles.right} />
				</div>
				<ul>
					{icons.map(({icon: Icon, scale}, i) => <li key={i} className={styles.card} data-scale={scale} ref={(e) => { logoCards.current[i] = e }}><Icon /></li>)}
				</ul>
			</div>
		</div>
	)
}

export async function getStaticProps ({params, locale, preview = false}) {
	const props = await getPageById('page.homePage', locale, preview, `
		...,
		${slugField(locale)},
		${linkResolver(locale, 'demoLink')},
		${linkResolver(locale, 'learnMoreLink')},
		content{
			...,
			${largeTitleCta(locale)},
			perks[]{
				...,
				${linkResolver(locale, 'link')}
			}
		},
	`)

	return {
		props: {...props, preview},
		revalidate: pageRevalidate,
	}
}

export default HomePage
