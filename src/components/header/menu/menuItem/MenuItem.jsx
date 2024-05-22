import styles from "./MenuItem.module.css";
import img_arrow from "./../../../../img/components-img/arrow-black.png";
import MenuInfo from "../../menu-info/MenuInfo";
import { useState } from "react";

const MenuItem = ({ text, page, id, isActive, handleClick, setShow, show }) => {
  const [toggleActive, setToggleActive] = useState(false);

  const clickLi = () => {
    if (window.innerWidth > 1186) {
      handleClick(id);
      setToggleActive((toggleActive) => !toggleActive);
    }
    if (window.innerWidth < 1186) {
      handleClick(id);
      setShow((show) => !show);
    }
  };
  return (
    <li onClick={clickLi} className={styles.li}>
      <span
        // to={path}
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
