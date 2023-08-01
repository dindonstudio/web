import styles from './VideoPlayer.module.scss'
import {useRef, useEffect, useState, useCallback} from 'react'
import cn from 'classnames'
import Html5Player from 'react-player/file'
import YoutubePlayer from 'react-player/youtube'
import VideoController from './VideoController'
import screenfull from 'screenfull'
import useResizeObserver from 'hooks/useResizeObserver'
import {useInView} from 'react-intersection-observer'
import useDebouncedCallback from 'hooks/useDebouncedCallback'

const VideoPlayer = ({
	srcs,
	playing = false,
	config = undefined,
	className = null,
	muted = false,
	loop = false,
	controls = ['play', 'progress', 'mute', 'fullscreen'],
	onReady = null,
	onPlay = null,
	provider = 'html5',
	light = false,
	playsinline = false,
	playIcon = <></>,
}) => {
	const playerRef = useRef(null)
	const ref = useRef(null)
	const isMounted = useRef(false)
	const [isReady, setIsReady] = useState(false)
	const [isMuted, setIsMuted] = useState(playing ? true : muted)
	const [isPlaying, setIsPlaying] = useState(playing)
	const [src, setSrc] = useState(srcs.hd)

	srcs = [{url: srcs.sd, width: 320}, {url: srcs.md, width: 540}, {url: srcs.hd, width: 720}]

	const ReactPlayer = provider === 'youtube' ? YoutubePlayer : Html5Player

	// if (!screenfull.isEnabled) {
	// 	const index = controls.indexOf('fullscreen')
	// 	if (index !== -1) {
	// 		controls.splice(index, 1)
	// 	}
	// }

	// useEffect(() => {
	// 	console.log('VideoPlayer.js mount')

	// 	return () => {
	// 		console.log('VideoPlayer.js unmount')
	// 	}
	// }, [])

	const [inViewRef, inView] = useInView({
		rootMargin: '0px',
	})

	const setRefs = useCallback(
		(node) => {
			ref.current = node
			inViewRef(node)
		},
		[inViewRef],
	)

	useEffect(() => {
		isMounted.current = true
		return () => {
			isMounted.current = true
		}
	}, [])

	useEffect(() => {
		if (isMounted.current) setIsMuted(muted)
	}, [muted])

	useEffect(() => {
		if (isMounted.current) setIsPlaying(playing)
	}, [playing])

	useEffect(() => {
		if (isMounted.current && isReady && !inView && isPlaying) {
			setIsPlaying(false)
		}
	}, [inView])

	useResizeObserver(ref, useDebouncedCallback((entry) => {
		if (isMounted.current && srcs.length) {
			const src = srcs.filter((e) => entry.width < e.width)
			if (src[0]) setSrc(src[0].url)
			else if (srcs.length) setSrc(srcs[srcs.length - 1].url)
		}
	}))

	const [state, setState] = useState({
		pip: false,
		fullscreen: false,
		controls: false,
		light,
		volume: 1,
		played: 0,
		loaded: 0,
		duration: 0,
		playbackRate: 1.0,
		playsinline: playsinline,
		seeking: false,
		loop,
	})

	// player handlers
	const handlePlayerReady = () => {
		if (isMounted.current) {
			setIsReady(true)
			if (onReady) onReady()
		}
	}

	const handleSeek = () => {
	}

	const handlePlay = useCallback(() => {
		setIsPlaying(true)
		if (onPlay) onPlay()
	}, [setIsPlaying])

	const handlePause = useCallback(() => {
		setIsPlaying(false)
	}, [setIsPlaying])

	const handleProgress = (e) => {
		if (!state.seeking) {
			setState({...state, ...e})
		}
	}

	const handleEnded = (e) => {
	}

	// controller handlers
	const handleTogglePlay = () => {
		setIsPlaying(!isPlaying)
	}

	const handleToggleMute = () => {
		setIsMuted(!isMuted)
	}

	const handleToggleFullscreen = () => {
		if (screenfull.isEnabled) {
			screenfull.toggle(ref.current)
		}
	}

	const handleChangeFullscreen = () => {
		setState({...state, fullscreen: screenfull.isFullscreen})
	}

	const handleSeekChange = (e) => {
		setState({...state, played: parseFloat(e.target.value)})
	}

	const handleSeekMouseDown = () => {
		setState({...state, seeking: true})
	}

	const handleSeekMouseUp = (e) => {
		setState({...state, seeking: false})
		playerRef.current.seekTo(parseFloat(e.target.value))
	}

	useEffect(() => {
		if (isMounted.current) setIsMuted(muted)
	}, [muted])

	useEffect(() => {
		if (isMounted.current && screenfull?.isEnabled) {
			screenfull.on('change', handleChangeFullscreen)

			return () => {
				screenfull.off('change', handleChangeFullscreen)
			}
		}
	}, [state, handleChangeFullscreen])

	return (
		<div ref={setRefs} className={cn(styles.videoPlayer, className)}>
			<ReactPlayer
				ref={playerRef}
				className={styles.video}
				url={src}
				pip={state.pip}
				playing={isPlaying}
				controls={state.controls}
				light={state.light}
				loop={state.loop}
				playbackRate={state.playbackRate}
				volume={state.volume}
				muted={isMuted}
				playsinline={state.playsinline}
				config={config}
				width='100%'
				height='200%'
				playIcon={playIcon}
				onReady={handlePlayerReady}
				onPlay={handlePlay}
				onPause={handlePause}
				onSeek={handleSeek}
				onProgress={handleProgress}
				onEnded={handleEnded}
				onError={e => console.warn('videoplayer error', e)} />
			<VideoController
				hidden={!isReady}
				controls={controls}
				onTogglePlay={handleTogglePlay}
				onToggleMute={handleToggleMute}
				onToggleFullscreen={handleToggleFullscreen}
				onSeekChange={handleSeekChange}
				onSeekMouseDown={handleSeekMouseDown}
				onSeekMouseUp={handleSeekMouseUp}
				fullscreen={state.fullscreen}
				playing={isPlaying}
				muted={isMuted}
				loaded={state.loaded}
				played={state.played} />
		</div>
	)
}

export default VideoPlayer
