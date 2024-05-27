import styles from "./SliderManual.module.css";

const SliderManual = ({ img1, img2, img3 }) => {
  return (
    <div className={styles.wrapperRelative}>
      <div className={styles.wrapperAbsolute}>
        <div className={styles.blockImg}>
          <img className={styles.img} src={img1} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default SliderManual;
