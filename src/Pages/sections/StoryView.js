import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import slider from "./fakedata/fakeComments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretSquareLeft,
  faCaretSquareRight,
} from "@fortawesome/free-solid-svg-icons";

let slidearr = [1, 2, 3, 4, 5, 6];
let slidlen = slidearr.length;
let length = slider.length - 1;

console.log(length);
const StoryView = () => {
  // const dispatch = useDispatch();
  // const clickNextSlide = () => dispatch();
  // const clickPrevSlide = () => dispatch();

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

  const carouselDotClick = (tg) => {};
  return (
    <article className="home_view_container2">
      <div className="view2_content_box">
        <p>이렇게 사용해야한다!</p>
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
      </div>
    </article>
  );
};

export default StoryView;
