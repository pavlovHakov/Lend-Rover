import styles from "./Card.module.css";
import FollowingLink from "./../followingLink/FollowingLink";

const Card = ({ img, title, subtitle }) => {
  return (
    <div className={styles.block}>
      <img className={styles.img} src={img} alt="img" />
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.subtitle}>{subtitle}</p>
      <FollowingLink text="explore" />
    </div>
  );
};

export default Card;
