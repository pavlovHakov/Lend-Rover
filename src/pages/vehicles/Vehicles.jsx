import DropMenu from "./drop-down-menu/drop-menu/DropMenu";
import DropContent from "./drop-down-menu/drop-content/DropContent";
import styles from "./Vehicles.module.css";
import Navigation from "./navigation/Navigation";
import { useState } from "react";
import { RangeRover } from "./../../date";

const Vehicles = () => {
  return (
    <div className={`${styles.wrapper} ${styles.showWrapper}`}>
      <div className={`${styles.content} ${styles.showContent}`}>
        <Navigation />
      </div>
    </div>
  );
};

export default Vehicles;
