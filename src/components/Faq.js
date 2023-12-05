import React, { useState } from "react";
import "./Faq.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";

const faqs = [
  {
    question: "What does SugrMe do?",
    answer: "We provide tracking solutions to diabetes patients",
  },
  {
    question: "What does SugrMe do?",
    answer: "We provide tracking solutions to diabetes patients",
  },
  {
    question: "What does SugrMe do?",
    answer: "We provide tracking solutions to diabetes patients",
  },
  {
    question: "What does SugrMe do?",
    answer: "We provide tracking solutions to diabetes patients",
  },
  {
    question: "What does SugrMe do?",
    answer: "We provide tracking solutions to diabetes patients",
  },
];

function Faq() {
  const [click, setClick] = useState(null);

  const toggle = (i) => {
    if (click === i) {
      return setClick(null);
    }
    setClick(i);
  };

  return (
    <div className="faqsection" id="faq">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        {faqs.map((item, idx) => {
          return (
            <div className="faq">
              <h3 className="faq-title">
                {item.question}
                <button className="faq-toggle" onClick={() => toggle(idx)}>
                  <FontAwesomeIcon
                    icon={click === idx ? faTimes : faChevronDown}
                  />
                </button>
              </h3>
              <p className={click === idx ? "faq-text show" : "faq-text"}>
                {item.answer}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faq;

/* <div className='faq-container'>
                <div className='faq active'>
                    <h3 className='faq-title'>What does SugrMe do?</h3>
                    <p className='faq-text'>We provide tracking solutions to diabetes patients</p>
                    <button className='faq-toggle'>
                        <FontAwesomeIcon icon={faChevronDown} className='faq-down'/>
                        <FontAwesomeIcon icon={faTimes} className='faq-times'/>
                    </button>
                </div>
                <div className='faq'>
                    <h3 className='faq-title'>What does SugrMe do?</h3>
                    <p className='faq-text'>We provide tracking solutions to diabetes patients</p>
                    <button className='faq-toggle'>
                    <FontAwesomeIcon icon={faChevronDown} className='faq-down'/>
                        <FontAwesomeIcon icon={faTimes} className='faq-times'/>
                    </button>
                </div>
                <div className='faq'>
                    <h3 className='faq-title'>What does SugrMe do?</h3>
                    <p className='faq-text'>We provide tracking solutions to diabetes patients</p>
                    <button className='faq-toggle'>
                    <FontAwesomeIcon icon={faChevronDown} className='faq-down'/>
                        <FontAwesomeIcon icon={faTimes} className='faq-times'/>
                    </button>
                </div>
                <div className='faq'>
                    <h3 className='faq-title'>What does SugrMe do?</h3>
                    <p className='faq-text'>We provide tracking solutions to diabetes patients</p>
                    <button className='faq-toggle'>
                    <FontAwesomeIcon icon={faChevronDown} className='faq-down'/>
                        <FontAwesomeIcon icon={faTimes} className='faq-times'/>
                    </button>
                </div>
                <div className='faq'>
                    <h3 className='faq-title'>What does SugrMe do?</h3>
                    <p className='faq-text'>We provide tracking solutions to diabetes patients</p>
                    <button className='faq-toggle'>
                    <FontAwesomeIcon icon={faChevronDown} className='faq-down'/>
                        <FontAwesomeIcon icon={faTimes} className='faq-times'/>
                    </button>
                </div>
                </div>                 */
