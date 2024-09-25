import React from "react";
import Slider from "react-slick";
import styles from "./Roadmap.module.css";

const Roadmap = () => {
  const settings = {
    dots: false, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 4, 
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 2000, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full min-h-screen justify-center items-center">
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        <div className={styles.card}>
          <h3>Q1</h3>
          <p>BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA</p>
        </div>
        <div className={styles.card}>
          <h3>Q2</h3>
          <p>BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA</p>
        </div>
        <div className={styles.card}>
          <h3>Q3</h3>
          <p>BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA</p>
        </div>
        <div className={styles.card}>
          <h3>Q4</h3>
          <p>BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA</p>
        </div>
        <div className={styles.card}>
          <h3>Q5</h3>
          <p>BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA</p>
        </div>
      </Slider>
      <h2>
        <a href="#" className= "text-[18px] sm:text-[20px] md:text-[25px]">Read the full documentation here</a>
      </h2>
    </div>
    </div>
  );
};

export default Roadmap;
