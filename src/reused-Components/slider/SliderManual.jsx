import styles from "./SliderManual.module.css";

const SliderManual = ({ img1, img2, img3 }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={img1} alt="img" />
    </div>
  );
};

export default SliderManual;
