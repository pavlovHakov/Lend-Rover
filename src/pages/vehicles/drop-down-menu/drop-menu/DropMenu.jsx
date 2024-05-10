import styles from "./DropMenu.module.css";
import LinkDecorationLg from "../../../../reused-Components/link-decoration-lg/LinkDecorationLg";

const DropMenu = ({ itemText, itemSub, itemLink }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{itemText}</h1>
      <p className={styles.subText}>{itemSub}</p>
      {itemLink.map((item, index) => {
        return (
          <div key={index} className={styles.linkStyles}>
            <LinkDecorationLg text={item} />
          </div>
        );
      })}
    </div>
  );
};

export default DropMenu;
