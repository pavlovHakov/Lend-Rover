import styles from "./Purchase.module.css";

const Purchase = ({ isVehicles }) => {
  return (
    <div
      className={
        isVehicles ? styles.wrapper : `${styles.wrapper} ${styles.showWrapper}`
      }
    >
      <div className={styles.h1}>I love you life</div>
    </div>
  );
};

export default Purchase;
