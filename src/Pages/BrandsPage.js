import react from "react";
import {
  NavLink as Link,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import netflix from "../images/test.netflix.png";

const Brand = () => {
  return (
    <div>
      <div id= "left-side"><div>좋아하는 브랜드를 마이페이지에 담아보세요</div>
      <div>
        <input>
        <img src="https://i.pinimg.com/474x/b6/ce/20/b6ce200fec0ebe98d1ccd69a7adb7796.jpg"/>
        </input>
        </div>
        <div class= "tag"><span>전체</span><span>카페/프랜차이즈</span>
        <span>전자기기</span><span>IT/미디어</span><span>자동차</span>
        </div></div>
        <div id="right-side">
          <Link to="/brandinfo" exact className="Brand-logo">
            <img id="logo" src={netflix} />
          </Link>
        </div>
    </div>
  );
};

export default Brand;
