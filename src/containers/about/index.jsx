import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Rodrigo Maximiliano",
  },
  {
    label: "Age :",
    value: "28",
  },
  {
    label: "Address :",
    value: "Argentina - Corrientes",
  },
  {
    label: "Email :",
    value: "maxilcksly@gmail.com",
  },
  {
    label: "Contact No",
    value: "+11 3456789056",
  },
];

const jobSummary =
  " Full-stack developer in constant learning.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={50} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={0.3}
            delay={0.4}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Software Development</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={0.5}
            delay={0.4}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60}  />
              </div>
    
              <div>

                <DiAndroid size={60} />
              </div>
              <div>
                <FaDatabase size={60}  />
              </div>
              <div>
                <DiApple size={60}  />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;