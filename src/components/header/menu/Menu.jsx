import styles from "./Menu.module.css";

import { menuHeader } from "./../../../date";
import MenuItem from "./menuItem/MenuItem";
import Hamburger from "../menu-hamburger/Hamburger";
import { useState } from "react";
import Builds from "./../../../reused-Components/builds/Builds";
import Retailers from "../../../reused-Components/retailers/Retailers";

const Menu = ({
  toggleRetailers,
  toggleBuilds,
  activeIndex,
  setActiveIndex,
}) => {
  const [show, setShow] = useState(true);

  const showMenuItem = () => {
    setShow((show) => !show);
  };

  return (
    <>
      <ul
        className={show ? `${styles.wrapper} ${styles.hide}` : styles.wrapper}
      >
        {menuHeader.map((item, index) => (
          <MenuItem
            key={index}
            handleClick={() => setActiveIndex(index)}
            isActive={activeIndex === index}
            {...item}
          />
        ))}
        <ul className={styles.services}>
          <Builds toggleBuilds={toggleBuilds} />
          <Retailers toggleRetailers={toggleRetailers} />
        </ul>
      </ul>
      <Hamburger show={show} showMenu={() => showMenuItem()} />
    </>
  );
};

export default Menu;
