import styles from "./Owners.module.css";

const Owners = () => {
  return (
    <div className={`${styles.wrapper} ${styles.showWrapper}`}>
      <div className={`${styles.content} ${styles.showContent}`}>
        <div className={styles.h1}>I love you life</div>
      </div>
    </div>
  );
};

export default Owners;
