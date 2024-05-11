import styles from "./Vehicles.module.css";
import Navigation from "./navigation/Navigation";

const Vehicles = () => {
  return (
    <div className={`${styles.wrapper} ${styles.showWrapper}`}>
      <div className={`${styles.content} ${styles.showContent}`}>
        <Navigation />
      </div>
    </div>
  );
};

export default Vehicles;
