import FooterLink from "../../../reused-Components/footer-link/FooterLink";
import styles from "./FooterUl.module.css";

const FooterUl = ({ arrUl }) => {
  return (
    <ul className={styles.wrapp}>
      {arrUl.map((item) => (
        <>
          <li key={item.id} className={styles.title}>
            {item.title}
          </li>
          <FooterLink {...item} />
        </>
      ))}
    </ul>
  );
};

export default FooterUl;
