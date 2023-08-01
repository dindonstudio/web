import {useEffect, useRef} from 'react'
import {useRouter} from 'next/router'
import {animated, useTransition} from 'react-spring'
import useAppStore from 'stores/useAppStore'
import useWindowResize from 'hooks/useWindowResize'
import {isSafari, iOSSafari} from 'utils/browser'
import {useTransitionFix} from 'utils/useTransitionFix'
import Head from 'components/head/Head'
import Header from 'components/header/Header'
import Footer from 'components/footer/Footer'
import styles from './layout.module.scss'
import {cn} from 'utils/classnames'
import Button, {ButtonVariant} from 'components/button/Button'
import {sanityBlockContentToString} from 'utils/text'
import {resolvePlaceholders} from '../utils/string'
import useScrollStore from 'stores/useScrollStore'
import {primaryInput} from 'detect-it'
import {quartOut} from 'eases'

const PageTransition = ({children}) => {
	const ref = useRef(null)
	const refScrollY = useRef(0)
	const isTouch = useRef(primaryInput === 'touch')
	const router = useRouter()
	const transitionCallback = useTransitionFix()
	const isScrollLocked = useScrollStore(state => state.isLocked)

	useEffect(() => {
		if (!ref.current) return

		if (isScrollLocked) {
			if (isTouch.current) {
				document.body.style.overflowY = 'hidden'
			} else {
				refScrollY.current = window.scrollY
				ref.current.style.position = 'fixed'
			}
		} else {
			if (isTouch.current) {
				document.body.style.overflowY = ''
			} else {
				ref.current.style.position = ''
				window.scrollTo(0, refScrollY.current)
			}
		}
	}, [isScrollLocked])

	const transition = useTransition({children}, {
		keys: router.asPath.split('#')[0],
		from: {opacity: 0},
		enter: {opacity: 1},
		leave: {
			position: 'fixed',
			visibility: 'hidden',
			immediate: true,
			onRest () { requestAnimationFrame(() => { transitionCallback() }) },
		},
		config: {duration: 1000, easing: quartOut},
	})

	return (
		<>
			{transition((style, {children}) =>
				<animated.div
					className={styles.transition}
					style={style}
					ref={ref}>
					{children}
				</animated.div>,
			)}
		</>
	)
}
const Layout = ({appProps, pageProps, children}) => {
	const {header, footer, meta} = appProps.settings

	let metaTitle = pageProps?.content?.metaTitle || pageProps?.title || pageProps?.content?.surtitle || pageProps?.content?.title
	if (metaTitle) {
		if (meta?.title) metaTitle = resolvePlaceholders(meta.title, {pageTitle: metaTitle, siteTitle: meta.siteTitle})
	} else {
		metaTitle = meta?.siteTitle
	}
	const metaDescription =
		pageProps?.content?.metaDescription ||
		pageProps?.taxoAndArticles?.metaDescription ||
		sanityBlockContentToString(pageProps?.content?.excerpt, false) ||
		meta?.description
	const metaImage = pageProps?.content?.metaImage || pageProps?.content?.poster || meta?.image

	useEffect(() => {
		const sbw = window.innerWidth - document.body.offsetWidth
		useAppStore.setState({scrollbarWidth: sbw})
		document.documentElement.style.setProperty('--sbw', `${sbw}px`)
	}, [])

	useWindowResize((e) => {
		useAppStore.setState({windowSize: {width: e.innerWidth, height: e.innerHeight}})

		// document.documentElement.style.setProperty('--vh', `${e.innerHeight}px`)

		// fix safari rendering issue with rem
		// if ((isSafari || iOSSafari) && e.innerWidth) {
		// 	document.documentElement.style.display = 'inline-block'
		// 	// eslint-disable-next-line no-unused-expressions
		// 	document.documentElement.offsetHeight
		// 	document.documentElement.style.display = ''
		// }
	}, true)

	return (
		<>
			<Head {...meta} title={metaTitle} description={metaDescription} image={metaImage} />
			<Header {...header} />
			<PageTransition>
				<main className={styles.main}>
					{children}
				</main>
				<Footer {...footer} mainLinks={header?.links} />
			</PageTransition>
			{pageProps.preview && (
				<Button
					href='/api/exit-preview'
					className={cn(styles.exitPreview)}
					theme={{light: '#fff', dark: '#000'}}
					variant={ButtonVariant.small}
					inverted
					preventNextLink>
					Exit preview
				</Button>
			)}
		</>
	)
}

export default Layout
