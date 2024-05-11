import styles from "./CnpBuildOwn.module.css";
import img from "./../../img/components-img/cnp-car-ypu.svg";

const CnpBuildOwn = () => {
  return (
    <div className={styles.cnp}>
      <div className={styles.imgBlock}>
        <img src={img} className={styles.img} alt="img" />
      </div>

      <span className={styles.text}>build your own</span>
    </div>
  );
};

export default CnpBuildOwn;
