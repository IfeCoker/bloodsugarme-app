import React from "react";
import CarouselItem from "./CarouselItem";
import "./Testimonial.css";
// import carouseldata from './carouseldata.json'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

function Carousel() {
  return (
    <div className="testimonials-section" id="#testimonial">
      <h1>Testimonials</h1>
      <CarouselItem />
    </div>
  );
}

export default Carousel;