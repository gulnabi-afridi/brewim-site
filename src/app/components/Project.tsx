import React from "react";
import styles from "./Project.module.css";

const Project = () => {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <div className="w-full max-w-[650px] flex justify-center items-center flex-col">
          <div className="flex justify-center items-center gap-3">
          <p className={styles.text1}>
            /Babywen <br /> project
         
          </p>
          <h2 className={styles.titleP1}> Working on</h2>
          </div>
          <h2 className={styles.titleP1}>
              <br /> something{" "}
            <span className={`text-black ${styles.spanText}`}> meaningfull </span>
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

export default Project;
