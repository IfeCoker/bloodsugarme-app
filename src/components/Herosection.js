import React from "react";
import Button from "./Button";
import "./Herosection.css";
import "../App.css";
import { Link } from "react-router-dom";

function Herosection() {
  return (
    <div className="hero-container" id="home">
      <div className="heromsg">
        <div className="herotext">
          <p className="herotext1">
            Track your sugar levels over time and see your progress.
          </p>
          <p className="herotext2">
            Get actionable insights into your sugar levels to manage your
            diabetes better
          </p>
        </div>
        <Link to="">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Get Started
          </Button>
        </Link>
      </div>
      <div className="heroframe">
        <img src="./heroimage.jpg" alt="hero" className="heroimage" />
      </div>
    </div>
  );
}

export default Herosection;
