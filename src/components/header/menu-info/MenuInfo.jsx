import styles from "./MenuInfo.module.css";
import { ChoicePage } from "./../../../repeating-functions/index";

const MenuInfo = ({ text, isActive, toggleActive }) => {
  // const [isComponent, setIsComponent] = useState(false);

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
