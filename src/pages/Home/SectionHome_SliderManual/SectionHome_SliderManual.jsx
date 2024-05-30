import { useState } from "react";
import FollowingLink from "../../../reused-Components/followingLink/FollowingLink.jsx";
import AutoplayExample from "./../../../reused-Components/slider/SliderManual.jsx";
import { homeSliderManualArr } from "./../../../date.js";
import styles from "./SectionHome_SliderManual.module.css";
import CnpHover from "../../../reused-Components/cnp-hover/CnpHover.jsx";

const SectionHome_SliderManual = () => {
  const [itemSlider, setItemSlider] = useState(homeSliderManualArr);

  return (
    <div className={styles.wrapper}>
      {itemSlider.map((item) => (
        <div key={item.id} className={styles.sliderBlock}>
          <AutoplayExample imgSlider={item.imgSlider} />
          <div className={styles.blockText}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.subtitle}>{item.subtitle}</p>
            <CnpHover text="EXPLORE" />
            <br />
            <div className={styles.link}>
              <FollowingLink text="BUILD YOUR OWN" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionHome_SliderManual;
