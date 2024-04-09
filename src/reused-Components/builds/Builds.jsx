import styles from "./Builds.module.css";
import flag from "./../../img/header/flag.png";

const Builds = ({ toggleBuilds }) => {
  return (
    <li className={styles.li} onClick={() => toggleBuilds()}>
      <span className={styles.link}>builds</span>
      <img className={styles.img} src={flag} alt="flag" />
    </li>
  );
};

export default Builds;
