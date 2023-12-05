import React, { useState } from 'react'
import './Testimonial.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faQuoteRight} from '@fortawesome/free-solid-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

function Testimonial() {

// let [slideIndex, setSlideIndex] = useState(1);
// const [slides, setSlides] = useState(0)

// const showSlides = (n) => {
//     if(n > slides.length) {setSlideIndex (1)}
//     if(n < 1) {setSlideIndex (slides.length)}

//     for(let i= 0; i< slides.length; i++) {
//         setSlides([i]).style.display = "none"
//     }
//     setSlides([slideIndex-1]).style.display = 'block'
// }
// const nextSlide = (n) => {
//     showSlides(slideIndex += n)
// }

  return (
    <>
      <div className='testimonials' id='testimonal'>
            <h1>Testimonials</h1>
            <div className='main'>
                    <div className='circle-left'>
                        <div className='circle'>
                        <FontAwesomeIcon icon={faAngleLeft} className="prev"/>
                        </div>
                    </div>
                <div className='testimonials-card'>
                    <div className='quote1'>
                    <FontAwesomeIcon icon={faQuoteLeft} className='leftquote'/>
                    </div>
                    <div className='quote2'>
                        <FontAwesomeIcon icon={faQuoteRight} className='rightquote'/>
                    </div>
                    <p className='testimonials-content'>This app has been a lifesaver for me. I was struggling to keep track of my blood sugar levels, and this app has made it so easy. 
                    I can now see my trends and patterns, which has helped me to make better decisions about my diabetes management</p>
                    <div className='divider'></div>
                    <div className='testimonal-avatar'>
                        <img src='Ellipse5.png' alt='testimonal-avatar' className='avatar'/>
                        <div className='avatar-details'>
                            <p className='avatar-title'>Grace Julie</p>
                            <p className='avatar-role'>Food Specialist</p>
                        </div>
                    </div>
                </div>
                
                {/* <div className='testimonials-card'>
                    <div className='quote1'>
                    <FontAwesomeIcon icon={faQuoteLeft} className='leftquote'/>
                    </div>
                    <div className='quote2'>
                        <FontAwesomeIcon icon={faQuoteRight} className='rightquote'/>
                    </div>
                    <p className='testimonials-content'>This app has been a lifesaver for me. I was struggling to keep track of my blood sugar levels, and this app has made it so easy. 
                    I can now see my trends and patterns, which has helped me to make better decisions about my diabetes management</p>
                    <div className='divider'></div>
                    <div className='testimonal-avatar'>
                        <img src='Ellipse5.png' alt='testimonal-avatar' className='avatar'/>
                        <div className='avatar-details'>
                            <p className='avatar-title'>Grace Julie</p>
                            <p className='avatar-role'>Food Specialist</p>
                        </div>
                    </div>
                </div> */}
                <div className='circle-right'>
                        <div className='circle'>
                        <FontAwesomeIcon icon={faAngleRight} className="next"/>
                        </div>
                    </div>
            </div> 
            <div className="dotIndicator">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
    </>
  )
}

export default Testimonial
