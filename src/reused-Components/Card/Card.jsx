import styles from "./Card.module.css";
import FollowingLink from "./../followingLink/FollowingLink";

const Card = ({ img1, title, subtitle }) => {
  return (
    <div className={styles.block}>
      <div className={styles.imgBlock}>
        <img className={styles.img} src={img1} alt="img" />
        <div className={styles.blackBlock}></div>
      </div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.subtitle}>{subtitle}</p>
      <FollowingLink text="explore" />
    </div>
  );
};

export default Card;
