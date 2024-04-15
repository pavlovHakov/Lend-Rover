import LinkDecoration from "../../../reused-Components/llink-decoration/LinkDecoration";
import FooterLink from "../../../reused-Components/llink-decoration/LinkDecoration";
import styles from "./FooterUl.module.css";

const FooterUl = ({ arrUl, id }) => {
  return (
    <ul className={styles.wrapp}>
      {arrUl.map((item) => (
        <>
          <li key={item.id} className={styles.title}>
            {item.title}
          </li>
          <LinkDecoration {...item} />
        </>
      ))}
    </ul>
  );
};

export default FooterUl;
