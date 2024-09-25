import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./VideoGallery.module.css";

import Video1Thumb from "../../../public/home/video-1.jpg";
import Video2Thumb from "../../../public/home/video-2.jpg";
import Video3Thumb from "../../../public/home/video-3.jpg";

interface VideoData {
  thumb: any;
  videoUrl: string;
  alt: string;
}

const videos: VideoData[] = [
  { thumb: Video1Thumb, videoUrl: "/videos/video1.mp4", alt: "Space" },
  { thumb: Video2Thumb, videoUrl: "/videos/video2.mp4", alt: "Moon" },
  { thumb: Video3Thumb, videoUrl: "/videos/video3.mp4", alt: "Mars" },
];

const VideoGallery: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentVideo, setCurrentVideo] = useState<string>("");
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        setScrollPosition(-top);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openModal = (videoUrl: string) => {
    setCurrentVideo(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo("");
  };

  return (
    <div className={styles.section} ref={sectionRef}>
      {/* Scrolling Text */}
      <div 
        className={styles.scrollingText}
        style={{ transform: `translateX(${scrollPosition}px)` }}
      >
        <span className={styles.marqueeText}>
          VIDEO <span className={styles.invaders}>c</span> &nbsp;
          VIDEO <span className={styles.invaders}>q</span> &nbsp;
          VIDEO <span className={styles.invaders}>j</span> &nbsp;
        </span>
      </div>

      {/* Image Gallery */}
      <div className={styles.imageSection}>
        {videos.map((video, index) => (
          <div key={index} className={styles.imageContainer}>
            <Image src={video.thumb} alt={video.alt} />
            <div
              className={styles.overlay}
              onClick={() => openModal(video.videoUrl)}
            >
              <span>Play Video</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Video */}
      {isModalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>
            <video controls autoPlay className={styles.videoPlayer}>
              <source src={currentVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;