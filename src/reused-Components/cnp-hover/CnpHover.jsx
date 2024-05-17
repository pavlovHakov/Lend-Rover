import styles from "./CnpHover.module.css";
import ImgEntrance from "./ImgEntrance";

const CnpHover = ({ text }) => {
  return (
    <div className={styles.cnp}>
      <div className={styles.imgBlock}>
        <ImgEntrance className={styles.img} />
      </div>

      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default CnpHover;
