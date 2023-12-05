import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { FaInstagram, FaSpotify, FaLinkedin, FaGithub } from "react-icons/fa";
import Footer from "./footer";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home_text-wrapper">
        <h1>
          Hello, I'm Rodrigo Maximiliano.
          <br />
          Software Development
        </h1>
      </div>
      <Animate
        play
        duration={0.5}
        delay={0.7}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translateY(0px)",
        }}
      >
        <div className="home_contact-me">
          <button onClick={handleNavigateToContactMePage}>Contact me</button>
        </div>
      </Animate>

      {/* Agrega el componente Footer al final del return */}
      <Footer />
    </section>
  );
};

export default Home;
