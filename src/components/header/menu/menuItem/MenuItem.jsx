import styles from "./MenuItem.module.css";
import img_arrow from "./../../../../img/components-img/arrow-black.png";
import MenuInfo from "../../menu-info/MenuInfo";

const MenuItem = ({ text, page, id, isActive, handleClick }) => {
  const clickLi = () => {
    handleClick(id);
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
      <MenuInfo text={text} isActive={isActive} />
    </li>
  );
};

export default MenuItem;
