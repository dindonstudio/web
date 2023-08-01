import cn from 'classnames'
import styles from './accordion.module.scss'
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
	resetNextUuid,
} from '@gnu/react-accessible-accordion'
import Button, {ButtonVariant} from 'components/button/Button'
import PlusSVG from '../../svgs/plus.svg'
import MinusSVG from '../../svgs/minus.svg'
import CustomBlockContent from 'components/customBlockContent/CustomBlockContent'
// import {trackEvent} from 'utils/tag'

const AccordionComp = (props) => {
	const {className, items} = props
	resetNextUuid()

	// const handleChange = (uuid) => {
	// 	const el = document.getElementById(`accordion__heading-${uuid}`)
	// 	const title = el?.textContent
	// 	trackEvent({name: title, action: 'click', ref: el})
	// }

	return (
		<Accordion
			allowZeroExpanded
			// onChange={handleChange}
			className={cn(styles.accordion, className)}>
			{items.map(item => (
				<AccordionItem key={item._key} uuid={item._key}>
					<AccordionItemHeading>
						<AccordionItemButton>
							<p className={cn('hm-7 hd-7')}>{item.title}</p>
							<Button variant={ButtonVariant.circle} transparentBg label='Toggle accordion'>
								<PlusSVG className={cn('plus')} />
								<MinusSVG className={cn('minus')} />
							</Button>
						</AccordionItemButton>
					</AccordionItemHeading>
					<AccordionItemPanel animated>
						<div className={cn(styles.sectionDescription)}>
							Hello
						</div>
					</AccordionItemPanel>
				</AccordionItem>
			))}
		</Accordion>
	)
}

export default AccordionComp
