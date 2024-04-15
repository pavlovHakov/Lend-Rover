import styles from "./Retailers.module.css";
import retailers from "./../../img/header/retailers.svg";

const Retailers = ({ toggleRetailers }) => {
  return (
    <li className={styles.li} onClick={toggleRetailers}>
      <span className={styles.link}>Retailers</span>
      <img className={styles.img} src={retailers} alt="location" />
    </li>
  );
};

export default Retailers;
