import styles from "./Hamburger.module.css";

const Hamburger = ({ show, showMenu }) => {
  return (
    <div onClick={showMenu} className={styles.wrappMobile}>
      <div className={styles.elemBlock}>
        <span
          className={
            show ? `${styles.item1}` : `${styles.item1} ${styles.active_1}`
          }
        ></span>
        <span
          className={
            show ? `${styles.item2}` : `${styles.item2} ${styles.active_2}`
          }
        ></span>
        <span
          className={
            show ? `${styles.item3}` : `${styles.item3} ${styles.active_3}`
          }
        ></span>
      </div>
    </div>
  );
};

export default Hamburger;
