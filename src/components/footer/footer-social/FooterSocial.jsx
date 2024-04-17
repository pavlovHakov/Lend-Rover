import { useState } from "react";
import styles from "./FooterSocial.module.css";
import { Link } from "react-router-dom";

const FooterSocial = ({ arrSocial }) => {
  const [social, setSocial] = useState(arrSocial);

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>JOIN THE CONVERSATION</h4>

      {social.map((item) => (
        <Link key={item.id} className={styles.linkBlock}>
          <img className={styles.img} src={item.img} alt="img" />

          <p className={styles.title}>{item.text}</p>
        </Link>
      ))}
    </div>
  );
};

export default FooterSocial;
