import styles from "./SubMenuItem.module.css";

const SubMenuItem = ({ text, id, handleActive, isActive }) => {
  return (
    <li className={styles.li}>
      <div
        onClick={() => handleActive(id)}
        className={isActive ? `${styles.link} ${styles.active}` : styles.link}
      >
        {text}
      </div>
    </li>
  );
};

export default SubMenuItem;
