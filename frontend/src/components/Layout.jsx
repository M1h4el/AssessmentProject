import React from "react";
import "../styles/Footer.scss";

import {
  TiSocialInstagram,
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialLinkedin,
} from "react-icons/ti";

function Footer() {

  const styleObj = {
    color: "whitesmoke",
    fontSize: 30
  }
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <ul>
            <li>
              <TiSocialFacebook style={styleObj} />
            </li>
            <li>
              <TiSocialInstagram style={styleObj}/>
            </li>
            <li>
              <TiSocialTwitter style={styleObj}/>
            </li>
            <li>
              <TiSocialLinkedin style={styleObj}/>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
