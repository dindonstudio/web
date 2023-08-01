import InView from 'react-intersection-observer'
import useResizeObserver from 'hooks/useResizeObserver'
import cn from 'classnames'
import styles from './VideoLoop.module.scss'
import {useState, useRef, useEffect, forwardRef, useCallback} from 'react'
import useDebouncedCallback from 'hooks/useDebouncedCallback'

const VideoLoop = ({srcs, poster, ratio, className, children, noStyle = false, loop = true}, ref) => {
	const isMounted = useRef(false)
	const localeRef = useRef(null)
	const [src, setSrc] = useState('')
	srcs = [{url: srcs.sd, width: 320}, {url: srcs.md, width: 540}, {url: srcs.hd, width: 720}]

	const setRefs = useCallback(
		(node) => {
			localeRef.current = node
			if (ref) ref.current = node
		}, [ref])

	useEffect(() => {
		isMounted.current = true
		return () => {
			isMounted.current = false
		}
	}, [])

	useResizeObserver(localeRef, useDebouncedCallback((entry) => {
		if (isMounted.current && srcs.length) {
			const src = srcs.filter((e) => entry.width < e.width)
			if (src[0]) setSrc(src[0].url)
			else if (srcs.length) setSrc(srcs[srcs.length - 1].url)
		}
	}), [localeRef.current, isMounted.current, srcs, setSrc])

	const onInView = (inView, entry) => {
		entry.target.isInView = inView
		if (inView) {
			entry.target.currentTime = 0
			const p = entry.target.play()
			if (p !== undefined) {
				p.catch((error) => { console.warn('video', error) })
			}
		} else {
			entry.target.pause()
		}
	}

	const onLoadedMetadata = (e) => {
		e.currentTarget.classList.add(styles.loaded)
		if (e.currentTarget.paused && e.currentTarget.isInView) {
			e.currentTarget.play()
		}
	}

	return (
		<div ref={setRefs} className={cn(!noStyle && styles.wrapper, className)}>
			{src && <InView as='video' onChange={onInView} onLoadedMetadata={onLoadedMetadata} preload='metadata' loop={loop} muted playsInline src={src} poster={poster} />}
			{ratio && <div style={{width: '100%', paddingBottom: 1 / ratio * 100 + '%'}} />}
			{children}
		</div>
	)
}

export default forwardRef(VideoLoop)
