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

const Brand = ({match}) => {
  return (
    <div className="BrandPage">
       <div className="left-Brand">
         <div className="header-Brand">
           <span>좋아하는 브랜드를 <br/>마이페이지에 <br/>담아보세요</span>
         </div>
         <div className="searching">
           <input type="text" className="searchingBox" placeholder="검색어를 입력하세요"></input>
           <img className="glass" src={search}/>
         </div>
         <Router>
          <div className="menu">
              <Link to={`${match.url}/All`} className="brandMenu">
                <span className="All">전체</span>
              </Link>
              <Link to={`${match.url}/restaurant`} className="brandMenu">
                <span className="restaurant">카페/프렌차이즈</span>
              </Link>
              <Link to={`${match.url}/eletronics`} className="brandMenu">
                <span className="eletronics">전자기기</span>
              </Link>
              <Link to={`${match.url}/media`} className="brandMenu">
                <span className="media">IT/미디어</span>
              </Link>
              <Link to={`${match.url}/automobile`} className="brandMenu">
                <span className="automobile">자동차</span>
              </Link>
          </div>
        </Router>
       </div>
       <div className="right-Brand">
          <Link to="/brandinfo" exact className="Brand-logo">
            <img id="logo" src={netflix} />
          </Link>
       </div>
    </div>
  );
};

export default Brand;
