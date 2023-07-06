import React from "react";
import styles from "./AppHeader.module.css";
import Navigation from "../navigation/Navigation";
import { Outlet } from "react-router-dom";

const AppHeader: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navigation />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default AppHeader;
