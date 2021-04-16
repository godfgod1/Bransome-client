import React, { useState, Component, useEffect } from "react";

import SearchBar from "../../components/SearchBar";
import FooterContent from "../../components/FooterContent";

import brands from "../DummyData/brandsLogo";
import BrandScreen from "./BrandScreen";
import CategoryBtn from "./CategoryBtn";

// const categoryList = ["All", ...new Set(brands.map((b) => b.category))];
// console.log(categoryList);

const BrandPages = ({ match }) => {
  const [showBrand, setShowBrand] = useState([]);
  const [categoriesBtn, setCategoriesBtn] = useState("All");

  // const filterBrand = () => {
  //   if (categoriesBtn === "All") {
  //     setShowBrand(brands);
  //     return;
  //   }
  //   const filteredBrand = brands.filter((b) => b.category === categoriesBtn);
  //   setShowBrand(filteredBrand);
  // };

  useEffect(() => {
    categoriesBtn === "All"
      ? setShowBrand(brands)
      : setShowBrand(brands.filter((b) => b.category === categoriesBtn));
  }, [categoriesBtn]);

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
          {/* {filterBrand.map((name, idx) => {
            return (
              <>
                <CategoryBtn
                  key={idx}
                  name={name.category}
                  tagActive={categoriesBtn === name.category ? true : false}
                  handleSetTag={setCategoriesBtn}
                />
              </>
            );
          })} */}

          <article className="category_btn_box">
            <CategoryBtn
              name="All"
              categoryActive={categoriesBtn === "All" ? true : false}
              handleSetCategory={setCategoriesBtn}
            />
            <CategoryBtn
              name="IT&미디어"
              categoryActive={categoriesBtn === "IT&미디어" ? true : false}
              handleSetCategory={setCategoriesBtn}
            />
            <CategoryBtn
              name="커피&음료"
              categoryActive={categoriesBtn === "커피&음료" ? true : false}
              handleSetCategory={setCategoriesBtn}
            />
            <CategoryBtn
              name="자동차"
              categoryActive={categoriesBtn === "자동차" ? true : false}
              handleSetCategory={setCategoriesBtn}
            />
          </article>
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
