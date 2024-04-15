import { Link } from "react-router-dom";
import styles from "./CrossOut.module.css";
import cross from "./../../img/components-img/cross-black.svg";

const CrossOut = () => {
  return (
    <Link to="/" className={styles.block}>
      <img src={cross} alt="out" />
    </Link>
  );
};

export default CrossOut;
