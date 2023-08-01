import styles from "./dealflow.module.scss";
import { getPageById } from "lib/api";
import { pageRevalidate } from "utils/cache";
import { useEffect, useRef } from "react";
import TimelineSection from "components/timelineSection/TimelineSection";
import gsap from "gsap";
import { colors } from "@config/variables";
import LargeTitleCta from "slices/largeTitleCta/LargeTitleCta";
import FeatureFooter from "components/featureFooter/FeatureFooter";
import FeatureDiptych from "components/featureDiptych/FeatureDiptych";
import FeatureIntro from "components/featureIntro/FeatureIntro";
import LargeTitleText from "components/largeTitleText/LargeTitleText";
import DeathFlowBigImage from "components/deathflowBigImage/DeathFlowBigImage";
import WhatIsDealFlow from "components/whatIsDealflow/WhatIsDealFlow";
import DealflowLogo from "../svgs/dealflow-stroke.svg";
import { cn } from "utils/classnames";
import FeatureCards from "components/featureCards/FeatureCards";
import FillDealFlowLogo from "../svgs/dealflow-fill.svg"
const Portfolio = ({ content }) => {
  const timeline = useRef(gsap.timeline({ paused: true }));
  const dealflowLogoRef = useRef(null);
const dealflowLogoRefFill  = useRef(null);
  // const featureCardsTimeline = useRef(null)
  // const featureCardsTimelineCallback = useCallback(tl => {
  // 	featureCardsTimeline.current = tl.current
  // }, [])

  useEffect(() => {

    timeline.current.clear();

    timeline.current
      .to({}, { duration: 1 }, 0)
      .fromTo(
        dealflowLogoRef.current,
        { opacity: 0, y: "50%" }, // start at no opacity
        { duration: 0.95, opacity: 1, y: "0%" }, // 95% duration, full opacity
        0
      )
      .to(dealflowLogoRef.current,
        { duration: 0.05, opacity: 0 }, // 5% duration, no opacity
      )
      .fromTo(
        dealflowLogoRefFill.current,
        { opacity: 0, y: "50%" },
        { duration: 0.95, opacity: 0, y: "50%" },
        0
      )
	  .to(dealflowLogoRefFill.current,
        { duration: 0.05, opacity: 0, y:"50%" }, // 5% duration, no opacity
      )
    timeline.current.duration(1);
}, []);

  return (
    <div className={styles.dealflow}>
      <TimelineSection
        as="div"
        timeline={timeline}
        isTop
      >
        <div className="container">
          <FeatureIntro
            colors={{ circle: colors.purpleLight?.hex }}
            title={content.title}
            excerpt={content.headerExcerpt}
            image={content.headerIllustration}
          />
          <FeatureDiptych
            {...content.reach}
            backgroundColor={null}
            parallaxRatio={2.6}
            valign="center"
          />
          <FeatureCards
            {...content.deals}
            backgroundColor={{ bg: null, circle: colors.purpleLight?.hex }}
          />
          <FeatureDiptych
            {...content.workflow}
            parallaxRatio={0.5}
            imageParams={{
              desktopWidth: 1100,
              mobileWidth: 325,
              className: styles.workflowImage,
            }}
            valign="center"
          />
        </div>
      </TimelineSection>


      {content.choose && (
        <LargeTitleText {...content.choose} parallaxRatio={1} />
      )}
      <div>
       
		<WhatIsDealFlow {...content.whatIs}   />
      </div>

      {content.largeTitleCta && (
        <LargeTitleCta
          {...content.largeTitleCta}
          imageParams={{ desktopWidth: 1100, mobileWidth: 325 }}
          className={styles.largeTitleCta}
          imageClassName={styles.largeTitleCtaImage}
        />
      )}

      {content.footer && (
        <FeatureFooter
          {...content.footer}
          backgroundColors={{
            bg: colors.purple?.hex,
            circle: colors.purpleLight?.hex,
          }}
          className={styles.footer}
        />
      )}
	  <div
        ref={dealflowLogoRef}
        className={cn("desktop-only no-touch-only", styles.dealflowLogoFill)}
        aria-hidden
      >
        <DealflowLogo />
      </div>
	      <div
		   ref={dealflowLogoRefFill}
        className={cn("desktop-only no-touch-only", styles.dealflowLogo)}
        aria-hidden
      >
        <FillDealFlowLogo />
      </div>
      
  
    </div>
  );
};

export async function getStaticProps({ params, locale, preview = false }) {
  const props = await getPageById("page.dealflow", locale, preview);

  return {
    props: { ...props, preview },
    revalidate: pageRevalidate,
  };
}

export default Portfolio;
