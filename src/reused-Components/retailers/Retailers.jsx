import styles from "./Retailers.module.css";
import location from "./../../img/header/location.png";

const Retailers = ({ toggleRetailers }) => {
  return (
    <li className={styles.li} onClick={toggleRetailers}>
      <span className={styles.link}>Retailers</span>
      <img className={styles.img} src={location} alt="location" />
    </li>
  );
};

export default Retailers;
