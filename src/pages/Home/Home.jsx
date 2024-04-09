import { RotatingLines } from "react-loader-spinner";

import SliderAuto from "../../reused-Components/slider/SliderAuto";
import styles from "./Home.module.css";
import SectionHome_SliderManual from "./SectionHome_SliderManual/SectionHome_SliderManual";
import Showcase from "./showcase/Showcase";
import { useState } from "react";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <SliderAuto />
      <Showcase />
      <SectionHome_SliderManual />
    </div>
  );
};

export default Home;
