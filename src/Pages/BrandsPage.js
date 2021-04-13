import react, { Component } from "react";
import {
  NavLink as Link,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import netflix from "../images/test.netflix.png";
import search from "../images/search.icon.svg";
import "../css/Brands.css";
import SearchBar from "../components/SearchBar";
import FooterContent from "../components/FooterContent";

const Brand = ({ match }) => {
  return (
    <>
      <div id="brands_view">
        <div className="brand_left_view">
          <header className="brand_header">
            <h2>
              좋아하는 브랜드를 <br />
              마이페이지에 <br />
              담아보세요
            </h2>
          </header>
          <div className="brand_search_box">
            <SearchBar />
            {/* <input
            type="text"
            className="searchingBox"
            placeholder="검색어를 입력하세요"
          ></input>
          <img className="glass" src={search} /> */}
          </div>
          <Router>
            <div className="brand_categories">
              <Link to={`${match.url}/All`} className="brand_category">
                <span className="categories_btn All">전체</span>
              </Link>
              <Link to={`${match.url}/restaurant`} className="brand_category">
                <span className="categories_btn restaurant">
                  카페/프렌차이즈
                </span>
              </Link>
              <Link to={`${match.url}/eletronics`} className="brand_category">
                <span className="categories_btn eletronics">전자기기</span>
              </Link>
              <Link to={`${match.url}/media`} className="brand_category">
                <span className="categories_btn media">IT/미디어</span>
              </Link>
              <Link to={`${match.url}/automobile`} className="brand_category">
                <span className="categories_btn automobile">자동차</span>
              </Link>
            </div>
          </Router>
        </div>
        <div className="brand_right_view">
          <div className="brand_scroll_content">dd</div>
        </div>
      </div>
      <FooterContent />
    </>
  );
};

export default Brand;
