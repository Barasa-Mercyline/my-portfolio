import "./AboutContentStyles.css"

import React from 'react'
import {Link} from 'react-router-dom'
import React1 from '../assets/field3.jpg'
import React2 from '../assets/bike.jpg'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am i?</h1>
            <p> Am a Front-End developer in React js. Working on Nodejs to become a fullstack developer.</p>
            <Link to="/contact"> <button className="btn">CONTACT</button></Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="top">
                    <img className="img" src={React1} alt="true" />
                </div>
                <div className="bottom">
                    <img className="img" src={React2} alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;