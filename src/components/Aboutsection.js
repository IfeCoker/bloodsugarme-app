import React from "react";
import "../App.css";
import "./Aboutsection.css";

function Aboutsection() {
  return (
    <>
      <div className="aboutsection" id="about">
        <h1>About </h1>
        <p className="about-content">
          We provide people with diabetes the necessary guidiance to manage
          their condition and stay healthy. By tracking their blood sugar levels
          over time, people with diabetes can identify patterns and trends,
          which can help them to make informed decisions about their diet,
          exercise, and medication. Our easy-to-use tracker allows you to log
          your blood sugar levels manually or by uploading data from your blood
          glucose meter. You can also track other factors that can affect your
          blood sugar levels, such as diet, exercise, and medication.
        </p>
      </div>
    </>
  );
}

export default Aboutsection;
