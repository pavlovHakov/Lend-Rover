import { Link } from "react-router-dom";
import styles from "./NavigationItem.module.css";

const NavigationItem = ({
  img,
  text,
  id,
  subText,
  setItemLink,
  linkText,
  setItemImg,
  setItemSub,
  setItemTitle,
}) => {
  const handelOnMause = (item) => {
    if (item === id) {
      setItemLink((elem) => (elem = linkText));
      setItemImg((item) => (item = img));
      setItemSub((item) => (item = subText));
      setItemTitle((item) => (item = text));
    }
  };

  return (
    <li onMouseEnter={() => handelOnMause(id)} className={styles.li}>
      <div className={styles.blockImg}>
        <img src={img} alt="img" />
      </div>
      <p className={styles.text}>{text}</p>
    </li>
  );
};

export default NavigationItem;
