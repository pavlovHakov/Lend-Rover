import styles from "./Vehicles.module.css";
import Navigation from "./navigation/Navigation";

const Vehicles = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Navigation />
      </div>
    </div>
  );
};

export default Vehicles;
