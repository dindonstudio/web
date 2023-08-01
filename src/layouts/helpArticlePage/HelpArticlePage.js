import cn from 'classnames'
import Slice from 'slices/Slice'
import styles from './helpArticlePage.module.scss'
import HelpIntro from 'slices/helpIntro/HelpIntro'
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from '@gnu/react-accessible-accordion'
import Button from 'components/button/Button'
import DateComp from 'components/date/DateComp'
import ArrowSVG from '../../svgs/arrow.svg'
import HTMLReactParser from 'html-react-parser'

const HelpArticlePage = (props) => {
	const {content, article, categories, children} = props
	const {surtitle, title, introText, introCTA, placeholder} = content || {}
	const {title: articleTitle, lastUpdated, body} = article || {}

	return (
		<div className={cn('container', styles.helpArticlePage)}>
			<HelpIntro className={styles.intro} SurtitleTag='h2' TitleTag='h3' surtitle={surtitle} title={title} text={introText} cta={introCTA} placeholder={placeholder} categories={categories} />
			{article && (
				<Slice className={cn(styles.content)}>
					<Accordion
						allowZeroExpanded
						preExpanded={[categories.find(cat => cat.articles.some(art => art.id === article.id))?.id]}
						// onChange={handleChange}
						className={cn(styles.menu)}>
						{categories.map(item => (
							<AccordionItem key={item.id} uuid={item.id}>
								<AccordionItemHeading>
									<AccordionItemButton className={cn(styles.menuCategory)}>
										<h3 className={cn('pd-16-bold upper', styles.menuCategoryTitle)}>{item.title}</h3>
										<ArrowSVG />
									</AccordionItemButton>
								</AccordionItemHeading>
								<AccordionItemPanel animated>
									<ul className={cn(styles.sectionContent)}>
										{item.articles.map(article => (
											<li key={article.id} className={cn(styles.menuLink)}>
												<Button href={`/help/${article.slug}`} scroll={false} className={cn('pd-18')} activateClassName={cn(styles.menuLinkActive)} canActivate>
													{article.title}
												</Button>
											</li>
										))}
									</ul>
								</AccordionItemPanel>
							</AccordionItem>
						))}
					</Accordion>
					<main className={cn(styles.article)}>
						<h1 className={cn('hd-4-bold upper', styles.articleTitle)}>{articleTitle}</h1>
						<div className={cn('pd-16', styles.articleDate)}>Last updated: <DateComp>{lastUpdated}</DateComp></div>
						<div className={cn('pd-18', styles.articleBody)}>
							{HTMLReactParser(body, {
								replace: domNode => {
									if (domNode.type === 'tag' && domNode.name === 'img' && domNode.attribs?.src) {
										return (
											<span className={cn(styles.imgWrapper)}>
												<img src={domNode.attribs.src} alt={domNode.attribs.alt} />
											</span>
										)
									} else if (domNode.type === 'text') {
										const titleNumber = domNode.data.match(/^\d+\. /gi)
										if (titleNumber) {
											console.log('web/src/layouts/helpArticlePage/HelpArticlePage.js | domNode', domNode)
											console.log('web/src/layouts/helpArticlePage/HelpArticlePage.js | domNode.data.match(/^\d+\. /gi)', domNode.data.match(/^\d+\. /gi))
											return (
												<><span className={cn(styles.titleNumber)}>{titleNumber[0]}</span><span>{domNode.data.replace(titleNumber[0], '')}</span></>
											)
										}
									}

									return domNode
								},
							})}
						</div>
					</main>
				</Slice>
			)}
			{children}
		</div>
	)
}

export default HelpArticlePage
