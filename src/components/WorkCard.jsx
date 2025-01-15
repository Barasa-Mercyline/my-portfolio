import "./WorkCardStyles.css"

import React from 'react'
import fieldImg from "../assets/field4.jpg";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="project-card">
            <img className="field-img"src={fieldImg} alt="fieldImg" />
            <h2 className="project-title">Project Title.</h2>
            <div className="pro-details">
                <p>This is a text.</p>
                <div className="pro-btns">
                    <button className="btn">
                   <NavLink to="url.com"  > View</NavLink>
                    </button>
                    <button className="btn">
                   <NavLink to="url.com" > Source</NavLink>
                    </button>
                </div>
            </div>
          </div>
  )
}

export default WorkCard;