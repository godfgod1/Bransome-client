import React, { useRef } from "react";
import { Link, Route } from "react-router-dom";
import Slider from "react-slick";
import CategoryMenu from "./CategoryMenu";
import ss from "../logos/categoryAll.jpg";
import sss from "../logos/categoryDrink.png";
import ssss from "../logos/categoryIT.jpg";
import sssss from "../logos/categoryCar.jpg";
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
      <Route>
        <Slider {...settings}>
          <li className="category_best_btn">
            <img className="category_image" src={ss} />
            <Link className="category_best_btn" to="/best20/all">
              전체
            </Link>
          </li>
          <li className="category_best_btn">
            <img className="category_image" src={ssss}></img>
            <Link className="category_best_btn" to="/best20/elec">
              IT 및 미디어 브랜드
            </Link>
          </li>
          <li className="category_best_btn">
            <img className="category_image" src={sss}></img>
            <Link className="category_best_btn" to="/best20/coffee">
              음료 및 커피 브랜드
            </Link>
          </li>
          <li className="category_best_btn">
            <img className="category_image" src={sssss}></img>
            <Link className="category_best_btn" to="/best20/car">
              자동차 브랜드
            </Link>
          </li>
          <li className="category_best_btn">
            <img className="category_image" src={sss}></img>
            <Link className="category_best_btn" to="/best20/it">
              유통 및 의류
            </Link>
          </li>
        </Slider>
      </Route>
    </article>
  );
};

export default CategoryCarousel;
