import { footer_ul1, footer_ul2, footer_ul3, footer_social } from "../../date";
import FooterUl from "./../footer/footer-ul/FooterUl";
import styles from "./Footer.module.css";
import FooterBlockText from "./footer-block-text/FooterBlockText";
import FooterSocial from "./footer-social/FooterSocial";

const Footer = () => {
  return (
    <div className={styles.wrapp}>
      <div className={styles.blockSocial}>
        <FooterUl arrUl={footer_ul1} />
        <FooterUl arrUl={footer_ul2} />
        <FooterUl arrUl={footer_ul3} />
        <FooterSocial arrSocial={footer_social} />
      </div>
      <FooterBlockText />
    </div>
  );
};

export default Footer;
