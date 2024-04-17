import LinkDecoration from "../../../../reused-Components/llink-decoration/LinkDecoration";
import styles from "./SubMenuItem.module.css";

const SubMenuItem = ({ text, path }) => {
  return (
    <li className={styles.li}>
      <LinkDecoration text={text} path={path} />

      {/* <Link
        to={path}
        //   onClick={() => handleClick(id)}
        className={isActive ? `${styles.link} ${styles.active}` : styles.link}
      >
        {text}
      </Link> */}
    </li>
  );
};

export default SubMenuItem;
