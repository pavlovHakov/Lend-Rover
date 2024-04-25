import { useState } from "react";
import Explore from "../../../pages/explore/Explore";
import Owners from "../../../pages/owners/Owners";
import Purchase from "../../../pages/purchase/Purchase";
import Vehicles from "../../../pages/vehicles/Vehicles";
import styles from "./MenuInfo.module.css";
import { Link } from "react-router-dom";

const MenuInfo = ({ text, isActive }) => {
  // const [isComponent, setIsComponent] = useState(false);

  const ChoicePage = () => {
    if (isActive === true && text === "vehicles") {
      return <Vehicles />;
    }
    if (isActive === true && text === "purchase") {
      return <Purchase />;
    }
    if (isActive === true && text === "owners") {
      return <Owners />;
    }
    if (isActive === true && text === "explore") {
      return <Explore />;
    }
  };

  return (
    <ul
      className={
        isActive ? `${styles.menuInfo} ${styles.active}` : styles.menuInfo
      }
    >
      {ChoicePage()}
    </ul>
  );
};

export default MenuInfo;
