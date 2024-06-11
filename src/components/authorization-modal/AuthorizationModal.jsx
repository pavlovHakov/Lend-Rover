import styles from "./AuthorizationModal.module.css";
import AuthorizationForm from "./authorization-form/AuthorizationForm";
import logo from "./../../img/components-img/logo-green.png";
import out from "./../../img/components-img/cross-white.png";

const AuthorizationModal = ({ toggleRetailers, isRetailers }) => {
  return (
    <div
      className={isRetailers ? styles.wrapp : `${styles.wrapp} ${styles.show}`}
    >
      <div onClick={toggleRetailers} className={styles.outAll}>
        <img src={out} alt="out" />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>FIND A RETAILER</h1>
        <p className={styles.subtitle}>
          To locate your nearest Land Rover retailer, select your country from
          the drop down list below.
        </p>

        <AuthorizationForm />
      </div>
      <div className={styles.imgBlock}>
        <img className={styles.img} src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default AuthorizationModal;
