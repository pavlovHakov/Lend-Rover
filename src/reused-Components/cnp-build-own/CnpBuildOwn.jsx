import styles from "./CnpBuildOwn.module.css";
import img from "./../../img/components-img/cnp-car-ypu.svg";
import ImgCarYou from "./ImgCarYou";

const CnpBuildOwn = () => {
  return (
    <div className={styles.cnp}>
      <div className={styles.imgBlock}>
        <ImgCarYou className={styles.img} />
      </div>

      <span className={styles.text}>build your own</span>
    </div>
  );
};

export default CnpBuildOwn;
