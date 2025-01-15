import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg from "../components/HeroImg";
import PricingCard from "../components/PricingCard";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="PROJECTS." text="Some of my recent Projects."/>
      <PricingCard/>
      <Footer />
    </div>
  );
};

export default Project;
