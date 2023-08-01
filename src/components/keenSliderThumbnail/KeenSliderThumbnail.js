import React, { useEffect, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import cn from "classnames";
import styles from "./KeenSlider.module.scss";

import CustomBlockContent from "components/customBlockContent/CustomBlockContent";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("slideChanged", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

const KeenSliderThumbnail = ({ elements }) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    breakpoints: {
      "(max-width: 850px)": {
        slides: {
          perView: 1,
          spacing: 20,
        },
      },
    },
    slides: {
      perView: 1,
      spacing: 60,
    },
  });

  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      breakpoints: {
        "(max-width: 850px)": {
          slides: {
            perView: 1.8,
            spacing: 0,
          },
        },
      },
      slides: {
        perView: 6,
        spacing: 0,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );
  const containerRef = useRef(null);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        containerRef.current,
        {
          y: "10%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
          duration: 1,
          ease: "expo.out",
        }
      );
    }
  }, [inView]);

  return (
    <div ref={ref}  className={cn(" ", styles.Thumbnail)}>
    <div
    
    ref={containerRef}
    className={cn("sliderThumbnail ", styles.sliderThumbnail)}
  >
    <div ref={sliderRef} className="keen-slider">
      {elements.map((elem, index) => (
        <div
          key={index}
          className={cn("keen-slider__slide ", styles.keenSlide)}
        >
          <CustomBlockContent
            blocks={elem.text}
            className={cn("pd-16 pm-16 ", styles.insideSlide)}
          />
        </div>
      ))}
    </div>
    <div ref={thumbnailRef} className="keen-slider thumbnail">
      {elements.map((elem, index) => (
        <div
          key={index}
          className={cn("keen-slider__slide ", styles.keenSlide)}
        >
          <h4 className={cn("hd-6 hm-3", styles.title)}>{elem.title}</h4>
        </div>
      ))}
    </div>
  </div>
    </div>

  );
};

export default KeenSliderThumbnail;
