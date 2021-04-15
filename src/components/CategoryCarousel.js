import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const CategoryCarousel = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          zIndex: 10,
          background: "var(--main-btn-color)",
          width: "50px",
          height: "50px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          zIndex: 10,
          background: "var(--main-btn-color)",
          width: "50px",
          height: "50px",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <article className="category-container">
      <Slider {...settings}>
        <div className="d">dd</div>
        <div className="d">dd</div>
        <div className="d">dd</div>
        <div className="d">dd</div>
        <div className="d">dd</div>
        <div className="d">dd</div>
        <div className="d">dd</div>
        <div className="d">dd</div>
        <div className="d">dd</div>
        <div className="d">dd</div>
        <div className="d">dd</div>
        <div className="d">dd</div>
        <div className="d">dd</div>
        <div className="d">dd</div>
        <div className="d">dd</div>
        <div className="d">dd</div>
      </Slider>
    </article>
  );
};

export default CategoryCarousel;
