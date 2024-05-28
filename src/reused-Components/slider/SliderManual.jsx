import styles from "./SliderManual.module.css";
import arrowSlider from "./../../img/components-img/arrow-white.png";
import { useState } from "react";

const SliderManual = ({ img1, img2, img3 }) => {
  const [absoluteWidth, setAbsoluteWidth] = useState(0);
  const sum = 0;

  const Prev = () => {
    setAbsoluteWidth((item) => item - 100);
    console.log(absoluteWidth);
  };
  const Next = () => {
    console.log("Next");
  };

  return (
    <div className={styles.wrapperRelative}>
      <div className={styles.wrapperAbsolute}>
        <div className={styles.blockImg}>
          <img className={styles.img} src={img1} alt="img" />
        </div>

        <div className={styles.blockImg}>
          <img className={styles.img} src={img2} alt="img" />
        </div>

        <div className={styles.blockImg}>
          <img className={styles.img} src={img3} alt="img" />
        </div>
      </div>
      {/* arrow */}
      <div onClick={Prev} className={styles.arrowPrev}>
        <img src={arrowSlider} alt="prev" />
      </div>
      <div onClick={Next} className={styles.arrowNext}>
        <img src={arrowSlider} alt="prev" />
      </div>
    </div>
  );
};

export default SliderManual;
