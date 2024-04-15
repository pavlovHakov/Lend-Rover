import styles from "./LinkDecoration.module.css";
import { Link } from "react-router-dom";

const LinkDecoration = ({ text, path }) => {
  return (
    <li className={styles.liText}>
      <Link to={path} className={styles.text}>
        {text}
      </Link>
    </li>
  );
};

export default LinkDecoration;
