import styles from "./FooterBlockText.module.css";
import logo from "./../../../img/components-img/logo-white.png";

const FooterBlockText = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blockImg}>
        <img src={logo} alt="logo" />
      </div>
      <p className={styles.text1}>© JAGUAR LAND ROVER LIMITED 2024</p>
      <p className={styles.text2}>
        Registered office: Abbey Road, Whitley, Coventry CV3 4LF. <br />
        Registered in England No: 1672070
      </p>
    </div>
  );
};

export default FooterBlockText;
