import {useEffect, useRef, cloneElement, useCallback, useState} from 'react'
import styles from './slideshow.module.scss'
import ArrowSVG from 'svgs/arrowCta.svg'
import {cn} from 'utils/classnames'
import Button, {ButtonVariant} from 'components/button/Button'
import useRaf from 'hooks/useRaf'
import useResizeObserver from 'hooks/useResizeObserver'
import {supportsPassiveEvents, primaryInput} from 'detect-it'
import {clamp} from 'utils/maths'

const Slideshow = ({
                       children,
                       pageDots = false,
                       withButtons = false,
                       snapping = false,
                       className = null,
                       wrapperClassName = null,
                       prevButtonClassName = null,
                       nextButtonClassName = null,
                       style = null,
                       overflowHidden = true,
                       groupBy = 1,
                   }) => {
    const [refreshIndex, setRefreshIndex] = useState(0);
    const ref = useRef(null)
    const containerRef = useRef(null)

    const elementsRef = useRef(children.map(e => useRef(null)))
    const enabled = useRef(true)
    const dragging = useRef(false)
    const pressingButton = useRef(false)
    const scrolling = useRef(false)
    const controlling = useRef(false)
    const needsUpdate = useRef(false)
    const index = useRef(0)

    const containerBoundingClientRect = useRef({left: 0, width: 0, height: 0})
    const width = useRef(0)
    const x = useRef(0)
    const y = useRef(0)
    const vx = useRef(0)
    const ox = useRef(0)
    const initx = useRef(0)
    const initmx = useRef(0)
    const omx = useRef(0)
    const mx = useRef(0)
    const mvx = useRef(0)
    const destx = useRef(0)
    const direction = useRef(0)
    const constrainsEdges = useRef([])
    const stopped = useRef(true)

    const dragFrictions = 0.52
    const frictions = 0.9
    const borderFrictions = 0.55
    const dragEase = primaryInput === 'touch' ? 1 : 0.3

    const resizeObserver = useRef(null)
    const handleResize = (entries) => {
        entries.forEach((entry, i) => {
            const target = entry.target
            if (!target.__scale) target.__scale = 1
            if (!target.__x) target.__x = 0
            target.__width = entry.target.offsetWidth
            // target.__width = entry.boundingClientRect.width / target.__scale
            // target.__xInit = entry.boundingClientRect.left - target.__x + (entry.boundingClientRect.width - target.__width) / 2// - d
            target.__xInit = entry.target.offsetLeft
            // target.__offsetLeft = entry.target.offsetLeft
            if (!i) containerBoundingClientRect.current.left = target.__xInit
            resizeObserver.current.unobserve(target)
        })

        needsUpdate.current = true
        tick(true)
    }

    const renderChildren = useCallback(() => {
        const clonedChildren = []
        children.forEach((element, i) => {
            if (element.ref) {
                clonedChildren[i] = element
                elementsRef.current[i] = element.ref
            } else {
                clonedChildren[i] = cloneElement(element, {ref: elementsRef.current[i]})
            }
        })
        return clonedChildren
    }, [children])

    useEffect(() => {
        const passive = supportsPassiveEvents ? {passive: true} : false
        window.addEventListener('mousemove', drag, passive)
        window.addEventListener('touchmove', drag, passive)
        window.addEventListener('mouseup', stopDrag, passive)
        window.addEventListener('touchend', stopDrag, passive)

        resizeObserver.current = new IntersectionObserver(handleResize)

        return () => {
            window.removeEventListener('mousemove', drag)
            window.removeEventListener('touchmove', drag)
            window.removeEventListener('mouseup', stopDrag)
            window.removeEventListener('touchend', stopDrag)

            resizeObserver.current.disconnect()
        }
    }, [groupBy])

    const tick = (now = false) => {
        if (!elementsRef.current?.length || !containerBoundingClientRect.current.width) return

        if (dragging.current) {
            destx.current = initx.current - mx.current
            vx.current += (destx.current - x.current) * dragEase
            vx.current *= dragFrictions
            controlling.current = false
        } else if (snapping || controlling.current) {
            vx.current += (destx.current - x.current) * 0.15
            vx.current *= dragFrictions
        }

        // constrains (if not looping)
        const contrainSpring = now ? 1 : (dragging.current ? 0.8 : 0.1)
        const left = constrainsEdges.current[0]
        const right = constrainsEdges.current[1] // - elementsRef.current[elementsRef.current.length - 1].current.__width

        if (x.current + vx.current < left) {
            vx.current += (left - x.current) * contrainSpring
            vx.current *= borderFrictions
        } else if (x.current + vx.current > right) {
            vx.current += (right - x.current) * contrainSpring
            vx.current *= borderFrictions
        } else {
            vx.current *= frictions
        }

        x.current += vx.current

        if (dragging.current) {
            vx.current = x.current - ox.current
        } else if (vx.current > -0.3 && vx.current < 0.3 && !stopped.current) {
            stopped.current = true
        }

        // rounding values
        x.current = ((x.current * 100) | 0) / 100
        let delta = x.current - destx.current
        if (delta < 0) delta *= -1
        if (delta < 0.01) x.current = destx.current

        if (ox.current !== x.current) needsUpdate.current = true
        if (needsUpdate.current) updateDom()

        ox.current = x.current
    }

    useRaf(() => {
        tick()
    })

    const updateDom = () => {
        // let d = 0
        // const w = elementsRef.current[0].current.__width
        for (let i = 0, li = elementsRef.current.length; i < li; i++) {
            const element = elementsRef.current[i].current
            if (!element.__xInit === undefined) continue
            const inView = true// elementX + element.__width >= 0 && elementX <= windowSize.width
            if (inView) {
                // element.__x = Math.max(-x.current, -element.__xInit + containerBoundingClientRect.current.left)
                // element.__scale = 1 - (-x.current + element.__xInit - containerBoundingClientRect.current.left) * (device === DESKTOP ? 0.2 : 0.1) / containerBoundingClientRect.current.width
                // d += Math.max(0, w - w * element.__scale)

                element.__x = -x.current // - d
                // element.__rotate = (1 - element.__scale) * (device === DESKTOP ? 10 : 5)
                element.style.transform = `translate3d(${element.__x}px,${y.current}px,0)`
                // element.style.transform = `translate3d(${element.__x}px,${y.current}px,0) scale(${element.__scale},${element.__scale}) rotate(${element.__rotate}deg)`

                if (!element.__inView) {
                    element.style.visibility = ''
                    // element.style.willChange = 'transform'
                }
            } else if (element.__inView) {
                element.style.transform = ''
                element.style.visibility = 'hidden'
                // element.style.willChange = ''
            }

            element.__inView = inView
        }

        needsUpdate.current = false
    }

    const resize = () => {
        if (containerRef.current && width.current && containerBoundingClientRect.current) {
            constrainsEdges.current = [0, width.current - containerBoundingClientRect.current.width]
            enabled.current = width.current > containerRef.current.clientWidth
            elementsRef.current.forEach(element => resizeObserver.current.observe(element.current))
        }
    }

    useResizeObserver(containerRef, (e) => {
        containerBoundingClientRect.current.width = e.contentRect.width
        containerBoundingClientRect.current.height = e.contentRect.height
        resize()
    })

    useResizeObserver(ref, (e) => {
        width.current = e.contentRect.width
        resize()
    })

    const handlePrev = () => {
        controlling.current = true
        setIndex(index.current - groupBy)
    }

    const handleNext = () => {
        controlling.current = true
        setIndex(index.current + groupBy)
    }

    const handleSetIndex = (i) => {
        setIndex(i * groupBy);
        setRefreshIndex(index => index + 1);
    }

    const handleTouchStartButton = (e) => {
        pressingButton.current = true
    }

    const handleTouchEndButton = (e) => {
        requestAnimationFrame(() => {
            pressingButton.current = false
        })
    }

    const handleDragStart = (e) => {
        e.preventDefault()
    }

    const handleMouseDown = (e) => {
        startDrag(e)
    }

    const handleTouchStart = (e) => {
        startDrag(e)
    }

    const startDrag = (e) => {
        if ((e.button !== undefined && e.button !== 0) || pressingButton.current) {
            return
        }

        const event = (e.touches && e.touches[0]) || e

        stopped.current = false
        mx.current = event.pageX
        omx.current = mx.current
        initmx.current = mx.current

        initx.current = mx.current + x.current

        vx.current = 0
        mvx.current = 0

        dragging.current = true
        scrolling.current = false
    }

    const drag = (e) => {
        if (dragging.current && !pressingButton.current) {
            const event = (e.touches && e.touches[0]) || e
            mx.current = event.pageX
            mvx.current = mx.current - omx.current

            const d = mx.current - initmx.current

            if (Math.abs(d) > 100) {
                direction.current = Math.sign(d)
                ref.current.style.pointerEvents = 'none'
            } else if (Math.abs(mvx.current) > 1) {
                direction.current = Math.sign(mvx.current)
                ref.current.style.pointerEvents = 'none'
            } else {
                direction.current = 0
            }

            omx.current = mx.current
        }
    }

    const stopDrag = () => {
        if (dragging.current) {
            ref.current.style.pointerEvents = ''

            if (snapping && !pressingButton.current) {
                setIndex(index.current - direction.current * groupBy)
            }

            dragging.current = false
        }
    }

    const setIndex = (i) => {
        index.current = clamp(i, 0, elementsRef.current.length - 1)
        destx.current = clamp(elementsRef.current[index.current].current.__xInit, constrainsEdges.current[0], constrainsEdges.current[1])
    }

    const numberOfDots = Math.ceil(children.length / groupBy);

    return (
        <div className={cn(styles.slideshow, className)} style={style}>
            <div
                ref={containerRef}
                className={cn(styles.wrapper, overflowHidden && styles.overflowHidden)}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                onDragStart={handleDragStart}>
                <div ref={ref} className={cn(styles.list, wrapperClassName)}>
                    {renderChildren()}
                </div>
                {withButtons && (
                    <>
                        <Button
                            className={cn(styles.btn, prevButtonClassName, styles.btnPrev)}
                            // disabled={!loop && buttonState === -1}
                            onMouseDown={handleTouchStartButton}
                            onMouseUp={handleTouchEndButton}
                            onTouchStart={handleTouchStartButton}
                            onTouchEnd={handleTouchEndButton}
                            onClick={handlePrev}
                            variant={ButtonVariant.rounded}
                            label='Previous'>
                            <ArrowSVG/>
                        </Button>
                        <Button
                            className={cn(styles.btn, nextButtonClassName, styles.btnNext)}
                            // disabled={!loop && buttonState === 1}
                            onMouseDown={handleTouchStartButton}
                            onMouseUp={handleTouchEndButton}
                            onTouchStart={handleTouchStartButton}
                            onTouchEnd={handleTouchEndButton}
                            onClick={handleNext}
                            variant={ButtonVariant.rounded}
                            label='Next'>
                            <ArrowSVG/>
                        </Button>
                    </>
                )}
                {pageDots && numberOfDots > 1 && (
                    <div className={styles.dots}>
                        {Array(numberOfDots).fill(1).map((_, i) => (
                            <div key={i} className={styles.dotWrapper} onClick={() => handleSetIndex(i)}>
                                <div className={cn(styles.dot, index.current === i && styles.dotSelected)}/>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Slideshow
