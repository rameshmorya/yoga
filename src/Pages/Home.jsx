import React from "react";
import HeroSlider from "./Section/HomeSection/HeroSlider/HeroSlider";
import Service from "./Section/HomeSection/Service/Service";
import Experience from "./Section/HomeSection/Experience/Experience";
import GalleryFilter from "./Section/HomeSection/Gallery/GalleryFilter";
import ExploreSchedule from "./Section/HomeSection/ExploreSchedule/ExploreSchedule";
import Contact from "./Section/HomeSection/Contact/Contact";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <Service />
      <Experience />
      <GalleryFilter />
      <ExploreSchedule />
      <Contact />
    </>
  );
};

export default Home;
