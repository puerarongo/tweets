import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import IData from "../../helpers/interface/data.interface";
import { getData } from "../../redux/operations/data-operation";
import Loader from "../loader/Loader";
import Tweet from "../tweet/Tweet";
import styles from "./Tweets.module.css";

const Tweets: React.FC = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const data = useSelector((state: any) => state.data);

  useEffect(() => {
    setLoading(true);
    dispatch(getData());
    setLoading(false);
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tweets</h1>
      <ul className={styles.tweet__list}>
        {loading ? (
          <Loader />
        ) : (
          data.map(({ id, user, avatar, tweets, followers }: IData) => {
            return (
              <li className={styles.tweet__item} key={id}>
                <Tweet
                  id={id}
                  user={user}
                  avatar={avatar}
                  tweets={tweets}
                  followers={followers}
                />
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default Tweets;
