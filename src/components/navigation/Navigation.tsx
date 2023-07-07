import React from "react";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo__container}>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? styles.link__active : styles.link}`
            }
            to="/"
            aria-label="Link to home page"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `${isActive ? styles.link__active : styles.link}`
            }
            to="/tweets"
            aria-label="Link to tweets page"
          >
            Tweets
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
