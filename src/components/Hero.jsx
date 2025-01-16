import React from "react";
import bikeImg from "../assets/bike.jpg";
import { Link } from "react-router-dom";
import "./HeroStyles.css"

function Hero() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="bike-img" src={bikeImg} alt="bikeImg" />
      </div>
      <div className="content">
        <p>Hi, I'm a Software developer.</p>
        <h1>Learning React.</h1>
        <div className="button">
          <button >
          <Link to="/project">
            PROJECTS
          </Link>
          </button>
          <button>
          <Link to="/contact" >
            CONTACT
          </Link>
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default Hero;
