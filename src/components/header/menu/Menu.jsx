import styles from "./Menu.module.css";
import { Routes, Route, Link } from "react-router-dom";

import { menuHeader } from "./../../../date";
import MenuItem from "./menuItem/MenuItem";
import Hamburger from "../menu-hamburger/Hamburger";
import { useState } from "react";
import Builds from "./../../../reused-Components/builds/Builds";
import Retailers from "../../../reused-Components/retailers/Retailers";

const Menu = ({ toggleRetailers, toggleBuilds }) => {
  const [show, setShow] = useState(true);

  const showMenu = () => {
    setShow((show) => !show);
  };

  return (
    <>
      <ul
        className={show ? `${styles.wrapper} ${styles.hide}` : styles.wrapper}
      >
        {menuHeader.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
        <ul className={styles.services}>
          <Builds toggleBuilds={toggleBuilds} />
          <Retailers toggleRetailers={toggleRetailers} />
        </ul>
      </ul>
      <Hamburger show={show} showMenu={() => showMenu()} />
    </>
  );
};

export default Menu;
