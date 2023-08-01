import Button, {ButtonVariant} from 'components/button/Button'
import CustomBlockContent from 'components/customBlockContent/CustomBlockContent'
import Locale from 'components/locale/Locale'
import styles from './integrationsList.module.scss'
import {slugify} from 'utils/string'
import Card from 'components/card/Card'
import {useEffect, useMemo, useRef, useState} from 'react'
import useSticky from 'hooks/useSticky'
import TimelineSection from 'components/timelineSection/TimelineSection'
import DealflowLogo from 'svgs/dealflow.svg'
import {cn} from 'utils/classnames'
import gsap from 'gsap'
import {useRouter} from 'next/router'
import useScrollTo from 'hooks/useScrollTo'

const IntegrationsList = ({entries}) => {
	const [stickyRef, containerRef] = useSticky()
	const timeline = useRef(null)
	const contentRef = useRef(null)
	const dealflowLogoRef = useRef(null)
	const router = useRouter()
	// const routerHash = router.asPath.split('#')[1]
	const [routerHash, setRouterHash] = useState(null)
	const scrollTo = useScrollTo()

	useEffect(() => {
		timeline.current = gsap.timeline({paused: true})
			.to({}, {duration: 1})
			.fromTo(dealflowLogoRef.current, {opacity: 0, y: '20%'}, {duration: 1, opacity: 1, y: '-30%'}, 0)
		timeline.current.duration(1)

		const scroll = (hash) => {
			setRouterHash(hash)
			const paddingTop = parseFloat(window.getComputedStyle(containerRef.current, null).getPropertyValue('padding-top'))
			if (paddingTop) scrollTo(`[data-anchor='${hash}']`, -paddingTop)
		}

		const hash = router.asPath.split('#')[1]
		if (hash) {
			if (history.scrollRestoration) {
				history.scrollRestoration = 'manual'
			}
			scroll(hash)
		}

		const handleHashChange = (e) => {
			scroll(e.split('#')[1])
		}
		router.events.on('hashChangeStart', handleHashChange)

		return () => {
			router.events.off('hashChangeStart', handleHashChange)
		}
	}, [])

	const categories = useMemo(() => {
		const categoriesMap = new Map()

		entries.forEach(entry => {
			if (entry.category?._id) {
				const category = categoriesMap.get(entry.category._id) || {...entry.category, entries: []}
				category.entries.push(entry)
				categoriesMap.set(entry.category?._id, category)
			}
		})

		return [...categoriesMap]
	}, [entries])

	return (
		<>
			<TimelineSection as='section' timeline={timeline} childClassName={cn('container', styles.integrationsList)} childRef={containerRef}>
				<nav className={styles.nav} ref={stickyRef}>
					<h2 className={cn('pm-18', styles.navTitle)}><Locale>Category</Locale></h2>
					{categories?.map(category => (
						<Button
							className={cn('pm-13', styles.navEntry)}
							variant={ButtonVariant.underlined}
							key={category[0]}
							active={routerHash && slugify(category[1].title) === routerHash}
							href={`#${slugify(category[1].title)}`}>{category[1].title}
						</Button>
					))}
				</nav>
				<ul className={styles.content} ref={contentRef}>
					{categories?.map(category => (
						<li key={category[0]} className={styles.category} data-anchor={slugify(category[1].title)}>
							<CustomBlockContent as='h2' blocks={category[1].description} className={cn('hm-2 hd-3', styles.title)} noDom />
							<div className={styles.cards}>
								{category[1].entries?.map(integration => (
									<Card key={integration._id} className={styles.card} {...integration} />
								))}
							</div>
						</li>
					))}
				</ul>
			</TimelineSection>
			<div ref={dealflowLogoRef} className={cn('desktop-only no-touch-only', styles.dealflowLogo)} aria-hidden>
				<DealflowLogo />
			</div>
		</>
	)
}

export default IntegrationsList
