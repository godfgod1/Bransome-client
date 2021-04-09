import React, { useState, useRef, useEffect } from "react";
import SlideCarousel from "../../components/SlideCarousel";

let slidearr = [1, 2, 3, 4, 5, 6];
let slidlen = slidearr.length;

const StoryView = () => {
  // const dispatch = useDispatch();
  // const clickNextSlide = () => dispatch();
  // const clickPrevSlide = () => dispatch();

  return (
    <article className="home_view_container2">
      <div className="view2_content_box-1">
        <SlideCarousel />
      </div>
      <div className="view2_content_box-2">
        <SlideCarousel />
      </div>
    </article>
  );
};

export default StoryView;
