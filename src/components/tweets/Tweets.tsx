import React, { useState, useEffect } from "react";
import IData from "../helpers/interface/data.interface";
import dataFetch from "../helpers/dataFetch";
import Tweet from "../tweet/Tweet";
import styles from "./Tweets.module.css";

const Tweets: React.FC = () => {
  const [data, setData] = useState<IData[]>([]);
  //const [followersList, setFollowersList] = useState<string[]>([]);

  useEffect(() => {
    dataFetch()
      .then((res) => setData(res.data))
      .catch((err: Error) => console.log(err));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tweets</h1>
      <ul className={styles.tweet__list}>
        {data.map(({ id, user, avatar, tweets, followers }: IData) => {
          return (
            <li className={styles.grid__item} key={id}>
              <Tweet
                id={id}
                user={user}
                avatar={avatar}
                tweets={tweets}
                followers={followers}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tweets;
