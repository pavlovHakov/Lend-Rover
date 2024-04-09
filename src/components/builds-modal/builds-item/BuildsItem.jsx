import styles from "./BuildsItem.module.css";

const BuildsItem = ({ text }) => {
  return (
    <li className={styles.li}>
      <a href="!#" className={styles.link}>
        {text}
      </a>
    </li>
  );
};

export default BuildsItem;
