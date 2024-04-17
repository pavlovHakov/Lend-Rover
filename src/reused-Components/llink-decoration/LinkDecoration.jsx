import styles from "./LinkDecoration.module.css";
import { Link } from "react-router-dom";

const LinkDecoration = ({ text, path }) => {
  return (
    <Link to={path} className={styles.text}>
      {text}
    </Link>
  );
};

export default LinkDecoration;
