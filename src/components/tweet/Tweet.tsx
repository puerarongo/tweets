import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followingListActions } from "../../redux/slices/followingListSlice";
import IData from "../../helpers/interface/data.interface";
import numberTransform from "../../helpers/numberTransform";
import imgPath from "../../helpers/imgPath";
import styles from "./Tweet.module.css";

const Tweet: React.FC<IData> = ({ id, user, avatar, tweets, followers }) => {
  const dispatch = useDispatch();
  const list = useSelector((state: any) => state.followingList);

  const clickHandler = () => dispatch(followingListActions.followerAdd(id));

  const followersCount = useCallback(
    (value: number) => {
      if (list.followingList.includes(id)) {
        return numberTransform(value + 1);
      } else {
        return numberTransform(value);
      }
    },
    [list, id]
  );

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
        <p className={styles.follower__text}>
          {followersCount(followers)} followers
        </p>
        <button
          type="button"
          className={
            list.followingList.includes(id)
              ? styles.button__active
              : styles.button
          }
          onClick={clickHandler}
        >
          {list.followingList.includes(id) ? "following" : "follow"}
        </button>
      </div>
    </div>
  );
};

export default Tweet;
