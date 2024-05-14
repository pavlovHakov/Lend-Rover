import { Link } from "react-router-dom";
import styles from "./NavigationItem.module.css";

const NavigationItem = ({
  img,
  text,
  id,
  subText,
  character,
  setItemLink,
  linkText,
  setItemImg,
  setItemSub,
  setItemTitle,
  setItemCharacter,
}) => {
  const handelOnMause = (item) => {
    if (item === id) {
      setItemLink((elem) => (elem = linkText));
      setItemImg((item) => (item = img));
      setItemSub((item) => (item = subText));
      setItemTitle((item) => (item = text));
      setItemCharacter((item) => (item = character));
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
