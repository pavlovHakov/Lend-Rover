import { useState } from "react";
import styles from "./FooterSocial.module.css";
import { Link } from "react-router-dom";
import ImgFacebook from "../../../img/footer/ImgFacebook";
import YouTube from "../../../img/footer/YouTube";
import Instagram from "../../../img/footer/Instagram";
import X from "../../../img/footer/X";

const FooterSocial = ({ arrSocial }) => {
  const [social, setSocial] = useState(arrSocial);

  const changeImg = (elem) => {
    if (elem === "FACEBOOK") {
      return <ImgFacebook className={`${styles.img} ${styles.facebook}`} />;
    }
    if (elem === "YOUTUBE") {
      return <YouTube className={`${styles.img} ${styles.youTube}`} />;
    }
    if (elem === "INSTAGRAM") {
      return <Instagram className={`${styles.img} ${styles.instagram}`} />;
    }
    if (elem === "X") {
      return <X className={`${styles.img} ${styles.x}`} />;
    }
  };

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.text}>JOIN THE CONVERSATION</h4>

      {social.map((item) => (
        <Link key={item.id} className={styles.linkBlock}>
          {changeImg(item.text)}
          <p className={styles.text}>{item.text}</p>
        </Link>
      ))}
    </div>
  );
};

export default FooterSocial;
