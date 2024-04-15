import styles from "./MenuItem.module.css";
import img_arrow from "./../../../../img/components-img/arrow-black.png";
import { Link } from "react-router-dom";

const MenuItem = ({ text, path, id, isActive, handleClick }) => {
  return (
    <li className={styles.li}>
      <Link
        to={path}
        onClick={() => handleClick(id)}
        className={isActive ? `${styles.link} ${styles.active}` : styles.link}
      >
        {text}
      </Link>
      <img className={styles.img} src={img_arrow} width={15} alt="arrow" />
    </li>
  );
};

export default MenuItem;
