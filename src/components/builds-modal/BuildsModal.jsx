import styles from "./BuildsModal.module.css";
import cross from "./../../img/components-img/cross-black.png";
import BuildsItem from "./builds-item/BuildsItem";

const BuildsModal = ({ isBuilds, toggleBuilds }) => {
  const arrMenu = [
    { id: 1, text: "RANGE ROVER" },
    { id: 2, text: "DEFENDER" },
    { id: 3, text: "DISCOVERY" },
  ];

  return (
    <div
      className={
        isBuilds ? styles.wrapper : `${styles.wrapper} ${styles.showWrapper}`
      }
    >
      <div className={styles.wrapperSidebar}>
        <div
          className={
            isBuilds ? styles.sidebar : `${styles.sidebar} ${styles.inSidebar}`
          }
        >
          <div className={styles.cnpOut} onClick={toggleBuilds}>
            <img src={cross} className={styles.img} alt="out" />
          </div>

          <h2 className={styles.title}>BUILD YOUR OWN</h2>

          <ul className={styles.sidebarMenu}>
            {arrMenu.map((item) => (
              <BuildsItem key={item.id} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BuildsModal;
