import styles from "./DropContent.module.css";

const DropContent = ({ img }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgBlock}>
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default DropContent;
