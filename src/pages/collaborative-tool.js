import cn from 'classnames'
import styles from './collaborative-tool.module.scss'
import {getPageById} from 'lib/api'
import {pageRevalidate} from 'utils/cache'
import {colors} from '@config/variables'
import CustomBlockContent from 'components/customBlockContent/CustomBlockContent'
import {LocalImage, SanityImage} from 'components/image/Image'
import CircleBackground from 'components/circleBackground/CircleBackground'
import Parallax from 'components/parallax/Parallax'
import Button, {ButtonVariant} from "../components/button/Button";
import Arrow from "../svgs/arrowCta.svg";
import Marquee from "../components/marquee/Marquee";
import {useEffect, useRef} from "react";
import greatness from "../images/greatness.png";
import useMediaQuery from "../hooks/useMediaQuery";
import gsap from "gsap";
import TimelineSection from "../components/timelineSection/TimelineSection";
import {DESKTOP} from "../utils/mediaQueries";
import Slideshow from "../components/slideshow/Slideshow";

const CollaborativeTool = (props) => {
    const {content} = props
    const timeline = useRef(null)
    const greatnessRef = useRef(null)
    const device = useMediaQuery();

    useEffect(() => {
        if (device) {
            timeline.current = gsap.timeline({paused: true}).to({}, {duration: 1})
            if (device === DESKTOP) {
                timeline.current.fromTo(greatnessRef.current,
                    {rotate: '240deg', y: '10%'},
                    {duration: 1, rotate: '-240deg', y: '10%'}, 0)
            } else {
                timeline.current.fromTo(greatnessRef.current,
                    {rotate: '240deg', y: '50%'},
                    {duration: 1, rotate: '-240deg', y: '-50%'},
                    0
                )
            }
            timeline.current.duration(1)
        }
    }, [device])

    return (
        <TimelineSection timeline={timeline} className={styles.collaborativeTool}>
            <section className={styles.header}>
                <div>
                    <h1 className={cn('hm-1 hd-1', styles.pageTitle)}>{content.pageTitle}</h1>
                    <p className={styles.pageSubtitle}>{content.pageSubtitle}</p>
                </div>
                <SanityImage image={content.logo} className={styles.logo}/>

                <div className={styles.splitSection}>
                    <h2 className={styles.sectionTitle}>{content.headerTitle}</h2>
                    <hr className={styles.divider}/>
                    <p className={styles.sectionText}>{content.headerText}</p>
                </div>

                <div className={styles.faceWrapper}>
                    <SanityImage image={content.tianming} className={styles.face}/>
                    <div className={styles.greatnessWrapper}>
                        <div ref={greatnessRef}>
                            <LocalImage
                                image={greatness}
                                className={styles.greatness}
                                alt='Greatness needs a new perspective'
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.transparencyWrapper}>
                    <div className={styles.transparencyInner}>
                        <CustomBlockContent
                            blocks={content.transparencyTitle}
                            className={cn(styles.sectionTitle, styles.transparency)}
                            noDom
                        />
                        <div
                            className={cn(styles.sectionText, styles.transparencyText)}>{content.transparencyText}</div>
                        <div style={{textAlign: 'center'}}>
                            <Button variant={ButtonVariant.rounded} className={styles.cta} link={content.cta}>
                                <Arrow/>{content.cta.label}
                            </Button>
                        </div>
                    </div>
                    <Parallax z={-1}>
                        <SanityImage image={content.example} className={styles.example}/>
                    </Parallax>
                </div>

                <div className={styles.streamline}>
                    <h2 className={styles.sectionTitle}>{content.headerTitle2}</h2>
                    <hr className={cn(styles.divider, styles.dividerVertical)}/>
                    <p className={styles.sectionText}>{content.headerText2}</p>
                </div>

                <CircleBackground
                    className={styles.headerBackground}
                    childClassName={styles.circle}
                    colors={{
                        bg: 'radial-gradient(40.85% 69.92% at 49.81% 50.11%, #CDC3CF 0%, #CDC3CF 94%, #CDC3CF 100%)',
                        circle: colors.yellow?.hex
                    }}
                />
            </section>

            <section className={styles.design}>
                <Parallax z={-1} className={styles.chartWrapper}>
                    <SanityImage image={content.chart} className={styles.chart}/>
                </Parallax>
                <div>
                    <h2 className={cn(styles.sectionTitle, styles.designTitle)}>{content.designTitle}</h2>
                    <p className={cn(styles.sectionText, styles.designText)}>{content.designText}</p>
                    <div>
                        <Button variant={ButtonVariant.rounded} className={styles.cta} link={content.cta}>
                            <Arrow/>{content.cta.label}
                        </Button>
                    </div>
                </div>
            </section>

            <section className={styles.growth}>
                <Marquee
                    className={styles.screenshots}
                    itemClassName={styles.screenshot}
                    items={content.screenshots}
                    perItemDuration={15}
                    imageWidth={1200}
                />
                <div className={cn(styles.splitSection, styles.growthSection)}>
                    <h2 className={cn(styles.sectionTitle, styles.growthTitle)}>{content.growthTitle}</h2>
                    <hr className={styles.divider}/>
                    <p className={styles.sectionText}>{content.growthText}</p>
                </div>
            </section>

            <section className={styles.cards}>
                <Parallax z={-1}>
                    <SanityImage image={content.cardsBackground} className={styles.cardsIllustration}/>
                </Parallax>
                <div className={styles.cardsContainer}>
                    <Slideshow
                        overflowHidden={false}
                        pageDots
                        snapping
                        groupBy={device === DESKTOP ? 3 : 1}
                    >
                        {content.cards.map((c, i) => (
                            <div key={c._key} className={styles.card} style={{zIndex: content.cards.length - i}}>
                                <SanityImage image={c.photo} className={styles.cardPhoto}/>
                                <h3 className={styles.cardText}>{c.text}</h3>
                                <div className={styles.cardBottom}>
                                    <p className={styles.cardName}>{c.name}</p>
                                    <p className={styles.cardCompany}>{c.company}</p>
                                </div>
                            </div>
                        ))}
                    </Slideshow>
                </div>

                <h2 className={styles.bigText}>{content.bigText}</h2>

                <div className={styles.finishWrapper}>
                    <p className={styles.finish}>{content.finish}</p>
                    <Button variant={ButtonVariant.rounded} className={styles.cta} link={content.cta}>
                        <Arrow/>{content.cta.label}
                    </Button>
                </div>
                <CircleBackground
                    className={styles.cardsBackground}
                    childClassName={styles.circle}
                    colors={{bg: colors.lightBlue?.hex, circle: colors.green?.hex}}
                />
            </section>
        </TimelineSection>
    )
}

export async function getStaticProps({params, locale, preview = false}) {
    const props = await getPageById('page.collaborativeTool', locale, preview)

    return {
        props: {...props, preview},
        revalidate: pageRevalidate,
    }
}

export default CollaborativeTool
