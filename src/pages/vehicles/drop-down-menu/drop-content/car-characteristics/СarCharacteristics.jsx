import styles from "./CarCharacteristics.module.css";
import СarCharacteristics_Item from "./car-characteristics-item/СarCharacteristics_Item";
import icon_1 from "./../../../../../img/range-rover/icon-fuell.svg";
import icon_2 from "./../../../../../img/range-rover/icon-co2.png";
import icon_3 from "./../../../../../img/range-rover/icon-kreslo.svg";
import icon_4 from "./../../../../../img/range-rover/icon-porshen.svg";
const СarCharacteristics = () => {
  const arrСarCharacter = [
    { id: 0, icon: icon_1, text: "FROM 0,6†† l/100km UP TO 448,4†† MPG" },
    { id: 1, icon: icon_2, text: "AS LOW AS 16†† g/km" },
    { id: 2, icon: icon_3, text: "5 SEATS" },
    { id: 3, icon: icon_4, text: "1.050✦ LITRES" },
  ];

  return (
    <div className={styles.wrapper}>
      {arrСarCharacter.map((item) => (
        <СarCharacteristics_Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default СarCharacteristics;
