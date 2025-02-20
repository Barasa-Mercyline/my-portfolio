import "./FooterStyles.css";

import React from "react";
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
             <div>
             <p>252 React House.</p>
             <p>Tumaini City.</p>
             </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +2547-7133-188-51
            </h4>
          </div>
          <div className="email">
          <h4>
            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            mcyinfo@gmail.com
          </h4>
        </div>
        </div>
        
        <div className="right">
            <h4>About the developer's Aspiration.</h4>
            <p>This is Mercy B. A software developer specialized in Web development. I enjoy coding and learning new skills. Follow me on:</p>
            <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaWhatsapp
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
             <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
