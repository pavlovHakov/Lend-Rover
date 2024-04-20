import styles from "./Header.module.css";
import Menu from "./menu/Menu";
import Logo from "./logo/Logo";
import Services from "./services/Services";
import { useEffect, useState } from "react";
import SubMenu from "./../sub-menu/SubMenu";

const Header = ({ toggleRetailers, toggleBuilds }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <SubMenu active={activeIndex != null} />

      <div className={styles.wrapper}>
        <Menu
          toggleRetailers={toggleRetailers}
          toggleBuilds={toggleBuilds}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <Logo />
        <Services
          toggleRetailers={toggleRetailers}
          toggleBuilds={toggleBuilds}
        />
      </div>
    </>
  );
};

export default Header;
