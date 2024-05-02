import styles from "./Navigation.module.css";
import NavigationItem from "./navigation-item/NavigationItem";
import { RangeRover, RangeDefender, RangeDiscovery } from "./../../../date";
import { useState } from "react";

const Navigation = ({}) => {
  const [arrRover, setArrRover] = useState(RangeRover);
  const [arrDefender, setArrDefender] = useState(RangeDefender);
  const [arrDiscovery, setArrDiscovery] = useState(RangeDiscovery);

  return (
    <ul className={styles.navigation}>
      <li className={styles.title}>range rover</li>
      {arrRover.map((item) => (
        <NavigationItem key={item.id} {...item} />
      ))}

      <li className={styles.title}>defender</li>
      {arrDefender.map((item) => (
        <NavigationItem key={item.id} {...item} />
      ))}

      <li className={styles.title}>DISCOVERY</li>
      {arrDiscovery.map((item) => (
        <NavigationItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default Navigation;
