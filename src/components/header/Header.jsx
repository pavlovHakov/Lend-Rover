import styles from "./Header.module.css";
import Menu from "./menu/Menu";
import Logo from "./logo/Logo";
import Services from "./services/Services";

const Header = ({ toggleRetailers, toggleBuilds }) => {
  return (
    <div className={styles.wrapper}>
      <Menu toggleRetailers={toggleRetailers} toggleBuilds={toggleBuilds} />
      <Logo />
      <Services toggleRetailers={toggleRetailers} toggleBuilds={toggleBuilds} />
    </div>
  );
};

export default Header;
