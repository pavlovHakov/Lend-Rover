import styles from "./CarCharacteristics.module.css";
import СarCharacteristics_Item from "./car-characteristics-item/СarCharacteristics_Item";

const СarCharacteristics = ({ itemCharacter }) => {
  return (
    <div className={styles.wrapper}>
      {itemCharacter.map((item, index) => (
        <СarCharacteristics_Item key={index} {...item} />
      ))}
    </div>
  );
};

export default СarCharacteristics;
