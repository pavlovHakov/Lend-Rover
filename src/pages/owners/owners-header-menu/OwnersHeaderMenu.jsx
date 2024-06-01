import styles from "./OwnersHeaderMenu.module.css";
import img from "./../../../img/owners/owners-menu.png";
import OwnersHeaderMenuItem from "./owners-header-menu-Item/OwnersHeaderMenuItem";
import { OwnersMenuOWNERSHIP_1, OwnersMenuOWNERSHIP_2 } from "../../../date";

const OwnersHeaderMenu = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.UlBlock}>
        {OwnersMenuOWNERSHIP_1.map((item) => (
          <OwnersHeaderMenuItem key={item.id} text={item.text} />
        ))}
      </ul>
      <ul className={styles.UlBlock}>
        {OwnersMenuOWNERSHIP_2.map((item) => (
          <OwnersHeaderMenuItem key={item.id} text={item.text} />
        ))}
      </ul>
      <div className={styles.imgBlock}>
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default OwnersHeaderMenu;
