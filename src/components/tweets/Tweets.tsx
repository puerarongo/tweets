import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Report } from "notiflix/build/notiflix-report-aio";
import imgPath from "../../helpers/imgPath";
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
  const [values, setValues] = useState<IData[]>([]);
  const count = useRef(0);

  const dispatch = useDispatch();
  let data = useSelector((state: any) => state.data.data);
  const response = useSelector((state: any) => state.data.response);
  const list = useSelector((state: any) => state.followingList);

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

  useEffect(() => setValues([...data]), [data]);

  const loadMore = () => {
    setPage(page + 1);
    count.current = 1;
    setValues([...data]);
  };

  const selectHandler = (e: any) => {
    let newArr = [];
    switch (e.target.value) {
      case "follow":
        newArr = data.filter((el: any) => !list.followingList.includes(el.id));
        setValues([...newArr]);
        return;
      case "following":
        newArr = data.filter((el: any) => list.followingList.includes(el.id));
        setValues([...newArr]);
        return;
      default:
        setValues([...data]);
        return;
    }
  };

  return (
    <div className={styles.container}>
      <Link
        to="/"
        className={styles.back}
        aria-label="Link to return to home page"
      >
        <svg className={styles.back__svg}>
          <use href={imgPath.arrow + "#arrow"}></use>
        </svg>
        <p className={styles.back__text}>Back</p>
      </Link>
      <h2 className={styles.title}>Tweets</h2>
      <select className={styles.select} onChange={selectHandler}>
        <option value="all">Show all</option>
        <option value="follow">Follow</option>
        <option value="following">Followings</option>
      </select>
      {loading || data.length < 1 ? (
        <Loader />
      ) : values.length > 0 ? (
        <ul className={styles.tweet__list}>
          {values.map(({ id, user, avatar, tweets, followers }: IData) => {
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
          })}
        </ul>
      ) : (
        <div className={styles.no__data}>
          <h2 className={styles.no__text}>No tweets data</h2>
        </div>
      )}
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
