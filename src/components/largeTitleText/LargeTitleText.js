import React, { useEffect, useRef } from "react";
import cn from "classnames";
import { LocalImage } from "components/image/Image";
import Parallax from "components/parallax/Parallax";
import SmoothScroll from "components/smoothScroll/SmoothScroll";
import CustomBlockContent from "components/customBlockContent/CustomBlockContent";
import Gradient from "svgs/deathflow-choose-radient.svg";
import GradientMobile from "svgs/background.svg"
import reactStringReplace from "react-string-replace";
import styles from "./largeTitleText.module.scss";
import HandImage from "images/right-hand.svg";
import HandPhone from "../../svgs/hand-phone.svg";
import Logo from "svgs/logo.svg";
import useSlice from "hooks/useSlice";
import LogoEm from "svgs/Logo-EMERALD GREEN.svg";

const LargeText = ({ titleChoose, ExcerptChoose, TextChoose }) => {
  const ref = useRef(null);
  useSlice(ref);
  
  

  return (
    <SmoothScroll ref={ref} as="section" childClassName={styles.largeTitleText}>
      <div className={cn("largeTitleText", styles.largeTitleText)}>
        <div className={cn("gradient ", styles.gradient)}>
          <Gradient />
        </div>
    
        <div className={cn("container", styles.container)}>
          <div className={cn("container__text", styles.container__text)}>
            <h2 className={cn("hn-3 hn-1", styles.largeTextTitle)}>
              {titleChoose}
            </h2>
            <CustomBlockContent
              as="p"
              blocks={ExcerptChoose}
              className={cn("hd-4 hm-4 customFont" , styles.customFont)}
              noDom
            />
          </div>
          <div className={cn("logo mobile-only", styles.logoMobile)}>
        <LogoEm />
      </div>
          <div>
            <CustomBlockContent
              as="p"
              blocks={TextChoose}
              className={cn("pd-16 pm-16", styles.text)}
              noDom
            />
          </div>
          {/* 
				<Parallax z={0.6} className={styles.largeTextTopRightImage}>
					{topRightImage ? <LocalImage image={topRightImage} desktopWidth={240} mobileWidth={240} aria-hidden /> : <HandImage />}
				</Parallax>

				<Parallax z={0.6} className={styles.largeTextBottomLeftImage}>
					{bottomLeftImage ? <LocalImage image={bottomLeftImage} desktopWidth={367} mobileWidth={240} aria-hidden /> : <HandPhone /> }
				</Parallax> */}
        </div>
      </div>
    </SmoothScroll>
  );
};

export default LargeText;
