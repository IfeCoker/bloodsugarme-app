import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src="./logo.png" alt="logo" className="logo-img" />
          <p className="logo-name">SugrMe</p>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
          {/* <i className={click ? "fas fa-times" : "fas fa-bars"} /> */}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {/* this is to make the menu disappear when you click it */}
          <li className="nav-item">
            <AnchorLink
              href="#home"
              className="nav-links active"
              onClick={closeMobileMenu}
            >
              Home
            </AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink
              href="#about"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About
            </AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink
              href="#features"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Features
            </AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink
              href="#product"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Product
            </AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink
              href="#testimonal"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Testimonial
            </AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink
              href="#faq"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              FAQ
            </AnchorLink>
          </li>
          <li className="nav-item">
            <Link
              to="/login"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              LogIn
            </Link>
          </li>
        </ul>
        <div className="button">
          <div className="button1">
            {button && (
              <Button buttonStyle="btn--primary">Request a Demo</Button>
            )}
          </div>
          <div className="button2">
            {button && <Button buttonStyle="btn--outline">LogIn</Button>}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
