import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import slider from "./fakedata/fakeComments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

let length = slider.length - 1;
console.log(
  slider.map((s, i) => {
    return s.title, s.urls;
  }),
);
const StoryView = () => {
  const dispatch = useDispatch();
  const clickNextSlide = () => dispatch();
  const clickPrevSlide = () => dispatch();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide === length ? 0 : currentSlide + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const prevSlides = () => {
    setCurrentSlide(currentSlide === 1 ? length : currentSlide - 1);
  };
  const nextSlides = () => {
    setCurrentSlide(currentSlide === length ? 0 : currentSlide + 1);
  };

  return (
    <article className="home_view_container2">
      <div className="view2_content_box">
        <div>캐로셀박스</div>
        <button onClick={prevSlides}>버튼</button>
        <button onClick={nextSlides}>버튼</button>
        {currentSlide}
        <section className="carousel_screen_container">
          {slider.map((slide, idx) => (
            <div
              key={idx}
              className={
                idx === currentSlide ? "slides active" : "slide-content"
              }
            >
              <img className="slide-image" src={slide.urls} alt="" />
              <h3 className="slide-title">{slide.title}</h3>
            </div>
          ))}
        </section>
      </div>
    </article>
  );
};

export default StoryView;
