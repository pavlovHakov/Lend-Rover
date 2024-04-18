import styles from "./SubMenu.module.css";
import { subPurchase, subVehicles } from "./../../date";
import SubMenuItem from "./sub-menu-item/SubMenuItem";
import { useState } from "react";
import CrossOut from "./../../reused-Components/cross-out/CrossOut";

const SubMenu = ({ active, setActiveIndex }) => {
  const [arrVenchicles, setArrVechicles] = useState(subVehicles);
  const [arrPurchase, setArrPurchase] = useState(subPurchase);

  // const toggleSubMenu = (){}

  return (
    <div
      className={active ? `${styles.wrapper} ${styles.active}` : styles.wrapper}
    >
      <ul className={styles.navigation}>
        {arrVenchicles.map((item) => (
          <SubMenuItem key={item.id} {...item} />
        ))}
      </ul>

      <CrossOut setActiveIndex={setActiveIndex} />
    </div>
  );
};

export default SubMenu;
