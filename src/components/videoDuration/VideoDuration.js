import {cn} from 'utils/classnames'
import styles from './videoDuration.module.scss'

const VideoDuration = ({className = null, h, m, s}) => {
	const format = (duration) => {
		if (duration < 10) return '0' + duration
		else return duration
	}

	return (
		<span className={cn('pm-xxs', styles.videoDuration, className)}>{`${h ? (format(h) + ':') : ''}${format(m)}:${format(s)}`}</span>
	)
}

export default VideoDuration
