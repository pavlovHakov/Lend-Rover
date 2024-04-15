import styles from "./Builds.module.css";
import label from "./../../img/header/label-header.svg";

const Builds = ({ toggleBuilds }) => {
  return (
    <li className={styles.li} onClick={() => toggleBuilds()}>
      <span className={styles.link}>builds</span>
      <img className={styles.img} src={label} alt="flag" />
    </li>
  );
};

export default Builds;
