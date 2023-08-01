import cn from 'classnames'
import styles from './investment-management.module.scss'
import {getPageById} from 'lib/api'
import {pageRevalidate} from 'utils/cache'
import {colors} from '@config/variables'

import SmoothScroll from 'components/smoothScroll/SmoothScroll'
import CustomBlockContent from 'components/customBlockContent/CustomBlockContent'
import {SanityImage} from 'components/image/Image'
import CircleBackground from 'components/circleBackground/CircleBackground'
import Parallax from 'components/parallax/Parallax'
import Button, {ButtonVariant} from "../components/button/Button";
import Arrow from "../svgs/arrowCta.svg";
import Marquee from "../components/marquee/Marquee";

const InvestmentManagement = (props) => {
    const {content} = props

    return (
        <SmoothScroll childClassName={styles.investmentManagement}>
            <section className={styles.header}>
                <div className={cn('container', styles.headerContainer)}>
                    <div>
                        <h1 className={cn('hm-1 hd-1', styles.headerTitle)}>{content.headerTitle}</h1>
                        <p className={styles.headerSubtitle}>{content.headerSubtitle}</p>
                        <p className={styles.trustedBy}>{content.trusted}</p>
                        <ul className={styles.customers}>
                            {content.customers.map(c => (
                                <li key={c._key} className={styles.customer}>
                                    <SanityImage image={c}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Parallax z={-1.6} className={styles.phonesWrapper}>
                        <SanityImage image={content.phones} className={styles.phones}/>
                    </Parallax>
                </div>
                <CircleBackground
                    className={styles.headerBackground}
                    childClassName={styles.circle}
                    colors={{bg: colors.lightBlue?.hex, circle: colors.yellow?.hex}}
                />
            </section>

            <section className={styles.centralised}>
                <CustomBlockContent
                    blocks={content.transparency}
                    className={cn(styles.sectionTitle, styles.transparency)}
                    noDom
                />
                <div className={cn(styles.sectionText, styles.centralisedSubtitle)}>{content.subtitle}</div>
                <div style={{textAlign: 'center'}}>
                    <Button variant={ButtonVariant.rounded} className={styles.cta} link={content.cta}>
                        <Arrow/>{content.cta.label}
                    </Button>
                </div>
                <SanityImage image={content.logo} className={styles.logo}/>
                <div className={styles.splitSection}>
                    <h2 className={styles.sectionTitle}>{content.centralisedTitle}</h2>
                    <hr className={styles.divider}/>
                    <p className={styles.sectionText}>{content.centralisedTitleDetails}</p>
                </div>
                <Parallax z={-1}>
                    <SanityImage image={content.example} className={styles.example}/>
                </Parallax>
            </section>

            <section className={styles.design}>
                <div className={styles.splitSection}>
                    <h2 className={styles.sectionTitle}>{content.designTitle}</h2>
                    <hr className={styles.divider}/>
                    <p className={styles.sectionText}>{content.designTitleDetails}</p>
                </div>
            </section>

            <section className={styles.automation}>
                <Parallax z={-0.8} className={styles.chartWrapper}>
                    <SanityImage image={content.chart} className={styles.chart}/>
                </Parallax>
                <div>
                    <h2 className={styles.sectionTitle}>{content.automationTitle}</h2>
                    <p className={cn(styles.sectionText, styles.automationText)}>{content.automationTitleDetails}</p>
                    <Button variant={ButtonVariant.rounded} className={styles.cta} link={content.cta}>
                        <Arrow/>{content.cta.label}
                    </Button>
                </div>
                <CircleBackground
                    className={styles.automationBackground}
                    childClassName={styles.circle}
                    colors={{bg: colors.greenDark?.hex, circle: colors.green?.hex}}
                />
            </section>

            <section className={styles.cards}>
                <div className={styles.cardsContainer}>
                    {content.cards.map(c => (
                        <div key={c._key} className={styles.card}>
                            <SanityImage image={c.icon} className={styles.cardIcon}/>
                            <h3 className={styles.cardTitle}>{c.title}</h3>
                            <p className={styles.cardSubtitle}>{c.subtitle}</p>
                        </div>
                    ))}
                </div>
                <Marquee
                    className={styles.screenshots}
                    itemClassName={styles.screenshot}
                    items={content.screenshots}
                    perItemDuration={15}
                    imageWidth={1200}
                />

                <h2 className={styles.bigText}>{content.bigText}</h2>

                <div className={styles.finishWrapper}>
                    <p className={cn(styles.sectionText, styles.finish)}>{content.finish}</p>
                    <Button variant={ButtonVariant.rounded} className={styles.cta} link={content.cta}>
                        <Arrow/>{content.cta.label}
                    </Button>
                </div>
                <CircleBackground
                    className={styles.cardsBackgroundTop}
                    childClassName={styles.circle}
                    colors={{bg: colors.lightBlue?.hex, circle: colors.yellow?.hex}}
                />
                <CircleBackground
                    className={styles.cardsBackgroundBottom}
                    childClassName={styles.circle}
                    colors={{bg: colors.lightBlue?.hex, circle: colors.yellow?.hex}}
                />
            </section>
        </SmoothScroll>
    )
}

export async function getStaticProps({params, locale, preview = false}) {
    const props = await getPageById('page.investmentManagement', locale, preview)

    return {
        props: {...props, preview},
        revalidate: pageRevalidate,
    }
}

export default InvestmentManagement
