import React, { useState } from "react";
import { FaBars, FaReact, FaUser, FaCode, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import './styles.scss';

const data = [
  { label: "HOME", to: "/", icon: <FaReact size={20} /> },
  { label: "ABOUT ME", to: "/about", icon: <FaUser size={20} /> },
  { label: "SKILLS", to: "/skills", icon: <FaCode size={20} /> },
  { label: "PORTFOLIO", to: "/portfolio", icon: <FaBriefcase size={20} /> },
  { label: "CONTACT", to: "/contact", icon: <FaEnvelope size={20} /> },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <nav className={`navbar ${toggleIcon ? "open" : ""}`}>
      <div className="navbar__container">
        <Link to={"/"} className="navbar__container__logo">
          <FaReact size={60} />
        </Link>
        <ul className={`navbar__container__menu ${toggleIcon ? "show" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
                onClick={() => setToggleIcon(false)}
              >
                {item.icon} {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
