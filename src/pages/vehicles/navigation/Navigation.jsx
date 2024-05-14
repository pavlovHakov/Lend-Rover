import styles from "./Navigation.module.css";
import NavigationItem from "./navigation-item/NavigationItem";
import { RangeRover } from "./../../../date";
import { useEffect, useState } from "react";
import DropMenu from "../drop-down-menu/drop-menu/DropMenu";
import DropContent from "../drop-down-menu/drop-content/DropContent";
import defaultImg from "./../../../img/range-rover/img-1.png";

import icon_1 from "./../../../img/range-rover/icon-fuell.svg";
import icon_2 from "./../../../img/range-rover/icon-co2.svg";
import icon_3 from "./../../../img/range-rover/icon-kreslo.svg";
import icon_4 from "./../../../img/range-rover/icon-porshen.svg";

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
  const [itemCharacter, setItemCharacter] = useState([
    { id: 0, icon: icon_1, text: "FROM 0,6†† l/100km UP TO 448,4†† MPG" },
    { id: 1, icon: icon_2, text: "AS LOW AS 16†† g/km" },
    { id: 2, icon: icon_3, text: "5 SEATS" },
    { id: 3, icon: icon_4, text: "1.050✦ LITRES" },
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
            setItemCharacter={setItemCharacter}
          />
          <DropMenu
            itemSub={itemSub}
            itemLink={itemLink}
            itemTitle={itemTitle}
          />
          <DropContent img={itemImg} itemCharacter={itemCharacter} />
        </>
      ))}
    </ul>
  );
};

export default Navigation;
