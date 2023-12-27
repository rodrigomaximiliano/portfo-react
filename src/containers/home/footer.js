import React from "react";
import { FaInstagram, FaSpotify, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <a href="https://www.instagram.com/rodrigomaxmiliano/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
        <a href="https://open.spotify.com/user/qdstxvct31et10e07pn59u0a0?si=ihOmMZpxQcK7MTNZi0UQ6w" target="_blank" rel="noopener noreferrer">
          <FaSpotify size={30} />
        </a>
        <a href="https://www.linkedin.com/in/rodrigomaximiliano" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/rodrigomaximiliano" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
