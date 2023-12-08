import React from "react";
import "./Featuresection.css";

function Featuresection() {
  return (
    <div className="features" id="features">
      <h1 className="features-title">Features</h1>
      <div className="features-frame">
        <div className="features-frame1">
          <div className="features-frame1a">
            <img src="./Ellipse1.png" alt="ellipse" className="ellipse" />
            <p className="ellipse-content">
              Blood sugar logging. We track your sugar level for results
            </p>
          </div>
          <div className="features-frame1a">
            <img src="./Ellipse2.png" alt="ellipse" className="ellipse" />
            <p className="ellipse-content">
              Medical Consultations Access to medical consultations with experts
            </p>
          </div>
        </div>
        <div className="features-frame2">
          <img src="./featuregroup.png" alt="featuregroup" className="featuregroup"/>
        </div>
        <div className="features-frame3">
          <div className="features-frame3a">
            <img src="./Ellipse4.png" alt="ellipse" className="ellipse" />
            <p className="ellipse-content">
              Health Tips Subscription to health tips for healthy living
            </p>
          </div>
          <div className="features-frame3a">
            <img src="./Ellipse3.png" alt="ellipse" className="ellipse" />
            <p className="ellipse-content">
              Good referrals Get referrals to medical centre{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featuresection;
