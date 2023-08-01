import cn from 'classnames'
import Head from 'next/head'
import {get404} from 'lib/api'
import styles from './404.module.scss'
import InLineList from 'components/inLineList/InLineList'
import Button, {ButtonVariant} from 'components/button/Button'
import Slice from 'slices/Slice'

/**
 * 404 page
 */
const Custom404 = ({pageTitle = '404', links}) => {
	return (
		<Slice className={styles.notFound}>
			<Head>
				<title>{pageTitle}</title>
			</Head>
			<div className={styles.content}>
				<div className={styles.text}>
					<h1 className={cn('hd-1 hm-1', styles.surtitle)}>{pageTitle}</h1>
				</div>
				{links?.length ? (
					<InLineList className={styles.links} mobileFullWidth desktopCentered>
						{links.map((link, i) => <Button key={link._key} link={link} variant={ButtonVariant.rounded} />)}
					</InLineList>
				) : null}
			</div>
		</Slice>
	)
}

export async function getStaticProps ({params, locale, preview = false, previewData}) {
	const props = await get404(locale, preview)

	return {
		props: {...props, preview},
	}
}

export default Custom404
