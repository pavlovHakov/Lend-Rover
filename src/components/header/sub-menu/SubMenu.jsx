import styles from "./SubMenu.module.css";
import { subVehicles } from "./../../../date";
import SubMenuItem from "./sub-menu-item/SubMenuItem";
import { useState } from "react";
import CrossOut from "../../../reused-Components/cross-out/CrossOut";

const SubMenu = ({ active }) => {
  const [arrVenchicles, setArrVechicles] = useState(subVehicles);

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

      <CrossOut />
    </div>
  );
};

export default SubMenu;
