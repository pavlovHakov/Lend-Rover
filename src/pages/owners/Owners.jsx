import styles from "./Owners.module.css";
import OwnersHeaderMenu from "./owners-header-menu/OwnersHeaderMenu";

const Owners = () => {
  return (
    <div className={`${styles.wrapper} ${styles.showWrapper}`}>
      <div className={`${styles.content} ${styles.showContent}`}>
        <OwnersHeaderMenu />
      </div>
    </div>
  );
};

export default Owners;
