import React from "react";
import styles from "./Discover.module.css";

const Discover = () => {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <div className="w-full max-w-[650px] flex justify-center items-center flex-col">
          <div className="flex justify-center items-center gap-3">
            <p className={styles.text1}>
              /Babywen <br /> discover
            </p>
            <h2 className={styles.titleP1}> more than a</h2>
          </div>
          <h2 className={styles.titleP1}>
            <br /> narrative, a <span className={`!text-white ${styles.spanText}`}> universe </span>
          </h2>
        </div>

        <div className={styles.surroundingText}>
          <p>
            Dip into the story of BodyWen, the forgotten son of wen, explore
            space with him and discover new horizons with him.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discover;
