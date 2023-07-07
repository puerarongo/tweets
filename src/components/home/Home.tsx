import React from "react";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.into}>
        <h1 className={styles.title}>GoIT is a platform for IT courses</h1>
        <p className={styles.text}>
          Try yourself in IT - take a free layout marathon and create your first
          website
        </p>
        <a
          className={styles.link}
          href="https://goit.global/ua/"
          aria-label="Link outside the application to the official website GoIT"
        >
          Join
        </a>
      </div>
    </div>
  );
};

export default Home;
