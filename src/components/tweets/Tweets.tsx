import React from "react";
import styles from "./Tweets.module.css";
import Tweet from "../tweet/Tweet";

const Tweets: React.FC = () => {
  return (
    <div className={styles.container}>
      <Tweet />
    </div>
  );
};

export default Tweets;
