import "./WorkCardStyles.css"

import React from 'react'
import fieldImg from "../assets/field4.jpg";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="project-card">
            <img className="field-img"src={props.imgsrc} alt="fieldImg" />
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                    <button className="btn">
                   <NavLink to="url.com"  > {props.view}</NavLink>
                    </button>
                    <button className="btn">
                   <NavLink to="url.com" >{props.source}</NavLink>
                    </button>
                </div>
            </div>
          </div>
  )
}

export default WorkCard;