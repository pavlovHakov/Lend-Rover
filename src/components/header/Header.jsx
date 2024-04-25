import styles from "./Header.module.css";
import Menu from "./menu/Menu";
import Logo from "./logo/Logo";
import Services from "./services/Services";
import SubMenu from "./../sub-menu/SubMenu";

const Header = ({
  toggleRetailers,
  toggleBuilds,
  activeIndex,
  setActiveIndex,
}) => {
  return (
    <>
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

      <SubMenu active={activeIndex} setActiveIndex={setActiveIndex} />
    </>
  );
};

export default Header;
