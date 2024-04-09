import styles from "./FollowingLink.module.css";

const FollowingLink = ({ text }) => {
  return (
    <a className={styles.link} href="!#">
      {text}
    </a>
  );
};

export default FollowingLink;
