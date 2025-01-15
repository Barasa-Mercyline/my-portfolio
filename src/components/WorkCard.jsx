import "./WorkCardStyles.css"

import React from 'react'
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
            <img className="field-img"src={props.imgsrc} alt="fieldImg" />
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                    <button className="btn">
                   <NavLink to={props.view}  >View</NavLink>
                    </button>
                    <button className="btn">
                   <NavLink to={props.source} >Source</NavLink>
                    </button>
                </div>
            </div>
          </div>
  )
}

export default WorkCard;