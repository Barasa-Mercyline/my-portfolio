import React from "react";
import bikeImg from "../assets/bike.jpg";
import { Link } from "react-router-dom";
import "../index.css"

function Hero() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="bikeImg" src={bikeImg} alt="bikeImg" />
      </div>
      <div className="content">
        <p>Hello, I'm a software developer.</p>
        <h1>Learning React Js</h1>
        <div>
          <button>
          <Link to="/project" className="button">
            Projects
          </Link>
          </button>
          
          <button>
          <Link to="/contact" className="btn-light">
            Contact Us
          </Link>
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default Hero;
