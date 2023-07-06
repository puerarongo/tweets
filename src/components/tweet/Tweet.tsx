import React from "react";
import IData from "../helpers/interface/data.interface";
import imgPath from "../helpers/imgPath";
import styles from "./Tweet.module.css";

const Tweet: React.FC<IData> = ({ id, user, avatar, tweets, followers }) => {
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
        <img
          className={styles.img}
          src={`${avatar}`}
          alt={`${id}. ${user} avatar`}
        />
        <hr className={styles.line} />
      </div>
      <div className={styles.second__half}>
        <p className={styles.tweet__text}>{tweets} tweets</p>
        <p className={styles.follower__text}>{followers} followers</p>
        <button type="button" className={styles.button}>
          follow
        </button>
      </div>
    </div>
  );
};

export default Tweet;
