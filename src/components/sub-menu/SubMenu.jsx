import styles from "./SubMenu.module.css";
import { subExplore, subOwners, subPurchase, subVehicles } from "./../../date";
import SubMenuItem from "./sub-menu-item/SubMenuItem";
import { useEffect, useState } from "react";
import CrossOut from "./../../reused-Components/cross-out/CrossOut";

const SubMenu = ({ activeIndex, setActiveIndex }) => {
  const [arrSubMenu, setArrSubMenu] = useState(subVehicles);
  const [isActive, setIsActive] = useState(0);

  useEffect(() => {
    if (activeIndex === 0) {
      setArrSubMenu((item) => (item = subVehicles));
    }
    if (activeIndex === 1) {
      setArrSubMenu((item) => (item = subPurchase));
    }
    if (activeIndex === 2) {
      setArrSubMenu((item) => (item = subOwners));
    }
    if (activeIndex === 3) {
      setArrSubMenu((item) => (item = subExplore));
    }
  }, [activeIndex, setArrSubMenu]);

  return (
    <div
      className={
        activeIndex != null
          ? `${styles.wrapper} ${styles.active}`
          : styles.wrapper
      }
    >
      <ul className={styles.navigation}>
        {arrSubMenu.map((item, index) => (
          <SubMenuItem
            {...item}
            handleActive={() => setIsActive(index)}
            isActive={isActive === index}
          />
        ))}
      </ul>

      <CrossOut setActiveIndex={() => setActiveIndex()} />
    </div>
  );
};

export default SubMenu;
