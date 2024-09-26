import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import styles from "./RoadmapMarquee.module.css";

const RoadmapMarquee = () => {
  const [marqueeSpeed, setMarqueeSpeed] = useState(130);

  useEffect(() => {
    const handleResize = () => {
      const speed = window.innerHeight < 600 ? 50 : 130; // Adjust the speed as needed
      setMarqueeSpeed(speed);
    };

    // Set initial speed
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeWrapper}>
        <Marquee
          gradient={false}
          speed={marqueeSpeed}
          direction="left"
          className={styles.marquee}
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
            return <p>Roadmap&nbsp; &nbsp;</p>;
          })}
        </Marquee>
      </div>
      <div className={`md:flex hidden ${styles.marqueeWrapper}`}>
        <Marquee
          gradient={false}
          speed={marqueeSpeed}
          direction="left"
          className={styles.marquee}
        >
          <p>Roadmap&nbsp; &nbsp;</p>
          <p>Roadmap&nbsp; &nbsp;</p>
          <p>Roadmap&nbsp; &nbsp;</p>
          <p>Roadmap&nbsp; &nbsp;</p>
          <p>Roadmap&nbsp; &nbsp;</p>
        </Marquee>
      </div>
      <div className={`md:flex hidden ${styles.marqueeWrapper}`}>
        <Marquee
          gradient={false}
          speed={marqueeSpeed}
          direction="left"
          className={styles.marquee}
        >
          <p>Roadmap&nbsp; &nbsp;</p>
          <p>Roadmap&nbsp; &nbsp;</p>
          <p>Roadmap&nbsp; &nbsp;</p>
          <p>Roadmap&nbsp; &nbsp;</p>
          <p>Roadmap&nbsp; &nbsp;</p>
        </Marquee>
      </div>
    </div>
  );
};

export default RoadmapMarquee;
