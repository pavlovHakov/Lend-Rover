import { Link } from "react-router-dom";
import styles from "./NavigationItem.module.css";

const NavigationItem = ({ img, text }) => {
  return (
    <li className={styles.li}>
      <div className={styles.blockImg}>
        <img src={img} alt="img" />
      </div>
      <p className={styles.text}>{text}</p>
    </li>
  );
};

export default NavigationItem;
