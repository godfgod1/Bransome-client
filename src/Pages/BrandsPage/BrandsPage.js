import React, { useState, Component } from "react";

import SearchBar from "../../components/SearchBar";
import FooterContent from "../../components/FooterContent";

import brands from "../DummyData/brandsLogo";
import BrandScreen from "./BrandScreen";
import CategoryBtn from "./CategoryBtn";

const categoryList = ["All", ...new Set(brands.map((b) => b.category))];
console.log(categoryList);

const BrandPages = ({ match }) => {
  const [showBrand, setShowBrand] = useState(brands);
  const [categoriesBtn, setCategoriesBtn] = useState(categoryList);

  const filterBrand = (btn) => {
    if (btn === "All") {
      setShowBrand(brands);
      return;
    }
    const filteredBrand = brands.filter((b) => b.category === btn);
    setShowBrand(filteredBrand);
  };
  return (
    <>
      <div id="brands_view">
        <div className="brand_left_view">
          <header className="brand_header">
            <h2>좋아하는 브랜드를 마이페이지에 담아보세요.</h2>
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

          {/* <Router>
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
          </Router> */}
          <CategoryBtn
            categoriesBtn={categoriesBtn}
            filterBrand={filterBrand}
          />
        </div>
        <div className="brand_right_view">
          <BrandScreen showBrand={showBrand} />
        </div>
      </div>
      <FooterContent />
    </>
  );
};

export default BrandPages;
