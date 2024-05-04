import styles from "./DropMenu.module.css";
import SubMenu from "./../../../../components/sub-menu/SubMenu";
import LinkDecorationLg from "../../../../reused-Components/link-decoration-lg/LinkDecorationLg";

const DropMenu = ({ itemText, itemSub, itemLink }) => {
  function sortingLink() {
    console.log("Yes");
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{itemText}</h1>
      <p className={styles.subText}>{itemSub}</p>
      {/* 
      <LinkDecorationLg text={linkText} /> */}
      <p>{sortingLink()}</p>
    </div>
  );
};

export default DropMenu;
