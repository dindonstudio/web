import cn from 'classnames'
import styles from './titleTextCTA.module.scss'
import CustomBlockContent from 'components/customBlockContent/CustomBlockContent'
import {colors} from '../../../../config/variables'
import Badge from 'components/badge/Badge'
import Title from 'components/title/Title'
import Button, {ButtonTheme, ButtonVariant} from 'components/button/Button'

export const TitleTextCTATheme = {
	default: 'default',
	blueBlack: 'blueBlack',
	yellowOnBlack: 'yellowOnBlack',
	yellowOnBlackLarge: 'yellowOnBlackLarge',
}
const themes = {
	default: {
		badgeColor: colors.black,
		// titleColor: colors.black,
		// textColor: colors.black,
		textSetWidth: true,
		titleClass: 'hd-2 hm-2 upper',
		align: 'center',
		ctaTheme: ButtonTheme.whiteOnBlackHoverBorder,
	},
	blueBlack: {
		badgeColor: colors.blue,
		// titleColor: colors.yellow,
		// textColor: colors.black,
		titleClass: 'hd-5 hm-5 upper',
		align: 'left',
		ctaTheme: ButtonTheme.whiteOnBlack,
	},
	yellowOnBlack: {
		badgeColor: colors.yellow,
		titleColor: colors.yellow,
		textColor: colors.white,
		textOpacity: 0.6,
		textSetWidth: true,
		titleClass: 'hd-4 hm-5 upper',
		align: 'left',
		ctaTheme: ButtonTheme.whiteOnTransparent,
	},
	yellowOnBlackLarge: {
		badgeColor: colors.yellow,
		titleColor: colors.yellow,
		titleClass: 'hd-1 hm-1 upper',
		textSetWidth: true,
		align: 'center',
		ctaTheme: ButtonTheme.blackOnYellow,
	},
}

const TitleTextCTA = ({
	surtitle = null,
	title,
	text = null,
	badgeColor = null,
	titleColor = null,
	textColor = null,
	textOpacity = null,
	textSetWidth = null,
	ctaTheme = null,
	SurtitleTag = 'h1',
	TitleTag = 'h2',
	titleClass = null,
	titleClassName = null,
	theme = null,
	align = null,
	className = null,
	style = null,
	children = null,
	cta = null,
}) => {
	const _theme = theme ? themes[theme] : themes.default
	return (
		<div
			className={cn(styles.titleTextCTA, styles[align || _theme.align], className)}
			style={style}>
			{surtitle && <Badge Tag={SurtitleTag} className={cn(styles.surtitle)} color={badgeColor || _theme.badgeColor} label={surtitle} />}
			{title && <Title Tag={TitleTag} align={align || _theme.align} className={cn(titleClass || _theme.titleClass, styles.title, titleClassName)} color={titleColor || _theme.titleColor} label={title} />}
			{text && <CustomBlockContent className={cn(styles.text, (textSetWidth || _theme.textSetWidth) && styles.setWidth)} style={{color: textColor?.hex || _theme.textColor?.hex, opacity: textOpacity || _theme.textOpacity}} blocks={text} options={{normalStyle: 'pd-18 pm-16'}} />}
			{cta && <Button link={cta} variant={ButtonVariant.rounded} theme={ctaTheme || _theme.ctaTheme} className={styles.cta} />}
			{children}
		</div>
	)
}

export default TitleTextCTA
