import React from "react";
import "../../App.css";
import Herosection from "../Herosection";
import Aboutsection from "../Aboutsection";
import Featuresection from "../Featuresection";
import Productsection from "../Productsection";
// import Testimonial from "../Testimonial";
import Carousel from "../Carousel";
import Faq from "../Faq";

function Home() {
  return (
    <>
      <Herosection />
      <Aboutsection />
      <Featuresection />
      <Productsection />
      {/* <Testimonial /> */}
      <Carousel />
      <Faq />
    </>
  );
}

export default Home;
