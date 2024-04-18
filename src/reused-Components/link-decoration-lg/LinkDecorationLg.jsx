import styles from "./LinkDecorationLg.module.css";
import { Link } from "react-router-dom";

const LinkDecorationLg = ({ text, path }) => {
  return (
    <Link to={path} className={styles.text}>
      {text}
    </Link>
  );
};

export default LinkDecorationLg;
