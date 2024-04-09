import styles from "./Services.module.css";
import Builds from "./../../../reused-Components/builds/Builds";
import Retailers from "../../../reused-Components/retailers/Retailers";

const Services = ({ toggleRetailers, toggleBuilds }) => {
  return (
    <>
      <ul className={styles.ul}>
        <Retailers toggleRetailers={() => toggleRetailers()} />
        <Builds toggleBuilds={() => toggleBuilds()} />
      </ul>
      <div className={styles.empty}></div>
    </>
  );
};

export default Services;
