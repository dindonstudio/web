import cn from "classnames";
import TimelineSection from "components/timelineSection/TimelineSection";
import gsap from "gsap";
import { useEffect, useRef, Fragment, useState } from "react";
import styles from "./homeHeader.module.scss";
import reactStringReplace from "react-string-replace";
import Logo from "svgs/logo.svg";
import Arrow from "svgs/arrow-circle.svg";
import { splitWords } from "utils/text";
import Button , { ButtonVariant }from "components/button/Button";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import useMediaQuery from "hooks/useMediaQuery";
import { DESKTOP } from "utils/mediaQueries";
import Marquee from "components/marquee/Marquee";
import indexStyles from "pages/index.module.scss";
import TriangleEdda from "../../svgs/edda-trangle.svg";

gsap.registerPlugin(ScrollToPlugin);

const HomeHeader = ({ title, excerpt, quote, logoRef, partners, video, cta, videoMobile }) => {
  const timeline = useRef(null);
  const titleRef = useRef(null);
  const marqueeRef = useRef(null);
  const excerptRef = useRef(null);
  const excerptRefTriangle = useRef(null);
  const excerptRefButton = useRef(null);
  const quoteRef = useRef(null);
  const scrollRef = useRef(null);
  const headerRef = useRef(null);
  const headerBackgroundRef = useRef(null);
  const quoteBackgroundRef = useRef(null);
  const device = useMediaQuery();

  useEffect(() => {
	document.title = 'Invest To Create'; // Set the new title for the page

    gsap
      .timeline()
      .fromTo(
        titleRef.current.querySelectorAll("span>span"),
        { opacity: 0, y: "50vh" },
        {
          duration: 1.5,
          opacity: 1,
          stagger: 0.04,
          ease: "expo.out",
          y: 0,
          delay: 0.1,
        }
      )
      .fromTo(
        excerptRef.current,
        { opacity: 0, y: "50vh" },
        {
          duration: 1.5,
          x: 0,
          opacity: 1,
          ease: "expo.out",
          y: 0,
          delay: 0.25,
        },
        0
      )
      .fromTo(
        excerptRefTriangle.current,
        { opacity: 0, y: "50vh" },
        {
          duration: 1.5,
          x: 0,
          opacity: 1,
          ease: "expo.out",
          y: 0,
          delay: 0.25,
        },
        0
      )
      .fromTo(
        excerptRefButton.current,
        { opacity: 0, y: "50vh" },
        {
          duration: 1.5,
          x: 0,
          opacity: 1,
          ease: "expo.out",
          y: 0,
          delay: 0.25,
        },
        0
      );

    if (device) {
      const vd = "30rem";
      timeline.current = gsap
        .timeline({ paused: true })
        .to({}, { duration: 1 })
        .fromTo(
          titleRef.current.querySelectorAll("span:not(span>span)"),
          { y: 0, opacity: 1 },
          { duration: 0.5, y: "-" + vd, stagger: 0.03, opacity: 0 },
          0
        )
        .fromTo(
          headerBackgroundRef.current,
          { opacity: 1 },
          { duration: 0.5, x: 0, opacity: 0 },
          0
        )
        .fromTo(
          excerptRef.current,
          { opacity: 1 },
          { duration: 0.25, x: 0, opacity: 0 },
          0
        )
        .fromTo(
          quoteBackgroundRef.current,
          { opacity: 0 },
          { duration: 0.5, x: 0, opacity: 1 },
          0
        )
        .fromTo(
          scrollRef.current,
          { opacity: 1, y: "0vh" },
          { duration: 0.25, y: "5vh", opacity: 0 },
          0
        );
      if (device === DESKTOP) {
        timeline.current.fromTo(
          quoteRef.current.querySelectorAll("span"),
          { y: vd },
          { duration: 0.25, y: 0, stagger: 0.1 },
          0
        );
      } else {
        timeline.current.fromTo(
          quoteRef.current.querySelectorAll("span"),
          { y: vd },
          { duration: 0.25, y: 0, stagger: 0.05 },
          0.2
        );
      }
      timeline.current.fromTo(
        marqueeRef.current,
        { y: vd },
        { duration: 0.25, y: 0 },
        0.25
      );

      timeline.current.fromTo(
        logoRef.current.querySelector("." + indexStyles.logoWrapper),
        { x: "0rem" },
        { duration: 0.4, x: "-5rem", ease: "quart.inOut" },
        0.4
      );
      timeline.current.fromTo(
        logoRef.current.querySelector("." + indexStyles.logoText),
        { scale: 0.7, opacity: 0 },
        { duration: 0.25, scale: 1, opacity: 1, ease: "quart.out" },
        0.6
      );
      timeline.current.fromTo(
        logoRef.current.querySelector("." + indexStyles.center),
        { scaleX: 1 },
        { duration: 0.4, scaleX: 2, ease: "quart.inOut" },
        0.4
      );
      timeline.current.fromTo(
        logoRef.current.querySelector("." + indexStyles.left),
        { x: "0rem" },
        { duration: 0.4, x: "-3.9rem", ease: "quart.inOut" },
        0.4
      );
      timeline.current.fromTo(
        logoRef.current.querySelector("." + indexStyles.right),
        { x: "0rem" },
        { duration: 0.4, x: "3.9rem", ease: "quart.inOut" },
        0.4
      );

      if (device === DESKTOP) {
        timeline.current.fromTo(
          logoRef.current,
          { y: "44vh", opacity: 0 },
          { duration: 0.55, y: "0vh", opacity: 1 },
          0.2
        );
      } else {
        timeline.current.fromTo(
          logoRef.current,
          { y: "70vh" },
          { duration: 0.5, y: "15vh" },
          0
        );
        timeline.current.fromTo(
          logoRef.current,
          { opacity: 0 },
          { duration: 0.3, opacity: 1 },
          0
        );
      }
      timeline.current.to(
        quoteBackgroundRef.current,
        { duration: 0.25, x: 0, opacity: 0 },
        0.75
      );
      timeline.current.duration(1);
    }
  }, [device]);

  const handleClickScroll = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: headerRef.current.offsetHeight, autoKill: true },
      ease: "quart.out",
    });
  };
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    // Update the initial screen width
    updateScreenWidth();

    // Add event listener to update the screen width on window resize
    window.addEventListener('resize', updateScreenWidth);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  let assetRef;
  if (screenWidth < 850) {
    assetRef = videoMobile.asset._ref; // Use assetRefMobile for smaller screens
  } else {
    assetRef = video.asset._ref; // Use assetRef for larger screens
  }

  console.log(assetRef);

  // Remove the "file-" prefix and "-mp4" suffix from the assetRef
  const assetId = assetRef.replace("file-", "").replace("-mp4", "");
  const url = `https://cdn.sanity.io/files/dlo3ry0w/production/${assetId}.mp4`;

  return (
    <>
      <TimelineSection
        timeline={timeline}
        childClassName={styles.homeHeader}
        isTop
      >
        <div className="container">
          <header
            ref={headerRef}
            className={cn(styles.fullscreen, styles.header)}
          >
            <h2
              className={cn("hm-2H hd-2H", styles.title)}
              dangerouslySetInnerHTML={{ __html: splitWords(title, true) }}
              ref={titleRef}
            />
			<h1  className={cn("hm-2H hd-2", styles.opacity)}>Invest To Create</h1>
            {/* <div
      ref={excerptRef}
              className={cn(
                "desktop-only no-touch-only",
                styles.excerpt
              )}
              aria-hidden
            >
              <TriangleEdda />
            </div> */}
            {/* <p className={cn("pm-16 pd-18", styles.excerpt)} ref={excerptRef}>
              <span>{excerpt}</span>
            </p> */}
            {/* <Button
              className={cn("mobile-only", styles.scrollBtn)}
              onClick={handleClickScroll}
              ref={scrollRef}
            >
              <Arrow />
            </Button> */}
			<div ref={excerptRefTriangle} className={cn("", styles.button__container)}>
            <Button
              variant={ButtonVariant.rounded}
              className={styles.cta}
              link={cta}
            >
            
              {cta.label}
            </Button>
			</div>
          </header>
		  <div className={styles.fullscreen__video}>
<div       ref={excerptRefButton} className={styles.video__container}>
<video 
		  autoPlay
		  muted
		  playsInline
		  loop
		  src={url}></video>
</div>
     
          </div>
          <div className={styles.fullscreen__text}>
            <p className={cn("hm-2 hd-2", styles.quote)} ref={quoteRef}>
              {quote.split(/\n/g).map((line, i) => (
                <Fragment key={i}>
                  <span>
                    {reactStringReplace(line, /{logo}/g, (match, j) => (
                      <Logo key={j} className={styles.logo} />
                    ))}
                  </span>
                  <br />
                </Fragment>
              ))}
            </p>
            <Marquee
              className={styles.partners}
              ref={marqueeRef}
              items={partners}
              renderCount={2}
              perItemDuration={10}
            />
          </div>
        </div>
      </TimelineSection>
      <div
        ref={headerBackgroundRef}
        className={cn(styles.background, styles.headerBackground)}
        aria-hidden
      >
        <div className={styles.circle} />
      </div>
      <div
        ref={quoteBackgroundRef}
        className={cn(styles.background, styles.quoteBackground)}
        aria-hidden
      >
        <div className={styles.circle} />
      </div>
    </>
  );
};

export default HomeHeader;
