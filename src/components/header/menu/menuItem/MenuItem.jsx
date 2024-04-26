import styles from "./MenuItem.module.css";
import img_arrow from "./../../../../img/components-img/arrow-black.png";
import MenuInfo from "../../menu-info/MenuInfo";
import { useState } from "react";

const MenuItem = ({ text, page, id, isActive, handleClick }) => {
  const [toggleActive, setToggleActive] = useState(false);

  const clickLi = () => {
    handleClick(id);
    setToggleActive((toggleActive) => !toggleActive);
    console.log(toggleActive);
    console.log(isActive);
  };
  return (
    <li className={styles.li}>
      <span
        // to={path}
        onClick={clickLi}
        className={isActive ? `${styles.link} ${styles.active}` : styles.link}
      >
        {text}
      </span>
      <img className={styles.img} src={img_arrow} width={15} alt="arrow" />
      <MenuInfo text={text} toggleActive={toggleActive} isActive={isActive} />
    </li>
  );
};

export default MenuItem;
