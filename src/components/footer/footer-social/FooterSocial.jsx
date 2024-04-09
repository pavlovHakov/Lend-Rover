import { useState } from "react";
import styles from "./FooterSocial.module.css";

const FooterSocial = ({ arrSocial }) => {
  const [social, setSocial] = useState(arrSocial);

  return (
    <div className={styles.wrapp}>
      <h4 className={styles.title}>JOIN THE CONVERSATION</h4>

      {social.map((item) => (
        <a href="!#" key={item.id} className={styles.linkBlock}>
          <img className={styles.img} src={item.img} alt="img" />

          <p className={styles.title}>{item.text}</p>
        </a>
      ))}
    </div>
  );
};

export default FooterSocial;
