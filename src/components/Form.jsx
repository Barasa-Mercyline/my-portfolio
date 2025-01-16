import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <label htmlFor="">Your name</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="text" />
        <label htmlFor="">Subject</label>
        <input type="text" />
        <label htmlFor="">Message</label>
        <textarea rows="6" placeholder="Type Your Message here"></textarea>
        <button className="btn">Submit</button>
    </div>
  )
}

export default Form