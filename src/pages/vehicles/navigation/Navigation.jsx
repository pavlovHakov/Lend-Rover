import styles from "./Navigation.module.css";
import NavigationItem from "./navigation-item/NavigationItem";
import { RangeRover } from "./../../../date";
import { useEffect, useState } from "react";
import DropMenu from "../drop-down-menu/drop-menu/DropMenu";
import DropContent from "../drop-down-menu/drop-content/DropContent";
import defaultImg from "./../../../img/range-rover/img-1.png";

const Navigation = () => {
  const [arrRover, setArrRover] = useState(RangeRover);
  const [itemTitle, setItemTitle] = useState("Range Rover");
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
      {arrRover.map((item, index) => (
        <>
          <NavigationItem
            key={index}
            {...item}
            setItemLink={setItemLink}
            setItemImg={setItemImg}
            setItemSub={setItemSub}
            setItemTitle={setItemTitle}
          />
          <DropMenu
            itemSub={itemSub}
            itemLink={itemLink}
            itemTitle={itemTitle}
          />
          <DropContent img={itemImg} />
        </>
      ))}
    </ul>
  );
};

export default Navigation;
