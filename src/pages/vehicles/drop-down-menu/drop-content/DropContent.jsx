import styles from "./DropContent.module.css";
import CarCharacteristics from "./car-characteristics/СarCharacteristics";

const DropContent = ({ img }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgBlock}>
        <img src={img} alt="img" />
      </div>
      <CarCharacteristics />
    </div>
  );
};

export default DropContent;
