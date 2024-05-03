import DropMenu from "../../reused-Components/drop-down-menu/DropMenu";
import DropContent from "../../reused-Components/drop-down-menu/drop-content/DropContent";
import styles from "./Vehicles.module.css";
import Navigation from "./navigation/Navigation";

const Vehicles = () => {
  return (
    <div className={`${styles.wrapper} ${styles.showWrapper}`}>
      <div className={`${styles.content} ${styles.showContent}`}>
        <Navigation />
        <DropMenu />
        <DropContent />
      </div>
    </div>
  );
};

export default Vehicles;
