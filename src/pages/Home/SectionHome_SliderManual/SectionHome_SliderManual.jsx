import { useState } from "react";
import FollowingLink from "../../../reused-Components/followingLink/FollowingLink.jsx";
import SliderManual from "../../../reused-Components/slider/SliderManual";
import { homeSliderManualArr } from "./../../../date.js";
import Cnp from "./../../../reused-Components/cnp/Cnp";
import styles from "./SectionHome_SliderManual.module.css";

const SectionHome_SliderManual = () => {
  const [itemSlider, setItemSlider] = useState(homeSliderManualArr);

  return (
    <div className={styles.wrapp}>
      {itemSlider.map((item) => (
        <div key={item.id} className={styles.sliderBlock}>
          <SliderManual {...item} />

          <div className={styles.blockText}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.subtitle}>{item.subtitle}</p>
            <Cnp text="EXPLORE" />
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
