import styles from "./Logo.module.css";
import logo from "./../../../img/header/logo.png";
import { Link } from "react-router-dom";

const Logo = ({ setActiveIndex }) => {
  return (
    <Link onClick={() => setActiveIndex(null)} className={styles.block} to="/">
      <img className={styles.img} src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
