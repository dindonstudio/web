import Button, {ButtonVariant} from 'components/button/Button'
import {useEffect, useRef} from 'react'
import {cn} from 'utils/classnames'
import Pause from '../../svgs/pause.svg'
import Play from '../../svgs/play.svg'
import FullscreenOn from '../../svgs/fullscreen-on.svg'
import FullscreenOff from '../../svgs/fullscreen-off.svg'
import styles from './VideoController.module.scss'

const Progress = (props) => {
	return (
		<div className={cn(styles.element, styles.progressBar)}>
			<input
				{...props}
				className={styles.progressInput}
				type='range' min={0} max={0.999999} step='any' />
			<div className={styles.progressWrapper}>
				<div className={styles.progress} aria-hidden style={{transform: `translateX(${props.value * 100}%) translateZ(0)`}} />
				<div className={styles.loaded} aria-hidden style={{transform: `translateX(${props.loaded * 100}%) translateZ(0)`}} />
			</div>
		</div>
	)
}

const VideoController = ({
	hidden,
	controls,
	onTogglePlay,
	onToggleMute,
	onToggleFullscreen,
	onSeekChange,
	onSeekMouseDown,
	onSeekMouseUp,
	playing,
	muted,
	fullscreen,
	loaded,
	played,
}) => {
	const fullscreenBtnRef = useRef()
	const renderElement = (e, key) => {
		switch (e) {
			case 'play':
				return (
					<Button variant={ButtonVariant.circle} onClick={onTogglePlay} key={key} className={cn(styles.element, styles[e])}>
						{playing ? <Pause /> : <Play />}
					</Button>
				)
			case 'progress':
				return (
					<Progress
						key={key}
						value={played}
						loaded={loaded}
						onChange={onSeekChange}
						onMouseDown={onSeekMouseDown}
						onMouseUp={onSeekMouseUp} />
				)
			case 'mute':
				return (
					<Button variant={ButtonVariant.circle} onClick={onToggleMute} key={key} className={cn(styles.element, styles[e])}>
						{muted
							? <span>Unmute</span>
							: <span>Mute</span>}
					</Button>
				)
			case 'fullscreen':
				return (
					<Button variant={ButtonVariant.circle} onClick={onToggleFullscreen} ref={fullscreenBtnRef} key={key} className={cn(styles.element, styles[e])}>
						{fullscreen
							? <FullscreenOff />
							: <FullscreenOn />}
					</Button>
				)
			case 'current-time':
			case 'duration':
			case 'pip':
			case 'volume':
			case 'settings':
				// TODO
				break
		}
	}

	useEffect(() => {
		if (fullscreenBtnRef.current && !document.fullscreenEnabled) fullscreenBtnRef.current.classList.add(styles.isHidden)
	}, [])

	return (
		<>
			<div className={cn(styles.overlay, hidden && styles.isHidden)} onClick={onTogglePlay} aria-hidden />
			<div className={cn(styles.videoController, hidden && styles.isHidden)}>
				{controls && controls.map((e, i) => renderElement(e, `${e}-${i}`))}
			</div>
		</>
	)
}

export default VideoController
