import styles from "./Navigation.module.css";
import NavigationItem from "./navigation-item/NavigationItem";
import { RangeRover, RangeDefender, RangeDiscovery } from "./../../../date";
import { useEffect, useState } from "react";
import DropMenu from "../drop-down-menu/drop-menu/DropMenu";
import DropContent from "../drop-down-menu/drop-content/DropContent";
import defaultImg from "./../../../img/range-rover/img-1.png";

const Navigation = () => {
  const [arrRover, setArrRover] = useState(RangeRover);
  const [arrDefender, setArrDefender] = useState(RangeDefender);
  const [arrDiscovery, setArrDiscovery] = useState(RangeDiscovery);
  const [itemText, setItemText] = useState("Range Rover");
  const [itemImg, setItemImg] = useState(defaultImg);
  const [itemSub, setItemSub] = useState("Peerless refinement and luxury.");
  const [itemLink, setItemLink] = useState([
    "OVERVIEW ",
    "GALLERY",
    "EXPLORE",
    "RANGE ROVER SV",
    "ELECTRIC HYBRID",
    "MODELS AND SPECIFICATIONS",
    "OPTIONS AND ACCESSORIES",
    "FLEET & BUSINESS",
  ]);

  // useEffect(()=>{

  // }, [])

  return (
    <ul className={styles.navigation}>
      <li className={styles.title}>range rover</li>
      {arrRover.map((item, index) => (
        <>
          <NavigationItem
            key={index}
            {...item}
            setItemLink={setItemLink}
            setItemImg={setItemImg}
            setItemSub={setItemSub}
          />
          <DropMenu itemSub={itemSub} itemLink={itemLink} itemText={itemText} />
          <DropContent img={itemImg} />
        </>
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
