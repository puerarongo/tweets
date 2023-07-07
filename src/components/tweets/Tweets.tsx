import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Report } from "notiflix/build/notiflix-report-aio";
import IData from "../../helpers/interface/data.interface";
import { getData } from "../../redux/operations/data-operation";
import Loader from "../loader/Loader";
import Tweet from "../tweet/Tweet";
import styles from "./Tweets.module.css";

Report.init({
  warning: {
    svgColor: "#5736a3",
    titleColor: "#373737",
    messageColor: "#373737",
    buttonBackground: "#5736a3",
    buttonColor: "#fff",
  },
});

const Tweets: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const count = useRef(0);

  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.data.data);
  const response = useSelector((state: any) => state.data.response);

  useEffect(() => {
    setLoading(true);
    dispatch(getData(page));
    setLoading(false);
  }, [dispatch, page]);

  useEffect(() => {
    if (!response && count.current === 1) {
      Report.warning(
        "Warning",
        "Sorry, there are no more tweets available in the database.",
        "OK"
      );
    }
  }, [response]);

  const loadMore = () => {
    setPage(page + 1);
    count.current = 1;
  };

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
      <button
        type="button"
        className={styles.load__more}
        onClick={loadMore}
        disabled={!response}
      >
        Load More
      </button>
    </div>
  );
};

export default Tweets;
