import React from "react";
import "./Testimonial.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    id: 1,
    content:
      "This app has been a lifesaver for me. I was struggling to keep track of my blood sugar levels, and this app has made it so easy. ",
    avatarTitle: "Grace Julie",
    avatarRole: "Food Specialist",
  },
  {
    id: 2,
    content:
      "This app has been a lifesaver for me. I was struggling to keep track of my blood sugar levels,",
    avatarTitle: "Grace Janet",
    avatarRole: "Food Specialist",
  },
  {
    id: 3,
    content: "This app has been a lifesaver for me.",
    avatarTitle: "Paul Julie",
    avatarRole: "Food Specialist",
  },
];

function TestimonialCard({ item, isVisible }) {
  return (
    <div className={"testimonial-card"}>
      <div className="quote1">
        <FontAwesomeIcon icon={faQuoteLeft} className="leftquote" />
      </div>
      <div className="quote2">
        <FontAwesomeIcon icon={faQuoteRight} className="rightquote" />
      </div>

      <p className="testimonials-content">{item.content}</p>

      <div className="divider"></div>

      <div className="testimonal-avatar">
        <img src="Ellipse5.png" alt="testimonal-avatar" className="avatar" />

        <div className="avatar-details">
          <p className="avatar-title">{item.avatarTitle}</p>
          <p className="avatar-role">{item.avatarRole}</p>
        </div>
      </div>
    </div>
  );
}

function CarouselItem() {
  const [slide, setSlide] = useState(1);

  useEffect(() => {
    const testimonialCarousel = document.getElementById("testimonial-carousel");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    prevBtn.addEventListener("click", () => {
      console.log("also working...slide: ", slide);

      // if (slide > 1) {
      //   let prevSlidePx = -((slide-1) * 735);
      //   testimonialCarousel.style.transform = `translateX(${prevSlidePx}px)`;
      //   setSlide(slide - 1);
      // } else {
      //   console.log("heree --->");
      // }

      // if (slide === 1) {
      //   let newSlidePx = -(2 * 735);
      //   testimonialCarousel.style.transform = `translateX(${newSlidePx}px)`;
      //   setSlide(testimonials.length);
      // }
    });

    nextBtn.addEventListener("click", () => {
      console.log("working...slide: ", slide);
      if (slide < testimonials.length) {
        let newSlidePx = -(slide * 735);
        testimonialCarousel.style.transform = `translateX(${newSlidePx}px)`;
        setSlide(slide + 1);
      }
      if (slide === testimonials.length) {
        let newSlidePx = -0;
        testimonialCarousel.style.transform = `translateX(${newSlidePx}px)`;
        setSlide(1);
      }
    });
  }, [slide]);

  // const nextSlide = () => {
  //   const testimonialCarousel = document.getElementById('testimonial-carousel')
  //   console.log("working")
  //   console.log(testimonialCarousel)
  //   if (slide <= testimonials.length - 1) {
  //     testimonialCarousel.style.transform = 'translateX(-735px)'
  //     setSlide(prevSlide => prevSlide + 1)
  //   }
  // };
  // const prevSlide = () => {
  //   console.log("also working");
  //   setSlide(slide === 0 ? testimonials.length - 1 : slide - 1);
  // };

  return (
    <div className="main">
      <div className="circle-left">
        <div className="circle prev-btn">
          <FontAwesomeIcon icon={faAngleLeft} className="prev" />
        </div>
      </div>

      <div className="testimonial-container">
        <div className="testimonial-carousel" id="testimonial-carousel">
          {testimonials.map((item) => {
            return (
              <TestimonialCard
                item={item}
                key={item.id}
                isVisible={slide === item.id}
              />
            );
          })}
        </div>
      </div>

      <div className="circle-right">
        <div className="circle next-btn">
          <FontAwesomeIcon icon={faAngleRight} className="next" />
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;

// console.log("working");
//     console.log("here -> slide is: " + slide);
//     setSlide(slide === testimonials.length - 1 ? 0 : slide + 1);
//     console.log("another -> slide is: " + slide);
