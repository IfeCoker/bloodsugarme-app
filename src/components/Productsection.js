import React from "react";
import "./Productsection.css";

function Productsection() {
  return (
    <div className="product" id="product">
      <h1>Product</h1>
      <div className="productsection">
        <img
          src="productimage.png"
          alt="productimage"
          className="productimage"
        />
        <div className="productmessage">
          <p className="product-content">
            Get the best experince form SugrMe mobile app. You get to log your
            blood sugar level result into our mobile application and explore all
            the amazing features that we have
          </p>
          <div className="action">
            <button className="demobutton">Request a Demo</button>
            <button className="downloadbutton">Download App</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productsection;
