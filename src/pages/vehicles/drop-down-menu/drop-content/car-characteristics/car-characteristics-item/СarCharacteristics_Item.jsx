import styles from "./СarCharacteristics_Item.module.css";

const СarCharacteristics_Item = ({ text, icon }) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={icon} alt="icon" />
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default СarCharacteristics_Item;
