import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import slider from "../Pages/sections/fakedata/fakeSlides";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretSquareLeft,
  faCaretSquareRight,
} from "@fortawesome/free-solid-svg-icons";
let length = slider.length - 1;
const SlideCarousel = () => {
  const [transitionX, setTransitionX] = useState(0);
  const [barActive, setBarActiove] = useState(0);

  const leftSlides = () => {
    console.log(transitionX);
    transitionX === 0
      ? setTransitionX(-100 * length)
      : setTransitionX(transitionX + 100);
  };

  const rightSlides = () => {
    console.log(transitionX);
    transitionX === -100 * length
      ? setTransitionX(0)
      : setTransitionX(transitionX - 100);
  };

  return (
    <>
      <p>사용하는 방법!</p>
      <form id="btn_box">
        <FontAwesomeIcon
          icon={faCaretSquareRight}
          data-aos="zoom-in"
          className="carousel_btn carousel_btn_right"
          onClick={rightSlides}
        >
          버튼
        </FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faCaretSquareLeft}
          data-aos="zoom-in"
          className="carousel_btn carousel_btn_left"
          onClick={leftSlides}
        >
          버튼
        </FontAwesomeIcon>
      </form>
      <div className="carousel_screen_container" data-aos="zoom-in">
        {slider.map((slide, idx) => (
          <div
            key={idx}
            className="carousel_slide"
            data-aos="zoom-in"
            style={{ transform: `translateX(${transitionX}%)` }}
          >
            {/* {slide} */}
            <img className="slide-image" src={slide.urls} alt="" />
            <h1 className="slide-title">{slide.title}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default SlideCarousel;
