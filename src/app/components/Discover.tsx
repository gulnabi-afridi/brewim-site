import React from "react";
import styles from "./Discover.module.css";

const Discover = () => {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <div className={styles.mainText}>
          <p className={styles.text1}>Babywen <br/> discover
          </p>
          <h2 className={styles.titleP1}>More than a narrative, a  <span className="text-white"> universe </span></h2>

        </div>
        <div className={styles.surroundingText}>
          <p>
            Dip into the story of BodyWen, the forgotten son of wen, explore space with him and discover new horizons with him.
           
          </p>
        </div>
      </div>
   
    </div>
  );
};

export default Discover;
