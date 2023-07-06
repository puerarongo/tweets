import React from "react";
import styles from "./Tweet.module.css";
import imgPath from "../helpers/imgPath";

const Tweet: React.FC = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={imgPath.logo} alt="goit logo" />
      <div
        className={styles.first__half}
        style={{
          backgroundImage: `url(${imgPath.background})`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `50% 50%`,
        }}
      ></div>
      <div className={styles.position__container}>
        <div className={styles.img}></div>
        <hr className={styles.line} />
      </div>
      <div className={styles.second__half}>
        <p className={styles.tweet__text}>tweets</p>
        <p className={styles.follower__text}>followers</p>
        <button type="button" className={styles.button}>
          follow
        </button>
      </div>
    </div>
  );
};

export default Tweet;
