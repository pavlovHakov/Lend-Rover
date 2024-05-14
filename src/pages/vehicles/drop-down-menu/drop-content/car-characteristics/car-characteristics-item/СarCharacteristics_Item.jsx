import styles from "./СarCharacteristics_Item.module.css";
import icon_1 from "./../../../../../../img/range-rover/icon-fuell.svg";
import icon_2 from "./../../../../../../img/range-rover/icon-co2.svg";
import icon_3 from "./../../../../../../img/range-rover/icon-kreslo.svg";
import icon_4 from "./../../../../../../img/range-rover/icon-porshen.svg";
import { choiceImg } from "./../../../../../../repeating-functions/index";

const СarCharacteristics_Item = ({ id, text }) => {
  // const choiceImg = (item, img1, img2, img3, img4) => {
  //   if (item === 0) {
  //     return <img className={styles.img} src={img1} alt="icon" />;
  //   }
  //   if (item === 1) {
  //     return <img className={styles.img} src={img2} alt="icon" />;
  //   }
  //   if (item === 2) {
  //     return <img className={styles.img} src={img3} alt="icon" />;
  //   }
  //   if (item === 3) {
  //     return <img className={styles.img} src={img4} alt="icon" />;
  //   }
  // };
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        {choiceImg(id, icon_1, icon_2, icon_3, icon_4)}
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default СarCharacteristics_Item;
