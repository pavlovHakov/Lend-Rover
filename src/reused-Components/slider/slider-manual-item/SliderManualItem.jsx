import React from "react";
import styles from "./SliderManualItem.module.css";

const SliderManualItem = ({ img }) => {
  return (
    <div className={styles.blockImg}>
      <img className={styles.img} src={img} alt="img" />
    </div>
  );
};

export default SliderManualItem;
