"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Hero from "./components/Hero";
import Discover from "./components/Discover";
import VideoGallery from "./components/VideoGallery";
import Project from "./components/Project";
import RoadmapMarquee from "./components/RoadmapMarquee";
import Roadmap from "./components/Roadmap";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Discover />
      <VideoGallery />
      <Project />
      <RoadmapMarquee />
      <Roadmap />
      <Footer/>
    </div>
  );
}
