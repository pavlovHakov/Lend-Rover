import { Link } from "react-router-dom";
import styles from "./CrossOut.module.css";
import cross from "./../../img/components-img/cross-black.svg";

const CrossOut = ({ setActiveIndex }) => {
  return (
    <div onClick={() => setActiveIndex(null)} className={styles.block}>
      <img src={cross} alt="out" />
    </div>
  );
};

export default CrossOut;
