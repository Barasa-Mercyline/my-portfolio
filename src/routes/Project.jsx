import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg from "../components/HeroImg";
import PricingCard from "../components/PricingCard";
import WorkCard from "../components/WorkCard";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="PROJECTS." text="Some of my recent Projects."/>
      <WorkCard/>
      <PricingCard/>
      <Footer />
    </div>
  );
};

export default Project;
