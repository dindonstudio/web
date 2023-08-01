import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import cn from "classnames";
import styles from "./KeenSlider.module.scss";

import CustomBlockContent from "components/customBlockContent/CustomBlockContent";
import {useInView} from 'react-intersection-observer'
import gsap from "gsap";
import { useRef, useState, useEffect, useCallback } from "react";

const KeenSlider = ({ elements }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef(null);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    breakpoints: {
      '(max-width: 850px)': {
        slides: {
          perView: 1.2,
          spacing: 20,
        },
        
      },
    },
    slides: {
      perView: 3.2,
      spacing: 60,
    },
    
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true);
    },
  });
  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  
  useEffect(() => {
    if (inView) {
  
      // Animate child elements when parent comes into view
      gsap.fromTo(entry.target.firstChild.children, 
        { 
          y: '10%', 
          opacity: 0
        },
        { 
          y: '0%', 
          opacity: 1,
          duration: 1, 
          ease: 'expo.out',
          stagger: 0.2 // Delay between each child animation
        }
      );0.2 // Delay between each child animation
  
    }
  }, [inView, entry]);
  return (
    <>
    <div ref={ref} className="navigation-wrapper">
    <div ref={sliderRef}className={cn("keen-slider ", styles.keen)}>
      {elements.map((elem, index) => (
        <div  key={index} className={cn("keen-slider__slide ", styles.keenSlide)}>
          <div className="slide__container">
          <h4 className={cn("hd-5 hm-3", styles.title)}>{elem.title}</h4>
		  <CustomBlockContent
           
                blocks={elem.text}
                className={cn("pd-16 pm-16 ", styles.insideSlide )}
                
              />
          </div>
         
        </div>
      ))}
    </div>
        
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current.prev()
              }
              disabled={currentSlide === 0}
            />
            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current.next()
              }
              disabled={
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {Array.from(Array(instanceRef.current.track.details.slides.length).keys()).map(
            (idx) => (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          )}
        </div>
      )}
    </>
  );
};

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left ? (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      ) : (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default KeenSlider;