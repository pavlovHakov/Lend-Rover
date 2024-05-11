import styles from "./DropMenu.module.css";
import LinkDecorationLg from "../../../../reused-Components/link-decoration-lg/LinkDecorationLg";
import img from "./../../../../img/components-img/arrow-green.png";

const DropMenu = ({ itemTitle, itemSub, itemLink }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{itemTitle}</h1>
      <p className={styles.subText}>{itemSub}</p>
      {itemLink.map((item, index) => {
        return (
          <div key={index} className={styles.linkStyles}>
            <div className={styles.img}>
              <img src={img} alt="img" />
            </div>
            <LinkDecorationLg text={item} />
          </div>
        );
      })}
    </div>
  );
};

export default DropMenu;
