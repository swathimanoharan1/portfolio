import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Footer.css";
import GitHub from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <a href="mailto:swathimanoharan45303@gmail.com">
          <EmailIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/swathi-manoharan-73673b1a6/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/swathimanoharan1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>
      </div>
      <p> &copy; 2024 swathi.com</p>
    </div>
  );
}

export default Footer;
