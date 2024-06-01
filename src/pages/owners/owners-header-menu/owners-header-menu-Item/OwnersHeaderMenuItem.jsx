import styles from "./OwnersHeaderMenuItem.module.css";

const OwnersHeaderMenuItem = ({ text }) => {
  return (
    <li className={styles.li}>
      <span>{text}</span>
    </li>
  );
};

export default OwnersHeaderMenuItem;
