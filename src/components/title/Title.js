import cn from 'classnames'
import styles from './title.module.scss'

const Title = ({Tag = 'div', align = 'center', color = null, className = null, children = null, label = null, autoSplit = false}) => {
	let title = (children || label)
	if (title && autoSplit) {
		let midLocation = -1
		let i = -1
		while ((i = title.indexOf(' ', i + 1)) >= 0 && i <= title.length / 2) {
			midLocation = i
		}
		title = midLocation > 0 ? title.substr(0, midLocation) + '\n' + title.substr(midLocation + 1) : title
	}
	return (
		<Tag className={cn(styles.title, styles[align], className)} style={color && {color: color.hex}}>
			{title?.split('\n').map((line, i) => <div key={i}>{line}</div>)}
		</Tag>
	)
}

export default Title
