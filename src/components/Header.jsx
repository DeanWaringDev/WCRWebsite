import React from "react";
import { useState } from "react";

import Logo from "../assets/images/LogoSmall.png";

import "../css/header.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="flexOne">
            <div>
              <img src={Logo} alt="" />
            </div>

            <h1>Wheelchair Racer</h1>

            <nav className="mobile-nav">
              <div
                className={isActive ? "active ham-menu" : "ham-menu"}
                onClick={toggleClass}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </nav>

            <nav
              className={
                isActive ? "active off-screen-menu" : "off-screen-menu"
              }
              onClick={toggleClass}
            >
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">Races</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Profile</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
