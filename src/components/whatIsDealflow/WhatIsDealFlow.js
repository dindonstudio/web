// @ts-nocheck
import cn from "classnames";
import { LocalImage } from "components/image/Image";
import Parallax from "components/parallax/Parallax";
import SmoothScroll from "components/smoothScroll/SmoothScroll";
import CustomBlockContent from "components/customBlockContent/CustomBlockContent";
import Gradient from "svgs/deathflow-choose-radient.svg";
import reactStringReplace from "react-string-replace";
import CircleBackground from "components/circleBackground/CircleBackground";
import TimelineSection from "components/timelineSection/TimelineSection";
import styles from "./WhatIsDealFlow.module.scss";
import { SanityImage } from "components/image/Image";
import Logo from "svgs/logo.svg";
import Button, { ButtonVariant } from "components/button/Button";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { useInView } from "react-intersection-observer";
import { DESKTOP } from "utils/mediaQueries";
import LogoEm from "svgs/Logo-EMERALD GREEN.svg";
import Arrow from "svgs/arrowCta.svg";
import EddaLogo from "svgs/Edda-logo.svg";
import useSlice from "hooks/useSlice";
import DealflowLogo from "svgs/dealflow-stroke.svg";
import FillDealFlowLogo from "svgs/dealflow-fill.svg";
import KeenSliderThumbnail from "components/keenSliderThumbnail/KeenSliderThumbnail";

import { useRef, useState, useEffect, useCallback } from "react";
import KeenSlider from "components/keenSlider/KeenSlider";
gsap.registerPlugin(ScrollToPlugin);

const WhatIsDealFlow = ({
  titleWhatIs,
  textWhat9s,
  imageTop,
  titleWhyUse,
  textWhyUse,
  featuresCard,
  featuresCardFunction,
  titleWhatFeatures,
  textWhatFeatures,
  titleBestDeals,
  textBestDeals,
  imageBestDeals,
  titleTheMostComplete,
  textTheMostComplete,
  topFeatures,
  titleKeepDealroom,
  textKeepDealroom,
  cta,
  textGoodBye,
  backgroundColor = {
    bg: null,
    circle:
      "    background: radial-gradient(rgb(208, 206, 255) 30%, rgba(208, 206, 255, 0) 70%);",
  },
  circleClassName = null,
  parallaxRatio
}) => {
  const ref = useRef(null);
  const anchorRef = useRef(null);
  const imageRef = useRef(null);
  const smoothScrollRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const dealflowLogoRef = useRef(null);
  const dealflowLogoRefFill = useRef(null);
  const timeline = useRef(gsap.timeline({ paused: true }));
  const [blockTitles, setBlockTitles] = useState([]);

  useEffect(() => {
    timeline.current.clear();

    // dealflowLogoRefFill transitions
    timeline.current
      .fromTo(
        dealflowLogoRefFill.current,
        { opacity: 0, y: "60%" },
        { duration: 0.2, opacity: 1, y: "0%" }, // 10% duration, full opacity
        0
      )
      .to(
        dealflowLogoRefFill.current,
        { duration: 0.3, opacity: 0, y: "-30%" } // 40% duration, no opacity
      );

    // dealflowLogoRef transitions
    timeline.current
      .fromTo(
        dealflowLogoRef.current,
        { opacity: 0 },
        { duration: 0.1, opacity: 0, y: "50%" } // 50% duration, full opacity
      )

      .to(
        dealflowLogoRef.current,
        { duration: 0.7, opacity: 1, y: "0%" } // 50% duration, no opacity
      );

    timeline.current.duration(1.3);
  }, []);

  const handleToggleNav = () => {
    setIsOpen(!isOpen);
  };
  const elements =
    featuresCard &&
    featuresCard.map((feature) => {
      return {
        title: feature.title,
        text: feature.text,
      };
    });
  const elementsFunction =
    featuresCardFunction &&
    featuresCardFunction.map((feature) => {
      return {
        title: feature.title,
        text: feature.text,
      };
    });
  const scrollRefs = {
    WhatIs: useRef(null),
    WhyUse: useRef(null),
    WhatFeatures: useRef(null),
    BestDeals: useRef(null),
    TheMostComplete: useRef(null),
    KeepDealroom: useRef(null),
  };

  const handleClickScroll = (e, target) => {
    e.preventDefault();
    const targetElement = scrollRefs[target].current;
    const rect = targetElement.getBoundingClientRect();
    const scrollOffset = window.pageYOffset + rect.top;

    gsap.to(window, {
      duration: 1,
      scrollTo: { y: scrollOffset - 200, autoKill: true },
      ease: "quart.out",
    });
  };

  useEffect(() => {
    setBlockTitles([
      {
        id: "WhatIs",
        title: "What Is Deal Management Software?",
      },
      {
        id: "WhyUse",
        title: "Why Use Deal Management Software in Your VC Fund?",
      },
      {
        id: "WhatFeatures",
        title: "What Features Should You Look for in Deal Management Software?",
      },
      {
        id: "BestDeals",
        title: "The Best Deal Management Software Solutions Available Today",
      },
      {
        id: "TheMostComplete",
        title: "The Most Complete Dealflow Management Software",
      },
      {
        id: "KeepDealroom",
        title: "Keep Your Dealroom Humming with a Deal Flow Management Tool",
      },
    ]);
  }, []);

  const [isRefInView, setIsRefInView] = useState(false);

  const [inViewRef, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const setRefs = useCallback(
    (node) => {
      inViewRef(node);
      if (ref) ref.current = node;
    },
    [inViewRef]
  );

  useEffect(() => {
    if (inView) {
      gsap
        .timeline()
        .fromTo(
          anchorRef.current,
          { x: "-200%", scale: 1, opacity: 0 },
          { duration: 1, x: 0, scale: 1, opacity: 1, ease: "expo.out" },
          0
        );
      gsap
        .timeline()
        .fromTo(
          imageRef.current,
          { y: "10%", scale: 0.95, opacity: 0 },
          { duration: 1, y: 0, scale: 1, opacity: 1, ease: "expo.out" },
          0
        );
    }
  }, [inView]);
  const bigSentenceRef = useRef(null); // New reference for bigSentence__container
  const goodByeRef = useRef(null);
  const [bigSentenceInViewRef, bigSentenceInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const setBigSentenceRefs = useCallback(
    (node) => {
      bigSentenceInViewRef(node);
      if (bigSentenceRef) bigSentenceRef.current = node;
    },
    [bigSentenceInViewRef]
  );

  useEffect(() => {
    if (bigSentenceInView) {
      gsap.fromTo(
        bigSentenceRef.current.children,
        {
          y: "20%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
          duration: 1,
          ease: "expo.out",
          stagger: 0.15, // Delay between each child animation
        }
      );
      0.2; // Delay between each child animation
      gsap.fromTo(
        goodByeRef.current,
        {
          y: "10%",
          opacity: 0,
        },
        {
          delay: 0.9,
          y: "0%",
          opacity: 1,
          duration: 1,
          ease: "expo.out",
        }
      ); // Delay between each child animation
    }
  }, [bigSentenceInView]);

  return (
    <div>
      <TimelineSection
        ref={ref}
        as="section"
        timeline={timeline}
        childClassName={styles.whatIsDealFlow}
        isTop
      >
        <div className={cn("container whatIsDealFlow", styles.whatIsDealFlow)}>
          <div
            ref={imageRef}
            className={cn("centeredContainer", styles.centeredContainer)}
          >
            <div ref={setRefs} className={cn("topImage", styles.topImage)}>
              <SanityImage
                image={imageTop}
                desktopWidth={900}
                mobileWidth={410}
                priority
              />
            </div>
          </div>
          <div
            ref={scrollRefs.WhatIs}
            className={cn("container whatIs", styles.whatIs)}
          >
            <div>
              <div>
                <CustomBlockContent
                  as="p"
                  blocks={titleWhatIs}
                  className={cn(" hm-3 hd-3", styles.rightAligned)}
                  noDom
                />
              </div>
            </div>
            <CustomBlockContent
              as="h2"
              blocks={textWhat9s}
              className={cn("pd-16 pm-16 ", styles.textWhatIs)}
              noDom
            />
          </div>
          <div className={cn("logo logo", styles.logo)}>
            <LogoEm />
          </div>
          <div id="WhyUse" className={cn("container whyUse", styles.whyUse)}>
            <div>
              <div>
                <CustomBlockContent
                  ref={scrollRefs.WhyUse}
                  as="p"
                  blocks={titleWhyUse}
                  className={cn(" hm-3 hd-3", styles.centerAligned)}
                  noDom
                />
              </div>
            </div>
            <CustomBlockContent
              as="h2"
              blocks={textWhyUse}
              className={cn("pd-16 pm-16 ", styles.textWhyUse)}
            />
          </div>
          {/* <KeenSlider elements={elements} /> */}
          <KeenSliderThumbnail elements={elements} />
          <div className={cn("container function", styles.function)}>
            <div>
              <div>
                <CustomBlockContent
                  as="p"
                  ref={scrollRefs.WhatFeatures}
                  blocks={titleWhatFeatures}
                  className={cn(" hm-3 hd-3", styles.centerAligned)}
                  noDom
                />
              </div>
            </div>
            <CustomBlockContent
              as="h2"
              blocks={textWhatFeatures}
              className={cn("pd-16 pm-16 ", styles.textWhyUse)}
            />
          </div>
        </div>
        <KeenSlider elements={elementsFunction} />

        <div className={cn("container bestDeal", styles.bestDeal)}>
          <div
            className={cn(
              "container bestDeal__container",
              styles.bestDeal__container
            )}
          >
            <Parallax
              z={(parallaxRatio = 0.3)}
              className={styles.imageWrap}
              mediaQueries={[DESKTOP]}
            >
              <div>
                <CustomBlockContent
                  as="p"
                  ref={scrollRefs.BestDeals}
                  blocks={titleBestDeals}
                  className={cn(" hm-3 hd-3", styles.centerAligned)}
                  noDom
                />
              </div>
              <CustomBlockContent
                as="h2"
                blocks={textBestDeals}
                className={cn("pd-16 pm-16 ", styles.text)}
                noDom
              />
            </Parallax>
          </div>

          <Parallax
            z={(parallaxRatio = -0.3)}
            className={styles.imageWrap}
            mediaQueries={[DESKTOP]}
          >
            <div
              className={cn(
                "container bestDeal__image",
                styles.bestDeal__image
              )}
            >
              <SanityImage
                image={imageBestDeals}
                desktopWidth={900}
                mobileWidth={410}
                priority
              />
            </div>
          </Parallax>
          <CircleBackground
            className={styles.background}
            childClassName={cn(styles.circle, circleClassName)}
            colors={backgroundColor}
            overflowVisible
            fixed={false}
          />
        </div>
        <div className={cn("container complete", styles.complete)}>
          <Parallax
            z={(parallaxRatio = 0.3)}
            className={styles.imageWrap}
            mediaQueries={[DESKTOP]}
          >
            <div
              className={cn(
                "container complete__container",
                styles.complete__container
              )}
            >
              <div className={cn("logo__container ", styles.logo__container)}>
                <div className={cn("inLineLogoSmall ", styles.inLineLogoSmall)}>
                  <EddaLogo />
                </div>
                <CustomBlockContent
                  as="p"
                  ref={scrollRefs.TheMostComplete}
                  blocks={titleTheMostComplete}
                  className={cn(" hm-3 hd-3", styles.centerAligned)}
                  noDom
                />
              </div>
              <CustomBlockContent
                as="h2"
                blocks={textTheMostComplete}
                className={cn("pd-16 pm-16 ", styles.text)}
                noDom
              />
            </div>
          </Parallax>

          <div
            className={cn(
              "container complete__feature",
              styles.complete__feature
            )}
          >
            <Parallax
              z={(parallaxRatio = -0.3)}
              className={styles.imageWrap}
              mediaQueries={[DESKTOP]}
            >
              <div
                className={cn(
                  "container complete__feature__container",
                  styles.complete__feature__container
                )}
              >
                <h3 className={cn("hd-5 hm-3", styles.feature__title)}>
                  Top Features:
                </h3>
                {topFeatures.map((item, index) => (
                  <p key={index} className={cn("pd-16 pm-16", styles.feature)}>
                    <Arrow className="desktop-only" aria-hidden />
                    {item.title}
                  </p>
                ))}
              </div>
            </Parallax>
          </div>
        </div>
        <div className={cn("logo logo", styles.logo)}>
          <LogoEm />
        </div>
        <div className={cn("container functionKeep", styles.functionKeep)}>
          <div>
            <div>
              <CustomBlockContent
                as="p"
                ref={scrollRefs.KeepDealroom}
                blocks={titleKeepDealroom}
                className={cn(" hm-3 hd-3", styles.centerAligned)}
                noDom
              />
            </div>
          </div>
          <CustomBlockContent
            as="h2"
            blocks={textKeepDealroom}
            className={cn("pd-16 pm-16 ", styles.textWhyUse)}
          />
        </div>
        <div
          ref={setBigSentenceRefs}
          className={cn("container bigSentence", styles.bigSentence)}
        >
          <h2 className={cn("hd-16 hm-2", styles.bigSentence__text)}>TRY</h2>
          <div className={cn("inLineLogo ", styles.inLineLogo)}>
            <EddaLogo />
          </div>
          <h2
            className={cn("hd-16 hm-2 desktop-only", styles.bigSentence__text)}
          >
            FOR
          </h2>

          <div
            ref={setBigSentenceRefs}
            className={cn(
              "bigSentence__container ",
              styles.bigSentence__container
            )}
          >
            <h2
              className={cn("hd-16 hm-2 mobile-only", styles.bigSentence__text)}
            >
              FOR
            </h2>
            <h2 className={cn("hd-16 hm-2", styles.bigSentence__text)}>FREE</h2>
          </div>

          <h2 className={cn("hd-16 hm-2", styles.bigSentence__text)}>TODAY</h2>
        </div>
        <div ref={goodByeRef} className={cn(styles.goodBye__container)}>
          <CircleBackground
            className={styles.background}
            childClassName={cn(styles.circleBottom, circleClassName)}
            colors={backgroundColor}
            overflowVisible
            fixed={false}
          />
          <div>
            <CustomBlockContent
              as="p"
              blocks={textGoodBye}
              className={cn("hd-3 hm-3", styles.goodBye__text)}
              noDom
            />
          </div>

          <div className={cn("", styles.button__container)}>
            <Button
              variant={ButtonVariant.rounded}
              className={styles.cta}
              link={cta}
            >
              <Arrow />
              {cta.label}
            </Button>
          </div>
        </div>
      </TimelineSection>
      <div className={styles.container}>
        <div
          ref={anchorRef}
          className={cn(styles.circleNav, isOpen && styles.open)}
          onClick={handleToggleNav}
        >
          {isOpen ? (
            <span className={styles.crossIcon}>&times;</span>
          ) : (
            <>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
            </>
          )}
        </div>
        <div
          className={cn(
            "anchor__nav",
            styles.anchor__nav,
            isOpen && styles.open
          )}
        >
          <h4 className={cn("hd-5 hm-3", styles.title)}>Guide Topics</h4>
          {blockTitles.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => {
                handleClickScroll(e, section.id);
                handleToggleNav();
              }}
            >
              <CustomBlockContent
                as="h2"
                onClick={handleToggleNav}
                blocks={section.title}
                className={cn("pd-16 pm-16", styles.anchor__text)}
                noDom
              />
            </a>
          ))}
        </div>
      </div>

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
export default WhatIsDealFlow;
