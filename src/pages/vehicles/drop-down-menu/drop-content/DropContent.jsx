import styles from "./DropContent.module.css";
import CarCharacteristics from "./car-characteristics/СarCharacteristics";

const DropContent = ({ img, itemCharacter }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgBlock}>
        <img src={img} alt="img" />
      </div>
      <CarCharacteristics itemCharacter={itemCharacter} />
    </div>
  );
};

export default DropContent;
