import styles from "./MenuInfo.module.css";
import { ChoicePage } from "./../../../repeating-functions/index";

const MenuInfo = ({ text, isActive, toggleActive }) => {
  // const [isComponent, setIsComponent] = useState(false);

  // const ChoicePage = () => {
  //   if (isActive === true && text === "vehicles" && toggleActive === true) {
  //     return <Vehicles />;
  //   } else if (
  //     isActive === true &&
  //     text === "vehicles" &&
  //     toggleActive === false
  //   ) {
  //     return false;
  //   }
  //   if (isActive === true && text === "purchase") {
  //     return <Purchase />;
  //   }
  //   if (isActive === true && text === "owners") {
  //     return <Owners />;
  //   }
  //   if (isActive === true && text === "explore") {
  //     return <Explore />;
  //   }
  // };

  return (
    <ul
      className={
        isActive ? `${styles.menuInfo} ${styles.active}` : styles.menuInfo
      }
    >
      {ChoicePage(isActive, text, toggleActive)}
    </ul>
  );
};

export default MenuInfo;
