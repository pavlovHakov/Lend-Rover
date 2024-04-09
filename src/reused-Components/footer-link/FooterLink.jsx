import styles from "./FooterLink.module.css";

const FooterLink = ({ id, text }) => {
  return (
    <li className={styles.liText}>
      <a href="!#" className={styles.text}>
        {text}
      </a>
    </li>
  );
};

export default FooterLink;
