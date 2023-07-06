import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import IData from "../../helpers/interface/data.interface";
import { getData } from "../../redux/operations/data-operation";
import Loader from "../loader/Loader";
import Tweet from "../tweet/Tweet";
import styles from "./Tweets.module.css";

const Tweets: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [tweets, setTweets] = useState<IData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.data);

  useEffect(() => {
    setLoading(true);
    dispatch(getData(page));
    setLoading(false);
  }, [dispatch, page]);

  useEffect(() => {
    if (page === 1) setTweets(data);
  }, [data, page]);

  const loadMore = () => {
    dispatch(getData(page + 1));
    setPage(page + 1);

    console.log("Load More");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tweets</h1>
      <ul className={styles.tweet__list}>
        {loading ? (
          <Loader />
        ) : (
          tweets.map(({ id, user, avatar, tweets, followers }: IData) => {
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
      <button type="button" className={styles.load__more} onClick={loadMore}>
        Load More
      </button>
    </div>
  );
};

export default Tweets;
