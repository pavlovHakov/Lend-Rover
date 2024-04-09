import Card from "../../../reused-Components/Card/Card";
import styles from "./Showcase.module.css";
import { homeSliderManualArr } from "./../../../date";
import { useState } from "react";

const Showcase = () => {
  const [elem, setElem] = useState(homeSliderManualArr);
  return (
    <div className={styles.wrapp}>
      {elem.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Showcase;
