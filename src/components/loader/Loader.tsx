import React from "react";
import styles from "./Loader.module.css";
import { Oval } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <div className={styles.container}>
      <Oval
        height={200}
        width={200}
        color="#000000"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#3A4562"
      />
    </div>
  );
};

export default Loader;
